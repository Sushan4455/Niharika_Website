import React from 'react';

// Your Logo Imports
import logo1 from '../assets/Clients/adb.png';
import logo2 from '../assets/Clients/cmc.jpeg';
import logo3 from '../assets/Clients/ecpt.png';
import logo4 from '../assets/Clients/fca.jpeg';
import logo5 from '../assets/Clients/fhi360.png';
import logo6 from '../assets/Clients/fiem.png';
import logo7 from '../assets/Clients/government.png';
import logo8 from '../assets/Clients/govt.png';
import logo9 from '../assets/Clients/ilo.png';
import logo10 from '../assets/Clients/iom.png';
import logo11 from '../assets/Clients/kohish.png';
import logo12 from '../assets/Clients/ngo.png';
import logo13 from '../assets/Clients/police.png';
import logo14 from '../assets/Clients/saktisanuha.jpeg';
import logo15 from '../assets/Clients/tpo.jpeg';
import logo16 from '../assets/Clients/unfpa.png';
import logo17 from '../assets/Clients/who.png';

const ClientSlider = () => {
  
  // Fixed the src syntax (removed the curly braces around the variables)
  // Added standard 'name' properties for the image alt text
  const logos = [
    { id: 1, name: "ADB", src: logo1 },
    { id: 2, name: "CMC", src: logo2 },
    { id: 3, name: "ECPT", src: logo3 },
    { id: 4, name: "FCA", src: logo4 },
    { id: 5, name: "FHI360", src: logo5 },
    { id: 6, name: "FIEM", src: logo6 },
    { id: 7, name: "Government", src: logo7 },
    { id: 9, name: "ILO", src: logo9 },
    { id: 10, name: "IOM", src: logo10 },
    { id: 11, name: "Kohish", src: logo11 },
    { id: 12, name: "NGO", src: logo12 },
    { id: 13, name: "Police", src: logo13 },
    { id: 14, name: "Sakti Sanuha", src: logo14 },
    { id: 15, name: "TPO", src: logo15 },
    { id: 16, name: "UNFPA", src: logo16 },
    { id: 17, name: "WHO", src: logo17 },
  ];

  // Duplicate the array once so the scrolling never runs out of logos and loops seamlessly
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-zinc-100 border-b-2 border-zinc-100">
      <div className="max-w-[1326px] mx-auto px-4 md:px-8">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-zinc-900 mb-10 md:mb-14">
          We have <span className="text-[#dc143c]">worked with</span>
        </h2>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          
          {/* The scrolling track */}
          <div className="flex w-max animate-marquee items-center">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 md:mx-12 w-32 md:w-40 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-auto object-contain max-h-16 mix-blend-multiply" 
                  // Note: Added 'mix-blend-multiply' above just in case any of your jpegs have white backgrounds instead of transparent!
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientSlider;