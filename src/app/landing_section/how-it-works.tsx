'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Magnetic } from '../components/ui/Magnetic'

const InteractiveTorus = dynamic(() => import('../components/3d/InteractiveTorus'), { ssr: false })

const steps = [
  { 
    grade: "09", 
    label: "Grade 9", 
    title: "Discover Yourself", 
    short: "Know yourself before choosing your path.", 
    desc: "Novi helps you understand your interests, strengths, personality and the areas where you naturally enjoy learning.", 
    items: ["Interest assessment", "Strength analysis", "Personality mapping", "Goal setting"], 
    icon: "✦",
    color: "from-emerald-400 to-teal-400",
    borderColor: "border-emerald-500/50",
    glowColor: "rgba(16,185,129,0.3)"
  },
  { 
    grade: "10", 
    label: "Grade 10", 
    title: "Explore Possibilities", 
    short: "Turn curiosity into possibilities.", 
    desc: "Explore careers, subjects, universities and real-world experiences based on what actually interests you.", 
    items: ["Career exploration", "Subject selection", "University discovery", "Experience matching"], 
    icon: "⌕",
    color: "from-blue-400 to-cyan-400",
    borderColor: "border-blue-500/50",
    glowColor: "rgba(59,130,246,0.3)"
  },
  { 
    grade: "11", 
    label: "Grade 11", 
    title: "Build Your Profile", 
    short: "Start turning interests into proof.", 
    desc: "Novi helps you transform your interests into projects, competitions, research, leadership and meaningful experiences.", 
    items: ["Project planning", "Competition preparation", "Research opportunities", "Leadership roles"], 
    icon: "↗",
    color: "from-purple-400 to-pink-400",
    borderColor: "border-purple-500/50",
    glowColor: "rgba(168,85,247,0.3)"
  },
  { 
    grade: "12", 
    label: "Grade 12", 
    title: "Apply With Confidence", 
    short: "Bring everything together.", 
    desc: "Build your university strategy, improve your applications and stay organized throughout the application journey.", 
    items: ["University strategy", "Application building", "Essay refinement", "Deadline tracking"], 
    icon: "◎",
    color: "from-orange-400 to-red-400",
    borderColor: "border-orange-500/50",
    glowColor: "rgba(251,146,60,0.3)"
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <InteractiveTorus />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="max-w-3xl mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            The 4-Year Journey
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2, 
              duration: 0.8, 
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block"
            >
              Four years.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="block"
            >
              One clear path.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6, 
                duration: 0.7, 
                type: "spring",
                stiffness: 100
              }}
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
            >
              Your future.
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-2xl"
          >
            From Grade 9 to 12, Novi guides you through every step—from discovering who you are, to applying with absolute confidence.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="relative mb-16">
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg 
              className="w-full h-full"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible'
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="8"
                y1="30"
                x2="92"
                y2="30"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={hasStarted ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                strokeLinecap="round"
              />
              <motion.line
                x1="8"
                y1="30"
                x2="92"
                y2="30"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={hasStarted ? { pathLength: 1, opacity: 0.1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                strokeLinecap="round"
                style={{ filter: 'blur(6px)' }}
              />
              {steps.map((_, index) => {
                const xPos = 12 + (index * 25.3) 
                return (
                  <motion.circle
                    key={index}
                    cx={xPos}
                    cy="30"
                    r="2"
                    fill="#10b981"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={hasStarted ? { 
                      scale: 1, 
                      opacity: 0.8,
                      r: active === index ? 3.5 : 2
                    } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      delay: 1 + (index * 0.15), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {active === index && (
                      <animate 
                        attributeName="opacity"
                        values="0.8;0.3;0.8"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    )}
                  </motion.circle>
                )
              })}
            </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              const isActive = active === index
              const delay = index * 0.15

              return (
                <motion.button
                  key={step.grade}
                  type="button"
                  onClick={() => setActive(index)}
                  className="text-left group relative"
                  initial={{ 
                    opacity: 0, 
                    x: 100,
                    scale: 0.8,
                    rotate: 5
                  }}
                  animate={hasStarted ? { 
                    opacity: 1, 
                    x: 0,
                    scale: 1,
                    rotate: 0
                  } : { 
                    opacity: 0, 
                    x: 100,
                    scale: 0.8,
                    rotate: 5
                  }}
                  transition={{ 
                    delay: 0.8 + delay, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={hasStarted ? { 
                        scale: isActive ? 1.3 : 1, 
                        opacity: 1
                      } : { scale: 0, opacity: 0 }}
                      transition={{ delay: 1 + delay, duration: 0.4 }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                        isActive ? 'bg-emerald-400' : 'bg-emerald-400/60'
                      }`}
                      style={{
                        boxShadow: isActive 
                          ? `0 0 20px rgba(16,185,129,0.8), 0 0 40px rgba(16,185,129,0.4)` 
                          : `0 0 10px rgba(16,185,129,0.2)`
                      }}
                    />
                  </div>

                  <div className="relative z-10 flex justify-center lg:justify-start mb-6">
                    <motion.div 
                      className={`relative w-[60px] h-[60px] rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} text-white border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.5)] scale-110`
                          : "bg-background border-white/10 text-emerald-400 group-hover:border-emerald-500/30 group-hover:-translate-y-1"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-xl font-bold">{step.grade}</span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -inset-2 rounded-2xl border border-emerald-500/40"
                            style={{
                              boxShadow: `0 0 40px rgba(16,185,129,0.2)`
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  <motion.div 
                    className={`rounded-2xl p-5 border transition-all duration-500 ${
                      isActive
                        ? `border-emerald-500/50 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.15)]`
                        : "border-white/5 hover:border-emerald-500/20"
                    }`}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      boxShadow: isActive 
                        ? `0 0 40px rgba(16,185,129,0.1)` 
                        : `0 0 0px rgba(16,185,129,0)`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-foreground/30">
                      {step.label}
                    </span>
                    <h3 className={`text-lg font-bold mt-2 mb-2 transition-colors duration-300 ${
                      isActive ? 'text-emerald-400' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/45 leading-relaxed">{step.short}</p>
                    <div className={`mt-4 text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
                      isActive ? "text-emerald-400" : "text-foreground/25 group-hover:text-emerald-400"
                    }`}>
                      {isActive ? (
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Exploring this stage
                        </motion.span>
                      ) : (
                        "View stage"
                      )}
                      <motion.span 
                        className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}
                        animate={{ x: isActive ? 3 : 0 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.button>
              )
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-500 group overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 animate-pulse" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 1s ease" }} />
          
          <div className="flex gap-5 items-start relative z-10">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0"
            >
              ✦
            </motion.div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-emerald-400">Novi remembers the context.</h3>
              <p className="text-sm sm:text-base text-foreground/40 leading-relaxed">
                Your goals, interests, decisions and progress build on each other—so you don't have to start from zero every time.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}