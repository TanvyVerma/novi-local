'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  }
  
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          ...directions[direction] 
        }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : directions[direction].y,
          x: isInView ? 0 : directions[direction].x,
        }}
        transition={{ 
          duration, 
          delay,
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}