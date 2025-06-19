
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden vintage-paper">
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream via-vintage-paper to-vintage-sepia opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-vintage-brown mb-6 leading-tight">
            José Protacio Rizal
          </h1>
          <div className="w-32 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-vintage-darkBrown font-medium mb-4">
            Mercado y Alonso Realonda
          </p>
          <p className="text-lg text-vintage-brown mb-8">
            Philippine National Hero • Polymath • Revolutionary • Political Martyr
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-vintage-darkBrown">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vintage-gold rounded-full"></span>
              <span>Born: June 19, 1861</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-vintage-brown rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vintage-gold rounded-full"></span>
              <span>Calamba, Laguna</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-vintage-brown rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-vintage-gold rounded-full"></span>
              <span>Baptized: June 22, 1861</span>
            </div>
          </div>
          <div className="mt-4 text-vintage-darkBrown">
            <p className="text-sm">Named after Saint Joseph • Godfather: Pedro Casanas</p>
            <p className="text-sm mt-1">Baptized by Father Rufino Collantes</p>
          </div>
        </div>
        
        <div className="mt-16 animate-slide-in-left">
          <button 
            onClick={() => document.getElementById('family')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-vintage-brown text-vintage-cream px-8 py-4 rounded-lg font-medium hover:bg-vintage-darkBrown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore His Legacy
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vintage-brown rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vintage-brown rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
