"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Compass,
  GraduationCap,
  Target,
} from "lucide-react";

export default function StudentsHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ==================== LEFT ==================== */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Built for your future
            </span>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              You don&apos;t need to <br />
              have it all{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                figured out.
              </span>
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Novi helps you discover what you&apos;re good at, explore
              what&apos;s possible, and build a path toward your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login" className="btn-primary group">
                Meet Novi
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/login" className="btn-secondary">
                Explore Student Dashboard
              </Link>
            </div>

            {/* 3 checkmarks with per-item colors */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { label: "Personalized AI Mentor", color: "#a855f7" },
                { label: "Career + University", color: "#06b6d4" },
                { label: "Built around you", color: "#f59e0b" },
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
          <div className="relative w-full h-[500px] flex justify-center items-end">
            {/* Main card — transparent, thin border */}
            <div className="relative z-10 w-[90%] max-w-[480px] bg-transparent border border-primary/20 rounded-3xl p-6 shadow-2xl mr-[-40px] mb-8 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                    <Image
                      src="/riya-avatar.jpg"
                      alt="Riya"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Riya&apos;s Journey
                    </h3>
                    <p className="text-xs text-foreground/50">
                      Grade 11 · Target: CS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-background/60 border border-foreground/10">
                  <span className="text-[10px] text-foreground/60 font-semibold">
                    This Month
                  </span>
                  <ChevronDown className="w-3 h-3 text-foreground/40" />
                </div>
              </div>

              {/* 3 stats — same tile structure */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {[
                  {
                    label: "Career",
                    value: "On Track",
                    pct: 100,
                    color: "#a855f7",
                  },
                  {
                    label: "Profile",
                    value: "78%",
                    pct: 78,
                    color: "#06b6d4",
                  },
                  {
                    label: "Uni Prep",
                    value: "71%",
                    pct: 71,
                    color: "#f59e0b",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-2.5 border"
                    style={{
                      borderColor: `${stat.color}30`,
                      backgroundColor: `${stat.color}06`,
                    }}
                  >
                    <p className="text-[9px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p
                      className="text-sm font-black leading-none mb-1.5"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <div className="h-[3px] w-full bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${stat.pct}%`,
                          backgroundColor: stat.color,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Roadmap Progress */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-foreground/70">
                    Roadmap Progress
                  </span>
                  <span className="text-[11px] font-bold text-primary">
                    68%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-primary to-accent rounded-full opacity-70" />
                </div>
              </div>

              {/* Today's Focus */}
              <div className="mb-5">
                <p className="text-[11px] font-bold text-foreground/70 mb-2.5">
                  Today&apos;s Focus
                </p>
                <ul className="space-y-1.5 text-[12px] text-foreground/60">
                  {[
                    { label: "Complete career quiz", color: "#a855f7" },
                    { label: "Explore 3 universities", color: "#06b6d4" },
                    { label: "Finish weekly goal", color: "#10b981" },
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

              {/* Novi Coach — docked as footer row */}
              <div className="pt-4 border-t border-foreground/10">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-md">
                    <Compass className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">
                      Novi Coach
                    </p>
                    <p className="text-[11px] text-foreground/65 leading-relaxed">
                      Try the AI &amp; Data Science track — it matches your
                      analytical strengths.
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