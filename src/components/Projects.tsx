import {
  SiSocketdotio,
  SiMongodb,
  SiReact,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiJsonwebtokens,
} from 'react-icons/si';
import { Project } from './Project';

type projectProps = {
  projectTitle: string;
  projectDescription: string[];
  imagesSrc: string[];
  repo_link: string;
  live_link?: string;
  tags: string[];
  techStack: { icon: any; name: string; color: string }[];
  idx?: number;
};

const Projects = () => {
  const projects: projectProps[] = [
    {
      projectTitle: 'Chat Hive',
      projectDescription: [
        'Chat Hive is a full-stack real-time messaging platform I built from the ground up using modern web technologies. The application enables users to communicate instantly through text messages and image sharing in a secure environment.',
        'I implemented WebSocket connections using Socket.io to provide real-time communication capabilities, secured the platform with Clerk authentication, and created an intuitive UI with React.js and Shadcn components. For data persistence, I used MongoDB, while Cloudinary handles media storage.',
        'This project demonstrates my ability to create secure applications with complex real-time features while maintaining clean architecture in a monorepo structure using pnpm workspaces.',
      ],
      repo_link: 'https://github.com/owaisahmadshah/chat-hive',
      live_link: '',
      tags: ['Real-time', 'Full Stack', 'WebSockets', 'Monorepo'],
      techStack: [
        { icon: SiReact, name: 'React.js', color: '#61DAFB' },
        { icon: SiExpress, name: 'Express.js', color: '#EEEEEE' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
        { icon: SiSocketdotio, name: 'Socket.io', color: '#FFFFFF' },
        { icon: SiTypescript, name: 'Typescript', color: '#3178C6' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
        { icon: SiJsonwebtokens, name: 'JSON Web Token', color: '#38BDF8' },
      ],
      imagesSrc: [
        'loader.png',
        'sign-in.png',
        'sign-up.png',
        'default-home.png',
        'home-messages.png',
        'create-chat.png',
        'loader-dark.png',
        'sign-in-dark.png',
        'sign-up-dark.png',
        'default-home-dark.png',
        'home-messages-dark.png',
      ],
    },
  ];

  return (
    <main className="relative w-full max-w-7xl mx-auto px-4 py-8 min-h-[90vh] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Section Header */}
      <div
        className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-top-8 duration-700"
        style={{ animationDelay: '100ms' }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-2">
          <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground">Portfolio Showcase</span>
        </div>

        <h1 className="text-6xl max-md:text-4xl font-bold">
          Featured{' '}
          <span className="bg-gradient-to-r from-background via-background/80 to-background/60 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="text-lg text-background/70 max-w-2xl mx-auto">
          Crafting digital experiences that combine beautiful design with powerful functionality
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-32 max-md:gap-20">
        {projects.map((project, index) => (
          <Project
            key={index}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            imagesSrc={project.imagesSrc}
            repo_link={project.repo_link}
            live_link={project.live_link}
            tags={project.tags}
            techStack={project.techStack}
            idx={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
