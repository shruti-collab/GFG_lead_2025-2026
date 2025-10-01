"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  Eye,
  ArrowRight,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

// Sample event data - replace with your actual JSON data
const EVENTS = [
  {
    id: "1",
    title: "PromptCraft: Master the AI Universe",
    description:
      "PromptCraft is designed to transform students from AI users into AI collaborators. With expert-led sessions and hands-on practice, participants will gain insights into the art of crafting prompts, context management, and real-world AI use cases.",
    shortBrief:
      "A 2-day interactive event to explore Prompt Engineering and learn how to effectively communicate with AI.",
    poster:
      "https://res.cloudinary.com/diboqh2zz/image/upload/v1759010865/event1_y0pyjq.png",
    date: "2025-09-27",
    location: "Online (Google Meet)",
    speakers: [{ name: "Mayank Tiwari" }, { name: "Shikhar Singh" }],
    tags: ["GenAI", "Workshop", "Development"],
    registrationUrl: "#",
  },
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -10,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        damping: 25,
      },
    },
  };

  return (
    <section
      id="events"
      className="relative py-16 sm:pt-20 overflow-hidden bg-secondary/30"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:to-muted/30">
        {/* Animated Gradient Shapes */}
        <div className="absolute top-20 left-16 w-64 h-64 bg-emerald-500/8 dark:bg-emerald-400/15 rounded-full blur-3xl opacity-40 dark:opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-24 w-48 h-48 bg-blue-500/6 dark:bg-blue-400/12 rounded-full blur-2xl opacity-30 dark:opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-32 w-72 h-72 bg-purple-500/7 dark:bg-purple-400/14 rounded-full blur-3xl opacity-35 dark:opacity-55 animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-16 w-56 h-56 bg-orange-500/5 dark:bg-orange-400/10 rounded-full blur-2xl opacity-25 dark:opacity-40 animate-pulse delay-1500"></div>

        {/* Static Accent Shapes */}
        <div className="absolute top-1/3 left-1/4 w-32 h-64 bg-primary/4 dark:bg-primary/8 rounded-full blur-xl opacity-20 dark:opacity-30 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-48 bg-primary/6 dark:bg-primary/12 rounded-full blur-lg opacity-25 dark:opacity-35 -rotate-30"></div>

        {/* Pattern Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.08)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.15)_1px,transparent_0)] bg-[size:32px_32px]"></div>

        {/* Fade Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background dark:via-background/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Events & Workshops
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Join us for exciting workshops, tech talks, and networking events
            designed to accelerate your learning journey
          </p>
        </div>

        {/* Centered Event Card for Single Event */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="group w-full max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <Card className="bg-card/50 backdrop-blur border border-border hover:shadow-xl transition-all duration-300 overflow-hidden h-full lg:scale-90">
                {/* Event Poster */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Image
                      src={event.poster}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {event.shortBrief}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pb-4">
                  {/* Event Details */}
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Speakers */}
                  {event.speakers.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-base mb-2 text-foreground">
                        Speakers:
                      </h4>
                      <div className="space-y-1">
                        {event.speakers.map((speaker, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            <span className="font-medium text-foreground">
                              {speaker.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-sm px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 gap-3 flex flex-col">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="default"
                        className="flex-1 w-full"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto scale-90">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          {event.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Event Poster in Modal */}
                        <div className="relative overflow-hidden rounded-lg">
                          <Image
                            src={event.poster}
                            alt={event.title}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        {/* Full Description */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            About This Event
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        {/* Event Details in Modal */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">Date</p>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(event.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "long",
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">Location</p>
                                <p className="text-sm text-muted-foreground">
                                  {event.location}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {event.speakers.length > 0 && (
                              <div>
                                <h4 className="font-medium mb-2">Speakers</h4>
                                <div className="space-y-1">
                                  {event.speakers.map((speaker, idx) => (
                                    <p
                                      key={idx}
                                      className="text-sm text-muted-foreground"
                                    >
                                      {speaker.name}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Tags in Modal */}
                        <div>
                          <h4 className="font-medium mb-3">Topics Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="px-3 py-1"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Modal Footer with Registration and Close Buttons */}
                        <div className="flex gap-3 pt-4 border-t">
                          <Button size="lg" className="flex-1" asChild>
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Register Now
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                          <DialogClose asChild>
                            <Button variant="outline" size="lg">
                              <X className="w-4 h-4 mr-2" />
                              Close
                            </Button>
                          </DialogClose>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button size="default" className="flex-1 w-full" asChild>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
