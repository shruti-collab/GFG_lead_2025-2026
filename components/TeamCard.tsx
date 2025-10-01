"use client";
import { Member } from "@/data/team";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface TeamCardProps {
  member: Member;
  onOpen: (member: Member) => void;
}

export default function TeamCard({ member, onOpen }: TeamCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-card/50 backdrop-blur border border-border rounded-md p-6 sm:p-8 h-[280px] animate-pulse">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-muted rounded-full"></div>
        <div className="h-5 sm:h-6 bg-muted rounded mb-2"></div>
        <div className="h-4 bg-muted rounded"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={() => onOpen(member)}
      whileHover={{ filter: "brightness(1.05)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-card/50  items-center justify-center flex backdrop-blur border border-border rounded-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative p-6  text-center">
          {/* Profile Image */}
          <div className="relative mb-4 sm:mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
              <img
                src={member.img || "/team/placeholder.jpg"}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-2 border-border shadow-sm transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/team/placeholder.jpg";
                }}
              />

              {/* Status Indicator */}
              <div className="hidden absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full border-2 border-background shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-background rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h4 className="text-lg sm:text-xl font-semibold mb-2 text-foreground tracking-tighter ">
            {member.name}
          </h4>

          <p className="text-xs sm:text-sm font-medium mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full inline-block tracking-tighter xl:tracking-normal">
            {member.role}
          </p>

          {member.bio && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
              {member.bio}
            </p>
          )}

          {/* Social Links */}
          {(member.socials?.linkedin || member.socials?.github) && (
            <div className="flex justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {member.socials?.linkedin && (
                <motion.a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              )}
              {member.socials?.github && (
                <motion.a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-foreground text-background rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              )}
            </div>
          )}

          {/* View More Indicator */}
          <motion.div
            className="absolute  top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-sm">
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
