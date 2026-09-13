// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Compass,
//   Target,
//   Scale,
//   FileCheck,
//   ArrowRight,
//   ArrowUpRight,
//   Search,
//   Sparkles,
//   Heart,
//   ChevronDown,
//   SlidersHorizontal,
//   CheckCircle2,
//   Clock,
//   Building2,
//   Users,
//   TrendingUp,
//   ChevronRight,
//   MapPin,
// } from "lucide-react";

// /* ============================================================
//    SHARED DUMMY DATA
//    ============================================================ */

// const universitiesData = [
//   {
//     num: "01",
//     id: "stanford",
//     name: "Stanford University",
//     location: "USA · California",
//     country: "USA",
//     rank: 3,
//     fees: "$78,000 / year",
//     course: "Computer Science",
//     initial: "S",
//     color: "#a855f7",
//     image: "/stanford-campus.jpg",
//     acceptance: 4,
//   },
//   {
//     num: "02",
//     id: "mit",
//     name: "MIT",
//     location: "USA · Cambridge",
//     country: "USA",
//     rank: 1,
//     fees: "$82,000 / year",
//     course: "Computer Science",
//     initial: "M",
//     color: "#ec4899",
//     image: "/mit-campus.jpg",
//     acceptance: 7,
//   },
//   {
//     num: "03",
//     id: "oxford",
//     name: "Oxford University",
//     location: "UK · Oxford",
//     country: "UK",
//     rank: 5,
//     fees: "$68,000 / year",
//     course: "Computer Science",
//     initial: "O",
//     color: "#06b6d4",
//     image: "/stanford-campus.jpg",
//     acceptance: 17,
//   },
//   {
//     num: "04",
//     id: "berkeley",
//     name: "UC Berkeley",
//     location: "USA · California",
//     country: "USA",
//     rank: 4,
//     fees: "$72,000 / year",
//     course: "EECS",
//     initial: "B",
//     color: "#10b981",
//     image: "/mit-campus.jpg",
//     acceptance: 14,
//   },
//   {
//     num: "05",
//     id: "harvard",
//     name: "Harvard University",
//     location: "USA · Cambridge",
//     country: "USA",
//     rank: 2,
//     fees: "$80,000 / year",
//     course: "Computer Science",
//     initial: "H",
//     color: "#f59e0b",
//     image: "/stanford-campus.jpg",
//     acceptance: 5,
//   },
//   {
//     num: "06",
//     id: "cambridge",
//     name: "Cambridge University",
//     location: "UK · Cambridge",
//     country: "UK",
//     rank: 6,
//     fees: "$65,000 / year",
//     course: "Computer Science",
//     initial: "C",
//     color: "#8b5cf6",
//     image: "/mit-campus.jpg",
//     acceptance: 21,
//   },
// ];

// /* ============================================================
//    1. UNIVERSITY JOURNEY
//    ============================================================ */

// function UniversitiesJourney() {
//   const [active, setActive] = useState<number | null>(null);

//   const steps = [
//     {
//       step: "01",
//       title: "Discover",
//       desc: "Explore universities, courses and countries you're interested in.",
//       icon: Compass,
//       color: "#10b981",
//     },
//     {
//       step: "02",
//       title: "Find Your Fit",
//       desc: "Get personalized recommendations based on your profile and goals.",
//       icon: Target,
//       color: "#a855f7",
//     },
//     {
//       step: "03",
//       title: "Compare",
//       desc: "See side-by-side comparisons of universities, courses and fees.",
//       icon: Scale,
//       color: "#06b6d4",
//     },
//     {
//       step: "04",
//       title: "Apply",
//       desc: "Get step-by-step guidance on applications, deadlines and scholarships.",
//       icon: FileCheck,
//       color: "#f59e0b",
//     },
//   ];

//   return (
//     <section className="relative pt-10 pb-12 px-6 lg:px-12 overflow-visible">
//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//           <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
//             <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
//               <Sparkles className="w-3 h-3" />
//               Your University Journey
//             </span>

//             <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]">
//               Four steps to find,{" "}
//               <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
//                 compare, and apply.
//               </span>
//             </h2>

//             <p className="text-sm text-foreground/60 leading-relaxed max-w-md">
//               From exploring your interests to landing on your dream campus,
//               Novi walks every step with you.
//             </p>

//             <div className="space-y-2.5 pt-3">
//               {[
//                 "Explore global universities",
//                 "Get personalized matches",
//                 "Compare side-by-side",
//                 "Apply with confidence",
//               ].map((line, i) => {
//                 const colors = ["#10b981", "#a855f7", "#06b6d4", "#f59e0b"];
//                 return (
//                   <div
//                     key={i}
//                     className="flex items-center gap-2.5 text-[12px] text-foreground/70"
//                   >
//                     <div
//                       className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
//                       style={{ backgroundColor: `${colors[i]}15` }}
//                     >
//                       <CheckCircle2
//                         className="w-3 h-3"
//                         style={{ color: colors[i] }}
//                       />
//                     </div>
//                     {line}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
//             {steps.map((step, i) => {
//               const Icon = step.icon;
//               const isActive = active === i;

