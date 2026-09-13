"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Compass } from "lucide-react";

export default function StudentsHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ==================== LEFT ==================== */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Built for your future
            </span>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              You don&apos;t need to <br />
              have it all{" "}
              <span className="text-primary">figured out.</span>
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

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Personalized AI Mentor
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Career + University
              </span>
              <span className="text-sm text-foreground/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Built around you
              </span>
            </div>
          </div>

          {/* ==================== RIGHT ==================== */}
          <div className="relative w-full h-[500px] flex justify-center items-end">

            {/* Main dashboard card — offset right like parent page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 w-[70%] max-w-[480px] bg-surface dark:bg-[#1a183c] border border-foreground/10 rounded-3xl p-6 shadow-2xl mr-[-60px] mb-12"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
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
                      Grade 11 · Target: Computer Science
                    </p>
                  </div>
                </div>
                <span className="text-xs text-foreground/40">This Month ▼</span>
              </div>

              {/* 3 Metrics — same orientation as parent */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">
                    Career Direction
                  </p>
                  <span className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> On Track
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">
                    Profile Strength
                  </p>
                  <span className="text-2xl font-bold text-foreground">78%</span>
                  <div className="h-1 w-full bg-foreground/10 rounded-full mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 mb-1">
                    University Readiness
                  </p>
                  <span className="text-2xl font-bold text-foreground">71%</span>
                  <div className="h-1 w-full bg-foreground/10 rounded-full mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "71%" }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Roadmap Progress */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-foreground/70">
                    Roadmap Progress
                  </span>
                  <span className="text-xs font-bold text-primary">68%</span>
                </div>
                <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>

              {/* Today's Focus */}
              <div>
                <p className="text-xs font-bold text-foreground/70 mb-3">
                  Today&apos;s Focus
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Complete career quiz
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Explore 3 universities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Finish weekly goal
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Floating Novi Coach card — bottom-right, bobbing */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1 right-0 z-30 bg-surface dark:bg-[#1a183c] border border-primary/20 rounded-2xl p-4 shadow-xl max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-foreground">
                  Novi Coach
                </span>
              </div>
              <p className="text-xs text-foreground/60">
                Try the AI &amp; Data Science track — it matches your analytical
                strengths.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}