import { Zap, Wallet, Package, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const WhyConversion = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your website live in days, not months. We value your time.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description: "Premium quality at prices designed for Indian small businesses.",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Package,
      title: "One-Stop Solution",
      description: "Website, marketing, automation — everything under one roof.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Indian Business Focused",
      description: "We understand the local market and what works for Indian customers.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: HeartHandshake,
      title: "No Tech Headache",
      description: "We handle the tech complexity. You focus on running your business.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    { value: "500+", label: "Businesses Served" },
    { value: "7 Days", label: "Average Delivery" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "₹0", label: "Hidden Fees" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Why <span className="gradient-text">CONVERSION</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another agency. We're your growth partner.
            </p>
          </motion.div>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-card rounded-2xl p-6 border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyConversion;
