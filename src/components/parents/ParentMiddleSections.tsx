"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Target, Star, Eye, MessageCircle, HeartHandshake, Lightbulb, CheckCircle2 } from "lucide-react";

export default function ParentMiddleSections() {
  const [active, setActive] = useState(0);

  const sections = [
    {
      icon: TrendingUp,
      grade: "01",
      label: "Progress",
      title: "Progress",
      short: "See how your child is progressing towards their goals.",
      desc: "Understand your child's strengths, weaknesses, and real-time progress on their academic journey.",
      items: ["Career Direction", "Profile Strength", "University Readiness", "Roadmap Progress"],
      color: "text-green-500",
      inactiveBorder: "border-green-500/30",
      activeBorder: "border-green-500/70",
      glow: "rgba(34, 197, 94, 0.3)",
    },
    {
      icon: Target,
      grade: "02",
      label: "Goals",
      title: "Goals",
      short: "Understand what your child is working towards.",
      desc: "Keep your child's career and academic targets in focus so they always know exactly what to prioritize.",
      items: ["Career Goals", "University Goals", "Current Priorities", "Monthly Focus"],
      color: "text-purple-500",
      inactiveBorder: "border-purple-500/30",
      activeBorder: "border-purple-500/70",
      glow: "rgba(168, 85, 247, 0.3)",
    },
    {
      icon: Star,
      grade: "03",
      label: "Novi's Recs",
      title: "Novi's Recommendations",
      short: "Understand what Novi recommends and why.",
      desc: "Get personalized suggestions on how to best support your child's growth without taking control away.",
      items: ["Next Steps", "Development Areas", "Opportunities", "Important Milestones"],
      color: "text-orange-500",
      inactiveBorder: "border-orange-500/30",
      activeBorder: "border-orange-500/70",
      glow: "rgba(249, 115, 22, 0.3)",
    },
  ];

  return (
    <>
      <section className="pt-12 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">You want to help. <br /> But you don't want to take over.</h2>
              <p className="text-foreground/50 mb-8">As a parent, you want to know...</p>
              <ul className="space-y-4">
                {["Is my child on the right path?", "Are they making progress?", "What should they focus on next?", "How can I help without creating pressure?"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-foreground/70">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-primary font-semibold text-lg">Novi gives you clarity. 💙</p>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-foreground mb-8">Everything you need to understand their journey.</h2>
              
              <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                {sections.map((section, index) => {
                  const isActive = active === index;
                  const Icon = section.icon;

                  return (
                    <motion.button
                      key={section.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-500 flex flex-col w-full md:w-auto
                        ${isActive 
                          ? `md:flex-[1.5] bg-background/90 ${section.activeBorder} shadow-2xl` 
                          : `md:flex-1 bg-background/40 ${section.inactiveBorder} hover:opacity-100 opacity-80`
                        }`
                      }
                    >
                      {isActive && (
                        <div 
                          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                          style={{ backgroundColor: section.glow }}
                        />
                      )}

                      <div className={`flex items-center gap-4 p-5 pb-0 relative z-10`}>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 transition-all duration-500 ${
                          isActive ? `bg-gradient-to-br ${section.color} text-white` : `bg-background border border-foreground/10 ${section.color}`
                        }`}>
                          {section.grade}
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[10px] uppercase tracking-[0.16em] font-bold ${isActive ? 'text-foreground/50' : 'text-foreground/30'}`}>
                            {section.label}
                          </span>
                          <h3 className={`text-xl font-bold truncate ${isActive ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'} transition-colors`}>
                            {section.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-5 relative z-10">
                        <p className={`text-sm leading-relaxed ${isActive ? 'text-foreground/70' : 'text-foreground/45'}`}>
                          {section.short}
                        </p>

                        <div className={`mt-4 grid grid-cols-2 gap-2 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                          {section.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${section.color}`} />
                              {item}
                            </div>
                          ))}
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: 10 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: 10 }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className={`mt-4 text-sm leading-relaxed text-foreground/60`}>
                                {section.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className={`mt-5 text-xs font-semibold flex items-center gap-1 transition-all duration-300 ${isActive ? section.color : 'text-foreground/30 group-hover:text-foreground'}`}>
                          {isActive ? (
                            <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${section.color} animate-pulse`} />
                              Viewing this stage
                            </motion.span>
                          ) : ("View stage")}
                          <motion.span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} animate={{ x: isActive ? 3 : 0 }}>→</motion.span>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="pt-8 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Know what matters right now.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border border-foreground/10 bg-background/50">
              <h4 className="text-sm font-bold text-foreground mb-6">This Month's Focus</h4>
              <div className="space-y-6">
                {[
                  { title: "Build research experience", progress: "80%" },
                  { title: "Improve coding depth", progress: "65%" },
                  { title: "Prepare for SAT", progress: "40%" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground/70">{item.title}</span>
                      <span className="text-sm font-bold text-primary">{item.progress}</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: item.progress }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1 }} 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-foreground/10 bg-background/50 flex flex-col items-center justify-center">
              <h4 className="text-sm font-bold text-foreground mb-6">Progress</h4>
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-foreground/10" />
                  <motion.circle
                    cx="50" cy="50" r="40" fill="none" stroke="url(#parentProgressGrad)" strokeWidth="8" strokeLinecap="round"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.67) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeDasharray="251.2"
                  />
                  <defs>
                    <linearGradient id="parentProgressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6c5ce7" />
                      <stop offset="100%" stopColor="#00cec9" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">67%</span>
                </div>
              </div>
              <p className="text-center text-[10px] text-foreground/40 mt-2">3/5 completed</p>
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <h4 className="text-xs font-bold text-foreground">Novi's Parent Insight</h4>
              </div>
              <p className="text-xs text-foreground/60 leading-relaxed mb-3">Your child is showing a growing interest in technology and entrepreneurship.</p>
              <div className="border-t border-primary/10 pt-2">
                <p className="text-[10px] text-foreground/50">We recommend focusing on technical experiences over certificates.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Stay involved. Without micromanaging.</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="text-center p-4"><div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2"><Eye className="w-5 h-5" /></div><h3 className="font-bold text-foreground mb-1">See</h3><p className="text-xs text-foreground/50">How your child is progressing.</p></div>
          <div className="text-center p-4"><div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-2"><MessageCircle className="w-5 h-5" /></div><h3 className="font-bold text-foreground mb-1">Ask</h3><p className="text-xs text-foreground/50">Questions whenever you need clarity.</p></div>
          <div className="text-center p-4"><div className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center mx-auto mb-2"><HeartHandshake className="w-5 h-5" /></div><h3 className="font-bold text-foreground mb-1">Support</h3><p className="text-xs text-foreground/50">Take the next step without control.</p></div>
        </div>
      </section>
    </>
  );
}