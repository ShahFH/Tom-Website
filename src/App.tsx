import React from 'react';
import { AnimatedBackground } from './components/ui/animated-background';
import { NoiseTexture } from './components/ui/noise-texture';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-fuchsia-500/30">
      <AnimatedBackground />
      <NoiseTexture />
      <div className="relative">
        <Header />
        <main className="prose-container">
          <Hero />
          <div className="max-w-[680px] mx-auto">
            <Experience />
            <Services />
          </div>
        </main>
        <div className="max-w-[680px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
