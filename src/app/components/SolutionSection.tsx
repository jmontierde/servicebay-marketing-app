import { Mic, Brain, DollarSign } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      step: "1",
      icon: Mic,
      title: "Tech Says It",
      description: "\"Unit 447 needs brakes\"",
      detail: "Just talk. No typing, no forms."
    },
    {
      step: "2",
      icon: Brain,
      title: "AI Captures It",
      description: "Parts, labor, everything documented",
      detail: "AI knows your parts catalog and labor times."
    },
    {
      step: "3",
      icon: DollarSign,
      title: "You Bill It",
      description: "Nothing missed, no comebacks",
      detail: "98% parts billing rate. Every hour captured."
    }
  ];

  const benefits = [
    {
      title: "Never Miss Billing Another Part",
      subtitle: "Instead of 'Voice-to-Service Order'",
      description: "Techs just talk. AI ensures every part, every hour gets on the invoice."
    },
    {
      title: "Right Tech, Right Job, Every Time",
      subtitle: "Instead of 'AI Dispatcher Copilot'",
      description: "AI knows who's fastest at what. No more guessing."
    },
    {
      title: "Sell More PM Work",
      subtitle: "Instead of 'Predictive Maintenance'",
      description: "AI tells you what's about to break. Customers love proactive shops."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Guide Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Built by Shop Owners Who Got Fed Up
            </h2>
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Barry, Founder</div>
                  <div className="text-muted-foreground">"I ran a shop for 20 years. I built this to solve MY problems."</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Saving 300+ shops $5,000/month</div>
                <div>• Techs actually LOVE using it</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Plan */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-heading text-center text-foreground mb-12">
            The 3-Step Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-xl font-bold font-heading text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-lg text-primary font-semibold mb-2">
                  {step.description}
                </p>
                <p className="text-muted-foreground font-body">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Reframed */}
        <div>
          <h3 className="text-3xl font-bold font-heading text-center text-foreground mb-12">
            Features Reframed as Benefits
          </h3>
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="text-sm text-accent font-medium mb-2">{benefit.subtitle}</div>
                <h4 className="text-2xl font-bold font-heading text-foreground mb-4">
                  {benefit.title}
                </h4>
                <p className="text-lg text-muted-foreground font-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;