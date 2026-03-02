import { motion } from "framer-motion";

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-32 right-4 h-72 w-72 rounded-full bg-[rgba(37,99,235,0.55)] blur-3xl" />
      <div className="absolute -bottom-40 left-6 h-80 w-80 rounded-full bg-[rgba(15,23,42,0.95)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
            Investment
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Structured like a partner, not a vendor.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl">
            We keep pricing simple, transparent and outcomes-focused. No hidden retainers, no surprise scope creep.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="relative rounded-2xl border border-zinc-800 bg-[rgba(15,23,42,0.96)]/95 backdrop-blur-xl p-6 md:p-8"
          >
            <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(37,99,235,0.3)]/0 via-transparent to-[rgba(37,99,235,0.4)]/0 hover:from-[rgba(37,99,235,0.16)] hover:to-[rgba(37,99,235,0.28)] transition-all duration-500" />
            <div className="relative z-10 space-y-5">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-white">
                Build Phase – One-time Project
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                We scope your full digital ecosystem — development, branding, performance setup and content foundations —
                into a single, clearly defined engagement.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                <li>• End-to-end build covering product, tech, creative and performance foundations.</li>
                <li>• 20–30 day execution window with weekly check-ins and clear milestones.</li>
                <li>• 50% advance to lock scope and team, 50% on agreed go-live milestone.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative rounded-2xl border border-zinc-800 bg-[rgba(15,23,42,0.96)]/95 backdrop-blur-xl p-6 flex flex-col justify-between"
          >
            <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(15,23,42,0.9)]/0 via-transparent to-[rgba(37,99,235,0.45)]/0 hover:to-[rgba(37,99,235,0.35)] transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-lg md:text-xl font-heading font-semibold text-white">
                Scale Phase – Monthly Retainer
              </h3>
              <p className="text-xs md:text-sm text-zinc-300">
                Once the ecosystem is live, we move into a performance-first retainer focused on revenue, not vanity
                metrics.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                <li>• Dedicated performance, creative and strategy pod.</li>
                <li>• Clear monthly targets, reporting and experimentation roadmap.</li>
                <li>• Model designed to sit behind ₹5L+ growth mandates, not one-off projects.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;

