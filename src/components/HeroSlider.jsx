import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop", 
      title: "Inspiring positive changes through media",
      subtitle: "We combine creative artistry with real-life authenticity to deliver high-impact media that transforms lives and strengthens communities across Nepal.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      title: "Catalysing Action Through Social and Behavior Change Communication",
      subtitle: "We design evidence-based communication strategies/campaigns that move beyond simple awareness, driving real behavioural shifts among target beneficiaries.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop",
      title: "Authentic Stories, Global Standards",
      subtitle: "From hard-to-reach communities to digital screens, we produce world-class, culturally accepted communication products that give a powerful voice to the unheard and the unseen.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
      title: "15 Years of Making a Difference and Still Growing…",
      subtitle: "Supporting government agencies, civil society, development partners, and UN agencies to deliver communication that improves lives and builds stronger, more just, and more inclusive communities nationwide.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // Removed the top padding (pt-4) so it sits flush under the navbar
    <section className="max-w-[1326px] mx-auto w-full mx-auto pt-0 pb-0 text-left" id="home">   
      
      {/* Removed 'rounded-3xl' so the corners are perfectly sharp */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden group bg-zinc-900">
        
        <div 
          className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full h-full shrink-0">
              
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

              <div className="absolute bottom-10 left-6 md:bottom-14 md:left-14 max-w-4xl pr-4 z-10">
                {/* Reduced font size to be more balanced (text-2xl md:text-3xl lg:text-4xl) */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 leading-tight tracking-wide">
                  {slide.title}
                </h1>
                {/* Adjusted subtitle size slightly for better proportions */}
                <p className="text-sm md:text-base text-zinc-200 leading-relaxed max-w-3xl">
                  {slide.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

        <div className="absolute bottom-10 right-6 md:bottom-14 md:right-14 flex items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ease-in-out cursor-pointer ${
                currentSlide === index 
                  ? 'w-12 md:w-16 bg-[#dc143c]' 
                  : 'w-4 md:w-6 bg-white/50 hover:bg-white/80' 
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;