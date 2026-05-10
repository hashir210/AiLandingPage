"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center"
        >
          <span className="w-fit h-full text-sm bg-card px-3 py-1.5 border border-border rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Now available for Blender 4.x
          </span>
          <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-linear-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            Your 3D Vision, No Learning Curve
          </h1>
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            Describe what you want. Watch it appear in Blender.
          </p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <Button className="shadow-lg" size="lg" asChild>
              <Link href="#pricing">Start Creating Free →</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#how-it-works">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
            className="pt-4 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 3, 5, 7, 9].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-[10px] font-semibold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by{" "}
              <span className="font-semibold text-foreground">40,000+</span>{" "}
              artists, architects & game devs
            </p>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-150 bg-light blur-[70px] rounded-3xl max-sm:rotate-15 sm:rotate-35 will-change-transform"></div>
        </div>
      </motion.div>
    </div>
  );
}
