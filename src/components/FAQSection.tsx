import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is BuildFest Kashmir free to participate?",
    answer: "Yes! BuildFest Kashmir is completely free for all participants. We believe in making tech events accessible to everyone.",
  },
  {
    question: "Do I need a team to participate?",
    answer: "You can register individually or with a team. If you don't have a team, we'll help you find teammates during our team formation session before the event.",
  },
  {
    question: "What is the team size limit?",
    answer: "Teams should consist of 2-4 members. Solo participation is not allowed as we encourage collaboration and teamwork.",
  },
  {
    question: "Will food and refreshments be provided?",
    answer: "Yes! We'll provide meals, snacks, and beverages throughout the 36-hour hackathon. We also accommodate dietary restrictions—just let us know during registration.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, charger, any hardware you might need, and your student/work ID. We'll provide the workspace, internet, and everything else you need.",
  },
  {
    question: "Can I work on a pre-existing project?",
    answer: "No, all projects must be built from scratch during the hackathon. However, you can use open-source libraries, APIs, and frameworks.",
  },
  {
    question: "Is there an age limit for participants?",
    answer: "Participants should be at least 16 years old. There's no upper age limit—we welcome everyone passionate about building!",
  },
  {
    question: "Will there be WiFi available?",
    answer: "Yes, high-speed WiFi will be available throughout the venue. We also have backup connectivity to ensure uninterrupted hacking.",
  },
  {
    question: "What happens if I can't attend after registering?",
    answer: "Please let us know as soon as possible so we can give your spot to someone on the waitlist. There's no penalty for cancellation.",
  },
  {
    question: "How are the winners selected?",
    answer: "Projects are judged based on innovation, technical complexity, design/UX, real-world impact, and presentation quality. Each criterion has a specific weightage.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about BuildFest Kashmir.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a href="#contact" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
