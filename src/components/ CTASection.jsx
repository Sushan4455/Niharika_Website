import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const textRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518131346048-024b4231f2dc?q=80&w=2070&auto=format&fit=crop"
  ];

  const doubledImages = [...images, ...images];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // Reduced minimum height and padding for a much tighter section
    <section className="relative w-full bg-[#f4f4f5] overflow-hidden min-h-[450px] md:min-h-[550px] flex items-center py-16 md:py-20" id="contact">
      
      <div className="max-w-[1326px] mx-auto w-full px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start text-left z-20 pr-0 lg:pr-12">
          
          {/* Scaled down heading sizes */}
          <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 leading-[1.15] tracking-tight mb-5">
            Crafted for
            organizations <br />
            that demand impact
          </h2>
          
          {/* Scaled down paragraph text */}
          <p className="text-zinc-500 text-[15px] md:text-base leading-relaxed max-w-md mb-8">
            Partner with a team of expert multimedia creators to produce stunning visuals that elevate your cause and engage your audience across Nepal.
          </p>
          
          {/* Scaled down button */}
          <a 
            href="mailto:contact@niharikaproduction.org" 
            className="bg-red-800 text-white px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-medium hover:bg-[#dc143c] transition-colors duration-300 rounded-sm shadow-xl"
          >
            Contact us
          </a>
          
        </div>

      </div>

      {/* --- RIGHT SIDE: AUTO-SCROLLING ROTATED IMAGES --- */}
      <div className="absolute top-1/2 right-[-40%] md:right-[-20%] lg:right-[0%] -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[45%] h-[200vh] rotate-[-15deg] pointer-events-none z-0 flex justify-center opacity-30 lg:opacity-100">
        
        {/* Slightly reduced image widths to fit the smaller section height better */}
        <div className="flex flex-col gap-5 md:gap-6 animate-scroll-vertical w-[260px] md:w-[320px] lg:w-[380px]">
          {doubledImages.map((src, index) => (
            <div 
              key={index} 
              className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl flex-shrink-0 border border-zinc-200/50 bg-zinc-200"
            >
              <img 
                src={src} 
                alt="Production Still" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default CTASection;