"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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
  testimonials?: Testimonial[];
  rating?: string;
  ratingSubtext?: string;
  schools?: School[];
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
  testimonials = defaultTestimonials,
  rating = "4.9/5",
  ratingSubtext = "Average rating from 10,000+ students",
  schools = defaultSchools,
}: TestimonialsProps) {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const marqueeSchools = [...schools, ...schools];

  return (
    <section className="pt-12 pb-12 px-6 lg:px-12 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">{title}</h2>
        <div className="relative w-full max-w-4xl mx-auto h-[240px] flex items-center justify-center perspective-1000">
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
                    initial={{ opacity: 0, x: position * 200, scale: 0.8, zIndex: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0.6,
                      x: position * 250,
                      scale: isActive ? 1 : 0.85,
                      zIndex: isActive ? 10 : 0,
                      rotateY: position * -15,
                    }}
                    exit={{ opacity: 0, x: position * -200, scale: 0.8, zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative rounded-3xl border border-foreground/15 bg-background/80 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                      <span className="relative text-5xl font-serif text-primary/40 leading-none mb-3 block">&ldquo;</span>
                      <p className="relative text-foreground/80 leading-relaxed mb-6 h-20 overflow-hidden">
                        {t.quote}
                      </p>
                      <p className="relative font-bold text-foreground text-sm">
                        - {t.name}&apos;s {t.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="group w-12 h-12 rounded-full bg-background/80 border border-foreground/15 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  idx === active
                    ? "w-10 bg-primary shadow-[0_0_10px_rgba(108,92,231,0.5)]"
                    : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="group w-12 h-12 rounded-full bg-background/80 border border-foreground/15 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-16 pt-10 border-t border-foreground/10">
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
        </div>
      </div>
    </section>
  );
}