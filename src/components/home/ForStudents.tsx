// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { BookOpen, Swords, ScrollText, Trophy, Sparkles, Star, ArrowRight, Check, AlertCircle } from "lucide-react";
// import Link from "next/link";

// interface PassportItem {
//   id: string;
//   category: string;
//   text: string;
//   date: string;
//   tag: string;
// }

// const passportData: PassportItem[] = [
//   { id: "1", category: "Projects", text: "AI Healthcare Diagnostics App", date: "May 2026", tag: "ML Project" },
//   { id: "2", category: "Projects", text: "Distributed Web Crawler", date: "Apr 2026", tag: "Systems" },
//   { id: "3", category: "Competitions", text: "International Olympiad in Informatics", date: "Mar 2026", tag: "Finalist" },
//   { id: "4", category: "Competitions", text: "National Hackathon 2026", date: "Feb 2026", tag: "1st Place" },
//   { id: "5", category: "Certificates", text: "Deep Learning Specialization", date: "Jan 2026", tag: "Stanford Online" },
//   { id: "6", category: "Leadership", text: "TEDx Youth Lead Organizer", date: "Dec 2025", tag: "Leadership" },
//   { id: "7", category: "Skills", text: "System Architecture & Next.js", date: "Nov 2025", tag: "Advanced" },
//   { id: "8", category: "Activities", text: "Open Source Contributor", date: "Oct 2025", tag: "Community" },
// ];

// const recommendationItems = [
//   { text: "Academic Excellence", type: "check", score: "+95%" },
//   { text: "AI & ML Research Depth", type: "check", score: "+88%" },
//   { text: "Competitive Programming", type: "check", score: "+82%" },
//   { text: "Global Leadership Experience", type: "warn", score: "Needs Focus" },
//   { text: "Extracurricular Portfolio", type: "warn", score: "In Progress" },
// ];

// const tabs = [
//   { id: "Projects", label: "Projects", icon: BookOpen },
//   { id: "Competitions", label: "Competitions", icon: Swords },
//   { id: "Certificates", label: "Certificates", icon: ScrollText },
//   { id: "Leadership", label: "Leadership", icon: Trophy },
//   { id: "Skills", label: "Skills", icon: Sparkles },
//   { id: "Activities", label: "Activities", icon: Star },
// ];

// function InteractiveGlassCard({
//   children,
//   className = "",
//   glowColor = "rgba(99, 102, 241, 0.25)",
// }: {
//   children: React.ReactNode;
//   className?: string;
//   glowColor?: string;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 250, damping: 25 });
//   const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 250, damping: 25 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const xPct = (e.clientX - rect.left) / rect.width - 0.5;
//     const yPct = (e.clientY - rect.top) / rect.height - 0.5;
//     mouseX.set(xPct);
//     mouseY.set(yPct);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className={`relative rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 ${className}`}
//     >
//       <div
//         className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         style={{
//           background: `radial-gradient(600px circle at center, ${glowColor}, transparent 40%)`,
//         }}
//       />
//       <div style={{ transform: "translateZ(20px)" }}>{children}</div>
//     </motion.div>
//   );
// }

// export default function ForStudents() {
//   const [activeTab, setActiveTab] = useState("Projects");

//   const filteredItems = passportData.filter((item) => item.category === activeTab);

//   return (
//     <section id="for-students" className="relative py-28 px-6 overflow-hidden">
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16 space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Track Your Milestones
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
//           >
//             Your Personal{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
//               Career DNA
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-foreground/60 max-w-xl mx-auto text-base sm:text-lg"
//           >
//             An interactive command center tracking your achievements, academic progress, and roadmap to target universities.
//           </motion.p>
//         </div>
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch">
//           <div className="lg:col-span-8 group">
//             <InteractiveGlassCard glowColor="rgba(99, 102, 241, 0.2)" className="h-full flex flex-col justify-between">
//               <div>
//                 <div className="flex items-center justify-between mb-8">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
//                     <h3 className="text-2xl font-bold tracking-tight">Career Passport</h3>
//                   </div>
//                   <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1.5 rounded-full">
//                     Level 3 Mentor Verified
//                   </span>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-background/50 border border-white/5 rounded-2xl">
//                   {tabs.map((tab) => {
//                     const Icon = tab.icon;
//                     const isActive = activeTab === tab.id;
//                     return (
//                       <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
//                           isActive ? "text-white" : "text-foreground/50 hover:text-foreground"
//                         }`}
//                       >
//                         {isActive && (
//                           <motion.div
//                             layoutId="activeTabIndicator"
//                             className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg"
//                             transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                           />
//                         )}
//                         <span className="relative z-10 flex items-center gap-2">
//                           <Icon className="w-4 h-4" />
//                           {tab.label}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//                 <div className="min-h-[220px] mb-8">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeTab}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.25 }}
//                       className="space-y-3"
//                     >
//                       {filteredItems.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex items-center justify-between p-4 rounded-2xl bg-background/30 border border-white/5 hover:border-indigo-500/30 transition-all duration-200 group/row"
//                         >
//                           <div className="flex items-center gap-3">
//                             <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover/row:scale-150 transition-transform" />
//                             <span className="text-sm font-semibold">{item.text}</span>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/70">
//                               {item.tag}
//                             </span>
//                             <span className="text-xs font-mono text-foreground/40">{item.date}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>
//               <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div className="flex items-center gap-4">
//                   <div className="relative w-12 h-12 flex items-center justify-center">
//                     <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
//                       <path
//                         className="text-white/10"
//                         strokeWidth="3"
//                         stroke="currentColor"
//                         fill="none"
//                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       />
//                       <path
//                         className="text-indigo-400"
//                         strokeDasharray="82, 100"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         stroke="currentColor"
//                         fill="none"
//                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       />
//                     </svg>
//                     <span className="absolute text-xs font-bold text-indigo-400">82%</span>
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-foreground">Profile Power Index</p>
//                     <p className="text-[11px] text-foreground/50">Top 5% among Grade 11 applicants</p>
//                   </div>
//                 </div>

