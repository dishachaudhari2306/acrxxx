import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessSection from "@/components/sections/ProcessSection";

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="container px-4 mb-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
              Process
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              A four-step operating system for building and scaling.
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              We don&apos;t improvise every month. We run the same battle-tested process across brands, adapting it to
              your product, ticket size and sales model.
            </p>
          </div>
        </section>

        <section className="container px-4 mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                01 — Strategy
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Deep-dive on product, margins, existing assets and numbers.</li>
                <li>• Clear thesis on who we&apos;re targeting and why they buy.</li>
                <li>• Roadmap covering development, content, performance and collaborations.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                02 — Build
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Design and build of app/website, backend and admin tooling.</li>
                <li>• Setup of tracking, analytics and event-based measurement.</li>
                <li>• Content system, packaging, and creative direction locked in.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                03 — Launch
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Technical deployment, QA and pre-launch testing.</li>
                <li>• Initial Meta &amp; Google campaigns with tight feedback loops.</li>
                <li>• Early content and influencer pushes designed to validate angles.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                04 — Scale
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Push winning angles, pause waste and protect margins.</li>
                <li>• Move from &quot;does it work&quot; to &quot;how far can we take it&quot;.</li>
                <li>• Monthly experimentation roadmap aligned to revenue targets.</li>
              </ul>
            </div>
          </div>
        </section>

        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;

