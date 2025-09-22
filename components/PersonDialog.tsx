'use client'
import { Member } from '@/data/team'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, Linkedin, Github, Mail, MapPin, Calendar } from 'lucide-react'

export default function PersonDialog({ person, onClose }: { person?: Member | null; onClose: ()=>void }){
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
            onClick={(e)=> e.stopPropagation()} 
            className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-lg shadow-2xl dark:shadow-2xl overflow-hidden relative border-0 dark:border dark:border-gray-600/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-br from-gfg-500 to-gfg-700 p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              
              {/* GFG Logo in top left corner */}
              <div className="absolute top-6 left-6">
                <img 
                  src="/team/mainlogo.png" 
                  alt="GeeksforGeeks Logo" 
                  className="w-16 h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="relative">
                {/* Profile Image */}
                <div className="relative inline-block mb-4">
                  <img 
                    src={person.img || '/team/placeholder.jpg'} 
                    alt={person.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-200 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-200 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <p className="text-sm font-medium text-white">{person.role}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Bio */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">About</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{person.bio}</p>
              </div>

              {/* Info Cards */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center p-3 bg-gfg-50 dark:bg-gray-100 rounded-xl border dark:border-gray-300">
                  <MapPin className="w-5 h-5 text-gfg-600 dark:text-gray-900 mr-3" />
                  <span className="text-gray-900 dark:text-gray-900 font-medium">GCET Campus</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-100 rounded-xl border dark:border-gray-300">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-gray-900 mr-3" />
                  <span className="text-gray-900 dark:text-gray-900 font-medium">Campus Body 2025-26</span>
                </div>
              </div>

              {/* Social Links */}
              {(person.socials?.linkedin || person.socials?.github) && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Connect</h4>
                  <div className="flex gap-3">
                    {person.socials?.linkedin && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={person.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                          <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {person.socials?.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={person.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                          <Github className="w-4 h-4 mr-2 text-gray-800" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button 
                  onClick={onClose} 
                  size="sm" 
                  className="flex-1 bg-gfg-500 hover:bg-gfg-600 text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}