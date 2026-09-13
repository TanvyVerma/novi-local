// import type { Metadata } from "next";
// import NavBar from "@/components/ui/NavBar";
// import UniversitiesHero from "@/components/universities/UniversitiesHero";
// import UniversitiesMiddleSections from "@/components/universities/UniversitiesMiddleSections";
// import UniversitiesLowerSections from "@/components/universities/UniversitiesLowerSections";

// export const metadata: Metadata = {
//   title: "Universities — Find Your Best-Fit Global Campus with Novi",
//   description:
//     "Don't just find a university. Find your university. Explore universities, courses and countries based on what matters to you.",
// };

// export default function UniversitiesPage() {
//   return (
//     <div className="relative overflow-hidden">
//       <NavBar />
//       <main className="relative z-10 flex flex-col">
//         <UniversitiesHero />
//         <UniversitiesMiddleSections />
//         <UniversitiesLowerSections />
//       </main>
//     </div>
//   );
// }

































import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import UniversitiesHero from "@/components/universities/UniversitiesHero";
import UniversitiesMiddleSections from "@/components/universities/UniversitiesMiddleSections";
import UniversitiesLowerSections from "@/components/universities/UniversitiesLowerSections";

export const metadata: Metadata = {
  title: "Universities — Find Your Best-Fit Global Campus with Novi",
  description:
    "Don't just find a university. Find your university. Explore universities, courses and countries based on what matters to you.",
};

export default function UniversitiesPage() {
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <main className="relative z-10 flex flex-col">
        <UniversitiesHero />
        <UniversitiesMiddleSections />
        <UniversitiesLowerSections />
      </main>
    </div>
  );
}