//               return (
//                 <motion.button
//                   key={step.title}
//                   type="button"
//                   onClick={() => setActive(isActive ? null : i)}
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.35, delay: i * 0.06 }}
//                   className="group relative p-5 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 bg-background/40 dark:bg-transparent"
//                   style={{
//                     borderColor: isActive ? step.color : `${step.color}40`,
//                     boxShadow: isActive ? `0 0 24px ${step.color}30` : "none",
//                   }}
//                 >
//                   <span
//                     className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
//                     style={{
//                       borderColor: `${step.color}70`,
//                       color: step.color,
//                     }}
//                   >
//                     {step.step}
//                   </span>

//                   <div className="flex items-start justify-between mb-3 pt-1">
//                     <div
//                       className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
//                       style={{
//                         backgroundColor: `${step.color}15`,
//                         border: `1px solid ${step.color}40`,
//                       }}
//                     >
//                       <Icon className="w-5 h-5" style={{ color: step.color }} />
//                     </div>
//                     <span
//                       className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5"
//                       style={{ border: `1px solid ${step.color}40` }}
//                     >
//                       <ArrowUpRight
//                         className="w-3 h-3"
//                         style={{ color: step.color }}
//                       />
//                     </span>
//                   </div>

//                   <h3
//                     className="text-base font-black tracking-tight mb-1.5 transition-colors"
//                     style={{ color: isActive ? step.color : undefined }}
//                   >
//                     {step.title}
//                   </h3>
//                   <p className="text-[12px] text-foreground/60 leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    2. EXPLORE GRID
//    ============================================================ */

// function UniversitiesExploreGrid() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeChip, setActiveChip] = useState<string | null>(null);
//   const [favorites, setFavorites] = useState<Record<string, boolean>>({
//     stanford: true,
//   });
//   const [compared, setCompared] = useState<Record<string, boolean>>({});

//   const popularSearches = [
//     "USA",
//     "UK",
//     "Canada",
//     "Australia",
//     "Computer Science",
//     "Business",
//   ];

//   const toggleFavorite = (id: string) => {
//     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const toggleCompare = (id: string) => {
//     setCompared((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const filtered = universitiesData.filter((u) => {
//     const query = (searchTerm || activeChip || "").toLowerCase();
//     if (!query) return true;
//     return (
//       u.name.toLowerCase().includes(query) ||
//       u.country.toLowerCase().includes(query) ||
//       u.course.toLowerCase().includes(query)
//     );
//   });

//   return (
//     <section className="relative pt-12 pb-8 px-6 lg:px-12 overflow-hidden">
//       <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//           {/* LEFT */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="space-y-4">
//               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
//                 <Sparkles className="w-3.5 h-3.5" />
//                 Explore Universities
//               </span>

//               <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
//                 Find campuses{" "}
//                 <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
//                   worldwide.
//                 </span>
//               </h2>

//               <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
//                 Search, filter and find the best universities for your future.
//               </p>
//             </div>

//             <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] backdrop-blur-sm overflow-hidden">
//               <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

//               <div className="relative p-5 space-y-5">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => {
//                       setSearchTerm(e.target.value);
//                       setActiveChip(null);
//                     }}
//                     placeholder="Search universities or countries..."
//                     className="w-full px-4 py-3 pl-11 rounded-xl bg-background/60 border border-foreground/15 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm text-foreground placeholder:text-foreground/40 transition-all"
//                   />
//                   <Search className="w-4 h-4 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
//                     Popular searches
//                   </p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {popularSearches.map((chip) => {
//                       const isActive = activeChip === chip;
//                       return (
//                         <button
//                           key={chip}
//                           onClick={() => {
//                             if (isActive) {
//                               setActiveChip(null);
//                               setSearchTerm("");
//                             } else {
//                               setActiveChip(chip);
//                               setSearchTerm(chip);
//                             }
//                           }}
//                           className={`text-[11px] px-3 py-1.5 rounded-full border transition-all font-medium ${
//                             isActive
//                               ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
//                               : "bg-background/50 border-foreground/10 text-foreground/70 hover:border-primary/40 hover:text-primary"
//                           }`}
//                         >
//                           {chip}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="pt-3.5 border-t border-foreground/10">
//                   <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
//                     Filter by
//                   </p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {["Country", "Course", "Ranking", "Fees"].map((f) => (
//                       <button
//                         key={f}
//                         className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 border border-foreground/10 text-[11px] text-foreground/70 hover:border-foreground/25"
//                       >
//                         {f}
//                         <ChevronDown className="w-3 h-3 text-foreground/40" />
//                       </button>
//                     ))}
//                     <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-[11px]">
//                       <SlidersHorizontal className="w-3 h-3" />
//                       More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT — Cards with image headers */}
//           <div className="lg:col-span-8 space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
//                 <Sparkles className="w-3.5 h-3.5" />
//                 <span>Top Universities</span>
//               </div>
//               <span className="text-xs text-foreground/50 font-medium">
//                 {filtered.length} {filtered.length === 1 ? "result" : "results"}
//               </span>
//             </div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filtered.map((item, i) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 12 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.35, delay: i * 0.04 }}
//                   className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col bg-background/40 dark:bg-transparent"
//                   style={{ border: `1px solid ${item.color}40` }}
//                 >
//                   {/* Numbered badge */}
//                   <span
//                     className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center z-20"
//                     style={{
//                       borderColor: `${item.color}70`,
//                       color: item.color,
//                     }}
//                   >
//                     {item.num}
//                   </span>

