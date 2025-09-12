import {
  Mic2,
  Users,
  Smartphone,
  Shield,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@ui/card";
const FeaturesSection = () => {
  const features = [
    {
      icon: Mic2,
      title: "Voice-to-Service Order",
      description:
        "Speak naturally in loud workshops - AI converts voice to structured work orders instantly",
    },
    {
      icon: Users,
      title: "AI Dispatcher Copilot",
      description:
        "Intelligent technician assignment based on skills, location, and current workload",
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description:
        "Machine learning predicts component failures before breakdowns occur",
    },
    {
      icon: Shield,
      title: "White-Glove Automation",
      description:
        "Automated customer communication, billing, and documentation workflows",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Designed for technicians who work with their hands, not keyboards",
    },
    {
      icon: Wrench,
      title: "Enterprise Integration",
      description:
        "Seamlessly connects with existing fleet management and accounting systems",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Why choose us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Everything you need to run a modern, efficient fleet repair
            operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
