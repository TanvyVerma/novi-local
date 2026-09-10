"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, ArrowRight, ArrowLeft, Brain, Dumbbell, BookOpen, Users, 
  Trophy, Target, Briefcase, CheckCircle2, Star, MessageCircle
} from "lucide-react";
import { useState } from "react";

const stageData = [
  {
    id: 0, icon: Brain, color: "text-purple-500", bg: "bg-purple-500/10",
    parentTitle: "Clarity on Passions", parentDesc: "Understand what truly excites your child.",
    parentItems: ["Interest Assessment", "Talent Spotting", "Motivation Insights", "Natural Strengths"],
    parentMetric: "Passion Score", parentProgress: 85,
    studentTitle: "Explore Passions", studentDesc: "Discover what makes you tick.",
    studentItems: ["Self-Discovery", "Curiosity Mapping", "Interest Tests", "Personal Goals"],
    studentMetric: "Self-Knowledge", studentProgress: 75,
  },
  {
    id: 1, icon: Dumbbell, color: "text-red-500", bg: "bg-red-500/10",
    parentTitle: "Skill Building", parentDesc: "Watch their core skills sharpen over time.",
    parentItems: ["Resilience Tracking", "Skill Growth", "Challenge Metrics", "Progress Reports"],
    parentMetric: "Skill Strength", parentProgress: 80,
    studentTitle: "Build Strengths", studentDesc: "Turn weaknesses into strong advantages.",
    studentItems: ["Practice Routines", "Challenge Levels", "Skill Tree", "Achievement Badges"],
    studentMetric: "Confidence", studentProgress: 70,
  },
  {
    id: 2, icon: BookOpen, color: "text-green-500", bg: "bg-green-500/10",
    parentTitle: "Academic Success", parentDesc: "Stay informed on school and exam performance.",
    parentItems: ["Grade Analytics", "Subject Balance", "Exam Readiness", "Study Habits"],
    parentMetric: "Academic Health", parentProgress: 90,
    studentTitle: "Master Academics", studentDesc: "Get ahead of the curve in your studies.",
    studentItems: ["Smart Study", "Subject Mastery", "Exam Prep", "Time Management"],
    studentMetric: "Study Efficiency", studentProgress: 88,
  },
  {
    id: 3, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10",
    parentTitle: "Social Growth", parentDesc: "See how they collaborate and lead in groups.",
    parentItems: ["Teamwork Index", "Leadership Signals", "Social Wellness", "Community Impact"],
    parentMetric: "Social Score", parentProgress: 70,
    studentTitle: "Grow Together", studentDesc: "Develop real-world collaboration skills.",
    studentItems: ["Team Projects", "Leadership Roles", "Peer Interaction", "Empathy Drills"],
    studentMetric: "Collaboration", studentProgress: 65,
  },
  {
    id: 4, icon: Trophy, color: "text-orange-500", bg: "bg-orange-500/10",
    parentTitle: "Winning Streak", parentDesc: "Track achievements and competition wins.",
    parentItems: ["Contest Results", "Award Tracking", "Performance Peaks", "Milestone Checks"],
    parentMetric: "Achievement Index", parentProgress: 92,
    studentTitle: "Achieve More", studentDesc: "Turn effort into tangible, proud results.",
    studentItems: ["Contest Prep", "Skill Demonstrations", "Personal Bests", "Award Badges"],
    studentMetric: "Motivation", studentProgress: 85,
  },
  {
    id: 5, icon: Target, color: "text-yellow-500", bg: "bg-yellow-500/10",
    parentTitle: "Path to Goals", parentDesc: "Ensure every step aligns with their big ambitions.",
    parentItems: ["Roadmap Tracking", "Target Alignment", "Decision Support", "Milestone Checks"],
    parentMetric: "Goal Alignment", parentProgress: 78,
    studentTitle: "Focus on Targets", studentDesc: "Make progress on your biggest dreams.",
    studentItems: ["Goal Setting", "Action Plans", "Priority Lists", "Daily Focus"],
    studentMetric: "Focus Time", studentProgress: 72,
  },
  {
    id: 6, icon: Briefcase, color: "text-cyan-500", bg: "bg-cyan-500/10",
    parentTitle: "Future Ready", parentDesc: "Prepare for college and real-world experiences.",
    parentItems: ["Career Mapping", "College Prep", "Real-World Skills", "Mentor Insights"],
    parentMetric: "Future Readiness", parentProgress: 82,
    studentTitle: "Experience World", studentDesc: "Gain valuable real-world experiences.",
    studentItems: ["Internships", "Skill Workshops", "Real Projects", "College Applications"],
    studentMetric: "Real-World XP", studentProgress: 68,
  },
  {
    id: 7, icon: Sparkles, color: "text-primary", bg: "bg-primary/10",
    parentTitle: "Personalized Guidance", parentDesc: "A fully tailored plan based on every insight gathered so far.",
    parentItems: ["Custom Roadmap", "AI Recommendations", "Mentor Insights", "Family Alignment"],
    parentMetric: "Guidance Quality", parentProgress: 95,
    studentTitle: "Personalized Guidance", studentDesc: "Your perfect path is created just for you.",
    studentItems: ["Smart Recommendations", "Custom Milestones", "One-on-One Tips", "Future Steps"],
    studentMetric: "Path Clarity", studentProgress: 90,
  },
];

