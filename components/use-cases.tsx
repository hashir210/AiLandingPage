"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    emoji: "🎮",
    title: "Game Developers",
    description: "Prototyping assets fast without waiting for a 3D artist.",
  },
  {
    emoji: "🏛️",
    title: "Architects",
    description: "Visualizing spaces without a dedicated 3D team.",
  },
  {
    emoji: "🎬",
    title: "Animators",
    description: "Blocking scenes in minutes instead of hours.",
  },
  {
    emoji: "🌱",
    title: "Beginners",
    description: "People who gave up on Blender — and are finally creating.",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3 text-center sm:mb-16"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Built for Every Creator
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            Whether you&apos;re a pro or just getting started, BlendAI fits your
            workflow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <motion.span
                className="text-4xl block mb-4"
                whileHover={{ y: -4, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {useCase.emoji}
              </motion.span>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                {useCase.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
