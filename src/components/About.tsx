/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, Target, HelpCircle, Briefcase, ChevronRight } from "lucide-react";

// Use the user-supplied avatar image URL
const AVATAR_PATH = "https://img.heliar.top/file/1779362632173_%E4%B8%AA%E4%BA%BA%E7%85%A7.jpg";

const ROLES = ["AI产品运营", "AI社区运营", "工具提效"];
const TAGS = ["AI 增长", "全栈思维", "数据驱动", "社区运营", "产品运营", "效率工具"];

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typewrittenText, setTypewrittenText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // High fidelity character-by-character typing loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = ROLES[roleIndex];
    
    if (isDeleting) {
      // Deleting speed
      timer = setTimeout(() => {
        setTypewrittenText(currentWord.substring(0, typewrittenText.length - 1));
      }, 70);
    } else {
      // Typing speed
      timer = setTimeout(() => {
        setTypewrittenText(currentWord.substring(0, typewrittenText.length + 1));
      }, 120);
    }

    // Handles state switching
    if (!isDeleting && typewrittenText === currentWord) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typewrittenText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [typewrittenText, isDeleting, roleIndex]);

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#D5EAE3]/40 bg-[#F8F4E9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Avatar & Skills/Roles Tag Flow */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          {/* Avatar frame container */}
          <div className="relative mb-6 group w-full flex justify-center">
            <div className="about-photo-wrap w-72 h-[370px] sm:w-80 sm:h-[420px] md:w-[380px] md:h-[500px] max-w-full overflow-hidden rounded-[2.5rem] about-photo-shadow bg-white flex items-center justify-center p-2.5 transition-all duration-500 hover:scale-[1.02]">
              <img 
                src={AVATAR_PATH} 
                alt="苏子欣 Sue" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2rem] bg-[#D5EAE3]"
              />
            </div>
            
            {/* Soft decorative badge on the photo */}
            <div className="absolute -bottom-4 -right-4 sm:right-4 md:right-0 bg-[#775C55] text-[#F8F4E9] py-2 px-4 rounded-2xl text-xs font-mono shadow-md flex items-center gap-1 z-10">
              <span className="w-2 h-2 rounded-full bg-[#D5EAE3] animate-pulse" />
              <span>Stay Hungry, Stay Vibe</span>
            </div>
          </div>

        </div>

        {/* Right Column: Bio Details and Animated Typewriter text */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          
          {/* Heading Section */}
          <div id="about-heading" className="mb-8">
            <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5">
              ABOUT SUE / 关于我
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#775C55] leading-tight">
              苏子欣
            </h2>
            
            {/* Dynamic Interactive Typewriter */}
            <div className="mt-4 flex items-center gap-2 min-h-[32px]">
              <ChevronRight className="w-5 h-5 text-[#775C55]/45" />
              <span className="text-lg font-mono text-[#775C55] font-semibold">
                定位：
              </span>
              <span className="text-lg font-mono font-bold text-[#775C55] bg-[#D5EAE3]/40 px-2.5 py-0.5 rounded-lg border-b-2 border-[#FDD3D5]">
                {typewrittenText}
              </span>
              <span className="about-cursor border-r-2 border-[#775C55] h-5 inline-block w-[1px] ml-0.5" />
            </div>
          </div>

          {/* Literal Narrative copy prescribed precisely by requirements */}
          <div className="space-y-6 text-base sm:text-lg text-[#775C55] leading-relaxed font-sans">
            <p>
              我是苏子欣 (Sue)，毕业于英国<span className="bg-[#FDD3D5]/70 px-1.5 py-0.5 rounded-md text-[#7C4447] font-bold">华威大学电子商务与数字分析硕士</span>学位，本科毕业于<span className="bg-[#FDD3D5]/70 px-1.5 py-0.5 rounded-md text-[#7C4447] font-bold">北京林业大学电子信息科学与技术</span>专业。
            </p>
            <p>
              我在医疗 AI、AI 开发者社区与数字运营领域有多段项目实战经验。
            </p>
            <p>
              曾在<span className="font-bold text-stone-900">医渡科技</span>独立推进智能体搭建，参与国家级医疗数据标准制定。
            </p>
            <p>
              主导 <span className="font-bold text-stone-900">AIGCLink 社区</span>增长与开发者建联，三个月内新建 4 个社群（累计 <span className="bg-[#D5EAE3]/80 px-1.5 py-0.5 rounded-md text-[#2F5144] font-bold">2000+</span> 垂直领域开发者），开发者入驻<span className="bg-[#D5EAE3]/80 px-1.5 py-0.5 rounded-md text-[#2F5144] font-bold">转化率 27%</span>。
            </p>
            <p>
              在运动科技公司 <span className="font-bold text-stone-900">RQrun</span> 完成竞品分析与用户增长运营，<span className="bg-[#D5EAE3]/80 px-1.5 py-0.5 rounded-md text-[#2F5144] font-bold">知乎 46 万阅读、微博 60 万阅读，涨粉 5000+</span>。
            </p>
          </div>



        </div>
      </div>
    </section>
  );
}
