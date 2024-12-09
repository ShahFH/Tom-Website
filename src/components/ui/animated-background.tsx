import React, { useEffect, useRef, useCallback } from 'react';

export const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (!backgroundRef.current) return;
    backgroundRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
    backgroundRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [updateMousePosition]);

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px'
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-black bg-dot-white/[0.2]" />
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(calc(var(--mouse-x, 0px) - 250px), calc(var(--mouse-y, 0px) - 250px), 0)`
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(calc(var(--mouse-x, 0px) - 200px), calc(var(--mouse-y, 0px) - 200px), 0)`
        }}
      />
    </div>
  );
};