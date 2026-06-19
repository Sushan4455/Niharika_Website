import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutNip';
import ClientSlider from './components/ClientSlider';
import MissionVision from './components/MissionVision';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/ CTASection';
import YearReview from './components/YearReviewSection';

const App = () => {
  
  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controls the speed of the scroll (higher is slower/smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
      smoothWheel: true,
      touchMultiplier: 2, // Makes touch scrolling feel native
    });


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSlider />
        <StatsSection />
         <AboutSection />
         <ClientSlider />
         <MissionVision />
         <ServicesSection />
         <ProcessSection />
         <YearReview />
         <CTASection />
      </main>
    </div>
  );
};

export default App;