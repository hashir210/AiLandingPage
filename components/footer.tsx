"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: TwitterLogoIcon,
    },
    {
      name: "GitHub",
      href: "#",
      icon: GitHubLogoIcon,
    },
  ];

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Download", href: "#pricing" },
  ];

  const resourceLinks = [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Community", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ];

  return (
    <footer className="w-full border-t bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            <div className="space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-medium tracking-tight transition-opacity hover:opacity-80"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                BlendAI
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                AI-powered Blender add-on. Describe what you want, watch it
                appear. No learning curve required.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Product</h3>
              <div className="flex flex-col gap-2">
                {productLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Resources</h3>
              <div className="flex flex-col gap-2">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Social</h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <span>© {year} BlendAI. All rights reserved.</span>
            <span className="font-medium">Made for creators ✨</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
