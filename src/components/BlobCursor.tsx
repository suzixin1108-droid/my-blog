'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#775C55',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.15)',
  shadowBlur = 10,
  shadowOffsetX = 0,
  shadowOffsetY = 4,
  filterId = 'blob',
  filterStdDeviation = 14,
  filterColorMatrixValues = '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8',
  useFilter = true,
  fastDuration = 0.08,
  slowDuration = 0.55,
  fastEase = 'power3.out',
  slowEase = 'power2.out',
  zIndex = 100
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const { left, top } = updateOffset();
      let x = 0;
      let y = 0;

      if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        return;
      }

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        // Progressively slower for deeper elements in the trail to make the bubble stream look elastic and organic
        const duration = isLead ? fastDuration : fastDuration + i * (slowDuration / trailCount);
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase, trailCount]
  );

  useEffect(() => {
    // Center the blobs using GSAP's percentage positioning and place offscreen so they don't block the screen initially
    blobsRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, { xPercent: -50, yPercent: -50, x: -9999, y: -9999 });
      }
    });

    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    
    // Add global tracking to handle site-wide hover elegantly
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [updateOffset, handleMove]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => {
              if (blobsRef.current) {
                blobsRef.current[i] = el;
              }
            }}
            className="absolute will-change-transform"
            style={{
              width: sizes[i] ?? 60,
              height: sizes[i] ?? 60,
              borderRadius: blobType === 'circle' ? '50%' : '0',
              backgroundColor: fillColor,
              opacity: opacities[i] ?? 0.6,
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              border: blobType === 'circle' ? '1.5px solid rgba(255, 255, 255, 0.55)' : undefined,
              backdropFilter: 'blur(1px)'
            }}
          >
            {/* Glossy glint/highlight reflection of a light bulb/sky */}
            <div
              className="absolute bg-white"
              style={{
                width: innerSizes[i] ?? 20,
                height: innerSizes[i] ?? 20,
                top: (sizes[i] ?? 60) * 0.18,
                left: (sizes[i] ?? 60) * 0.18,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0',
                opacity: 0.9
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
