import { Trophy, Star, Sparkles, Palette, Brain } from "lucide-react";

const mainPrizes = [
  {
    place: "1st",
    prize: "₹50,000",
    gradient: "from-yellow-400 via-amber-400 to-yellow-500",
    glowColor: "shadow-[0_0_60px_hsl(45_90%_55%_/_0.4)]",
    icon: Trophy,
  },
  {
    place: "2nd",
    prize: "₹30,000",
    gradient: "from-slate-300 via-gray-300 to-slate-400",
    glowColor: "shadow-[0_0_60px_hsl(220_15%_70%_/_0.4)]",
    icon: Trophy,
  },
  {
    place: "3rd",
    prize: "₹15,000",
    gradient: "from-orange-400 via-amber-600 to-orange-500",
    glowColor: "shadow-[0_0_60px_hsl(25_70%_50%_/_0.4)]",
    icon: Trophy,
  },
];

const specialPrizes = [
  {
    title: "Best Beginner Team",
    prize: "₹10,000",
    icon: Star,
    description: "For first-time hackers showing exceptional potential",
  },
  {
    title: "Best UI/UX",
    prize: "₹10,000",
    icon: Palette,
    description: "For the most beautiful and user-friendly design",
  },
  {
    title: "Best AI Project",
    prize: "₹10,000",
    icon: Brain,
    description: "For innovative use of AI/ML technologies",
  },
];

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Rewards & Recognition
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Win Amazing <span className="text-gradient">Prizes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compete for exciting cash prizes and special category awards. Every
              participant gets exclusive swags and certificates!
            </p>
          </div>

          {/* Main Prize Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {mainPrizes.map((prize, index) => (
              <div
                key={prize.place}
                className={`group relative ${index === 0 ? "md:-translate-y-4" : ""}`}
              >
                {/* Animated border */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${prize.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                
                <div className={`relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent transition-all duration-500 ${prize.glowColor} group-hover:shadow-lg`}>
                  {/* Trophy Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${prize.gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                      <prize.icon className="w-10 h-10 text-foreground group-hover:text-background transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Place */}
                  <div className={`text-center mb-4`}>
                    <span className={`text-5xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                      {prize.place}
                    </span>
                    <p className="text-muted-foreground mt-1">Place</p>
                  </div>

                  {/* Prize Amount */}
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">
                      {prize.prize}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">+ Swags & Goodies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Prizes */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xl font-semibold">Special Category Prizes</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialPrizes.map((prize, index) => (
              <div
                key={prize.title}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <prize.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{prize.title}</h3>
                  <p className="text-2xl font-bold text-gradient mb-2">{prize.prize}</p>
                  <p className="text-sm text-muted-foreground">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