//                   {/* Campus image header */}
//                   <div className="relative w-full h-36 overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                     {/* Heart button */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleFavorite(item.id);
//                       }}
//                       aria-label="Save"
//                       className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110"
//                     >
//                       <Heart
//                         className="w-3.5 h-3.5"
//                         style={{
//                           color: favorites[item.id] ? "#ec4899" : "#fff",
//                           fill: favorites[item.id] ? "#ec4899" : "transparent",
//                         }}
//                       />
//                     </button>

//                     {/* Location pill */}
//                     <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] text-white font-medium">
//                       <MapPin className="w-2.5 h-2.5" />
//                       {item.location}
//                     </span>
//                   </div>

//                   {/* Body */}
//                   <div className="p-4 space-y-2.5 flex-1 flex flex-col">
//                     <h4 className="font-bold text-sm text-foreground leading-tight truncate">
//                       {item.name}
//                     </h4>

//                     <div className="flex items-center gap-2 text-[11px]">
//                       <span
//                         className="font-extrabold"
//                         style={{ color: item.color }}
//                       >
//                         #{item.rank} Global
//                       </span>
//                       <span className="text-foreground/30">·</span>
//                       <span className="text-foreground/60">
//                         {item.fees}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2 text-[11px] text-foreground/55">
//                       <span>{item.course}</span>
//                     </div>

//                     <div className="pt-2 mt-auto border-t border-foreground/10 flex items-center justify-between gap-2">
//                       <button
//                         onClick={() => toggleCompare(item.id)}
//                         className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1.5 rounded-lg transition-all"
//                         style={{
//                           color: item.color,
//                           border: `1px solid ${
//                             compared[item.id] ? item.color : `${item.color}40`
//                           }`,
//                           backgroundColor: compared[item.id]
//                             ? `${item.color}15`
//                             : "transparent",
//                         }}
//                       >
//                         <div
//                           className="w-3 h-3 rounded border flex items-center justify-center"
//                           style={{ borderColor: item.color }}
//                         >
//                           {compared[item.id] && (
//                             <CheckCircle2
//                               className="w-3 h-3"
//                               style={{ color: item.color }}
//                             />
//                           )}
//                         </div>
//                         {compared[item.id] ? "Added" : "Compare"}
//                       </button>

//                       <span
//                         className="text-[10px] font-bold"
//                         style={{ color: item.color }}
//                       >
//                         {item.acceptance}% admit
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    3. RECOMMENDATIONS
//    ============================================================ */

// function UniversitiesRecommendations() {
//   const matches = [
//     {
//       num: "1",
//       name: "Stanford University",
//       sub: "Strong match for your CS interest",
//       match: 92,
//       color: "#a855f7",
//       image: "/stanford-campus.jpg",
//     },
//     {
//       num: "2",
//       name: "MIT",
//       sub: "Matches your academic profile",
//       match: 89,
//       color: "#ec4899",
//       image: "/mit-campus.jpg",
//     },
//     {
//       num: "3",
//       name: "Oxford University",
//       sub: "Great fit for global ambitions",
//       match: 85,
//       color: "#06b6d4",
//       image: "/stanford-campus.jpg",
//     },
//     {
//       num: "4",
//       name: "UC Berkeley",
//       sub: "Aligns with your innovation streak",
//       match: 78,
//       color: "#10b981",
//       image: "/mit-campus.jpg",
//     },
//   ];

//   return (
//     <section className="relative py-16 px-6 lg:px-12 overflow-hidden">
//       <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative">
//         <div className="max-w-3xl mb-10 space-y-3">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
//             <Sparkles className="w-3.5 h-3.5" />
//             Personalized
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
//             Get personalized{" "}
//             <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
//               recommendations.
//             </span>
//           </h2>
//           <p className="text-sm sm:text-base text-foreground/60">
//             Based on your profile, here are your top university matches.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-6 items-stretch">
//           {/* Left — Novi prompt */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 p-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] flex flex-col items-center text-center space-y-3"
//           >
//             <div className="p-3 rounded-xl bg-primary/10 border border-primary/25 text-[11px] font-medium text-foreground/85 leading-snug">
//               <span className="font-bold text-primary block mb-0.5">
//                 Novi AI
//               </span>
//               Based on your profile, here are your top matches!
//             </div>

//             <div className="relative w-36 h-36">
//               <Image
//                 src="/student-mascot-girl.png"
//                 alt="Novi Mentor"
//                 fill
//                 className="object-contain drop-shadow-xl"
//               />
//             </div>
//           </motion.div>

//           {/* Center — Matches with thumbnails */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-6 p-5 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm"
//           >
//             <h3 className="font-bold text-sm text-foreground mb-3.5">
//               Your Top University Matches
//             </h3>

