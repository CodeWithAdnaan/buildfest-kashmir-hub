import { Users, Wrench, Scale, AlertCircle } from "lucide-react";

const rules = [
  "Teams must consist of 2-4 members",
  "All code must be written during the hackathon",
  "Use of open-source libraries and APIs is allowed",
  "Pre-existing projects or code are not permitted",
  "Teams must submit their project before the deadline",
  "All team members must be present for the final pitch",
  "Respect fellow participants and mentors",
  "Follow the code of conduct at all times",
];

const judgingCriteria = [
  {
    title: "Innovation",
    description: "How creative and unique is the solution?",
    weight: "25%",
  },
  {
    title: "Technical Complexity",
    description: "Difficulty and sophistication of implementation",
    weight: "25%",
  },
  {
    title: "Design & UX",
    description: "User interface and overall experience",
    weight: "20%",
  },
  {
    title: "Impact & Scalability",
    description: "Real-world applicability and growth potential",
    weight: "20%",
  },
  {
    title: "Presentation",
    description: "Clarity and effectiveness of the pitch",
    weight: "10%",
  },
];

export const RulesSection = () => {
  return (
    <section id="rules" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Guidelines
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Rules & <span className="text-gradient">Eligibility</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read through the rules carefully before registering for the hackathon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rules List */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Hackathon Rules</h3>
              </div>

              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </span>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-bold">2-4 Members</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <Wrench className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-bold">36 Hours</p>
                </div>
              </div>
            </div>

            {/* Judging Criteria */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Judging Criteria</h3>
              </div>

              <div className="space-y-4">
                {judgingCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{criteria.title}</span>
                      <span className="text-primary font-mono font-bold">{criteria.weight}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{criteria.description}</p>
                    
                    {/* Progress bar */}
                    <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: criteria.weight }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
