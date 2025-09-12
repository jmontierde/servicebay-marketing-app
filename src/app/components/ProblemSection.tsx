import { AlertTriangle, Clock, Volume2, MessageSquare } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Slow Dispatch",
      description: "45-minute dispatch times killing productivity and customer satisfaction"
    },
    {
      icon: Volume2,
      title: "Noisy Environments",
      description: "Can't use traditional voice tools in loud workshop environments"
    },
    {
      icon: MessageSquare,
      title: "Scattered Communication", 
      description: "Customer updates lost in phone calls, texts, and paper notes"
    },
    {
      icon: AlertTriangle,
      title: "Reactive Breakdowns",
      description: "Emergency repairs cost 3x more than preventive maintenance"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Fleet repair shops run on 
            <span className="text-primary"> thin margins</span> and 
            <span className="text-primary"> outdated systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Traditional repair shop management creates bottlenecks that cost time, money, and customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;