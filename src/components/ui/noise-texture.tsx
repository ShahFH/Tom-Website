import React from 'react';

const NoiseSVG = () => (
  <svg width="500" height="500" viewBox="0 0 500 500" style={{ display: 'none' }}>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    </filter>
    <rect width="500" height="500" filter="url(#noise)"/>
  </svg>
);

export const NoiseTexture = () => {
  return (
    <>
      
      <div 
        className="pointer-events-none fixed inset-0 z-30"
        style={{ 
          mixBlendMode: 'difference',
          opacity: 0.05,
          backgroundImage: `url("/NoiseBG.png")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
};