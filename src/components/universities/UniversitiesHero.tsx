"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Search,
  GraduationCap,
  Globe,
  DollarSign,
} from "lucide-react";

export default function UniversitiesHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ==================== LEFT ==================== */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              University Explorer
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.08] text-foreground">
              Don&apos;t just find
              <br />
              a university.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                Find your university.
              </span>
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Explore universities, courses and countries based on what matters
              to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn-primary group">
                Start Exploring
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#journey" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            {/* 3 colored checkmarks */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { label: "Global Universities", color: "#a855f7" },
                { label: "Personalized Matches", color: "#06b6d4" },
                { label: "Curated by Experts", color: "#f59e0b" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="text-sm text-foreground/60 flex items-center gap-2"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <Check
                      className="w-3 h-3 stroke-[3]"
                      style={{ color: item.color }}
                    />
                  </div>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* ==================== RIGHT ==================== */}
          <div className="relative w-full h-[560px] flex justify-center items-end">
            <div className="relative z-10 w-[90%] max-w-[480px] bg-transparent border border-primary/20 rounded-3xl p-6 shadow-2xl mr-[-40px] mb-8 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Top Matches
                    </h3>
                    <p className="text-xs text-foreground/50">
                      1,248 universities
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-background/60 border border-foreground/10">
                  <Search className="w-3 h-3 text-foreground/40" />
                  <span className="text-[10px] text-foreground/60 font-semibold">
                    Search
                  </span>
                </div>
              </div>

              {/* University rows */}
              <div className="space-y-2.5 mb-5">
                {[
                  {
                    name: "Stanford",
                    loc: "USA",
                    rank: "#3",
                    color: "#a855f7",
                    letter: "S",
                    pct: 92,
                  },
                  {
                    name: "MIT",
                    loc: "USA",
                    rank: "#1",
                    color: "#ec4899",
                    letter: "M",
                    pct: 89,
                  },
                  {
                    name: "Oxford",
                    loc: "UK",
                    rank: "#5",
                    color: "#06b6d4",
                    letter: "O",
                    pct: 85,
                  },
                ].map((uni) => (
                  <div
                    key={uni.name}
                    className="rounded-xl p-3 border flex items-center gap-3"
                    style={{
                      borderColor: `${uni.color}30`,
                      backgroundColor: `${uni.color}06`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0"
                      style={{
                        border: `1px solid ${uni.color}50`,
                        color: uni.color,
                      }}
                    >
                      {uni.letter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold text-foreground leading-tight truncate">
                        {uni.name}
                      </p>
                      <p className="text-[9px] text-foreground/50">
                        {uni.loc} · {uni.rank} Global
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span
                        className="text-[11px] font-black"
                        style={{ color: uni.color }}
                      >
                        {uni.pct}%
                      </span>
                      <div className="h-[3px] w-10 bg-foreground/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${uni.pct}%`,
                            backgroundColor: uni.color,
                            opacity: 0.7,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Roadmap */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-foreground/70">
                    Application Progress
                  </span>
                  <span className="text-[11px] font-bold text-primary">
                    42%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full w-[42%] bg-gradient-to-r from-primary to-accent rounded-full opacity-70" />
                </div>
              </div>

              {/* Checklist */}
              <div className="mb-5">
                <p className="text-[11px] font-bold text-foreground/70 mb-2.5">
                  Shortlist Focus
                </p>
                <ul className="space-y-1.5 text-[12px] text-foreground/60">
                  {[
                    { label: "Compare 3 universities", color: "#a855f7" },
                    { label: "Check scholarships", color: "#06b6d4" },
                    { label: "Draft 1 essay", color: "#10b981" },
                  ].map((task) => (
                    <li key={task.label} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${task.color}15`,
                          border: `1px solid ${task.color}40`,
                        }}
                      >
                        <Check
                          className="w-2.5 h-2.5 stroke-[3]"
                          style={{ color: task.color }}
                        />
                      </div>
                      {task.label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Novi Coach footer */}
              <div className="pt-4 border-t border-foreground/10">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-md">
                    <Globe className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">
                      Novi Coach
                    </p>
                    <p className="text-[11px] text-foreground/65 leading-relaxed">
                      Oxford's CS program matches your research interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}