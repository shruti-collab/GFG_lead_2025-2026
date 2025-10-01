'use client'
import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
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