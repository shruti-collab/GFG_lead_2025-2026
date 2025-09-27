"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-1 sm:top-2 left-2 right-2 z-50  backdrop-blur border border-border rounded-md shadow-sm max-w-7xl mx-auto bg-gray-100/5 dark:bg-black/20">
      <div className="w-full px-3 sm:px-4 md:px-6 py-1.5">
        <div className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {["Home", "Team","Events", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-1 text-sm xl:text-base font-medium transition-colors whitespace-nowrap hover:bg-green-500/25 rounded-md dark:hover:text-white"
              >
                {item}
              </Link>
            ))}
           <div className="flex items-center ml-2">
             <ModeToggle />
            <Link
              href="#contact"
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 xl:px-5 py-2 rounded-md font-semibold shadow-none transition-all duration-200 text-sm xl:text-base whitespace-nowrap"
            >
              Join Us
            </Link>
           </div>
          </nav>

          {/* Tablet Navigation (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center gap-3">
            {["Home", "Team", "Events","About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-1.5 py-1.5 text-sm font-medium transition-colors hover:bg-green-500/25 rounded-md dark:hover:text-white"
              >
                {item}
              </Link>
            ))}
            <ModeToggle />
            <Link
              href="#contact"
              className="ml-1 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-md font-semibold  transition-all duration-200"
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-md flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-200 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-3">
            {["Home", "Team", "Events","About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-accent rounded-md font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 mt-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-center font-semibold transition-all"
            >
              Join Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
