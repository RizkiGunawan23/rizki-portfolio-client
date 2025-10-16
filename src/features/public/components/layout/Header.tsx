"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Intersection Observer untuk deteksi section yang lebih akurat
  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log("Section in view:", sectionId);
            setActiveSection(`#${sectionId}`);
          }
        });
      },
      {
        threshold: 0.6, // 60% of section must be visible
        rootMargin: "-20% 0px -20% 0px", // ignore top and bottom 20%
      },
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    const handleHashChange = () => {
      const hash = window.location.hash || "#hero";
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);

    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-8 right-20 left-20 z-50 rounded-2xl border-b border-white/20 bg-white/10 shadow-lg backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition-colors hover:text-gray-300"
            >
              Rizki Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="hidden space-x-1 md:flex">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      data-nav-index={index}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white ${
                        activeSection === item.href
                          ? "text-white"
                          : "text-white/80"
                      }`}
                    >
                      {item.label}
                      {/* Individual Underline */}
                      <span
                        className={`absolute right-0 bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                          activeSection === item.href
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        }`}
                      />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 mb-5 space-y-1 rounded-lg bg-white/10 px-2 pt-2 pb-3 backdrop-blur-md sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-3 py-2 font-medium transition-colors hover:text-gray-300 ${
                    activeSection === item.href
                      ? "border-l-2 border-white pl-2 text-white"
                      : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
