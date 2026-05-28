/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ArrowDownRight, 
  GraduationCap, 
  Laptop, 
  Layers, 
  Cpu, 
  TrendingUp 
} from "lucide-react";
import Particles from "../../components/Particles";

interface TimelineItem {
  id: string;
  yearRange: string;
  badge: string;
  title: string;
  subtitle: string;
  detail: string;
  image: string;
  accent: string;
  buttonText: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "01",
    yearRange: "2020 – 2024",
    badge: "工科底座 · 211院校",
    title: "北京林业大学",
    subtitle: "电子信息科学与技术（本科）",
    detail: "电子信息科学与技术，本科，211院校。均分：85.19 | 排名：16/69。主修课程：c语言、C++、java、Android、通信原理、模拟电路、数字信号处理、信号与系统、传感器原理、高频电子技术、线性代数、高等数学、汇编语言、EDA技术、数学模型、数字音视频处理技术等。",
    image: "https://img.cdn1.vip/i/6a1520caaf36d_1779769546.webp",
    accent: "#D5EAE3",
    buttonText: "查看主修方向"
  },
  {
    id: "02",
    yearRange: "2024.01 – 2024.08",
    badge: "新媒体 ·极速优化",
    title: "东莞跑力科技有限公司（RQrun）",
    subtitle: "新媒体运营实习生",
    detail: "新媒体运营实习生。\n\n1. 竞品分析：开展市场调研，为公司业务优化提供数据支持：\n- B站调研：分析Keep、佳明、高驰等品牌及跑步类KOL的内容策略 and 数据表现，形成可行性报告，明确RQrun未来B站发展方向。\n- 鞋库分析：主导鞋库功能的竞品交互分析，采用用户路径对比法梳理悦跑圈、Keep、咕咚等平台差异，结合用户痛点提出优化建议。最终报告被采纳用于产品迭代，优化方案将跑鞋添加路径由原来的三步缩减至两步，提升了用户操作的流畅性和整体体验感。\n\n2. 运营管理：负责RQrun微博、知乎、App读书角的日常运营，追踪网络热点并撰写文案，提升品牌曝光度与用户互动。在职期间：\n- 知乎更新75篇文章，总阅读量达46万次，粉丝增长3000+人。\n- 微博更新85条，总阅读量达60w次，粉丝增长2000+人。\n\n3. 视觉设计：负责社交媒体运营相关的视觉内容设计，包括：\n- 功能使用教程、知识科普、活动海报等图片制作，提高内容吸引力。\n- 公众号文章排版与美化，优化阅读体验，提升品牌专业度。",
    image: "https://img.cdn1.vip/i/6a1520627fdea_1779769442.webp",
    accent: "#FDD3D5",
    buttonText: "查看运营成果"
  },
  {
    id: "03",
    yearRange: "2024 – 2025",
    badge: "境外卓越 · QS69强",
    title: "华威大学（University of Warwick）",
    subtitle: "电子商务与数字分析（硕士）",
    detail: "电子商务与数字分析，硕士，QS69。学位等级：Merit。主修课程：大数据分析及优化、Python数字开发、数字零售运营、数字创业与融资、企业电商解决方案、敏捷项目管理与咨询等。",
    image: "https://img.cdn1.vip/i/6a15225b6850b_1779769947.webp",
    accent: "#D5EAE3",
    buttonText: "游历名校时光"
  },
  {
    id: "04",
    yearRange: "2025",
    badge: "算法应用 · AIGC智能体",
    title: "北京医渡科技有限公司",
    subtitle: "AI产品运营实习生（医渡大模型部门）",
    detail: "AI产品运营实习生（医渡大模型部门）。\n\n1. Workflow智能体搭建：从0到1设计并交付医院场景AI工作流，包括：\n- AI客服助手集群（通过提示词工程实现多轮对话与意图识别，覆盖智能导诊、便民服务及患者教育）\n- 问卷自动生成助手（依据关键词与医学指南自动生成结构化问卷）\n- Coze文献追踪工作流（实现新发表研究的自动抓取与邮箱推送）。\n\n2. 用户培训内容搭建：快速学习公司AI中台产品，独立输出医生端培训文档、操作手册及PPT，完成1小时模拟医生培训，支撑产品上线前的用户教育流程。\n\n3. 产品演示视频制作：使用剪映制作产品功能操作演示视频，辅助医院客户理解核心功能与使用路径，提高沟通与学习效率。\n\n4. 黑客松技术支持：为清华校友会联合举办 of 智能体搭建Hackathon大赛提供技术支持，负责解答技术问题、记录选手需求并反馈至研发团队，促进平台迭代与选手体验提升。\n\n5. 大模型医疗文献研究：精读30篇LLM在临床医学领域的前沿文献，向产品研发团队汇报技术趋势与产品方向。\n\n6. 运营数据复盘：搭建智能体运营数据监控体系，每月复盘用户活跃度、使用频次、智能体生态等核心指标，为产品优化及运营策略调整提供数据支持。",
    image: "https://img.cdn1.vip/i/6a152069dfacc_1779769449.webp",
    accent: "#FDD3D5",
    buttonText: "查看大模型专栏"
  },
  {
    id: "05",
    yearRange: "2026",
    badge: "社区增长 · AIGC",
    title: "零克云（北京）科技有限公司",
    subtitle: "AI社区运营",
    detail: "AI社区运营。\n\n1. AIGCLink社区增长：两个月内新建3个社群（累计1500+人），维护社群质量与活跃度；统筹微信、小红书、B站、抖音全平台私信互动与合作挖掘，日均处理社区消息100+条，累计成功转化合作60+项，转化率20%。\n\n2. 独立开发者建联：通过筛选GitHub上近期快速增长的AI开源项目，搭建自动化Skill实现批量触达与评估，累计触达500+开发者，引入180+人加入社区（转化率36%）；同时策划社区与开发者互推合作，负责洽谈与进度追踪。\n\n3. 社区官网活动页面制作（Vibe Coding）：使用AI Studio、v0等工具，通过Vibe Coding方式快速搭建社区官网落地页，包含活动信息展示、报名入口、照片墙等模块，有效支撑品牌传播与活动曝光。\n\n4. 社区活动统筹：负责线上线下技术分享及黑客松预热活动全流程落地，涵盖方案策划、物料准备、社群宣发至现场组织；\n- 主导「OPCLink百校行·北京联合大学站：OpenClaw养虾训练营」\n- 参与北京第八十中学第二课堂宣讲，负责社区宣传及个人经验分享。",
    image: "https://img.cdn1.vip/i/6a152062efb48_1779769442.webp",
    accent: "#D5EAE3",
    buttonText: "访问社区官网"
  }
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating background dots config
  const dots = [
    { left: "6%", top: "15%", size: 6, duration: 4.5, delay: 0.1 },
    { left: "12%", top: "65%", size: 8, duration: 5.8, delay: 0.7 },
    { left: "40%", top: "28%", size: 5, duration: 3.9, delay: 1.3 },
    { left: "82%", top: "16%", size: 7, duration: 5.2, delay: 0.5 },
    { left: "88%", top: "78%", size: 10, duration: 6.5, delay: 2.3 },
    { left: "26%", top: "82%", size: 6, duration: 4.8, delay: 1.7 },
    { left: "70%", top: "92%", size: 8, duration: 4.2, delay: 1.1 },
    { left: "50%", top: "68%", size: 5, duration: 3.6, delay: 0.2 },
    { left: "30%", top: "45%", size: 9, duration: 6.0, delay: 1.9 },
    { left: "94%", top: "48%", size: 6, duration: 4.4, delay: 0.8 },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Set up active node tracker with full screen viewport checks
    for (let i = 0; i < TIMELINE_DATA.length; i++) {
      const element = document.getElementById(`timeline-trigger-node-${i}`);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveIndex(i);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: "-15% 0px -15% 0px"
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    }

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Center timeline coordinates (X, Y) relative to its SVG frame
  // Calculated to lie precisely on the quadratic bezier curve M 160 10 Q 320 250 160 490
  const nodeCoords = [
    { x: 189, y: 58 },
    { x: 227, y: 154 },
    { x: 240, y: 250 },
    { x: 227, y: 346 },
    { x: 189, y: 442 }
  ];

  const activePercent = 11 + activeIndex * 20;
  const activeCoord = nodeCoords[activeIndex];

  const getYearLabel = (range: string) => {
    const match = range.match(/\d{4}/);
    return match ? match[0] : range;
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "01": return <Cpu className="w-4 h-4 text-[#775C55]" />;
      case "02": return <GraduationCap className="w-4 h-4 text-[#775C55]" />;
      case "03": return <TrendingUp className="w-4 h-4 text-[#775C55]" />;
      case "04": return <Layers className="w-4 h-4 text-[#775C55]" />;
      default: return <Laptop className="w-4 h-4 text-[#775C55]" />;
    }
  };

  return (
    <section 
      id="timeline" 
      ref={containerRef}
      className="relative bg-[#D5EAE3] select-none"
      style={{ height: "500vh" }}
    >
      {/* 1. Ambient Slow Floating Background Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#775C55]/15"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 2. Primary Sticky UI Viewport Frame */}
      <div className="sticky top-0 left-0 w-full h-screen min-h-[600px] sm:min-h-[650px] md:min-h-[720px] overflow-hidden z-20 flex flex-col md:grid md:grid-cols-12 px-6 md:px-16 py-4 md:py-8 lg:py-10 justify-between md:gap-4">
        
        {/* Particles Background Layer inside Sticky Frame */}
        <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
          <Particles 
            particleCount={170}
            particleSpread={11}
            speed={0.15}
            particleColors={["#FFFFFF", "#F9F9F9", "#F0F0F0"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1.2}
            alphaParticles={true}
            particleBaseSize={100}
            sizeRandomness={0.8}
            cameraDistance={20}
            className="w-full h-full"
          />
        </div>

        {/* Left Fixed Content Column */}
        <div className="col-span-3 h-full flex flex-col justify-center relative z-10">
          <div className="py-12">
            <span className="text-[10px] md:text-sm font-mono tracking-[0.25em] text-[#775C55]/50 uppercase block mb-1.5 md:mb-3">
              GROWTH CHRONOLOGY / 个人成长轨迹
            </span>
            <h2 className="text-2xl md:text-4xl font-sans font-black text-[#775C55] tracking-tight leading-tight select-none">
              Five years.<br />One direction.
            </h2>
          </div>

          {/* Left Bottom Counter with Fade In Entry */}
          <div className="hidden md:flex absolute bottom-0 left-0 items-baseline gap-2.5 text-[#775C55] font-mono select-none">
            <div className="h-10 overflow-hidden relative w-12 flex justify-start items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={activeIndex}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="text-4xl font-extrabold text-[#775C55]"
                >
                  {`0${activeIndex + 1}`}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-xl text-[#775C55]/30">/</span>
            <span className="text-xl font-medium text-[#775C55]/60">05</span>
          </div>
        </div>

        {/* Middle Vertical Spline Section */}
        <div className="hidden md:flex col-span-3 h-full justify-center items-center relative z-10 px-2 lg:px-4">
          <svg className="w-full max-w-[340px] h-[380px] lg:h-[450px] xl:h-[500px]" viewBox="0 0 320 500" fill="none">
            {/* Linear Gradient representing progress tracking along the curve */}
            <defs>
              <linearGradient id="timeline-prog-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#775C55" />
                <stop offset={`${Math.max(0, activePercent - 3)}%`} stopColor="#775C55" />
                <stop offset={`${Math.min(100, activePercent + 3)}%`} stopColor="#FFFFFF" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.5} />
              </linearGradient>
            </defs>

            {/* 1. Fine Inner Cosmic Orbit Circle */}
            <path 
              d="M 120 10 Q 280 250 120 490"
              fill="none" 
              stroke="#775C55"
              strokeWidth="1.5" 
              strokeDasharray="1 12"
              strokeLinecap="round"
              strokeOpacity="0.12"
            />

            {/* 2. Main Track Backbone (Thin solid guide curve) */}
            <path 
              d="M 160 10 Q 320 250 160 490"
              fill="none" 
              stroke="#775C55"
              strokeOpacity="0.1"
              strokeWidth="1.5" 
            />

            {/* 3. Main Track Dotted Path (Beautiful high fidelity dotted trail) */}
            <path 
              d="M 160 10 Q 320 250 160 490"
              fill="none" 
              stroke="url(#timeline-prog-grad)"
              strokeWidth="4" 
              strokeDasharray="1 12"
              strokeLinecap="round"
            />

            {/* 4. Fine Outer Concentric Orbit Circle */}
            <path 
              d="M 200 10 Q 360 250 200 490"
              fill="none" 
              stroke="#775C55"
              strokeWidth="1.5" 
              strokeDasharray="2 16"
              strokeLinecap="round"
              strokeOpacity="0.08"
            />

            {/* Interactive Nodes, Year Texts, and Orbits */}
            {nodeCoords.map((coord, idx) => {
              const isActive = idx === activeIndex;
              
              // Angle calculated to match path tangency for realistic curves
              const angle = (idx - 2) * 14; 
              
              // Anchor year labels to the left of the respective major node
              const textX = coord.x - (isActive ? 36 : 24);

              return (
                <g key={idx}>
                  {/* Outer subtle halo ring around every major event coordinates */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={isActive ? 10 : 6}
                    fill={isActive ? "#775C55" : "#FFFFFF"}
                    fillOpacity={isActive ? 0.15 : 1}
                    stroke="#775C55"
                    strokeWidth={isActive ? 1.5 : 2}
                    className="transition-all duration-500 shadow-sm"
                  />
                  
                  {/* Floating Year Numbers rotated elegantly along orbit boundaries */}
                  <text
                    x={textX}
                    y={coord.y}
                    textAnchor="end"
                    alignmentBaseline="middle"
                    className="font-sans select-none tracking-tighter"
                    style={{
                      fontSize: isActive ? "2.5rem" : "1.3rem",
                      fontWeight: isActive ? "900" : "700",
                      fill: "#775C55",
                      fillOpacity: isActive ? 1 : 0.28,
                      transformOrigin: `${textX}px ${coord.y}px`,
                      transform: `rotate(${angle}deg)`,
                      transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    {getYearLabel(TIMELINE_DATA[idx].yearRange)}
                  </text>
                </g>
              );
            })}

            {/* Active pulsing orbit visual lock-on locator */}
            <AnimatePresence>
              <motion.circle
                key={`pulse-${activeIndex}`}
                cx={activeCoord.x}
                cy={activeCoord.y}
                r={16}
                fill="#FDD3D5"
                opacity={0.7}
                animate={{ scale: [1, 1.45, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
              <circle
                cx={activeCoord.x}
                cy={activeCoord.y}
                r={7}
                fill="#775C55"
                stroke="#FFFFFF"
                strokeWidth={2.5}
              />
            </AnimatePresence>
          </svg>
        </div>

        {/* Right Switchable Polaroid Card Section */}
        <div className="col-span-6 h-full flex flex-col justify-center items-center relative z-10 px-0 md:px-4">
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl aspect-square sm:aspect-auto flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -55, opacity: 0 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="w-full bg-white border border-[#D5EAE3]/40 p-5 rounded-[2.5rem] relative flex flex-col justify-between group overflow-hidden"
                style={{
                  boxShadow: "0 18px 40px -20px rgba(119, 92, 85, 0.15)"
                }}
              >
                {/* Visual Accent Corner Bubble */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-[0.06] pointer-events-none transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundColor: TIMELINE_DATA[activeIndex].accent }}
                />

                <div className="w-full">
                  {/* Polaroid Frame rounded illustration top */}
                  <div className="relative w-full h-36 sm:h-44 md:h-52 lg:h-56 rounded-3xl overflow-hidden bg-stone-50 border border-stone-100 mb-3 flex items-center justify-center">
                    <img
                       src={TIMELINE_DATA[activeIndex].image}
                       alt={TIMELINE_DATA[activeIndex].title}
                       referrerPolicy="no-referrer"
                       className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Date Label Bottom Right over image */}
                    <span className="absolute bottom-3 right-3 px-3 py-1 bg-[#775C55]/80 backdrop-blur-subtle text-[11px] font-mono font-bold text-white rounded-full select-none shadow-sm">
                      {TIMELINE_DATA[activeIndex].yearRange}
                    </span>

                    {/* Left Top Badge Layer */}
                    <span 
                      className="absolute top-3 left-3 px-3.5 py-1 text-[10px] font-mono font-extrabold uppercase tracking-wide rounded-full select-none shadow-sm"
                      style={{ 
                        backgroundColor: TIMELINE_DATA[activeIndex].accent,
                        color: "#775C55"
                      }}
                    >
                      {TIMELINE_DATA[activeIndex].badge}
                    </span>
                  </div>

                  {/* Icon + Secondary Badging + Title Text Area */}
                  <div className="flex gap-3 items-start px-1">
                    <div 
                      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${TIMELINE_DATA[activeIndex].accent}90` }}
                    >
                      {getIcon(TIMELINE_DATA[activeIndex].id)}
                    </div>
                    <div>
                      <h4 className="text-[#775C55] font-sans font-black text-lg sm:text-lg lg:text-xl">
                        {TIMELINE_DATA[activeIndex].title}
                      </h4>
                      <p className="text-[#775C55]/60 font-medium text-xs sm:text-[13px] mt-0.5">
                        {TIMELINE_DATA[activeIndex].subtitle}
                       </p>
                    </div>
                  </div>

                  {/* Rich descriptive summary */}
                   <div className="text-[12px] sm:text-[13px] text-[#775C55]/80 leading-relaxed font-sans px-1 mt-2.5 sm:mt-3 whitespace-pre-line select-text max-h-[140px] md:max-h-[180px] lg:max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-200/50 pr-1 select-text">
                     {TIMELINE_DATA[activeIndex].detail}
                   </div>
                </div>


              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple Mobile Slide Counter */}
          <div className="md:hidden flex items-baseline gap-2.5 text-[#775C55]/70 font-mono mt-4 select-none">
            <span className="text-xl font-extrabold text-[#775C55]">
              {`0${activeIndex + 1}`}
            </span>
            <span className="text-base text-[#775C55]/30">/</span>
            <span className="text-base font-medium text-[#775C55]/60">05</span>
          </div>
        </div>

      </div>

      {/* 3. Empty Driving Scroll Anchor Blocks mapped to viewport triggers */}
      <div className="absolute inset-0 pointer-events-none">
        {TIMELINE_DATA.map((_, idx) => (
          <div 
            key={idx} 
            id={`timeline-trigger-node-${idx}`} 
            className="h-[100vh]" 
          />
        ))}
      </div>
    </section>
  );
}
