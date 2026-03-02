import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvestmentSection from "@/components/sections/InvestmentSection";

const InvestmentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="container px-4 mb-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
              Investment
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Clear structure, premium mandates, no surprises.
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              We operate like a partner with skin in the game — keeping pricing simple, transparent and tied to outcomes
              rather than task lists.
            </p>
          </div>
        </section>

        <section className="container px-4 mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                Build phase — one-time project
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Scope includes development, infrastructure, dashboards and product systems.</li>
                <li>• Brand positioning, creative direction and launch roadmap included by default.</li>
                <li>• Content, packaging and campaign foundations planned inside the same engagement.</li>
                <li>• 20–30 day execution window, broken into clear, trackable milestones.</li>
                <li>• Payment structure: 50% advance to reserve the pod, 50% on go-live milestone.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                Scale phase — monthly retainer
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Dedicated growth pod across strategy, performance and creative.</li>
                <li>• Monthly experimentation roadmap with explicit targets and guardrails.</li>
                <li>• Reporting that focuses on CAC, LTV, payback and profit — not just ROAS screenshots.</li>
                <li>• Designed for ₹5L+ growth mandates where we can materially move the needle.</li>
              </ul>
            </div>
          </div>
        </section>

        <InvestmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentPage;

