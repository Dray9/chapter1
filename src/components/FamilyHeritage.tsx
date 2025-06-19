
import React, { useState } from 'react';
import Francisco from '../assets/Francisco.png';
import teodora from '../assets/teodora.png';
import sat from '../assets/saturnina.png';
import pat from '../assets/paciano.png';
import nar from '../assets/narcisa.png';
import oly from '../assets/olympia.png';
import luc from '../assets/lucia.png';
import mar from '../assets/maria.png';
import con from '../assets/concep.png';
import jos from '../assets/josefa.png';
import tri from '../assets/trinidad.png';
import sol from '../assets/soldedad.png';

interface FamilyMember {
  name: string;
  description: string;
  relationship: string;
  details: string;
  image: string;
}

const FamilyHeritage = () => {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  const parents: FamilyMember[] = [
    {
      name: "Francisco Mercado y Chinco",
      relationship: "Father",
      description: "Educated farmer and ideal father figure",
      details: "A well-educated man who owned land and was respected in Calamba. Known for his progressive thinking and dedication to his children's education.",
      image: Francisco
    },
    {
      name: "Teodora Alonso Quintos Realonda",
      relationship: "Mother", 
      description: "Educated at Colegio de Santa Rosa",
      details: "A remarkable woman known for her intelligence, religious devotion, and strong influence on Rizal's character. She was well-educated and strong-willed, nearly dying during José's birth due to his large head.",
      image: teodora
    }
  ];

  const siblings: FamilyMember[] = [
    {
      name: "Saturnina",
      relationship: "Elder Sister (1st child)",
      description: "Eldest of the Rizal children",
      details: "The responsible eldest daughter who helped care for the younger siblings and maintained family traditions.",
      image: sat
    },
    {
      name: "Paciano",
      relationship: "Elder Brother (2nd child)",
      description: "Father figure and revolutionary",
      details: "Played a crucial father-figure role in José's life and was actively involved in the Philippine revolution. He sacrificed his own education to support José's studies abroad.",
      image: pat
    },
    {
      name: "Narcisa",
      relationship: "Sister (3rd child)",
      description: "Known for her gentle nature",
      details: "One of Rizal's beloved sisters who supported the family throughout difficult times.",
      image: nar
    },
    {
      name: "Olympia",
      relationship: "Sister (4th child)",
      description: "Fourth child of the family",
      details: "Part of the close-knit Rizal family, contributing to the loving household environment.",
      image: oly
    },
    {
      name: "Lucia",
      relationship: "Sister (5th child)",
      description: "Fifth child of the family",
      details: "Another of José's supportive sisters in the large Rizal household.",
      image: luc
    },
    {
      name: "Maria",
      relationship: "Sister (6th child)",
      description: "Sixth child of the family",
      details: "Part of the Rizal family's strong sibling bond that supported each other through colonial hardships.",
      image: mar
    },
    {
      name: "Concepcion",
      relationship: "Sister (8th child)",
      description: "Died young",
      details: "Tragically died at a young age, bringing sorrow to the Rizal family.",
      image: con
    },
    {
      name: "Josefa",
      relationship: "Sister (9th child)",
      description: "Ninth child of the family",
      details: "One of the younger Rizal siblings who looked up to José's achievements.",
      image: jos
    },
    {
      name: "Trinidad",
      relationship: "Sister (10th child)",
      description: "Tenth child of the family",
      details: "Among the youngest of the Rizal children, part of the loving family environment.",
      image: tri
    },
    {
      name: "Soledad",
      relationship: "Youngest Sister (11th child)",
      description: "Youngest of the Rizal children",
      details: "The baby of the family, completing the eleven Rizal siblings.",
      image: sol
    }
  ];

  const paternalAncestry: FamilyMember[] = [
    {
      name: "Domingo Lamco",
      relationship: "Great-great-grandfather",
      description: "Chinese immigrant from Fookien, China",
      details: "A Chinese immigrant from Fujian, China, who settled in Laguna. To integrate better into Filipino society and avoid anti-Chinese discrimination, he adopted the Spanish surname Lamco and later Mercado. His legacy of hard work and entrepreneurship was passed down through generations.",
      image: con
    },
    {
      name: "Juan Mercado",
      relationship: "Grandfather",
      description: "Adopted the surname 'Mercado' in 1731",
      details: "The son of Domingo Lamco. He served as gobernadorcillo (municipal governor) of Biñan, Laguna. Juan instilled civic responsibility and leadership in his children, including Francisco Mercado, José Rizal’s father.",
      image: con
    }
  ];

  const maternalAncestry: FamilyMember[] = [
    {
      name: "Eugenio Ursua",
      relationship: "Great-grandfather",
      description: "Of Japanese ancestry, possibly related to Lakandula",
      details: "A Japanese mestizo who was known for his intelligence and upright character. He is believed to be the father of Brijida de Quintos.",
      image: con
    },
    {
      name: "Brigida de Quintos",
      relationship: "Grandmother",
      description: "Daughter of Eugenio Ursua",
      details: "A woman of Filipino and possibly Spanish-Chinese descent, she married Lorenzo Alonso. Brijida played a key role in the heritage passed down to Teodora and later to Rizal.",
      image: con
    }
  ];

  return (
    <section className="py-20 bg-vintage-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-brown mb-4">
            Family Heritage
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="text-lg text-vintage-darkBrown max-w-3xl mx-auto mb-4">
            Discover José Rizal's family lineage - his parents, siblings, and ancestry that shaped the national hero.
          </p>
          <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-vintage-brown mb-2">Origin of the Surname 'Rizal'</h3>
            <p className="text-vintage-darkBrown">
              Due to a Spanish decree requiring native Filipinos to adopt Spanish surnames, the family chose "Rizal" 
              (from "Ricial" meaning green fields), though it was assigned by a Spanish official.
            </p>
          </div>
        </div>

        {/* Parents Section */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl font-bold text-vintage-brown mb-8 text-center">The Rizal Parents</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {parents.map((parent, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedMember(parent)}
              >
                <div className="w-full h-48 bg-vintage-sepia rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={parent.image} 
                    alt={parent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif text-xl font-bold text-vintage-brown mb-2">{parent.name}</h4>
                <p className="text-vintage-darkBrown font-medium mb-2">{parent.relationship}</p>
                <p className="text-vintage-brown text-sm">{parent.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Siblings Section */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl font-bold text-vintage-brown mb-8 text-center">
            The 10 Siblings (José was the 7th child)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {siblings.map((sibling, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedMember(sibling)}
              >
                <div className="w-full h-32 bg-vintage-sepia rounded-lg mb-3 overflow-hidden">
                  <img 
                    src={sibling.image} 
                    alt={sibling.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-vintage-brown text-sm mb-1">{sibling.name}</h4>
                <p className="text-vintage-darkBrown text-xs">{sibling.relationship}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ancestry Section */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl font-bold text-vintage-brown mb-8 text-center">Ancestry</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Paternal Ancestry */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-serif text-xl font-bold text-vintage-brown mb-6 text-center">
                Mercado Clan (Paternal)
              </h4>
              <div className="space-y-4">
                {paternalAncestry.map((ancestor, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 border border-vintage-sepia rounded-lg cursor-pointer transition-all duration-300 hover:bg-vintage-cream"
                    onClick={() => setSelectedMember(ancestor)}
                  >
                    <div className="w-16 h-16 bg-vintage-sepia rounded-full mr-4 overflow-hidden">
                      <img 
                        src={ancestor.image} 
                        alt={ancestor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold text-vintage-brown">{ancestor.name}</h5>
                      <p className="text-sm text-vintage-darkBrown">{ancestor.relationship}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maternal Ancestry */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-serif text-xl font-bold text-vintage-brown mb-6 text-center">
                Alonso Clan (Maternal)
              </h4>
              <div className="space-y-4">
                {maternalAncestry.map((ancestor, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 border border-vintage-sepia rounded-lg cursor-pointer transition-all duration-300 hover:bg-vintage-cream"
                    onClick={() => setSelectedMember(ancestor)}
                  >
                    <div className="w-16 h-16 bg-vintage-sepia rounded-full mr-4 overflow-hidden">
                      <img 
                        src={ancestor.image} 
                        alt={ancestor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold text-vintage-brown">{ancestor.name}</h5>
                      <p className="text-sm text-vintage-darkBrown">{ancestor.relationship}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Member Details */}
        {selectedMember && (
          <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-8 shadow-lg animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-3xl font-bold text-vintage-brown mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-vintage-darkBrown font-medium mb-4">
                  {selectedMember.relationship}
                </p>
                <p className="text-vintage-brown leading-relaxed mb-4">
                  {selectedMember.details}
                </p>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 bg-vintage-brown text-vintage-cream rounded-lg hover:bg-vintage-darkBrown transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FamilyHeritage;
