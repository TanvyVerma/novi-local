"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FolderGit2,
  Sparkles,
  Building,
  ArrowRight,
  Scale,
  Trash2,
  Plus,
  CheckCircle2,
  Star,
  Quote,
  Send,
} from "lucide-react";

/* ============================================================
   1. NEXT STEPS — 4 cards
   ============================================================ */

function UniversitiesNextSteps() {
  const cards = [
    {
      icon: FolderGit2,
      title: "Build a project",
      desc: "Showcase your interest in CS or related fields.",
      color: "#a855f7",
    },
    {
      icon: Sparkles,
      title: "Learn a skill",
      desc: "Improve your coding or problem-solving skills.",
      color: "#10b981",
    },
    {
      icon: Building,
      title: "Explore a university",
      desc: "Attend virtual tours and info sessions.",
      color: "#06b6d4",
    },
  ];

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Your next{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              steps.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
                style={{ borderColor: `${card.color}40` }}
              >
                <span
                  className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
                  style={{
                    borderColor: `${card.color}70`,
                    color: card.color,
                  }}
                >
                  0{i + 1}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${card.color}15`,
                    border: `1px solid ${card.color}40`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                </div>

                <h4 className="font-bold text-sm text-foreground mb-1.5">
                  {card.title}
                </h4>
                <p className="text-[11px] text-foreground/60 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Compare CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="relative p-5 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex flex-col justify-between space-y-3 group cursor-pointer hover:-translate-y-0.5 transition-all"
          >
            <div>
              <h4 className="font-bold text-sm leading-snug">
                Compare with other universities
              </h4>
              <p className="text-xs text-white/85 mt-1">
                Make informed choices with side-by-side metrics.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold pt-1">
              <span>See side-by-side</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. COMPARE TOOL
   ============================================================ */

function UniversitiesCompareTool() {
  const [slots, setSlots] = useState([
    {
      id: "1",
      name: "Stanford University",
      detail: "USA • #3",
      badge: "S",
      color: "#a855f7",
    },
    {
      id: "2",
      name: "MIT",
      detail: "USA • #1",
      badge: "M",
      color: "#ec4899",
    },
    {
      id: "3",
      name: "Oxford University",
      detail: "UK • #5",
      badge: "O",
      color: "#06b6d4",
    },
  ]);

  const removeSlot = (id: string) => {
    setSlots((prev) => prev.filter((s) => s.id !== id));
  };

  const addSlot = () => {
    if (slots.length >= 4) return;
    setSlots((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        name: "UC Berkeley",
        detail: "USA • #4",
        badge: "B",
        color: "#f59e0b",
      },
    ]);
  };

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Scale className="w-3.5 h-3.5" />
            Compare Tool
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Compare universities{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              side-by-side.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60">
            Shortlist 2-4 universities and compare what actually matters.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-6 items-start p-5 sm:p-6 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm"
        >
          {/* Left */}
          <div className="lg:col-span-3 space-y-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "#a855f715",
                border: "1px solid #a855f740",
              }}
            >
              <Scale className="w-5 h-5" style={{ color: "#a855f7" }} />
            </div>

            <div>
              <h3 className="font-extrabold text-lg text-foreground">
                Compare Universities
              </h3>
              <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
                Shortlist and compare 2-4 universities to make the best
                decision.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs transition-all shadow-md shadow-primary/20 group">
              <span>Start Comparing</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center — slots */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            {slots.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl border flex items-center justify-between gap-2 transition-all bg-background/50 dark:bg-transparent"
                style={{ borderColor: `${item.color}40` }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0"
                    style={{
                      border: `1px solid ${item.color}50`,
                      color: item.color,
                    }}
                  >
                    {item.badge}
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-xs text-foreground truncate">
                      {item.name}
                    </h5>
                    <p className="text-[10px] text-foreground/50">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeSlot(item.id)}
                  className="text-foreground/40 hover:text-rose-500 p-1 transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {slots.length < 4 && (
              <button
                onClick={addSlot}
                className="p-3.5 rounded-xl border-2 border-dashed border-foreground/20 hover:border-primary/50 text-foreground/60 hover:text-primary flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add University</span>
              </button>
            )}
          </div>

          {/* Right — compare by */}
          <div className="lg:col-span-3 space-y-3 lg:border-l border-foreground/10 lg:pl-6">
            <h4 className="font-bold text-xs text-foreground uppercase tracking-wider">
              Compare by:
            </h4>

            <div className="space-y-2 text-xs text-foreground/75 font-medium">
              {[
                { label: "Rankings & reputation", color: "#a855f7" },
                { label: "Fees & scholarships", color: "#ec4899" },
                { label: "Courses & specializations", color: "#06b6d4" },
                { label: "Campus life & location", color: "#10b981" },
                { label: "Career outcomes", color: "#f59e0b" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: c.color }}
                  />
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   3. SOCIAL PROOF
   ============================================================ */

function UniversitiesSocialProof() {
  const testimonials = [
    {
      quote:
        "Novi helped me find the perfect university based on my interests and goals. The comparison feature was a game-changer!",
      author: "Aanya",
      grade: "Grade 11",
      color: "#a855f7",
    },
    {
      quote:
        "The personalized recommendations really matched my profile. I discovered universities I never knew about!",
      author: "Rohan",
      grade: "Grade 12",
      color: "#06b6d4",
    },
    {
      quote:
        "So easy to compare universities and understand admission chances. Novi made the process simple.",
      author: "Meera",
      grade: "Grade 11",
      color: "#ec4899",
    },
  ];

  const partnerSchools = [
    { name: "DPS", subtitle: "Delhi Public School", badge: "DPS" },
    { name: "Oakridge", subtitle: "International School", badge: "OIS" },
    { name: "Pathways", subtitle: "World School", badge: "PWS" },
    { name: "Inventure", subtitle: "Academy", badge: "IA" },
    { name: "The Doon School", subtitle: "Dehradun", badge: "DS" },
  ];

  return (
    <section className="relative py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5" />
            Student Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Trusted by students,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              loved by parents.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
              style={{ borderColor: `${t.color}40` }}
            >
              <Quote
                className="w-7 h-7 mb-3 -scale-x-100"
                style={{ color: `${t.color}80` }}
              />
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-foreground/10 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-foreground/50">
                    {t.grade}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ratings strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-foreground/10 grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-3">
            <div className="p-4 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm inline-block">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-foreground">
                  4.9<span className="text-foreground/50 text-lg">/5</span>
                </span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-foreground/60 font-medium mt-1">
                From{" "}
                <span className="text-foreground/80 font-bold">
                  10,000+ students
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-4">
              Trusted by leading schools
            </p>
            <div className="flex flex-wrap items-center gap-5">
              {partnerSchools.map((school) => (
                <div key={school.name} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center font-bold text-xs text-foreground/80">
                    {school.badge}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-foreground leading-tight">
                      {school.name}
                    </h4>
                    <p className="text-[10px] text-foreground/50">
                      {school.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   4. CTA + FOOTER
   ============================================================ */

function UniversitiesCTAFooter() {
  return (
    <section className="relative pt-6 pb-12 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-foreground/10 bg-[#0c0a1f] text-white shadow-2xl">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[340px]">
                <Image
                  src="/3dboy.png"
                  alt="Novi University Mentors"
                  fill
                  priority
                  sizes="(max-width: 768px) 384px, 448px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-white">
                Your future is too important <br className="hidden sm:block" />
                to navigate without clarity.
              </h2>

              <p className="text-sm sm:text-base text-purple-300 font-medium">
                Meet Novi—the AI mentor that helps you find, compare and apply
                to the universities that truly fit you.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-600/30 hover:scale-[1.02] group"
                >
                  <span>Start Exploring Universities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md"
                >
                  Get Personalized Matches
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/70 pt-2">
                {[
                  "Free to get started",
                  "No credit card required",
                  "Takes less than 5 minutes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-foreground/10 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-base">
                  N
                </div>
                <span className="text-2xl font-bold text-foreground">
                  Novi
                </span>
              </div>

              <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
                The AI mentor and operating system for students from Grade 9 to
                their dream university.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                For Students
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/students"
                    className="hover:text-primary transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/students"
                    className="hover:text-primary transition-colors"
                  >
                    Career Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/universities"
                    className="hover:text-primary transition-colors"
                  >
                    University Explorer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                For Parents
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/parents"
                    className="hover:text-primary transition-colors"
                  >
                    Parent Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parents"
                    className="hover:text-primary transition-colors"
                  >
                    How We Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parents"
                    className="hover:text-primary transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/#about-us"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-primary transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} Novi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default function UniversitiesLowerSections() {
  return (
    <>
      <UniversitiesNextSteps />
      <UniversitiesCompareTool />
      <UniversitiesSocialProof />
      <UniversitiesCTAFooter />
    </>
  );
}