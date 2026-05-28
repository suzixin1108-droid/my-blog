/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from "react";
import { Sparkles, ArrowRight, MousePointer, FolderGit2, FolderOpen, ChevronDown, ChevronRight, ChevronsUpDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKILL_ITEMS, CUSTOM_SKILLS } from "../types";

export default function Skills() {
  // Group CUSTOM_SKILLS by category dynamically for safe, typed processing
  const groupedSkills = CUSTOM_SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof CUSTOM_SKILLS>);

  const sortedCategories = Object.keys(groupedSkills).sort();

  // Keep track of which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    // Open the first category by default to let the user see how it looks
    const initial: Record<string, boolean> = {};
    const sorted = Object.keys(groupedSkills).sort();
    if (sorted.length > 0) {
      initial[sorted[0]] = true;
    }
    return initial;
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    sortedCategories.forEach(cat => {
      allExpanded[cat] = true;
    });
    setExpandedCategories(allExpanded);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  return (
    <section id="skills" className="py-20 px-6 bg-[#F8F4E9] border-b border-[#D5EAE3]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5">
              EXPERTISE SHELF / 效率工具与技能库
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#775C55]">
              工具箱滑轨
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-[#775C55]/60">
            <Sparkles className="w-4 h-4 text-rose-400 select-none animate-bounce" />
            <span>鼠标悬停可暂缓滚动</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse text-[#775C55]/50" />
          </div>
        </div>

        {/* Outer full-width container to isolate horizontal glide track */}
        <div className="relative w-full overflow-hidden select-none">
          
          {/* Subtle gradient indicators for overlapping fading scroll effects */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8F4E9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8F4E9] to-transparent z-10 pointer-events-none" />

          {/* Primary Track (Scrolling Left) */}
          <div className="w-full overflow-hidden relative">
            <div className="animate-marquee-left-fast flex gap-4 py-4">
              {/* Repeats for contiguous infinite illusion */}
              {[...SKILL_ITEMS, ...SKILL_ITEMS, ...SKILL_ITEMS].map((skill, index) => {
                const itemIdx = index % SKILL_ITEMS.length;
                const isAccent = itemIdx % 3 === 0;
                const isSecondAccent = itemIdx % 5 === 0;

                return (
                  <div
                    key={`${skill}-${index}`}
                    className="skill-item flex-shrink-0 min-w-[155px] sm:min-w-[190px] bg-white border border-[#D5EAE3] px-6 py-4 rounded-[40px] shadow-sm transition-all duration-300 hover:bg-[#D5EAE3] hover:text-[#775C55] hover:scale-[1.05] hover:shadow-md cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex gap-2.5 items-center">
                      {isAccent ? (
                        <Sparkles className="w-4 h-4 text-[#775C55]/70 group-hover:rotate-12 transition-transform" />
                      ) : isSecondAccent ? (
                        <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#775C55]/30" />
                      )}
                      <span className="text-sm font-sans font-bold text-[#775C55] pr-1">
                        {skill}
                      </span>
                    </div>
                    
                    {/* Miniature tech visual decoration */}
                    <span className="text-[9px] font-mono font-bold text-[#775C55]/30 group-hover:text-[#775C55]/60 pr-1 transition-colors">
                      {(itemIdx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Customized Toolkit Section */}
        <div id="custom-skills-grid" className="mt-20 pt-16 border-t border-[#D5EAE3]/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 select-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D5EAE3]/30 border border-[#D5EAE3] flex items-center justify-center text-[#775C55]">
                <FolderGit2 className="w-5 h-5 text-[#775C55]/80" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block">
                  Custom toolkit / 常用智能体技能
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#775C55]">
                  我的常用自定义智能体技能
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#775C55]/60 bg-white/50 px-3 py-1.5 border border-[#D5EAE3]/30 rounded-full font-bold">
                {CUSTOM_SKILLS.length} Skills Mounted
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#775C55]/80 bg-stone-50 hover:bg-[#D5EAE3]/30 border border-[#D5EAE3]/60 rounded-full transition-all cursor-pointer hover:shadow-2xs active:scale-95"
                >
                  展开一览
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 text-[10px] sm:text-xs font-mono font-bold text-[#775C55]/60 bg-[#D5EAE3]/10 hover:bg-stone-100 border border-stone-200 rounded-full transition-all cursor-pointer hover:shadow-2xs active:scale-95"
                >
                  收起全部
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sortedCategories.map((category) => {
              const isExpanded = !!expandedCategories[category];
              // Ensure skills in each category are sorted alphabetically by name
              const sortedSkills = [...groupedSkills[category]].sort((a, b) => 
                a.name.localeCompare(b.name)
              );

              return (
                <div key={category} className="border border-[#D5EAE3]/40 rounded-2xl bg-white/30 p-2 sm:p-4 transition-all duration-300">
                  {/* Category Header (Clickable Accordion Trigger) */}
                  <div
                    onClick={() => toggleCategory(category)}
                    className="flex items-center justify-between select-none py-2 px-3 hover:bg-[#D5EAE3]/30 active:bg-[#D5EAE3]/40 rounded-xl cursor-pointer transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <FolderOpen className={`w-4.5 h-4.5 text-[#775C55]/50 transition-all ${isExpanded ? 'scale-105 text-[#775C55]/80' : 'scale-95'}`} />
                      <span className="text-sm sm:text-base font-mono font-extrabold text-[#775C55]/90 tracking-tight flex items-center gap-1">
                        <span className="text-[#775C55]/40 font-normal">##</span> {category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#D5EAE3]/40 text-[#775C55]/85 rounded-full font-extrabold shadow-3xs">
                        {sortedSkills.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[#775C55]/50 group-hover:text-[#775C55] transition-colors">
                      <span className="hidden lg:inline-block text-[10px] font-mono uppercase tracking-widest text-[#775C55]/40">
                        {isExpanded ? "Collapse" : "Expand"}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-4.5 h-4.5 text-[#775C55]" />
                      ) : (
                        <ChevronRight className="w-4.5 h-4.5" />
                      )}
                    </div>
                  </div>

                  {/* Subskills collapsible cards grid */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pt-5 pb-2 px-3">
                          {sortedSkills.map((skill) => (
                            <div
                              key={`${skill.name}-${category}`}
                              className="bg-white border border-[#D5EAE3]/70 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5 flex flex-col justify-between group min-h-[145px]"
                            >
                              <div>
                                {/* Skill Code Block Style Name */}
                                <div className="text-[14px] sm:text-[15px] font-mono font-bold text-[#775C55] tracking-tight mb-2.5 truncate flex items-center gap-1.5">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all" />
                                  {skill.name}
                                </div>
                                {/* Description Text */}
                                <p className="text-xs sm:text-[13px] font-sans font-normal text-[#775C55]/80 leading-relaxed break-words line-clamp-5 group-hover:text-[#775C55] transition-colors">
                                  {skill.description}
                                </p>
                              </div>

                              {/* Category Label bottom placement right aligned */}
                              <div className="flex justify-end items-center mt-4 pt-2.5 border-t border-[#D5EAE3]/20 select-none">
                                <span className="text-[9px] font-mono font-bold tracking-wider bg-stone-50 text-[#775C55]/70 rounded-full px-2 py-0.5 border border-[#D5EAE3]/40 group-hover:bg-[#D5EAE3]/25 group-hover:text-[#775C55] transition-all uppercase">
                                  {category}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
