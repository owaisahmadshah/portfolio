import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Provide your name.' }),
  email: z.string().email({ message: 'Provide a valid email.' }),
  message: z.string().min(1, { message: 'Please write a message.' }),
});

const Contact = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isSendMessageError, setIsSendMessageError] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Subtle glowing animation effect for page load
    const timer = setTimeout(() => setShowGlow(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    setIsSendingMessage(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Your message has been sent successfully!');
          setIsSendMessageError(false);
          form.reset();
        },
        (error) => {
          toast.error('Failed to send message.');
          setIsSendMessageError(true);
          console.error(error);
        }
      )
      .finally(() => setIsSendingMessage(false));
  }

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/owais-ahmad-shah',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
      bg: 'hover:bg-[#0A66C2]/10',
    },
    {
      icon: FaSquareXTwitter,
      href: 'https://x.com/owais_ahmadshah',
      label: 'Twitter',
      color: 'hover:text-foreground',
      bg: 'hover:bg-foreground/10',
    },
    {
      icon: FaGithubSquare,
      href: 'https://github.com/owaisahmadshah',
      label: 'GitHub',
      color: 'hover:text-foreground',
      bg: 'hover:bg-foreground/10',
    },
  ];

  return (
    <main className="relative w-[90%] mx-auto min-h-[90vh] flex max-md:flex-col justify-between items-start gap-12 overflow-hidden py-12">
      {/* --- Soft background glow --- */}
      {showGlow && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
        </>
      )}

      {/* --- Contact Form --- */}
      <div
        className="w-full md:w-[40%] backdrop-blur-sm bg-card/50 border border-border rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-left-8 duration-700"
        style={{ animationDelay: '200ms' }}
      >
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary transition-all duration-300 text-lg shadow-sm"
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <span className="text-lg">👤</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="your.email@example.com"
                        {...field}
                        className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary transition-all duration-300 text-lg shadow-sm"
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <span className="text-lg">📧</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        placeholder="Tell me about your project, opportunity, or just say hello!*"
                        className="pl-12 pr-4 py-4 min-h-40 bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none text-lg shadow-sm"
                        {...field}
                      />
                      <div className="absolute left-4 top-4 text-muted-foreground">
                        <span className="text-lg">💬</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-5">
              <Button
                type="submit"
                disabled={isSendingMessage}
                className="group flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {isSendingMessage ? 'Sending...' : 'Send Message'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 rounded-xl border border-border transition-all duration-300 ${social.color} ${social.bg} hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={32} />
                </a>
              ))}
            </div>
          </form>
        </Form>
      </div>

      {/* --- Right Section --- */}
      <div
        className="w-full md:w-[45%] animate-in fade-in slide-in-from-right-8 duration-700"
        style={{ animationDelay: '400ms' }}
      >
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            showGlow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold inline-block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Let's{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
        </div>
        <p className="text-muted-foreground leading-relaxed text-base mb-4">
          Thank you for visiting my portfolio! As a student and aspiring software engineer, I’m
          eager to collaborate, learn, and grow within the web development community — especially
          around MERN and Next.js ecosystems.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base mb-4">
          Whether it’s feedback on my projects, internship opportunities, or tech discussions — I’d
          love to hear from you. Let’s build something amazing together!
        </p>

        {isSendMessageError && (
          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-sm mb-1">
              <strong>Email:</strong> owaisahmadqureshi019@gmail.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +92 331 3767001
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Contact;
