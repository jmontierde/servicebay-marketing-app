import { TrendingUp, Clock, DollarSign, Wrench } from "lucide-react";
import { Card, CardContent } from "@ui/card";

const ROISection = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: "492%",
      label: "ROI in Year One",
      description: "Average return across our customer base",
      color: "success"
    },
    {
      icon: Clock,
      value: "45min → 5min",
      label: "Dispatch Time",
      description: "From job request to technician assignment",
      color: "secondary"
    },
    {
      icon: Wrench,
      value: "34%",
      label: "Fewer Emergency Repairs",
      description: "Through predictive maintenance alerts",
      color: "accent"
    },
    {
      icon: TrendingUp,
      value: "89%",
      label: "Customer Satisfaction",
      description: "Improved communication and faster service",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
            Real metrics from fleet repair shops already using ServiceBay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 bg-${metric.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color === 'primary' ? 'white' : metric.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold font-heading mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-white/70 font-body">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 rounded-lg p-6 border border-white/20">
            <p className="text-xl font-body text-white/90 mb-2">
              "ServiceBay transformed our 50-truck operation. We've cut dispatch time by 90% and our technicians love the voice commands."
            </p>
            <div className="text-white/70 font-body">
              — Mike Peterson, Fleet Manager, Regional Transport
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;