//             <div className="space-y-2.5">
//               {matches.map((item) => (
//                 <div
//                   key={item.name}
//                   className="p-2.5 rounded-xl flex items-center justify-between gap-3 transition-all cursor-pointer hover:-translate-y-0.5 group"
//                   style={{
//                     border: `1px solid ${item.color}30`,
//                     backgroundColor: `${item.color}05`,
//                   }}
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 border"
//                       style={{ borderColor: `${item.color}40` }}
//                     >
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         fill
//                         sizes="36px"
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="min-w-0">
//                       <h4 className="font-bold text-xs text-foreground truncate">
//                         {item.name}
//                       </h4>
//                       <p className="text-[10px] text-foreground/55 truncate">
//                         {item.sub}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 shrink-0">
//                     <span
//                       className="text-xs font-black"
//                       style={{ color: item.color }}
//                     >
//                       {item.match}%
//                     </span>
//                     <ChevronRight
//                       className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
//                       style={{ color: item.color }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pt-3 mt-3 border-t border-foreground/10">
//               <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors group">
//                 View all matches
//                 <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
//               </button>
//             </div>
//           </motion.div>

//           {/* Right — Why */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 p-5 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm space-y-3"
//           >
//             <h4 className="font-bold text-sm text-foreground">
//               Why these matches?
//             </h4>

//             <p className="text-[11px] text-foreground/65 leading-relaxed">
//               Based on your interests, strengths and preferences.
//             </p>

//             <div className="space-y-2 pt-1">
//               {[
//                 { label: "Career DNA", color: "#a855f7" },
//                 { label: "Goals & roadmap", color: "#06b6d4" },
//                 { label: "Preferences", color: "#10b981" },
//                 { label: "Location & budget", color: "#f59e0b" },
//                 { label: "Future scope", color: "#ec4899" },
//               ].map((point) => (
//                 <div
//                   key={point.label}
//                   className="flex items-center gap-2 text-[11px] text-foreground/75"
//                 >
//                   <CheckCircle2
//                     className="w-3 h-3 shrink-0"
//                     style={{ color: point.color }}
//                   />
//                   <span>{point.label}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="text-[11px] font-bold text-gradient italic pt-2">
//               Personalized just for you! ✨
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    4. DEEP DIVE
//    ============================================================ */


// function UniversitiesDeepDive() {
//   const [activeTab, setActiveTab] = useState("Overview");

//   const tabs = [
//     { key: "Overview", color: "#a855f7" },
//     { key: "Courses", color: "#06b6d4" },
//     { key: "Campus Life", color: "#10b981" },
//     { key: "Outcomes", color: "#f59e0b" },
//   ];

//   const tabContents: Record<string, string> = {
//     Overview:
//       "A world-renowned research university known for innovation, entrepreneurship and academic excellence.",
//     Courses:
//       "Top-ranked programs in CS, AI, Bioengineering, Economics and Management Science with dual-degree options.",
//     "Campus Life":
//       "Silicon Valley location with 8,180 acres, 600+ student orgs, and proximity to global tech giants.",
//     Outcomes:
//       "94% graduate employment within 6 months, $145,000 average STEM salary, strong alumni network.",
//   };

//   const activeColor = tabs.find((t) => t.key === activeTab)?.color ?? "#a855f7";

//   const admissionRows = [
//     { label: "Reach", pct: 15, color: "#f43f5e" },
//     { label: "Match", pct: 65, color: "#10b981" },
//     { label: "Safe", pct: 20, color: "#06b6d4" },
//   ];

//   const quickStats = [
//     { icon: Clock, value: "4 yrs", label: "Duration" },
//     { icon: Building2, value: "Private", label: "Type" },
//     { icon: Users, value: "6:1", label: "Ratio" },
//   ];

//   return (
//     <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
//       <div className="absolute top-1/3 right-[10%] w-[420px] h-[420px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative space-y-6">
//         {/* ==================== HEADER ==================== */}
//         <div className="max-w-3xl space-y-3">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
//             <Sparkles className="w-3.5 h-3.5" />
//             University Details
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
//             Deep dive into{" "}
//             <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
//               your shortlist.
//             </span>
//           </h2>
//         </div>

//         {/* ==================== MAIN CARD ==================== */}
//         <div className="grid lg:grid-cols-12 gap-6 items-stretch">
//           {/* ============ LEFT: Profile (3 cols) ============ */}
//           <div
//             className="lg:col-span-3 relative rounded-2xl border p-4 space-y-3 bg-background/40 dark:bg-transparent"
//             style={{ borderColor: "#a855f740" }}
//           >
//             <span
//               className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center z-10"
//               style={{ borderColor: "#a855f770", color: "#a855f7" }}
//             >
//               01
//             </span>

//             {/* Image */}
//             <div className="relative w-full h-28 rounded-xl overflow-hidden border border-primary/20">
//               <Image
//                 src="/stanford-campus.jpg"
//                 alt="Stanford"
//                 fill
//                 sizes="300px"
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] text-white font-medium">
//                 <MapPin className="w-2.5 h-2.5" />
//                 California
//               </span>
//             </div>

//             {/* Name row */}
//             <div className="flex items-start justify-between gap-2">
//               <div className="min-w-0">
//                 <h3 className="font-extrabold text-base text-foreground leading-tight">
//                   Stanford 🌲
//                 </h3>
//                 <p className="text-[11px] text-foreground/55 mt-0.5">
//                   USA · California
//                 </p>
//               </div>
//               <button aria-label="Save" className="shrink-0 mt-0.5">
//                 <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
//               </button>
//             </div>

//             {/* Stats row — single line */}
//             <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
//               <div>
//                 <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold mb-0.5">
//                   Rank
//                 </p>
//                 <p className="text-[13px] font-black text-primary">#3</p>
//               </div>
//               <div className="w-px h-6 bg-foreground/10" />
//               <div>
//                 <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold mb-0.5">
//                   Fees
//                 </p>
//                 <p className="text-[13px] font-black text-foreground">$78k</p>
//               </div>
//             </div>

