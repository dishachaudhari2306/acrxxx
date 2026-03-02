import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import WhyArcxxSection from "@/components/sections/WhyArcxxSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div id="top">
          <HeroSection />
        </div>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="case-studies">
          <CaseStudiesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <InvestmentSection />
        <section id="why-arcxx">
          <WhyArcxxSection />
        </section>
        <ClientsSection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
