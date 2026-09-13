"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface School {
  initials: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  rating?: string;
  ratingSubtext?: string;
  schools?: School[];
  autoPlayInterval?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Novi helped me understand what my child actually needs, without turning every conversation into a discussion.",
    name: "Arjun",
    role: "Parent",
  },
  {
    quote:
      "The monthly insights from Novi are incredibly helpful. We know how to support, not what to push.",
    name: "Meera",
    role: "Parent",
  },
  {
    quote:
      "Finally a platform that keeps us informed but gives our child the space to explore and grow.",
    name: "Priya",
    role: "Parent",
  },
];

const defaultSchools: School[] = [
  { initials: "SX", name: "St. Xavier's", location: "Mumbai" },
  { initials: "VV", name: "Vasant Valley", location: "New Delhi" },
  { initials: "DPS", name: "DPS", location: "Delhi Public School" },
  { initials: "OIS", name: "Oakridge", location: "International School" },
  { initials: "PWS", name: "Pathways", location: "World School" },
  { initials: "TIS", name: "The International", location: "Bangalore" },
  { initials: "BIS", name: "Bishop's", location: "Pune" },
  { initials: "RVS", name: "Rishi Valley", location: "Andhra Pradesh" },
  { initials: "CIS", name: "CIS", location: "Chennai" },
  { initials: "HIS", name: "Harrow", location: "Bangalore" },
  { initials: "AIS", name: "American Embassy", location: "New Delhi" },
  { initials: "BMS", name: "Bombay Scottish", location: "Mumbai" },
  { initials: "MIS", name: "Mayo College", location: "Ajmer" },
  { initials: "WIS", name: "Woodstock", location: "Mussoorie" },
  { initials: "GDS", name: "Good Shepherd", location: "Ooty" },
  { initials: "DPS", name: "DPS Bangalore", location: "Bangalore" },
];

export default function Testimonials({
  title = "Loved by parents. Built for students.",
  subtitle = "Real stories from the parents and students building their futures with Novi.",
  testimonials = defaultTestimonials,
  rating = "4.9/5",
  ratingSubtext = "Average rating from 10,000+ students",
  schools = defaultSchools,
  autoPlayInterval = 3500,
  ctaLabel = "Join 10,000+ students",
  ctaHref = "/signup",
}: TestimonialsProps) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoPlayInterval]);

  const marqueeSchools = [...schools, ...schools];

  return (
    <section className="relative pt-16 pb-8 px-6 lg:px-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              parents. 
            </span>
            {" "}Built for students.
          </h2>
          <p className="text-base text-foreground/50 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        <div className="relative w-full max-w-5xl mx-auto h-[280px] flex items-center justify-center perspective-1000">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {testimonials.map((t, idx) => {
                const offset = (idx - active + testimonials.length) % testimonials.length;
                const position = offset === 0 ? 0 : offset === 1 ? 1 : -1;
                const isActive = position === 0;

                return (
                  <motion.div
                    key={idx}
                    className="absolute w-full max-w-md"
                    initial={{ opacity: 0, x: position * 220, scale: 0.7, y: 15, zIndex: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0.95,
                      x: position * 260,
                      scale: isActive ? 1 : 0.75,
                      y: isActive ? 0 : 15,
                      zIndex: isActive ? 10 : 0,
                      rotateY: position * -18,
                      filter: isActive ? "blur(0px)" : "blur(0.8px)",
                    }}
                    exit={{ opacity: 0, x: position * -220, scale: 0.7, y: 15, zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className={`relative rounded-3xl border bg-background/80 backdrop-blur-xl pt-12 pb-7 px-7 overflow-hidden transition-all duration-500 ${
                        isActive
                          ? "border-primary/60 shadow-[0_0_40px_-8px_rgba(108,92,231,0.5)] dark:shadow-[0_0_50px_-8px_rgba(108,92,231,0.6)]"
                          : "border-foreground/40 dark:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                      )}
                      <span className="absolute top-2 left-5 text-[90px] font-serif leading-none text-primary/30 dark:text-primary/40 select-none pointer-events-none">
                        &ldquo;
                      </span>
                      <p className="relative text-foreground/85 text-[15px] leading-[1.7] tracking-[-0.01em] mb-6 min-h-[80px] text-left">
                        {t.quote}
                      </p>
                      <div className="relative flex items-center gap-3 pt-4 border-t border-foreground/10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md shadow-primary/20">
                          {t.name.charAt(0)}
                        </div>
                        <div className="min-w-0 text-left flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-sm font-bold text-foreground truncate">
                              {t.name}
                            </p>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                              Verified
                            </span>
                          </div>
                          <p className="text-[11px] text-foreground/50 truncate uppercase tracking-wider">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 pt-8 border-t border-foreground/10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="shrink-0 w-full lg:w-auto">
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] dark:bg-white/[0.03] px-6 py-5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <span className="text-4xl font-bold text-foreground">{rating}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/60">{ratingSubtext}</p>
              </div>
            </div>
            <div className="hidden lg:block w-px h-16 bg-foreground/10" />
            <div className="flex-1 w-full min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/40 mb-4">
                Trusted by leading schools
              </p>

              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused]">
                  {marqueeSchools.map((school, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 flex items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.03] dark:bg-white/[0.03] px-4 py-3 min-w-[200px] hover:border-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/[0.05] dark:bg-white/[0.05] flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold tracking-wider text-foreground/70">
                          {school.initials}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground truncate">
                          {school.name}
                        </p>
                        <p className="text-[11px] text-foreground/50 truncate">
                          {school.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-light hover:opacity-95 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-[1.02] group"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}