import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FaGithub } from 'react-icons/fa6';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
        'This project demonstrates my ability to create secure applications with complexreal-time features while maintaining clean architecture in a monorepo structure usingpnpm workspaces.',
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

const Project = ({ projectTitle, projectDescription, imagesSrc, repo_link, idx }: projectProps) => {
  return (
    <div
      className={cn(
        'flex max-sm:flex-col max-sm:items-center justify-center gap-24 max-sm:gap-6',
        idx && idx % 2 !== 0 && 'flex-row-reverse'
      )}
    >
      {' '}
      <div>
        <Carousel className="w-72 max-sm:w-52 block">
          <CarouselContent>
            {imagesSrc.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="text-card bg-card-foreground">
                    <CardContent className="flex aspect-square items-center justify-center">
                      {/* Dialog for enlarged image */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <img
                            src={img}
                            alt={`Project image ${index + 1}`}
                            className="cursor-pointer object-cover w-full h-full rounded-lg transition-transform hover:scale-105"
                          />
                        </DialogTrigger>
                        <DialogContent className="p-0 bg-background max-w-4xl max-h-[90vh] flex items-center justify-center">
                          <img
                            src={img}
                            alt={`Project full image ${index + 1}`}
                            className="max-w-full max-h-[85vh] object-contain rounded-md"
                          />
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant={'default'}
            className="bg-foreground hover:text-background/90 border-2"
          />
          <CarouselNext
            variant={'default'}
            className="bg-foreground hover:text-background/90 border-2"
          />
        </Carousel>
      </div>
      <div className="w-[40%] max-sm:w-[90%]">
        <div>
          <h1 className="text-2xl">
            <strong>{projectTitle}</strong>
          </h1>
        </div>
        <div className="text-muted-foreground leading-relaxed grid gap-3 pt-5 text-sm">
          {projectDescription.map((projectDesc, index) => (
            <p key={index}>{projectDesc}</p>
          ))}
        </div>
        <a href={repo_link} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 mt-2">
            <FaGithub /> View Code
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
