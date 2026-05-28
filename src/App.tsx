/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CommunityEventPageDesign from "./components/CommunityEventPageDesign";
import DraggableCardDemo from "@/components/draggable-card-demo-2";
import XhsInspiration from "./components/XhsInspiration";
import Timeline from "./components/Timeline";
import FooterNav from "./components/FooterNav";
import StaggeredMenu from "./components/StaggeredMenu";
import ClickSpark from "./components/ClickSpark";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#F8F4E9] text-[#775C55] font-sans pb-28 relative">
      
      {/* Exquisite custom WebGL fluid simulation cursor replicating sparkling, light-weight organic bubbles */}
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1024}
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.6}
        CURL={7}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={5500}
        RAINBOW_MODE={false}
        COLOR="#FFFFFF"
        OPACITY={0.15}
      />

      {/* ClickSpark effect when user clicks any element */}
      <ClickSpark sparkColor="#775C55" sparkSize={10} sparkCount={8} duration={350} />
      
      {/* High-end interactive StaggeredMenu handling both the header, branding, quick links, and the animated full-screen directory overlay */}
      <StaggeredMenu />

      {/* Render All Modular Sections */}
      <main className="w-full">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <CommunityEventPageDesign />
        <DraggableCardDemo />
        <XhsInspiration />
      </main>

      {/* Floating Sticky Bottom Catalog Directory */}
      <FooterNav />
      
    </div>
  );
}
