import { useEffect, useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

const Home = () => {
  const [stack, setStack] = useState('MERN');
  const [stackIndex, setStackIndex] = useState(0);

  const stacks = ['MERN', 'Next.js', 'Web'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStackIndex((prevIndex) => {
        const newIndex = prevIndex === stacks.length - 1 ? 0 : prevIndex + 1;
        setStack(stacks[newIndex]);
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-[90%] max-w-7xl mx-auto px-4 py-8 flex items-center justify-between min-h-[90vh] max-md:flex-col-reverse max-md:gap-10">
      {/* Text Content */}
      <div className="flex flex-col gap-10 w-1/2 max-md:w-full max-md:text-center">
        <div className="grid gap-6">
          <div>
            <h1 className="text-4xl font-semibold mb-2">
              Hello I'm <strong>Owais Ahmad Shah</strong>
            </h1>
            <h1 className="text-4xl font-semibold">
              <strong>{stack}</strong> Developer
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            I'm a developer focused on building clean, functional web applications. Working with
            MERN stack and Next.js, I strive to create user-friendly solutions that solve practical
            problems. I'm continuously learning and improving my skills to deliver better digital
            experiences.
          </p>
        </div>
        <div className="flex gap-5 max-md:justify-center">
          <a
            href="https://www.linkedin.com/in/owais-ahmad-shah"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://x.com/owais_ahmadshah"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <FaSquareXTwitter size={40} />
          </a>
          <a
            href="https://github.com/owaisahmadshah"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <FaGithubSquare size={40} />
          </a>
        </div>
      </div>

      <div className="w-1/2 max-md:w-full flex justify-center items-center">
        <img
          src="/public/portfolio-image.png"
          alt="Owais Ahmad Shah"
          className="w-auto h-[500px] object-cover rounded-2xl shadow-xl border-2 border-gray-100"
        />
      </div>
    </main>
  );
};

export default Home;
