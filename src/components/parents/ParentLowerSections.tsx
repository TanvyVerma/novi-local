"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, ArrowRight, ArrowLeft, Brain, Dumbbell, BookOpen, Users, 
  Trophy, Target, Briefcase, CheckCircle2, Star, MessageCircle
} from "lucide-react";

const journeySteps = [
  { label: "Interests", icon: Brain, color: "text-purple-500" },
  { label: "Strengths", icon: Dumbbell, color: "text-red-500" },
  { label: "Academics", icon: BookOpen, color: "text-green-500" },
  { label: "Activities", icon: Users, color: "text-blue-500" },
  { label: "Achievements", icon: Trophy, color: "text-orange-500" },
  { label: "Goals", icon: Target, color: "text-yellow-500" },
  { label: "Experiences", icon: Briefcase, color: "text-cyan-500" },
];

const DoubleArrow = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <ArrowLeft className="w-4 h-4 text-primary" />
    <div className="h-0.5 w-10 border-t-2 border-dashed border-primary/50" />
    <ArrowRight className="w-4 h-4 text-primary" />
  </div>
);

export default function ParentLowerSections() {
  return (
    <>
      <section className="pt-8 pb-12 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.5fr_1.5fr] gap-6 items-center">
          <div className="relative w-full h-[280px] flex justify-center items-center">
            <Image src="/girl1.png" alt="Student" fill priority className="object-contain object-center z-10" />
            
            {/* pop -up on the picture */}
            {/* <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 sm:right-4 bg-surface dark:bg-[#1a183c] border border-foreground/10 rounded-2xl p-4 max-w-[180px] z-20 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-foreground">Hi! I'm Novi</span>
                <span className="text-[10px]">👋</span>
              </div>
              <p className="text-xs text-foreground/60">I'm here to help your child's best future.</p>
            </motion.div> */}
          </div>

          <div className="flex flex-col gap-4 lg:pr-4">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                You have questions. Novi has context.
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-3">Ask about your child's journey, goals, and future.</h2>
            </div>
            <div className="relative flex flex-col md:flex-row items-center gap-4">
              
              <div className="flex items-start justify-start w-full md:w-1/2">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-foreground/10">
                  <Image src="/girl1.png" alt="Parent" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex-1 max-w-[320px] p-4 rounded-2xl rounded-tl-none border border-foreground/10 bg-background/50 ml-3">
                  <p className="text-xs font-bold text-foreground/50 mb-1">Parent</p>
                  <p className="text-sm text-foreground/80">Is my child on track for their target university?</p>
                </div>
              </div>

              <div className="flex items-center gap-1 z-10 px-2 md:px-4">
                <ArrowLeft className="w-4 h-4 text-primary" />
                <div className="h-0.5 w-12 border-t-2 border-dashed border-primary/50" />
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-start justify-end w-full md:w-1/2">
                <div className="flex-1 max-w-[360px] p-4 rounded-2xl rounded-tr-none border border-primary/20 bg-primary/5 mr-3">
                  <p className="text-xs font-bold text-primary mb-1">Novi</p>
                  <p className="text-sm text-foreground/80">Yes, Riya is on track for her target universities. Her academics, activities and profile strength align well with Computer Science programs she's aiming for.</p>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-foreground/10">
                  <Image src="/girl1.png" alt="Novi" width={40} height={40} className="object-cover" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              {[
                "What should we focus on this summer?",
                "Should my daughter choose Economics or Business?",
                "How can we help without putting pressure on her?",
                "Is her profile strong enough for scholarships?"
              ].map((q, i) => (
                <button key={i} className="text-left p-3 rounded-xl border border-foreground/10 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all text-xs text-foreground/70 flex gap-2 items-start">
                  <MessageCircle className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                  {q}
                </button>
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <button className="btn-primary group w-full sm:w-auto">
                Ask Novi 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="pt-8 pb-12 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/3 w-full space-y-4">
            <h2 className="text-4xl font-bold text-foreground leading-tight">Novi sees the journey, not just the grades.</h2>
            <p className="text-foreground/50 leading-relaxed">Novi understands how these pieces connect over time—giving your child guidance that becomes more personal as their journey grows.</p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-nowrap">
              {journeySteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center min-w-[55px] sm:min-w-[65px]">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/50 border border-foreground/10 flex items-center justify-center ${step.color}`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold text-center text-foreground/70 mt-2">{step.label}</span>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <ArrowRight className={`w-4 h-4 mx-0 sm:mx-1 ${step.color} shrink-0`} />
                  )}
                </div>
              ))}
              <div className="flex flex-col items-center min-w-[65px] sm:min-w-[75px]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-xl shadow-primary/20">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-center text-primary mt-2">Personalized Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/3 w-full space-y-4">
            <h2 className="text-4xl font-bold text-foreground leading-tight">You stay informed. <br/> They stay in control.</h2>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 w-full p-6 rounded-2xl border border-primary/20 bg-primary/5 shadow-sm">
              <h4 className="font-bold text-primary mb-4">Parent</h4>
              <div className="space-y-2 text-sm text-foreground/70">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Clarity</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Progress</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Insights</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Guidance</p>
              </div>
            </div>

            <DoubleArrow className="mx-2" />

            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-xl">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">N</span>
                </div>
              </div>
              <p className="font-bold text-foreground mt-3">Novi</p>
              <p className="text-xs text-foreground/40">Shared Understanding</p>
            </div>

            <DoubleArrow className="mx-2" />

            <div className="flex-1 w-full p-6 rounded-2xl border border-accent/20 bg-accent/5 shadow-sm">
              <h4 className="font-bold text-accent mb-4">Student</h4>
              <div className="space-y-2 text-sm text-foreground/70">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Independence</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Exploration</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Decisions</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-12 px-6 lg:px-12 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Loved by parents. Built for students.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Novi helped me understand what my child actually needs, without turning every conversation into a discussion.", name: "Arjun", role: "Parent" },
              { quote: "The monthly insights from Novi are incredibly helpful. We know how to support, not what to push.", name: "Meera", role: "Parent" },
              { quote: "Finally a platform that keeps us informed but gives our child the space to explore and grow.", name: "Priya", role: "Parent" },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border border-foreground/10 bg-background/50">
                <p className="text-3xl text-primary font-serif mb-4">“</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">{t.quote}</p>
                <p className="text-sm font-bold text-foreground">- {t.name}'s {t.role}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">4.9/5</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-foreground/50">from 10,000+ reviews</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["DPS", "Oakridge", "Pathways", "Inventure", "The Orchid"].map((school) => (
                <span key={school} className="text-sm font-bold text-foreground/30 uppercase tracking-wider">{school}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/50 p-8 lg:p-12">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative w-full h-[300px] flex items-end justify-center">
              <Image src="/girl2.png" alt="Student pointing" width={400} height={400} className="w-full h-full object-contain object-bottom" />
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
              <Link href="/signup" className="btn-primary group w-full justify-center">
                Get Started with Novi 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/dashboard" className="btn-secondary w-full justify-center">
                Explore Parent Dashboard
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}