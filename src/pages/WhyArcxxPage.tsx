import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyArcxxSection from "@/components/sections/WhyArcxxSection";

const WhyArcxxPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="container px-4 mb-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
              Why Arcxx
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              A senior pod for founders who think beyond &quot;just ads&quot;.
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              We&apos;re built for teams who want an integrated product, tech and marketing layer — not a rotation of
              disconnected vendors every quarter.
            </p>
          </div>
        </section>

        <section className="container px-4 mb-16">
          <div className="grid gap-8 md:grid-cols-2 text-xs md:text-sm text-zinc-300">
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                What we believe
              </h2>
              <ul className="space-y-1.5">
                <li>• Growth comes from systems, not one-off campaigns.</li>
                <li>• Your product, tech stack and brand story must be aligned.</li>
                <li>• Data should inform creative, not the other way around.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white mb-2">
                How we operate
              </h2>
              <ul className="space-y-1.5">
                <li>• One compact team owning build, launch and scale.</li>
                <li>• Weekly check-ins focused on numbers and next moves.</li>
                <li>• Brutal honesty about what&apos;s working and what isn&apos;t.</li>
              </ul>
            </div>
          </div>
        </section>

        <WhyArcxxSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyArcxxPage;

