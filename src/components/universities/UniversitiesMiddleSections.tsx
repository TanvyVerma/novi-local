"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Scale,
  FileCheck,
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  Heart,
  ChevronDown,
  SlidersHorizontal,
  CheckCircle2,
  Clock,
  Building2,
  Users,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

/* ============================================================
   1. UNIVERSITY JOURNEY — 4-step rail
   ============================================================ */

function UniversitiesJourney() {
  const [active, setActive] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "Explore universities, courses and countries you're interested in.",
      icon: Compass,
      color: "#10b981",
    },
    {
      step: "02",
      title: "Find Your Fit",
      desc: "Get personalized recommendations based on your profile and goals.",
      icon: Target,
      color: "#a855f7",
    },
    {
      step: "03",
      title: "Compare",
      desc: "See side-by-side comparisons of universities, courses and fees.",
      icon: Scale,
      color: "#06b6d4",
    },
    {
      step: "04",
      title: "Apply",
      desc: "Get step-by-step guidance on applications, deadlines and scholarships.",
      icon: FileCheck,
      color: "#f59e0b",
    },
  ];

  return (
    <section className="relative pt-10 pb-12 px-6 lg:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT — Sticky text */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Your University Journey
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]">
              Four steps to find,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                compare, and apply.
              </span>
            </h2>

            <p className="text-sm text-foreground/60 leading-relaxed max-w-md">
              From exploring your interests to landing on your dream campus,
              Novi walks every step with you.
            </p>

            <div className="space-y-2.5 pt-3">
              {[
                "Explore global universities",
                "Get personalized matches",
                "Compare side-by-side",
                "Apply with confidence",
              ].map((line, i) => {
                const colors = ["#10b981", "#a855f7", "#06b6d4", "#f59e0b"];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-[12px] text-foreground/70"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${colors[i]}15` }}
                    >
                      <CheckCircle2
                        className="w-3 h-3"
                        style={{ color: colors[i] }}
                      />
                    </div>
                    {line}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — 4 step cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;

              return (
                <motion.button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="group relative p-5 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 bg-background/40 dark:bg-transparent"
                  style={{
                    borderColor: isActive ? step.color : `${step.color}40`,
                    boxShadow: isActive ? `0 0 24px ${step.color}30` : "none",
                  }}
                >
                  <span
                    className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
                    style={{
                      borderColor: `${step.color}70`,
                      color: step.color,
                    }}
                  >
                    {step.step}
                  </span>

                  <div className="flex items-start justify-between mb-3 pt-1">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5"
                      style={{ border: `1px solid ${step.color}40` }}
                    >
                      <ArrowUpRight
                        className="w-3 h-3"
                        style={{ color: step.color }}
                      />
                    </span>
                  </div>

                  <h3
                    className="text-base font-black tracking-tight mb-1.5 transition-colors"
                    style={{ color: isActive ? step.color : undefined }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-foreground/60 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. EXPLORE GRID — Search + University Cards
   ============================================================ */

function UniversitiesExploreGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    stanford: true,
  });
  const [compared, setCompared] = useState<Record<string, boolean>>({});

  const universitiesData = [
    {
      num: "01",
      id: "stanford",
      name: "Stanford University",
      location: "USA • California",
      country: "USA",
      rank: 3,
      fees: "$78,000 / year",
      course: "Computer Science",
      initial: "S",
      color: "#a855f7",
    },
    {
      num: "02",
      id: "mit",
      name: "MIT",
      location: "USA • Cambridge",
      country: "USA",
      rank: 1,
      fees: "$82,000 / year",
      course: "Computer Science",
      initial: "M",
      color: "#ec4899",
    },
    {
      num: "03",
      id: "oxford",
      name: "Oxford University",
      location: "UK • Oxford",
      country: "UK",
      rank: 5,
      fees: "$68,000 / year",
      course: "Computer Science",
      initial: "O",
      color: "#06b6d4",
    },
  ];

  const popularSearches = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Computer Science",
    "Business",
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id: string) => {
    setCompared((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = universitiesData.filter((u) => {
    const query = (searchTerm || activeChip || "").toLowerCase();
    if (!query) return true;
    return (
      u.name.toLowerCase().includes(query) ||
      u.country.toLowerCase().includes(query) ||
      u.course.toLowerCase().includes(query)
    );
  });

  return (
    <section className="relative pt-12 pb-8 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT — Search */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Explore Universities
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
                Find campuses{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                  worldwide.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
                Search, filter and find the best universities for your future.
              </p>
            </div>

            {/* Search + filters card */}
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative p-5 space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setActiveChip(null);
                    }}
                    placeholder="Search universities or countries..."
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-background/60 border border-foreground/15 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm text-foreground placeholder:text-foreground/40 transition-all"
                  />
                  <Search className="w-4 h-4 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {popularSearches.map((chip) => {
                      const isActive = activeChip === chip;
                      return (
                        <button
                          key={chip}
                          onClick={() => {
                            if (isActive) {
                              setActiveChip(null);
                              setSearchTerm("");
                            } else {
                              setActiveChip(chip);
                              setSearchTerm(chip);
                            }
                          }}
                          className={`text-[11px] px-3 py-1.5 rounded-full border transition-all font-medium ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                              : "bg-background/50 border-foreground/10 text-foreground/70 hover:border-primary/40 hover:text-primary"
                          }`}
                        >
                          {chip}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-foreground/10">
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
                    Filter by
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Country", "Course", "Ranking", "Fees"].map((f) => (
                      <button
                        key={f}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 border border-foreground/10 text-[11px] text-foreground/70 hover:border-foreground/25"
                      >
                        {f}
                        <ChevronDown className="w-3 h-3 text-foreground/40" />
                      </button>
                    ))}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-[11px]">
                      <SlidersHorizontal className="w-3 h-3" />
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Top Universities</span>
              </div>
              <span className="text-xs text-foreground/50 font-medium">
                {filtered.length}{" "}
                {filtered.length === 1 ? "result" : "results"}
              </span>
            </div>

            <div className="space-y-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group relative p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
                  style={{ border: `1px solid ${item.color}40` }}
                >
                  <span
                    className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center z-10"
                    style={{
                      borderColor: `${item.color}70`,
                      color: item.color,
                    }}
                  >
                    {item.num}
                  </span>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                    aria-label="Save"
                    className="absolute top-3 right-3 w-7 h-7 rounded-full border flex items-center justify-center transition-all hover:scale-110"
                    style={{ borderColor: `${item.color}30` }}
                  >
                    <Heart
                      className="w-3 h-3"
                      style={{
                        color: favorites[item.id] ? "#ec4899" : item.color,
                        fill: favorites[item.id] ? "#ec4899" : "transparent",
                      }}
                    />
                  </button>

                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        border: `1px solid ${item.color}50`,
                        color: item.color,
                      }}
                    >
                      {item.initial}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm text-foreground leading-tight truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-foreground/50 mt-0.5">
                        {item.location}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: item.color }}
                        >
                          #{item.rank} Global
                        </span>
                        <span className="text-[10px] text-foreground/60">
                          {item.fees}
                        </span>
                        <span className="text-[10px] text-foreground/50">
                          · {item.course}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-foreground/10">
                    <button
                      onClick={() => toggleCompare(item.id)}
                      className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-all"
                      style={{
                        color: item.color,
                        border: `1px solid ${
                          compared[item.id] ? item.color : `${item.color}40`
                        }`,
                        backgroundColor: compared[item.id]
                          ? `${item.color}15`
                          : "transparent",
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded border flex items-center justify-center"
                        style={{ borderColor: item.color }}
                      >
                        {compared[item.id] && (
                          <CheckCircle2
                            className="w-3 h-3"
                            style={{ color: item.color }}
                          />
                        )}
                      </div>
                      {compared[item.id] ? "Added" : "Compare"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. RECOMMENDATIONS — 3-column layout
   ============================================================ */

function UniversitiesRecommendations() {
  const matches = [
    {
      num: "1",
      name: "Stanford University",
      sub: "Strong match for your CS interest",
      match: 92,
      color: "#a855f7",
    },
    {
      num: "2",
      name: "MIT",
      sub: "Matches your academic profile",
      match: 89,
      color: "#ec4899",
    },
    {
      num: "3",
      name: "Oxford University",
      sub: "Great fit for global ambitions",
      match: 85,
      color: "#06b6d4",
    },
    {
      num: "4",
      name: "UC Berkeley",
      sub: "Aligns with your innovation streak",
      match: 78,
      color: "#10b981",
    },
  ];

  return (
    <section className="relative py-16 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Personalized
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Get personalized{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              recommendations.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60">
            Based on your profile, here are your top university matches.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left — Novi prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] flex flex-col items-center text-center space-y-3"
          >
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/25 text-[11px] font-medium text-foreground/85 leading-snug">
              <span className="font-bold text-primary block mb-0.5">
                Novi AI
              </span>
              Based on your profile, here are your top matches!
            </div>

            <div className="relative w-36 h-36">
              <Image
                src="/student-mascot-girl.png"
                alt="Novi Mentor"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Center — Matches list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-5 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm"
          >
            <h3 className="font-bold text-sm text-foreground mb-3.5">
              Your Top University Matches
            </h3>

            <div className="space-y-2.5">
              {matches.map((item) => (
                <div
                  key={item.name}
                  className="p-3 rounded-xl flex items-center justify-between gap-3 transition-all cursor-pointer hover:-translate-y-0.5 group"
                  style={{
                    border: `1px solid ${item.color}30`,
                    backgroundColor: `${item.color}05`,
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}40`,
                        color: item.color,
                      }}
                    >
                      {item.num}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-foreground/55 truncate">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-xs font-black"
                      style={{ color: item.color }}
                    >
                      {item.match}%
                    </span>
                    <ChevronRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 mt-3 border-t border-foreground/10">
              <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors group">
                View all matches
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right — Why */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-5 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm space-y-3"
          >
            <h4 className="font-bold text-sm text-foreground">
              Why these matches?
            </h4>

            <p className="text-[11px] text-foreground/65 leading-relaxed">
              Based on your interests, strengths and preferences.
            </p>

            <div className="space-y-2 pt-1">
              {[
                { label: "Career DNA", color: "#a855f7" },
                { label: "Goals & roadmap", color: "#06b6d4" },
                { label: "Preferences", color: "#10b981" },
                { label: "Location & budget", color: "#f59e0b" },
                { label: "Future scope", color: "#ec4899" },
              ].map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-[11px] text-foreground/75"
                >
                  <CheckCircle2
                    className="w-3 h-3 shrink-0"
                    style={{ color: point.color }}
                  />
                  <span>{point.label}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-bold text-gradient italic pt-2">
              Personalized just for you! ✨
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. DEEP DIVE — tab-based university profile
   ============================================================ */

function UniversitiesDeepDive() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", color: "#a855f7" },
    { key: "Courses", color: "#06b6d4" },
    { key: "Campus Life", color: "#10b981" },
    { key: "Outcomes", color: "#f59e0b" },
  ];

  const tabContents: Record<string, string> = {
    Overview:
      "Stanford University is a world-renowned research university known for innovation, entrepreneurship and academic excellence.",
    Courses:
      "Offers top-ranked programs in Computer Science, Artificial Intelligence, Bioengineering, Economics, and Management Science with flexible dual-degree options.",
    "Campus Life":
      "Located in Silicon Valley with 8,180 acres of sunny campus, 600+ student organizations, and proximity to global tech giants.",
    Outcomes:
      "94% graduate employment within 6 months, $145,000 average starting salary for STEM graduates, and a strong alumni network.",
  };

  const activeColor = tabs.find((t) => t.key === activeTab)?.color ?? "#a855f7";

  return (
    <section className="relative py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            University Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Deep dive into{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              your shortlist.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Profile card */}
          <div
            className="lg:col-span-3 relative rounded-2xl border p-4 space-y-3 bg-background/40 dark:bg-transparent"
            style={{ borderColor: "#a855f740" }}
          >
            <span
              className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
              style={{ borderColor: "#a855f770", color: "#a855f7" }}
            >
              01
            </span>

            <div className="relative w-full h-32 rounded-xl overflow-hidden">
              <Image
                src="/stanford-campus.jpg"
                alt="Stanford"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base text-foreground">
                  Stanford 🌲
                </h3>
                <button
                  aria-label="Save"
                  className="text-rose-500"
                >
                  <Heart className="w-4 h-4 fill-rose-500" />
                </button>
              </div>
              <p className="text-xs text-foreground/60 mt-0.5">
                USA • California
              </p>
            </div>

            <div className="space-y-1 text-xs pt-1 border-t border-foreground/10">
              <div className="flex items-center justify-between pt-2">
                <span className="text-purple-500 font-bold">
                  #3 Global
                </span>
                <span className="font-bold text-foreground">
                  $78,000 / yr
                </span>
              </div>
              <p className="text-[11px] text-foreground/50">
                4 Years Duration
              </p>
            </div>

            <button className="w-full py-2 rounded-xl bg-primary text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
              Compare
            </button>
          </div>

          {/* Tabs card */}
          <div
            className="lg:col-span-6 relative rounded-2xl border p-5 space-y-4 bg-background/40 dark:bg-transparent"
            style={{ borderColor: `${activeColor}40` }}
          >
            <span
              className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
              style={{ borderColor: `${activeColor}70`, color: activeColor }}
            >
              02
            </span>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1.5 border-b border-foreground/10 pb-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: isActive
                        ? tab.color
                        : "transparent",
                      color: isActive ? "#fff" : undefined,
                      border: `1px solid ${
                        isActive ? tab.color : `${tab.color}40`
                      }`,
                    }}
                  >
                    {tab.key}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs sm:text-sm text-foreground/75 leading-relaxed min-h-[70px]"
              >
                {tabContents[activeTab]}
              </motion.p>
            </AnimatePresence>

            <div className="grid grid-cols-3 gap-2.5 pt-2">
              {[
                { icon: Clock, value: "4 Years", label: "Duration" },
                { icon: Building2, value: "Private", label: "Type" },
                { icon: Users, value: "6:1", label: "Ratio" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-2.5 rounded-xl border text-center space-y-1"
                    style={{ borderColor: `${activeColor}30` }}
                  >
                    <Icon
                      className="w-3.5 h-3.5 mx-auto"
                      style={{ color: activeColor }}
                    />
                    <p className="text-[10px] font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-[9px] text-foreground/50">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Admission chances */}
          <div
            className="lg:col-span-3 relative rounded-2xl border p-5 space-y-4 bg-background/40 dark:bg-transparent"
            style={{ borderColor: "#10b98140" }}
          >
            <span
              className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
              style={{ borderColor: "#10b98170", color: "#10b981" }}
            >
              03
            </span>

            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>Admission Chances</span>
            </div>

            <div className="space-y-3 text-xs">
              {[
                {
                  label: "Reach",
                  pct: 15,
                  color: "#f43f5e",
                  note: "Higher profile needed",
                },
                {
                  label: "Match",
                  pct: 65,
                  color: "#10b981",
                  note: "Good fit with profile",
                },
                {
                  label: "Safe",
                  pct: 20,
                  color: "#06b6d4",
                  note: "Strong probability",
                },
              ].map((row) => (
                <div key={row.label} className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span style={{ color: row.color }}>{row.label}</span>
                    <span className="text-foreground">{row.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full opacity-70"
                      style={{
                        width: `${row.pct}%`,
                        backgroundColor: row.color,
                      }}
                    />
                  </div>
                  <p className="text-[9px] text-foreground/50">{row.note}</p>
                </div>
              ))}
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

export default function UniversitiesMiddleSections() {
  return (
    <>
      <UniversitiesJourney />
      <UniversitiesExploreGrid />
      <UniversitiesRecommendations />
      <UniversitiesDeepDive />
    </>
  );
}