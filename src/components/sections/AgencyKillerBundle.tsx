import { Check, Star, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AgencyKillerBundle = () => {
  const features = [
    "5-page professional website",
    "Complete branding package",
    "Social media setup (3 platforms)",
    "Google Business Profile",
    "Google Ads setup",
    "1 month full marketing",
    "Lead CRM system",
    "Priority support",
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-0 left-0 w-full h-full section-pattern opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Special badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 gradient-bg px-5 py-2.5 rounded-full shadow-lg animate-gradient">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-bold text-primary-foreground uppercase tracking-wide">Agency Killer Deal</span>
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-[2rem] p-8 md:p-12 border-2 border-primary shadow-2xl shadow-primary/10 overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent" />

            <div className="relative text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Business-in-a-Box
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Everything an agency charges ₹1–2 lakh for — you get for a fraction of the price.
                </p>
              </motion.div>
              
              {/* Price comparison */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <span className="text-2xl text-muted-foreground line-through opacity-60">₹1,50,000+</span>
                <span className="text-6xl md:text-7xl font-heading font-bold gradient-text">₹49,999</span>
              </motion.div>
              <p className="text-sm text-muted-foreground">One-time payment • Everything included</p>
            </div>

            {/* Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-12">
                Claim This Deal Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Limited time offer • Only 10 spots available this month
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border"
            >
              {[
                { icon: Star, text: "500+ businesses served" },
                { icon: Star, text: "4.9/5 average rating" },
                { icon: Star, text: "7-day delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-sm text-muted-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyKillerBundle;
