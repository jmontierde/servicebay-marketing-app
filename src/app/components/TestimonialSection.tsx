import { Quote } from "lucide-react";
import { Card, CardContent } from "@ui/card";
const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Before ServiceBay, our dispatch took 45 minutes per job. Now it's 5 minutes. That's 8 more jobs per day for our team.",
      author: "Sarah Mitchell",
      role: "Operations Manager",
      company: "Metro Fleet Services"
    },
    {
      quote: "The voice commands work perfectly even in our loudest bay. My technicians can create work orders while they're under the truck.",
      author: "Carlos Rodriguez", 
      role: "Lead Technician",
      company: "Highway Repair Co"
    },
    {
      quote: "The predictive maintenance alerts have saved us from 12 major breakdowns this year. The ROI is incredible.",
      author: "Jennifer Park",
      role: "Fleet Director",
      company: "Logistics Express"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            See how ServiceBay is transforming fleet repair operations across the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-secondary mb-6" />
                <blockquote className="text-lg text-card-foreground font-body mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold font-heading text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground font-body">
                    {testimonial.role}
                  </div>
                  <div className="text-secondary font-body font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;