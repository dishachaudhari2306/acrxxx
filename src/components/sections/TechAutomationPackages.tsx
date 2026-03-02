import { Check, Settings, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TechAutomationPackages = () => {
  const packages = [
    {
      name: "Web App Starter",
      price: "₹39,999",
      period: "one-time",
      icon: Settings,
      description: "Custom web application",
      features: [
        "1 workflow automation",
        "1 user role",
        "Database integration",
        "Admin panel",
        "Mobile responsive",
      ],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "ERP Lite",
      price: "₹59,999",
      period: "one-time",
      icon: Database,
      description: "Complete business management",
      features: [
        "Sales management",
        "Customer database",
        "Billing & invoicing",
        "Reports & analytics",
        "Staff logins",
        "Data backup",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Automation Pack",
      price: "₹9,999",
      period: "one-time",
      icon: Zap,
      description: "Automate repetitive tasks",
      features: [
        "2 Google AppScript automations",
        "CRM automation",
        "Invoice automation",
        "Email notifications",
        "Setup & training",
      ],
      gradient: "from-primary to-amber-500",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Tech & Automation</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Stop Doing Things <span className="gradient-text">Manually</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom apps and automation to save hours every week.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-3xl p-8 border border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>

                <div className="mb-8 relative">
                  <h3 className="text-lg font-heading font-bold mb-3">{pkg.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-heading font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8 relative">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full relative" size="lg">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAutomationPackages;
