"use client";
import { motion } from "framer-motion";
import DesktopMockup from "@/assets/desktop-mockup1.png";
import MobileMockup from "@/assets/mobile-mockup1.png";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref: textRef, isInView: textInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={textRef}
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium">
                🚛 AI-Powered Fleet Management
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              The AI-Native
              <br />
              <span className="text-accent-foreground">Fleet Repair</span>
              <br />
              Platform
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-body leading-relaxed">
              10x faster dispatch. Voice-powered service orders. Predictive
              repairs. Automated customer communication.
            </p>

            {/* Money Stats */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <div className="text-3xl font-bold text-white font-heading">
                  $10,500
                </div>
                <div className="text-white/80 font-body">Monthly Net Gain</div>
              </motion.div>

              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div className="text-3xl font-bold text-white font-heading">
                  300+
                </div>
                <div className="text-white/80 font-body">
                  Shops Saving Money
                </div>
              </motion.div>

              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                <div className="text-3xl font-bold text-white font-heading">
                  98%
                </div>
                <div className="text-white/80 font-body">
                  Parts Billing Rate
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Mockups */}
          <motion.div
            ref={imageRef}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Desktop Dashboard Mockup */}
            <div className="relative z-10">
              <Image
                src={DesktopMockup}
                alt="ServiceBay Desktop Dashboard"
                className="w-[40rem] h-auto rounded-xl shadow-2xl transform rotate-[-6deg]"
                width={640}
                height={400}
              />
            </div>

            {/* Mobile Mockup Overlay */}
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Image
                src={MobileMockup}
                alt="ServiceBay Mobile App"
                className="w-64 h-auto rounded-3xl shadow-2xl transform rotate-[8deg]"
                width={256}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
