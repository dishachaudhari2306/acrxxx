import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WebsitePackages = () => {
  const packages = [
    {
      name: "Starter Web Presence",
      price: "₹3,999",
      description: "Perfect for getting online quickly",
      features: [
        "1-page website",
        "Mobile friendly design",
        "Contact form",
        "WhatsApp button",
        "Google Maps integration",
        "Free subdomain + SSL",
      ],
      popular: false,
    },
    {
      name: "Business Website",
      price: "₹9,999",
      description: "Complete online presence for growing businesses",
      features: [
        "5 pages website",
        "Custom colors + logo",
        "Lead capture forms",
        "1 year free hosting",
        "Admin panel access",
        "Basic SEO setup",
      ],
      popular: true,
    },
    {
      name: "Pro Website",
      price: "₹19,999",
      description: "Full-featured site for serious businesses",
      features: [
        "10 pages website",
        "Speed optimized",
        "Advanced SEO ready",
        "Live chat + CRM",
        "Blog section",
        "Analytics dashboard",
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

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
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Website Packages</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Get Online <span className="gradient-text">Fast</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional websites at prices that make sense for Indian businesses.
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
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-xl shadow-primary/10"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 gradient-bg text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Package info */}
                <div className="text-center mb-8">
                  <h3 className="text-lg font-heading font-bold mb-3">{pkg.name}</h3>
                  <div className="mb-3">
                    <span className="text-5xl font-heading font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        pkg.popular ? "gradient-bg" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackages;
