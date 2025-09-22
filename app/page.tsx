'use client'
import { useState } from 'react'
import TeamGrid from '@/components/TeamGrid'
import PersonDialog from '@/components/PersonDialog'
import { Member } from '@/data/team'
import { Button } from '@/components/ui/button'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Code, Users, Trophy, Rocket, ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

// Counter component with typing effect for the About section
function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`
      }
    })
  }, [springValue, suffix])

  return <div ref={ref} className="text-3xl font-bold text-gfg-500 dark:text-gfg-300" />
}

export default function Page(){
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <>
      {/* Modern Hero Section with Gradient Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gfg-50 via-white to-gfg-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,141,70,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(47,141,70,0.2),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(47,141,70,0.02)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(47,141,70,0.05)_50%,transparent_75%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gfg-500/10 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gfg-700/10 rounded-full blur-xl"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Modern Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gfg-500/20 dark:border-gfg-400/20 text-gfg-700 dark:text-gfg-400 text-sm font-medium mb-8 shadow-lg"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Campus Body 2025-26
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gfg-700 via-gfg-500 to-gfg-700 bg-clip-text text-transparent mb-6 leading-tight">
              GeeksforGeeks
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gfg-600 dark:text-gfg-400 mb-4">
              Campus Body — GCET
            </h2>
            
            {/* Modern Tagline */}
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-gfg-500" />
                Innovation
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-gfg-500" />
                Collaboration
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-gfg-500" />
                Growth
              </div>
            </div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of tech innovators at Government College of Engineering and Technology through 
              <span className="font-semibold text-gfg-700"> cutting-edge workshops</span>, 
              <span className="font-semibold text-gfg-700"> competitive programming</span>, and 
              <span className="font-semibold text-gfg-700"> collaborative learning</span>.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-gfg-500 to-gfg-700 hover:from-gfg-600 hover:to-gfg-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#team" className="flex items-center">
                  Meet Our Team
                  <ChevronDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-gfg-500 text-gfg-700 hover:bg-gfg-50 hover:border-gfg-600 dark:border-gfg-400 dark:text-gfg-300 dark:bg-transparent dark:hover:bg-gfg-500/20 dark:hover:border-gfg-300 dark:hover:text-gfg-200 backdrop-blur-sm transition-all duration-300">
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gfg-500" />
        </motion.div>
      </section>

      {/* Team Section */}
      <TeamGrid onOpen={(m)=> setSelected(m)} />

      {/* Modern About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gfg-50/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,141,70,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gfg-700 dark:text-gfg-400 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building tomorrow's tech leaders through innovation, mentorship, and community
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-600/30 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-gfg-500 to-gfg-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gfg-700 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  To create a vibrant ecosystem of learning and innovation where students can 
                  develop their technical skills, collaborate on exciting projects, and prepare 
                  for successful careers in technology.
                </p>
              </div>
            </motion.div>
            
            {/* Activities Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-600/30 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gfg-700 dark:text-white mb-4">What We Do</h3>
                <ul className="text-gray-700 dark:text-gray-200 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gfg-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Technical workshops and coding sessions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gfg-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Hackathons and competitive programming
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gfg-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mentorship and career guidance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gfg-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Building strong tech community
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-600/30 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gfg-700 dark:text-white mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter value={500} suffix="+" duration={2500} />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Students Reached</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter value={50} suffix="+" duration={2200} />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Events Organized</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter value={10} suffix="+" duration={1800} />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Industry Partners</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gfg-500 to-gfg-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gfg-100 mb-10 max-w-2xl mx-auto">
              Ready to join our thriving tech community? Let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-gfg-700 hover:bg-gfg-50 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Community
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gfg-100 mb-4">Follow us on social media</p>
              <div className="flex justify-center space-x-6">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.745-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Person Dialog */}
      <PersonDialog person={selected} onClose={()=> setSelected(null)} />
    </>
  )
}