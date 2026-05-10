"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🎙️",
    title: "Natural Language Commands",
    description:
      "Type or speak in plain English. We translate it into exact Blender operations — no manual required.",
  },
  {
    icon: "🧱",
    title: "Smart Scene Building",
    description:
      "Describe objects, layouts, environments. Get a fully structured scene ready to render.",
  },
  {
    icon: "🎨",
    title: "Material & Shader Generation",
    description:
      'From "weathered concrete" to "iridescent soap bubble" — we generate the node tree for you.',
  },
  {
    icon: "💡",
    title: "Lighting & Camera Setup",
    description:
      "Professional-grade setups from a single sentence. Cinematic, product, studio, outdoor — done instantly.",
  },
  {
    icon: "🔁",
    title: "Animation Assist",
    description:
      "Keyframes, rigs, constraints — described in plain language, applied in seconds.",
  },
  {
    icon: "🔌",
    title: "Native Blender Integration",
    description:
      "Works as a Blender add-on. No tab switching. No copy-pasting. Lives right inside your workspace.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-3 py-16 sm:px-4 sm:py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex flex-col gap-3 text-center sm:mb-16"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Everything You Need to Create in 3D
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          Powerful features that turn your words into professional Blender
          outputs.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            <Card className="h-full border border-border rounded-2xl hover:border-primary/30 transition-colors duration-300 group">
              <CardContent className="p-5 sm:p-6">
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.icon}
                </motion.span>
                <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
