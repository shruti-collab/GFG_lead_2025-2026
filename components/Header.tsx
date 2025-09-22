'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <img 
                src="/team/mainlogo.png" 
                alt="GeeksforGeeks Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>
            <div>
              <div className="font-bold text-gfg-700 dark:text-gfg-400 text-lg">GFG Campus Body</div>
              <div className="text-xs text-gfg-600 dark:text-gfg-500 font-medium">GCET • 2025-26</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Team', 'About', 'Contact'].map((item, index) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-gfg-700 dark:hover:text-gfg-400 font-medium transition-colors group"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-gfg-500 to-gfg-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <ModeToggle />
            
            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#contact"
                className="bg-gradient-to-r from-gfg-500 to-gfg-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Us
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 bg-gfg-500 text-white rounded-full flex items-center justify-center shadow-lg"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-3">
            {['Home', 'Team', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-gfg-700 dark:hover:text-gfg-400 hover:bg-gfg-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 bg-gradient-to-r from-gfg-500 to-gfg-700 text-white rounded-lg text-center font-medium shadow-lg"
            >
              Join Us
            </Link>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}