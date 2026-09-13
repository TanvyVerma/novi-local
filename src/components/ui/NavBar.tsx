'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { label: "How it Works", href: "/#how-it-works", matchPath: null },
  { label: "For Students", href: "/students", matchPath: "/students" },
  { label: "For Parents", href: "/parents", matchPath: "/parents" },
  { label: "Universities", href: "/#universities", matchPath: null },
  { label: "About Us", href: "/#about-us", matchPath: null },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-foreground/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Novi
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive =
                item.matchPath !== null &&
                pathname?.startsWith(item.matchPath)

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Link
              href="/signin"
              className="hidden md:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
            >
              Sign In
            </Link>

            <Link
              href="/careers"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm relative group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-background/60 border border-foreground/10 text-foreground hover:bg-foreground/5 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== MOBILE DRAWER ==================== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-md md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[110] w-[85%] max-w-[340px] bg-surface border-l border-foreground/10 shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/30">
                    <span className="text-white font-bold text-xs">N</span>
                  </div>
                  <span
                    className="text-lg font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Novi
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                {navLinks.map((item, i) => {
                  const isActive =
                    item.matchPath !== null &&
                    pathname?.startsWith(item.matchPath)

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-center justify-between py-3 px-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-foreground/75 hover:text-foreground hover:bg-foreground/5"
                        }`}
                      >
                        <span
                          className="text-base font-semibold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.label}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                            isActive ? "text-primary" : "text-foreground/30"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer CTAs */}
              <div className="border-t border-foreground/10 p-5 space-y-3">
                {/* Theme toggle row */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-foreground/[0.03] border border-foreground/5">
                  <span className="text-sm font-medium text-foreground/70">
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>

                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-foreground/15 text-foreground/80 font-semibold text-sm hover:bg-foreground/5 transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  href="/careers"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:opacity-95 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}