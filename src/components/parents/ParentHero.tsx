"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";

export default function ParentHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              PARENT GUIDANCE WITH NOVI
            </span>
            
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              For parents, <span className="text-primary">clarity.</span>
              <br />
              For students, <span className="text-accent">independence.</span>
            </h1>
            
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Stay informed about your child's journey without taking over it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#dashboard" className="btn-primary group">
                Explore Parent Dashboard 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How Novi Works
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <span className="text-sm text-foreground/60 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Stay informed</span>
              <span className="text-sm text-foreground/60 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Understand progress</span>
              <span className="text-sm text-foreground/60 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Support without pressure</span>
            </div>
          </div>
          
          <div className="relative w-full h-[500px] flex justify-end items-end">
            <div className="relative z-10 w-[70%] max-w-[480px] bg-surface dark:bg-[#1a183c] border border-foreground/10 rounded-3xl p-6 shadow-2xl mr-[-60px] mb-12">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center overflow-hidden">
                     <span className="text-xs font-bold text-foreground">R</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Riya's Progress</h3>
                    <p className="text-xs text-foreground/50">Grade 11 · Target: Computer Science</p>
                  </div>
                </div>
                <span className="text-xs text-foreground/40">This Month ▼</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">Career Direction</p>
                  <span className="text-sm font-bold text-green-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> On Track</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">Profile Strength</p>
                  <span className="text-2xl font-bold text-foreground">78%</span>
                  <div className="h-1 w-full bg-foreground/10 rounded-full mt-1"><div className="h-full w-[78%] bg-primary rounded-full" /></div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">University Readiness</p>
                  <span className="text-2xl font-bold text-foreground">71%</span>
                  <div className="h-1 w-full bg-foreground/10 rounded-full mt-1"><div className="h-full w-[71%] bg-accent rounded-full" /></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-foreground/70">Roadmap Progress</span>
                  <span className="text-xs font-bold text-primary">68%</span>
                </div>
                <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-primary rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/70 mb-3">This Month's Focus</p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Build research experience</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Improve coding depth</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Prepare for SAT</li>
                </ul>
              </div>
            </div>
            
            <div className="relative z-20 w-[65%] h-[450px] ml-[-40px] flex justify-end">
              <Image 
                src="/parents.png" 
                alt="Parents looking at tablet" 
                fill 
                priority 
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1 right-0 z-30 bg-surface dark:bg-[#1a183c] border border-primary/20 rounded-2xl p-4 shadow-xl max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-foreground">Novi Insight</span>
              </div>
              <p className="text-xs text-foreground/60">Your child is showing a growing interest in technology and entrepreneurship.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}