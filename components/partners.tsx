"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Partners() {
  const icons = [
    {
      name: "Blender",
      svg: (
        <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.5 42.8c-5.9 0-10.7-4.2-10.7-9.4s4.8-9.4 10.7-9.4 10.7 4.2 10.7 9.4-4.8 9.4-10.7 9.4z" fill="#EA7600"/>
          <path d="M32.5 26c4.9 0 8.7 3.3 8.7 7.4s-3.8 7.4-8.7 7.4-8.7-3.3-8.7-7.4S27.6 26 32.5 26m0-4c-7 0-12.7 5.1-12.7 11.4S25.5 44.8 32.5 44.8s12.7-5.1 12.7-11.4S39.5 22 32.5 22z" fill="#EA7600"/>
          <path d="M24.4 12.5l13.2 9.8H17.1l7.3-9.8z" fill="#EA7600"/>
          <path d="M4.2 33.4l15.7-11.7H3.3l.9 11.7z" fill="#EA7600"/>
        </svg>
      ),
    },
    {
      name: "Unity",
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
          <path d="M10.4 12l4.6-8H20l-2.3 4L22 12l-4.3 4h-5l-2.3-4zM6 4l2.3 4L6 12l2.3 4L6 20l-4-8 4-8zm4.6 16H16l-2.3-4-3.1 4z"/>
        </svg>
      ),
    },
    {
      name: "Unreal Engine",
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
          <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5zm-1.8 5.4c-2.4 1.2-4.2 3.6-4.2 6.3 0 2.4 1.2 4.2 2.7 4.8l1.8-3v-4.8l-2.1 1.5V9l4.2-2.1v9.6l1.8-3c.6-1.2.6-2.4.6-3 0-3.6-2.4-4.2-4.8-3.6z"/>
        </svg>
      ),
    },
    {
      name: "Autodesk",
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
          <path d="M12 2L1 22h22L12 2zm0 4l8 14H4l8-14z"/>
        </svg>
      ),
    },
    {
      name: "Epic Games",
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
          <path d="M3 3v18h18V3H3zm15 14H6V7h12v10zm-2-8H8v6h8V9z"/>
        </svg>
      ),
    },
    {
      name: "Adobe",
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
          <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425H13.966zm-8.327 0l-4.097-9.794h5.063L4.554 22.624H5.639zM14.358 1.376L24 22.624h-5.5L14.358 1.376zM0 22.624L9.642 1.376H4.142L0 22.624z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-(--breakpoint-md) w-full mx-auto px-4 py-24 gap-10 md:px-8 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Trusted by creators using
        </h2>
      </motion.div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-6 grid-rows-3 sm:grid-rows-1 gap-5 place-items-center">
        <TooltipProvider>
          {icons.map((icon, index) => (
            <Tooltip key={icon.name}>
              <TooltipTrigger asChild>
                <div className="shrink-0">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      type: "spring",
                      bounce: 0,
                    }}
                  >
                    {icon.svg}
                  </motion.div>
                </div>
              </TooltipTrigger>
              <TooltipContent>{icon.name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
}
