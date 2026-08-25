// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Universities() {
//   return (
//     <>
//       <section id="universities" className="relative py-24 px-6 bg-background overflow-hidden">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               Don&apos;t just find a university. <br />
//               <span className="gradient-text">Find your university.</span>
//             </h2>
//             <p className="text-lg text-foreground/60">
//               Explore universities, courses and countries based on what matters to you.
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto mb-12">
//             <div className="glass-card rounded-2xl p-2 flex items-center">
//               <svg className="w-5 h-5 text-foreground/40 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//               <input 
//                 type="text" 
//                 placeholder="Search universities, courses or countries..." 
//                 className="flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-foreground/30 text-foreground"
//               />
//               <button className="btn-primary px-6 py-3 !rounded-xl text-sm">
//                 Search
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center gap-3 mb-16">
//             {["Country", "Course", "Subject", "Ranking", "Fees", "University Type", "Scholarships", "Entry Requirements"].map((filter) => (
//               <button 
//                 key={filter} 
//                 className="px-5 py-2.5 rounded-full border border-black/5 dark:border-white/10 bg-surface text-sm font-medium text-foreground/70 hover:border-primary/40 hover:text-primary transition-all"
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>

//           <div className="glass-card novi-gradient-border rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16">
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
//                   N
//                 </div>
//                 <p className="text-sm font-semibold text-primary uppercase tracking-wider">Novi&apos;s Recommendations</p>
//               </div>
              
//               <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
//                 Based on your interests, academics, goals and Career DNA
//               </h3>
//               <p className="text-foreground/60 mb-10 max-w-2xl">
//                 Here are universities worth exploring.
//               </p>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { name: "Stanford University", course: "Computer Science", score: "78%", desc: "Strong match for your technology and entrepreneurship goals." },
//                   { name: "MIT", course: "Engineering", score: "72%", desc: "Excellent for building deep technical skills and research." },
//                   { name: "NUS", course: "Business & Tech", score: "69%", desc: "Great global exposure with a focus on innovation." }
//                 ].map((uni) => (
//                   <div key={uni.name} className="novi-interactive-card bg-surface-elevated rounded-2xl p-6 border border-black/5 dark:border-white/10">
//                     <div className="flex justify-between items-center mb-4">
//                       <h4 className="text-lg font-bold text-foreground">{uni.name}</h4>
//                       <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{uni.score}</span>
//                     </div>
//                     <p className="text-sm font-medium text-foreground/50 mb-2">{uni.course}</p>
//                     <p className="text-sm text-foreground/60 mb-4">{uni.desc}</p>
//                     <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-light flex items-center gap-1">
//                       View Details →
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="glass-card rounded-3xl p-8 sm:p-12">
//             <h3 className="text-2xl font-bold text-foreground mb-8">Your readiness score</h3>
            
//             <div className="grid lg:grid-cols-2 gap-12">
//               <div>
//                 <div className="mb-8">
//                   <h4 className="text-xl font-bold text-foreground mb-2">Stanford University</h4>
//                   <p className="text-foreground/50 mb-4">Computer Science</p>
//                   <div className="flex items-center gap-4">
//                     <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl font-bold">72%</div>
//                     <div className="text-sm text-foreground/60">
//                       <p className="font-semibold text-foreground mb-1">Your current readiness</p>
//                       <p>Keep building your profile!</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <p className="font-semibold text-foreground mb-3">You&apos;re strong in</p>
//                   <ul className="space-y-2">
//                     {["Academic performance", "Mathematics", "Coding"].map((item) => (
//                       <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
//                         <span className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[10px]">✓</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="font-semibold text-foreground mb-3">Build more depth in</p>
//                   <ul className="space-y-2">
//                     {["Research", "Leadership", "Extracurricular profile"].map((item) => (
//                       <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
//                         <span className="w-4 h-4 rounded-full bg-accent-warm/20 text-accent-warm flex items-center justify-center text-[10px]">⚠</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-primary/[0.08] to-accent/[0.05] rounded-2xl p-8 border border-primary/10">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">N</div>
//                   <p className="text-sm font-semibold text-primary uppercase tracking-wider">Novi&apos;s Next 3 Recommendations</p>
//                 </div>

