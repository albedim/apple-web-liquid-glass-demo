import { useState } from 'react'
import './App.css'
import GlassContainer from './c'

const GlassControlPanel: React.FC<{
  innerShadowColor: string;
  setInnerShadowColor: (value: string) => void;
  innerShadowBlur: number;
  setInnerShadowBlur: (value: number) => void;
  innerShadowSpread: number;
  setInnerShadowSpread: (value: number) => void;
  glassColor: string;
  setGlassColor: (value: string) => void;
  glassOpacity: number;
  setGlassOpacity: (value: number) => void;
  backdropBlur: number;
  setBackdropBlur: (value: number) => void;
  noiseScale: number;
  setNoiseScale: (value: number) => void;
  distortionIntensity: number;
  setDistortionIntensity: (value: number) => void;
  dropShadowBlur: number;
  setDropShadowBlur: (value: number) => void;
}> = ({
  innerShadowColor,
  setInnerShadowColor,
  innerShadowBlur,
  setInnerShadowBlur,
  innerShadowSpread,
  setInnerShadowSpread,
  glassColor,
  setGlassColor,
  glassOpacity,
  setGlassOpacity,
  backdropBlur,
  setBackdropBlur,
  noiseScale,
  setNoiseScale,
  distortionIntensity,
  setDistortionIntensity,
  dropShadowBlur,
  setDropShadowBlur,
}) => {
  return (
    <div className="fixed top-4 left-4 max-w-80 max-h-[90vh] overflow-y-auto">
      {/* Glass background with blur effect */}
      <div 
        className="relative rounded-2xl p-5 text-white text-sm border border-white/20"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 0 20px -5px rgba(255, 255, 255, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="space-y-6">
          {/* Inner Glow Section */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-white/90">Inner Glow</h3>
            <div className="space-y-3">
              <label className="flex justify-between items-center">
                <span className="text-white/80">Glow Color</span>
                <input
                  type="color"
                  value={innerShadowColor}
                  onChange={(e) => setInnerShadowColor(e.target.value)}
                  className="w-10 h-8 rounded-lg border-none cursor-pointer"
                />
              </label>
              <label className="flex justify-between items-center">
                <span className="text-white/80">Intensity</span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={innerShadowBlur}
                    onChange={(e) => setInnerShadowBlur(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-xs text-white/60 w-8 text-right">{innerShadowBlur}</span>
                </div>
              </label>
              <label className="flex justify-between items-center">
                <span className="text-white/80">Spread</span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    value={innerShadowSpread}
                    onChange={(e) => setInnerShadowSpread(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-xs text-white/60 w-8 text-right">{innerShadowSpread}</span>
                </div>
              </label>
            </div>
          </div>

          {/* Glass Tinting Section */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-white/90">Glass Tinting</h3>
            <div className="space-y-3">
              <label className="flex justify-between items-center">
                <span className="text-white/80">Tint Color</span>
                <input
                  type="color"
                  value={glassColor}
                  onChange={(e) => setGlassColor(e.target.value)}
                  className="w-10 h-8 rounded-lg border-none cursor-pointer"
                />
              </label>
              <label className="flex justify-between items-center">
                <span className="text-white/80">Transparency</span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={glassOpacity}
                    onChange={(e) => setGlassOpacity(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-xs text-white/60 w-8 text-right">{glassOpacity}%</span>
                </div>
              </label>
            </div>
          </div>

          {/* Blur Effects Section */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-white/90">Blur Effects</h3>
            <label className="flex justify-between items-center">
              <span className="text-white/80">Background Blur</span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={backdropBlur}
                  onChange={(e) => setBackdropBlur(Number(e.target.value))}
                  className="w-32"
                />
                <span className="text-xs text-white/60 w-8 text-right">{backdropBlur}</span>
              </div>
            </label>
          </div>

          {/* Surface Distortion Section */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-white/90">Surface Distortion</h3>
            <div className="space-y-3">
              <label className="flex justify-between items-center">
                <span className="text-white/80">Texture Scale</span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="0.02"
                    step="0.001"
                    value={noiseScale}
                    onChange={(e) => setNoiseScale(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-xs text-white/60 w-12 text-right">{noiseScale.toFixed(3)}</span>
                </div>
              </label>
              <label className="flex justify-between items-center">
                <span className="text-white/80">Distortion Power</span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={distortionIntensity}
                    onChange={(e) => setDistortionIntensity(Number(e.target.value))}
                    className="w-32"
                  />
                  <span className="text-xs text-white/60 w-8 text-right">{distortionIntensity}</span>
                </div>
              </label>
            </div>
          </div>

          {/* Drop Shadow Section */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-white/90">Drop Shadow</h3>
            <label className="flex justify-between items-center">
              <span className="text-white/80">Shadow Blur</span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={dropShadowBlur}
                  onChange={(e) => setDropShadowBlur(Number(e.target.value))}
                  className="w-32"
                />
                <span className="text-xs text-white/60 w-8 text-right">{dropShadowBlur}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [innerShadowColor, setInnerShadowColor] = useState('#ffffff');
  const [innerShadowBlur, setInnerShadowBlur] = useState(20);
  const [innerShadowSpread, setInnerShadowSpread] = useState(-5);
  const [glassColor, setGlassColor] = useState('#ffffff');
  const [glassOpacity, setGlassOpacity] = useState(20);
  const [backdropBlur, setBackdropBlur] = useState(2);
  const [noiseScale, setNoiseScale] = useState(0.008);
  const [distortionIntensity, setDistortionIntensity] = useState(77);
  const [dropShadowBlur, setDropShadowBlur] = useState(24);

  return (
    <div 
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-light relative overflow-hidden"
      style={{ 
        backgroundImage: `url(/bg.jpg)` 
      }}
    >
      <GlassControlPanel
        innerShadowColor={innerShadowColor}
        setInnerShadowColor={setInnerShadowColor}
        innerShadowBlur={innerShadowBlur}
        setInnerShadowBlur={setInnerShadowBlur}
        innerShadowSpread={innerShadowSpread}
        setInnerShadowSpread={setInnerShadowSpread}
        glassColor={glassColor}
        setGlassColor={setGlassColor}
        glassOpacity={glassOpacity}
        setGlassOpacity={setGlassOpacity}
        backdropBlur={backdropBlur}
        setBackdropBlur={setBackdropBlur}
        noiseScale={noiseScale}
        setNoiseScale={setNoiseScale}
        distortionIntensity={distortionIntensity}
        setDistortionIntensity={setDistortionIntensity}
        dropShadowBlur={dropShadowBlur}
        setDropShadowBlur={setDropShadowBlur}
      />
      <GlassContainer
        innerShadowColor={innerShadowColor}
        innerShadowBlur={innerShadowBlur}
        innerShadowSpread={innerShadowSpread}
        glassColor={glassColor}
        glassOpacity={glassOpacity}
        backdropBlur={backdropBlur}
        noiseScale={noiseScale}
        distortionIntensity={distortionIntensity}
        dropShadowBlur={dropShadowBlur}
      />
    </div>
  );
}


export default App
