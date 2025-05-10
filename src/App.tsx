import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

function App() {
  return (
    <main>
      <section className="w-full h-[90px] flex items-center bg-background text-foreground fixed opacity-95 z-50">
        <Navbar />
      </section>
      <section id="#" className="pt-[95px]">
        <Home />
      </section>
      <section id="skills" className="pt-[95px] pb-[95px]  bg-foreground text-background">
        <Skills />
      </section>
      <section id="about" className="pt-[95px] max-sm:pb-[95px]">
        <About />
      </section>
      <section id="projects" className="py-[95px] bg-foreground text-background">
        <Projects />
      </section>
      <section id="contact-me" className="pt-[95px] pb-[95px]">
        <Contact />
      </section>
    </main>
  );
}

export default App;
