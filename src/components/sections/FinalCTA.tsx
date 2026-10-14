import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#000000]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,123,255,0.65),_transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(0,191,255,0.8),_transparent_60%)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.9),_rgba(15,23,42,0.96))]" />
      <div className="absolute inset-0 section-pattern opacity-25 mix-blend-screen" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
            Start scaling with a{" "}
            <span className="text-[#2563EB]">strategy call, not a sales pitch.</span>
          </h2>
          
          <p className="text-sm md:text-base text-zinc-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Share where you are, where you want to go and what you&apos;re stuck on. We&apos;ll map a clear, realistic
            plan across product, tech, brand and performance.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto group bg-[linear-gradient(135deg,#1D4ED8,#2563EB)] hover:bg-[linear-gradient(135deg,#2563EB,#3B82F6)] shadow-[0_0_35px_rgba(37,99,235,0.9)]"
            >
              <Phone className="w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs md:text-sm text-zinc-300 mt-8 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-primary" />
            Or call directly: <a href="tel:+447478034205" className="font-semibold text-white hover:text-primary transition-colors">+44 7478 034205</a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
