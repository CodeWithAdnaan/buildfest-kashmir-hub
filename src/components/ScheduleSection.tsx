import { ClipboardCheck, Mic, Code, Coffee, Presentation, Award, Clock } from "lucide-react";

const scheduleData = {
  day1: {
    title: "Day 1 - Saturday",
    events: [
      { time: "08:00 AM", title: "Registration & Check-in", icon: ClipboardCheck },
      { time: "09:30 AM", title: "Opening Ceremony", icon: Mic },
      { time: "10:30 AM", title: "Hacking Begins!", icon: Code },
      { time: "01:00 PM", title: "Lunch Break", icon: Coffee },
      { time: "02:00 PM", title: "Mentor Sessions", icon: Presentation },
      { time: "06:00 PM", title: "Dinner & Networking", icon: Coffee },
      { time: "07:00 PM", title: "Hacking Continues", icon: Code },
      { time: "11:00 PM", title: "Day 1 Wrap-up", icon: Clock },
    ],
  },
  day2: {
    title: "Day 2 - Sunday",
    events: [
      { time: "08:00 AM", title: "Breakfast", icon: Coffee },
      { time: "09:00 AM", title: "Final Hacking Hours", icon: Code },
      { time: "12:00 PM", title: "Code Freeze", icon: Clock },
      { time: "12:30 PM", title: "Lunch", icon: Coffee },
      { time: "01:30 PM", title: "Project Submissions", icon: ClipboardCheck },
      { time: "02:30 PM", title: "Pitch Presentations", icon: Presentation },
      { time: "04:30 PM", title: "Judging & Deliberation", icon: Award },
      { time: "05:30 PM", title: "Awards Ceremony", icon: Award },
    ],
  },
};

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 md:py-32 relative mesh-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Event Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Event <span className="text-gradient">Schedule</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              36 hours of hacking, learning, and building. Here's what to expect during the event.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(scheduleData).map(([key, day]) => (
              <div key={key} className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  <span className="text-gradient">{day.title}</span>
                </h3>

                <div className="space-y-4">
                  {day.events.map((event, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <p className="font-medium text-foreground">{event.title}</p>
                      </div>

                      {/* Time */}
                      <div className="text-right">
                        <span className="font-mono text-sm text-primary">{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Schedule is subject to minor changes. All times are in IST.
          </p>
        </div>
      </div>
    </section>
  );
};
