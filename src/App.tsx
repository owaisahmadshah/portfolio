import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';

function App() {
  return (
    <main>
      <section className="w-full h-[90px] flex items-center bg-background text-foreground fixed opacity-95 z-50">
        <Navbar />
      </section>
      <section id="#" className="pt-[95px]">
        <Home />
      </section>
      <section id="skills" className="pt-[95px] pb-[95px]">
        <Skills />
      </section>
      <section id="about" className="pt-[95px] pb-[95px] bg-foreground text-background">
        <About />
      </section>
      <section id="projects" className="pt-[95px]">
        <Projects />
      </section>
      {/* <section id="contact-me" className="pt-[95px]"></section> */}
    </main>
  );
}

export default App;
