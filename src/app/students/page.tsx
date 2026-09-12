import NavBar from "@/components/ui/NavBar";
import StudentsHero from "@/components/students/StudentHero";
import StudentMiddleSections from "@/components/students/StudentMiddleSections";
import StudentLowerSections from "@/components/students/StudentLowerSections";

export const metadata = {
  title: "For Students — Novi",
  description:
    "Novi helps students discover what they're good at, explore what's possible, and build a path toward their future.",
};

export default function StudentPage() {
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <main className="relative z-10">
        <StudentsHero />
        <StudentMiddleSections />
        <StudentLowerSections />
      </main>
    </div>
  );
}