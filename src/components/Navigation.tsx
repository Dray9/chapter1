
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-vintage-cream shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-serif text-xl font-bold text-vintage-brown">
            José Rizal
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('family')}
              className="text-vintage-brown hover:text-vintage-gold transition-colors"
            >
              Family
            </button>
            <button 
              onClick={() => scrollToSection('talents')}
              className="text-vintage-brown hover:text-vintage-gold transition-colors"
            >
              Talents
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-vintage-brown hover:text-vintage-gold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-vintage-cream border-t border-vintage-sepia">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('family')}
                className="block w-full text-left px-4 py-2 text-vintage-brown hover:text-vintage-gold hover:bg-vintage-sepia transition-colors"
              >
                Family
              </button>
              <button 
                onClick={() => scrollToSection('talents')}
                className="block w-full text-left px-4 py-2 text-vintage-brown hover:text-vintage-gold hover:bg-vintage-sepia transition-colors"
              >
                Talents
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
