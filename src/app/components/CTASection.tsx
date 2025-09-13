"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const CTASection = () => {
  const { ref: headingRef, isInView: headingInView } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: hookRef, isInView: hookInView } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Stop Losing Money.
              <br />
              <span className="text-accent-foreground">Start Making More.</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 font-body max-w-2xl mx-auto">
              300+ shops are already saving $5,000/month. Your shop should be
              next.
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: statsInView ? 0.5 : 0,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {[
              { title: "Complete Setup", description: "We migrate everything" },
              {
                title: "$5K+ Guarantee",
                description: "Save money or money back",
              },
              {
                title: "Day 1 Results",
                description: "Techs productive immediately",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  delay: statsInView ? 0.7 + index * 0.1 : 0,
                  duration: 0.5,
                }}
              >
                <div className="text-2xl font-bold text-white font-heading mb-2">
                  {item.title}
                </div>
                <div className="text-white/80 font-body">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Hook */}
          <motion.div
            ref={hookRef}
            className="mt-16 bg-white/10 border border-white/20 rounded-xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              hookInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{
              delay: hookInView ? 0.8 : 0,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              If you&rsquo;re waiting for your old dispatch systen to load, we
              need to talk.
            </h3>
            <div className="text-accent-foreground font-semibold text-xl">
              Your transformation starts with one click.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
