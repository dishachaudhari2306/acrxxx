import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]"
    >
      {/* Glow + gradient background */}
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[rgba(0,123,255,0.45)] blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[420px] w-[420px] rounded-full bg-[rgba(0,191,255,0.45)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,123,255,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,191,255,0.16),_transparent_55%)]" />
        <div className="absolute inset-0 section-pattern opacity-40" />
      </motion.div>

      <div className="container relative z-10 px-4 py-24 lg:py-32">
        <div className="max-w-3xl space-y-9">
          {/* Eyebrow + tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,191,255,0.45)] bg-[rgba(6,15,30,0.9)] px-4 py-2 backdrop-blur-lg"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#00BFFF] shadow-[0_0_18px_rgba(0,191,255,0.9)]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9ca3af]">
              Arcxx Marketing &amp; Consultancy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-[2.5rem] leading-tight md:text-[3.7rem] md:leading-[1.02] lg:text-[4.2rem] font-heading font-bold text-white tracking-tight"
          >
            We Build, Scale &amp; Optimize{" "}
            <span className="text-[#2563EB]">
              Brands That Refuse to Stay Small.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed"
          >
            We engineer end-to-end digital ecosystems — product, tech, brand and performance — so your
            ad spend, funnels and content work as one growth machine, not disconnected tactics.
          </motion.p>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-wrap gap-6 text-xs md:text-sm text-zinc-400"
          >
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                Builds &amp; Ecosystems Shipped
              </p>
              <p className="mt-1 text-lg md:text-xl font-heading font-semibold text-white">
                40+ Brands
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                From First Brief to Go-Live
              </p>
              <p className="mt-1 text-lg md:text-xl font-heading font-semibold text-[#2563EB]">
                20–30 Days
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                Ownership &amp; Execution
              </p>
              <p className="mt-1 text-lg md:text-xl font-heading font-semibold text-white">
                End-to-End
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <Button
              asChild
              variant="hero"
              size="xl"
              className="w-full sm:w-auto bg-[linear-gradient(135deg,#1D4ED8,#2563EB)] hover:bg-[linear-gradient(135deg,#2563EB,#3B82F6)] shadow-[0_0_30px_rgba(37,99,235,0.7)]"
            >
              <a href="#contact" className="flex items-center">
                Book Strategy Call
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border border-[rgba(148,163,184,0.7)] bg-transparent text-slate-100 hover:border-[#2563EB] hover:bg-[rgba(15,23,42,0.9)]"
            >
              <a href="#services">View Services</a>
            </Button>
          </motion.div>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="text-[11px] md:text-xs text-zinc-500 pt-4"
          >
            No templates. No “growth hacks”. Just structured, measurable execution.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
