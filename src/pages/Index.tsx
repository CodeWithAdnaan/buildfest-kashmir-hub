import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TracksSection } from "@/components/TracksSection";
import { PrizesSection } from "@/components/PrizesSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { RulesSection } from "@/components/RulesSection";
import { MentorsSection } from "@/components/MentorsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <ScheduleSection />
      <RulesSection />
      <MentorsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
