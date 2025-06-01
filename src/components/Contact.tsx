import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Provide name.',
  }),
  email: z.string().min(1, {
    message: 'Provide your email.',
  }),
  message: z.string().min(1, {
    message: 'Provide message.',
  }),
});

const Contact = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isSendMessageError, setIsSendMessageError] = useState(false);

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
          toast('Message has been sent.');
          setIsSendMessageError(true);
          form.reset();
        },
        (error) => {
          toast('Email send failed.');
          setIsSendMessageError(true);
          console.error(error);
        }
      )
      .finally(() => setIsSendingMessage(false));
  }

  return (
    <main className="w-[90%] mx-auto flex max-sm:flex-col justify-around max-sm:gap-10">
      <div className="w-[35%] max-sm:w-[90%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="How can I help?*"
                      className="resize-none min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-6 max-sm:gap-3">
              <Button type="submit">{isSendingMessage ? 'Sending...' : 'Get in touch'}</Button>
              <a
                href="https://www.linkedin.com/in/owais-ahmad-shah"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <FaLinkedin size={40} className="text-foreground" />
              </a>
              <a
                href="https://x.com/owais_ahmadshah"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <FaSquareXTwitter size={40} className="text-foreground" />
              </a>
              <a
                href="https://github.com/owaisahmadshah"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <FaGithubSquare size={40} className="text-foreground" />
              </a>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-[40%] max-sm:w-[90%]">
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            <strong>Let's Connect</strong>
          </h1>
          <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
            Thank you for visiting my portfolio! As a student actively learning software
            engineering, I'm eager to connect with others in the field and explore opportunities to
            apply and enhance my growing skills with MERN stack and Next.js.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
            I'm at the beginning of my journey as a developer and would appreciate any guidance,
            feedback on my projects, or conversations about web development. Feel free to reach out
            - I'd be happy to hear from you!
          </p>

          {isSendMessageError && (
            <div className="mt-6">
              <p className="mb-2">
                <strong>owaisahmadqureshi019@gmail.com</strong>
              </p>
              <p className="mb-4">
                <strong>+92 331 3767001</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
