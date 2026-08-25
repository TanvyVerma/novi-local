"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const painPoints = [
  "Not sure what career you want?",
  "Don't know which subjects to choose?",
  "Wondering which university is right for you?",
  "Don't know how to build a strong profile?",
]; 

const features = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your interests, strengths and the possibilities that match you.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Plan",
    desc: "Turn your goals into a clear roadmap of subjects, skills and experiences.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Build",
    desc: "Create projects and experiences that give your interests real-world meaning.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Explore",
    desc: "Compare careers, universities, courses and opportunities without the overwhelm.",
    icon: "◎",
  },
  {
    number: "05",
    title: "Grow",
    desc: "Get ongoing guidance as your interests and goals evolve.",
    icon: "↑",
  },
];


export default function ForStudents() {
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section id="for-students" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10"  ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/15 text-accent text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
              For Students
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need
              <br />
              <span className="gradient-text">all the answers.</span>
            </h2>

            <p className="text-lg text-foreground/50 leading-relaxed max-w-xl mb-8">
              You just need a place to ask questions, explore possibilities
              and figure things out without feeling like you&apos;re already
              supposed to know everything.
            </p>

            <div className="flex flex-wrap item-center gap-4 justify-center lg:justify-start">
                <Link href="/careers" className="btn-primary group">
                  <span>Discover Careers</span>

                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>

                <span className="hidden sm:block w-px h-6 bg-foreground/10"></span>
                <span className="sm:hidden text-xs text-foreground/40">or</span>

                <Link href="#how-it-works" className="btn-secondary group">
                  See how it works
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
            
            <div className="relative w-full max-w-lg animate-float-slow">
              <Image
                src="/3dboyconfuesed.png"
                alt="Student exploring their future"
                width={600}
                height={600}
                className="w-full h-auto object-contain mix-blend-screen dark:mix-blend-lighten"
              />
              <div className="absolute top-10 -left-10 rounded-2xl border border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl p-5 shadow-xl animate-bounce-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg">
                    ✦
                  </div>
                  <div>
                    <p className="text-sm font-bold">It&apos;s okay not to know yet.</p>
                    <p className="text-xs text-foreground/40">Start with one question.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className={`rounded-3xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.04] p-8 sm:p-12 mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
              Sound familiar?
            </span>

            <h3
              className="text-3xl sm:text-4xl font-bold mt-3 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The questions get bigger as you grow.
            </h3>

            <p className="text-foreground/45 leading-relaxed">
              And searching for answers across a hundred different places
              makes everything feel harder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className="group flex items-center gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 px-6 py-5 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  ?
                </div>

                <p className="text-sm sm:text-base font-medium text-foreground/60 group-hover:text-foreground/80">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-primary/10 border border-primary/15 px-6 py-5 hover:bg-primary/20 transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              ✓
            </div>

            <p
              className="font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              That&apos;s exactly where Novi comes in.
            </p>
          </div>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-primary mb-3 block">
              One mentor. Many roles.
            </span>
            <h3 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Novi helps you move <span className="gradient-text">forward.</span>
            </h3>
            <p className="text-base text-foreground/40 mx-auto max-w-lg">
              Not by giving you a fixed answer—but by helping you make better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={feature.number}
                className="group relative rounded-3xl border border-black/5 dark:border-white/5 bg-background/40 p-8 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-foreground/20">
                    {feature.number}
                  </span>
                </div>

                <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {feature.title}
                </h4>
                <p className="text-base text-foreground/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 group relative rounded-3xl border border-black/5 dark:border-white/5 bg-gradient-to-r from-primary/5 to-accent/5 p-8 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {features[4].icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {features[4].title}
                    </h4>
                    <p className="text-base text-foreground/50 leading-relaxed max-w-2xl">
                      {features[4].desc}
                    </p>
                  </div>
                </div>
                <Link href="/signup" className="btn-primary whitespace-nowrap">
                  Start Growing →
                </Link>
              </div>
            </div>
        </div>
        

      </div>
    </section>
  );
}