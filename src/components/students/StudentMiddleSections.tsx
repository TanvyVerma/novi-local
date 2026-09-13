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

function StudentsChallengeGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);

  const transformations = [
    {
      index: "01",
      doubt: "Not sure what career you want?",
      pillar: "Discover",
      desc: "Explore careers, industries and paths — see what actually fits.",
      chips: ["Interest Mapping", "Career DNA"],
      color: "#a855f7",
    },
    {
      index: "02",
      doubt: "Don't know which subjects to choose?",
      pillar: "Plan",
      desc: "Turn interests into a clear roadmap with milestones.",
      chips: ["Subject Choices", "Skill Roadmap"],
      color: "#06b6d4",
    },
    {
      index: "03",
      doubt: "Wondering which university is right for you?",
      pillar: "Build",
      desc: "Ship real projects, grow a profile that stands out.",
      chips: ["Projects", "Achievements"],
      color: "#f59e0b",
    },
    {
      index: "04",
      doubt: "Don't know how to build a strong profile?",
      pillar: "Explore",
      desc: "Discover programs and campuses that fit your ambition.",
      chips: ["University Explorer", "Fit Score"],
      color: "#ec4899",
    },
  ];

  return (
    <section className="relative py-4 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            The Student Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            You don&apos;t need all the answers —{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              just the right questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60">
            Four doubts every student faces. Four pillars that resolve them.
          </p>
        </div>

        <div className="space-y-3">
          {transformations.map((item, i) => {
            const isHovered = hovered === i;
            const isClicked = clicked === i;
            const isActive = isHovered || isClicked;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setClicked(isClicked ? null : i)}
                className="grid md:grid-cols-12 items-center gap-3 group cursor-pointer"
              >
                {/* LEFT — Doubt */}
                <div
                  className="md:col-span-5 relative rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300 bg-background/40 dark:bg-transparent"
                  style={{
                    borderColor: isActive ? item.color : `${item.color}40`,
                  }}
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <span
                      className="text-base font-black leading-none tracking-tight shrink-0 transition-colors duration-300"
                      style={{
                        color: isActive ? item.color : `${item.color}cc`,
                      }}
                    >
                      {item.index}
                    </span>

                    <div
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? `${item.color}25` : `${item.color}15`,
                        color: isActive ? item.color : `${item.color}cc`,
                        border: `1px solid ${
                          isActive ? `${item.color}70` : `${item.color}40`
                        }`,
                      }}
                    >
                      ?
                    </div>

                    <p
                      className={`text-[13px] leading-tight font-medium transition-colors duration-300 truncate ${
                        isActive ? "text-foreground/95" : "text-foreground/70"
                      }`}
                    >
                      {item.doubt}
                    </p>
                  </div>
                </div>

                {/* MIDDLE — Connector */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center relative">
                  <motion.div
                    className="h-[2px] w-full rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${item.color}80, transparent)`,
                    }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.25 }}
                  />

                  <motion.div
                    className="absolute right-0 flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300"
                    style={{
                      border: `1.5px solid ${
                        isActive ? item.color : `${item.color}60`
                      }`,
                      backgroundColor: isActive ? `${item.color}15` : "transparent",
                    }}
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      boxShadow: isActive ? `0 0 10px ${item.color}50` : "none",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronRight
                      className="w-3 h-3 transition-colors duration-300"
                      style={{
                        color: isActive ? item.color : `${item.color}cc`,
                      }}
                      strokeWidth={2.75}
                    />
                  </motion.div>
                </div>

                {/* RIGHT — Answer */}
                <div
                  className="md:col-span-6 relative rounded-xl border overflow-hidden transition-all duration-300 bg-background/40 dark:bg-[rgba(255,255,255,0.02)]"
                  style={{
                    borderColor: isActive ? item.color : `${item.color}40`,
                    boxShadow: isActive ? `0 0 24px ${item.color}30` : "none",
                  }}
                >
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <h3
                      className="text-sm font-black tracking-tight shrink-0 transition-colors duration-300"
                      style={{ color: isActive ? item.color : `${item.color}dd` }}
                    >
                      {item.pillar}
                    </h3>

                    <div
                      className="h-[1.5px] w-6 rounded-full shrink-0 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, ${item.color}80, transparent)`,
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />

                    <p className="text-[11px] text-foreground/60 leading-tight truncate flex-1 transition-colors duration-300">
                      {item.desc}
                    </p>

                    <div className="flex gap-1 shrink-0">
                      {item.chips.slice(0, 2).map((chip) => (
                        <span
                          key={chip}
                          className="text-[9px] px-1.5 py-0.5 rounded-full border font-semibold transition-all duration-300 whitespace-nowrap bg-background/50 dark:bg-transparent"
                          style={{
                            borderColor: isActive
                              ? `${item.color}50`
                              : `${item.color}40`,
                            color: isActive ? item.color : `${item.color}cc`,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex items-center justify-start gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm font-bold text-gradient italic">
            That&apos;s exactly why Novi exists.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   2. CAREER EXPLORER
   ============================================================ */

function StudentsCareerExplorer() {
  const careersData = [
    { num: "01", id: "pm", title: "Product Manager", match: 91, level: "Top Match", tags: ["Strategy", "Leadership", "Problem Solving"], initial: "P", color: "#a855f7", bar: "from-purple-500 to-pink-500" },
    { num: "02", id: "ux", title: "UX Designer", match: 87, level: "Strong fit", tags: ["Creativity", "Design", "Problem Solving"], initial: "U", color: "#ec4899", bar: "from-pink-500 to-rose-500" },
    { num: "03", id: "ent", title: "Entrepreneur", match: 85, level: "Strong fit", tags: ["Leadership", "Business"], initial: "E", color: "#f59e0b", bar: "from-amber-500 to-orange-500" },
    { num: "04", id: "ds", title: "Data Scientist", match: 82, level: "Great fit", tags: ["Analytics", "Building", "Technical"], initial: "D", color: "#06b6d4", bar: "from-cyan-500 to-blue-500" },
    { num: "05", id: "med", title: "Biomedical Researcher", match: 79, level: "Great fit", tags: ["Medicine", "Research", "Science"], initial: "B", color: "#10b981", bar: "from-emerald-500 to-teal-500" },
  ];

  const featured = careersData[0];
  const rest = careersData.slice(1);

  return (
    <section className="relative pt-12 pb-8 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Career Explorer
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
                What could you{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                  become?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                Explore careers that match your interests, strengths and future
                goals. Find the ones that truly fit you.
              </p>
            </div>

            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative p-5 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "500+", label: "Careers", color: "#a855f7" },
                    { value: "98%", label: "Match accuracy", color: "#06b6d4" },
                    { value: "10k+", label: "Students", color: "#f59e0b" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border p-3 text-center bg-background/50 dark:bg-transparent"
                      style={{ borderColor: `${stat.color}40` }}
                    >
                      <p className="text-lg font-extrabold leading-none" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-foreground/50 mt-1.5 font-semibold leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-foreground/10 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-foreground/80 mb-0.5">
                      Matches grow with you
                    </p>
                    <p className="text-[11px] text-foreground/55 leading-relaxed">
                      Complete your{" "}
                      <span className="text-primary font-semibold">Career DNA quiz</span>{" "}
                      to unlock sharper suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Top Matches</span>
              </div>
              <span className="text-xs text-foreground/50 font-medium">5 matches</span>
            </div>

            <div className="space-y-3">
              {/* Featured card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="group relative p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
                style={{ border: `1px solid ${featured.color}40` }}
              >
                <span
                  className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background text-[10px] font-extrabold flex items-center justify-center z-10"
                  style={{ border: `1px solid ${featured.color}60`, color: featured.color }}
                >
                  {featured.num}
                </span>

                <span
                  className="absolute -top-2 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-background"
                  style={{ border: `1px solid ${featured.color}50`, color: featured.color }}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  {featured.level}
                </span>

                <div className="flex items-center gap-3 pt-1">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ border: `1px solid ${featured.color}50`, color: featured.color }}
                  >
                    {featured.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sm text-foreground leading-tight truncate">
                        {featured.title}
                      </h4>
                      <span className="text-[11px] font-extrabold shrink-0" style={{ color: featured.color }}>
                        {featured.match}%
                      </span>
                    </div>

                    <div className="h-1 w-full bg-foreground/[0.08] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${featured.match}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className={`h-full bg-gradient-to-r ${featured.bar} rounded-full opacity-70`}
                      />
                    </div>

                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {featured.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-1.5 py-0.5 rounded border font-medium"
                          style={{ borderColor: `${featured.color}40`, color: featured.color }}
                        >
                          #{tag}
                        </span>
                      ))}
                      {featured.tags.length > 2 && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/[0.04] border border-foreground/10 text-foreground/50 font-medium">
                          +{featured.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="hidden sm:flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-all group-hover:scale-105 shrink-0"
                    style={{ color: featured.color, border: `1px solid ${featured.color}40` }}
                  >
                    View
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>

              {/* 2x2 grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {rest.map((career, i) => (
                  <motion.div
                    key={career.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group relative p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
                    style={{ border: `1px solid ${career.color}40` }}
                  >
                    <span
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background text-[9px] font-extrabold flex items-center justify-center z-10"
                      style={{ border: `1px solid ${career.color}60`, color: career.color }}
                    >
                      {career.num}
                    </span>

                    <div className="flex items-center gap-2.5 pt-1 mb-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ border: `1px solid ${career.color}50`, color: career.color }}
                      >
                        {career.initial}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-xs text-foreground leading-tight truncate">
                          {career.title}
                        </h4>
                        <span className="text-[10px] font-extrabold" style={{ color: career.color }}>
                          {career.match}% Match
                        </span>
                      </div>

                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                        style={{ border: `1px solid ${career.color}40` }}
                      >
                        <ArrowUpRight className="w-3 h-3" style={{ color: career.color }} />
                      </span>
                    </div>

                    <div className="h-1 w-full bg-foreground/[0.08] rounded-full overflow-hidden mb-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${career.match}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={`h-full bg-gradient-to-r ${career.bar} rounded-full opacity-70`}
                      />
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {career.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-1.5 py-0.5 rounded border font-medium"
                          style={{ borderColor: `${career.color}35`, color: career.color }}
                        >
                          #{tag}
                        </span>
                      ))}
                      {career.tags.length > 2 && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/[0.04] border border-foreground/10 text-foreground/50 font-medium">
                          +{career.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. DASHBOARD PREVIEW — theme-aware mockup
   ============================================================ */

function StudentsDashboardPreview() {
  const steps = [
    { num: "01", label: "Career DNA & profile strength", sub: "Know where you stand", icon: Sparkles, color: "#a855f7" },
    { num: "02", label: "Goals & roadmap", sub: "Always know the next step", icon: Target, color: "#06b6d4" },
    { num: "03", label: "Upcoming activities", sub: "Never miss a milestone", icon: Activity, color: "#10b981" },
    { num: "04", label: "AI chat with Novi", sub: "Personalized answers, anytime", icon: MessageSquare, color: "#f59e0b" },
    { num: "05", label: "Notifications & more", sub: "Progress without pressure", icon: Bell, color: "#ec4899" },
  ];

  return (
    <section className="relative pt-8 pb-12 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-6">
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
                      </div>

                      {!isLast && (
                        <div
                          className="w-[2px] flex-1 my-1 rounded-full"
                          style={{
                            background: `linear-gradient(to bottom, ${step.color}80, ${steps[i + 1].color}80)`,
                            opacity: 0.4,
                          }}
                        />
                      )}
                    </div>

                    <div
                      className="flex-1 mb-3 p-4 rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg bg-background/50 dark:bg-background/50"
                      style={{ borderColor: `${step.color}40` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: step.color }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-foreground leading-tight truncate">
                            {step.label}
                          </p>
                          <p className="text-xs text-foreground/55 mt-0.5">{step.sub}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/15 via-pink-500/8 to-cyan-500/15 rounded-[40px] blur-2xl pointer-events-none" />

              <div
                className="relative rounded-3xl overflow-hidden p-[1px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.3), rgba(6,182,212,0.5))",
                }}
              >
                {/* theme-aware mockup */}
                <div className="relative rounded-3xl bg-surface dark:bg-[#0b0a1a] overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-foreground/10 bg-foreground/[0.02]">
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
                    <span className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Live
                      </span>
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-extrabold text-base text-foreground mb-0.5">
                          Good morning, Riya! 👋
                        </h4>
                        <p className="text-xs text-foreground/60">
                          Here&apos;s what&apos;s next for your journey.
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/30">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[9px] font-bold text-white">
                          N
                        </div>
                        <span className="text-[10px] font-bold text-foreground/70">
                          Day 47
                        </span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div
                        className="relative p-4 rounded-2xl bg-background/50 dark:bg-background/40 border transition-all duration-300 hover:-translate-y-0.5"
                        style={{ borderColor: "rgba(168, 85, 247, 0.45)" }}
                      >
                        <span
                          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                          style={{ borderColor: "rgba(168, 85, 247, 0.7)", color: "#a855f7" }}
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
                            style={{ backgroundColor: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }}
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
                            <div key={task.label} className="flex items-center gap-1.5">
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

                      <div
                        className="relative p-4 rounded-2xl bg-background/50 dark:bg-background/40 border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-0.5"
                        style={{ borderColor: "rgba(6, 182, 212, 0.45)" }}
                      >
                        <span
                          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                          style={{ borderColor: "rgba(6, 182, 212, 0.7)", color: "#06b6d4" }}
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
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-foreground/10" />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="url(#dashGrad)"
                              strokeWidth="8"
                              strokeLinecap="round"
                              initial={{ strokeDashoffset: 251.2 }}
                              whileInView={{ strokeDashoffset: 251.2 * (1 - 0.78) }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              strokeDasharray="251.2"
                            />
                            <defs>
                              <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-base font-extrabold text-foreground">78%</span>
                            <span className="text-[7px] text-emerald-600 dark:text-emerald-400 font-bold">+5% wk</span>
                          </div>
                        </div>

                        <div className="flex gap-1 mt-2">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400 font-bold">
                            #Analytical
                          </span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                            #Leader
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="relative p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all duration-300 hover:-translate-y-0.5 bg-background/50 dark:bg-[rgba(245,158,11,0.08)]"
                      style={{ borderColor: "rgba(245, 158, 11, 0.45)" }}
                    >
                      <span
                        className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-bold flex items-center justify-center"
                        style={{ borderColor: "rgba(245, 158, 11, 0.7)", color: "#f59e0b" }}
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
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
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
                          background: "linear-gradient(135deg, #f59e0b, #ec4899)",
                          boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-background border border-primary/40 shadow-xl backdrop-blur-sm"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-foreground/80">
                  Powered by Novi AI
                </span>
              </motion.div>
            </div>

            <div className="flex justify-center pt-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold hover:bg-primary/20 hover:border-primary/50 transition-all group"
              >
                See the full dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. GROWTH PIPELINE
   ============================================================ */

function StudentsGrowthPipeline() {
  const [active, setActive] = useState<number | null>(null);
  const [burst, setBurst] = useState(0);

  const nodes = [
    { label: "Interests", sub: "What excites you", desc: "We map the things you genuinely enjoy doing — the raw material of your Career DNA.", icon: Heart, color: "#a855f7" },
    { label: "Strengths", sub: "What you're good at", desc: "Novi spots the patterns behind your natural abilities, so you can lean into them.", icon: Sparkles, color: "#f43f5e" },
    { label: "Academics", sub: "How you perform", desc: "Subjects, scores, and study habits tracked over time — no more flying blind.", icon: BookOpen, color: "#10b981" },
    { label: "Activities", sub: "What you do", desc: "Clubs, hobbies, sports, projects — the full picture of how you spend your energy.", icon: Activity, color: "#06b6d4" },
    { label: "Achievements", sub: "What you've won", desc: "Contests, awards, milestones — all the evidence that you're moving forward.", icon: Trophy, color: "#f59e0b" },
    { label: "Goals", sub: "What you aim for", desc: "Short-term and long-term targets that keep every week aligned to your bigger why.", icon: Target, color: "#6366f1" },
    { label: "Experiences", sub: "What you've lived", desc: "Internships, workshops, real-world moments that build the story universities love.", icon: Compass, color: "#14b8a6" },
    { label: "Personalized", sub: "Your unique plan", desc: "Everything above converges into a roadmap that's genuinely, uniquely yours.", icon: Sparkles, color: "#a855f7", isFinal: true },
  ];

  const handleClick = (i: number) => {
    const isActive = active === i;
    if (i === nodes.length - 1 && !isActive) {
      setBurst((b) => b + 1);
    }
    setActive(isActive ? null : i);
  };

  const particleAngles = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);

  return (
    <section className="relative pt-10 pb-0 px-6 lg:px-12 overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Your Growth Engine
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]">
              Novi understands you better{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                over time.
              </span>
            </h2>

            <p className="text-sm text-foreground/60 leading-relaxed max-w-md">
              Your interests, strengths, experiences and goals come together to
              create a profile that grows with you — and gets smarter over time.
            </p>

            <div className="space-y-2.5 pt-3">
              {["You build a Career DNA", "Novi spots patterns", "Skills compound over time", "Becomes a personalized plan"].map((line, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[12px] text-foreground/70">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center justify-end gap-2 mb-4 pr-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
              <span className="text-[11px] text-foreground/45 font-medium">
                {active === null
                  ? "Tap any icon to see how Novi grows with you"
                  : "Tap the same icon again to close"}
              </span>
            </motion.div>

            <div className="relative flex items-start justify-between gap-1 sm:gap-3 pb-2">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                const isActive = active === i;
                const isFinalNode = node.isFinal;

                return (
                  <Fragment key={node.label}>
                    <div className="relative flex flex-col items-center">
                      <motion.button
                        type="button"
                        onClick={() => handleClick(i)}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        aria-label={`Show ${node.label}`}
                        className="relative flex flex-col items-center gap-3 group focus:outline-none"
                      >
                        <div className="relative">
                          {!isFinalNode && (
                            <motion.div
                              className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                              style={{ backgroundColor: node.color }}
                              animate={{
                                opacity: isActive ? 0.55 : 0,
                                scale: isActive ? 1.5 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          )}

                          {isFinalNode && (
                            <AnimatePresence>
                              {isActive && (
                                <div key={`boom-${burst}`} className="absolute inset-0 pointer-events-none">
                                  {[0, 1, 2].map((ring) => (
                                    <motion.span
                                      key={`ring-${ring}`}
                                      initial={{ scale: 1, opacity: 0.85 }}
                                      animate={{ scale: 4 + ring * 0.6, opacity: 0 }}
                                      transition={{ duration: 1.1, delay: ring * 0.12, ease: "easeOut" }}
                                      className="absolute inset-0 rounded-full border-2"
                                      style={{ borderColor: node.color, boxShadow: `0 0 24px ${node.color}` }}
                                    />
                                  ))}

                                  <motion.div
                                    initial={{ scale: 0.5, opacity: 0.9 }}
                                    animate={{ scale: 3.5, opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full blur-2xl"
                                    style={{
                                      background: `radial-gradient(circle, ${node.color}, ${node.color}80, transparent 70%)`,
                                    }}
                                  />

                                  {particleAngles.map((angle, idx) => {
                                    const rad = (angle * Math.PI) / 180;
                                    const distance = 60 + (idx % 3) * 18;
                                    const px = Math.cos(rad) * distance;
                                    const py = Math.sin(rad) * distance;

                                    return (
                                      <motion.span
                                        key={`particle-${idx}`}
                                        initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                        animate={{ x: px, y: py, scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.85 + (idx % 3) * 0.12, delay: idx * 0.015, ease: "easeOut" }}
                                        className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full"
                                        style={{
                                          backgroundColor:
                                            idx % 3 === 0 ? "#a855f7" : idx % 3 === 1 ? "#06b6d4" : "#ec4899",
                                        }}
                                      />
                                    );
                                  })}
                                </div>
                              )}
                            </AnimatePresence>
                          )}

                          <div
                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-background transition-all duration-300 overflow-hidden"
                            style={{
                              border: `2px solid ${isActive ? node.color : `${node.color}50`}`,
                              boxShadow: isActive
                                ? `0 0 24px ${node.color}80, inset 0 0 12px ${node.color}30`
                                : "0 2px 8px rgba(0,0,0,0.15)",
                              transform: isActive ? "scale(1.12)" : undefined,
                            }}
                          >
                            {isFinalNode && isActive && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: "linear-gradient(135deg, #a855f7, #06b6d4, #ec4899, #a855f7)",
                                  backgroundSize: "300% 300%",
                                }}
                              />
                            )}

                            <Icon
                              className="relative w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 z-10"
                              style={{ color: isFinalNode && isActive ? "#fff" : node.color }}
                            />

                            {node.isFinal && (
                              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-background flex items-center justify-center shadow-md z-20">
                                <Sparkles className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-center px-0.5">
                          <p
                            className="text-[10px] sm:text-[11px] font-bold transition-colors duration-300 leading-tight"
                            style={{ color: isActive ? node.color : "rgba(255,255,255,0.75)" }}
                          >
                            {node.label}
                          </p>
                          <p className="hidden sm:block text-[9px] text-foreground/40 mt-0.5 leading-tight">
                            {node.sub}
                          </p>
                        </div>
                      </motion.button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 380, damping: 28 }}
                            className={`absolute bottom-full mb-4 z-50 pointer-events-none w-[260px] sm:w-[300px] ${
                              i > 4 ? "right-0" : "left-1/2 -translate-x-1/2"
                            }`}
                          >
                            <div
                              className="relative rounded-2xl border-2 bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden pointer-events-auto"
                              style={{ borderColor: `${node.color}80` }}
                            >
                              <div
                                className={`absolute -bottom-1.5 w-3 h-3 rotate-45 bg-surface ${
                                  i > 4 ? "right-6" : "left-1/2 -translate-x-1/2"
                                }`}
                                style={{
                                  borderBottom: `2px solid ${node.color}80`,
                                  borderRight: `2px solid ${node.color}80`,
                                }}
                              />

                              <div
                                className="absolute inset-x-8 top-0 h-px"
                                style={{
                                  background: `linear-gradient(to right, transparent, ${node.color}, transparent)`,
                                }}
                              />

                              <div className="relative p-4">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: `${node.color}15`, border: `1.5px solid ${node.color}50` }}
                                  >
                                    <node.icon className="w-4 h-4" style={{ color: node.color }} />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-[11px] font-bold uppercase tracking-widest leading-tight" style={{ color: node.color }}>
                                      {node.label}
                                    </p>
                                    <p className="text-[10px] text-foreground/50 leading-tight">{node.sub}</p>
                                  </div>
                                </div>

                                <p className="text-[11px] text-foreground/75 leading-relaxed">{node.desc}</p>

                                <div className="mt-3 pt-2.5 border-t border-foreground/10 flex items-center justify-between">
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

                    {i < nodes.length - 1 && (
                      <div className="hidden sm:flex flex-1 items-center justify-center pt-7">
                        <ArrowRight className="w-4 h-4 text-foreground/25" strokeWidth={2} />
                      </div>
                    )}
                    {i < nodes.length - 1 && (
                      <div className="sm:hidden flex items-center justify-center pt-7">
                        <ArrowRight className="w-3 h-3 text-foreground/25" strokeWidth={2} />
                      </div>
                    )}
                  </Fragment>
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