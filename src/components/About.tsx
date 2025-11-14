import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiSparkles } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaRegLightbulb, FaCode, FaRocket, FaHeart } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript } from 'react-icons/si';

interface LearningPathItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  isVisible: boolean;
  gradient: string;
}

// interface StatCardProps {
//   value: number;
//   label: string;
//   icon: ReactNode;
//   suffix?: string;
//   index: number;
//   isVisible: boolean;
// }

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [animatedStats, setAnimatedStats] = useState({
  //   projects: 0,
  //   technologies: 0,
  //   learningHours: 0,
  // });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate stats counting up
          const duration = 2000;
          const steps = 60;
          // const increment = (target: number) => target / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            // setAnimatedStats({
            //   projects: Math.min(10, Math.floor(increment(10) * step)),
            //   technologies: Math.min(9, Math.floor(increment(9) * step)),
            //   learningHours: Math.min(500, Math.floor(increment(500) * step)),
            // });

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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Section Header with Badge */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
          <HiSparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Get to Know Me</span>
        </div>

        <h2 className="text-6xl max-md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A passionate developer on a journey to create meaningful digital experiences
        </p>

        {/* <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 rounded-full" /> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-20">
        {/* Profile and Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative group">
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100 animate-pulse" />
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl transition-all duration-500" />

              {/* Image container */}
              <div className="relative">
                <img
                  src={import.meta.env.BASE_URL + 'portfolio-image.png'}
                  alt="Owais Ahmad Shah"
                  className="relative w-auto h-[450px] max-md:h-[350px] rounded-2xl shadow-2xl border-2 border-border/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-3xl group-hover:border-primary/40"
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Floating personality badges */}
                <div
                  className="absolute -top-4 -right-4 bg-background backdrop-blur-md border-2 border-primary/30 rounded-xl px-4 py-2.5 shadow-xl animate-in fade-in zoom-in-95 duration-1000"
                  style={{ animationDelay: '1000ms' }}
                >
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-primary w-4 h-4" />
                    <span className="text-sm font-bold text-primary">Passionate</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-background backdrop-blur-md border-2 border-primary/30 rounded-xl px-4 py-2.5 shadow-xl animate-in fade-in zoom-in-95 duration-1000"
                  style={{ animationDelay: '1200ms' }}
                >
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-primary w-4 h-4" />
                    <span className="text-sm font-bold text-primary">Curious</span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-6 -translate-y-1/2 bg-background backdrop-blur-md border-2 border-primary/30 rounded-xl px-4 py-2.5 shadow-xl animate-in fade-in slide-in-from-right-4 duration-1000"
                  style={{ animationDelay: '1400ms' }}
                >
                  <div className="flex items-center gap-2">
                    <FaCode className="text-primary w-4 h-4" />
                    <span className="text-sm font-bold text-primary">Creative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Journey */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-4xl max-md:text-3xl font-bold bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate{' '}
                <span className="text-foreground font-semibold bg-primary/10 px-2 py-1 rounded">
                  software engineering student
                </span>{' '}
                with a growing fascination for web development. My journey in the MERN stack and
                Next.js has been both challenging and incredibly rewarding.
              </p>

              <p className="text-base">
                What excites me most is how{' '}
                <span className="text-foreground font-semibold">
                  code transforms ideas into living, breathing applications
                </span>
                . Every project I build, like my first chat application, teaches me something new
                and fuels my passion for creating meaningful digital experiences.
              </p>

              <p className="text-base">
                Beyond web development, I'm exploring{' '}
                <span className="text-foreground font-semibold">DevOps practices</span> and modern
                deployment strategies. I believe in continuous learning and am always seeking
                opportunities to grow, collaborate, and contribute to innovative projects.
              </p>
            </div>

            {/* Tech stack I'm working with */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: SiReact, color: '#61DAFB', name: 'React' },
                  { icon: SiNextdotjs, color: '#FFFFFF', name: 'Next.js' },
                  { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
                  { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
                  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:scale-105 group/tech"
                  >
                    <tech.icon
                      className="w-5 h-5 transition-transform duration-300 group-hover/tech:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <StatCard
            value={animatedStats.projects}
            label="Projects Completed"
            icon={<FaCode className="w-6 h-6" />}
            suffix="+"
            index={0}
            isVisible={isVisible}
          />
          <StatCard
            value={animatedStats.technologies}
            label="Technologies Mastered"
            icon={<FaRocket className="w-6 h-6" />}
            suffix="+"
            index={1}
            isVisible={isVisible}
          />
          <StatCard
            value={animatedStats.learningHours}
            label="Hours of Learning"
            icon={<FaHeart className="w-6 h-6" />}
            suffix="+"
            index={2}
            isVisible={isVisible}
          />
        </div> */}

        {/* Learning Path Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl max-md:text-3xl font-bold bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
              My Learning Path
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every step of my journey has shaped who I am as a developer. Here's what drives my
              passion.
            </p>
            {/* <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LearningPathItem
              title="Software Engineering Foundations"
              description="Building a solid foundation in computer science fundamentals while exploring data structures and algorithms. Taking deliberate steps to understand the 'why' behind every concept."
              icon={<HiOutlineAcademicCap size={28} />}
              index={0}
              isVisible={isVisible}
              gradient="from-blue-500 to-cyan-500"
            />
            <LearningPathItem
              title="Modern Web Development"
              description="Mastering the full spectrum of web technologies: React.js for dynamic UIs, Next.js for performance, Node.js & Express for robust backends, and MongoDB for data persistence."
              icon={<IoCodeSlashOutline size={28} />}
              index={1}
              isVisible={isVisible}
              gradient="from-purple-500 to-pink-500"
            />
            <LearningPathItem
              title="First Major Project: Chat Hive"
              description="Built a feature-rich real-time chat application with WebSocket communication, user authentication, and image sharing. This project taught me the importance of architecture and user experience."
              icon={<HiOutlineLightBulb size={28} />}
              index={2}
              isVisible={isVisible}
              gradient="from-orange-500 to-red-500"
            />
            <LearningPathItem
              title="Future Aspirations"
              description="Expanding into advanced state management, microservices architecture, and DevOps. Eager to contribute to open-source, mentor others, and build products that make a real difference."
              icon={<FaRegLightbulb size={28} />}
              index={3}
              isVisible={isVisible}
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// const StatCard: React.FC<StatCardProps> = ({
//   value,
//   label,
//   icon,
//   suffix = '',
//   index,
//   isVisible,
// }) => {
//   return (
//     <div
//       className={`relative group transition-all duration-700 ${
//         isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//       }`}
//       style={{ animationDelay: `${600 + index * 100}ms` }}
//     >
//       {/* Glow effect */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-70 group-hover:opacity-100" />

//       {/* Card */}
//       <div className="relative bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
//         <div className="flex flex-col items-center text-center space-y-4">
//           <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
//             {icon}
//           </div>
//           <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
//             {value}
//             {suffix}
//           </div>
//           <div className="text-sm font-medium text-muted-foreground">{label}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const LearningPathItem: React.FC<LearningPathItemProps> = ({
  title,
  description,
  icon,
  index,
  isVisible,
  gradient,
}) => {
  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${800 + index * 150}ms` }}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
      />

      {/* Card */}
      <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full">
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 p-4 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            <div className="text-white">{icon}</div>
          </div>
          <div className="flex-1 space-y-3">
            <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
              {title}
            </h4>
            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`mt-6 h-1 w-0 bg-gradient-to-r ${gradient} rounded-full group-hover:w-full transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default About;
