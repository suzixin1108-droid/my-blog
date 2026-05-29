/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, Hash, Sparkles } from "lucide-react";
import { XHS_POSTS } from "../types";

export default function XhsInspiration() {
  return (
    <section id="xhs" className="py-24 px-6 bg-[#F8F4E9] border-b border-[#D5EAE3]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Module Title Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5">
            VIRAL WORKFLOW / 小红书爆款图文实操
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#775C55]">
            小红书内容运营产出
          </h2>
          <p className="text-xs text-[#775C55]/50 mt-1 uppercase font-mono tracking-wide">
            Film-frame card style representing real viral template postings / 胶片卡片式爆款笔记展示
          </p>
        </div>

        {/* Notes Grid arranged nicely */}
        <div id="xhs-deck" className="flex flex-nowrap overflow-x-auto pb-6 justify-start gap-6 md:gap-8 lg:gap-10 w-full scrollbar-thin scrollbar-thumb-[#775C55]/20 scrollbar-track-transparent">
          {XHS_POSTS.map((post) => {
            const isClickable = !!post.link;
            const CardComponent = isClickable ? "a" : "div";
            
            return (
              <CardComponent
                key={post.id}
                data-frame={post.frameNo}
                href={post.link}
                target={isClickable ? "_blank" : undefined}
                rel={isClickable ? "noopener noreferrer" : undefined}
                className={`xhs-film-card w-[280px] h-[375px] shrink-0 bg-white border border-[#D5EAE3] rounded-3xl p-4 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 select-none group relative overflow-hidden ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                style={{
                  boxShadow: "0 10px 25px rgba(119, 92, 85, 0.05)"
                }}
              >
                {/* Decorative filmstrip sprocket holes on bottom and top margins */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-40">
                  {Array.from({ length: 6 }).map((_, is) => (
                    <div key={is} className="w-2.5 h-1.5 rounded-sm bg-stone-200" />
                  ))}
                </div>
                
                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 pointer-events-none opacity-40">
                  {Array.from({ length: 6 }).map((_, is) => (
                    <div key={is} className="w-2.5 h-1.5 rounded-sm bg-stone-200" />
                  ))}
                </div>

                {/* Main mockup cover viewport */}
                <div className="w-full h-44 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 mt-3 bg-stone-50">
                  
                  {/* Styled template gradient graphics representing real posts */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${post.coverStyle} opacity-90 transition-transform duration-500 group-hover:scale-106`} />
                  
                  {/* Display cover image if present */}
                  {post.imageUrl && (
                    <>
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark gradient mapping overlay to protect text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-900/10" />
                    </>
                  )}
                  
                  {/* Cover text elements mocked */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    {!post.imageUrl && (
                      <>
                        <div className="w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-1">
                          <Sparkles className="w-5 h-5 text-[#775C55]" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-sans font-bold py-1 px-2.5 rounded-full bg-stone-900/10 text-stone-850">
                          English Tutorial
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-mono font-extrabold mt-1 select-none tracking-wider text-[#775C55]/50">
                          COZE AUTOMATION V1
                        </span>
                      </>
                    )}
                  </div>

                  {/* Tiny design features replicating Red interface */}
                  <span className={`absolute bottom-2.5 left-2.5 text-[11px] font-mono px-2 py-0.5 rounded-md font-semibold ${post.imageUrl ? 'bg-stone-900/70 text-white' : 'bg-white/70 text-[#775C55]'}`}>
                    No. {post.frameNo}
                  </span>
                  
                  {/* Subtle water mark */}
                  <span className={`absolute top-2.5 left-2.5 text-[8px] font-mono select-none uppercase tracking-widest ${post.imageUrl ? 'text-white/80' : 'text-stone-400'}`}>
                    Sue's Lab
                  </span>

                  {isClickable && (
                    <span className="absolute top-2.5 right-2.5 text-[9px] font-sans font-semibold bg-rose-500 text-white px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      点击跳转 ↗
                    </span>
                  )}
                </div>

                {/* Body metadata card description */}
                <div className="mb-2 flex-1 flex flex-col justify-between mt-3 px-1">
                  
                  {/* Note info text */}
                  <div>
                    <h4 className="text-[13px] sm:text-[14px] font-extrabold text-[#775C55] leading-snug group-hover:text-rose-500 transition-colors">
                      {post.title}
                    </h4>
                    
                    {/* Hashtags display */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {post.topics.map((topic, ti) => (
                        <span key={ti} className="text-[11px] sm:text-xs font-medium text-[#775C55]/70 bg-stone-100/70 px-2 py-0.5 rounded-md flex items-center gap-0.5">
                          <Hash className="w-3 h-3 text-stone-400/80" />
                          {topic.replace("#", "")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Likes / Interactive count footer */}
                  <div className="flex justify-between items-center pt-2.5 border-t border-stone-100 mt-2 text-xs">
                    <span className="text-[10px] text-[#775C55]/45 font-mono">
                      ENGAGEMENT
                    </span>
                    
                    {/* Heated pink like count explicitly requested */}
                    <div className="flex items-center gap-1.5 font-bold text-[#775C55]/90 bg-[#FDD3D5]/20 hover:bg-[#FDD3D5]/40 transition-colors px-2.5 py-1 rounded-full border border-[#FDD3D5]/40 cursor-default select-none">
                      <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
                      <span className="text-stone-850 font-mono text-xs">{post.likes}</span>
                    </div>
                  </div>

                </div>

              </CardComponent>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