//                 <ol className="space-y-4 mb-8">
//                   <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
//                     <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</span>
//                     <span className="text-sm text-foreground/80">Complete an AI research project.</span>
//                   </li>
//                   <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
//                     <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</span>
//                     <span className="text-sm text-foreground/80">Participate in a national coding competition.</span>
//                   </li>
//                   <li className="flex items-start gap-3 bg-surface-elevated p-4 rounded-xl shadow-sm">
//                     <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
//                     <span className="text-sm text-foreground/80">Build and publish a technology project.</span>
//                   </li>
//                 </ol>

//                 <button className="btn-primary w-full">
//                   Build My Roadmap →
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//       <section className="relative py-20 px-6 bg-surface">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 
//               className="text-3xl sm:text-4xl font-bold text-foreground"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               Trusted by students, loved by parents,<br className="hidden sm:block" /> preferred by schools.
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="glass-card p-8 rounded-3xl">
//               <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
//               <p className="text-foreground/70 leading-relaxed mb-6">
//                 Novi helped me discover career options I never knew existed. Now I have a clear plan and I&apos;m loving the journey!
//               </p>
//               <div className="font-semibold text-foreground">- Aara, Grade 10</div>
//             </div>
//             <div className="glass-card p-8 rounded-3xl">
//               <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
//               <p className="text-foreground/70 leading-relaxed mb-6">
//                 The AI roadmap is a game changer. It keeps my child focused and motivated every week.
//               </p>
//               <div className="font-semibold text-foreground">- Priya, Parent</div>
//             </div>

//             <div className="glass-card p-8 rounded-3xl">
//               <div className="text-primary text-5xl font-serif leading-none mb-4">&ldquo;</div>
//               <p className="text-foreground/70 leading-relaxed mb-6">
//                 Our students are more goal-oriented and confident. Novi is like having a mentor for every student.
//               </p>
//               <div className="font-semibold text-foreground">- Career Counsellor</div>
//             </div>

//           </div>

//           <div className="glass-card flex flex-col lg:flex-row items-center justify-between gap-12 p-8 rounded-3xl">
//             <div className="text-center lg:text-left">
//               <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
//                 <span className="text-4xl font-bold text-foreground">4.9/5</span>
//                 <div className="flex gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//               <p className="text-foreground/50 text-sm">Average Rating<br />From 10,000+ reviews</p>
//             </div>

//             <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
//               <span className="text-lg font-bold text-foreground/70 tracking-widest">DPS</span>
//               <span className="text-lg font-bold text-foreground/70 tracking-widest">Oakridge</span>
//               <span className="text-lg font-bold text-foreground/70 tracking-widest">PATHWAYS</span>
//               <span className="text-lg font-bold text-foreground/70 tracking-widest">Inventure</span>
//               <span className="text-lg font-bold text-foreground/70 tracking-widest">THE DOON SCHOOL</span>
//             </div>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }





















// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import dynamic from 'next/dynamic'
// import { Magnetic } from '../components/ui/Magnetic'

// const FloatingOrb3D = dynamic(() => import('../components/3d/FloatingOrb'), { ssr: false })


// export default function Universities() {
//   const [searchValue, setSearchValue] = useState('')
  
//   const universities = [
//     { name: "Stanford University", course: "Computer Science", score: 78, desc: "Strong match for your technology and entrepreneurship goals.", color: "from-purple-500/20 to-pink-500/20" },
//     { name: "MIT", course: "Engineering", score: 72, desc: "Excellent for building deep technical skills and research.", color: "from-blue-500/20 to-cyan-500/20" },
//     { name: "NUS", course: "Business & Tech", score: 69, desc: "Great global exposure with a focus on innovation.", color: "from-emerald-500/20 to-teal-500/20" },
//   ]
  
//   return (
//     <section id="universities" className="relative py-24 px-6 overflow-hidden">
//       {/* 3D Background */}
//       <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
//         <FloatingOrb3D />
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="max-w-3xl mx-auto text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
//             Don't just find a university. <br />
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Find your university.</span>
//           </h2>
//           <p className="text-lg text-foreground/60">Explore universities, courses and countries based on what matters to you.</p>
//         </motion.div>
        
