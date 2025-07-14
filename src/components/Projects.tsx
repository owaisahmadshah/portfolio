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
        'This project demonstrates my ability to create secure applications with complex real-time features while maintaining clean architecture in a monorepo structure usingpnpm workspaces.',
      ],
      repo_link: 'https://github.com/owaisahmadshah/chat-hive',
      imagesSrc: [
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
    <main className="w-[90%] mx-auto min-h-[90vh]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold inline-block">
          My <strong>Projects</strong>
        </h2>
      </div>
      <div className="grid gap-14">
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
