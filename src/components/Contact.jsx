import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
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
        },
        () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-4l font-bold mb-12 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open for new oportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Guillermo Martinez..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your Message..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 hover:bg-primary/50"
                )}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8 rounded-lg px-4 py-4">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:jguillermo.martinez1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    jguillermotech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {" "}
                    Texas, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/jose-guillermo-martinez-887400153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/guillermomtz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/guillermocodes_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
