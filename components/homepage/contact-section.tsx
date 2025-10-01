"use client";
import { motion } from "framer-motion";
import {
  Users,
  Code,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/F21ccPgY7yq8EF5sEAM8gu?mode=ems_copy_t](https://chat.whatsapp.com/F21ccPgY7yq8EF5sEAM8gu?mode=ems_copy_t",
    icon: MessageCircle,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/geeksforgeeks-campus-body-gcet/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/geeksforgeeks_gcet/",
    icon: Instagram,
  },
  {
    name: "GitHub",
    url: "https://github.com/GFGSC-GCET",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Be part of our thriving tech community and build amazing projects
            together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 mb-6">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  title={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
