import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const accordionRef = useRef(null);

  // Track the active (expanded) item for each row. 
  const [activeRow1, setActiveRow1] = useState(1);
  const [activeRow2, setActiveRow2] = useState(5);

  const servicesData = [
    { id: 1, heading: 'Short Films', description: 'Stories told with heart and craft—cinematic short films that connect audiences with real experiences.', image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop', link: '/services/short-films' },
    { id: 2, heading: 'StoryBooks', description: 'Engaging, inclusive, and seamlessly executed visual narratives designed to bring people together.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop', link: '/services/story-books' },
    { id: 3, heading: 'Documentaries', description: 'Authentic, human-centered documentaries that illuminate real stories through rigorous research.', image: 'https://images.unsplash.com/photo-1518131346048-024b4231f2dc?q=80&w=2070&auto=format&fit=crop', link: '/services/documentaries' },
    { id: 4, heading: '2D/3D Animation', description: 'Visually engaging animations that simplify complex social ideas and bring stories to life.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', link: '/services/2d-3danimation' },
    { id: 5, heading: 'Audio-Visual PSAs', description: 'Concise, impactful public service announcements designed to deliver clear messages.', image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop', link: '/services/avpsa' },
    { id: 6, heading: 'Event Management', description: 'We manage events that connect people and create unforgettable experiences.', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop', link: '/services/event' },
    { id: 7, heading: 'Comm. Strategy', description: 'Right message, Right audience. We build strategic frameworks for impact.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', link: '/services/communication' },
    { id: 8, heading: 'Radio & TV', description: 'Engaging broadcast programs tailored to reach wide audiences effectively.', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop', link: '/services/radio-tv' },
  ];

  // Split the data into two rows
  const row1Data = servicesData.slice(0, 4);
  const row2Data = servicesData.slice(4, 8);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      gsap.from(accordionRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Reusable component for an individual accordion slice
  const AccordionItem = ({ service, isActive, onHover }) => (
    <div
      onMouseEnter={onHover}
      className={`relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden cursor-pointer transition-[flex] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[flex] origin-left border-r border-zinc-900 last:border-r-0 min-w-0 ${
        isActive ? 'flex-[3.5]' : 'flex-1'
      }`}
    >
      {/* Background Image */}
      <img 
        src={service.image} 
        alt={service.heading} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-105' : 'scale-100'}`}
      />

      {/* Dark Overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          isActive 
            ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10' 
            : 'bg-black/70 hover:bg-black/60'
        }`} 
      />

      {/* Number at Top Left */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <span className={`font-mono text-xs md:text-sm tracking-widest transition-colors duration-500 ${isActive ? 'text-[#dc143c]' : 'text-zinc-400'}`}>
          0{service.id}
        </span>
      </div>

      {/* Vertical Title (Shows when collapsed) */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap transition-all duration-500 z-10 pointer-events-none ${
          isActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100 delay-200'
        }`}
      >
        <h4 className="text-white text-base md:text-lg tracking-wider font-medium">
          {service.heading}
        </h4>
      </div>

      {/* Expanded Content (Shows when active) */}
      <div 
        /* ADDED: flex flex-col items-start text-left to force strict left alignment */
        className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6 z-20 w-full max-w-md flex flex-col items-start text-left transition-all duration-700 transform ${
          isActive ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <h3 className="w-full text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight">
          {service.heading}
        </h3>
        
        <p className="w-full hidden md:block text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-2 lg:line-clamp-3">
          {service.description}
        </p>
        
        <a 
          href={service.link} 
          className="inline-flex items-center justify-start gap-2 text-[#dc143c] text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors duration-300"
        >
          Explore <ArrowRight size={14} className="ml-1" />
        </a>
      </div>

    </div>
  );

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      // Adjusted top padding to fix spacing issues
      className="w-full bg-white pt-0 pb-12 md:pt-0 md:pb-24 overflow-hidden"
    >
      <div className="max-w-[1326px]  px-0 md:px-0">
        
        {/* Centered & Scaled Down Header */}
        <div ref={headerRef} className="mb-10 md:mb-12 mt-3 flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-4">
            We Design & Develop
          </h3>
        </div>

        {/* --- Expanding Accordion Container --- */}
        <div ref={accordionRef} className="flex flex-col w-full bg-zinc-950 border border-zinc-900">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row w-full border-b border-zinc-900">
            {row1Data.map((service) => (
              <AccordionItem 
                key={service.id}
                service={service} 
                isActive={activeRow1 === service.id}
                onHover={() => setActiveRow1(service.id)}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row w-full">
            {row2Data.map((service) => (
              <AccordionItem 
                key={service.id}
                service={service} 
                isActive={activeRow2 === service.id}
                onHover={() => setActiveRow2(service.id)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;