import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set event date to 30 days from now for demo
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-colors" />
            <div className="relative bg-card border border-border rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <span className="text-2xl md:text-4xl font-bold text-gradient font-mono">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// Floating geometric shapes for background
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float pointer-events-none" />
    <div
      className="absolute top-1/3 right-20 w-32 h-32 border border-primary/10 rotate-45 animate-float pointer-events-none"
      style={{ animationDelay: "1s" }}
    />
    <div
      className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary/5 rounded-lg rotate-12 animate-float pointer-events-none"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-1/2 right-1/4 w-24 h-24 border border-primary/15 rounded-2xl animate-float pointer-events-none"
      style={{ animationDelay: "1.5s" }}
    />
    <div
      className="absolute bottom-1/3 right-10 w-12 h-12 bg-primary/10 rotate-45 animate-float pointer-events-none"
      style={{ animationDelay: "0.5s" }}
    />
  </div>
);

export const HeroSection = () => {
  const applyButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for Devfolio SDK to load and initialize the button
    const initDevfolioButton = () => {
      // Check if Devfolio SDK is available
      if ((window as any).Devfolio && applyButtonRef.current) {
        // SDK will automatically initialize buttons with class 'apply-button'
        // Force a re-scan if needed
        try {
          // Trigger Devfolio to re-scan for buttons
          if ((window as any).Devfolio.init) {
            (window as any).Devfolio.init();
          }
        } catch (error) {
          console.log("Devfolio SDK initialization:", error);
        }
      }
    };

    // Check if SDK is already loaded
    if ((window as any).Devfolio) {
      initDevfolioButton();
    } else {
      // Wait for SDK to load
      const checkInterval = setInterval(() => {
        if ((window as any).Devfolio) {
          clearInterval(checkInterval);
          initDevfolioButton();
        }
      }, 100);

      // Stop checking after 5 seconds
      setTimeout(() => clearInterval(checkInterval), 5000);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible mesh-gradient">
      <FloatingShapes />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Registration Now Open
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">BuildFest</span>
            <br />
            <span className="text-foreground">Kashmir</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Kashmir's Biggest Community Hackathon
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={18} className="text-primary" />
              <span>January 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Srinagar, Kashmir</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {/* Devfolio Apply Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <div 
                ref={applyButtonRef}
                className="apply-button"
                data-hackathon-slug="buildfestkashmir"
                data-button-theme="light"
                style={{ 
                  height: "44px", 
                  width: "312px",
                  maxWidth: "100%",
                  minWidth: "280px"
                }}
              ></div>
            </div>
            <Button variant="heroOutline" size="xl">
              View Schedule
            </Button>
          </div>

          {/* Countdown */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Event Starts In
            </p>
            <CountdownTimer />
          </div>

          {/* Partner Logos */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Powered By
            </p>
            <div className="partner-logos flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <img 
                src="/assets/devfolio-logo.png" 
                alt="Devfolio Logo" 
                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="/assets/hackclub-logo.png" 
                alt="Hack Club Logo" 
                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
