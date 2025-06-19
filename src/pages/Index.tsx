
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FamilyHeritage from '../components/FamilyHeritage';
import FamilyLife from '../components/FamilyLife';
import TalentsGrid from '../components/TalentsGrid';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="family">
        <FamilyHeritage />
      </div>
      <div id="family-life">
        <FamilyLife />
      </div>
      <div id="talents">
        <TalentsGrid />
      </div>
      
      {/* Footer */}
      <footer className="bg-vintage-darkBrown text-vintage-cream py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4">José Protacio Rizal</h3>
            <div className="w-16 h-1 bg-vintage-gold mx-auto mb-4"></div>
            <p className="text-vintage-sepia max-w-2xl mx-auto">
              "He who does not know how to look back at where he came from will never get to his destination."
            </p>
          </div>
          
          <div className="border-t border-vintage-brown pt-8">
            <p className="text-vintage-sepia">
              © 2024 José Rizal Historical Archive. Preserving the legacy of the Philippine National Hero.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
