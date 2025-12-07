import { Github, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const footerLinks = [
  {
    title: "Event",
    links: [
      { label: "About", href: "#about" },
      { label: "Tracks", href: "#tracks" },
      { label: "Prizes", href: "#prizes" },
      { label: "Schedule", href: "#schedule" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Rules", href: "#rules" },
      { label: "Mentors", href: "#mentors" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gradient">BuildFest</span>
              <span className="text-2xl font-light text-foreground">Kashmir</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Kashmir's biggest community hackathon. Building the future, one
              project at a time.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 BuildFest Kashmir. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>in Kashmir</span>
          </div>
          <a
            href="mailto:adnanfarooq01@hotmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={14} />
            adnanfarooq01@hotmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
