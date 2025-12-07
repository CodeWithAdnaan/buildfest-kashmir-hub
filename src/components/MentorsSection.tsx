import { Linkedin, Twitter, Github } from "lucide-react";

const mentors = [
  {
    name: "Dr. Faisal Ahmed",
    role: "AI Research Lead",
    company: "Tech Innovations",
    bio: "Expert in machine learning with 10+ years of experience",
  },
  {
    name: "Sarah Bhat",
    role: "Senior Developer",
    company: "Google",
    bio: "Full-stack developer specializing in scalable systems",
  },
  {
    name: "Imran Khan",
    role: "Startup Founder",
    company: "StartupKashmir",
    bio: "Serial entrepreneur and angel investor",
  },
  {
    name: "Aisha Mir",
    role: "UX Design Lead",
    company: "Microsoft",
    bio: "Award-winning designer focused on accessibility",
  },
  {
    name: "Zubair Rather",
    role: "Security Engineer",
    company: "Cloudflare",
    bio: "Cybersecurity expert and ethical hacker",
  },
  {
    name: "Nadia Wani",
    role: "Product Manager",
    company: "Stripe",
    bio: "Building products that millions of users love",
  },
];

export const MentorsSection = () => {
  return (
    <section id="mentors" className="py-20 md:py-32 relative mesh-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Industry Experts
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Meet Our <span className="text-gradient">Mentors & Judges</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from the best in the industry. Our mentors are here to guide you throughout the hackathon.
            </p>
          </div>

          {/* Mentor Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.name}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 text-center">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary">
                      {mentor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{mentor.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{mentor.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{mentor.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{mentor.bio}</p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Interested in mentoring? <a href="#contact" className="text-primary hover:underline">Get in touch with us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
