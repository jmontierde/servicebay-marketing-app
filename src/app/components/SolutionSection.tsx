import { Zap, Mic, Brain, Cog } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "10x Faster Dispatch",
      description: "AI-powered job assignment reduces dispatch time from 45 minutes to 5 minutes",
      color: "secondary"
    },
    {
      icon: Mic,
      title: "Voice-First AI", 
      description: "Talk naturally in noisy environments - ServiceBay converts speech to structured service orders",
      color: "success"
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "AI trained on 166,000+ repair records predicts failures before breakdowns happen",
      color: "accent"
    },
    {
      icon: Cog,
      title: "Automated Workflows",
      description: "Automatic customer updates, ETAs, payments, and technician assignments",
      color: "industrial"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Why <span className="text-secondary">ServiceBay</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            The AI copilot that transforms your repair shop into a precision operation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className={`w-16 h-16 bg-${solution.color}/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`w-8 h-8 text-${solution.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-accent rounded-lg text-white font-semibold shadow-premium">
            <span className="text-lg">Ready to transform your repair shop?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;