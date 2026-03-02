import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const clients = [
  "Unrestricted Culture",
  "Holyhayden",
  "OWR",
  "Flashdripp",
  "Dopechiqe",
  "Blueclover",
  "Javedhabib",
  "Aura Dinning",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 lg:py-20 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 section-pattern" />
      <div className="absolute -top-24 left-0 h-56 w-56 rounded-full bg-[rgba(37,99,235,0.4)] blur-3xl" />
      <div className="absolute -bottom-24 right-4 h-64 w-64 rounded-full bg-[rgba(15,23,42,0.95)] blur-3xl" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-2">
              Clients
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Brands that trust Arcxx with their ecosystem.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-sm">
            A snapshot of brands we support across strategy, builds, performance and content — many starting as
            Instagram-first businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="flex flex-wrap gap-3"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(55,65,81,0.9)] bg-[rgba(15,23,42,0.95)] px-4 py-2 text-xs md:text-sm text-zinc-200 hover:border-[#2563EB] hover:bg-[rgba(15,23,42,0.98)] transition-all"
            >
              <Instagram className="h-3.5 w-3.5 text-[#60A5FA]" />
              <span>{client}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

