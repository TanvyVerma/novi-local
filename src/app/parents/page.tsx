import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import BackgroundParticles from "@/components/3d/BackgroundParticles";
import ParentHero from "@/components/parents/ParentHero";
import ParentMiddleSections from "@/components/parents/ParentMiddleSections";
import ParentLowerSections from "@/components/parents/ParentLowerSections";

export default function ParentsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundParticles />
      <NavBar />
      <main className="relative z-10">
        <ParentHero />
        <ParentMiddleSections />
        <ParentLowerSections />
      </main>
      <Footer />
    </div>
  );
}