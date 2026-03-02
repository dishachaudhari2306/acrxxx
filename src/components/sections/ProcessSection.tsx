import { motion } from "framer-motion";

const steps = [
  {
    label: "01",
    title: "Strategy",
    description: "We audit your product, numbers and current assets to architect a clear growth thesis.",
  },
  {
    label: "02",
    title: "Build",
    description: "We design and build the tech, brand, content and tracking needed for a full ecosystem.",
  },
  {
    label: "03",
    title: "Launch",
    description: "We deploy, test and stabilize your stack across product, funnels and media channels.",
  },
  {
    label: "04",
    title: "Scale",
    description: "We double down on winners, protect margins and build a repeatable, compounding growth engine.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#020207] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-32 left-0 w-72 h-72 bg-[rgba(0,191,255,0.24)] blur-3xl" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-[rgba(0,123,255,0.22)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00BFFF] mb-3">
              Process
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight max-w-xl">
              A four-step system built around revenue, not vanity metrics.
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md">
            We obsess over the boring, repeatable stuff that moves the revenue graph up and to the right.
            No random acts of marketing.
          </p>
        </motion.div>

        <div className="relative overflow-x-auto">
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 min-w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex-1 min-w-[220px] rounded-2xl border border-zinc-800 bg-[rgba(10,10,16,0.96)] backdrop-blur-xl px-6 py-7 relative overflow-hidden"
              >
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-[rgba(0,123,255,0.25)]/0 via-transparent to-[rgba(0,191,255,0.25)]/0 group-hover:from-[rgba(0,123,255,0.18)] group-hover:to-[rgba(0,191,255,0.20)] transition-all duration-500" />
                <div className="relative z-10">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-3">
                    {step.label}
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

