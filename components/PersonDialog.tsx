"use client";
import { Member } from "@/data/team";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Linkedin, Github, MapPin, Calendar, Code2 } from "lucide-react";

export default function PersonDialog({
  person,
  onClose,
}: {
  person?: Member | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {person && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card/95 backdrop-blur border border-border rounded-md w-full max-w-md shadow-xl overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-background transition-colors border border-border"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Header with Pattern */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 p-6 text-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

              {/* GFG Logo Badge */}
              <div className="absolute top-3 left-3">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="relative">
                {/* Profile Image */}
                <div className="relative inline-block mb-3">
                  <img
                    src={person.img || "/team/placeholder.jpg"}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/team/placeholder.jpg";
                    }}
                  />
              
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {person.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <p className="text-xs font-medium text-white">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Bio */}
              {person.bio && (
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    About
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              )}

              {/* Info Cards */}
              <div className="space-y-2">
                <div className="flex items-center p-2.5 bg-accent/50 rounded-md border border-border">
                  <MapPin className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    GCET Campus
                  </span>
                </div>
                <div className="flex items-center p-2.5 bg-accent/50 rounded-md border border-border">
                  <Calendar className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    Campus Body 2025-26
                  </span>
                </div>
              </div>

              {/* Social Links & Close Button */}
              <div className="pt-3 border-t border-border">
                {(person.socials?.linkedin || person.socials?.github) && (
                  <div className="flex gap-2 mb-3">
                    {person.socials?.linkedin && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={person.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Linkedin className="w-3 h-3 text-blue-600" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {person.socials?.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={person.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                )}

                <Button
                  onClick={onClose}
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
