"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function UniversitiesHero() {
  const universities = [
    {
      name: "Stanford University",
      loc: "USA · California",
      rank: "#3 Global",
      course: "Computer Science",
      color: "#a855f7",
      image: "/stanford-campus.jpg",
    },
    {
      name: "MIT",
      loc: "USA · Cambridge",
      rank: "#1 Global",
      course: "Computer Science",
      color: "#ec4899",
      image: "/mit-campus.jpg",
    },
    {
      name: "Oxford University",
      loc: "UK · Oxford",
      rank: "#5 Global",
      course: "Computer Science",
      color: "#06b6d4",
      image: "/stanford-campus.jpg",
    },
    {
      name: "UC Berkeley",
      loc: "USA · California",
      rank: "#4 Global",
      course: "EECS",
      color: "#10b981",
      image: "/mit-campus.jpg",
    },
    {
      name: "Harvard University",
      loc: "USA · Cambridge",
      rank: "#2 Global",
      course: "Computer Science",
      color: "#f59e0b",
      image: "/stanford-campus.jpg",
    },
  ];

  return (
    <section className="relative pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ==================== LEFT (5 cols) ==================== */}
          <div className="lg:col-span-5 space-y-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              University Explorer
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
              Don&apos;t just find
              <br />
              a university.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                Find your university.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
              Explore universities, courses and countries based on what matters
              to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup" className="btn-primary group">
                Start Exploring
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#journey" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <div className="pt-6 border-t border-foreground/10 space-y-3">
              {[
                { label: "Global Universities", color: "#a855f7" },
                { label: "Personalized Matches", color: "#06b6d4" },
                { label: "Curated by Experts", color: "#f59e0b" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 text-[13px] text-foreground/70"
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
                </div>
              ))}
            </div>
          </div>

          {/* ==================== RIGHT (7 cols) ==================== */}
          <div className="lg:col-span-7 relative">
            {/* Soft glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />

            {/* University card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full rounded-3xl border border-primary/25 bg-background/80 dark:bg-background/60 backdrop-blur-xl p-5 shadow-[0_25px_80px_rgba(108,92,231,0.2)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
            >
              {/* Top gradient accent */}
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-4 pb-4 border-b border-foreground/10">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold text-foreground">
                      Explore Universities
                    </h3>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-bold text-emerald-500 uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground/50">
                    Top-ranked campuses worldwide
                  </p>
                </div>
                <span className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-primary">
                  View all
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              {/* University list */}
              <div className="relative space-y-2">
                {universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="rounded-xl p-2.5 border flex items-center gap-3 transition-all hover:-translate-y-0.5 cursor-pointer group"
                    style={{
                      borderColor: `${uni.color}40`,
                      backgroundColor: `${uni.color}08`,
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border"
                      style={{ borderColor: `${uni.color}50` }}
                    >
                      <Image
                        src={uni.image}
                        alt={uni.name}
                        fill
                        sizes="44px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-bold text-foreground leading-tight truncate">
                        {uni.name}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5 text-[10px] text-foreground/50">
                        <MapPin className="w-2.5 h-2.5 shrink-0" />
                        <span className="truncate">{uni.loc}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: uni.color }}
                        >
                          {uni.rank}
                        </span>
                        <span className="text-foreground/30">·</span>
                        <span className="text-[10px] text-foreground/55 truncate">
                          {uni.course}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ border: `1px solid ${uni.color}50` }}
                    >
                      <ArrowRight
                        className="w-3 h-3"
                        style={{ color: uni.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}