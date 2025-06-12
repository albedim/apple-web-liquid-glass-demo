import React, { useState, useRef, useEffect } from 'react';

interface GlassContainerProps {
  innerShadowColor?: string;
  innerShadowBlur?: number;
  innerShadowSpread?: number;
  glassColor?: string;
  glassOpacity?: number;
  backdropBlur?: number;
  noiseScale?: number;
  distortionIntensity?: number;
  dropShadowBlur?: number;
  containerWidth?: number;
  containerHeight?: number;
  cornerRadius?: number;
  children?: React.ReactNode;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  innerShadowColor = '#ffffff',
  innerShadowBlur = 20,
  innerShadowSpread = -5,
  glassColor = '#ffffff',
  glassOpacity = 20,
  backdropBlur = 2,
  noiseScale = 0.008,
  distortionIntensity = 77,
  dropShadowBlur = 24,
  containerWidth = 320,
  containerHeight = 192,
  cornerRadius = 28,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Convert hex color to RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '255, 255, 255';
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('pointermove', handlePointerMove as any);
      document.addEventListener('pointerup', handlePointerUp);
      return () => {
        document.removeEventListener('pointermove', handlePointerMove as any);
        document.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging, dragStart]);

  const containerStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    width: `${containerWidth}px`,
    height: `${containerHeight}px`,
    borderRadius: `${cornerRadius}px`,
    '--inner-shadow-color': innerShadowColor,
    '--inner-shadow-blur': `${innerShadowBlur}px`,
    '--inner-shadow-spread': `${innerShadowSpread}px`,
    '--glass-color': hexToRgb(glassColor),
    '--glass-opacity': glassOpacity / 100,
    '--backdrop-blur': `${backdropBlur}px`,
    '--drop-shadow-blur': `${dropShadowBlur}px`,
  } as React.CSSProperties;

  return (
    <div className='flex flex-col items-center justify-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        className="absolute overflow-hidden"
      >
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${noiseScale} ${noiseScale}`}
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale={distortionIntensity}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      
      <div
        ref={containerRef}
        className="absolute cursor-move select-none touch-none"
        style={containerStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: `${cornerRadius}px`,
            boxShadow: `inset 0 0 var(--inner-shadow-blur) var(--inner-shadow-spread) var(--inner-shadow-color), 0px 6px var(--drop-shadow-blur) rgba(0, 0, 0, 0.2)`,
            backgroundColor: `rgba(var(--glass-color), var(--glass-opacity))`,
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            borderRadius: `${cornerRadius}px`,
            backdropFilter: `blur(var(--backdrop-blur))`,
            WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
            filter: 'url(#glass-distortion)',
          }}
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassContainer;
