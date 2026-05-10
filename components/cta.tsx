"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Stop fighting Blender.
            <br />
            Start building with it.
          </h2>
          <p className="max-w-lg text-muted-foreground">
            Download the free add-on and start creating in minutes. No credit
            card required.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button size="lg" className="shadow-lg" asChild>
              <Link href="#pricing">Download Free Add-on</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#how-it-works">See it in action →</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
