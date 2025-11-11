import { useEffect, useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { HiArrowDownTray, HiSparkles } from 'react-icons/hi2';
import { Button } from './ui/button';

// --- Typing Constants ---
const TYPING_SPEED = 120; // Speed for adding a new character
const DELETING_SPEED = 60; // Speed for removing a character
const PAUSE_TIME = 1500; // Time to pause after typing a full word
const stacks = ['MERN', 'Next.js', 'Web', 'Full Stack'];
// -------------------------

const Home = () => {
  // State to hold the currently displayed text (character by character)
  const [displayedText, setDisplayedText] = useState(stacks[0]);

  // Index of the word we are currently typing/deleting in the 'stacks' array
  const [stackIndex, setStackIndex] = useState(0);

  // Flag to determine if we are currently deleting or typing
  const [isDeleting, setIsDeleting] = useState(false);

  // State to toggle the blinking cursor effect
  const [cursorVisible, setCursorVisible] = useState(true);

  // --- Typewriter Logic ---
  useEffect(() => {
    const currentWord = stacks[stackIndex];
    let timer: NodeJS.Timeout;

    // Phase 1: Typing (displayedText is shorter than the current target word)
    if (!isDeleting && displayedText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, TYPING_SPEED);
    }
    // Phase 2: Pause (displayedText matches the current target word)
    else if (!isDeleting && displayedText.length === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true); // Start deleting
      }, PAUSE_TIME);
    }
    // Phase 3: Deleting (displayedText has characters to remove)
    else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, DELETING_SPEED);
    }
    // Phase 4: Transition (displayedText is empty after deleting)
    else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      // Move to the next word index, loop back to 0 if at the end
      setStackIndex((prevIndex) => (prevIndex + 1) % stacks.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, stackIndex]);

  // --- Blinking Cursor Logic ---
  useEffect(() => {
    // Only blink the cursor when actively typing or deleting
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blink every half second

    return () => clearInterval(blinkInterval);
  }, []);
  // -------------------------

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/owais-ahmad-shah',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
      bgColor: 'hover:bg-[#0A66C2]/10',
    },
    {
      icon: FaSquareXTwitter,
      href: 'https://x.com/owais_ahmadshah',
      label: 'Twitter',
      color: 'hover:text-foreground',
      bgColor: 'hover:bg-foreground/10',
    },
    {
      icon: FaGithubSquare,
      href: 'https://github.com/owaisahmadshah',
      label: 'GitHub',
      color: 'hover:text-foreground',
      bgColor: 'hover:bg-foreground/10',
    },
  ];

  return (
    <main className="w-[90%] max-w-7xl mx-auto px-4 py-8 flex items-center justify-between min-h-[90vh] max-md:flex-col-reverse max-md:gap-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-10 w-1/2 max-md:w-full max-md:text-center z-10">
        {/* Badge */}
        <div className="animate-in fade-in slide-in-from-left-8 duration-700 inline-flex max-md:mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <HiSparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </div>
        </div>

        {/* Heading */}
        <div
          className="grid gap-6 animate-in fade-in slide-in-from-left-8 duration-700"
          style={{ animationDelay: '200ms' }}
        >
          <div className="space-y-3">
            <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold leading-tight">
              <span className="text-muted-foreground font-normal">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-in fade-in zoom-in-95 duration-1000">
                Owais Ahmad Shah
              </span>
            </h1>
            <div className="flex items-center gap-3 max-md:justify-center relative min-h-[40px]">
              {/* This h2 holds the dynamically changing text and the cursor */}
              <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl font-bold">
                <span className="inline-block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {displayedText}
                </span>

                {/* Blinking Cursor */}
                <span
                  className={`inline-block ml-1 w-0.5 h-full ${
                    cursorVisible ? 'bg-foreground' : 'bg-transparent'
                  } transition-colors duration-100`}
                >
                  &nbsp;
                </span>
              </h2>
              <span className="text-4xl max-lg:text-3xl max-md:text-2xl font-bold">Developer</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base max-w-xl max-md:max-w-full">
            I'm a passionate developer focused on building{' '}
            <span className="text-foreground font-semibold">
              clean, functional web applications
            </span>
            . Working with MERN stack and Next.js, I create user-friendly solutions that solve
            real-world problems. Continuously learning and evolving to deliver exceptional digital
            experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 max-md:justify-center animate-in fade-in slide-in-from-left-8 duration-700"
          style={{ animationDelay: '400ms' }}
        >
          <a href="#contact-me">
            <Button
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Button>
          </a>
          <a
            href="Owais_Ahmad_Shah_Resume.pdf" // <-- RESUME PATH ADDED HERE
            download
          >
            <Button
              size="lg"
              variant="outline"
              className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Resume
                <HiArrowDownTray className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-4 max-md:justify-center animate-in fade-in slide-in-from-left-8 duration-700"
          style={{ animationDelay: '600ms' }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`p-3 rounded-xl transition-all duration-300 ${social.color} ${social.bgColor} hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-lg group`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <social.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div
          className="flex gap-8 max-md:justify-center pt-4 border-t border-border/50 animate-in fade-in slide-in-from-left-8 duration-700"
          style={{ animationDelay: '800ms' }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-muted-foreground mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              1+
            </div>
            <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-muted-foreground mt-1">Technologies</div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-1/2 max-md:w-full flex justify-center items-center animate-in fade-in zoom-in-95 duration-1000"
        style={{ animationDelay: '400ms' }}
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100" />

          {/* Image container */}
          <div className="relative">
            <img
              src={import.meta.env.BASE_URL + 'portfolio-image.png'}
              alt="Owais Ahmad Shah"
              className="relative w-auto h-[500px] max-lg:h-[400px] max-md:h-[350px] object-cover rounded-2xl shadow-2xl border-2 border-border/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl group-hover:border-primary/30"
            />

            {/* Floating badges */}
            <div
              className="absolute -top-4 -right-4 bg-background border-2 border-primary/30 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm animate-in fade-in zoom-in-95 duration-1000"
              style={{ animationDelay: '1200ms' }}
            >
              <div className="text-sm font-bold text-primary">⚡ Fast Learner</div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-background border-2 border-primary/30 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm animate-in fade-in zoom-in-95 duration-1000"
              style={{ animationDelay: '1400ms' }}
            >
              <div className="text-sm font-bold text-primary">🚀 Problem Solver</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
