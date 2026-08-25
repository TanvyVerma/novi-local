"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ForParents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Novi helped me discover career options I never knew existed. Now I have a clear plan and I'm loving the journey!",
      author: "Aarav, Grade 10",
    },
    {
      quote: "The AI roadmap is a game changer. It keeps my child focused and motivated every week.",
      author: "Priya, Parent",
    },
    {
      quote: "Our students are more goal-oriented and confident. Novi is like having a mentor for every student.",
      author: "Career Counsellor",
    },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="for-parents"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background"
    >
      {/* Seamless Background Decor */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Left Side: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/15 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              ✦ For Parents
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-foreground/90"
              style={{ fontFamily: "var(--font-display)" }}
            >
              For parents, clarity.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                For students, independence.
              </span>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg mb-8">
              Stay informed. Not involved. Novi keeps you in the loop without
              taking over their journey.
            </p>

            <Link href="/parent-dashboard" className="btn-primary group">
              Explore Parent Dashboard
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Right Side: Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md rounded-2xl border border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl p-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-black/5 dark:border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                  R
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Riya&apos;s Progress</h3>
                  <p className="text-xs text-foreground/50 font-medium">Grade 11</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 block mb-1">Career Direction</span>
                  <span className="text-[10px] font-semibold text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> On Track
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 block mb-1">Profile Strength</span>
                  <span className="text-2xl font-bold text-foreground">78%</span>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full mt-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "78%" } : {}}
                      transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 block mb-1">University Readiness</span>
                  <span className="text-2xl font-bold text-foreground">71%</span>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full mt-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "71%" } : {}}
                      transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Focus List */}
              <div>
                <h4 className="text-xs font-bold text-foreground/70 mb-3">This month&apos;s focus</h4>
                <ul className="space-y-2">
                  {["Build research experience", "Improve coding depth", "Prepare for SAT"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + (i * 0.1), type: "spring", stiffness: 100 }}
                      className="flex items-center gap-3 text-sm text-foreground/60"
                    >
                      <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= INTERACTIVE 3D TESTIMONIAL CAROUSEL ================= */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by students, loved by parents, preferred by schools.
          </motion.h3>

          <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[280px] flex items-center justify-center perspective-1000">
            
            {/* 3D Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, idx) => {
                  // Calculate relative position (0 = center, -1 = left, 1 = right)
                  const offset = (idx - currentIndex + testimonials.length) % testimonials.length;
                  const position = offset === 0 ? 0 : offset === 1 ? 1 : -1;
                  
                  const isActive = position === 0;

                  return (
                    <motion.div
                      key={idx}
                      className="absolute w-full max-w-md"
                      initial={{ opacity: 0, x: position * 200, scale: 0.8, zIndex: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4, 
                        x: position * 250, 
                        scale: isActive ? 1 : 0.85,
                        zIndex: isActive ? 10 : 0,
                        rotateY: position * -15,
                      }}
                      exit={{ opacity: 0, x: position * -200, scale: 0.8, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Card Content */}
                      <div className="relative rounded-3xl border border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                        {/* Dynamic Glow on Active */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-b ${isActive ? 'from-accent/20' : 'from-primary/10'} to-transparent blur-2xl pointer-events-none transition-all duration-700`} />
                        
                        <span className="text-6xl font-serif text-accent/30 leading-none mb-4 block">“</span>
                        <p className="text-foreground/80 leading-relaxed mb-8 h-24 overflow-hidden">
                          {testimonial.quote}
                        </p>
                        <p className="font-bold text-foreground/90 text-sm">
                          - {testimonial.author}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="group w-12 h-12 rounded-full border border-accent/20 text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group w-12 h-12 rounded-full border border-accent/20 text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}