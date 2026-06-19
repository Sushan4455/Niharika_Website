import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const YearReview = () => {
  // State to track which accordion item is currently open
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Your requested data structure: NGO name, Project name, and Description
  const reviewData = [
    {
      id: 1,
      ngo: "UNICEF Nepal",
      project: "Maternal Health Awareness",
      description: "A comprehensive multimedia campaign addressing maternal health across rural provinces. We produced a series of short documentaries, radio jingles, and community-led interactive theater scripts to drive behavioral shifts in health-seeking practices among marginalized communities."
    },
    {
      id: 2,
      ngo: "USAID",
      project: "Climate Resilience Initiative",
      description: "Documentary series and social media PSAs highlighting community-led climate adaptation strategies in the Himalayas. The project involved rigorous field research and drone cinematography to capture the authentic realities of communities facing climate adversity."
    },
    {
      id: 3,
      ngo: "Save the Children",
      project: "Education for All",
      description: "An animated video series and interactive storybooks designed to promote inclusive education. We translated complex educational frameworks into engaging, child-friendly narratives distributed across national television and local schools."
    },
    {
      id: 4,
      ngo: "World Health Organization",
      project: "National Vaccination Drive",
      description: "Developed rapid-response communication materials, including multi-lingual broadcast spots and infographic posters, to combat misinformation and increase vaccination uptake in hard-to-reach districts."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 2xl:py-32 overflow-hidden" id="review">
      {/* Fluid Container matching your site's new layout */}
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* --- Split Header (Matches your screenshot) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16 md:mb-24">
          
          {/* Left Side: Big Year Title */}
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-medium text-zinc-900 tracking-tight leading-none">
              2025 <br />
              <span className="text-zinc-400">review</span>
            </h2>
          </div>

          {/* Right Side: Subtitle & Description */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-zinc-900 leading-snug tracking-tight">
              We support their mission by <br className="hidden md:block" />
              amplifying <span className="text-zinc-500">who they are and</span> <br className="hidden md:block" />
              <span className="text-zinc-500">projecting what they can achieve.</span>
            </h3>
            <p className="text-[15px] md:text-base 2xl:text-lg text-zinc-800 font-medium">
              We elevate campaigns to stay relevant, impactful, and always one step ahead.
            </p>
          </div>

        </div>

        {/* --- Accordion List --- */}
        <div className="flex flex-col w-full border-t border-zinc-200">
          
          {reviewData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className="w-full border-b border-zinc-200 py-6 md:py-8 2xl:py-10 flex flex-col md:flex-row items-start gap-4 md:gap-8 lg:gap-12 transition-colors hover:bg-zinc-50/50"
              >
                
                {/* 1. Circle Number */}
                <div className="hidden md:flex w-12 h-12 2xl:w-14 2xl:h-14 rounded-full border border-zinc-300 items-center justify-center shrink-0">
                  <span className="text-sm 2xl:text-base font-medium text-zinc-800">
                    0{item.id}
                  </span>
                </div>

                {/* 2. Content Area */}
                <div className="w-full flex-1 flex flex-col">
                  
                  {/* Clickable Header Row */}
                  <div 
                    className="w-full flex justify-between items-center cursor-pointer group"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div>
                      {/* NGO Name (Small gray text) */}
                      <p className="text-sm 2xl:text-base text-zinc-500 font-medium mb-1">
                        {item.ngo}
                      </p>
                      {/* Project Name (Large black text) */}
                      <h4 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-zinc-900 tracking-tight group-hover:text-[#dc143c] transition-colors">
                        {item.project}
                      </h4>
                    </div>

                    {/* Plus/Minus Icon */}
                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-zinc-100' : 'bg-transparent group-hover:bg-zinc-100'}`}>
                      {isOpen ? (
                        <Minus className="text-zinc-900 w-5 h-5 2xl:w-6 2xl:h-6" />
                      ) : (
                        <Plus className="text-zinc-900 w-5 h-5 2xl:w-6 2xl:h-6" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Body Area (Smooth CSS Grid Animation) */}
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* The light gray box matching the reference style */}
                      <div className="bg-[#f4f4f5] rounded-md p-6 md:p-8 2xl:p-10 w-full max-w-4xl">
                        <p className="text-[15px] md:text-base 2xl:text-lg text-zinc-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default YearReview;