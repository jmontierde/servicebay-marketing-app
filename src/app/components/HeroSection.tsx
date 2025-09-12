import { Button } from "@ui/button";
import { ArrowRight, Play } from "lucide-react";
import DesktopMockup from "@/assets/desktop-mockup.png";
import MobileMockup from "@/assets/mobile-mockup.png";
import Image from "next/image";

const HeroSection = () => {
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
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium">
                🚛 AI-Powered Fleet Management
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Your Techs Create
              <br />
              <span className="text-accent-foreground">Service Orders</span>
              <br />
              in 2 Minutes. By Voice.
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-body leading-relaxed">
              Stop losing $10K/month in missed parts. Start billing everything.
            </p>

            {/* Money Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white font-heading">
                  $10,500
                </div>
                <div className="text-white/80 font-body">Monthly Net Gain</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white font-heading">
                  300+
                </div>
                <div className="text-white/80 font-body">
                  Shops Saving Money
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white font-heading">
                  98%
                </div>
                <div className="text-white/80 font-body">
                  Parts Billing Rate
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
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
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-20">
              <Image
                src={MobileMockup}
                alt="ServiceBay Mobile App"
                className="w-64 h-auto rounded-3xl shadow-2xl transform rotate-[8deg]"
                width={256}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