//         {/* Search Bar with Glass Effect */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="max-w-3xl mx-auto mb-12"
//         >
//           <div className="glass-card rounded-2xl p-2 flex items-center border border-white/10 backdrop-blur-xl">
//             <svg className="w-5 h-5 text-foreground/40 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input 
//               type="text" 
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               placeholder="Search universities, courses or countries..." 
//               className="flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-foreground/30 text-foreground"
//             />
//             <button className="btn-primary px-6 py-3 !rounded-xl text-sm relative group overflow-hidden">
//               <span className="relative z-10">Search</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           </div>
//         </motion.div>
        
//         {/* Filter Chips with Hover Animation */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-16"
//         >
//           {["Country", "Course", "Subject", "Ranking", "Fees", "University Type", "Scholarships", "Entry Requirements"].map((filter, index) => (
//             <motion.button 
//               key={filter}
//               whileHover={{ y: -2, scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-foreground/70 hover:border-purple-500/40 hover:text-purple-400 transition-all duration-300 backdrop-blur-sm"
//             >
//               {filter}
//             </motion.button>
//           ))}
//         </motion.div>
        
//         {/* University Cards with 3D Flip Effect */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16 border border-white/10 backdrop-blur-xl"
//         >
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">N</div>
//               <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Novi's Recommendations</p>
//             </div>
            
//             <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
//               Based on your interests, academics, goals and Career DNA
//             </h3>
//             <p className="text-foreground/60 mb-10 max-w-2xl">Here are universities worth exploring.</p>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {universities.map((uni, index) => (
//                 <motion.div
//                   key={uni.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                 >
//                   <div className="glass-card rounded-2xl p-6 border border-white/10 backdrop-blur-xl h-full transition-all duration-300">
//                     <div className="flex justify-between items-center mb-4">
//                       <h4 className="text-lg font-bold text-foreground">{uni.name}</h4>
//                       <motion.span 
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
//                         className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full"
//                       >
//                         {uni.score}%
//                       </motion.span>
//                     </div>
//                     <p className="text-sm font-medium text-foreground/50 mb-2">{uni.course}</p>
//                     <p className="text-sm text-foreground/60 mb-4">{uni.desc}</p>
//                     <Magnetic strength={10}>
//                       <Link href="#" className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group">
//                         View Details 
//                         <span className="transition-transform group-hover:translate-x-1">→</span>
//                       </Link>
//                     </Magnetic>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
        
//         {/* Readiness Score with Progress Animation */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-xl"
//         >
//           <h3 className="text-2xl font-bold text-foreground mb-8">Your readiness score</h3>
//           <div className="grid lg:grid-cols-2 gap-12">
//             <div>
//               <div className="mb-8">
//                 <h4 className="text-xl font-bold text-foreground mb-2">Stanford University</h4>
//                 <p className="text-foreground/50 mb-4">Computer Science</p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold">
//                     72%
//                   </div>
//                   <div className="text-sm text-foreground/60">
//                     <p className="font-semibold text-foreground mb-1">Your current readiness</p>
//                     <p>Keep building your profile!</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mb-8">
//                 <p className="font-semibold text-foreground mb-3">You're strong in</p>
//                 {["Academic performance", "Mathematics", "Coding"].map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
//                     <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">✓</span>
//                     {item}
//                   </div>
//                 ))}
//               </div>
              
//               <div>
//                 <p className="font-semibold text-foreground mb-3">Build more depth in</p>
//                 {["Research", "Leadership", "Extracurricular profile"].map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
//                     <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">⚠</span>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-8 border border-purple-500/20">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">N</div>
//                 <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Novi's Next 3 Recommendations</p>
//               </div>
              
//               <ol className="space-y-4 mb-8">
//                 {[
//                   "Complete an AI research project.",
//                   "Participate in a national coding competition.",
//                   "Build and publish a technology project.",
//                 ].map((item, index) => (
//                   <motion.li 
//                     key={item}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
//                   >
//                     <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-xs font-bold">{index + 1}</span>
//                     <span className="text-sm text-foreground/80">{item}</span>
//                   </motion.li>
//                 ))}
//               </ol>
              
//               <Magnetic strength={14}>
//                 <button className="btn-primary w-full relative group overflow-hidden">
//                   <span className="relative z-10">Build My Roadmap →</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </button>
//               </Magnetic>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





















