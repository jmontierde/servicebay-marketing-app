import { Button } from "@ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-trucks.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium">
              ✅ Replaces Fullbay Completely
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
            Your Techs Create
            <br />
            <span className="text-accent-foreground">Service Orders</span>
            <br />
            in 2 Minutes. By Voice.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-body leading-relaxed">
            Stop losing $10K/month in missed parts. Start billing everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              Watch 2-Minute Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2" />
              Calculate Your Lost Revenue
            </Button>
          </div>

          {/* Money Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">$10,500</div>
              <div className="text-white/80 font-body">Monthly Net Gain</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">300+</div>
              <div className="text-white/80 font-body">Shops Saving Money</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">98%</div>
              <div className="text-white/80 font-body">Parts Billing Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;