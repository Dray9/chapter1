
import React from 'react';

const FamilyLife = () => {
  return (
    <section className="py-20 bg-vintage-sepia">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-brown mb-4">
            Family Life and Home
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="text-lg text-vintage-darkBrown max-w-3xl mx-auto">
            The Rizal family's lifestyle, values, and their distinguished position in Calamba society
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Family Home */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-4">
                The Rizal Family Home
              </h3>
            </div>
            <div className="space-y-4 text-vintage-darkBrown">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Two-story stone and wood house</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Beautiful garden and poultry yard</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Private library with over 1,000 books - the largest in Calamba</p>
              </div>
            </div>
          </div>

          {/* Social Status */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-4">
                Social Standing
              </h3>
            </div>
            <div className="space-y-4 text-vintage-darkBrown">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Belonged to the <strong>principalia</strong> (town elite)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Considered middle class in colonial society</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                <p>Respected and influential family in Calamba</p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Values */}
        <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">⛪</div>
            <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-4">
              Family Values and Education
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-vintage-brown mb-3">Disciplined Upbringing</h4>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-brown rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-vintage-darkBrown">Children taught respect and obedience</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-brown rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-vintage-darkBrown">Strong emphasis on education</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-vintage-brown mb-3">Religious Foundation</h4>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-brown rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-vintage-darkBrown">Devout Catholic household</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-vintage-brown rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-vintage-darkBrown">Catholic values instilled in all children</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyLife;
