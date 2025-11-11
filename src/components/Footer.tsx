import { FaCoffee } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaSquareXTwitter, FaHeart, FaArrowUp } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/owais-ahmad-shah',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
    {
      icon: FaSquareXTwitter,
      href: 'https://x.com/owais_ahmadshah',
      label: 'Twitter',
      color: 'hover:text-background/80',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/owaisahmadshah',
      label: 'GitHub',
      color: 'hover:text-background/80',
    },
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

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-48 h-48 bg-background/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 right-1/4 w-48 h-48 bg-background/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-[90%] max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left space-y-4 flex-1">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="relative">
                <HiSparkles className="w-6 h-6 text-background animate-pulse" />
                <div className="absolute inset-0 bg-background/30 rounded-full blur-sm animate-ping" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
                Owais Ahmad Shah
              </h3>
            </div>

            <p className="text-background/70 max-w-md text-sm leading-relaxed">
              Passionate software engineering student crafting digital experiences with modern web
              technologies. Let's build the future together! 🚀
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex gap-6 text-sm">
              {['home', 'skills', 'about', 'projects', 'contact-me'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-background/70 hover:text-background transition-all duration-300 hover:underline capitalize"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 rounded-lg bg-background/10 border border-background/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 ${social.color} group`}
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-background/30 to-transparent my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          {/* Copyright */}
          <div className="text-background/70">
            <p className="text-sm">© {currentYear} Owais Ahmad Shah. All rights reserved.</p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-sm text-background/70">
            <span>Crafted with</span>
            <div className="flex items-center gap-1">
              <FaHeart className="w-3 h-3 text-red-600 animate-pulse" />
              <span>&</span>
              <FaCoffee className="w-3 h-3 text-amber-400" />
            </div>
            <span>by Owais</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/70 hover:text-background transition-all duration-300 group"
          >
            <span className="text-sm">Back to Top</span>
            <div className="p-1 rounded bg-background/10 group-hover:bg-background/20 transition-colors duration-300">
              <FaArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-6 pt-6 border-t border-background/20">
          <p className="text-xs text-background/60 italic max-w-2xl mx-auto">
            "The only way to do great work is to love what you do."
            <span className="not-italic text-background/80"> - Steve Jobs</span>
          </p>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-background/50 via-background/30 to-background/50" />
    </footer>
  );
};

export default Footer;
