/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { Play, Sparkles, Monitor, AppWindow, Cpu, Volume2, VolumeX, Maximize2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function CommunityEventPageDesign() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="event-page-design" className="py-24 px-6 bg-white border-b border-[#D5EAE3]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Module Title Section */}
        <div className="text-center mb-16 select-none">
          <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            VIBE CODING SHOWCASE / 交互网页开发实操
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#775C55] tracking-tight">
            AIGCLink 社区活动页设计
          </h2>
        </div>

        {/* Content Layout: 2 Columns - Text description first on mobile, video second OR large beautifully framed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Description Left (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#D5EAE3]/40 text-[#775C55] rounded-full text-[10px] font-mono font-bold tracking-wider">AI Studio</span>
              <span className="px-3 py-1 bg-[#D5EAE3]/40 text-[#775C55] rounded-full text-[10px] font-mono font-bold tracking-wider">v0</span>
              <span className="px-3 py-1 bg-[#D5EAE3]/40 text-[#775C55] rounded-full text-[10px] font-mono font-bold tracking-wider">Vibe Coding</span>
              <span className="px-3 py-1 bg-[#D5EAE3]/40 text-[#775C55] rounded-full text-[10px] font-mono font-bold tracking-wider">React & Tailwind</span>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-base sm:text-lg text-[#775C55]/75 leading-relaxed font-sans mt-2">
                依托 <strong>Google AI Studio</strong> 和 <strong>v0</strong> 等尖端模型技术，通过 <strong>Vibe Coding</strong> 方法快速设计并全栈实现的高保真社区活动落地主页。
              </p>
            </div>

            <div className="border-l-2 border-[#D5EAE3] pl-4 md:pl-5 flex flex-col gap-3 mt-2 text-[#775C55]/85">
              <p className="text-sm md:text-base font-sans leading-relaxed">
                👉 <strong>采用模块化架构：</strong> 整合了活动关键日程表、响应式报名入口、技术分享照片墙等互动版块。
              </p>
              <p className="text-sm md:text-base font-sans leading-relaxed">
                👉 <strong>视觉动效支持：</strong> 通过弹性卡片、淡入过渡和视差背景，实现了较为流畅的响应式交互。
              </p>
            </div>

            {/* Action Live Link Button */}
            <div className="mt-4 flex flex-col gap-2.5 select-none">
              <div className="flex">
                <a
                  href="https://event-web-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#775C55] hover:bg-[#a57f73] active:scale-[0.97] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-[#775C55]/10 hover:shadow-[#a57f73]/20 transition-all duration-300 group cursor-pointer"
                >
                  <span>访问活动在线页面</span>
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
              <span className="text-[11px] font-sans text-amber-700/90 bg-amber-500/5 px-3 py-1.5 rounded-lg border border-amber-500/15 flex items-center gap-1.5 self-start">
                💡 友情提示：网站托管于境外服务器，如遇加载缓慢可开启网络代理（魔法）访问。
              </span>
            </div>


          </div>

          {/* Video Mockup Frame Right (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant Widescreen Desktop Shell Pedestal Card */}
            <div 
              className="bg-stone-900 rounded-[2rem] p-3 shadow-2xl border border-stone-800 relative overflow-hidden group/video"
              style={{
                boxShadow: "0 25px 60px rgba(119, 92, 85, 0.18)"
              }}
            >
              {/* Browser bar headers with decorative controls */}
              <div className="flex items-center justify-between pb-3 px-4 border-b border-stone-800/60 select-none">
                <div className="flex items-center gap-1.5 h-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                
                {/* Mock URL bar demonstrating high fidelity structure */}
                <div className="bg-stone-800/50 border border-stone-800 text-[10px] font-mono text-stone-400 py-1 px-8 rounded-lg max-w-sm truncate text-center scale-90">
                  https://aigclink.co/events/openclaw-showcase
                </div>
                
                <div className="flex items-center gap-2">
                  <AppWindow className="w-4 h-4 text-stone-500" />
                </div>
              </div>

              {/* Viewport Canvas for the Actual Video */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="https://cropgif.net/videos/1779956553818-b2bb37c9-67df-487a-94af-050b0c8eee3c.mp4"
                  className="w-full h-full object-cover select-none pointer-events-auto"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                />

                {/* Soft glow glassmorphism gradient overlay when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-subtle flex items-center justify-center pointer-events-none transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-lg transform scale-110">
                      <Play className="w-6 h-6 text-white translate-x-0.5 fill-white" />
                    </div>
                  </div>
                )}

                {/* Highly intuitive responsive bottom-edge glass media players' custom control bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between border border-white/10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-20">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 px-2 text-white/95 hover:text-white hover:bg-white/10 active:scale-95 transition-all text-xs font-mono font-bold uppercase flex items-center gap-1 cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <span className="w-1.5 h-2.5 border-l-2 border-r-2 border-white inline-block mr-1" />
                          PAUSE
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white inline-block mr-0.5" />
                          PLAY
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="p-1 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-stone-300" /> : <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />}
                    </button>
                  </div>

                  <div className="text-[10px] font-mono text-white/60 tracking-wider">
                    DEMO SCREENPLAY
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Interactive Overlay Overlay Hint Card top corner */}
                <div className="absolute top-4 left-4 bg-[#775C55]/95 backdrop-blur-sm shadow-md py-1 px-3.5 rounded-lg border border-white/10 pointer-events-none select-none flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-sans font-bold text-white tracking-widest uppercase">HD SCREEN RECORD</span>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <p className="text-[11px] font-mono text-center text-[#775C55]/60 mt-3 flex items-center justify-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#775C55]/40" />
              <span>智能驱动极速产出演示视频（支持播放、静音与全屏缩放）</span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
