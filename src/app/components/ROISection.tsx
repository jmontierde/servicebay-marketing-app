import { Calculator } from "lucide-react";
import { Card, CardContent } from "@ui/card";
import { Button } from "@ui/button";

const ROISection = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            The Money Section
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
            Stop losing money. Start making more.
          </p>
        </div>

        {/* Financial Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-red-50/10 border-red-300/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-200 mb-6 text-center">
                Money You&rsquo;re Losing Every Month
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Missed parts:</span>
                  <span className="text-2xl font-bold text-red-300">
                    $5,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Incorrect labor:</span>
                  <span className="text-2xl font-bold text-red-300">
                    $3,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Comeback costs:</span>
                  <span className="text-2xl font-bold text-red-300">
                    $2,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Overtime inefficiency:</span>
                  <span className="text-2xl font-bold text-red-300">
                    $2,000
                  </span>
                </div>
                <div className="border-t border-red-300/30 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">
                      Total Lost:
                    </span>
                    <span className="text-3xl font-bold text-red-300">
                      $12,000
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50/10 border-green-300/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-200 mb-6 text-center">
                With ServiceBay
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">ServiceBay Investment:</span>
                  <span className="text-2xl font-bold text-white">$1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Money Recovered:</span>
                  <span className="text-2xl font-bold text-green-300">
                    +$12,000
                  </span>
                </div>
                <div className="border-t border-green-300/30 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">
                      Your Net Gain:
                    </span>
                    <span className="text-3xl font-bold text-green-300">
                      $10,500
                    </span>
                  </div>
                  <div className="text-center text-green-200 text-sm mt-2">
                    Every single month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Case Study */}
        <div className="bg-white/10 rounded-xl p-8 border border-white/20 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Case Study</h3>
            <h4 className="text-xl font-semibold text-accent-foreground mb-4">
              &ldquo;How Johnson Diesel Went from 30-Minute Orders to 2&rdquo;
            </h4>
            <p className="text-lg text-white/90 mb-4">
              &ldquo;Before ServiceBay, creating a service order took our techs 30+
              minutes. They had to stop working, clean their hands, type
              everything out. Now they just talk while they work. 2 minutes,
              done.&rdquo;
            </p>
            <div className="text-white/70">
              — Mike Johnson, Owner, Johnson Diesel
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-foreground">
                  $8,000
                </div>
                <div className="text-sm text-white/70">Monthly savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-foreground">
                  12 more
                </div>
                <div className="text-sm text-white/70">Jobs per day</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-foreground">
                  2 weeks
                </div>
                <div className="text-sm text-white/70">To full ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 inline-block">
            <div className="text-xl font-bold mb-2">
              Save $5K/month or money back
            </div>
            <div className="text-white/80 mb-4">That&rsquo;s our guarantee</div>
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              <Calculator className="mr-2" />
              See Your Shop&rsquo;s Potential Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
