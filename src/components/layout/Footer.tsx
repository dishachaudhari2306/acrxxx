import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      <div className="container px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-heading font-bold gradient-text">Arcxx Marketing &amp; Consultancy</span>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              2023 Arcxx Marketing &amp; Consultancy owned by Kreevs Fashion.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/arcxxmediaworks?mdxt=MTRuOG1pZmYwOWt6MA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {[Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Development",
                "Branding & Consultancy",
                "Performance Marketing",
                "Content Production",
                "Packaging & Creative",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Investment", href: "#investment" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+447478034205" className="hover:text-foreground transition-colors">+44 7478 034205</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:Arcxxmediaworks@gmail.com" className="hover:text-foreground transition-colors">Arcxxmediaworks@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arcxx Marketing &amp; Consultancy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built for founders who want systems, not just campaigns.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
