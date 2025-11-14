import { FaCoffee, FaCode } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaSquareXTwitter, FaHeart, FaArrowUp } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';
import { SiReact, SiTailwindcss, SiShadcnui } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 200);

    // Show back to top button on scroll
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      icon: FaGithub,
      href: 'https://github.com/owaisahmadshah',
      label: 'GitHub',
      color: 'currentColor',
    },
  ];

  const techStack = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiShadcnui, name: 'Shadcn UI', color: '#E4E4E7' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact-me', label: 'Contact' },
  ];

  return (
    <footer className="relative overflow-hidden py-16">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-background/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-background/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-background/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto px-4">
        {/* Top CTA Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm mb-4">
            <HiSparkles className="w-4 h-4 text-background animate-pulse" />
            <span className="text-sm font-medium text-background">
              Let's Create Something Amazing
            </span>
          </div>

          <h3 className="text-4xl max-md:text-3xl font-bold mb-4 bg-gradient-to-r from-background via-background/90 to-background/70 bg-clip-text text-transparent">
            Ready to Work Together?
          </h3>

          <p className="text-background/70 max-w-2xl mx-auto mb-6 text-base">
            I'm always open to new opportunities, collaborations, and interesting projects.
          </p>

          <a
            href="#contact-me"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact-me');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background/20 hover:bg-background/30 border-2 border-background/30 hover:border-background/50 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg group"
          >
            <HiMail className="w-5 h-5" />
            <span className="font-semibold">Get In Touch</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Main Footer Content */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-background to-background/60 flex items-center justify-center shadow-lg">
                  <span className="text-foreground font-bold text-xl">P</span>
                </div>
                <div className="absolute inset-0 bg-background/30 rounded-xl blur-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
                  Owais Ahmad Shah
                </h3>
                <p className="text-sm text-background/60">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-background/70 max-w-md text-sm leading-relaxed">
              Passionate about crafting exceptional digital experiences with modern web
              technologies. Specializing in{' '}
              <span className="text-background font-semibold">MERN Stack</span> and{' '}
              <span className="text-background font-semibold">Next.js</span>.
            </p>

            {/* Built With Section */}
            <div className="space-y-3 pt-4">
              <p className="text-xs font-semibold text-background/60 uppercase tracking-wider">
                Built With
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-background/10 border border-background/20 rounded-lg backdrop-blur-sm hover:bg-background/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <tech.icon
                      className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs font-medium text-background/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-background">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/70 hover:text-background transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-background/40 rounded-full group-hover:bg-background transition-colors duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-background">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:owaisahmadqureshi019@gmail.com"
                className="block text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                owaisahmadqureshi019@gmail.com
              </a>
              <a
                href="tel:+923313767001"
                className="block text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                +92 331 3767001
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-background/60 uppercase tracking-wider mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
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
                      className="absolute -inset-1.5 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: `${social.color}40` }}
                    />

                    {/* Icon container */}
                    <div className="relative p-3 bg-background/10 border border-background/20 backdrop-blur-sm rounded-lg hover:bg-background/20 hover:border-background/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                      <social.icon
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: social.color }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-background/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-foreground">
            <FaCode className="w-4 h-4 text-background/40" />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-background/70">
              © {currentYear}{' '}
              <span className="font-semibold text-background">Owais Ahmad Shah</span>. All rights
              reserved.
            </p>
            <p className="text-xs text-background/60 mt-1">Designed & Developed with passion</p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-sm text-background/70">
            <span>Crafted with</span>
            <div className="flex items-center gap-1.5">
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-background/50">&</span>
              <FaCoffee
                className="w-4 h-4 text-amber-400 animate-bounce"
                style={{ animationDuration: '2s' }}
              />
            </div>
            <span className="font-semibold text-background">in Karachi</span>
          </div>

          {/* Back to Top */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-background/20 hover:bg-background/30 border border-background/30 hover:border-background/50 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 group animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <span className="text-sm font-medium text-background">Back to Top</span>
              <FaArrowUp className="w-3.5 h-3.5 text-background group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          )}
        </div>

        {/* Inspirational Quote */}
        <div
          className={`text-center mt-8 pt-8 border-t border-background/20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl mx-auto p-6 bg-background/5 backdrop-blur-sm rounded-xl border border-background/20">
            <p className="text-sm text-background/70 italic leading-relaxed">
              "The only way to do great work is to love what you do."
            </p>
            <p className="text-xs text-background/60 mt-2 font-semibold">— Steve Jobs</p>
          </div>
        </div>
      </div>

      {/* Animated Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-background/50 via-background/30 to-background/50">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-background to-transparent animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
