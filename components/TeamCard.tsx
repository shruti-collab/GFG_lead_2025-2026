'use client'
import { Member } from '@/data/team'
import { motion } from 'framer-motion'
import { ExternalLink, Linkedin, Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface TeamCardProps {
  member: Member;
  onOpen: (member: Member) => void;
}

export default function TeamCard({ member, onOpen }: TeamCardProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg p-8 h-[280px] animate-pulse">
        <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    )
  }

  const isDark = theme === 'dark'
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={() => onOpen(member)}
    >
      <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 dark:border-gray-600/50">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gfg-500/5 to-gfg-700/10 dark:from-gfg-400/10 dark:to-gfg-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative p-8 text-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto relative">
              {/* Animated Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gfg-500 via-gfg-700 to-gfg-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-700" />
              </motion.div>
              
              <img 
                src={member.img || '/team/placeholder.jpg'} 
                alt={member.name} 
                className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg group-hover:border-gfg-500/20 dark:group-hover:border-gfg-400/30 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/team/placeholder.jpg';
                }}
              />
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white dark:border-gray-600 shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h4 
            className="text-xl font-bold mb-2 transition-colors"
            style={{ 
              color: isDark ? '#ffffff' : '#2f8d46',
              '--tw-text-opacity': '1'
            }}
          >
            {member.name}
          </h4>
          <p 
            className="text-sm font-medium mb-3 px-3 py-1 rounded-full inline-block"
            style={{
              color: isDark ? '#ffffff' : '#2f8d46',
              backgroundColor: isDark ? 'rgba(55, 65, 81, 0.8)' : 'rgba(47, 141, 70, 0.1)'
            }}
          >
            {member.role}
          </p>
          
          {member.bio && (
            <p 
              className="text-sm leading-relaxed mb-4 line-clamp-2"
              style={{ 
                color: isDark ? '#e5e7eb' : '#4b5563'
              }}
            >
              {member.bio}
            </p>
          )}
          
          {/* Social Links */}
          {(member.socials?.linkedin || member.socials?.github) && (
            <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {member.socials?.linkedin && (
                <motion.a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
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
                  className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          )}
          
          {/* View More Indicator */}
          <motion.div 
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-8 h-8 bg-gfg-500 text-white rounded-full flex items-center justify-center shadow-lg">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}