import { Button } from "@ui/button";
import { ArrowRight, Calculator, Clock } from "lucide-react";

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
            Stop Losing Money.
            <br />
            <span className="text-accent-foreground">Start Making More.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-body max-w-2xl mx-auto">
            300+ shops are already saving $5,000/month. Your shop should be
            next.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="cta"
              className="text-xl px-10 py-5 font-semibold"
            >
              <Calculator className="mr-3" />
              See Your Shop's Potential Savings
              <ArrowRight className="ml-3" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-10 py-5 bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold"
            >
              <Clock className="mr-2" />
              Watch 2-Minute Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">
                Complete Setup
              </div>
              <div className="text-white/80 font-body">
                We migrate everything
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">
                $5K+ Guarantee
              </div>
              <div className="text-white/80 font-body">
                Save money or money back
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-heading mb-2">
                Day 1 Results
              </div>
              <div className="text-white/80 font-body">
                Techs productive immediately
              </div>
            </div>
          </div>

          {/* Final Hook */}
          <div className="mt-16 bg-white/10 border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              If you're waiting for Fullbay to load, we need to talk.
            </h3>
            <div className="text-accent-foreground font-semibold text-xl">
              Your transformation starts with one click.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
