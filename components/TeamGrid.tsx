'use client'
import { TEAM, Member } from '@/data/team'
import TeamCard from './TeamCard'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Crown, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

// Counter component with typing effect
function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString()
      }
    })
  }, [springValue])

  return <div ref={ref} />
}

// Percentage counter component
function AnimatedPercentage({ value, duration = 2000 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}%`
      }
    })
  }, [springValue])

  return <div ref={ref} />
}

export default function TeamGrid({ onOpen }: { onOpen: (m: Member)=>void }){
  // split chairpersons first (2) then the rest
  const chairs = TEAM.slice(0,2)
  const leads = TEAM.slice(2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gfg-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(47,141,70,0.05),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gfg-700 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the passionate innovators driving change at GCET through technology and collaboration
          </p>
        </motion.div>

        {/* Leadership Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gfg-500 to-gfg-700 text-white rounded-full mb-4 shadow-lg">
              <Crown className="w-5 h-5 mr-2" />
              <span className="font-semibold">Leadership</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our visionary leaders who guide the direction and inspire our community
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {chairs.map((chair, index) => (
              <motion.div key={chair.id} variants={itemVariants}>
                <TeamCard member={chair} onOpen={onOpen} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Department Leads Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-4 shadow-lg">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">Department Leads</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized leaders driving excellence in their respective domains
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {leads.map((lead, index) => (
              <motion.div key={lead.id} variants={itemVariants}>
                <TeamCard member={lead} onOpen={onOpen} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Stats with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gfg-700 dark:text-gfg-300 mb-2">
                  <AnimatedCounter value={TEAM.length} duration={2000} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gfg-700 dark:text-gfg-300 mb-2">
                  <AnimatedCounter value={8} duration={2200} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Departments</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gfg-700 dark:text-gfg-300 mb-2">
                  <AnimatedCounter value={2} duration={1800} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Leaders</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gfg-700 dark:text-gfg-300 mb-2">
                  <AnimatedPercentage value={100} duration={2500} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}