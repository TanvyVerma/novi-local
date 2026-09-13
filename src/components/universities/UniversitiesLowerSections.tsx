"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

// Shared UI components
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/ui/Footer";
import Testimonials from "../ui/Testimonials";

// function UniversitiesCompareTool() {
//   const [slots, setSlots] = useState([
//     {
//       id: "1",
//       name: "Stanford",
//       country: "USA",
//       rank: "#3",
//       fees: "$78k",
//       admit: "4%",
//       color: "#a855f7",
//       image: "/stanford-campus.jpg",
//     },
//     {
//       id: "2",
//       name: "MIT",
//       country: "USA",
//       rank: "#1",
//       fees: "$82k",
//       admit: "7%",
//       color: "#ec4899",
//       image: "/mit-campus.jpg",
//     },
//     {
//       id: "3",
//       name: "Oxford",
//       country: "UK",
//       rank: "#5",
//       fees: "$68k",
//       admit: "17%",
//       color: "#06b6d4",
//       image: "/stanford-campus.jpg",
//     },
//   ]);

//   const [selected, setSelected] = useState<string[]>(["1", "2", "3"]);

//   const toggleSelected = (id: string) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//     );
//   };

//   const removeSlot = (id: string) => {
//     setSlots((prev) => prev.filter((s) => s.id !== id));
//     setSelected((prev) => prev.filter((c) => c !== id));
//   };

//   const addSlot = () => {
//     if (slots.length >= 4) return;
//     const colors = ["#8b5cf6", "#10b981", "#f59e0b"];
//     const usedColors = slots.map((s) => s.color);
//     const nextColor = colors.find((c) => !usedColors.includes(c)) ?? "#a855f7";

//     setSlots((prev) => [
//       ...prev,
//       {
//         id: String(Date.now()),
//         name: "Cambridge",
//         country: "UK",
//         rank: "#6",
//         fees: "$65k",
//         admit: "21%",
//         color: nextColor,
//         image: "/mit-campus.jpg",
//       },
//     ]);
//   };

//   const attributes = [
//     { key: "rank", label: "Rank" },
//     { key: "fees", label: "Fees" },
//     { key: "admit", label: "Admit" },
//     { key: "country", label: "Country" },
//   ];

//   const columnCount = slots.length + (slots.length < 4 ? 1 : 0);
//   const gridCols =
//     columnCount === 4
//       ? "grid-cols-2 lg:grid-cols-4"
//       : columnCount === 3
//       ? "grid-cols-2 lg:grid-cols-3"
//       : columnCount === 2
//       ? "grid-cols-2"
//       : "grid-cols-1";

//   return (
//     <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
//       <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-[15%] w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

//       {/* ✅ max-w-7xl to match ALL other sections */}
//       <div className="max-w-7xl mx-auto relative">
//         {/* ==================== HEADER ==================== */}
//         <div className="max-w-3xl mb-8 space-y-3">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
//             <Scale className="w-3.5 h-3.5" />
//             Compare Tool
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-foreground leading-[1.12]">
//             Compare universities{" "}
//             <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
//               side-by-side.
//             </span>
//           </h2>
//           <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
//             Select any university below to compare their metrics at a glance.
//           </p>
//         </div>

//         {/* ==================== COMPARISON BOARD ==================== */}
//         <div className="relative rounded-2xl border border-foreground/10 bg-background/40 dark:bg-transparent overflow-hidden">
//           <div className={`grid ${gridCols} divide-x divide-foreground/10`}>
//             {slots.map((item) => {
//               const isSelected = selected.includes(item.id);

//               return (
//                 <div
//                     key={item.id}
//                     className="relative flex flex-col group transition-all duration-300"
//                     style={{
//                       backgroundColor: isSelected ? `${item.color}06` : "transparent",
//                     }}
//                   >
//                     {/* Top accent line */}
//                     <div
//                       className="h-1 w-full transition-opacity duration-300"
//                       style={{
//                         backgroundColor: item.color,
//                         opacity: isSelected ? 1 : 0.3,
//                       }}
//                     />

