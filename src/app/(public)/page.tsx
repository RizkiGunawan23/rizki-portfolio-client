"use client";

import { useScroll } from "@/components/providers/ScrollProvider";

import About from "@/features/public/about/components/About";
import Hero from "@/features/public/hero/components/Hero";
import Projects from "@/features/public/projects/components/Projects";
import Skills from "@/features/public/skills/components/Skills";

export default function Home() {
  const { heroRef, aboutRef, projectsRef, skillsRef } = useScroll();

  return (
    <div>
      <section
        ref={heroRef}
        id="hero"
        className="flex h-screen content-center items-center justify-center bg-[#2d2f33]"
      >
        <Hero />
      </section>
      <section
        ref={aboutRef}
        id="about"
        className="flex h-screen content-center items-center justify-center bg-[#25262a]"
      >
        <About />
      </section>
      <section
        ref={projectsRef}
        id="projects"
        className="flex h-screen content-center items-center justify-center bg-[#2d2f33]"
      >
        <Projects />
      </section>
      <section
        ref={skillsRef}
        id="skills"
        className="flex h-screen content-center items-center justify-center bg-[#25262a]"
      >
        <Skills />
      </section>
    </div>
  );
}
