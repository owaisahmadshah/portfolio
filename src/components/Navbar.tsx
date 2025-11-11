import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { FaBars } from 'react-icons/fa6';
import { HiArrowDownTray } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsDrawerOpen(false);
  };

  const NavbarContent = ({ isMobile = false }) => {
    const navItems = [
      { id: 'home', label: 'Home', href: '#home' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'contact-me', label: 'Contact', href: '#contact-me' },
    ];

    return (
      <ul className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-6 max-md:pb-10 max-sm:pt-6">
        {navItems.map((item, index) => (
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
            <a
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'relative font-semibold text-sm tracking-wide cursor-pointer transition-all duration-300 ease-in-out',
                'hover:text-primary hover:scale-105',
                'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300',
                'hover:after:w-full',
                activeSection === item.id && 'text-primary after:w-full animate-pulse'
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={cn(
        'flex justify-between items-center w-[90%] max-w-7xl mx-auto transition-all duration-500 ease-in-out',
        !isVisible && 'opacity-0 -translate-y-full',
        isVisible && 'opacity-100 translate-y-0'
      )}
    >
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 group animate-in fade-in slide-in-from-left-8 duration-700">
        <a href="#home" onClick={() => handleNavClick('home')} className="relative">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg transform transition-all duration-500',
                'group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-primary/50',
                scrolled && 'scale-95'
              )}
            >
              <span className="text-primary-foreground font-bold text-lg transition-transform duration-500 group-hover:scale-110">
                P
              </span>
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
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="max-sm:hidden flex items-center gap-8">
        <NavbarContent />
      </div>

      {/* Desktop CTA Button */}
      <a
        href="Owais_Ahmad_Shah_Resume.pdf" // <-- RESUME PATH ADDED HERE
        download
      >
        <Button
          className={cn(
            'max-sm:hidden group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500',
            'animate-in fade-in slide-in-from-right-8',
            'hover:-translate-y-1'
          )}
          style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
          size="default"
        >
          <span className="relative z-10 flex items-center gap-2">
            Resume
            <HiArrowDownTray className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </a>

      {/* Mobile Menu */}
      <div className="sm:hidden animate-in fade-in slide-in-from-right-4 duration-500">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <button
              className={cn(
                'p-2 rounded-lg hover:bg-accent transition-all duration-300',
                'hover:scale-110 hover:rotate-180 active:scale-95'
              )}
              aria-label="Open menu"
            >
              <FaBars className="h-6 w-6 text-foreground" />
            </button>
          </DrawerTrigger>
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
          <DrawerContent className="px-4 pb-8">
            <div className="mx-auto w-full max-w-sm">
              <div className="mt-4 mb-6 text-center animate-in fade-in zoom-in-95 duration-500">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Navigation
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Explore my portfolio</p>
              </div>
              <NavbarContent isMobile={true} />
              <div
                className="mt-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: '500ms' }}
              >
                <a href="Owais_Ahmad_Shah_Resume.pdf" download>
                  <Button
                    className="w-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Download Resume
                      <HiArrowDownTray className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
