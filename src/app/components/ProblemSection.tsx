"use client";
import { motion } from "framer-motion";
import { X, Clock, DollarSign, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Fullbay takes forever to load",
      description: "(again)",
    },
    {
      icon: DollarSign,
      title: "Techs forgot to add parts to invoice",
      description: "(again)",
    },
    {
      icon: AlertTriangle,
      title: "Another comeback, something missed",
      description: "(again)",
    },
    {
      icon: Clock,
      title: "You're doing invoices at 9 PM",
      description: "(again)",
    },
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            We Know Your
            <span className="text-primary"> Daily Battle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            If you're waiting for Fullbay to load, we need to talk.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-red-200"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-card-foreground mb-1">
                {problem.title}
              </h3>
              <p className="text-red-600 font-body italic">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Money Lost Section */}
        <motion.div
          className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Your Shop is Leaving Money on the Table:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$5,000", label: "Missed parts/month" },
              { value: "$3,000", label: "Incorrect labor/month" },
              { value: "$2,000", label: "Comeback costs/month" },
              { value: "$2,000", label: "Overtime/month" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-red-600">
                  {item.value}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-6 p-4 bg-red-100 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <div className="text-3xl font-bold text-red-700">
              $12,000/month lost
            </div>
            <div className="text-muted-foreground">
              Total money left on the table
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
