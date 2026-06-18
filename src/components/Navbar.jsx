import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/NIHARIKA LOGO.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // The Smooth Scroll Handler
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent the default instant jump
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Get the height of your navbar (approx 80px) so the section doesn't hide behind it
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Close mobile menu if it was open
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Capacity', href: '#capacity' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ease-in-out bg-white ${
          isScrolled ? 'shadow-sm py-3' : 'py-4 md:py-5'
        }`}
      >
        <div className="max-w-[1326px] w-full mx-auto px-4 md:px-8 flex items-center justify-between">
          
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            className="flex items-center z-40 shrink-0"
          >
            <img 
              src={logo} 
              alt="Niharika Production" 
              className="h-8 md:h-11 w-auto object-contain" 
            />
          </a>

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)} // Applied handler here
                    className="text-[15px] font-medium text-zinc-700 transition-colors hover:text-[#dc143c]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="lg:hidden text-zinc-900 p-2 z-40 hover:text-[#dc143c] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>

        </div>
      </header>

      {/* Mobile Menu Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
          <span className="font-semibold text-lg text-zinc-800">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-zinc-500 hover:text-[#dc143c] hover:bg-zinc-50 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} // Applied handler here
              className="text-lg font-medium text-zinc-800 hover:text-[#dc143c] transition-colors border-b border-zinc-50 pb-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;