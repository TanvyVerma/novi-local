"use client";

import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Bot,
  User,
  Compass,
  TrendingUp,
  GraduationCap,
  X,
  ChevronRight,
} from "lucide-react";

// Shared UI components
import Testimonials from "@/components/ui/Testimonials";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/ui/Footer";

/* ============================================================
   1. AI MENTOR CHAT
   ============================================================ */

interface QAPair {
  question: string;
  response: string;
}

const qaOptions: QAPair[] = [
  {
    question: "I'm interested in technology. What are my options?",
    response:
      "Great question, Riya! Based on your interests, strengths and your profile, I've found exciting career paths in Product Management, AI Engineering, and UX Architecture. Would you like to explore them?",
  },
  {
    question: "Yes, show me options.",
    response:
      "Awesome! We've lined up 3 target tech internships and a hackathon project this term that directly strengthen your Computer Science applications.",
  },
  {
    question: "What about universities?",
    response:
      "Your current profile strength of 78% makes you competitive for top-tier CS programs at CMU, Waterloo, and UCL. Let's aim for 85% by Grade 12!",
  },
  {
    question: "Tell me more about this",
    response:
      "We can break down your next 4 weeks into 2 hours of weekly algorithmic practice and drafting your research proposal with your mentor.",
  },
];

const capabilities = [
  "Career recommendations",
  "University suggestions",
  "Subject & skill guidance",
  "Profile building",
  "Goal tracking",
  "Answer your questions",
];

