"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, Swords, ScrollText, Trophy, Sparkles, Star, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={`group relative rounded-3xl border border-black/5 dark:border-foreground/10 bg-background/70 backdrop-blur-xl p-6 transition-shadow duration-500 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 50px -12px ${glowColor}` }} />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

export default function ForStudents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section id="for-students" className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Track Your Progress
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground/90 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Your <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">Success</span> Dashboard
          </h2>
          <p className="text-foreground/50 max-w-xl mx-auto">A beautifully structured way to see your journey, achievements, and where to go next.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4"
          >
            <TiltCard className="h-full flex flex-col" glowColor="rgba(168, 85, 247, 0.2)">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold">Career Passport</h3>
                  <span className="text-xs text-foreground/60 font-medium">Your milestones unlocked</span>
                </div>
                <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Level 2</span>
              </div>
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2 [scrollbar-width:none]">
                {tabs.map((tab) => (
                  <div key={tab.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-white/5 cursor-pointer hover:border-primary/30 transition-all group/tab">
                    <tab.icon className="w-4 h-4 text-primary group-hover/tab:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{tab.label}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 flex-grow">
                {passportItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-background/30 hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary group-hover/item:animate-pulse"></span>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                    <span className="text-xs font-mono text-foreground/60">{item.date}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/students" className="btn-primary w-full justify-center mt-6 group">
                View Full Passport
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </TiltCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2"
          >
            <TiltCard className="h-full flex flex-col items-center justify-center text-center" glowColor="rgba(59, 130, 246, 0.3)">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-4">Profile Strength</span>
              
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="10" />
                  <motion.circle
                    cx="50" cy="50" r="40" fill="none" stroke="url(#bentoGrad)" strokeWidth="10" strokeLinecap="round"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={isInView ? { strokeDashoffset: 251.2 * (1 - 0.78) } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeDasharray="251.2"
                  />
                  <defs>
                    <linearGradient id="bentoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-primary">78%</span>
                </div>
              </div>

              <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                <Check className="w-4 h-4" /> Great progress!
              </span>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-6"
          >
            <TiltCard className="h-full" glowColor="rgba(59, 130, 246, 0.3)">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-3xl font-black text-white shrink-0">
                    S
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Stanford University</h4>
                    <p className="text-sm text-foreground/50">Computer Science</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-bold text-accent">Readiness: 78%</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden mb-6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "78%" } : {}}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {recommendationItems.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 + idx * 0.1 }}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/70"
                      >
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${item.type === "check" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"}`}>
                          {item.type === "check" ? "✓" : "!"}
                        </span>
                        {item.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/roadmap" className="btn-secondary w-full justify-center mt-6 group">
                View Full Roadmap
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}