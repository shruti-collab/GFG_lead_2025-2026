"use client";
import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 backdrop-blur border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.05)_1px,transparent_0)] bg-[size:16px_16px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-1 group min-w-0"
          >
            <img
              src="/logo.png"
              alt="GeeksforGeeks Logo"
              className="w-10 h-10 sm:w-12 sm:h-12  object-contain border rounded-full border-border/50 flex-shrink-0"
            />
            <div className="flex flex-col justify-center gap-0.5 min-w-0 scale-95">
              <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors truncate">
                GFG Campus Body
              </span>
              <span className="dark:bg-green-600/60 bg-green-600 dark:text-green-200 text-white border border-green-600/50 w-fit rounded-full px-1.5 sm:px-2 py-0.5 text-xs font-medium whitespace-nowrap">
                GCET 2025-26
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <a
              href="#home"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#team"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Team
            </a>
            <a
              href="#events"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </a>
          </motion.nav>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-6 border-t border-border"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by
            GFG Campus Body GCET
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
