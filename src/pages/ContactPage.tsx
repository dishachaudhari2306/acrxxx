import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="container px-4 mb-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60A5FA] mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Ready to see if Arcxx is the right partner?
            </h1>
            <p className="text-sm md:text-base text-zinc-400">
              Tell us about your brand, current numbers and targets. We&apos;ll reply with a clear point of view, not a
              generic sales deck.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

