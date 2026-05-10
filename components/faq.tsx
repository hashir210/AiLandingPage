"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "Do I need to know Blender at all?",
      content: (
        <div className="text-muted-foreground">
          Nope. Though if you do, you&apos;ll move even faster. BlendAI is
          designed for complete beginners and power users alike.
        </div>
      ),
    },
    {
      title: "Which Blender versions are supported?",
      content: (
        <div className="text-muted-foreground">
          Blender 3.3 and above, including all 4.x releases. We update support
          within days of each new Blender release.
        </div>
      ),
    },
    {
      title: "Does it work offline?",
      content: (
        <div className="text-muted-foreground">
          The AI requires an internet connection to process commands. Blender
          itself runs normally offline, and any changes made by BlendAI persist
          in your local file.
        </div>
      ),
    },
    {
      title: "Is my work private?",
      content: (
        <div className="text-muted-foreground">
          Yes. We don&apos;t store your scenes or project files. Your prompts
          are processed in real-time and not retained after the session.
        </div>
      ),
    },
    {
      title: "Can I undo AI changes?",
      content: (
        <div className="text-muted-foreground">
          Absolutely — every action is undoable via Blender&apos;s standard
          Ctrl+Z. BlendAI respects Blender&apos;s undo stack completely.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Common questions about BlendAI.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