//             <button className="w-full py-2 rounded-xl bg-primary text-white font-bold text-[11px] hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
//               Compare
//             </button>
//           </div>

//           {/* ============ CENTER: Tabs + Content (6 cols) ============ */}
//           <div
//             className="lg:col-span-6 relative rounded-2xl border p-4 space-y-3 bg-background/40 dark:bg-transparent"
//             style={{ borderColor: `${activeColor}40` }}
//           >
//             <span
//               className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center z-10"
//               style={{ borderColor: `${activeColor}70`, color: activeColor }}
//             >
//               02
//             </span>

//             {/* Tabs */}
//             <div className="flex flex-wrap gap-1.5">
//               {tabs.map((tab) => {
//                 const isActive = activeTab === tab.key;
//                 return (
//                   <button
//                     key={tab.key}
//                     onClick={() => setActiveTab(tab.key)}
//                     className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all"
//                     style={{
//                       backgroundColor: isActive ? tab.color : "transparent",
//                       color: isActive ? "#fff" : undefined,
//                       border: `1px solid ${
//                         isActive ? tab.color : `${tab.color}40`
//                       }`,
//                     }}
//                   >
//                     {tab.key}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Content */}
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -5 }}
//                 transition={{ duration: 0.2 }}
//                 className="text-[13px] text-foreground/75 leading-relaxed min-h-[52px] pt-1"
//               >
//                 {tabContents[activeTab]}
//               </motion.p>
//             </AnimatePresence>

//             {/* Quick stats — inline row */}
//             <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-foreground/10">
//               {quickStats.map((stat) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div
//                     key={stat.label}
//                     className="flex items-center gap-2 p-2.5 rounded-xl border"
//                     style={{ borderColor: `${activeColor}25` }}
//                   >
//                     <div
//                       className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
//                       style={{ backgroundColor: `${activeColor}15` }}
//                     >
//                       <Icon
//                         className="w-3.5 h-3.5"
//                         style={{ color: activeColor }}
//                       />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[11px] font-bold text-foreground leading-none">
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] text-foreground/50 mt-0.5">
//                         {stat.label}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ============ RIGHT: Admission chances (3 cols) ============ */}
//           <div
//             className="lg:col-span-3 relative rounded-2xl border p-4 space-y-3 bg-background/40 dark:bg-transparent"
//             style={{ borderColor: "#10b98140" }}
//           >
//             <span
//               className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center z-10"
//               style={{ borderColor: "#10b98170", color: "#10b981" }}
//             >
//               03
//             </span>

//             <div className="flex items-center gap-2 pt-1">
//               <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
//                 <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
//               </div>
//               <h4 className="text-[12px] font-bold text-foreground">
//                 Admission Chances
//               </h4>
//             </div>

//             {/* Compact rows */}
//             <div className="space-y-2.5 pt-1">
//               {admissionRows.map((row) => (
//                 <div key={row.label} className="space-y-1">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-1.5">
//                       <span
//                         className="w-1.5 h-1.5 rounded-full"
//                         style={{ backgroundColor: row.color }}
//                       />
//                       <span className="text-[11px] font-bold text-foreground">
//                         {row.label}
//                       </span>
//                     </div>
//                     <span
//                       className="text-[11px] font-black"
//                       style={{ color: row.color }}
//                     >
//                       {row.pct}%
//                     </span>
//                   </div>
//                   <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${row.pct}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.9, ease: "easeOut" }}
//                       className="h-full rounded-full"
//                       style={{
//                         backgroundColor: row.color,
//                         opacity: 0.75,
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Footer hint */}
//             <div className="pt-3 mt-1 border-t border-foreground/10">
//               <p className="text-[10px] text-foreground/50 leading-relaxed">
//                 Based on your profile strength of{" "}
//                 <span className="text-emerald-500 font-bold">78%</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ============================================================
//    DEFAULT EXPORT
//    ============================================================ */

// export default function UniversitiesMiddleSections() {
//   return (
//     <>
//       <UniversitiesJourney />
//       <UniversitiesExploreGrid />
//       <UniversitiesRecommendations />
//       <UniversitiesDeepDive />
//     </>
//   ); 
// }


































"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Compass,
  Target,
  Scale,
  FileCheck,
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  Heart,
  ChevronDown,
  SlidersHorizontal,
  CheckCircle2,
  Clock,
  Building2,
  Users,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from "lucide-react";

/* ============================================================
   SHARED DATA
   ============================================================ */

