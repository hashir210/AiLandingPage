"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500/60 to-red-500/0 rounded-full" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-500/80">
                The Problem
              </span>
              <h3 className="text-2xl font-semibold mt-2 mb-4 bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                Blender is powerful. But mastering it takes years.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nodes, modifiers, shortcuts, shader editors — the learning curve
                is massive. Most people quit before they create anything
                meaningful. Tutorials help, but they can&apos;t replace hands-on
                fluency.
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500/60 to-green-500/0 rounded-full" />
            <div className="pl-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-500/80">
                The Solution
              </span>
              <h3 className="text-2xl font-semibold mt-2 mb-4 bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                Just tell us what you want.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Add a rusty metal texture.&rdquo; &ldquo;Make the
                lighting moody.&rdquo; &ldquo;Rig this character for walk
                cycles.&rdquo; We handle the rest — inside Blender, in seconds.
                No manual, no tutorials, no frustration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
