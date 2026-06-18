import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import directorImage from '../assets/team/srijana maam.png'; 

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", 
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".mv-image-col", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out"
      }, 0);

      tl.from(".mv-name-pill", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, 0.4);

      tl.from(".mv-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, 0.2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const PLACEHOLDER_DIRECTOR_IMAGE = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop";

  return (
    // 1. Reduced top margin/padding significantly (pt-8 pb-12)
    <section className="w-full bg-white pt-8 pb-0 md:pt-0 md:pb-16" id="approach" ref={sectionRef}>
      
      {/* 2. Removed px-4 md:px-8 so the grid touches the left/right root borders exactly */}
      <div className="max-w-[1326px] mx-auto w-full">
        
        {/* Swapped full border for border-y, as the root CSS handles the left/right borders */}
        <div className="flex flex-col lg:flex-row items-stretch border-y border-zinc-200">
          
          {/* --- Left Column: Managing Director Photo --- */}
          <div className="mv-image-col relative w-full lg:w-1/2 overflow-hidden flex flex-col min-h-[400px] lg:min-h-[600px] bg-zinc-100">
            <img 
              // src={directorImage}
              src={directorImage || PLACEHOLDER_DIRECTOR_IMAGE}
              alt="Sirjana Gautam - Managing Director" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            
           {/* Name Pill: Added custom dark gradient background, increased tracking, and a clean Crimson left accent border */}
            <div className="mv-name-pill absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-gradient-to-br from-[#212121]/95 to-[#121212]/95 border-l-4 border-[#dc143c] px-6 py-4 rounded-xl z-10 shadow-xl pr-14 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-lg md:text-xl font-semibold text-white leading-tight tracking-wide">
                    Sirjana Gautam
                </p>
                <p className="text-[11px] md:text-xs text-zinc-400 font-medium tracking-widest uppercase mt-1.5">
                    Managing Director
                </p>
            </div>
          </div>


          {/* --- Right Column: Mission & Vision --- */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* --- Top Box: Our Mission --- */}
            <div className="p-8 md:p-14 border-b border-zinc-200 lg:border-l bg-white flex-1 flex flex-col justify-center">
              {/* 3. Centered Heading */}
              <h3 className="mv-text text-3xl md:text-4xl font-medium text-[#dc143c] mb-6 tracking-tight text-left">
                Our Mission
              </h3>
              {/* Left Aligned Text */}
              <p className="mv-text text-[15px] md:text-[17px] text-zinc-900 leading-relaxed text-left">
                Our experience covers environmental conservation, climate change, and community development, alongside a wide range of social and development priorities, including disaster resilience, mental health, child protection, gender equality, climate action, and human rights ensuring our communication.
              </p>
            </div>

            {/* --- Bottom Box: Our Vision --- */}
            <div className="p-8 md:p-14 lg:border-l border-zinc-200 bg-white flex-1 flex flex-col justify-center">
              {/* 3. Centered Heading */}
              <h3 className="mv-text text-3xl md:text-4xl font-medium text-[#dc143c] mb-6 tracking-tight text-left">
                Our Vision
              </h3>
              {/* Left Aligned Text */}
              <p className="mv-text text-[15px] md:text-[17px] text-zinc-900 leading-relaxed text-left">
                Our experience covers environmental conservation, climate change, and community development, alongside a wide range of social and development priorities, including disaster resilience, mental health, child protection, gender equality, climate action, and human rights ensuring our communication.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;