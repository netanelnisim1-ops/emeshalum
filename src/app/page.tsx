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
        {/* Lead form right after the hero, so paid traffic sees where to leave details immediately. */}
        <ContactSection />
        <ProblemSolution />
        <AudienceSegments />
        <ServicesPreview />
        <KlilProfiles />
        <Authority />
        <Testimonials />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
