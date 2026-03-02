import { motion } from "framer-motion";

const caseStudies = [
  {
    label: "DTC Fashion Brand",
    metric: "+312% ROI in 90 Days",
    subtitle: "Scaled Meta + Google ads with profit protection.",
    details: ["5.4x blended ROAS", "Tripled monthly revenue", "CAC down by 41%"],
  },
  {
    label: "SaaS Productivity Tool",
    metric: "+187% Paid Signups",
    subtitle: "Rebuilt funnel and lifecycle email flows.",
    details: ["Onboarding conversion up 32%", "Churn down 18%", "LTV up 27%"],
  },
  {
    label: "High-Ticket Coaching",
    metric: "+94 Qualified Calls / Mo",
    subtitle: "Dialed in creative, targeting, and offer.",
    details: ["Show-up rate at 83%", "Closing 38% of calls", "Ad costs held flat"],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#050509] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-32 right-0 w-80 h-80 bg-[rgba(0,123,255,0.25)] blur-3xl" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-[rgba(0,191,255,0.20)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00BFFF] mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
            Numbers that don&apos;t{" "}
            <span className="text-[#00BFFF]">care about opinions.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-xl">
            Every decision is tied to pipeline, revenue, and payback period. No vanity metrics. No fluff.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative group rounded-2xl border border-zinc-800/90 bg-[rgba(10,10,15,0.95)]/90 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(0,123,255,0.14)] via-transparent to-[rgba(0,191,255,0.18)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400 mb-3">
                  {item.label}
                </p>
                <p className="text-2xl md:text-3xl font-heading font-semibold text-white mb-1">
                  {item.metric}
                </p>
                <p className="text-xs md:text-sm text-zinc-400">{item.subtitle}</p>
              </div>
              <ul className="relative z-10 mt-6 space-y-1.5 text-xs md:text-sm text-zinc-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-[3px] w-3 rounded-full bg-gradient-to-r from-[#007BFF] to-[#00BFFF]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

