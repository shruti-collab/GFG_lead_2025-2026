"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  Code,
  Users,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  ExternalLink,
} from "lucide-react";
import AnimatedCounter from "./animated-counter";

const communityLinks = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://whatsapp.com",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
    description: "Join our daily discussions",
    members: "500+",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
    color: "from-blue-500 to-blue-600",
    description: "Professional networking",
    members: "300+",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    description: "Behind the scenes",
    members: "200+",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
    color: "from-gray-600 to-gray-800",
    description: "Open source projects",
    members: "150+",
  },
  {
    id: "commudle",
    name: "Commudle",
    url: "https://commudle.com",
    icon: Code,
    color: "from-purple-500 to-indigo-600",
    description: "Tech community platform",
    members: "100+",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // NEW: Slide-in from different directions animation
  const slideVariants = {
    hiddenLeft: {
      opacity: 0,
      x: -100,
      rotate: -5,
      scale: 0.9,
    },
    hiddenRight: {
      opacity: 0,
      x: 100,
      rotate: 5,
      scale: 0.9,
    },
    hiddenBottom: {
      opacity: 0,
      y: 100,
      rotate: 2,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-16 overflow-hidden bg-secondary"
    >
   

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Static (no animation) */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Building tomorrow's tech leaders through innovation, mentorship, and
            community
          </p>
        </div>

        {/* About Cards with NEW Slide Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20"
        >
          {/* Mission Card - Slides from Left */}
          <motion.div
            variants={slideVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-card/50 backdrop-blur border border-border rounded-md p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To create a vibrant ecosystem of learning and innovation where
                students can develop their technical skills, collaborate on
                exciting projects, and prepare for successful careers in
                technology.
              </p>
            </div>
          </motion.div>

          {/* Activities Card - Slides from Right */}
          <motion.div
            variants={slideVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-card/50 backdrop-blur border border-border rounded-md p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                What We Do
              </h3>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Technical workshops and coding sessions
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Hackathons and competitive programming
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Mentorship and career guidance
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Building strong tech community
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Impact Card - Slides from Bottom */}
          <motion.div
            variants={slideVariants}
            initial="hiddenBottom"
            whileInView="visible"
            viewport={{ once: true }}
            className="group md:col-span-2 lg:col-span-1"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-card/50 backdrop-blur border border-border rounded-md p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Our Impact
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={500} suffix="+" duration={2500} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Students Reached
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={50} suffix="+" duration={2200} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Events Organized
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <AnimatedCounter value={10} suffix="+" duration={1800} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Industry Partners
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
