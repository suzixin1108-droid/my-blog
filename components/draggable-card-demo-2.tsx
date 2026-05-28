import React, { useState, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, ZoomIn, Info, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function DraggableCardDemo() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const items = [
    {
      id: 1,
      image: "https://img.cdn1.vip/i/6a12cc05ed615_1779616773.webp",
      title: "视觉品牌创意设计",
      category: "Brand Identity",
      date: "Spring 2026",
      desc: "融合未来主义与经典平面排版的品牌视觉方案，强调用色与优雅的负空间留白。",
      top: "10%",
      left: "6%",
      rotate: -10,
      zIndex: 10,
    },
    {
      id: 2,
      image: "https://img.cdn1.vip/i/6a12cc0573a7c_1779616773.webp",
      title: "艺术灵感空间设计",
      category: "Interior Spatial Study",
      date: "Winter 2025",
      desc: "探索数字光影与现代极简居家形态的叙事空间，构建和谐的情绪栖息地。",
      top: "22%",
      left: "17%",
      rotate: 6,
      zIndex: 15,
    },
    {
      id: 3,
      image: "https://img.cdn1.vip/i/6a12cc02d1c58_1779616770.webp",
      title: "光影重塑情绪海报",
      category: "Art Direction & Poster",
      date: "Autumn 2025",
      desc: "将极简雕塑线条重组，呈现高对比的光影对比与细腻质感的大片表现力。",
      top: "12%",
      left: "27%",
      rotate: -5,
      zIndex: 20,
    },
    {
      id: 4,
      image: "https://img.cdn1.vip/i/6a12cc0230504_1779616770.webp",
      title: "前卫解构服装拼贴",
      category: "Editorial Collection",
      date: "Summer 2025",
      desc: "以高级成衣裁剪折痕及织物肌理为底色，传递充满几何美学力量的先锋风范。",
      top: "24%",
      left: "38%",
      rotate: 8,
      zIndex: 25,
    },
    {
      id: 5,
      image: "https://img.cdn1.vip/i/6a12cbff7ae0d_1779616767.webp",
      title: "数字介质探索概念",
      category: "Interactive Interface Study",
      date: "Spring 2026",
      desc: "探讨拟物铜版纸触感在三维屏幕视效中的映射，重设数字物体的认知体验。",
      top: "11%",
      left: "49%",
      rotate: -6,
      zIndex: 30,
    },
    {
      id: 6,
      image: "https://img.cdn1.vip/i/6a12cbfeace2a_1779616766.webp",
      title: "极简器物秩序重构",
      category: "Tactile Minimalism",
      date: "Winter 2025",
      desc: "返璞归真的质朴选材，通过光线的雕琢呈现永恒而静谧的手工艺仪式感。",
      top: "23%",
      left: "59%",
      rotate: 7,
      zIndex: 35,
    },
    {
      id: 7,
      image: "https://img.cdn1.vip/i/6a12cbfef0b66_1779616766.webp",
      title: "前沿时尚影像美学",
      category: "Fashion Photography",
      date: "Spring 2026",
      desc: "捕捉风拂、薄纱与肢体延展的瞬间张力，让静止的定格充盈饱满的动感旋律。",
      top: "13%",
      left: "70%",
      rotate: -8,
      zIndex: 40,
    },
    {
      id: 8,
      image: "https://img.cdn1.vip/i/6a12d5e5a026e_1779619301.webp",
      title: "灵性自然静物写照",
      category: "Organic Ceramics",
      date: "Spring 2026",
      desc: "融汇自然黏土烧制痕迹与灵性几何线条，赞美大地物产的有机原始质地面貌。",
      top: "21%",
      left: "80%",
      rotate: 5,
      zIndex: 45,
    },
  ];

  // Open modal / select item
  const handleSelectCard = (index: number) => {
    setSelectedIndex(index);
    setSelectedItem(items[index]);
  };

  // Navigate lightbox left / right
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + items.length) % items.length;
    setSelectedIndex(prevIndex);
    setSelectedItem(items[prevIndex]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % items.length;
    setSelectedIndex(nextIndex);
    setSelectedItem(items[nextIndex]);
  };

  // Keyboard accessibility helper
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") {
        setSelectedItem(null);
        setSelectedIndex(-1);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, selectedIndex]);

  return (
    <section id="portfolio-gallery" className="py-24 px-6 bg-[#F8F4E9] border-b border-[#D5EAE3]/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Section Theme Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-xs font-mono tracking-[0.25em] text-[#775C55]/60 uppercase block mb-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#775C55]/70 animate-pulse" />
            DESIGN PORTFOLIO / 空间设计与视觉交互作品集
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#775C55] tracking-tight">
            部分视觉设计展示
          </h2>
          <p className="text-xs text-[#775C55]/60 mt-1 uppercase font-mono tracking-wide">
            Interactive Drag Wall — Press to expand / Drag to shuffle / 互动体验：点击任意照片卡片展开大图，按住可自由拖拽重组
          </p>
        </div>

        {/* Framing the draggable area to be fully responsive, elegant, and non-breaking */}
        <div className="relative w-full h-[550px] md:h-[650px] bg-white/40 backdrop-blur-subtle rounded-[2.5rem] border border-[#D5EAE3] overflow-hidden">
          <div className="absolute top-6 left-6 z-10 pointer-events-none hidden sm:flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-[#775C55]/70 uppercase tracking-widest">
              Hover factor enabled. Tap dynamic canvas.
            </span>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 max-w-sm text-center text-xs font-mono font-bold tracking-widest text-[#775C55]/40 uppercase pointer-events-none flex items-center gap-1.5 select-none">
            <Eye className="w-3.5 h-3.5" /> Tap cards to enlarge / Drag to slide & stack
          </div>

          <DraggableCardContainer className="relative w-full h-full">
            {items.map((item, index) => (
              <DraggableCardBody
                key={item.id}
                onTap={() => handleSelectCard(index)}
                style={{
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                  zIndex: item.zIndex,
                  rotate: item.rotate,
                }}
                className="cursor-pointer active:cursor-grabbing !bg-white border-4 sm:border-8 border-white shadow-lg hover:shadow-2xl transition-all duration-300 w-36 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 relative flex flex-col p-1 rounded-sm group hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* Clean Polaroid Photograph Container */}
                <div className="relative w-full h-full overflow-hidden bg-stone-100 pointer-events-none rounded-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 pointer-events-none select-none group-hover:scale-105"
                  />
                  {/* Subtle small premium metadata mark in the image upper corner resembling real art piece index */}
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/40 backdrop-blur-xs text-[8px] font-mono text-white/90 rounded-xs select-none">
                     #0{index + 1}
                  </span>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>

      {/* Exquisite Lightbox/Enlarge Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-900/90 backdrop-blur-md"
            onClick={() => {
              setSelectedItem(null);
              setSelectedIndex(-1);
            }}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-4xl w-full bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800/25 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedIndex(-1);
                }}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white/95 hover:bg-black/60 hover:scale-105 active:scale-95 transition-all outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo View Box Container */}
              <div className="w-full bg-stone-950/95 aspect-[4/3] md:h-[75vh] flex items-center justify-center relative group min-h-[350px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain select-none pointer-events-none transition-transform duration-300"
                />

                {/* Left/Right controls nested inside image panel */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-black/45 backdrop-blur-md text-white/95 hover:bg-black/75 hover:scale-105 active:scale-95 transition-all pointer-events-auto"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-black/45 backdrop-blur-md text-white/95 hover:bg-black/75 hover:scale-105 active:scale-95 transition-all pointer-events-auto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Corner page and code indicator overlay */}
                <div className="absolute top-4 left-4 py-1 px-3.5 bg-black/45 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-1.5 select-none text-[11px] font-mono text-white/90 tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>PIECE #0{selectedIndex + 1} / {items.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

