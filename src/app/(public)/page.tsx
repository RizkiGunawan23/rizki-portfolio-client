import About from "@/features/public/about/components/About";
import Hero from "@/features/public/hero/components/Hero";
import Projects from "@/features/public/projects/components/Projects";
import Skills from "@/features/public/skills/components/Skills";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="flex h-screen content-center items-center justify-center bg-[#2d2f33]"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="flex h-screen content-center items-center justify-center bg-[#25262a]"
      >
        <About />
      </section>
      <section
        id="projects"
        className="flex h-screen content-center items-center justify-center bg-[#2d2f33]"
      >
        <Projects />
      </section>
      <section
        id="skills"
        className="flex h-screen content-center items-center justify-center bg-[#25262a]"
      >
        <Skills />
      </section>
    </div>
  );
}
