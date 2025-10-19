"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useScroll } from "@/components/providers/ScrollProvider";
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
  const [isNavigating, setIsNavigating] = useState(false);
  const { scrollToSection } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Intersection Observer untuk deteksi scroll manual
  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip detection saat sedang navigasi dengan klik
        if (isNavigating) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(`#${sectionId}`);
          }
        });
      },
      {
        threshold: 0.3, // 30% of section must be visible
        rootMargin: "-150px 0px -150px 0px", // Consider header height and viewport
      },
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: Manual scroll detection
    const handleScroll = () => {
      // Skip detection saat sedang navigasi dengan klik
      if (isNavigating) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "#hero"; // default

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = `#${sectionId}`;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavigating]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(href);
    setIsOpen(false);

    // Nonaktifkan deteksi section sementara
    setIsNavigating(true);
    scrollToSection(href);

    // Deteksi scroll end dengan multiple approach
    let scrollEndTimer: NodeJS.Timeout;
    let lastScrollTop = window.pageYOffset;
    let scrollCheckCount = 0;

    const detectScrollEnd = () => {
      const currentScrollTop = window.pageYOffset;

      // Reset timer setiap kali ada scroll
      clearTimeout(scrollEndTimer);

      // Jika posisi scroll tidak berubah dalam beberapa frame
      if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
        scrollCheckCount++;

        // Jika posisi stabil selama beberapa frame, scroll selesai
        if (scrollCheckCount >= 3) {
          setIsNavigating(false);
          window.removeEventListener("scroll", detectScrollEnd);
          return;
        }
      } else {
        scrollCheckCount = 0; // Reset counter jika masih ada pergerakan
      }

      lastScrollTop = currentScrollTop;

      // Fallback timer untuk memastikan deteksi
      scrollEndTimer = setTimeout(() => {
        setIsNavigating(false);
        window.removeEventListener("scroll", detectScrollEnd);
      }, 150); // 150ms tanpa scroll signifikan = scroll selesai
    };

    // Pasang listener untuk mendeteksi scroll end
    window.addEventListener("scroll", detectScrollEnd, { passive: true });

    // Fallback timeout untuk safety (jika ada masalah dengan event listener)
    setTimeout(() => {
      setIsNavigating(false);
      window.removeEventListener("scroll", detectScrollEnd);
    }, 3000);
  };

  return (
    <header className="fixed top-8 right-20 left-20 z-50 rounded-2xl border-b border-white/20 bg-white/10 shadow-lg backdrop-blur-3xl md:backdrop-blur-xl lg:right-48 lg:left-48">
      <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition-colors hover:text-gray-300"
            >
              Rizki Portfolio <span className="text-[#71eaca]">/</span>
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
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={`relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white ${
                        activeSection === item.href
                          ? "text-white"
                          : "text-white/80"
                      }`}
                    >
                      {item.label}
                      {/* Individual Underline */}
                      <span
                        className={`absolute right-0 bottom-0 left-0 h-0.5 bg-[#71eaca] transition-all duration-300 ease-out ${
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
                  onClick={(e) => handleNavClick(item.href, e)}
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
