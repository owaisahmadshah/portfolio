import { FaGitAlt } from 'react-icons/fa6';
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiSocketdotio, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skillsClass =
    'flex flex-col items-center justify-around border h-40 w-40 border-2 border-foreground rounded-sm';
  const skillsTextClass = 'text-2xl';
  const skillsIconSize = 70;
  return (
    <main className="w-[90%] mx-auto flex flex-col items-center gap-20">
      <h1 className="text-4xl font-semibold">
        My <strong>Skills</strong>
      </h1>
      <ul className="flex gap-10 max-sm:gap-3 flex-wrap items-center justify-center px-10 max-sm:px-0">
        <li className={skillsClass}>
          <RiReactjsFill size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>React.js</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <SiExpress size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>Express.js</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <RiNextjsFill size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>Next.js</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <SiMongodb size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>MongoDB</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <RiJavascriptFill size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>JavaScript</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <SiTypescript size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>TypeScript</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <SiTailwindcss size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>Tailwind CSS</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <FaGitAlt size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>Git</strong>
          </p>
        </li>
        <li className={skillsClass}>
          <SiSocketdotio size={skillsIconSize} />
          <p className={skillsTextClass}>
            <strong>Socket.io</strong>
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Skills;
