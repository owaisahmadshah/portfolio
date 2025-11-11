import { Project } from './Project';

type projectProps = {
  projectTitle: string;
  projectDescription: string[];
  imagesSrc: string[];
  repo_link: string;
  idx?: number; // Index number of the project
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
      imagesSrc: [
        // Ensure these are correct paths
        'sign-in.png',
        'sign-up.png',
        'verify-otp.png',
        'reset-verify-otp.png',
        'unread-messages.png',
        'messages-typing.png',
        'messages-options.png',
        'settings.png',
      ],
    },
  ];

  return (
    <main className="relative w-full max-w-7xl mx-auto px-4 py-8 min-h-[90vh] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute bottom-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Section Title (This already animates in) */}
      <div
        className="text-center mb-20 animate-in fade-in slide-in-from-top-8 duration-700"
        style={{ animationDelay: '100ms' }}
      >
        <h1 className="text-5xl max-md:text-4xl font-bold">
          My{' '}
          <span className="bg-gradient-to-r from-background to-background/70 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A selection of work I'm proud to share.
        </p>
      </div>

      {/* Projects Grid - ADDED ENTRANCE ANIMATION HERE */}
      <div
        className="grid gap-32 animate-in fade-in slide-in-from-bottom-8 duration-700"
        style={{ animationDelay: '300ms' }} // Start shortly after the title
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            imagesSrc={project.imagesSrc}
            repo_link={project.repo_link}
            idx={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
