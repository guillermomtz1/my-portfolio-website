import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          form.current.reset();
        },
        () => {
          toast({
            title: "Something went wrong",
            description: "Please try again or reach out via email directly.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I&apos;m always open to new opportunities and interesting
            conversations. Don&apos;t hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-left">
              Send a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-left">
                Contact Information
              </h3>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a
                    href="mailto:jguillermotech@gmail.com"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    jguillermotech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Location
                  </p>
                  <span className="text-sm font-medium">Texas, USA</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-base font-semibold mb-4 text-left">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/jose-guillermo-martinez-887400153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/guillermomtz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/guillermocodes_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
