"use client";
import { TEAM, Member } from "@/data/team";
import TeamCard from "./TeamCard";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Crown, Star } from "lucide-react";
import { useEffect, useRef } from "react";

// Counter component with typing effect
function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <div ref={ref} />;
}

export default function TeamGrid({ onOpen }: { onOpen: (m: Member) => void }) {
  const chairs = TEAM.slice(0, 3);
  const leads = TEAM.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateX: -30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        damping: 15,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="team"
      className="relative py-16  overflow-hidden bg-secondary"
    >
   

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Meet the passionate innovators driving change at GCET through
            technology and collaboration
          </p>
        </motion.div>

        {/* Leadership Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-md mb-4 sm:mb-6 text-sm sm:text-base font-medium backdrop-blur-sm">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              Leadership
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Our visionary leaders who guide the direction and inspire our
              community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            {chairs.map((chair, index) => (
              <motion.div
                key={chair.id}
                variants={itemVariants}
                custom={index}
               
              >
                <TeamCard member={chair} onOpen={onOpen} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Department Leads Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-md mb-4 sm:mb-6 text-sm sm:text-base font-medium backdrop-blur-sm">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              Department Leads
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Specialized leaders driving excellence in their respective domains
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {leads.map((lead, index) => (
              <motion.div
                key={lead.id}
                variants={itemVariants}
                custom={index}
               
              >
                <TeamCard member={lead} onOpen={onOpen} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card/50 hidden backdrop-blur border border-border rounded-md p-6 sm:p-8 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  <AnimatedCounter value={TEAM.length} duration={2000} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Team Members
                </div>
              </div>

              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  <AnimatedCounter value={8} duration={2200} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Departments
                </div>
              </div>

              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  <AnimatedCounter value={2} duration={1800} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Leaders
                </div>
              </div>

              <div className="text-center space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Dedication
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
