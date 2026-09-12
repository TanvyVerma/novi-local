"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Target,
  Box,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  X,
  TrendingUp,
  CheckCircle2,
  Heart,
  BookOpen,
  Activity,
  Trophy,
  Lightbulb,
  ChevronRight,
  MessageSquare,
  Bell,
} from "lucide-react";

/* ============================================================
   1. THE STUDENT CHALLENGE
   ============================================================ */

const possibilities = [
  {
    icon: Compass,
    grade: "01",
    label: "Discover",
    title: "Discover",
    short: "Find careers and possibilities you didn't know existed.",
    desc: "Explore the world of careers, industries, and paths — and see what actually fits you.",
    items: ["Interest Mapping", "Career DNA", "Curiosity Explorer", "Strength Signals"],
    color: "text-emerald-500",
    inactiveBorder: "border-emerald-500/30",
    activeBorder: "border-emerald-500/70",
    glow: "rgba(34, 197, 94, 0.3)",
  },
  {
    icon: Target,
    grade: "02",
    label: "Plan",
    title: "Plan",
    short: "Understand which subjects and skills move you toward your goals.",
    desc: "Turn your interests into a clear, achievable roadmap with milestones and weekly focus.",
    items: ["Subject Choices", "Skill Roadmap", "Milestones", "Weekly Focus"],
    color: "text-purple-500",
    inactiveBorder: "border-purple-500/30",
    activeBorder: "border-purple-500/70",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  {
    icon: Box,
    grade: "03",
    label: "Build",
    title: "Build",
    short: "Turn your interests into projects and experiences that matter.",
    desc: "Ship real projects, collect achievements, and grow a profile that stands out.",
    items: ["Projects", "Achievements", "Real Experience", "Profile Strength"],
    color: "text-blue-500",
    inactiveBorder: "border-blue-500/30",
    activeBorder: "border-blue-500/70",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Globe,
    grade: "04",
    label: "Explore",
    title: "Explore",
    short: "Discover universities, courses and opportunities worldwide.",
    desc: "Explore programs, campuses, and possibilities that fit your ambition and profile.",
    items: ["University Explorer", "Course Match", "Global Options", "Fit Score"],
    color: "text-amber-500",
    inactiveBorder: "border-amber-500/30",
    activeBorder: "border-amber-500/70",
    glow: "rgba(245, 158, 11, 0.3)",
  },
];

function StudentsChallengeGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-12 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              The Student Challenge
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              You don&apos;t need
              <br /> all the answers.
            </h2>
            <p className="text-foreground/50 mb-8">
              As a student, you&apos;re wondering...
            </p>
            <ul className="space-y-4">
              {[
                "Not sure what career you want?",
                "Don't know which subjects to choose?",
                "Wondering which university is right for you?",
                "Don't know how to build a strong profile?",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-lg text-foreground/70"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-primary font-semibold text-lg">
              That&apos;s exactly why Novi exists. ✨
            </p>
          </div>

          {/* RIGHT — 4 expandable tabs */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-4xl font-bold text-foreground">
                Explore your possibilities.
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50">
                4 pillars <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
              {possibilities.map((section, index) => {
                const isActive = active === index;
                const Icon = section.icon;

                return (
                  <motion.button
                    key={section.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-500 flex flex-col w-full md:w-auto
                      ${
                        isActive
                          ? `md:flex-[1.5] bg-background/90 ${section.activeBorder} shadow-2xl`
                          : `md:flex-1 bg-background/40 ${section.inactiveBorder} opacity-80 hover:opacity-100`
                      }`}
                  >
                    {isActive && (
                      <div
                        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: section.glow }}
                      />
                    )}

                    <div className="flex items-center gap-4 p-5 pb-0 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-br ${section.color} text-white`
                            : `bg-background border border-foreground/10 ${section.color}`
                        }`}
                      >
                        {section.grade}
                      </div>
                      <div className="min-w-0">
                        <span
                          className={`text-[10px] uppercase tracking-[0.16em] font-bold ${
                            isActive ? "text-foreground/50" : "text-foreground/30"
                          }`}
                        >
                          {section.label}
                        </span>
                        <h3
                          className={`text-xl font-bold truncate ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/80 group-hover:text-foreground"
                          } transition-colors`}
                        >
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 relative z-10">
                      <p
                        className={`text-sm leading-relaxed ${
                          isActive ? "text-foreground/70" : "text-foreground/45"
                        }`}
                      >
                        {section.short}
                      </p>

                      <div
                        className={`mt-4 grid grid-cols-2 gap-2 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-medium text-foreground/60"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 ${section.color}`}
                            />
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
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                              {section.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div
                        className={`mt-5 text-xs font-semibold flex items-center gap-1 transition-all duration-300 ${
                          isActive
                            ? section.color
                            : "text-foreground/30 group-hover:text-foreground"
                        }`}
                      >
                        {isActive ? (
                          <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-1"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${section.color} animate-pulse`}
                            />
                            Viewing this stage
                          </motion.span>
                        ) : (
                          "View stage"
                        )}
                        <motion.span animate={{ x: isActive ? 3 : 0 }}>
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. CAREER EXPLORER
   ============================================================ */

interface CareerItem {
  id: string;
  title: string;
  match: number;
  level: string;
  tags: string[];
  initial: string;
  color: string;
  bar: string;
}

const careersData: CareerItem[] = [
  { id: "pm", title: "Product Manager", match: 91, level: "Top Match", tags: ["Strategy", "Leadership", "Problem Solving"], initial: "P", color: "from-purple-500 to-indigo-600", bar: "from-purple-600 to-indigo-500" },
  { id: "ux", title: "UX Designer", match: 87, level: "Strong fit", tags: ["Creativity", "Design", "Problem Solving"], initial: "U", color: "from-pink-500 to-rose-600", bar: "from-pink-500 to-rose-500" },
  { id: "ent", title: "Entrepreneur", match: 85, level: "Strong fit", tags: ["Leadership", "Business"], initial: "E", color: "from-amber-500 to-orange-600", bar: "from-amber-500 to-orange-500" },
  { id: "ds", title: "Data Scientist", match: 82, level: "Great fit", tags: ["Analytics", "Building", "Technical"], initial: "D", color: "from-cyan-500 to-blue-600", bar: "from-cyan-500 to-blue-500" },
  { id: "med", title: "Biomedical Researcher", match: 79, level: "Great fit", tags: ["Medicine", "Research", "Science"], initial: "B", color: "from-emerald-500 to-teal-600", bar: "from-emerald-500 to-teal-500" },
];

const popularSearches = ["Product Manager", "UX Designer", "Medicine", "Engineering", "Psychology"];

function StudentsCareerExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const filteredCareers = careersData.filter((c) => {
    const term = (searchTerm || activeChip || "").toLowerCase();
    if (!term) return true;
    return c.title.toLowerCase().includes(term) || c.tags.some((t) => t.toLowerCase().includes(term));
  });

  const handleChipClick = (chip: string) => {
    if (activeChip === chip) { setActiveChip(null); setSearchTerm(""); }
    else { setActiveChip(chip); setSearchTerm(chip); }
  };

  const clearSearch = () => { setSearchTerm(""); setActiveChip(null); };

  return (
    <section className="pt-8 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="lg:col-span-4 space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Career Explorer
            </span>

            <h2 className="text-4xl font-bold text-foreground leading-tight">
              What could you
              <br />
              <span className="text-primary">become?</span>
            </h2>

            <p className="text-base text-foreground/60 leading-relaxed">
              Explore careers that match your interests, strengths and future goals. Find the ones that truly fit you.
            </p>

            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setActiveChip(null); }}
                placeholder="Search careers..."
                className="w-full px-4 py-3.5 pl-11 pr-10 rounded-2xl bg-background/60 border border-foreground/15 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm text-foreground placeholder:text-foreground/40 shadow-sm transition-all"
              />
              <Search className="w-4 h-4 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-foreground/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleChipClick(item)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                      activeChip === item
                        ? "bg-primary text-white border-primary"
                        : "bg-background/60 border-foreground/10 text-foreground/75 hover:border-primary/30"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Tip: matches update as your profile grows. Complete your Career DNA quiz to unlock sharper suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Your Top Matches
              </div>
              <span className="text-xs text-foreground/50 font-medium">
                {filteredCareers.length} matches
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredCareers.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 rounded-3xl bg-background/50 border border-dashed border-foreground/20 text-center space-y-3"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">
                    No careers match &ldquo;{searchTerm}&rdquo;
                  </h4>
                  <button
                    onClick={clearSearch}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    Clear search
                  </button>
                </motion.div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCareers.map((career) => (
                    <motion.div
                      layout
                      key={career.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative p-5 rounded-3xl bg-background/60 border border-foreground/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                    >
                      {career.level === "Top Match" && (
                        <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[9px] font-bold uppercase tracking-wide shadow-md">
                          <Sparkles className="w-2.5 h-2.5" />
                          {career.level}
                        </span>
                      )}

                      <div className="space-y-3 pt-1">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${career.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0`}>
                            {career.initial}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm text-foreground leading-tight truncate">
                              {career.title}
                            </h4>
                            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                              {career.match}% Match
                            </span>
                          </div>
                        </div>

                        <div className="h-1.5 w-full bg-foreground/[0.08] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${career.match}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`h-full bg-gradient-to-r ${career.bar} rounded-full`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {career.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] border border-foreground/5 text-foreground/70 font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/50 group-hover:text-primary transition-colors">
                          View
                          <span className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:border-transparent">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. DASHBOARD PREVIEW
   ============================================================ */

function StudentsDashboardPreview() {
  const steps = [
    {
      num: "01",
      label: "Career DNA & profile strength",
      sub: "Know where you stand",
      icon: Sparkles,
      color: "#a855f7",
    },
    {
      num: "02",
      label: "Goals & roadmap",
      sub: "Always know the next step",
      icon: Target,
      color: "#06b6d4",
    },
    {
      num: "03",
      label: "Upcoming activities",
      sub: "Never miss a milestone",
      icon: Activity,
      color: "#10b981",
    },
    {
      num: "04",
      label: "AI chat with Novi",
      sub: "Personalized answers, anytime",
      icon: MessageSquare,
      color: "#f59e0b",
    },
    {
      num: "05",
      label: "Notifications & more",
      sub: "Progress without pressure",
      icon: Bell,
      color: "#f43f5e",
    },
  ];

  return (
    <section className="relative pt-8 pb-12 px-6 lg:px-12 overflow-hidden">
      {/* ambient glow behind mockup */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ==================== LEFT — Numbered Step List ==================== */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Product Tour
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
                Get clear next steps,{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                  stay on top.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                Get clear next steps, track your progress, and stay on top of
                your goals — all in one place.
              </p>
            </div>

            <div className="relative">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="relative flex gap-4 group"
                  >
                    <div className="relative flex flex-col items-center shrink-0">
                      <div
                        className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-[11px] border-2 transition-all duration-300 bg-background"
                        style={{
                          borderColor: `${step.color}80`,
                          color: step.color,
                          boxShadow: `0 0 12px ${step.color}25`,
                        }}
                      >
                        {step.num}
                        <div
                          className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                          style={{ backgroundColor: `${step.color}60` }}
                        />
                      </div>

                      {!isLast && (
                        <div
                          className="w-[2px] flex-1 my-1 rounded-full"
                          style={{
                            background: `linear-gradient(to bottom, ${
                              step.color
                            }80, ${steps[i + 1].color}80)`,
                            opacity: 0.4,
                          }}
                        />
                      )}
                    </div>

                    <div
                      className="flex-1 mb-3 p-4 rounded-2xl bg-background/50 border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                      style={{ borderColor: `${step.color}30` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: step.color }}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-foreground leading-tight truncate">
                            {step.label}
                          </p>
                          <p className="text-xs text-foreground/55 mt-0.5">
                            {step.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-foreground/10">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
              >
                See the full dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* ==================== RIGHT — Enhanced Mockup ==================== */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Outer colored glow halo */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-cyan-500/20 rounded-[40px] blur-2xl pointer-events-none" />

              {/* Main mockup container with gradient border */}
              <div
                className="relative rounded-3xl overflow-hidden p-[1px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.3), rgba(6,182,212,0.5))",
                }}
              >
                <div className="relative rounded-3xl bg-[#0b0a1a] overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-foreground/10 bg-foreground/[0.03]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 flex items-center justify-center max-w-[280px] mx-auto rounded-lg bg-foreground/[0.05] border border-foreground/10 px-3 py-1.5">
                      <span className="text-[10px] text-foreground/60 font-medium truncate">
                        app.novi.ai/dashboard
                      </span>
                    </div>
                    {/* LIVE badge */}
                    <span className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
                        Live
                      </span>
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Greeting */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-extrabold text-base text-foreground mb-0.5">
                          Good morning, Riya! 👋
                        </h4>
                        <p className="text-xs text-foreground/60">
                          Here&apos;s what&apos;s next for your journey.
                        </p>
                      </div>
                      {/* Small Nova Mascot badge */}
                      <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/25">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[9px] font-bold text-white">
                          N
                        </div>
                        <span className="text-[10px] font-bold text-foreground/70">
                          Day 47
                        </span>
                      </div>
                    </div>

                    {/* Two main cards with numbered badges */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      {/* Card 01 — Mission (purple) */}
                      <div
                        className="relative p-4 rounded-2xl bg-background/40 border transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          borderColor: "rgba(168, 85, 247, 0.35)",
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.08)",
                        }}
                      >
                        {/* Numbered badge */}
                        <span
                          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                          style={{
                            borderColor: "rgba(168, 85, 247, 0.8)",
                            color: "#a855f7",
                          }}
                        >
                          01
                        </span>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: "rgba(168, 85, 247, 0.15)" }}
                            >
                              <Sparkles className="w-3 h-3" style={{ color: "#a855f7" }} />
                            </div>
                            <span className="text-[11px] font-bold text-foreground/85">
                              Today&apos;s Mission
                            </span>
                          </div>
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "rgba(168, 85, 247, 0.15)",
                              color: "#a855f7",
                            }}
                          >
                            3/4
                          </span>
                        </div>

                        <div className="space-y-1.5 text-[11px] text-foreground/75 font-medium">
                          {[
                            { label: "Complete Career Quiz", done: true },
                            { label: "Explore 3 Universities", done: true },
                            { label: "Add Your Coding Project", done: false },
                            { label: "Finish Your Weekly Goal", done: true },
                          ].map((task) => (
                            <div
                              key={task.label}
                              className="flex items-center gap-1.5"
                            >
                              {task.done ? (
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              ) : (
                                <div className="w-3 h-3 rounded border-2 border-dashed border-primary/60" />
                              )}
                              <span className={task.done ? "" : "opacity-55"}>
                                {task.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden mt-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Card 02 — Profile (cyan) */}
                      <div
                        className="relative p-4 rounded-2xl bg-background/40 border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          borderColor: "rgba(6, 182, 212, 0.35)",
                          boxShadow: "0 0 20px rgba(6, 182, 212, 0.08)",
                        }}
                      >
                        {/* Numbered badge */}
                        <span
                          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                          style={{
                            borderColor: "rgba(6, 182, 212, 0.8)",
                            color: "#06b6d4",
                          }}
                        >
                          02
                        </span>

                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: "rgba(6, 182, 212, 0.15)" }}
                          >
                            <Target className="w-3 h-3" style={{ color: "#06b6d4" }} />
                          </div>
                          <span className="text-[10px] font-bold text-foreground/75 uppercase">
                            Your Profile
                          </span>
                        </div>

                        <div className="relative w-[70px] h-[70px]">
                          <svg
                            className="w-full h-full -rotate-90"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="8"
                              className="text-foreground/10"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="url(#dashGrad)"
                              strokeWidth="8"
                              strokeLinecap="round"
                              initial={{ strokeDashoffset: 251.2 }}
                              whileInView={{
                                strokeDashoffset: 251.2 * (1 - 0.78),
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              strokeDasharray="251.2"
                            />
                            <defs>
                              <linearGradient
                                id="dashGrad"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-base font-extrabold text-foreground">
                              78%
                            </span>
                            <span className="text-[7px] text-emerald-500 font-bold">
                              +5% wk
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-1 mt-2">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-400 font-bold">
                            #Analytical
                          </span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                            #Leader
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 03 — Next Up (amber) */}
                    <div
                      className="relative p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "rgba(245, 158, 11, 0.08)",
                        borderColor: "rgba(245, 158, 11, 0.35)",
                      }}
                    >
                      {/* Numbered badge */}
                      <span
                        className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                        style={{
                          borderColor: "rgba(245, 158, 11, 0.8)",
                          color: "#f59e0b",
                        }}
                      >
                        03
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center"
                            style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                          >
                            <Activity className="w-2.5 h-2.5" style={{ color: "#f59e0b" }} />
                          </div>
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider"
                            style={{ color: "#f59e0b" }}
                          >
                            Next Up
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-foreground truncate">
                          University Match: Find programs that fit your goals
                        </p>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-xl text-white font-bold text-[11px] hover:opacity-90 transition-opacity flex-shrink-0 shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, #f59e0b, #f43f5e)",
                          boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "Powered by Novi AI" badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#12112a] border border-primary/30 shadow-xl backdrop-blur-sm"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-foreground/80">
                  Powered by Novi AI
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. GROWTH PIPELINE — Single-Line Timeline
   ============================================================ */

function StudentsGrowthPipeline() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      label: "Interests",
      sub: "What excites you",
      icon: Heart,
      color: "#a855f7",
    },
    {
      label: "Strengths",
      sub: "What you're good at",
      icon: Sparkles,
      color: "#f43f5e",
    },
    {
      label: "Academics",
      sub: "How you perform",
      icon: BookOpen,
      color: "#10b981",
    },
    {
      label: "Activities",
      sub: "What you do",
      icon: Activity,
      color: "#06b6d4",
    },
    {
      label: "Achievements",
      sub: "What you've won",
      icon: Trophy,
      color: "#f59e0b",
    },
    {
      label: "Goals",
      sub: "What you aim for",
      icon: Target,
      color: "#6366f1",
    },
    {
      label: "Experiences",
      sub: "What you've lived",
      icon: Compass,
      color: "#14b8a6",
    },
    {
      label: "Personalized",
      sub: "Your unique plan",
      icon: Sparkles,
      color: "#8b5cf6",
      isFinal: true,
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* ==================== HEADER ==================== */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Your Growth Engine
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
              Novi understands you better{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                over time.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-xl">
              Your interests, strengths, experiences and goals come together
              to create a profile that grows with you — and gets smarter over
              time.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-2.5 lg:pb-2">
            {[
              "You build a Career DNA",
              "Novi spots patterns",
              "Skills compound over time",
              "Becomes a personalized plan",
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-foreground/70"
              >
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                </div>
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== TIMELINE ==================== */}
        <div className="relative pt-8 pb-4">
          {/* Animated gradient line only — no background guide */}
          <div className="absolute top-[46px] left-[3%] right-[3%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)]"
            />
          </div>

          {/* Nodes row */}
          <div className="relative flex items-start justify-between gap-2">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isActive = activeNode === node.label;

              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 flex-1 min-w-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveNode(isActive ? null : node.label)
                    }
                    aria-label={`Select ${node.label}`}
                    className="relative flex flex-col items-center cursor-pointer focus:outline-none group"
                  >
                    <div className="relative">
                      {/* Halo on active */}
                      <motion.div
                        className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                        style={{ backgroundColor: node.color }}
                        animate={{
                          opacity: isActive ? 0.6 : 0,
                          scale: isActive ? 1.6 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-background transition-all duration-300"
                        style={{
                          border: `2px solid ${
                            isActive
                              ? node.color
                              : "rgba(255,255,255,0.15)"
                          }`,
                          boxShadow: isActive
                            ? `0 0 20px ${node.color}80, inset 0 0 10px ${node.color}30`
                            : "0 4px 12px rgba(0,0,0,0.3)",
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                          style={{ color: node.color }}
                        />
                      </div>

                      {/* Final badge */}
                      {node.isFinal && (
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-background flex items-center justify-center shadow-md">
                          <Sparkles
                            className="w-2.5 h-2.5 text-white"
                            strokeWidth={2.5}
                          />
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Labels */}
                  <div className="text-center px-1">
                    <p
                      className={`text-[11px] sm:text-xs font-bold transition-colors ${
                        node.isFinal
                          ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                          : ""
                      }`}
                      style={
                        !node.isFinal
                          ? {
                              color: isActive
                                ? node.color
                                : "rgba(255,255,255,0.75)",
                            }
                          : undefined
                      }
                    >
                      {node.label}
                    </p>
                    <p className="hidden sm:block text-[10px] text-foreground/40 mt-0.5 whitespace-nowrap">
                      {node.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default function StudentMiddleSections() {
  return (
    <>
      <StudentsChallengeGrid />
      <StudentsCareerExplorer />
      <StudentsDashboardPreview />
      <StudentsGrowthPipeline />
    </>
  );
}