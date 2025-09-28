"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Code2, GitFork, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12"
    >
      {/* Enhanced Background with Radial Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 dark:to-muted/20">
        {/* Main Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 dark:bg-primary/25 rounded-full blur-3xl opacity-40 dark:opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/8 dark:bg-primary/15 rounded-full blur-3xl opacity-25 dark:opacity-40 animate-pulse delay-2000"></div>

        {/* Additional Blur Shapes Around Text Area */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/12 dark:bg-primary/20 rounded-full blur-2xl opacity-20 dark:opacity-35 animate-pulse delay-500"></div>
        <div className="absolute top-32 right-20 w-48 h-48 bg-primary/8 dark:bg-primary/15 rounded-full blur-2xl opacity-15 dark:opacity-30 animate-pulse delay-1500"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-primary/10 dark:bg-primary/18 rounded-full blur-2xl opacity-18 dark:opacity-32 animate-pulse delay-2500"></div>
        <div className="absolute bottom-20 right-32 w-40 h-40 bg-primary/6 dark:bg-primary/12 rounded-full blur-xl opacity-25 dark:opacity-40 animate-pulse delay-3500"></div>

        {/* Mid-area Blur Shapes */}
        <div className="absolute top-1/2 left-8 w-32 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl opacity-15 dark:opacity-25 animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 right-8 w-28 h-72 bg-primary/7 dark:bg-primary/12 rounded-full blur-xl opacity-12 dark:opacity-22 animate-pulse delay-4500"></div>

        {/* Small Accent Shapes */}
        <div className="absolute top-40 left-1/2 w-24 h-24 bg-primary/8 dark:bg-primary/15 rounded-full blur-lg opacity-20 dark:opacity-30 animate-pulse delay-5000"></div>
        <div className="absolute bottom-40 left-1/2 w-36 h-36 bg-primary/6 dark:bg-primary/12 rounded-full blur-xl opacity-15 dark:opacity-25 animate-pulse delay-5500"></div>

        {/* Dot Pattern - More visible in light mode */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.25)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.35)_1px,transparent_0)] bg-[size:20px_20px]"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Enhanced Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background dark:via-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/3 dark:from-primary/8 dark:to-primary/8"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 md:space-y-6"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600/20 border border-green-500/20 dark:text-green-200 text-green-800 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm ">
              <GitFork className="w-4 h-4 text-primary" />
              GFGCB-GCET Official Website
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tight"
            >
             
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                GeeksforGeeks
              </span>
               <span className="block text-foreground scale-90">Campus Body</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-base sm:text-2xl font-medium text-muted-foreground max-w-4xl mx-auto tracking-tighter sm:tracking-normal"
            >
              Galgotias College of Engineering and Technology
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Empowering the next generation of tech innovators through{" "}
            <span className="text-primary font-medium">
              cutting-edge workshops
            </span>
            ,{" "}
            <span className="text-primary font-medium">
              competitive programming
            </span>
            , and{" "}
            <span className="text-primary font-medium">
              collaborative learning
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold transition-all duration-200"
            >
              <a
                href="#events"
                className="flex items-center justify-center gap-2"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-accent px-8 py-3 rounded-md font-semibold transition-all duration-200"
              asChild
            >
              <a
                href="https://linktr.ee/gfgscgcet"
                className="flex items-center justify-center gap-2"
              >
                Join Our Community
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
