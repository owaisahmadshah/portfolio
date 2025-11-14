import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { FaBars } from 'react-icons/fa6';
import { HiArrowDownTray, HiXMark } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if scrolled past threshold
      setScrolled(currentScrollY > 20);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (currentScrollY / windowHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact-me'];
      const scrollPosition = currentScrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsDrawerOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const NavbarContent = ({ isMobile = false }) => {
    const navItems = [
      { id: 'home', label: 'Home', emoji: '🏠' },
      { id: 'about', label: 'About', emoji: '👤' },
      { id: 'skills', label: 'Skills', emoji: '⚡' },
      { id: 'projects', label: 'Projects', emoji: '🚀' },
      { id: 'contact-me', label: 'Contact', emoji: '📧' },
    ];

    return (
      <ul className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-6 max-md:pb-10 max-sm:pt-6">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <li
              key={item.id}
              className={cn(
                'animate-in fade-in slide-in-from-top-4',
                isMobile ? 'animate-in fade-in slide-in-from-bottom-4' : ''
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'relative font-semibold text-sm tracking-wide cursor-pointer transition-all duration-300 ease-in-out group flex items-center gap-2',
                  'hover:text-primary hover:scale-105',
                  isActive && 'text-primary'
                )}
              >
                {/* Emoji (mobile only) */}
                <span className="sm:hidden text-lg transition-transform duration-300 group-hover:scale-125">
                  {item.emoji}
                </span>

                <span className="relative">
                  {item.label}

                  {/* Animated underline */}
                  <span
                    className={cn(
                      'absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />

                  {/* Active dot indicator */}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-[89px] left-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={cn(
          'flex justify-between items-center w-[90%] max-w-7xl mx-auto transition-all duration-500 ease-in-out',
          !isVisible && 'opacity-0 -translate-y-full',
          isVisible && 'opacity-100 translate-y-0'
        )}
      >
        {/* Logo/Brand */}
        <div className="flex items-center gap-3 group animate-in fade-in slide-in-from-left-8 duration-700">
          <button onClick={() => handleNavClick('home')} className="relative">
            <div className="flex items-center gap-2">
              {/* Logo with pulsing ring when home is active */}
              <div className="relative">
                {activeSection === 'home' && (
                  <div className="absolute inset-0 rounded-lg bg-primary/30 animate-ping" />
                )}

                <div
                  className={cn(
                    'relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg transform transition-all duration-500',
                    'group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-primary/50',
                    scrolled && 'scale-95'
                  )}
                >
                  <span className="text-primary-foreground font-bold text-lg transition-transform duration-500 group-hover:scale-110">
                    P
                  </span>
                </div>
              </div>

              <div className="max-sm:hidden overflow-hidden">
                <p
                  className={cn(
                    'text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent',
                    'transition-all duration-500',
                    scrolled && 'text-base'
                  )}
                >
                  Portfolio
                </p>
                <p
                  className={cn(
                    'text-xs text-muted-foreground -mt-1 transition-all duration-500',
                    scrolled && 'text-[10px] opacity-0'
                  )}
                >
                  Personal Brand
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="max-sm:hidden flex items-center gap-8">
          <NavbarContent />
        </div>

        {/* Desktop CTA Button */}
        <a href="/Owais_Ahmad_Shah_Resume.pdf" download className="max-sm:hidden">
          <Button
            className={cn(
              'group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500',
              'animate-in fade-in slide-in-from-right-8',
              'hover:-translate-y-1 hover:scale-105'
            )}
            style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
            size="default"
          >
            <span className="relative z-10 flex items-center gap-2">
              Resume
              <HiArrowDownTray className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Button>
        </a>

        {/* Mobile Menu */}
        <div className="sm:hidden animate-in fade-in slide-in-from-right-4 duration-500">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button
                className={cn(
                  'relative p-2 rounded-lg hover:bg-accent transition-all duration-300',
                  'hover:scale-110 active:scale-95'
                )}
                aria-label="Open menu"
              >
                {/* Notification dot when not on home */}
                {activeSection !== 'home' && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}

                <FaBars
                  className={cn(
                    'h-6 w-6 text-foreground transition-transform duration-300',
                    isDrawerOpen && 'rotate-90'
                  )}
                />
              </button>
            </DrawerTrigger>
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <DrawerContent className="px-4 pb-8">
              <div className="mx-auto w-full max-w-sm">
                {/* Close button */}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <HiXMark className="w-6 h-6" />
                </button>

                <div className="mt-4 mb-6 text-center animate-in fade-in zoom-in-95 duration-500">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Navigation
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Explore my portfolio</p>

                  {/* Current section indicator */}
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-primary capitalize">
                      {activeSection.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <NavbarContent isMobile={true} />

                <div
                  className="mt-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: '500ms' }}
                >
                  <a href="/Owais_Ahmad_Shah_Resume.pdf" download>
                    <Button
                      className="w-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                      size="lg"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Download Resume
                        <HiArrowDownTray className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
                      </span>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Button>
                  </a>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
