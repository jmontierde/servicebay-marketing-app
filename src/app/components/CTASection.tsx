import { Button } from "@ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Lead the Future of 
            <br />
            <span className="text-secondary">Fleet Repair</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-body max-w-2xl mx-auto">
            Join hundreds of fleet repair shops already using AI to transform their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" variant="cta" className="text-xl px-10 py-5 font-semibold">
              <Calendar className="mr-3" />
              Book a Demo
              <ArrowRight className="ml-3" />
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-5 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold">
              Contact Sales
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">Free Setup</div>
              <div className="text-white/80 font-body">Complete onboarding included</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">30-Day Trial</div>
              <div className="text-white/80 font-body">Risk-free evaluation period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">24/7 Support</div>
              <div className="text-white/80 font-body">Expert help when you need it</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;