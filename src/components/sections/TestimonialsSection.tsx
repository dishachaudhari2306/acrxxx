import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amelia K.",
    role: "Founder, DTC Apparel Brand",
    quote:
      "We went from guessing with ads to a clear, repeatable growth system. They treat our money like their own.",
  },
  {
    name: "Rahul S.",
    role: "CEO, B2B SaaS",
    quote:
      "Pipeline, CAC, payback—every metric is tracked and explained. This is the first agency I fully trust with scale.",
  },
  {
    name: "Jordan P.",
    role: "High-Ticket Coach",
    quote:
      "Booked calendars, qualified calls, and clean reporting. They cut the noise and focus on revenue.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#050509] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-24 left-6 w-64 h-64 bg-[rgba(0,123,255,0.25)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00BFFF] mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Trusted by brands that play to win.
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
            We work with brands that demand measurable outcomes and hold us accountable to the numbers.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-2xl border border-zinc-800 bg-[rgba(9,9,14,0.96)] backdrop-blur-xl p-6 flex flex-col justify-between"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(0,123,255,0.16)]/0 via-transparent to-[rgba(0,191,255,0.18)]/0 hover:from-[rgba(0,123,255,0.16)] hover:to-[rgba(0,191,255,0.18)] transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 text-[#00BFFF] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm md:text-[15px] text-zinc-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <figcaption className="relative z-10 mt-5">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