'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// University logos data (using emoji/placeholders - replace with actual images)
const universities = [
  { name: "Stanford", color: "from-red-500 to-red-600", emoji: "🌲" },
  { name: "MIT", color: "from-red-600 to-red-700", emoji: "⚡" },
  { name: "Harvard", color: "from-rose-800 to-rose-900", emoji: "📚" },
  { name: "Oxford", color: "from-blue-700 to-blue-800", emoji: "🎓" },
  { name: "Cambridge", color: "from-blue-600 to-blue-700", emoji: "🏛️" },
  { name: "NUS", color: "from-orange-500 to-orange-600", emoji: "🌏" },
  { name: "ETH Zurich", color: "from-cyan-600 to-cyan-700", emoji: "🔬" },
  { name: "Imperial", color: "from-blue-500 to-blue-600", emoji: "🧪" },
]

export default function Universities() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10])

  // Auto-rotate carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % universities.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Get 3 visible universities (current, next, previous)
  const getVisibleUniversities = () => {
    const items = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + universities.length) % universities.length
      items.push({ ...universities[index], index, isCenter: i === 0 })
    }
    return items
  }

  const visibleUniversities = getVisibleUniversities()

  return (
    <section 
      ref={sectionRef} 
      id="universities" 
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-surface to-background"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          
          {/* LEFT SIDE - Heading Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative"
          >
            {/* Floating Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Discover Your Future
            </motion.span>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-foreground/80"
              >
                Don't just find
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-foreground/80"
              >
                a university.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6, 
                  duration: 0.7, 
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
              >
                Find your university.
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-lg"
            >
              Explore universities, courses and countries based on what matters to you.
            </motion.p>

            {/* Animated Decorative Line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-8"
            />

            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-foreground/40">Trusted by 10,000+ students</span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Creative 3D University Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Background Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-emerald-500/10 animate-spin-slow" />
              <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-500/10 animate-spin-slower" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/10 animate-spin-slowest" />
            </div>

            {/* 3D Carousel */}
            <div className="relative w-full max-w-md h-[400px] perspective-1000">
              <AnimatePresence mode="wait">
                {visibleUniversities.map((uni, idx) => {
                  const isCenter = uni.isCenter
                  const offset = idx - 1 // -1, 0, 1
                  
                  return (
                    <motion.div
                      key={`${uni.name}-${currentIndex}-${idx}`}
                      initial={{ 
                        opacity: 0,
                        scale: 0.5,
                        y: 100,
                        rotateY: 45 * offset
                      }}
                      animate={{ 
                        opacity: isCenter ? 1 : 0.6,
                        scale: isCenter ? 1 : 0.7,
                        y: isCenter ? 0 : 20 * offset,
                        x: isCenter ? 0 : 40 * offset,
                        rotateY: 0,
                        zIndex: isCenter ? 10 : 1
                      }}
                      exit={{ 
                        opacity: 0,
                        scale: 0.5,
                        y: -100,
                        rotateY: -45 * offset
                      }}
                      transition={{ 
                        duration: 0.7,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      onMouseEnter={() => isCenter && setHoveredIndex(currentIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`absolute inset-0 flex items-center justify-center ${
                        isCenter ? 'cursor-pointer' : 'pointer-events-none'
                      }`}
                    >
                      <motion.div 
                        whileHover={isCenter ? { 
                          scale: 1.05,
                          rotate: 2,
                          transition: { duration: 0.2 }
                        } : {}}
                        className={`
                          w-48 h-48 rounded-3xl flex flex-col items-center justify-center
                          bg-gradient-to-br ${uni.color}
                          shadow-2xl shadow-emerald-500/20
                          relative overflow-hidden
                          ${isCenter ? 'ring-4 ring-emerald-400/30' : ''}
                        `}
                      >
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        
                        {/* University Emoji */}
                        <span className="text-6xl relative z-10 mb-2">
                          {uni.emoji}
                        </span>
                        
                        {/* University Name */}
                        <span className="text-white font-bold text-lg relative z-10">
                          {uni.name}
                        </span>
                        
                        {/* Small decorative dot */}
                        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white/30 animate-pulse" />
                        
                        {/* Shimmer effect on hover */}
                        {isCenter && hoveredIndex === currentIndex && (
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            style={{ rotate: '30deg' }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {universities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-6 bg-emerald-400' 
                        : 'bg-foreground/20 hover:bg-foreground/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
                  initial={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* "Explore" Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -top-8 -right-8 glass-card px-4 py-2 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30"
            >
              ✦ Explore Now
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}