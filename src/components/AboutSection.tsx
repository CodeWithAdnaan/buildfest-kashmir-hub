import { Gift, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: Gift,
    title: "Free Participation",
    description: "No registration fees! Just bring your skills and creativity.",
  },
  {
    icon: Award,
    title: "Swags & Certificates",
    description: "Exclusive goodies and certificates for all participants.",
  },
  {
    icon: Users,
    title: "Onsite Mentorship",
    description: "Get guidance from industry experts throughout the event.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              About The Event
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              What is <span className="text-gradient">BuildFest Kashmir</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              BuildFest Kashmir is the valley's premier hackathon, bringing together
              developers, designers, and innovators to build solutions that matter.
              Whether you're a seasoned developer or just starting out, this is your
              platform to learn, create, and connect.
            </p>
          </div>

          {/* Who Can Participate */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Who Can Participate?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Students from any college or university
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Working professionals passionate about building
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Self-taught developers and enthusiasts
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Teams of 2-4 members
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
                <div className="relative gradient-border p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-4">Why This Hackathon?</h3>
                  <p className="text-muted-foreground mb-4">
                    BuildFest Kashmir isn't just a competition—it's a movement to
                    foster tech innovation in the valley. We believe in the untapped
                    potential of Kashmiri youth and want to provide them with a
                    platform to showcase their skills on a larger stage.
                  </p>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals, learn from mentors, and
                    build something you'll be proud of!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
