import { FaGitAlt } from 'react-icons/fa6';
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: RiReactjsFill,
      name: 'React.js',
      color: '#61DAFB',
      category: 'Frontend',
      level: 'Advanced',
    },
    {
      icon: SiExpress,
      name: 'Express.js',
      color: '#FFFFFF',
      category: 'Backend',
      level: 'Advanced',
    },
    {
      icon: RiNextjsFill,
      name: 'Next.js',
      color: '#FFFFFF',
      category: 'Framework',
      level: 'Intermediate',
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      color: '#47A248',
      category: 'Database',
      level: 'Advanced',
    },
    {
      icon: RiJavascriptFill,
      name: 'JavaScript',
      color: '#F7DF1E',
      category: 'Language',
      level: 'Expert',
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      color: '#3178C6',
      category: 'Language',
      level: 'Advanced',
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      color: '#06B6D4',
      category: 'Styling',
      level: 'Expert',
    },
    {
      icon: FaGitAlt,
      name: 'Git',
      color: '#F05032',
      category: 'Version Control',
      level: 'Advanced',
    },
    {
      icon: SiSocketdotio,
      name: 'Socket.io',
      color: '#FFFFFF',
      category: 'Real-time',
      level: 'Intermediate',
    },
  ];

  return (
    <main className="w-[90%] max-w-7xl mx-auto flex flex-col items-center gap-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Header */}
      <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm mb-2">
          <span className="w-2 h-2 bg-background rounded-full animate-pulse" />
          <span className="text-sm font-medium">Technical Expertise</span>
        </div>
        <h1 className="text-5xl max-md:text-4xl font-bold">
          My{' '}
          <span className="bg-gradient-to-r from-background to-background/70 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-background/70 max-w-2xl mx-auto text-lg">
          A comprehensive toolkit of modern technologies I use to build exceptional web applications
        </p>
      </div>

      {/* Skills Grid */}
      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-8 max-sm:gap-4 w-full px-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isHovered = hoveredSkill === index;

          return (
            <li
              key={index}
              className="group relative animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow Effect */}
              <div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
                }}
              />

              {/* Card */}
              <div className="relative flex flex-col items-center justify-center gap-4 bg-background/5 backdrop-blur-sm border-2 border-background/20 rounded-2xl p-8 max-sm:p-6 h-48 max-sm:h-40 transition-all duration-500 hover:scale-105 hover:border-background/40 hover:bg-background/10 hover:shadow-2xl group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: skill.color }}
                  />
                  <Icon
                    size={70}
                    className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      color: isHovered ? skill.color : 'currentColor',
                      filter: isHovered ? `drop-shadow(0 0 10px ${skill.color})` : 'none',
                    }}
                  />
                </div>

                {/* Text */}
                <div className="text-center space-y-1">
                  <p className="text-xl max-sm:text-lg font-bold transition-colors duration-300">
                    {skill.name}
                  </p>
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs bg-background/20 px-2 py-1 rounded-full border border-background/30">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-1 rounded-full bg-background/20"
                        style={{
                          backgroundColor:
                            i < (skill.level === 'Expert' ? 3 : skill.level === 'Advanced' ? 2 : 1)
                              ? skill.color
                              : 'currentColor',
                          opacity:
                            i < (skill.level === 'Expert' ? 3 : skill.level === 'Advanced' ? 2 : 1)
                              ? 1
                              : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Bottom Stats */}
      <div
        className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 w-full max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700"
        style={{ animationDelay: '900ms' }}
      >
        <div className="text-center p-6 bg-background/5 backdrop-blur-sm rounded-2xl border border-background/20 hover:bg-background/10 transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">9+</div>
          <div className="text-background/70 text-sm">Technologies Mastered</div>
        </div>
        <div className="text-center p-6 bg-background/5 backdrop-blur-sm rounded-2xl border border-background/20 hover:bg-background/10 transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">Full</div>
          <div className="text-background/70 text-sm">Stack Development</div>
        </div>
        <div className="text-center p-6 bg-background/5 backdrop-blur-sm rounded-2xl border border-background/20 hover:bg-background/10 transition-all duration-300 hover:scale-105">
          <div className="text-4xl font-bold mb-2">Modern</div>
          <div className="text-background/70 text-sm">Tech Stack</div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
