import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
// import { ModeToggle } from './mode-toggle';
import { cn } from '@/lib/utils';
import { FaBars } from 'react-icons/fa6';
import { HiArrowDownTray } from 'react-icons/hi2';

const Navbar = () => {
  const NavbarContent = () => {
    const listClass =
      'font-bold text-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-primary hover:underline underline-offset-4';

    return (
      <>
        <ul className="flex max-sm:flex-col items-center justify-center gap-10 max-sm:gap-5 max-md:pb-10">
          <li className={listClass}>
            <a href="#about">About Me</a>
          </li>
          <li className={cn(listClass)}>
            <a href="#skills">Skills</a>
          </li>
          <li className={listClass}>
            <a href="#projects">Projects</a>
          </li>
          <li className={listClass}>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </>
    );
  };

  return (
    <nav className="flex justify-between items-center w-[90%] mx-auto">
      <div className="flex items-center gap-3">
        {/* <ModeToggle /> */}
        <p className="text-base cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          <strong>
            <a href="#">Personal</a>
          </strong>
        </p>
      </div>
      <span className="max-sm:hidden">
        <NavbarContent />
      </span>
      <Button className="max-sm:hidden">
        Resume <HiArrowDownTray />
      </Button>
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <FaBars className="h-[30px]" />
          </DrawerTrigger>
          <DrawerTitle></DrawerTitle>
          <DrawerContent>
            <NavbarContent />
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
