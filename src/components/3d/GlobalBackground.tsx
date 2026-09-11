"use client";

import BackgroundParticles from "./BackgroundParticles";
export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <BackgroundParticles />
    </div>
  );
}