/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import BlurText from "./BlurText";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[100vh] sm:min-h-[92vh] flex flex-col justify-center items-center relative py-12 px-8 overflow-hidden bg-[#F5F0E8] select-none text-center"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Badge Tag */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="inline-flex items-center gap-2 border border-[#C4A882] rounded-full px-6 py-2.5 text-sm sm:text-[15px] md:text-base text-[#7A5C3E] font-medium tracking-widest mb-12 sm:mb-16 bg-transparent shadow-xs"
      >
        <span className="text-[#C4A882] text-sm md:text-base animate-pulse">✦</span> AI运营 × 产品增长 × 创意技术
      </motion.div>

      {/* Main Headline Block */}
      <h1 className="text-center leading-[1.08] mb-14 sm:mb-20">
        {/* Line 1 */}
        <span className="block font-playfair text-[clamp(44px,9vw,80px)] font-bold text-[#3A2E22] tracking-tight leading-[1.08] relative mb-1">
          <BlurText
            text="Finding myself"
            delay={80}
            animateBy="words"
            direction="top"
            className="font-playfair font-bold text-[#3A2E22]"
          />
          <span className="hero-cursor -mt-1 sm:-mt-2" />
        </span>

        {/* Line 2 */}
        <span className="block font-playfair text-[clamp(44px,9vw,80px)] font-bold text-[#D4A8A0] tracking-tight leading-[1.08] flex items-center justify-center gap-x-[0.2em] flex-wrap">
          <BlurText
            text="in what I"
            delay={160}
            animateBy="words"
            direction="top"
            className="font-playfair font-bold text-[#D4A8A0]"
          />
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)", y: -50 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="inline-block"
          >
            <SparklesText
              className="font-playfair font-bold text-[#D4A8A0] text-[clamp(44px,9vw,80px)] tracking-tight inline-block"
              colors={["#FF595E", "#FF924C", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93", "#FF007F"]}
            >
              build.
            </SparklesText>
          </motion.span>
        </span>
      </h1>

      {/* Bounce to scroll indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#9A856E] text-[11px] tracking-widest uppercase cursor-pointer hover:text-[#7A5C3E] transition-colors"
      >
        <div className="scroll-bounce-arrow w-7 h-7 border-[1.5px] border-[#C4A882] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 stroke-[#9A856E] fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 12 12">
            <polyline points="2,4 6,8 10,4" />
          </svg>
        </div>
        Scroll to explore
      </motion.a>
    </section>
  );
}