const universitiesData = [
  {
    id: "stanford",
    name: "Stanford University",
    location: "USA · California",
    country: "USA",
    rank: 3,
    fees: "$78,000 / year",
    course: "Computer Science",
    color: "#a855f7",
    image: "/stanford-campus.jpg",
    admit: 4,
  },
  {
    id: "mit",
    name: "MIT",
    location: "USA · Cambridge",
    country: "USA",
    rank: 1,
    fees: "$82,000 / year",
    course: "Computer Science",
    color: "#ec4899",
    image: "/mit-campus.jpg",
    admit: 7,
  },
  {
    id: "oxford",
    name: "Oxford University",
    location: "UK · Oxford",
    country: "UK",
    rank: 5,
    fees: "$68,000 / year",
    course: "Computer Science",
    color: "#06b6d4",
    image: "/stanford-campus.jpg",
    admit: 17,
  },
  {
    id: "berkeley",
    name: "UC Berkeley",
    location: "USA · California",
    country: "USA",
    rank: 4,
    fees: "$72,000 / year",
    course: "EECS",
    color: "#10b981",
    image: "/mit-campus.jpg",
    admit: 14,
  },
  {
    id: "harvard",
    name: "Harvard University",
    location: "USA · Cambridge",
    country: "USA",
    rank: 2,
    fees: "$80,000 / year",
    course: "Computer Science",
    color: "#f59e0b",
    image: "/stanford-campus.jpg",
    admit: 5,
  },
  {
    id: "cambridge",
    name: "Cambridge University",
    location: "UK · Cambridge",
    country: "UK",
    rank: 6,
    fees: "$65,000 / year",
    course: "Computer Science",
    color: "#8b5cf6",
    image: "/mit-campus.jpg",
    admit: 21,
  },
];

/* ============================================================
   1. JOURNEY — Horizontal 4-step path
   ============================================================ */

