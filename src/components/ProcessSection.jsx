import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const processData = [
    {
      id: 1,
      step: 'Step 01',
      title: 'Research & Strategy',
      description: 'We begin by understanding your goals, target audience, and the diverse realities of the community. We craft evidence-based communication strategies and multilingual scripts tailored for impact.'
    },
    {
      id: 2,
      step: 'Step 02',
      title: 'Human-Centered Production',
      description: 'Our expert crew brings the story to life using cinema-grade cameras and advanced tools like drone cinematography, ensuring the narrative remains authentic, context-sensitive, and visually compelling.'
    },
    {
      id: 3,
      step: 'Step 03',
      title: 'Post-Production & Delivery',
      description: 'We meticulously refine your project with clean cuts, motion graphics, color grading, and sound design—delivering world-class products optimized for both broadcast and social media platforms.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Using fromTo explicitly forces the opacity to reach 1 (visible)
      gsap.fromTo(headerRef.current, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6, // Sped up
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );

      // Using fromTo here prevents cards from getting stuck invisibly
      gsap.fromTo(".process-card", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4, // Much faster animation
          stagger: 0.1,  // Much faster stagger between cards
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 85%",
            // Changed to 'play none none none' so once they appear, they safely stay on screen!
            toggleActions: "play none none none" 
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="approach" 
      ref={sectionRef} 
      className="w-full bg-white py-16 md:py-24 border-t border-zinc-200 overflow-hidden" 
    >
      <div className="max-w-[1326px] mx-auto px-4 md:px-8">
        
        {/* --- Header Section --- */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-12 md:mb-16">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-900 tracking-tight leading-[1.1] max-w-2xl text-left">
            From vision to <br className="hidden md:block" />
            cinematic experience
          </h2>
          
          <p className="text-[15px] md:text-base text-zinc-600 leading-relaxed max-w-md text-left lg:mt-2">
            A proven, human-centered workflow designed for authentic storytelling, fast turnaround, and exceptional quality.
          </p>

        </div>

         {/* --- 3-Step Grid --- */}
        <div className="process-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {processData.map((item) => (
            <div 
              key={item.id}
              className="process-card bg-white p-6 md:p-8 flex flex-col items-start text-left border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
            >
              
              {/* Black Step Badge */}
              <div className="bg-red-900 text-white text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 w-fit mb-6 tracking-wide">
                {item.step}
              </div>

              {/* Card Title */}
              <h3 className="w-full text-xl md:text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="w-full text-[14px] md:text-[15px] text-zinc-600 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;