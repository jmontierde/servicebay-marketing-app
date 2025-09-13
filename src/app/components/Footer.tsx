"use client";
import { Separator } from "@ui/separator";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const Footer = () => {
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: linksRef, isInView: linksInView } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="container mx-auto px-6">
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Separator className="mb-8 bg-border" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-muted-foreground font-body mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={
              footerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{
              delay: footerInView ? 0.2 : 0,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            © 2024 ServiceBay. All rights reserved.
          </motion.p>
          <motion.div
            ref={linksRef}
            className="flex space-x-6 font-body"
            initial={{ opacity: 0, x: 20 }}
            animate={linksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              delay: linksInView ? 0.4 : 0,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {[
              { href: "#", text: "Privacy Policy" },
              { href: "#", text: "Terms of Service" },
              { href: "#", text: "Cookie Policy" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  linksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{
                  delay: linksInView ? 0.6 + index * 0.1 : 0,
                  duration: 0.4,
                }}
              >
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