//                 <Link
//                   href="/passport"
//                   className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25"
//                 >
//                   View Full Passport <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>
//             </InteractiveGlassCard>
//           </div>

//           <div className="lg:col-span-4 group">
//             <InteractiveGlassCard glowColor="rgba(236, 72, 153, 0.2)" className="h-full flex flex-col justify-between">
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-bold tracking-tight">Novi&apos;s Target Match</h3>
//                   <span className="text-xs font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 px-3 py-1 rounded-full">
//                     94% Match
//                   </span>
//                 </div>

//                 <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500/10 via-pink-500/5 to-transparent border border-red-500/20 flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-red-600/30">
//                     S
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-base">Stanford University</h4>
//                     <p className="text-xs text-foreground/60">B.S. Computer Science</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2.5">
//                   <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Readiness Matrix</p>
//                   {recommendationItems.map((rec) => (
//                     <div
//                       key={rec.text}
//                       className="flex items-center justify-between p-3 rounded-xl bg-background/30 border border-white/5"
//                     >
//                       <div className="flex items-center gap-2.5">
//                         {rec.type === "check" ? (
//                           <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
//                             <Check className="w-3 h-3" />
//                           </div>
//                         ) : (
//                           <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
//                             <AlertCircle className="w-3 h-3" />
//                           </div>
//                         )}
//                         <span className="text-xs font-medium">{rec.text}</span>
//                       </div>
//                       <span className={`text-xs font-mono font-semibold ${rec.type === "check" ? "text-emerald-400" : "text-amber-400"}`}>
//                         {rec.score}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <Link
//                 href="/roadmap"
//                 className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold text-sm transition-all"
//               >
//                 View Action Plan <ArrowRight className="w-4 h-4" />
//               </Link>
//             </InteractiveGlassCard>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




















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
      className={`group relative rounded-3xl border border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl p-6 sm:p-8 transition-shadow duration-500 ${className}`}
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
      className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background" // Changed to py-16
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12" // Changed from mb-16 to mb-12
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Track Your Progress
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground/90 mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Your <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">Success</span> Dashboard
          </h2>
          <p className="text-base sm:text-lg text-foreground/50 max-w-2xl mx-auto">
            A beautifully structured way to see your journey, achievements, and where to go next.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* LEFT CARD: Career Passport */}
          <motion.div
            initial={{ x: -120, opacity: 0, rotateY: -15 }}
            animate={isInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
          >
            <TiltCard glowColor="rgba(168, 85, 247, 0.25)">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
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

              {/* Horizontal Sliding Tabs (Clean Lucide Icons) */}
              <div className="flex flex-nowrap overflow-x-auto gap-6 mb-8 pb-4 border-b border-black/5 dark:border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab, i) => (
                  <div key={tab.label} className="flex flex-col items-center gap-2 group/tab cursor-pointer min-w-[64px] shrink-0">
                    <div className="w-10 h-10 rounded-2xl bg-background/50 border border-primary/10 flex items-center justify-center text-primary text-lg group-hover/tab:bg-primary group-hover/tab:text-white group-hover/tab:scale-125 group-hover/tab:shadow-lg group-hover/tab:shadow-primary/30 transition-all duration-300">
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-center font-medium text-foreground/40 group-hover/tab:text-primary transition-colors">
                      {tab.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* List & Strength */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <ul className="flex-1 space-y-4 w-full">
                  {passportItems.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + (idx * 0.1), type: "spring", stiffness: 100 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-background/30 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary group-hover/item:animate-pulse"></span>
                        <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                      </div>
                      <span className="text-xs font-mono text-foreground/40">{item.date}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="w-full lg:w-36 flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-2xl p-5 shrink-0">
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

          {/* RIGHT CARD: Novi's Pick */}
          <motion.div
            initial={{ x: 120, opacity: 0, rotateY: 15 }}
            animate={isInView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          >
            <TiltCard glowColor="rgba(59, 130, 246, 0.25)">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700" />

              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
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

              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-background/40 border border-white/5">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-2xl sm:text-3xl font-black text-white shadow-xl shadow-red-500/20 shrink-0"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  S
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 truncate">Stanford University</h4>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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