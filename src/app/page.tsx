import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import AudienceSegments from "@/components/AudienceSegments";
import ServicesPreview from "@/components/ServicesPreview";
import KlilProfiles from "@/components/KlilProfiles";
import Authority from "@/components/Authority";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <AudienceSegments />
        <ServicesPreview />
        <KlilProfiles />
        <Authority />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
