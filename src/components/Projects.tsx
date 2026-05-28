/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FolderGit2, Star, CheckCircle, ShieldAlert, Cpu, Award, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../types";

export default function Projects() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [zoomTitle, setZoomTitle] = useState<string>("");

  return (
    <section id="projects" className="py-24 px-6 bg-white border-b border-[#D5EAE3]/40">
      {/* Self-contained style block for high fidelity Uiverse card cutout & skew effect adapted to theme */}
      <style>{`
        .custom-project-card {
          width: 100%;
          max-width: 540px;
          border-radius: 20px;
          background: #362925; /* Adapted deep chocolate-charcoal to coordinate with page theme color */
          padding: 6px;
          overflow: hidden;
          box-shadow: rgba(100, 100, 111, 0.15) 0px 7px 20px 0px;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        .custom-project-card:hover {
          transform: scale(1.03);
          box-shadow: rgba(119, 92, 85, 0.25) 0px 15px 35px 0px;
        }

        .custom-project-card .top-section {
          height: 140px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(135deg, #D5EAE3 0%, #FDD3D5 100%); /* Elegant page theme gradient */
          position: relative;
          padding: 14px;
        }

        .custom-project-card .top-section .border {
          border-bottom-right-radius: 10px;
          height: 30px;
          width: 130px;
          background: #362925;
          position: absolute;
          top: 0;
          left: 0;
          transform: skew(-40deg);
          transform-origin: top left;
          box-shadow: -10px -10px 0 0 #362925;
        }

        .custom-project-card .top-section .border::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          top: 0;
          right: -15px;
          background: transparent;
          border-top-left-radius: 10px;
          box-shadow: -5px -5px 0 2px #362925;
        }

        .custom-project-card .top-section::before {
          content: "";
          position: absolute;
          top: 30px;
          left: 0;
          background: transparent;
          height: 15px;
          width: 15px;
          border-top-left-radius: 15px;
          box-shadow: -5px -5px 0 2px #362925;
        }

        .custom-project-card .top-section .icons {
          position: absolute;
          top: 0;
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          left: 0;
        }

        .custom-project-card .top-section .icons .logo {
          height: 100%;
          aspect-ratio: 1;
          padding: 7px 0 7px 15px;
          display: flex;
          align-items: center;
        }

        .custom-project-card .top-section .icons .logo .svg {
          height: 100%;
        }

        .custom-project-card .top-section .icons .social-media {
          height: 100%;
          padding: 8px 15px;
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .custom-project-card .top-section .icons .social-media .svg {
          height: 14px;
          width: 14px;
          fill: #362925;
          transition: fill 0.2s ease;
        }

        .custom-project-card .top-section .icons .social-media .svg:hover {
          fill: #FFFFFF;
        }

        .custom-project-card .bottom-section {
          margin-top: 15px;
          padding: 10px 14px 14px 14px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .custom-project-card .bottom-section .title {
          display: block;
          font-size: 18px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .custom-project-card .bottom-section .role-label {
          font-size: 11px;
          font-family: monospace;
          color: #FDD3D5;
          opacity: 0.9;
          margin-bottom: 12px;
          display: block;
        }

        .custom-project-card .bottom-section .row {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 14px;
        }

        .custom-project-card .bottom-section .row .item {
          flex: 33.33%;
          text-align: center;
          padding: 5px;
          color: #D5EAE3;
        }

        .custom-project-card .bottom-section .row .item .big-text {
          font-size: 14px;
          font-weight: 800;
          display: block;
          color: #FDD3D5;
        }

        .custom-project-card .bottom-section .row .item .regular-text {
          font-size: 9px;
          color: rgba(254, 254, 254, 0.6);
          display: block;
          margin-top: 2px;
        }

        .custom-project-card .bottom-section .row .item:nth-child(2) {
          border-left: 1px solid rgba(255, 255, 255, 0.126);
          border-right: 1px solid rgba(255, 255, 255, 0.126);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5">
            CREATIVE CREATION / 核心项目作品
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#775C55]">
            我的自动化实战项目
          </h2>
          <p className="text-xs text-[#775C55]/50 mt-1 uppercase font-mono tracking-wide">
            Double flagship automation systems under constant maintenance / 两款效率增长工具详情
          </p>
        </div>

        {/* Dual columns for projects with precise styled elements */}
        <div id="projects-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <div key={project.title} className="custom-project-card group/card">
                {/* Smooth hover expand/slide image from top */}
                {project.imageUrl && (
                  <div 
                    onClick={() => {
                      setZoomImage(project.imageUrl || null);
                      setZoomTitle(project.title);
                    }}
                    className="w-full h-0 opacity-0 group-hover/card:h-[220px] group-hover/card:opacity-100 group-hover/card:mb-3 transition-all duration-500 ease-out overflow-hidden rounded-[14px] cursor-zoom-in relative group/image-box"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover/image-box:scale-[1.05]"
                    />
                    {/* Visual Hover Tag Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image-box:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white text-xs font-sans font-medium tracking-wide">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637zM10.5 7.5v6m3-3h-6" />
                      </svg>
                      <span>点击放大看高清大图</span>
                    </div>
                  </div>
                )}

                <div className="top-section">
                  <div className="border"></div>
                  <div className="icons">
                    <div className="logo">
                      {/* Brand dynamic SVG logo embedded seamlessly */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="w-[18px] h-[18px]">
                        <path fill="#362925" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"></path>
                        <path fill="#362925" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"></path>
                        <path fill="#362925" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"></path>
                      </svg>
                    </div>
                    <div className="social-media">
                      {/* Social SVG 1 */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="svg">
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                      </svg>
                      {/* Social SVG 2 */}
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Elegant Floating Pills inside Gradient area */}
                  <div className="flex flex-wrap gap-1.5 mb-1 max-w-full">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-lg bg-white/50 backdrop-blur-xs text-[10px] font-sans font-semibold text-[#362925] border border-white/30 cursor-default select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bottom-section">
                  <div>
                    <span className="title font-sans">{project.title}</span>
                    <span className="role-label font-mono">角色: {project.role}</span>
                    
                    <p className="text-[12px] sm:text-[13px] text-white/80 leading-relaxed font-sans mb-5 font-normal">
                      {project.description}
                    </p>

                    {/* Highly-styled Checkbullets of Achievements */}
                    <div className="space-y-3.5 mb-2">
                      {project.highlights.map((highlight, index) => {
                        const valueParts = highlight.split("：");
                        
                        return (
                          <div key={index} className="flex gap-2.5 items-start text-[11px] sm:text-[12px] text-white/70">
                            <CheckCircle className="w-3.5 h-3.5 text-[#D5EAE3] flex-shrink-0 mt-[1px]" />
                            <p className="leading-relaxed font-sans">
                              {valueParts.length > 1 ? (
                                <>
                                  <strong className="text-[#FDD3D5] font-bold">{valueParts[0]}：</strong>
                                  <span>{valueParts.slice(1).join("：")}</span>
                                </>
                              ) : (
                                highlight
                              )}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Status Rows dynamically bound to the metrics */}
                  <div className="row">
                    {isFirst ? (
                      <>
                        <div className="item">
                          <span className="big-text font-sans">3 倍</span>
                          <span className="regular-text">日均筛选效率</span>
                        </div>
                        <div className="item">
                          <span className="big-text font-sans">27%</span>
                          <span className="regular-text">私域入群转化</span>
                        </div>
                        <div className="item">
                          <span className="big-text font-sans">100%</span>
                          <span className="regular-text">跨多平台联通</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="item">
                          <span className="big-text font-sans">5 分钟</span>
                          <span className="regular-text">单篇生产时间</span>
                        </div>
                        <div className="item">
                          <span className="big-text font-sans">83%</span>
                          <span className="regular-text">自媒体效率提升</span>
                        </div>
                        <div className="item">
                          <span className="big-text font-sans">1000+</span>
                          <span className="regular-text">爆款点赞捕获</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out select-none"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setZoomImage(null)}
                className="absolute -top-12 sm:top-4 -right-2 sm:right-4 p-2.5 rounded-full bg-black/60 sm:bg-white/10 text-white/95 hover:bg-black/80 sm:hover:bg-white/20 active:scale-95 transition-all z-10 cursor-pointer border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={zoomImage}
                alt={zoomTitle}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none bg-stone-900"
              />

              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-black/65 backdrop-blur-md rounded-xl border border-white/10 self-start text-xs sm:text-sm font-sans font-semibold text-white/95 tracking-wide inline-flex items-center gap-2 max-w-max">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{zoomTitle}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
