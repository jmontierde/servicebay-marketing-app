"use client";
import { motion } from "framer-motion";
import { Brain, DollarSign, Mic } from "lucide-react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const SolutionSection = () => {
  const { ref: guideRef, isInView: guideInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      step: "1",
      icon: Mic,
      title: "Tech Says It",
      description: '"Unit 447 needs brakes"',
      detail: "Just talk. No typing, no forms.",
    },
    {
      step: "2",
      icon: Brain,
      title: "AI Captures It",
      description: "Parts, labor, everything documented",
      detail: "AI knows your parts catalog and labor times.",
    },
    {
      step: "3",
      icon: DollarSign,
      title: "You Bill It",
      description: "Nothing missed, no comebacks",
      detail: "98% parts billing rate. Every hour captured.",
    },
  ];

  const benefits = [
    {
      title: "Never Miss Billing A Part",
      // subtitle: "Instead of 'Voice-to-Service Order'",
      description:
        "Techs just talk. AI ensures every part, every hour gets on the invoice.",
    },
    {
      title: "Right Tech, Right Job, Every Time",
      // subtitle: "Instead of 'AI Dispatcher Copilot'",
      description: "AI knows who's fastest at what. No more guessing.",
    },
    {
      title: "Stop Breakdowns Before It Happens",
      // subtitle: "Instead of 'Predictive Maintenance'",
      description:
        "AI tells you what's about to break. Customers love proactive shops.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Guide Section */}
        <motion.div
          ref={guideRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={guideInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Expertly Built by Those Who Ran the Shops
            </h2>
            <motion.div
              className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={guideInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: guideInView ? 0.3 : 0, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    Barry, Founder
                  </div>
                  <div className="text-muted-foreground font-semibold">
                    &ldquo;I ran a shop for 20 years. I built this to solve MY
                    problems.&rdquo;
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Saving 300+ shops $5,000/month</div>
                <div>• Techs actually LOVE using it</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3-Step Plan */}
        <div ref={stepsRef} className="mb-20">
          <motion.h3
            className="text-3xl font-bold font-heading text-center text-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={stepsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: stepsInView ? 0.2 : 0, duration: 0.6 }}
          >
            The 3-Step Plan
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  delay: stepsInView ? 0.3 + index * 0.2 : 0,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">
                    {step.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-heading text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-lg text-primary font-semibold mb-2">
                  {step.description}
                </p>
                <p className="text-muted-foreground font-body">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Reframed */}
        <div ref={benefitsRef}>
          <motion.h3
            className="text-3xl font-bold font-heading text-center text-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: benefitsInView ? 0.2 : 0, duration: 0.6 }}
          >
            Built Around Your Needs
          </motion.h3>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-8"
                initial={{ opacity: 0, y: 40 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  delay: benefitsInView ? 0.4 + index * 0.3 : 0,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <div className="text-sm text-accent font-medium mb-2">
                  {/* {benefit.subtitle} */}
                </div>
                <h4 className="text-2xl font-bold font-heading text-foreground mb-4">
                  {benefit.title}
                </h4>
                <p className="text-lg text-muted-foreground font-body">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
