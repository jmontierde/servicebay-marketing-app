"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true
  } = options;
  
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce
  });
  
  return { ref, isInView };
};

// Alternative hook using Intersection Observer for more control
export const useScrollAnimationObserver = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "-100px"
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView && (!hasTriggered || !triggerOnce)) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsInView(inView);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin, hasTriggered]);
  
  return { ref, isInView };
};