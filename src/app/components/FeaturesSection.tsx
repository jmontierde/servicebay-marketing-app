import { Clock, AlertTriangle, DollarSign, CheckCircle, Home, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@ui/card";

const FeaturesSection = () => {
  const beforeAfter = [
    {
      before: {
        icon: Clock,
        title: "Working 60-hour weeks",
        color: "red"
      },
      after: {
        icon: Home,
        title: "Home for dinner",
        color: "green"
      }
    },
    {
      before: {
        icon: AlertTriangle,
        title: "15% comeback rate",
        color: "red"
      },
      after: {
        icon: CheckCircle,
        title: "3% comeback rate",
        color: "green"
      }
    },
    {
      before: {
        icon: DollarSign,
        title: "Missing 20% of billable parts",
        color: "red"
      },
      after: {
        icon: TrendingUp,
        title: "Bill 98% of parts",
        color: "green"
      }
    }
  ];

  const trustElements = [
    "Replaces Fullbay Completely",
    "No Training Required",
    "Techs Productive Day One",
    "We Migrate Everything"
  ];

  return (
    <section id="features" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Success Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            See the real difference ServiceBay makes for shop owners like you.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-center text-red-600 mb-8">Before ServiceBay</h3>
              <div className="space-y-6">
                {beforeAfter.map((item, index) => (
                  <Card key={index} className="border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <item.before.icon className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-red-700">
                            {item.before.title}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-700">
                          Techs complaining about Fullbay
                        </h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center text-accent mb-8">After ServiceBay</h3>
              <div className="space-y-6">
                {beforeAfter.map((item, index) => (
                  <Card key={index} className="border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <item.after.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-accent">
                            {item.after.title}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-accent">
                          Techs actually document everything
                        </h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Building Elements */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Why Shop Owners Trust ServiceBay
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustElements.map((element, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-foreground">{element}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;