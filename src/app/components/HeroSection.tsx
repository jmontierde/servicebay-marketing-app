import { Button } from "@ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-trucks.jpg";

const HeroSection = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered fleet repair platform showing modern truck service bay"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-white font-medium">
              🚛 AI-Powered Fleet Management
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
            The AI-Native
            <br />
            <span className="text-secondary">Fleet Repair</span>
            <br />
            Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-body leading-relaxed">
            10x faster dispatch. Voice-powered service orders. Predictive repairs. 
            Automated customer communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">492%</div>
              <div className="text-white/80 font-body">ROI in Year One</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">45min → 5min</div>
              <div className="text-white/80 font-body">Dispatch Time</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white font-heading">34%</div>
              <div className="text-white/80 font-body">Fewer Emergency Repairs</div>
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