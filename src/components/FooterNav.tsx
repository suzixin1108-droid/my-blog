/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight } from "lucide-react";

interface CatalogItem {
  label: string;
  anchor: string;
}

const CATALOG: CatalogItem[] = [
  { label: "首页", anchor: "#hero" },
  { label: "关于", anchor: "#about" },
  { label: "成长", anchor: "#timeline" },
  { label: "技能", anchor: "#skills" },
  { label: "项目", anchor: "#projects" },
  { label: "活动页", anchor: "#event-page-design" },
  { label: "灵感", anchor: "#xhs" },
];

export default function FooterNav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer 
      id="catalog-footer" 
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D5EAE3] bg-[#F8F4E9]/90 shadow-2xl py-3 px-4 sm:px-6 select-none"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 -10px 30px rgba(119, 92, 85, 0.08)"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Navigation Catalog buttons stack */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {CATALOG.map((item, idx) => {
            const isLast = idx === CATALOG.length - 1;
            
            return (
              <a
                key={item.label}
                href={item.anchor}
                onClick={(e) => handleScroll(e, item.anchor)}
                className={`nav-catalog-item text-xs sm:text-[13px] font-sans font-bold text-[#775C55] py-1.5 px-3.5 hover:text-stone-900 hover:bg-[#D5EAE3] rounded-xl transition-all duration-300 ${
                  !isLast ? "border-r border-[#D5EAE3]/70 pr-3 sm:pr-5 mr-1" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Side: Flowing Marquee Infinite Arrows */}
        <div className="hidden sm:flex items-center gap-3 overflow-hidden w-48 bg-white/50 border border-[#D5EAE3]/40 rounded-full py-1 px-4 text-[#775C55]/60">
          <span className="text-[10px] font-mono tracking-widest font-extrabold flex-shrink-0 uppercase text-[#775C55]/50">
            Flow
          </span>
          
          {/* Marquee viewport */}
          <div className="relative w-full overflow-hidden h-4 flex items-center">
            <div className="arrow-flow-container flex gap-1 font-mono font-bold text-xs">
              <span className="nav-arrow-flow tracking-widest text-[#775C55] pr-4">→ → → EXPLORE GRAPH</span>
              <span className="nav-arrow-flow tracking-widest text-[#775C55] pr-4">→ → → EXPLORE GRAPH</span>
            </div>
          </div>
        </div>

        {/* Copyright branding for Sue */}
        <div className="text-[10px] font-mono text-[#775C55]/65">
          <span>SUE SU © 2026 / 华威大学 & 北林</span>
        </div>

      </div>
    </footer>
  );
}
