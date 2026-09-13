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
  BookOpen,
  Target,
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

  return (
    <section className="relative pt-12 pb-16 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ==================== SAME GRID AS GROWTH PIPELINE ==================== */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ==================== LEFT — Header text (col-span-4) ==================== */}
          <div className="lg:col-span-4 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              AI Mentor
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]">
              Have questions?{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                Novi has context.
              </span>
            </h2>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Ask Novi anything — from career advice to university options. She
              remembers your journey and gives personalized answers.
            </p>

            {/* Quick facts */}
            <div className="space-y-2.5 pt-3">
              {[
                { label: "Remembers your journey", color: "#a855f7" },
                { label: "Answers in seconds", color: "#06b6d4" },
                { label: "Personalized, not generic", color: "#10b981" },
                { label: "Available 24/7", color: "#f59e0b" },
              ].map((line, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[12px] text-foreground/70"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${line.color}15` }}
                  >
                    <CheckCircle2
                      className="w-3 h-3"
                      style={{ color: line.color }}
                    />
                  </div>
                  {line.label}
                </div>
              ))}
            </div>
          </div>

          {/* ==================== RIGHT — Chat (col-span-8) ==================== */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Status bar */}
              <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-foreground/10">
                <div className="flex items-center gap-2.5">
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-md">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-foreground leading-tight">
                      Novi
                    </p>
                    <p className="text-[10px] text-emerald-500 font-semibold leading-tight">
                      Online · Remembers your journey
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-foreground/50 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Session active
                </span>
              </div>

              {/* Messages */}
              <div className="px-5 py-5 space-y-4 min-h-[240px]">
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-[10px] shadow-sm shrink-0 mt-0.5">
                    N
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-md border border-purple-400/40 bg-purple-500/[0.04] text-foreground/85 text-[12px] leading-relaxed max-w-md">
                    Hi Riya 👋 Ask me anything about careers, universities, or
                    your path forward.
                  </div>
                </motion.div>

                {/* Student question */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-md border border-cyan-400/50 bg-cyan-500/[0.04] text-foreground/85 text-[12px] leading-relaxed max-w-sm">
                    {selectedQA.question}
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-cyan-400/40 shrink-0 mt-0.5">
                    <Image
                      src="/riya-avatar.jpg"
                      alt="Riya"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Novi response */}
                <AnimatePresence mode="wait">
                  {typing ? (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-[10px] shadow-sm shrink-0 mt-0.5">
                        N
                      </div>
                      <div className="px-3.5 py-3 rounded-2xl rounded-tl-md border border-purple-400/40 bg-purple-500/[0.04] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.15s" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.3s" }}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={selectedQA.response}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-[10px] shadow-sm shrink-0 mt-0.5">
                        N
                      </div>
                      <div className="p-3 rounded-2xl rounded-tl-md border border-purple-400/40 bg-purple-500/[0.04] text-foreground/85 text-[12px] leading-relaxed max-w-md">
                        {selectedQA.response}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Suggested chips */}
              <div className="px-5 pb-3">
                <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-2">
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
                        className={`text-[10px] px-2.5 py-1.5 rounded-full border transition-all font-medium disabled:opacity-50 disabled:cursor-wait ${
                          isActive
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-background/40 border-foreground/10 text-foreground/65 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {item.question}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-foreground/10">
                <div className="flex items-center gap-2 rounded-xl bg-background/60 border border-foreground/10 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 px-3.5 py-2 transition-all">
                  <input
                    type="text"
                    placeholder="Ask Novi anything..."
                    className="flex-1 bg-transparent text-[12px] outline-none placeholder:text-foreground/40 text-foreground"
                  />
                  <button
                    aria-label="Send message"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold hover:opacity-90 transition-opacity shrink-0 shadow-sm shadow-primary/20"
                  >
                    Chat
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
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
  const [active, setActive] = useState<number | null>(null);

  const stages = [
    {
      num: "01",
      grade: "Grade 9",
      season: "Fresh Start",
      action: "Discover Yourself",
      desc: "Find your interests and build a Career DNA.",
      items: ["Interest Mapping", "Career DNA", "Curiosity Drills", "Strength Signals"],
      color: "#a855f7",
      icon: User,
      pct: 25,
    },
    {
      num: "02",
      grade: "Grade 10",
      season: "Exploration",
      action: "Explore & Experiment",
      desc: "Try subjects, activities and possible paths.",
      items: ["Subject Choices", "Club Discovery", "Mini Projects", "Skill Samplers"],
      color: "#06b6d4",
      icon: Compass,
      pct: 50,
    },
    {
      num: "03",
      grade: "Grade 11",
      season: "Momentum",
      action: "Build Your Profile",
      desc: "Ship projects, achievements and experience.",
      items: ["Real Projects", "Portfolio", "Achievements", "Mentor Sessions"],
      color: "#10b981",
      icon: TrendingUp,
      pct: 75,
    },
    {
      num: "04",
      grade: "Grade 12",
      season: "Launch",
      action: "Apply with Confidence",
      desc: "Target universities and craft strong applications.",
      items: ["University List", "Essays", "Interviews", "Final Submit"],
      color: "#ec4899",
      icon: GraduationCap,
      pct: 95,
    },
  ];

  const handleClick = (i: number) => {
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative pt-4 pb-6 px-6 lg:px-12 overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-8 order-2 lg:order-1 relative">
            <div className="relative flex items-start justify-between gap-1">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                const isActive = active === i;

                return (
                  <Fragment key={stage.grade}>
                    <div className="relative flex flex-col items-center">
                      <motion.button
                        type="button"
                        onClick={() => handleClick(i)}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                        aria-label={`Show ${stage.grade}`}
                        className="relative flex flex-col items-center gap-3 group focus:outline-none"
                      >
                        {/* Icon circle */}
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                            style={{ backgroundColor: stage.color }}
                            animate={{
                              opacity: isActive ? 0.55 : 0,
                              scale: isActive ? 1.5 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* <div
                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-background transition-all duration-300"
                            style={{
                              border: `2px solid ${
                                isActive
                                  ? stage.color
                                  : "rgba(255,255,255,0.12)"
                              }`,
                              boxShadow: isActive
                                ? `0 0 24px ${stage.color}80, inset 0 0 12px ${stage.color}30`
                                : "0 4px 12px rgba(0,0,0,0.3)",
                              transform: isActive ? "scale(1.12)" : undefined,
                            }}
                          > */}

                          <div
                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-background transition-all                          duration-300"
                            style={{
                              border: `2px solid ${isActive ? stage.color : `${stage.color}50`}`,
                              boxShadow: isActive
                                ? `0 0 24px ${stage.color}80, inset 0 0 12px ${stage.color}30`
                                : "0 2px 8px rgba(0,0,0,0.15)",
                              transform: isActive ? "scale(1.12)" : undefined,
                            }}
                          >
                            <Icon
                              className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                              style={{ color: stage.color }}
                            />

                            <span
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold whitespace-nowrap transition-all"
                              style={{
                                backgroundColor: isActive
                                  ? stage.color
                                  : "rgba(15,15,35,0.9)",
                                color: isActive ? "#fff" : stage.color,
                                border: `1px solid ${
                                  isActive ? stage.color : `${stage.color}60`
                                }`,
                              }}
                            >
                              {stage.pct}%
                            </span>
                          </div>
                        </div>

                        {/* Label */}
                        <div className="text-center px-0.5 mt-1">
                          {/* <p
                            className="text-[11px] sm:text-[12px] font-bold transition-colors duration-300 leading-tight"
                            style={{
                              color: isActive
                                ? stage.color
                                : "rgba(255,255,255,0.75)",
                            }}
                          > */}
                          <p
                            className="text-[11px] sm:text-[12px] font-bold transition-colors duration-300 leading-tight"
                            style={{
                              color: isActive ? stage.color : "text-foreground/75",
                            }}
                          >
                            {stage.grade}
                          </p>
                          <p
                            className="text-[9px] uppercase tracking-wider font-semibold mt-0.5 transition-colors duration-300"
                            style={{
                              color: isActive
                                ? stage.color
                                : "rgba(255,255,255,0.35)",
                            }}
                          >
                            {stage.season}
                          </p>
                        </div>
                      </motion.button>

                      {/* POPUP */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.96 }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 28,
                            }}
                            className={`absolute bottom-full mb-5 z-50 pointer-events-none w-[260px] sm:w-[300px] ${
                              i > 1
                                ? "right-0"
                                : "left-1/2 -translate-x-1/2"
                            }`}
                          >
                            <div
                              className="relative rounded-2xl border bg-surface dark:bg-[#12112a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden pointer-events-auto"
                              style={{ borderColor: `${stage.color}60` }}
                            >
                              <div
                                className={`absolute -bottom-1.5 w-3 h-3 rotate-45 bg-surface dark:bg-[#12112a] ${
                                  i > 1
                                    ? "right-6"
                                    : "left-1/2 -translate-x-1/2"
                                }`}
                                style={{
                                  borderBottom: `1px solid ${stage.color}60`,
                                  borderRight: `1px solid ${stage.color}60`,
                                }}
                              />

                              <div
                                className="absolute inset-x-8 top-0 h-px"
                                style={{
                                  background: `linear-gradient(to right, transparent, ${stage.color}, transparent)`,
                                }}
                              />

                              <div className="relative p-4">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                    style={{
                                      backgroundColor: `${stage.color}15`,
                                      border: `1.5px solid ${stage.color}50`,
                                    }}
                                  >
                                    <Icon
                                      className="w-4 h-4"
                                      style={{ color: stage.color }}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p
                                      className="text-[11px] font-bold uppercase tracking-widest leading-tight"
                                      style={{ color: stage.color }}
                                    >
                                      {stage.grade}
                                    </p>
                                    <p className="text-[10px] text-foreground/50 leading-tight">
                                      {stage.action}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-[11px] text-foreground/75 leading-relaxed mb-3">
                                  {stage.desc}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {stage.items.map((item) => (
                                    <span
                                      key={item}
                                      className="text-[9px] px-2 py-0.5 rounded-full border font-medium"
                                      style={{
                                        backgroundColor: `${stage.color}10`,
                                        borderColor: `${stage.color}35`,
                                        color: stage.color,
                                      }}
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>

                                <div className="h-1 bg-foreground/10 rounded-full overflow-hidden mb-3">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stage.pct}%` }}
                                    transition={{
                                      duration: 0.9,
                                      ease: "easeOut",
                                    }}
                                    className="h-full rounded-full"
                                    style={{
                                      background: `linear-gradient(to right, ${stage.color}, ${stage.color}80)`,
                                    }}
                                  />
                                </div>

                                <div className="pt-2.5 border-t border-foreground/10 flex items-center justify-between">
                                  <span className="text-[9px] uppercase tracking-widest text-foreground/35 font-semibold">
                                    Tap again to close
                                  </span>
                                  <X className="w-3 h-3 text-foreground/30" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow connector */}
                    {i < stages.length - 1 && (
                      <div className="flex-1 flex items-center justify-center pt-10 min-w-[40px] relative">
                        <div className="relative flex items-center">
                          <div
                            className="h-[2px] w-12 sm:w-16 rounded-full"
                            style={{
                              background: `linear-gradient(to right, ${stage.color}80, ${
                                stages[i + 1].color
                              }80)`,
                            }}
                          />
                          <motion.div
                            animate={{
                              x: [0, 3, 0],
                              scale: isActive ? 1.15 : 1,
                            }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute -right-1 flex items-center justify-center w-5 h-5 rounded-full"
                            style={{
                              backgroundColor: stages[i + 1].color,
                              boxShadow: `0 0 12px ${stages[i + 1].color}70`,
                            }}
                          >
                            <ArrowRight
                              className="w-3 h-3 text-white"
                              strokeWidth={3}
                            />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>

            {/* Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-5 flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
              <span className="text-[11px] text-foreground/45 font-medium">
                {active === null
                  ? "Click a grade to explore that year's journey"
                  : "Click the same grade again to close"}
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Subtitle text (4 cols) */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <p className="text-sm text-foreground/60 leading-relaxed border-l-2 border-primary/30 pl-4">
              From discovering your interests to applying to your dream
              university, Novi is with you at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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