const testimonials = [
  { quote: "Novi helped me understand what my child actually needs, without turning every conversation into a discussion.", name: "Arjun", role: "Parent" },
  { quote: "The monthly insights from Novi are incredibly helpful. We know how to support, not what to push.", name: "Meera", role: "Parent" },
  { quote: "Finally a platform that keeps us informed but gives our child the space to explore and grow.", name: "Priya", role: "Parent" },
];

const DoubleArrow = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <ArrowLeft className="w-4 h-4 text-primary/60" />
    <div className="h-0.5 w-10 border-t-2 border-dashed border-primary/40" />
    <ArrowRight className="w-4 h-4 text-primary/60" />
  </div>
);

export default function ParentLowerSections() {
  const [activeStage, setActiveStage] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  
  const currentStage = stageData[activeStage];

  const handleNext = () => setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <section className="relative pt-12 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
        <div className="flex flex-col items-start gap-4 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              You have questions. Novi has context.
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-left lg:whitespace-nowrap">
              Ask about your child&apos;s journey, goals, and future.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center">
            
            <div className="relative w-full flex justify-center items-center">
              <div className="relative w-full max-w-[300px] h-[320px]">
                <Image src="/girl1.png" alt="Student" fill priority className="object-contain object-center z-10" />
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-10 right-0 sm:-right-10 lg:-right-16 bg-surface dark:bg-[#1a183c] border border-foreground/10 rounded-2xl p-4 max-w-[160px] z-20 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-foreground">Hi! I'm Novi</span>
                    <span className="text-[10px]">👋</span>
                  </div>
                  <p className="text-xs text-foreground/60">I'm here to help your child's best future.</p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              
              <div className="relative bg-background/50 backdrop-blur-xl rounded-3xl p-6 shadow-xl overflow-hidden">
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
                  
                  <div className="flex items-start gap-3 w-full min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-foreground/10">
                      <Image src="/girl1.png" alt="Parent" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="flex-1 bg-background/60 border-2 border-cyan-400/60 rounded-2xl rounded-tl-none p-4 min-w-0">
                      <p className="text-xs font-bold text-foreground/50 mb-1">Parent</p>
                      <p className="text-sm text-foreground/80">Is my child on track for their target university?</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-1 shrink-0">
                    <ArrowLeft className="w-4 h-4 text-primary/50" />
                    <div className="h-0.5 w-12 border-t-2 border-dashed border-primary/40" />
                    <ArrowRight className="w-4 h-4 text-primary/50" />
                  </div>

                  <div className="flex items-start gap-3 flex-row-reverse w-full min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-foreground/10">
                      <Image src="/girl1.png" alt="Novi" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="flex-1 bg-primary/5 border-2 border-purple-400/60 rounded-2xl rounded-tr-none p-4 min-w-0">
                      <p className="text-xs font-bold text-primary mb-1">Novi</p>
                      <p className="text-sm text-foreground/80">Yes, Riya is on track for her target universities. Her academics, activities and profile strength align well with Computer Science programs she's aiming for.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    "Focus on summer?",
                    "Economics vs Business?",
                    "How to help without pressure?",
                    "Scholarship readiness?"
                  ].map((q, i) => (
                    <button key={i} className="group px-3 py-3 rounded-xl border-2 border-blue-400/50 bg-background/40 hover:bg-primary/5 hover:border-blue-400/70 transition-all text-xs text-foreground/70 flex gap-2 items-center justify-center">
                      <MessageCircle className="w-3 h-3 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-center">{q}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="btn-primary group w-full sm:w-auto">
                    Ask Novi 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="md:max-w-xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight font-display">
                Novi sees the journey,<br/> 
                <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">not just the grades.</span>
              </h2>
            </div>
            <div className="md:max-w-sm md:text-right md:border-r-2 md:border-primary/20 md:pr-6 md:pb-2">
              <p className="text-foreground/60 text-lg leading-relaxed">
                Novi understands how these pieces connect over time—giving your child guidance that becomes more personal as their journey grows.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap mb-12">
            {stageData.map((step, i) => {
              const isLast = i === stageData.length - 1;
              return (
                <div key={i} className="flex items-center">
                  <button 
                    onClick={() => setActiveStage(i)}
                    className={`flex flex-col items-center transition-all duration-300 ${activeStage === i ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isLast && activeStage === i
                        ? 'bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/30 ring-4 ring-primary/30 scale-110'
                        : activeStage === i
                        ? `${step.bg} ring-2 ${step.color} ring-current shadow-lg`
                        : `${step.bg} border border-foreground/10`
                    }`}>
                      <step.icon className={`w-6 h-6 ${isLast && activeStage === i ? 'text-white' : step.color}`} />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-bold text-center mt-2 ${activeStage === i ? 'text-foreground' : 'text-foreground/40'}`}>{step.studentTitle.split(' ')[0]}</span>
                  </button>
                  {i < stageData.length - 1 && (
                    <ArrowRight className={`w-5 h-5 mx-1 sm:mx-2 ${activeStage >= i ? 'text-primary' : 'text-foreground/20'}`} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start mt-4">
            <div className="relative bg-background/60 border border-primary/20 rounded-3xl p-6 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/30">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Parent</h4>
                  <p className="text-xs text-foreground/50">Monitoring: {currentStage.parentTitle}</p>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-sm text-foreground/60 mb-4">{currentStage.parentDesc}</p>
                  <div className="space-y-2 text-sm text-foreground/70 mb-6">
                    {currentStage.parentItems.map((item, idx) => (
                      <p key={idx} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {item}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-auto border-t border-primary/10 pt-4">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-foreground/60">{currentStage.parentMetric}</span>
                  <span className="text-primary">{currentStage.parentProgress}%</span>
                </div>
                <div className="h-2 bg-foreground/10 rounded-full">
                  <motion.div 
                    key={activeStage}
                    initial={{ width: 0 }}
                    animate={{ width: `${currentStage.parentProgress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 h-full pt-10">
              <DoubleArrow className="mx-2 hidden lg:flex" />
              <div className="flex flex-col items-center justify-center relative py-2">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 rounded-full bg-primary/20 blur-xl"
                />
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xl font-bold shadow-xl">
                  N
                </div>
                <p className="font-bold text-foreground mt-3 relative z-10">Novi</p>
                <p className="text-xs text-foreground/40 relative z-10">Shared Understanding</p>
              </div>
              <DoubleArrow className="mx-2 hidden lg:flex" />
            </div>

            <div className="relative bg-background/60 border border-accent/20 rounded-3xl p-6 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-accent/30">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Student</h4>
                  <p className="text-xs text-foreground/50">Focus: {currentStage.studentTitle}</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-sm text-foreground/60 mb-4">{currentStage.studentDesc}</p>
                  <div className="space-y-2 text-sm text-foreground/70 mb-6">
                    {currentStage.studentItems.map((item, idx) => (
                      <p key={idx} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> {item}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-auto border-t border-accent/10 pt-4">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-foreground/60">{currentStage.studentMetric}</span>
                  <span className="text-accent">{currentStage.studentProgress}%</span>
                </div>
                <div className="h-2 bg-foreground/10 rounded-full">
                  <motion.div 
                    key={activeStage}
                    initial={{ width: 0 }}
                    animate={{ width: `${currentStage.studentProgress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-12 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Loved by parents. Built for students.</h2>
          <div className="relative w-full max-w-4xl mx-auto h-[240px] flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {testimonials.map((t, idx) => {
                  const offset = (idx - testimonialIdx + testimonials.length) % testimonials.length;
                  const position = offset === 0 ? 0 : offset === 1 ? 1 : -1;
                  const isActive = position === 0;
                  return (
                    <motion.div
                      key={idx}
                      className="absolute w-full max-w-md"
                      initial={{ opacity: 0, x: position * 200, scale: 0.8, zIndex: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.6, x: position * 250, scale: isActive ? 1 : 0.85, zIndex: isActive ? 10 : 0, rotateY: position * -15 }}
                      exit={{ opacity: 0, x: position * -200, scale: 0.8, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative rounded-3xl border border-white/25 bg-background/80 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        <span className="relative text-5xl font-serif text-primary/40 leading-none mb-3 block">“</span>
                        <p className="relative text-foreground/80 leading-relaxed mb-6 h-20 overflow-hidden">{t.quote}</p>
                        <p className="relative font-bold text-foreground text-sm">- {t.name}'s {t.role}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={handlePrev} className="group w-12 h-12 rounded-full bg-background/80 border border-white/15 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/10">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setTestimonialIdx(idx)} className={`h-2.5 rounded-full transition-all duration-500 ${idx === testimonialIdx ? 'w-10 bg-primary shadow-[0_0_10px_rgba(108,92,231,0.5)]' : 'w-2.5 bg-foreground/20 hover:bg-foreground/40'}`} />
              ))}
            </div>
            <button onClick={handleNext} className="group w-12 h-12 rounded-full bg-background/80 border border-white/15 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/10">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">4.9/5</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />))}
              </div>
              <span className="text-sm text-foreground/50">from 10,000+ reviews</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["DPS", "Oakridge", "Pathways", "Inventure", "The Orchid"].map((school) => (<span key={school} className="text-sm font-bold text-foreground/30 uppercase tracking-wider">{school}</span>))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative w-full h-[300px] flex items-end justify-center">
              <Image src="/girl1.png" alt="Student pointing" width={400} height={400} className="w-full h-full object-contain object-bottom" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">Your child's future is too important to navigate without clarity.</h2>
              <p className="text-foreground/60">Meet Novi—the AI mentor that helps students think clearly while keeping parents confidently in the loop.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                <span className="text-sm text-foreground/70 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free to get started</span>
                <span className="text-sm text-foreground/70 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Built around your child</span>
                <span className="text-sm text-foreground/70 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Stay informed without pressure</span>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3">
              <Link href="/signup" className="btn-primary group w-full justify-center">Get Started with Novi <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/dashboard" className="btn-secondary w-full justify-center">Explore Parent Dashboard</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}