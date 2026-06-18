import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", 
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".animate-left", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, 0);

      tl.from(".animate-right", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, 0.2); 

      gsap.to(num1Ref.current, {
        innerHTML: 15,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 }, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      gsap.to(num2Ref.current, {
        innerHTML: 500,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="max-w-[1326px] w-full mx-auto px-4 md:px-8 py-8 md:py-12 bg-white overflow-hidden border-b-2 border-zinc-100"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4">
        
        {/* Added 'text-left' to override the global centering from your CSS root */}
        <div className="max-w-[480px] pr-0 md:pr-8 text-left">
          
          {/* Changed to your Crimson Red (#dc143c) */}
          <span className="animate-left block text-[11px] md:text-xs text-[#dc143c] font-bold uppercase tracking-[0.25em] mb-3">
            Trusted By
          </span>
          
          {/* Changed to Black/Dark Gray (zinc-900) */}
          <h2 className="animate-left text-xl md:text-2xl text-zinc-900 font-medium leading-relaxed tracking-tight">
            UN Agencies, Government & Civil Society Organisations
          </h2>
          
        </div>

        {/* Right Side: Stats with Dotted Dividers */}
        <div className="flex flex-row items-center gap-6 md:gap-10 shrink-0 text-left">
          
          <div className="animate-right hidden md:block h-12 border-l border-dotted border-zinc-300"></div>

          <div className="animate-right flex flex-col">
            <h4 className="text-3xl md:text-4xl text-[#dc143c] font-semibold mb-1 flex items-center tracking-tight">
              <span ref={num1Ref}>0</span>+
            </h4>
            <p className="text-[13px] md:text-sm text-zinc-500 font-medium tracking-wide">
              Years of Experience
            </p>
          </div>

          <div className="animate-right hidden md:block h-12 border-l border-dotted border-zinc-300"></div>

          <div className="animate-right flex flex-col">
            <h4 className="text-3xl md:text-4xl text-[#dc143c] font-semibold mb-1 flex items-center tracking-tight">
              <span ref={num2Ref}>0</span>+
            </h4>
            <p className="text-[13px] md:text-sm text-zinc-500 font-medium tracking-wide">
              Stories Produced
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;