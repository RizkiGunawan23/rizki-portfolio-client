"use client";

import { RefObject, createContext, useContext, useRef } from "react";

import { ChildrenNode } from "@/shared/types";

interface ScrollContextType {
  heroRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  scrollToSection: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: ChildrenNode) {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    let targetRef: RefObject<HTMLElement | null> | null = null;

    switch (sectionId) {
      case "#hero":
      case "hero":
        targetRef = heroRef;
        break;
      case "#about":
      case "about":
        targetRef = aboutRef;
        break;
      case "#projects":
      case "projects":
        targetRef = projectsRef;
        break;
      case "#skills":
      case "skills":
        targetRef = skillsRef;
        break;
    }

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const value = {
    heroRef,
    aboutRef,
    projectsRef,
    skillsRef,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
