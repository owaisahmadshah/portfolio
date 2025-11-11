import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineAcademicCap, HiOutlineLightBulb } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa';

interface LearningPathItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    technologies: 0,
    learningHours: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const fool: boolean = false;
          if (fool) {
            console.log(animatedStats);
          }

          // Animate stats counting up
          const duration = 2000;
          const steps = 60;
          const increment = (target: number) => target / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            setAnimatedStats({
              projects: Math.min(5, Math.floor(increment(5) * step)),
              technologies: Math.min(8, Math.floor(increment(8) * step)),
              learningHours: Math.min(500, Math.floor(increment(500) * step)),
            });

            if (step === steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-4 py-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Section Title */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <h2 className="text-5xl font-bold inline-block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-16">
        {/* Profile and Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with enhanced effects */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100" />

              {/* Main image */}
              <div className="relative">
                <img
                  src={import.meta.env.BASE_URL + 'portfolio-image.png'}
                  alt="Owais Ahmad Shah"
                  className="w-auto h-[450px] rounded-2xl shadow-2xl border-2 border-border/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl group-hover:border-primary/30"
                />

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 bg-background/80 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 shadow-lg animate-fade-in-up delay-1000">
                  <div className="text-xs font-semibold text-primary">🚀 Passionate</div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-background/80 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 shadow-lg animate-fade-in-up delay-1200">
                  <div className="text-xs font-semibold text-primary">💡 Curious</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Journey */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              My Journey
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate{' '}
                <span className="text-foreground font-semibold">software engineering student</span>{' '}
                with a growing interest in web development, particularly the MERN stack and Next.js.
                My journey in programming began recently, but I've quickly discovered my enthusiasm
                for creating digital solutions.
              </p>

              <p>
                I'm fascinated by how{' '}
                <span className="text-foreground font-semibold">
                  code can transform ideas into functional applications
                </span>
                . I recently built my first chat application, which was a simple project but an
                important milestone in my learning process.
              </p>

              <p>
                Beyond web development, I'm very interested in exploring{' '}
                <span className="text-foreground font-semibold">DevOps practices</span> to
                understand how modern applications are deployed and scaled. I'm committed to
                continuous learning and excited about future opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div
          className={`mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              My Learning Path
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey through software development has been exciting and rewarding. Here's a
              glimpse into my current focus and future aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LearningPathItem
              title="Software Engineering Foundations"
              description="Exploring the basics of software engineering while gradually working my way through data structures and algorithms. I'm taking it step by step to build a foundation I can grow from."
              icon={<HiOutlineAcademicCap className="text-primary" size={24} />}
              index={0}
              isVisible={isVisible}
            />
            <LearningPathItem
              title="Web Development Skills"
              description="Learning modern web technologies including HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js and MongoDB to create full-stack applications."
              icon={<IoCodeSlashOutline className="text-primary" size={24} />}
              index={1}
              isVisible={isVisible}
            />
            <LearningPathItem
              title="First Project: Chat Application"
              description="Successfully built a simple chat application as my first hands-on project, implementing basic user authentication and real-time messaging functionality."
              icon={<HiOutlineLightBulb className="text-primary" size={24} />}
              index={2}
              isVisible={isVisible}
            />
            <LearningPathItem
              title="Future Goals"
              description="Aiming to master responsive web design, state management, API integration, and deployment processes. Excited to contribute to open-source projects and build a diverse portfolio."
              icon={<FaRegLightbulb className="text-primary" size={24} />}
              index={3}
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningPathItem: React.FC<LearningPathItemProps & { isVisible: boolean }> = ({
  title,
  description,
  icon,
  index,
  isVisible,
}) => {
  return (
    <div
      className={`
      bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 
      hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer
      ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}
    `}
      style={{ animationDelay: `${700 + index * 100}ms` }}
    >
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
