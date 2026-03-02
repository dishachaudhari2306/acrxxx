import { motion } from "framer-motion";
import { GaugeCircle, BrainCircuit, LineChart, Rocket } from "lucide-react";

const points = [
  {
    icon: GaugeCircle,
    title: "End-to-end ownership",
    description:
      "From product and codebase to campaigns and content, we operate as your in-house growth pod, not a vendor.",
  },
  {
    icon: BrainCircuit,
    title: "Data-first decisions",
    description:
      "We make calls based on numbers — CAC, LTV, payback period and retention — not opinions or trends.",
  },
  {
    icon: LineChart,
    title: "Performance before aesthetics",
    description:
      "Everything is designed to move revenue and profitability. Beautiful design is the side effect, not the brief.",
  },
  {
    icon: Rocket,
    title: "Execution speed",
    description:
      "20–30 day build cycles and tight feedback loops so you see movement in weeks, not quarters.",
  },
];

const WhyArcxxSection = () => {
  return (
    <section id="why-arcxx" className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-36 left-0 h-72 w-72 rounded-full bg-[rgba(37,99,235,0.5)] blur-3xl" />
      <div className="absolute -bottom-40 right-6 h-80 w-80 rounded-full bg-[rgba(15,23,42,0.98)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
            Why Arcxx
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Built for founders who think in systems, not campaigns.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl">
            If you&apos;re looking for “just ads” or “just a website”, we&apos;re probably not the right fit.
            If you want a digital ecosystem that compounds, we are.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative rounded-2xl border border-zinc-800 bg-[rgba(15,23,42,0.96)]/95 backdrop-blur-xl p-6 flex gap-4"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(15,23,42,0.96)]/0 via-transparent to-[rgba(37,99,235,0.35)]/0 hover:to-[rgba(37,99,235,0.4)] transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(15,23,42,0.9)] border border-[rgba(37,99,235,0.6)] text-[#60A5FA] shadow-[0_0_22px_rgba(37,99,235,0.6)] mb-4">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-heading font-semibold text-white mb-1.5">{point.title}</h3>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyArcxxSection;

