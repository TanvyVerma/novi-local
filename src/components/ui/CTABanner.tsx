"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9L12 2z" />
    </svg>
  );
}

interface CTABannerProps {
  image?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  features?: string[];
}

export default function CTABanner({
  image = "/3dboy.png",
  heading = "Your future is too important to navigate without clarity.",
  subheading = "Meet Novi—the AI mentor that helps students find direction while keeping parents informed.",
  primaryLabel = "Get Started with Novi",
  primaryHref = "/login",
  secondaryLabel = "Explore Student Dashboard",
  secondaryHref = "/login",
  features = ["Free to get started", "Built around your goals", "Stay informed without pressure"],
}: CTABannerProps) {
  return (
    <section className="relative pt-4 pb-4 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden
            bg-[radial-gradient(ellipse_at_center,rgba(108,92,231,0.10),transparent_70%)]
            dark:bg-gradient-to-br dark:from-[#0d0a1a] dark:via-[#0a0812] dark:to-[#050510]
            dark:shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <Sparkle className="absolute top-10 left-[12%] w-4 h-4 text-primary/60 animate-float" />
          <Sparkle className="absolute bottom-16 right-[18%] w-5 h-5 text-accent/50 animate-float-slow" />
          <Sparkle className="absolute top-24 right-[8%] w-3 h-3 text-primary/60 animate-float" />

          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 relative z-10">
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-primary/20 animate-spin-slow">
                <div className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[380px] animate-float-slow">
                <Image
                  src={image}
                  alt="Novi"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground dark:text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {heading}
              </h2>

              <p className="text-sm sm:text-base text-foreground/60 dark:text-foreground/70 font-medium">
                {subheading}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-light hover:opacity-95 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-[1.02] group"
                >
                  <span>{primaryLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {secondaryLabel && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl border border-foreground/15 dark:border-white/20 hover:border-foreground/30 dark:hover:border-white/40 bg-transparent dark:bg-white/5 hover:bg-foreground/5 dark:hover:bg-white/10 text-foreground dark:text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>

              {features.length > 0 && (
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-foreground/70 dark:text-white/70 pt-2">
                  {features.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 dark:text-green-400 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}