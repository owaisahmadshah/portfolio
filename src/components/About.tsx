import type { ReactNode } from 'react';
import { HiOutlineAcademicCap, HiOutlineLightBulb } from 'react-icons/hi';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa';

interface LearningPathItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold inline-block">About Me</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10">
        {/* Profile and Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src={import.meta.env.BASE_URL + 'portfolio-image.png'}
              alt="Owais Ahmad Shah"
              className="w-auto h-[400px] rounded-2xl shadow-lg border-2 border-border"
            />
          </div>

          {/* Right Column - Journey */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate software engineering student with a growing interest in web
              development, particularly the MERN stack and Next.js. My journey in programming began
              recently, but I've quickly discovered my enthusiasm for creating digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I'm fascinated by how code can transform ideas into functional applications. I
              recently built my first chat application, which was a simple project but an important
              milestone in my learning process. Beyond web development, I'm very interested in
              exploring DevOps practices to understand how modern applications are deployed and
              scaled.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I'm committed to continuous learning and am excited about the opportunity to work on
              more complex projects in the future. This portfolio is my first step towards
              showcasing my growing skills and connecting with the development community.
            </p>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">My Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LearningPathItem
              title="Software Engineering Foundations"
              description="Exploring the basics of software engineering while gradually working my way through data structures and algorithms. I'm taking it step by step to build a foundation I can grow from."
              icon={<HiOutlineAcademicCap className="text-primary" size={24} />}
            />
            <LearningPathItem
              title="Web Development Skills"
              description="Learning modern web technologies including HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js and MongoDB to create full-stack applications."
              icon={<IoCodeSlashOutline className="text-primary" size={24} />}
            />
            <LearningPathItem
              title="First Project: Chat Application"
              description="Successfully built a simple chat application as my first hands-on project, implementing basic user authentication and real-time messaging functionality."
              icon={<HiOutlineLightBulb className="text-primary" size={24} />}
            />
            <LearningPathItem
              title="Future Goals"
              description="Aiming to master responsive web design, state management, API integration, and deployment processes. Excited to contribute to open-source projects and build a diverse portfolio."
              icon={<FaRegLightbulb className="text-primary" size={24} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningPathItem: React.FC<LearningPathItemProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-foreground">
      <div className="flex items-start">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
