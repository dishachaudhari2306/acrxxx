import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="container px-4 mb-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
              Services
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              One pod, six pillars of your growth ecosystem.
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              From code and infrastructure to campaigns and content, we design every layer to work together. Below is
              how your proposal breaks down into a system — not a menu of disconnected tasks.
            </p>
          </div>
        </section>

        <section className="container px-4 mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white">
                Development stack
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• App &amp; website development tailored to your product, not a template.</li>
                <li>• Backend infrastructure setup with secure APIs and deployment pipelines.</li>
                <li>• Admin dashboard integration so your team can actually manage day to day operations.</li>
                <li>• Payment gateway integration that feels smooth, fast and trustworthy.</li>
                <li>• Product management system for catalogues, pricing, inventory and offers.</li>
                <li>• Technical deployment, QA and load testing before we ever send traffic.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-white">
                Brand, marketing &amp; content
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-zinc-300">
                <li>• Brand positioning consultation so you occupy a clear, premium space in the market.</li>
                <li>• Creative direction &amp; strategy for campaigns, assets and UX.</li>
                <li>• Marketing roadmap planning from launch through to scale.</li>
                <li>• Meta &amp; Google ads for 45 days with performance marketing and optimisation.</li>
                <li>• Content ideation &amp; production across formats your audience actually consumes.</li>
                <li>• Product packaging and creative design that match your price point and positioning.</li>
                <li>• Influencer collaborations and campaign storytelling videos tied back to funnel goals.</li>
              </ul>
            </div>
          </div>
        </section>

        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

