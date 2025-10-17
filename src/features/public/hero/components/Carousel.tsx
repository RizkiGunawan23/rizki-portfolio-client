"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function HeroCarousel() {
  const skills = [
    "BACKEND DEVELOPMENT",
    "SPRING BOOT",
    "EXPRESS",
    "DJANGO REST FRAMEWORK",
    "NEXT.JS",
    "REACT",
    "JAVA",
    "TYPESCRIPT",
    "PYTHON",
    "POSTGRESQL",
    "MYSQL",
    "NEO4J",
    "REDIS",
    "DOCKER",
    "GIT",
  ];

  return (
    <Carousel
      className="flex h-full w-full items-end"
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
        duration: 100, // kontrol kecepatan geser (default 25)
      }}
      plugins={[
        Autoplay({
          delay: 1750, // jeda antar item
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="h-20">
        {[...skills, ...skills].map((skill, index) => (
          <CarouselItem
            key={index}
            className="flex h-full basis-auto items-center bg-[#5f6164]/15 pb-0 pl-0 backdrop-blur-sm"
          >
            <div className="flex items-center whitespace-nowrap">
              <span className="px-8 text-lg font-bold tracking-wider text-white/80">
                {skill}
              </span>
              <span className="text-2xl font-bold text-[#71eaca]">/</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
