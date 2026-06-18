import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".shape-top-left", {
        x: -50,
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, 0);

      tl.from(".shape-bottom-right", {
        x: 50,
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, 0);

      tl.from(".about-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0.2);

      tl.from(".about-text", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, 0.4);

      tl.from(".about-tagline", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 1);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      // 1. Reduced the gap (padding top/bottom) significantly
      className="relative w-full bg-white overflow-hidden py-10 md:py-14 border-b-2 border-zinc-100"
    >
      {/* --- DECORATIVE SHAPES --- */}
      <div className="shape-top-left absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0">
        <div className="absolute top-[-40px] left-[-60px] w-[250px] h-[6px] md:h-[8px] bg-[#0ea5e9] -rotate-45"></div>
        <div className="absolute top-[-10px] left-[-80px] w-[300px] h-[16px] md:h-[20px] bg-[#dc143c] -rotate-45"></div>
      </div>

      <div className="shape-bottom-right absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0">
        <div className="absolute bottom-[-10px] right-[-80px] w-[300px] h-[16px] md:h-[20px] bg-[#dc143c] -rotate-45"></div>
        <div className="absolute bottom-[-40px] right-[-60px] w-[250px] h-[6px] md:h-[8px] bg-[#0ea5e9] -rotate-45"></div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-[1326px] mx-auto px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">
          
          {/* 2. Title: Centered, smaller font-weight (semibold instead of bold), and reduced bottom margin */}
          <h2 className="about-header text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-zinc-900 mb-8 md:mb-10">
            About <span className="text-[#dc143c]">NIP</span>
          </h2>

          {/* 3. Text Justify applied here. Reduced gap between paragraphs slightly. */}
          <div className="flex flex-col gap-5 md:gap-6 text-[15px] md:text-base text-zinc-700 leading-relaxed md:leading-[1.8] text-justify">
            
            <p className="about-text">
              Established in 2009 and officially registered with the Office of the Company Registrar in Nepal, <strong className="text-[#dc143c] font-medium">Niharika Production Pvt. Ltd. (NIP)</strong> is a creative multimedia production company specializing in <strong className="text-[#0ea5e9] font-medium">social and behaviour change communication (SBCC)</strong> and inclusive development communication. Over the past 15+ years of hands-on work, we have earned the trust of government agencies, civil society organisations, development partners, and UN agencies by consistently producing communication materials that are culturally relevant, technically sound, and designed to engage audiences in meaningful ways.
            </p>

            <p className="about-text">
              At the heart of NIP is a commitment to <strong className="text-[#dc143c] font-medium">authentic storytelling</strong> delivered through <strong className="text-[#0ea5e9] font-medium">high quality production</strong>. We design and produce a wide portfolio of multimedia outputs documentaries, live-action videos, animations, radio PSAs, and digital content tailored for real-world use across platforms.
            </p>

            <p className="about-text">
              We are experienced in managing <strong className="text-[#dc143c] font-medium">complex, multi-stakeholder workflows</strong>, coordinating feedback loops, and delivering to partner standards while protecting creative integrity. Our in-house strengths include research, multilingual scripting, and human-centred production, supported by <strong className="text-[#0ea5e9] font-medium">advanced tools and technologies</strong> such as drone cinematography, cinema-grade cameras, and motion graphics/animation pipelines enabling us to package stories and messages effectively for both social media and broadcast channels.
            </p>

            <p className="about-text">
              NIP's work is rooted in <strong className="text-[#dc143c] font-medium">Nepal's diverse realities</strong>. Our experience covers environmental conservation, climate change, and community development, alongside a wide range of social and development priorities, including disaster resilience, mental health, child protection, gender equality, climate action, and human rights ensuring our communication products remain inclusive, <strong className="text-[#0ea5e9] font-medium">context-sensitive</strong>, and aligned with the needs of the communities they are meant to serve.
            </p>

          </div>

          {/* Bottom Tagline */}
          <div className="about-tagline mt-12 md:mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight">
              We work on today's <span className="text-[#dc143c]">critical</span> social <span className="text-[#0ea5e9]">issues.</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;