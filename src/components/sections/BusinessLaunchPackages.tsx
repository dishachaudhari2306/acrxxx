import { Check, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BusinessLaunchPackages = () => {
  const packages = [
    {
      name: "Kickstart",
      price: "₹7,999",
      description: "Launch your business online fast",
      features: [
        "1-page website",
        "WhatsApp & contact form",
        "Google Business Profile setup",
        "8 social media posts",
        "Free hosting + SSL",
      ],
      highlight: false,
    },
    {
      name: "Startup",
      price: "₹19,999",
      description: "Complete digital foundation",
      features: [
        "5-page website",
        "Logo & brand colors",
        "Social media setup",
        "Google Business Profile",
        "12 social media posts",
        "Basic SEO optimization",
      ],
      highlight: true,
    },
    {
      name: "Business Pro",
      price: "₹39,999",
      description: "Full business launch package",
      features: [
        "10-page website",
        "Blog section",
        "CRM + live chat",
        "On-page SEO",
        "1 month marketing",
        "Lead tracking system",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern opacity-30" />
      
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
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Business Launch Packages</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Start Your Business <span className="gradient-text">Right</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to launch — website, branding, and marketing bundled together.
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
                  pkg.highlight
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-xl shadow-primary/10"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 gradient-bg text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      BEST VALUE
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-lg font-heading font-bold mb-3">{pkg.name}</h3>
                  <div className="mb-3">
                    <span className="text-5xl font-heading font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        pkg.highlight ? "gradient-bg" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${pkg.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.highlight ? "hero" : "outline"}
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

export default BusinessLaunchPackages;
