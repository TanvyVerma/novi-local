"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, Swords, ScrollText, Trophy, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const passportItems = [
  { text: "AI Research Project", date: "May 2024" },
  { text: "National Coding Camp", date: "Mar 2024" },
  { text: "TEDx Youth Speaker", date: "Jan 2024" },
  { text: "Python Certification", date: "Dec 2023" },
];

const recommendationItems = [
  { text: "Academic Performance", type: "check" },
  { text: "Research Experience", type: "check" },
  { text: "Math Skills", type: "check" },
  { text: "Extra-curricular Depth", type: "warn" },
  { text: "Coding Skills", type: "check" },
  { text: "Leadership", type: "warn" },
];

const tabs = [
  { label: "Projects", icon: BookOpen },
  { label: "Competitions", icon: Swords },
  { label: "Certificates", icon: ScrollText },
  { label: "Leadership", icon: Trophy },
  { label: "Skills", icon: Sparkles },
  { label: "Activities", icon: Star },
];

function TiltCard({ children, className = "", glowColor = "rgba(168, 85, 247, 0.2)" }: { children: React.ReactNode, className?: string, glowColor?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={`group relative rounded-3xl border border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl p-5 sm:p-8 transition-shadow duration-500 ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 50px -12px ${glowColor}` }}
      />
      {children}
    </motion.div>
  );
}

export default function ForStudents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="for-students"
      className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background" // Reduced padding for a tight flow
    >
      
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Track Your Progress
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground/90 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Your <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">Success</span> Dashboard
          </h2>
          <p className="text-base sm:text-lg text-foreground/50 max-w-2xl mx-auto">
            A beautifully structured way to see your journey, achievements, and where to go next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
          >
            <TiltCard glowColor="rgba(168, 85, 247, 0.25)">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Career Passport
                </h3>
                <motion.span 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  Level 2
                </motion.span>
              </div>

              {/* Horizontal Sliding Tabs (Fully scrollable on mobile) */}
              <div className="flex flex-nowrap overflow-x-auto gap-4 sm:gap-6 mb-6 pb-4 border-b border-black/5 dark:border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab, i) => (
                  <div key={tab.label} className="flex flex-col items-center gap-2 group/tab cursor-pointer min-w-[60px] shrink-0">
                    <div className="w-10 h-10 rounded-2xl bg-background/50 border border-primary/10 flex items-center justify-center text-primary text-lg group-hover/tab:bg-primary group-hover/tab:text-white group-hover/tab:scale-125 transition-all duration-300">
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-center font-medium text-foreground/40 group-hover/tab:text-primary transition-colors">
                      {tab.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <ul className="flex-1 space-y-3 w-full">
                  {passportItems.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + (idx * 0.1), type: "spring", stiffness: 100 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-background/30 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                      </div>
                      <span className="text-xs font-mono text-foreground/40">{item.date}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="w-full sm:w-36 flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-2xl p-5 shrink-0">
                  <span className="text-[10px] font-bold uppercase text-foreground/50 mb-2">Strength</span>
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="8" />
                      <motion.circle
                        cx="50" cy="50" r="40" fill="none" stroke="url(#passportGrad)" strokeWidth="8" strokeLinecap="round"
                        initial={{ strokeDashoffset: 251.2 }} 
                        animate={isInView ? { strokeDashoffset: 251.2 * (1 - 0.78) } : {}}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        strokeDasharray="251.2"
                      />
                      <defs>
                        <linearGradient id="passportGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute text-lg font-bold text-primary">78%</span>
                  </div>
                  <span className="text-[10px] text-green-500 text-center leading-tight font-semibold">▲ Great progress!</span>
                </div>
              </div>

              <Link href="/passport" className="btn-primary w-full justify-center group/btn">
                View Full Passport
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </Link>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          >
            <TiltCard glowColor="rgba(59, 130, 246, 0.25)">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Novi&apos;s Pick
                </h3>
                <motion.span 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full"
                >
                  Top Match
                </motion.span>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-background/40 border border-white/5">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-2xl sm:text-3xl font-black text-white shadow-xl shadow-red-500/20 shrink-0"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  S
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base sm:text-xl font-bold mb-1 truncate">Stanford University</h4>
                  <p className="text-xs text-foreground/50 mb-3 font-medium">Computer Science</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase text-foreground/50">Readiness</span>
                    <span className="text-xs font-bold text-accent">78%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "78%" } : {}}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {recommendationItems.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + (idx * 0.1), type: "spring", stiffness: 200 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/40 hover:bg-white/5 border border-transparent hover:border-accent/20 transition-all duration-300"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        item.type === "check" ? "bg-green-500/20 text-green-500 shadow-lg shadow-green-500/20" : "bg-yellow-500/20 text-yellow-500 shadow-lg shadow-yellow-500/20"
                      }`}>
                      {item.type === "check" ? "✓" : "!"}
                    </div>
                    <span className="text-xs font-medium text-foreground/70">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/roadmap" className="btn-secondary w-full justify-center group/btn">
                View Full Roadmap
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </Link>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}