function StudentsAIMentor() {
  const [selectedQA, setSelectedQA] = useState<QAPair>(qaOptions[0]);
  const [typing, setTyping] = useState(false);

  const handleSelect = (item: QAPair) => {
    if (item === selectedQA) return;
    setTyping(true);
    window.setTimeout(() => {
      setSelectedQA(item);
      setTyping(false);
    }, 700);
  };

  const memoryFacts = [
    { label: "Grade", value: "11", color: "text-primary" },
    { label: "Track", value: "CS", color: "text-accent" },
    { label: "Profile", value: "78%", color: "text-emerald-500" },
    { label: "Target", value: "CMU, UCL", color: "text-rose-400" },
  ];

  const interests = ["Coding", "UX Design", "AI", "Entrepreneurship"];

  return (
    <section className="relative pt-12 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Ambient glow behind section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* ==================== LEFT — 4 cols ==================== */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              AI Mentor
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Have questions?
              <br />
              <span className="text-primary">Novi has context.</span>
            </h2>

            <p className="text-base text-foreground/70 leading-relaxed">
              Ask Novi anything — from career advice to university options. She
              remembers your journey and gives personalized answers.
            </p>

            <div className="flex flex-wrap gap-2">
              {capabilities.slice(0, 4).map((cap) => (
                <span
                  key={cap}
                  className="text-[11px] px-3 py-1.5 rounded-full bg-foreground/[0.04] border border-foreground/10 text-foreground/70 font-medium"
                >
                  {cap}
                </span>
              ))}
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold">
                +2 more
              </span>
            </div>

            <button className="btn-primary group">
              <MessageSquare className="w-4 h-4" />
              Start chatting with Novi
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Trust hint */}
            <div className="flex items-center gap-2 text-xs text-foreground/50 pt-2">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-primary/30 border border-background" />
                <div className="w-5 h-5 rounded-full bg-accent/30 border border-background" />
                <div className="w-5 h-5 rounded-full bg-rose-500/30 border border-background" />
              </div>
              <span>10,000+ students ask Novi every day</span>
            </div>
          </div>

          {/* ==================== CENTER — 5 cols — Chat ==================== */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-[32px] blur-2xl pointer-events-none" />

              {/* Chat container — no top gradient bar, glassy background */}
              <div className="relative rounded-3xl border border-foreground/10 bg-background/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* ---- Chat header ---- */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/10">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-lg">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground">Novi</p>
                    <p className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                      Online
                      <span className="text-foreground/40">·</span>
                      <span className="text-foreground/50">
                        Remembers Riya&apos;s journey
                      </span>
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider">
                      AI
                    </span>
                  </div>
                </div>

                {/* ---- Messages area ---- */}
                <div className="p-5 space-y-4 min-h-[280px] max-h-[340px] overflow-hidden">
                  {/* Student bubble — cyan border, transparent bg, curved */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="p-3.5 rounded-2xl rounded-tr-none bg-transparent border-2 border-cyan-400/60 text-foreground/85 text-sm leading-relaxed max-w-[85%]">
                      {selectedQA.question}
                    </div>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-cyan-400/40 shrink-0">
                      <Image
                        src="/riya-avatar.jpg"
                        alt="Riya"
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Novi response — purple border, transparent bg, curved */}
                  <AnimatePresence mode="wait">
                    {typing ? (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
                          N
                        </div>
                        <div className="px-4 py-3.5 rounded-2xl rounded-tl-none bg-transparent border-2 border-purple-400/60 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                          <span
                            className="w-2 h-2 rounded-full bg-primary animate-bounce"
                            style={{ animationDelay: "0.15s" }}
                          />
                          <span
                            className="w-2 h-2 rounded-full bg-primary animate-bounce"
                            style={{ animationDelay: "0.3s" }}
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={selectedQA.response}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
                          N
                        </div>
                        <div className="p-3.5 rounded-2xl rounded-tl-none bg-transparent border-2 border-purple-400/60 text-foreground/85 text-sm leading-relaxed max-w-[85%]">
                          {selectedQA.response}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ---- Suggested responses ---- */}
                <div className="px-5 pb-3">
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-2">
                    Suggested
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {qaOptions.slice(1).map((item) => {
                      const isActive =
                        selectedQA.question === item.question && !typing;
                      return (
                        <button
                          key={item.question}
                          onClick={() => handleSelect(item)}
                          disabled={typing}
                          className={`text-[11px] px-3 py-1.5 rounded-full border transition-all font-medium disabled:opacity-50 disabled:cursor-wait ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                              : "bg-transparent border-blue-400/40 text-foreground/70 hover:bg-primary/10 hover:border-primary/50 hover:text-primary"
                          }`}
                        >
                          {item.question}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---- Input bar ---- */}
                <div className="p-4 border-t border-foreground/10 bg-foreground/[0.02]">
                  <div className="flex items-center gap-2 rounded-2xl bg-transparent border-2 border-blue-400/40 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/10 px-3.5 py-2.5 transition-all">
                    <input
                      type="text"
                      placeholder="Ask Novi anything..."
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/40 text-foreground"
                    />
                    <button
                      aria-label="Send message"
                      className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 shadow-md shadow-primary/20"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* ==================== RIGHT — 3 cols — Memory ==================== */}
        <div className="lg:col-span-3 space-y-4 lg:sticky lg:top-24">
          {/* ===== What Novi knows card ===== */}
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/50 to-accent/[0.04] p-5 overflow-hidden">
            {/* corner glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                        
            {/* Header */}
            <div className="relative flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">
                    What Novi knows
                  </h4>
                  <p className="text-[9px] uppercase tracking-widest text-foreground/40 font-semibold">
                    About you
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-primary/70 uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                Live
              </span>
            </div>
                        
            {/* Fact tiles — 2x2 with icons */}
            <div className="relative grid grid-cols-2 gap-2.5 mb-4">
              {memoryFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="group relative rounded-2xl bg-background/60 border border-foreground/10 p-3 overflow-hidden hover:border-foreground/25 transition-colors"
                >
                  <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full blur-2xl opacity-30 bg-current pointer-events-none" />
                  <p
                    className={`relative text-lg font-black ${fact.color} leading-none`}
                  >
                    {fact.value}
                  </p>
                  <p className="relative text-[9px] uppercase tracking-[0.14em] text-foreground/50 mt-1.5 font-semibold">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Interests */}
            <div className="relative mb-4">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <span className="w-1 h-1 rounded-full bg-white" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/50">
                  Interests
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((tag, i) => {
                  const colors = [
                    "bg-purple-500/15 text-purple-400 border-purple-500/30",
                    "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
                    "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
                    "bg-rose-500/15 text-rose-400 border-rose-500/30",
                  ];
                  return (
                    <span
                      key={tag}
                      className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold cursor-default hover:scale-105 transition-transform ${
                        colors[i % colors.length]
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            
            {/* Footer strip */}
            <div className="relative pt-3 border-t border-foreground/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-foreground/70">
                <div className="relative">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-sm -z-10" />
                </div>
                <span className="font-medium">Journey remembered</span>
              </div>
              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">
                Synced
              </span>
            </div>
          </div>
            
          {/* ===== Capabilities card — compact 2-col grid ===== */}
          <div className="relative rounded-3xl border border-foreground/10 bg-surface/50 dark:bg-surface-elevated/30 p-5 overflow-hidden">
            {/* subtle top accent line */}
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70 leading-tight">
                  Novi can help with
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-foreground/35 font-semibold">
                  6 skills
                </p>
              </div>
            </div>
            
            {/* 2-col grid of compact chips */}
            <div className="grid grid-cols-2 gap-2">
              {capabilities.slice(0, 6).map((cap, i) => {
                const palette = [
                  { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", hover: "hover:border-purple-500/50" },
                  { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", hover: "hover:border-cyan-500/50" },
                  { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", hover: "hover:border-emerald-500/50" },
                  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", hover: "hover:border-amber-500/50" },
                  { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", hover: "hover:border-rose-500/50" },
                  { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", hover: "hover:border-indigo-500/50" },
                ];
                const c = palette[i % palette.length];
                return (
                  <div
                    key={cap}
                    className={`group flex items-center gap-2 p-2 rounded-xl bg-background/40 border ${c.border} ${c.hover} transition-all cursor-default`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md ${c.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <CheckCircle2 className={`w-2.5 h-2.5 ${c.text}`} />
                    </div>
                    <span className="text-[10px] text-foreground/75 group-hover:text-foreground transition-colors leading-tight">
                      {cap}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
/* ============================================================
   2. 4-YEAR JOURNEY — Flowing Path with Arrows
   ============================================================ */

const journeyStages = [
  {
    id: 0,
    grade: "Grade 9",
    season: "Fresh Start",
    action: "Discover Yourself",
    description: "Find your interests and build a Career DNA.",
    icon: User,
    hex: "text-purple-500",
    bg: "bg-purple-500/10",
    gradient: "from-purple-500 to-indigo-600",
    ring: "ring-purple-500/30",
    border: "border-purple-500/40",
    borderHover: "group-hover:border-purple-500",
    modalBorder: "border-purple-500/60",
    progress: 25,
    readiness: 30,
    youItems: [
      "Explore interests",
      "Try new subjects",
      "Join activities",
      "Start Career DNA",
    ],
    thisWeek: [
      "Take 1 curiosity quiz",
      "Explore 3 careers",
      "Read 1 profile story",
    ],
    noviLine:
      "I'll help you name what excites you — no pressure, just clarity.",
    goalLine: "A Career DNA that feels like you.",
    goalItems: ["Interests mapped", "Strengths spotted", "Direction forming"],
    miniStat: "8",
    miniStatLabel: "Interests logged",
  },
  {
    id: 1,
    grade: "Grade 10",
    season: "Exploration",
    action: "Explore & Experiment",
    description: "Try subjects, activities and possible paths.",
    icon: Compass,
    hex: "text-indigo-500",
    bg: "bg-indigo-500/10",
    gradient: "from-indigo-500 to-blue-600",
    ring: "ring-indigo-500/30",
    border: "border-indigo-500/40",
    borderHover: "group-hover:border-indigo-500",
    modalBorder: "border-indigo-500/60",
    progress: 50,
    readiness: 55,
    youItems: [
      "Try new subjects",
      "Join more clubs",
      "Start small projects",
      "Explore career paths",
    ],
    thisWeek: ["Ship mini project", "Talk to a senior", "Attend 1 workshop"],
    noviLine:
      "Every experiment tells us something. I'll connect the dots for you.",
    goalLine: "Two or three clear directions that actually fit.",
    goalItems: ["Options narrowed", "Interests deepened", "Skills expanding"],
    miniStat: "3",
    miniStatLabel: "Paths shortlisted",
  },
  {
    id: 2,
    grade: "Grade 11",
    season: "Momentum",
    action: "Build Your Profile",
    description: "Ship projects, achievements and experience.",
    icon: TrendingUp,
    hex: "text-emerald-500",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-500/30",
    border: "border-emerald-500/40",
    borderHover: "group-hover:border-emerald-500",
    modalBorder: "border-emerald-500/60",
    progress: 75,
    readiness: 78,
    youItems: [
      "Ship real projects",
      "Build your portfolio",
      "Take on challenges",
      "Grow your profile",
    ],
    thisWeek: ["Publish 1 project", "Join a hackathon", "Update portfolio"],
    noviLine:
      "This is where effort turns into evidence. Let's make it count.",
    goalLine: "A profile that stands out clearly.",
    goalItems: ["Portfolio ready", "Wins logged", "Mentor engaged"],
    miniStat: "12",
    miniStatLabel: "Wins this year",
  },
  {
    id: 3,
    grade: "Grade 12",
    season: "Launch",
    action: "Apply with Confidence",
    description: "Target universities and craft strong applications.",
    icon: GraduationCap,
    hex: "text-rose-500",
    bg: "bg-rose-500/10",
    gradient: "from-rose-500 to-pink-600",
    ring: "ring-rose-500/30",
    border: "border-rose-500/40",
    borderHover: "group-hover:border-rose-500",
    modalBorder: "border-rose-500/60",
    progress: 95,
    readiness: 95,
    youItems: [
      "Pick universities",
      "Write applications",
      "Prep for interviews",
      "Final stretch",
    ],
    thisWeek: ["Draft 1 essay", "Review 3 colleges", "Mock interview"],
    noviLine: "You've done the work. Now let's tell your story well.",
    goalLine: "The dream university, unlocked.",
    goalItems: ["Applications sent", "Interviews done", "Future on track"],
    miniStat: "6",
    miniStatLabel: "Universities applied",
  },
];

/* ---------- Animated connector between two nodes ---------- */
function FlowConnector({
  from,
  to,
  active,
}: {
  from: number;
  to: number;
  active: boolean;
}) {
  const fromStage = journeyStages[from];
  const toStage = journeyStages[to];

  return (
    <div className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-[40px] relative">
      {/* Gradient baseline */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-foreground/10" />

      {/* Active gradient fill */}
      {active && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className={`absolute inset-x-2 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-gradient-to-r ${fromStage.gradient} ${toStage.gradient}`}
        />
      )}

      {/* Animated chevrons flowing forward */}
      <motion.div
        className="relative flex items-center gap-1 z-10"
        animate={{ x: [0, 4, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: active ? [0.3, 1, 0.3] : [0.15, 0.35, 0.15],
              scale: active ? [1, 1.15, 1] : 1,
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          >
            <ChevronRight
              className={`w-3.5 h-3.5 ${
                active ? toStage.hex : "text-foreground/20"
              }`}
              strokeWidth={3}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function StudentsJourney() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stage = openIndex !== null ? journeyStages[openIndex] : null;

  useEffect(() => {
    if (openIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex(Math.min(journeyStages.length - 1, openIndex + 1));
      if (e.key === "ArrowLeft") setOpenIndex(Math.max(0, openIndex - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const goPrev = () =>
    setOpenIndex((i) => (i === null ? null : Math.max(0, i - 1)));
  const goNext = () =>
    setOpenIndex((i) =>
      i === null ? null : Math.min(journeyStages.length - 1, i + 1)
    );

  return (
    <section className="relative pt-8 pb-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ---------- Header ---------- */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="md:max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              The Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.05] tracking-tight">
              Your 4-Year{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                journey.
              </span>
            </h2>
          </div>
          <div className="md:max-w-sm md:text-right md:border-r-2 md:border-primary/20 md:pr-6 md:pb-2">
            <p className="text-foreground/60 text-base leading-relaxed">
              From discovering your interests to applying to your dream
              university, Novi is with you at every stage.
            </p>
          </div>
        </div>

        {/* ---------- Flowing Path ---------- */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between gap-2">
            {journeyStages.map((step, i) => {
              const StepIcon = step.icon;
              const isOpen = openIndex === i;

              return (
                <Fragment key={i}>
                  {/* ---------- NODE ---------- */}
                  <button
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Open ${step.grade} details`}
                    className="group flex flex-col items-center gap-2 focus:outline-none shrink-0"
                  >
                    <div className="relative">
                      {/* Pulse ring when open */}
                      {isOpen && (
                        <motion.span
                          className={`absolute inset-0 rounded-xl ${step.bg}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}

                      {/* Compact card body with per-stage border */}
                      <div
                        className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-500 border-2 ${
                          isOpen
                            ? `bg-gradient-to-br ${step.gradient} text-white shadow-xl ring-4 ${step.ring} scale-110 border-transparent`
                            : `bg-surface dark:bg-[#12112a] ${step.border} ${step.borderHover} ${step.hex} group-hover:scale-105 shadow-md`
                        }`}
                      >
                        <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />

                        {/* Progress pill */}
                        <span
                          className={`absolute -bottom-2 right-1/2 translate-x-1/2 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold transition-all whitespace-nowrap ${
                            isOpen
                              ? "bg-white/95 text-foreground shadow-md"
                              : "bg-background border border-foreground/15 text-foreground/70"
                          }`}
                        >
                          {step.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="text-center mt-2">
                      <p
                        className={`text-[11px] sm:text-xs font-bold transition-colors ${
                          isOpen
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground"
                        }`}
                      >
                        {step.grade}
                      </p>
                      <p
                        className={`hidden sm:block text-[9px] uppercase tracking-wider transition-colors ${
                          isOpen
                            ? step.hex
                            : "text-foreground/35 group-hover:text-foreground/60"
                        }`}
                      >
                        {step.season}
                      </p>
                    </div>
                  </button>

                  {/* ---------- CONNECTOR ---------- */}
                  {i < journeyStages.length - 1 && (
                    <FlowConnector
                      from={i}
                      to={i + 1}
                      active={openIndex !== null && openIndex > i}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* ---------- Hint ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-foreground/50 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Click a grade to explore that year&apos;s journey
        </motion.p>
      </div>

      {/* ============================================================
          POPUP MODAL — compact
          ============================================================ */}
      <AnimatePresence>
        {stage && openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/70 backdrop-blur-md overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${stage.grade} details`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl rounded-3xl border-2 ${stage.modalBorder} bg-surface dark:bg-[#12112a] shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden`}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${stage.gradient}`} />

              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-br ${stage.gradient}`}
              />

              <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background/70 hover:bg-primary hover:text-white text-foreground/70 border border-foreground/10 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="relative p-5 sm:p-6">
                {/* HEADER */}
                <div className="flex items-start gap-3 mb-4 pr-8">
                  <div className="relative shrink-0">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <stage.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-surface dark:bg-[#12112a] border border-primary/30 text-[9px] font-extrabold text-primary flex items-center justify-center shadow-md">
                      {openIndex + 1}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary/70">
                        {stage.grade}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-foreground/30" />
                      <span
                        className={`text-[9px] uppercase tracking-[0.2em] font-bold ${stage.hex}`}
                      >
                        {stage.season}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                      {stage.action}
                    </h3>
                    <p className="text-xs text-foreground/60 mt-0.5">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* NOVI QUOTE */}
                <div className="relative mb-4 rounded-xl bg-gradient-to-r from-primary/[0.08] to-accent/[0.05] border border-primary/15 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="relative shrink-0">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-primary/40 blur-md"
                    />
                    <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-xs shadow-md">
                      N
                    </div>
                  </div>
                  <p className="text-xs text-foreground/80 italic flex-1 leading-snug">
                    &ldquo;{stage.noviLine}&rdquo;
                  </p>
                </div>

                {/* MOVES + WINS */}
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-xl bg-background/60 border border-primary/15 p-3.5">
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                        Your moves
                      </h4>
                      <span className="text-[10px] font-bold text-foreground/50">
                        {stage.progress}%
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-2.5">
                      {stage.youItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.25 }}
                          className="flex items-center gap-2 text-xs text-foreground/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="truncate">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stage.progress}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl bg-background/60 border border-accent/15 p-3.5">
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                        Your wins
                      </h4>
                      <span className="text-[10px] font-bold text-foreground/50">
                        {stage.readiness}%
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-2.5">
                      {stage.goalItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.25 }}
                          className="flex items-center gap-2 text-xs text-foreground/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stage.readiness}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* THIS WEEK + STATS */}
                <div className="grid sm:grid-cols-[1fr_auto_auto] gap-3 mb-4">
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/15 p-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
                        This week
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.thisWeek.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-foreground/75 bg-background/50 rounded-md px-2 py-1 border border-foreground/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-accent/[0.06] border border-accent/15 px-4 py-3 flex flex-col items-center justify-center min-w-[100px]">
                    <p className="text-2xl font-black text-accent leading-none">
                      {stage.miniStat}
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-foreground/50 mt-1 text-center whitespace-nowrap">
                      {stage.miniStatLabel}
                    </p>
                  </div>

                  <div className="rounded-xl bg-primary/[0.06] border border-primary/15 px-4 py-3 flex flex-col items-center justify-center min-w-[100px]">
                    <p className="text-2xl font-black text-primary leading-none">
                      {stage.progress}%
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-foreground/50 mt-1 text-center whitespace-nowrap">
                      Complete
                    </p>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
                  <button
                    onClick={goPrev}
                    disabled={openIndex === 0}
                    className={`group flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      openIndex === 0
                        ? "text-foreground/20 cursor-not-allowed"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden sm:inline">
                      {openIndex === 0
                        ? ""
                        : journeyStages[openIndex - 1].grade}
                    </span>
                    <span className="sm:hidden">Prev</span>
                  </button>

                  <div className="flex gap-1.5">
                    {journeyStages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setOpenIndex(i)}
                        aria-label={`Go to stage ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === openIndex
                            ? "w-6 bg-primary shadow-[0_0_8px_rgba(108,92,231,0.5)]"
                            : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goNext}
                    disabled={openIndex === journeyStages.length - 1}
                    className={`group flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      openIndex === journeyStages.length - 1
                        ? "text-foreground/20 cursor-not-allowed"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    <span className="hidden sm:inline">
                      {openIndex === journeyStages.length - 1
                        ? ""
                        : journeyStages[openIndex + 1].grade}
                    </span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default function StudentLowerSections() {
  return (
    <>
      <StudentsAIMentor />
      <StudentsJourney />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}