function UniversitiesJourney() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Explore universities, courses and countries you're interested in.",
      icon: Compass,
      color: "#10b981",
    },
    {
      num: "02",
      title: "Find Your Fit",
      desc: "Get personalized recommendations based on your profile and goals.",
      icon: Target,
      color: "#a855f7",
    },
    {
      num: "03",
      title: "Compare",
      desc: "See side-by-side comparisons of universities, courses and fees.",
      icon: Scale,
      color: "#06b6d4",
    },
    {
      num: "04",
      title: "Apply",
      desc: "Get step-by-step guidance on applications, deadlines and scholarships.",
      icon: FileCheck,
      color: "#f59e0b",
    },
  ];

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Your University Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Four steps to find,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              compare, and apply.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
            From exploring your interests to landing on your dream campus, Novi
            walks every step with you.
          </p>
        </div>

        {/* Horizontal 4-step path */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-emerald-500/40 via-primary/40 to-amber-500/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  {/* Node */}
                  <div className="relative z-10 mb-5">
                    <div
                      className="w-16 h-16 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        borderColor: step.color,
                        boxShadow: `0 0 20px ${step.color}30`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: step.color }}
                      />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 text-[10px] font-extrabold flex items-center justify-center"
                      style={{
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-base font-black mb-1.5 leading-tight"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-foreground/60 leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>

                  {/* Mobile arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden mt-6 flex justify-center w-full">
                      <ArrowRight className="w-4 h-4 text-foreground/20 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. EXPLORE GRID — Horizontal filmstrip
   ============================================================ */

function UniversitiesExploreGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    stanford: true,
  });
  const [compared, setCompared] = useState<Record<string, boolean>>({});

  const popularSearches = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Computer Science",
    "Business",
  ];

  const filtered = universitiesData.filter((u) => {
    const query = (searchTerm || activeChip || "").toLowerCase();
    if (!query) return true;
    return (
      u.name.toLowerCase().includes(query) ||
      u.country.toLowerCase().includes(query) ||
      u.course.toLowerCase().includes(query) ||
      u.location.toLowerCase().includes(query)
    );
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id: string) => {
    setCompared((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Explore Universities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Find campuses{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              worldwide.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
            Search, filter and find the best universities for your future.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT — Search sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-background/40 to-accent/[0.04] backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative p-5 space-y-5">
                {/* Search input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setActiveChip(null);
                    }}
                    placeholder="Search universities or countries..."
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-background/60 border border-foreground/15 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm text-foreground placeholder:text-foreground/40 transition-all"
                  />
                  <Search className="w-4 h-4 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>

                {/* Popular searches */}
                <div>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
                    Popular searches
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {popularSearches.map((chip) => {
                      const isActive = activeChip === chip;
                      return (
                        <button
                          key={chip}
                          onClick={() => {
                            if (isActive) {
                              setActiveChip(null);
                              setSearchTerm("");
                            } else {
                              setActiveChip(chip);
                              setSearchTerm(chip);
                            }
                          }}
                          className={`text-[11px] px-3 py-1.5 rounded-full border transition-all font-medium ${
                            isActive
                              ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                              : "bg-background/50 border-foreground/10 text-foreground/70 hover:border-primary/40 hover:text-primary"
                          }`}
                        >
                          {chip}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filters */}
                <div className="pt-3.5 border-t border-foreground/10">
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2.5">
                    Filter by
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Country", "Course", "Ranking", "Fees"].map((f) => (
                      <button
                        key={f}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 border border-foreground/10 text-[11px] text-foreground/70 hover:border-foreground/25"
                      >
                        {f}
                        <ChevronDown className="w-3 h-3 text-foreground/40" />
                      </button>
                    ))}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-[11px]">
                      <SlidersHorizontal className="w-3 h-3" />
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Horizontal filmstrip */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/60">
                  Top Universities · {filtered.length}
                </h3>
              </div>

              {/* Scroll buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="w-8 h-8 rounded-full border border-foreground/10 bg-background/50 flex items-center justify-center text-foreground/50 hover:border-primary/40 hover:text-primary transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="w-8 h-8 rounded-full border border-foreground/10 bg-background/50 flex items-center justify-center text-foreground/50 hover:border-primary/40 hover:text-primary transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filmstrip */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="w-[260px] shrink-0 snap-start rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col bg-background/40 dark:bg-transparent"
                  style={{ border: `1px solid ${item.color}40` }}
                >
                  {/* Image */}
                  <div className="relative w-full h-36 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="260px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <button
                      onClick={() => toggleFavorite(item.id)}
                      aria-label="Save"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Heart
                        className="w-3.5 h-3.5"
                        style={{
                          color: favorites[item.id] ? "#ec4899" : "#fff",
                          fill: favorites[item.id] ? "#ec4899" : "transparent",
                        }}
                      />
                    </button>

                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] text-white font-medium">
                      <MapPin className="w-2.5 h-2.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col gap-2.5">
                    <h4 className="font-bold text-[13px] text-foreground leading-tight truncate">
                      {item.name}
                    </h4>

                    <div className="flex items-center gap-2 text-[11px]">
                      <span
                        className="font-extrabold"
                        style={{ color: item.color }}
                      >
                        #{item.rank} Global
                      </span>
                      <span className="text-foreground/30">·</span>
                      <span className="text-foreground/60 truncate">
                        {item.fees}
                      </span>
                    </div>

                    <p className="text-[11px] text-foreground/55">
                      {item.course}
                    </p>

                    <div className="pt-2 mt-auto border-t border-foreground/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCompare(item.id)}
                        className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1.5 rounded-lg transition-all"
                        style={{
                          color: item.color,
                          border: `1px solid ${
                            compared[item.id] ? item.color : `${item.color}40`
                          }`,
                          backgroundColor: compared[item.id]
                            ? `${item.color}15`
                            : "transparent",
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded border flex items-center justify-center"
                          style={{ borderColor: item.color }}
                        >
                          {compared[item.id] && (
                            <CheckCircle2
                              className="w-3 h-3"
                              style={{ color: item.color }}
                            />
                          )}
                        </div>
                        Compare
                      </button>

                      <span
                        className="text-[10px] font-bold"
                        style={{ color: item.color }}
                      >
                        {item.admit}% admit
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint */}
            <p className="text-[10px] text-foreground/40 text-center mt-1">
              Scroll or click arrows to see more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. RECOMMENDATIONS — Unified panel
   ============================================================ */

function UniversitiesRecommendations() {
  const matches = [
    {
      num: "1",
      name: "Stanford University",
      sub: "Strong match for your CS interest",
      match: 92,
      color: "#a855f7",
      image: "/stanford-campus.jpg",
    },
    {
      num: "2",
      name: "MIT",
      sub: "Matches your academic profile",
      match: 89,
      color: "#ec4899",
      image: "/mit-campus.jpg",
    },
    {
      num: "3",
      name: "Oxford University",
      sub: "Great fit for global ambitions",
      match: 85,
      color: "#06b6d4",
      image: "/stanford-campus.jpg",
    },
    {
      num: "4",
      name: "UC Berkeley",
      sub: "Aligns with your innovation streak",
      match: 78,
      color: "#10b981",
      image: "/mit-campus.jpg",
    },
  ];

  const whyPoints = [
    { label: "Career DNA", color: "#a855f7" },
    { label: "Goals & roadmap", color: "#06b6d4" },
    { label: "Preferences", color: "#10b981" },
    { label: "Location & budget", color: "#f59e0b" },
    { label: "Future scope", color: "#ec4899" },
  ];

  return (
    <section className="relative py-4 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Personalized
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Get personalized{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              recommendations.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
            Based on your profile, here are your top university matches.
          </p>
        </div>

        {/* Unified panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.05] via-background/40 to-accent/[0.04] backdrop-blur-sm overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Novi greeting strip */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-foreground/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image
                src="/girl1.png"
                alt="Novi"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-0.5">
                Novi AI
              </p>
              <p className="text-[13px] text-foreground/80">
                Based on your profile, here are your top university matches!
              </p>
            </div>
          </div>

          {/* Matches grid */}
          <div className="p-5 grid sm:grid-cols-2 gap-2.5">
            {matches.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-2.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer hover:-translate-y-0.5 group"
                style={{
                  borderColor: `${item.color}40`,
                  backgroundColor: `${item.color}06`,
                }}
              >
                <div
                  className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border"
                  style={{ borderColor: `${item.color}50` }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-[12px] text-foreground truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-foreground/55 truncate">
                    {item.sub}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="text-[12px] font-black"
                    style={{ color: item.color }}
                  >
                    {item.match}%
                  </span>
                  <ChevronRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    style={{ color: item.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all */}
          <div className="px-5 pb-4">
            <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors group">
              View all matches
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Why these matches strip */}
          <div className="border-t border-foreground/10 px-5 py-4 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <div className="shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/60">
                Why these matches?
              </p>
              <p className="text-[10px] text-foreground/45 mt-0.5">
                Based on your interests, strengths and preferences
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 lg:ml-auto">
              {whyPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-1.5 text-[11px] text-foreground/70"
                >
                  <CheckCircle2
                    className="w-3 h-3 shrink-0"
                    style={{ color: point.color }}
                  />
                  <span>{point.label}</span>
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
   4. DEEP DIVE — Single cohesive card with internal dividers
   ============================================================ */

function UniversitiesDeepDive() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", color: "#a855f7" },
    { key: "Courses", color: "#06b6d4" },
    { key: "Campus Life", color: "#10b981" },
    { key: "Outcomes", color: "#f59e0b" },
  ];

  const tabContents: Record<string, string> = {
    Overview:
      "A world-renowned research university known for innovation, entrepreneurship and academic excellence.",
    Courses:
      "Top-ranked programs in CS, AI, Bioengineering, Economics and Management Science with dual-degree options.",
    "Campus Life":
      "Silicon Valley location with 8,180 acres, 600+ student orgs, and proximity to global tech giants.",
    Outcomes:
      "94% graduate employment within 6 months, $145,000 average STEM salary, and a strong alumni network.",
  };

  const activeColor = tabs.find((t) => t.key === activeTab)?.color ?? "#a855f7";

  const admissionRows = [
    { label: "Reach", pct: 15, color: "#f43f5e" },
    { label: "Match", pct: 65, color: "#10b981" },
    { label: "Safe", pct: 20, color: "#06b6d4" },
  ];

  const quickStats = [
    { icon: Clock, value: "4 yrs", label: "Duration" },
    { icon: Building2, value: "Private", label: "Type" },
    { icon: Users, value: "6:1", label: "Ratio" },
  ];

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/3 right-[10%] w-[420px] h-[420px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            University Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
            Deep dive into{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              your shortlist.
            </span>
          </h2>
        </div>

        {/* Single cohesive card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-foreground/10 bg-background/40 dark:bg-transparent overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-foreground/10">
            {/* ============ Profile (4 cols) ============ */}
            <div className="lg:col-span-4 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold border-2 bg-background"
                  style={{ borderColor: "#a855f770", color: "#a855f7" }}
                >
                  01
                </span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground/55">
                  Profile
                </h4>
              </div>

              {/* Image */}
              <div className="relative w-full h-28 rounded-xl overflow-hidden border border-primary/20">
                <Image
                  src="/stanford-campus.jpg"
                  alt="Stanford"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] text-white font-medium">
                  <MapPin className="w-2.5 h-2.5" />
                  California
                </span>
              </div>

              {/* Name row */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-extrabold text-base text-foreground leading-tight">
                    Stanford 🌲
                  </h3>
                  <p className="text-[11px] text-foreground/55 mt-0.5">
                    USA · California
                  </p>
                </div>
                <button aria-label="Save" className="shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                </button>
              </div>

              {/* Rank + Fees inline */}
              <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-foreground/40 font-semibold mb-0.5">
                    Rank
                  </p>
                  <p className="text-[13px] font-black text-primary">#3</p>
                </div>
                <div className="w-px h-6 bg-foreground/10" />
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-foreground/40 font-semibold mb-0.5">
                    Fees
                  </p>
                  <p className="text-[13px] font-black text-foreground">
                    $78k
                  </p>
                </div>
              </div>

              <button className="w-full py-2 rounded-xl bg-primary text-white font-bold text-[11px] hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
                Compare
              </button>
            </div>

            {/* ============ Tabs + Content (5 cols) ============ */}
            <div className="lg:col-span-5 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold border-2 bg-background"
                  style={{ borderColor: `${activeColor}70`, color: activeColor }}
                >
                  02
                </span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground/55">
                  Details
                </h4>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-full transition-all"
                      style={{
                        backgroundColor: isActive ? tab.color : "transparent",
                        color: isActive ? "#fff" : undefined,
                        border: `1px solid ${
                          isActive ? tab.color : `${tab.color}40`
                        }`,
                      }}
                    >
                      {tab.key}
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-[13px] text-foreground/75 leading-relaxed min-h-[52px] pt-1"
                >
                  {tabContents[activeTab]}
                </motion.p>
              </AnimatePresence>

              {/* Quick stats inline */}
              <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-foreground/10">
                {quickStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2 p-2.5 rounded-xl border"
                      style={{ borderColor: `${activeColor}25` }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${activeColor}15` }}
                      >
                        <Icon
                          className="w-3.5 h-3.5"
                          style={{ color: activeColor }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-foreground leading-none">
                          {stat.value}
                        </p>
                        <p className="text-[9px] text-foreground/50 mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ============ Admission (3 cols) ============ */}
            <div className="lg:col-span-3 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold border-2 bg-background"
                  style={{ borderColor: "#10b98170", color: "#10b981" }}
                >
                  03
                </span>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground/55">
                    Admission
                  </h4>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {admissionRows.map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: row.color }}
                        />
                        <span className="text-[11px] font-bold text-foreground">
                          {row.label}
                        </span>
                      </div>
                      <span
                        className="text-[11px] font-black"
                        style={{ color: row.color }}
                      >
                        {row.pct}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: row.color,
                          opacity: 0.75,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 mt-1 border-t border-foreground/10">
                <p className="text-[10px] text-foreground/50 leading-relaxed">
                  Based on your profile strength of{" "}
                  <span className="text-emerald-500 font-bold">78%</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   DEFAULT EXPORT
   ============================================================ */

export default function UniversitiesMiddleSections() {
  return (
    <>
      <UniversitiesJourney />
      <UniversitiesExploreGrid />
      <UniversitiesRecommendations />
      <UniversitiesDeepDive />
    </>
  );
}