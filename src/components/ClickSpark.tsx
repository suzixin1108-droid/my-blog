import React, { useEffect, useRef, useState } from "react";

interface SparkInstance {
  id: number;
  x: number;
  y: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
  activeOn?: string;
  strokeWidth?: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#775C55",
  sparkSize = 10,
  sparkCount = 8,
  duration = 400, // Faster default duration
  extraScale = 1.0,
  activeOn,
  strokeWidth = 1.8, // Thinner strokes default
}) => {
  const [sparks, setSparks] = useState<SparkInstance[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleElementClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      // If activeOn filters are provided, verify if the clicked element matches
      if (activeOn) {
        const target = e.target as HTMLElement;
        const matched = target.closest(activeOn);
        if (!matched) return;
      }

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const id = Date.now() + Math.random();
      const newSpark: SparkInstance = { id, x, y };

      setSparks((prev) => [...prev, newSpark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== id));
      }, duration);
    };

    // Attach to the document body or root to capture all click events
    document.addEventListener("click", handleElementClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleElementClick, { capture: true });
    };
  }, [activeOn, duration]);

  // Using a fixed viewBox="0 0 100 100" coordinate grid inside the SVGs.
  // The line coordinates are y1="22" to y2="6", making a shorter line of length 16.
  const lineLength = 16;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-[9999]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <style>
        {`
          @keyframes click-spark-svg-fade {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(0.85) rotate(-20deg);
            }
            15% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(1.25) rotate(0deg);
            }
          }
          @keyframes click-spark-dash {
            0% {
              stroke-dashoffset: ${lineLength};
            }
            100% {
              stroke-dashoffset: -${lineLength};
            }
          }
          @keyframes click-spark-transform {
            0% {
              transform: rotate(var(--angle)) translateY(calc(${sparkSize}px / 2.5 * ${extraScale}));
            }
            100% {
              transform: rotate(var(--angle)) translateY(0);
            }
          }
          .click-spark-svg {
            animation: click-spark-svg-fade ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .click-spark-line {
            transform-origin: center;
            animation: 
              click-spark-dash ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) forwards,
              click-spark-transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      {sparks.map((spark) => (
        <svg
          key={spark.id}
          className="absolute click-spark-svg"
          style={{
            left: spark.x,
            top: spark.y,
            width: `${sparkSize * 6}px`,
            height: `${sparkSize * 6}px`,
            overflow: "visible",
          }}
          viewBox="0 0 100 100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          stroke={sparkColor}
        >
          {Array.from({ length: sparkCount }).map((_, i) => {
            const angle = `${i * (360 / sparkCount)}deg`;
            return (
              <line
                key={i}
                x1="50"
                y1="22"
                x2="50"
                y2="6"
                strokeDasharray={`${lineLength}`}
                style={
                  {
                    "--angle": angle,
                    transformOrigin: "50px 50px",
                  } as React.CSSProperties
                }
                className="click-spark-line"
              />
            );
          })}
        </svg>
      ))}
    </div>
  );
};

export default ClickSpark;
