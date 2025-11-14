import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { HiSparkles, HiPhone } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Provide your name.' }),
  email: z.string().email({ message: 'Provide a valid email.' }),
  message: z.string().min(1, { message: 'Please write a message.' }),
});

const Contact = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isSendMessageError, setIsSendMessageError] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
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
          toast.success('Your message has been sent successfully!', {
            description: "I'll get back to you as soon as possible!",
          });
          setIsSendMessageError(false);
          form.reset();
        },
        (error) => {
          toast.error('Failed to send message.', {
            description: 'Please try again or contact me directly via email.',
          });
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
      color: '#0A66C2',
    },
    {
      icon: FaSquareXTwitter,
      href: 'https://x.com/owais_ahmadshah',
      label: 'Twitter',
      color: 'currentColor',
    },
    {
      icon: FaGithubSquare,
      href: 'https://github.com/owaisahmadshah',
      label: 'GitHub',
      color: 'currentColor',
    },
  ];

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'owaisahmadqureshi019@gmail.com',
      href: 'mailto:owaisahmadqureshi019@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+92 331 3767001',
      href: 'tel:+923313767001',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: null,
    },
  ];

  return (
    <main className="relative w-full max-w-7xl mx-auto px-4 py-16 min-h-[90vh] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {showGlow && (
          <>
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </>
        )}
      </div>

      {/* Section Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          showGlow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
          <HiSparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Let's Work Together</span>
        </div>

        <h1 className="text-6xl max-md:text-4xl font-bold mb-4">
          Get in{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>

        {/* <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 rounded-full" /> */}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Contact Form */}
        <div
          className="animate-in fade-in slide-in-from-left-8 duration-700"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />

            {/* Form Container */}
            <div className="relative backdrop-blur-sm bg-card/50 border-2 border-border/50 rounded-2xl p-8 shadow-2xl hover:border-primary/30 transition-all duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below and I'll get back to you within 24 hours
                </p>
              </div>

              <Form {...form}>
                <div className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormControl>
                          <div className="relative group/input">
                            <div
                              className={`absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-all duration-300 ${
                                focusedField === 'name' ? 'opacity-100' : ''
                              }`}
                            />
                            <Input
                              placeholder="Your Name"
                              {...field}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              className="relative pl-12 h-14 bg-background/80 border-border/50 focus:border-primary focus:bg-background transition-all duration-300 text-base shadow-sm"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors duration-300">
                              <span className="text-xl">👤</span>
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
                          <div className="relative group/input">
                            <div
                              className={`absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-all duration-300 ${
                                focusedField === 'email' ? 'opacity-100' : ''
                              }`}
                            />
                            <Input
                              placeholder="your.email@example.com"
                              {...field}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              className="relative pl-12 h-14 bg-background/80 border-border/50 focus:border-primary focus:bg-background transition-all duration-300 text-base shadow-sm"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                              <span className="text-xl">📧</span>
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
                          <div className="relative group/input">
                            <div
                              className={`absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-all duration-300 ${
                                focusedField === 'message' ? 'opacity-100' : ''
                              }`}
                            />
                            <Textarea
                              placeholder="Tell me about your project, opportunity, or just say hello!"
                              className="relative pl-12 pr-4 py-4 min-h-40 bg-background/80 border-border/50 focus:border-primary focus:bg-background transition-all duration-300 resize-none text-base shadow-sm"
                              {...field}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                            />
                            <div className="absolute left-4 top-4 text-muted-foreground">
                              <span className="text-xl">💬</span>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={isSendingMessage}
                    size="lg"
                    className="w-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {isSendingMessage ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div
          className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700"
          style={{ animationDelay: '400ms' }}
        >
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Let's Connect!
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base">
              Thank you for visiting my portfolio! As a passionate{' '}
              <span className="text-foreground font-semibold">software engineering student</span>,
              I'm eager to collaborate, learn, and grow within the web development community —
              especially around{' '}
              <span className="text-foreground font-semibold">MERN and Next.js</span> ecosystems.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base">
              Whether it's feedback on my projects, internship opportunities, or tech discussions —{' '}
              <span className="text-foreground font-semibold">I'd love to hear from you</span>.
              Let's build something amazing together! 🚀
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href || undefined}
                className={`relative group block ${
                  info.href ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Card */}
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{info.label}</p>
                      <p className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Connect on Social
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-2 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: `${social.color}30` }}
                  />

                  {/* Icon */}
                  <div className="relative p-4 bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    <social.icon
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: social.color }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Error Fallback */}
          {isSendMessageError && (
            <div className="mt-6 p-6 bg-primary/5 border-2 border-primary/20 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-sm font-semibold text-primary mb-3">
                💡 Having trouble? Reach me directly:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:owaisahmadqureshi019@gmail.com"
                    className="text-primary hover:underline"
                  >
                    owaisahmadqureshi019@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+923313767001" className="text-primary hover:underline">
                    +92 331 3767001
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