//                     {/* Header — outer div (not a button) so nested buttons are allowed */}
//                     <div
//                       role="button"
//                       tabIndex={0}
//                       onClick={() => toggleSelected(item.id)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter" || e.key === " ") {
//                           e.preventDefault();
//                           toggleSelected(item.id);
//                         }
//                       }}
//                       className="relative p-4 pb-3 text-left w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-tl-2xl rounded-tr-2xl"
//                     >
//                       {/* Selection checkbox */}
//                       <div
//                         className="absolute top-3 right-3 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all z-10"
//                         style={{
//                           borderColor: isSelected ? item.color : `${item.color}40`,
//                           backgroundColor: isSelected
//                             ? `${item.color}20`
//                             : "rgba(0,0,0,0.3)",
//                         }}
//                       >
//                         {isSelected && (
//                           <CheckCircle2
//                             className="w-3.5 h-3.5"
//                             style={{ color: item.color }}
//                           />
//                         )}
//                       </div>
                      
//                       {/* Delete button — only visible on hover */}
//                       {slots.length > 2 && (
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             removeSlot(item.id);
//                           }}
//                           className="absolute top-3 left-3 w-6 h-6 rounded-md border border-foreground/10 bg-background/80 flex items-center justify-center text-foreground/40 hover:text-rose-500 hover:border-rose-500/40 transition-all opacity-0 group-hover:opacity-100 z-10"
//                           aria-label="Remove"
//                         >
//                           <Trash2 className="w-3 h-3" />
//                         </button>
//                       )}

//                       {/* Campus image */}
//                       <div
//                         className="relative w-full h-24 rounded-xl overflow-hidden mb-3 border transition-all"
//                         style={{
//                           borderColor: isSelected ? item.color : `${item.color}40`,
//                         }}
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           fill
//                           sizes="220px"
//                           className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                         <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20 text-[8px] text-white font-bold uppercase tracking-wider">
//                           {item.country}
//                         </span>
//                       </div>
                      
//                       {/* Name */}
//                       <h4
//                         className="text-[13px] font-bold leading-tight transition-colors"
//                         style={{ color: isSelected ? item.color : undefined }}
//                       >
//                         {item.name}
//                       </h4>
//                     </div>
                      
//                     {/* Attributes */}
//                     <div className="px-4 pb-4">
//                       {attributes.map((attr, i) => {
//                         const value = item[attr.key as keyof typeof item] as string;
//                         return (
//                           <div
//                             key={attr.key}
//                             className={`flex items-center justify-between py-2.5 ${
//                               i === 0 ? "" : "border-t border-foreground/[0.06]"
//                             }`}
//                           >
//                             <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-semibold">
//                               {attr.label}
//                             </span>
//                             <span
//                               className="text-[12px] font-bold text-foreground"
//                               style={{
//                                 color:
//                                   attr.key === "rank" && isSelected
//                                     ? item.color
//                                     : undefined,
//                               }}
//                             >
//                               {value}
//                             </span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//               );
//             })}

//             {/* Add slot — dashed placeholder column */}
//             {slots.length < 4 && (
//               <button
//                 onClick={addSlot}
//                 className="relative flex flex-col items-center justify-center p-6 transition-all group hover:bg-foreground/[0.02] border-l border-dashed border-foreground/15"
//               >
//                 <div className="w-14 h-14 rounded-full border-2 border-dashed border-foreground/20 group-hover:border-primary/50 flex items-center justify-center mb-4 transition-all group-hover:scale-105">
//                   <Plus className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
//                 </div>
//                 <p className="text-[12px] font-bold text-foreground/60 group-hover:text-primary transition-colors">
//                   Add University
//                 </p>
//                 <p className="text-[10px] text-foreground/40 mt-1">
//                   Search or browse
//                 </p>
//               </button>
//             )}
//           </div>

//           {/* ==================== BOTTOM BAR ==================== */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-foreground/10 bg-foreground/[0.02]">
//             <div className="flex items-center gap-3">
//               <span className="flex items-center gap-1.5 text-[11px] font-bold text-foreground/60">
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
//                 {selected.length === 0
//                   ? "Select universities to compare"
//                   : `${selected.length} of ${slots.length} selected`}
//               </span>
//             </div>

//             <button
//               disabled={selected.length < 2}
//               className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all group ${
//                 selected.length >= 2
//                   ? "bg-primary text-white shadow-md shadow-primary/25 hover:-translate-y-0.5"
//                   : "bg-foreground/10 text-foreground/40 cursor-not-allowed"
//               }`}
//             >
//               <span>Compare {selected.length >= 2 ? selected.length : ""}</span>
//               <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>

