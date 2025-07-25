import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xzzgwvkj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
      form.reset(); // clear form
    } else {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "Network Error!",
      description: "Please check your connection and try again.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-12">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-left">
              <div className="ml-28 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:archita1102@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    archita1102@gmail.com
                  </a>
                </div>
              </div>
              <div className="ml-28 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+919855880050"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9855880050
                  </a>
                </div>
              </div>
              <div className="ml-28 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Jalandhar, Punjab, India
                  </a>
                </div>
              </div>
            </div>

            <div className="ml-32 pt-8 text-left space-x-4">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-left">
                <a href="https://www.linkedin.com/in/archita-aggarwal-173b892b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <Linkedin  />
                </a>
                <a href="https://github.com/architaagg" target="_blank">
                  <Github  />
                </a>
                <a href="https://www.instagram.com/archita022/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Archita..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={25} />
        </a>
      </div>
    </section>
    
  );
};
