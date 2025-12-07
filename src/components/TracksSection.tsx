import { Globe, Brain, Smartphone, Shield, Lightbulb } from "lucide-react";

const tracks = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Build responsive web apps, PWAs, and innovative web solutions using modern frameworks.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description: "Create intelligent solutions using machine learning, deep learning, and AI technologies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Develop mobile applications for iOS, Android, or cross-platform solutions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Build security tools, vulnerability scanners, or solutions to protect digital assets.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Got a unique idea? This track is for solutions that don't fit other categories.",
    color: "from-yellow-500 to-amber-500",
  },
];

export const TracksSection = () => {
  return (
    <section id="tracks" className="py-20 md:py-32 relative mesh-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Hackathon Tracks
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Choose Your <span className="text-gradient">Track</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick the track that matches your skills and interests. Each track has
              dedicated mentors and prizes.
            </p>
          </div>

          {/* Track Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <div
                key={track.title}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                      <track.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{track.title}</h3>
                  <p className="text-muted-foreground flex-grow">{track.description}</p>
                  
                  {/* Tagline */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className={`text-sm font-medium bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}>
                      Build Something Cool →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
