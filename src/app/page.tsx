'use client'

import dynamic from 'next/dynamic'
import NavBar from './components/NavBar'
import LandingCurtain from './components/LandingCurtain'
import { useTheme } from './components/theme-provider'
import Hero from "./landing_section/hero";
import HowItWorks from "./landing_section/how-it-works";
import ForStudents from "./landing_section/for-students";
import AboutUs from "./landing_section/about-us";
import Universities from "./landing_section/universities"
import ForParents from './landing_section/for-parents'


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <LandingCurtain />
      <div className="mesh-gradient-bg" />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <ForStudents />
        <ForParents />
        <Universities />
        <AboutUs />
      </main>
    </div>
  )
}