import { Code2, Sparkles, LineChart, Clapperboard, Package, Users } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Development",
      description:
        "App & website development, backend infrastructure, admin dashboards, payment gateways and product systems under one roof.",
      benefits: [
        "App & website builds",
        "Backend & infra setup",
        "Admin & product systems",
        "Payment gateway integration",
      ],
      color: "from-[rgba(0,123,255,0.24)] to-[rgba(0,191,255,0.16)]",
      iconBg: "from-[#007BFF] to-[#00BFFF]",
    },
    {
      icon: Sparkles,
      title: "Branding & Consultancy",
      description:
        "Positioning, creative direction and marketing roadmaps so your brand feels premium, not improvised.",
      benefits: [
        "Brand positioning",
        "Go-to-market strategy",
        "Creative & UX direction",
        "Launch & growth roadmaps",
      ],
      color: "from-[rgba(15,118,255,0.2)] to-[rgba(37,99,235,0.14)]",
      iconBg: "from-[#1D4ED8] to-[#0EA5E9]",
    },
    {
      icon: LineChart,
      title: "Performance Marketing",
      description:
        "Meta & Google ads planned in 45-day cycles, built for ROAS, payback periods and compounding learning.",
      benefits: [
        "Meta & Google ads (45 days)",
        "Performance optimization",
        "Funnel & tracking setup",
        "Revenue-focused reporting",
      ],
      color: "from-[rgba(8,47,73,0.3)] to-[rgba(15,23,42,0.9)]",
      iconBg: "from-[#0369A1] to-[#0EA5E9]",
    },
    {
      icon: Clapperboard,
      title: "Content Production",
      description:
        "Concept to execution for content that actually sells — not just fills your feed for the month.",
      benefits: [
        "Content ideation & scripts",
        "Social & performance assets",
        "Storytelling campaign videos",
      ],
      color: "from-[rgba(30,64,175,0.32)] to-[rgba(56,189,248,0.12)]",
      iconBg: "from-[#4F46E5] to-[#38BDF8]",
    },
    {
      icon: Package,
      title: "Packaging & Creative",
      description:
        "Product packaging, visual systems and asset design that make you look like the premium option on every shelf.",
      benefits: ["Product packaging", "Visual & brand systems", "Launch & campaign creatives"],
      color: "from-[rgba(8,47,73,0.4)] to-[rgba(15,23,42,0.95)]",
      iconBg: "from-[#0F172A] to-[#0EA5E9]",
    },
    {
      icon: Users,
      title: "Collaborations & Videos",
      description:
        "Influencer collaborations and hero video campaigns designed around narrative, not vanity metrics.",
      benefits: [
        "Influencer collaborations",
        "Hero campaign films",
        "Full-funnel story arcs",
      ],
      color: "from-[rgba(24,24,27,0.9)] to-[rgba(39,39,42,0.85)]",
      iconBg: "from-[#111827] to-[#00BFFF]",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#020308] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 section-pattern opacity-40" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-[rgba(0,123,255,0.28)] blur-3xl" />
      <div className="absolute -bottom-44 left-10 w-80 h-80 bg-[rgba(0,191,255,0.22)] blur-3xl" />

      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          >
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#00BFFF] mb-3">
                Services
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">
                The growth stack, built for revenue.
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-xl">
                Every service is designed to plug into your numbers—LTV, CAC, ROAS—not just likes or impressions.
              </p>
            </div>
            <p className="text-[11px] md:text-xs text-zinc-500 max-w-sm">
              We work best with brands doing at least $50k/mo and hungry to scale.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[rgba(6,10,20,0.98)] backdrop-blur-xl p-6"
              >
                {/* Gradient background on hover */}
                <div
                  className={`pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.iconBg} shadow-[0_0_25px_rgba(0,123,255,0.5)] group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[rgba(15,23,42,0.9)] text-zinc-300 border border-[rgba(148,163,184,0.4)]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
