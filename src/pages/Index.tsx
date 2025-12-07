import { useEffect } from "react";
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
  // Add Devfolio SDK script
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      script.id = "devfolio-apply-button";
      
      // Add to head for better loading
      document.head.appendChild(script);
      
      // Handle script load errors
      script.onerror = () => {
        console.error("Failed to load Devfolio SDK");
      };
    }
    
    // Don't remove script on cleanup - Devfolio SDK needs it to stay loaded
  }, []);

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
