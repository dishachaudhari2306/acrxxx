import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    "Agencies charge lakhs but deliver excuses",
    "Your website looks outdated or doesn't work on mobile",
    "Marketing campaigns that burn money with zero leads",
    "Tech solutions that are too complex to use",
  ];

  const solutions = [
    "One-stop solution: website + marketing + automation",
    "Affordable packages starting at ₹3,999",
    "Fast delivery — no waiting for months",
    "Built for Indian small businesses, not MNCs",
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">The Reality</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Tired of <span className="gradient-text">Wasting Money</span> on Digital Chaos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most business owners struggle with expensive agencies that deliver confusion, not results.
            </p>
          </motion.div>

          {/* Problem vs Solution grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-destructive/5 to-transparent rounded-3xl p-8 border border-destructive/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-bold">The Problem</h3>
              </div>
              <ul className="space-y-5">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-primary/20 shadow-lg shadow-primary/5"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold">The CONVERSION Way</h3>
              </div>
              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground leading-relaxed font-medium">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="#services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
              See what we offer 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