//         {/* Hint below */}
//         <p className="mt-4 text-center text-[11px] text-foreground/45">
//           Click any university to add or remove it from the comparison
//         </p>
//       </div>
//     </section>
//   );
// }


function UniversitiesCompareTool() {
  const [slots, setSlots] = useState([
    {
      id: "1",
      name: "Stanford",
      country: "USA",
      rank: "#3",
      fees: "$78k",
      admit: "4%",
      color: "#a855f7",
      image: "/stanford-campus.jpg",
    },
    {
      id: "2",
      name: "MIT",
      country: "USA",
      rank: "#1",
      fees: "$82k",
      admit: "7%",
      color: "#ec4899",
      image: "/mit-campus.jpg",
    },
    {
      id: "3",
      name: "Oxford",
      country: "UK",
      rank: "#5",
      fees: "$68k",
      admit: "17%",
      color: "#06b6d4",
      image: "/stanford-campus.jpg",
    },
    {
      id: "4",
      name: "UC Berkeley",
      country: "USA",
      rank: "#4",
      fees: "$72k",
      admit: "14%",
      color: "#f59e0b",
      image: "/mit-campus.jpg",
    },
  ]);

  const [selected, setSelected] = useState<string[]>(["1", "2", "3", "4"]);

  const nextSteps = [
    {
      num: "01",
      title: "Build a project",
      desc: "Showcase your CS interest",
      icon: FolderGit2,
      color: "#a855f7",
    },
    {
      num: "02",
      title: "Learn a skill",
      desc: "Level up coding & problem-solving",
      icon: Sparkles,
      color: "#10b981",
    },
    {
      num: "03",
      title: "Explore a university",
      desc: "Attend virtual tours & info sessions",
      icon: Building,
      color: "#06b6d4",
    },
  ];

  // Cycle through universities when adding
  const extraUniversities = [
    { name: "Cambridge", country: "UK", rank: "#6", fees: "$65k", admit: "21%", color: "#8b5cf6", image: "/stanford-campus.jpg" },
    { name: "Yale", country: "USA", rank: "#9", fees: "$70k", admit: "11%", color: "#10b981", image: "/mit-campus.jpg" },
  ];

  const toggleSelected = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const removeSlot = (id: string) => {
    setSlots((prev) => prev.filter((s) => s.id !== id));
    setSelected((prev) => prev.filter((c) => c !== id));
  };

  const addSlot = () => {
    if (slots.length >= 5) return;
    const next = extraUniversities[slots.length - 4];
    if (!next) return;

    setSlots((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        ...next,
      },
    ]);
  };

  return (
    <section className="relative py-14 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[15%] w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative space-y-6">
        {/* ==================== COMPARE TOOL HEADER ==================== */}
        <div className="max-w-3xl space-y-3">
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
          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
            Select any university to compare metrics at a glance.
          </p>
        </div>

        {/* ==================== COMPARE BOARD — FULL WIDTH ==================== */}
        <div className="relative rounded-2xl border border-foreground/10 bg-background/40 dark:bg-transparent overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-foreground/10">
            {slots.map((item) => {
              const isSelected = selected.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col group transition-all duration-300"
                  style={{
                    backgroundColor: isSelected
                      ? `${item.color}06`
                      : "transparent",
                  }}
                >
                  {/* Accent line */}
                  <div
                    className="h-0.5 w-full transition-opacity"
                    style={{
                      backgroundColor: item.color,
                      opacity: isSelected ? 1 : 0.3,
                    }}
                  />

                  {/* Header — non-nested button */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleSelected(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleSelected(item.id);
                      }
                    }}
                    className="relative p-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {/* Checkbox */}
                    <div
                      className="absolute top-2 right-2 w-5 h-5 rounded-md border-2 flex items-center justify-center z-10"
                      style={{
                        borderColor: isSelected
                          ? item.color
                          : `${item.color}40`,
                        backgroundColor: isSelected
                          ? `${item.color}20`
                          : "rgba(0,0,0,0.3)",
                      }}
                    >
                      {isSelected && (
                        <CheckCircle2
                          className="w-3 h-3"
                          style={{ color: item.color }}
                        />
                      )}
                    </div>

                    {/* Delete on hover */}
                    {slots.length > 2 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSlot(item.id);
                        }}
                        className="absolute top-2 left-2 w-5 h-5 rounded border border-foreground/10 bg-background/80 flex items-center justify-center text-foreground/40 hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-2.5 h-2.5" />
                      </button>
                    )}

                    {/* Image */}
                    <div
                      className="relative w-full h-16 rounded-lg overflow-hidden mb-2 border"
                      style={{
                        borderColor: isSelected
                          ? item.color
                          : `${item.color}40`,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-1.5 left-1.5 text-[7px] px-1 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-bold uppercase tracking-wider">
                        {item.country}
                      </span>
                    </div>

                    {/* Name */}
                    <h4
                      className="text-[12px] font-bold leading-tight truncate"
                      style={{ color: isSelected ? item.color : undefined }}
                    >
                      {item.name}
                    </h4>
                  </div>

                  {/* Attributes — 3 rows */}
                  <div className="px-3 pb-3">
                    {[
                      { key: "rank", label: "Rank" },
                      { key: "fees", label: "Fees" },
                      { key: "admit", label: "Admit" },
                    ].map((attr, i) => {
                      const value = item[
                        attr.key as keyof typeof item
                      ] as string;
                      return (
                        <div
                          key={attr.key}
                          className={`flex items-center justify-between py-1.5 ${
                            i === 0
                              ? ""
                              : "border-t border-foreground/[0.06]"
                          }`}
                        >
                          <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-semibold">
                            {attr.label}
                          </span>
                          <span
                            className="text-[11px] font-bold"
                            style={{
                              color:
                                attr.key === "rank" && isSelected
                                  ? item.color
                                  : undefined,
                            }}
                          >
                            {value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Add slot — 5th column */}
            {slots.length < 5 && (
              <button
                onClick={addSlot}
                className="relative flex flex-col items-center justify-center p-3 group hover:bg-foreground/[0.02] border-l border-dashed border-foreground/15 min-h-[200px]"
              >
                <div className="w-11 h-11 rounded-full border-2 border-dashed border-foreground/20 group-hover:border-primary/50 flex items-center justify-center mb-2.5 transition-all group-hover:scale-105">
                  <Plus className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-[11px] font-bold text-foreground/60 group-hover:text-primary transition-colors">
                  Add
                </p>
                <p className="text-[9px] text-foreground/40 mt-0.5">
                  University
                </p>
              </button>
            )}
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-t border-foreground/10 bg-foreground/[0.02]">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-foreground/55">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {selected.length} of {slots.length} selected
            </span>

            <button
              disabled={selected.length < 2}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-[11px] transition-all group ${
                selected.length >= 2
                  ? "bg-primary text-white shadow-sm shadow-primary/25 hover:-translate-y-0.5"
                  : "bg-foreground/10 text-foreground/40 cursor-not-allowed"
              }`}
            >
              <span>Compare {selected.length >= 2 ? selected.length : ""}</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ==================== DIVIDER ==================== */}
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        {/* ==================== NEXT STEPS — FULL WIDTH ROW ==================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/60">
                Your Next Steps
              </p>
            </div>
            <span className="text-[10px] text-foreground/40 font-medium">
              Continue building your profile
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="group relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 bg-background/40 dark:bg-transparent"
                  style={{ borderColor: `${step.color}40` }}
                >
                  <span
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border-2 text-[9px] font-extrabold flex items-center justify-center"
                    style={{
                      borderColor: `${step.color}70`,
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </span>

                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[12px] font-bold text-foreground leading-tight mb-0.5">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-foreground/55 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Compare CTA card — 4th slot */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="relative p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex flex-col justify-between gap-2 group cursor-pointer hover:-translate-y-0.5 transition-all"
            >
              <div>
                <h4 className="font-bold text-[12px] leading-snug">
                  Compare with other universities
                </h4>
                <p className="text-[10px] text-white/85 mt-0.5">
                  See side-by-side metrics at a glance
                </p>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold">
                <span>See comparison</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UniversitiesLowerSections() {
  return (
    <>
      {/* <UniversitiesNextSteps /> */}
      <UniversitiesCompareTool />
      {/* <UniversitiesSocialProof /> */}
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}