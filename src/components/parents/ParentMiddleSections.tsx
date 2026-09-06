"use client";
import { motion } from "framer-motion";
import { TrendingUp, Target, GraduationCap, Eye, MessageCircle, HeartHandshake, Lightbulb } from "lucide-react";

export default function ParentMiddleSections() {
  return (
    <>
      <section className="pt-12 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-foreground mb-4">You want to help. <br /> But you don't want to take over.</h2>
              <p className="text-foreground/50 mb-6">As a parent, you want to know...</p>
              <ul className="space-y-3">
                {["Is my child on the right path?", "Are they making progress?", "What should they focus on next?", "How can I help without creating pressure?"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-base text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-primary font-semibold text-base">Novi gives you clarity. 💙</p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Everything you need to understand their journey.</h2>
              
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-foreground/10 bg-background/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Progress</h3>
                  </div>
                  <p className="text-xs text-foreground/50 leading-snug">See how your child is progressing.</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[10px] text-foreground/60 border-t border-foreground/5 mt-auto">
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-primary"></span> Direction</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-primary"></span> Strength</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-primary"></span> Readiness</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-foreground/10 bg-background/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Goals</h3>
                  </div>
                  <p className="text-xs text-foreground/50 leading-snug">Understand what your child is working towards.</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[10px] text-foreground/60 border-t border-foreground/5 mt-auto">
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-accent"></span> Career</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-accent"></span> University</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-accent"></span> Priorities</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-foreground/10 bg-background/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Novi's Recs</h3>
                  </div>
                  <p className="text-xs text-foreground/50 leading-snug">Understand what Novi recommends and why.</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[10px] text-foreground/60 border-t border-foreground/5 mt-auto">
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-pink-500"></span> Next Steps</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-pink-500"></span> Areas</span>
                    <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-pink-500"></span> Opportunities</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="pt-8 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Know what matters right now.</h2>
          
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-foreground/10 bg-background/50">
              <h4 className="text-xs font-bold text-foreground mb-4">This Month's Focus</h4>
              <div className="space-y-4">
                {[
                  { title: "Build research experience", progress: "80%" },
                  { title: "Improve coding depth", progress: "65%" },
                  { title: "Prepare for SAT", progress: "40%" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-foreground/70">{item.title}</span>
                      <span className="text-xs font-bold text-primary">{item.progress}</span>
                    </div>
                    <div className="h-1.5 bg-foreground/10 rounded-full">
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
            <div className="p-4 rounded-2xl border border-foreground/10 bg-background/50 flex flex-col items-center justify-center">
              <h4 className="text-xs font-bold text-foreground mb-3">Progress</h4>
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
            <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5">
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