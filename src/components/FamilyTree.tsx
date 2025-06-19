
import React, { useState } from 'react';

interface FamilyMember {
  name: string;
  description: string;
  relationship: string;
  details: string;
}

const FamilyTree = () => {
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  const paternalSide: FamilyMember[] = [
    {
      name: "Domingo Lamco",
      relationship: "Great-great-grandfather",
      description: "Chinese immigrant from Fookien, China",
      details: "The original patriarch who immigrated from China, establishing the foundation for the Mercado clan in the Philippines."
    },
    {
      name: "Juan Mercado",
      relationship: "Grandfather",
      description: "Adopted the surname 'Mercado' in 1731",
      details: "Changed the family name from Lamco to Mercado to avoid anti-Chinese prejudice during Spanish colonial period."
    },
    {
      name: "Francisco Mercado y Chinco",
      relationship: "Father",
      description: "Educated farmer and ideal father figure",
      details: "A well-educated man who owned land and was respected in Calamba. Known for his progressive thinking and dedication to his children's education."
    }
  ];

  const maternalSide: FamilyMember[] = [
    {
      name: "Eugenio Ursua",
      relationship: "Great-grandfather",
      description: "Of Japanese ancestry, possibly related to Lakandula",
      details: "Descended from Japanese ancestry and possibly related to Lakandula, a native king, bringing noble indigenous blood to the lineage."
    },
    {
      name: "Brigida de Quintos",
      relationship: "Great-grandmother",
      description: "Daughter of Eugenio Ursua",
      details: "Married Lorenzo Alberto Alonso, continuing the maternal line that would produce Teodora Alonso."
    },
    {
      name: "Teodora Alonso Quintos Realonda",
      relationship: "Mother",
      description: "Educated at Colegio de Santa Rosa",
      details: "A remarkable woman known for her intelligence, religious devotion, and strong influence on Rizal's character. She was well-educated and strong-willed, nearly dying during José's birth due to his large head."
    }
  ];

  const siblings: FamilyMember[] = [
    {
      name: "Saturnina",
      relationship: "Elder Sister (1st child)",
      description: "Eldest of the Rizal children",
      details: "The responsible eldest daughter who helped care for the younger siblings and maintained family traditions."
    },
    {
      name: "Paciano",
      relationship: "Elder Brother (2nd child)",
      description: "Father figure and revolutionary",
      details: "Played a crucial father-figure role in José's life and was actively involved in the Philippine revolution. He sacrificed his own education to support José's studies abroad."
    },
    {
      name: "Narcisa",
      relationship: "Sister (3rd child)",
      description: "Known for her gentle nature",
      details: "One of Rizal's beloved sisters who supported the family throughout difficult times."
    },
    {
      name: "Olympia",
      relationship: "Sister (4th child)",
      description: "Fourth child of the family",
      details: "Part of the close-knit Rizal family, contributing to the loving household environment."
    },
    {
      name: "Lucia",
      relationship: "Sister (5th child)",
      description: "Fifth child of the family",
      details: "Another of José's supportive sisters in the large Rizal household."
    },
    {
      name: "Maria",
      relationship: "Sister (6th child)",
      description: "Sixth child of the family",
      details: "Part of the Rizal family's strong sibling bond that supported each other through colonial hardships."
    },
    {
      name: "Concepcion",
      relationship: "Sister (8th child)",
      description: "Died young",
      details: "Tragically died at a young age, bringing sorrow to the Rizal family."
    },
    {
      name: "Josefa",
      relationship: "Sister (9th child)",
      description: "Ninth child of the family",
      details: "One of the younger Rizal siblings who looked up to José's achievements."
    },
    {
      name: "Trinidad",
      relationship: "Sister (10th child)",
      description: "Tenth child of the family",
      details: "Among the youngest of the Rizal children, part of the loving family environment."
    },
    {
      name: "Soledad",
      relationship: "Youngest Sister (11th child)",
      description: "Youngest of the Rizal children",
      details: "The baby of the family, completing the eleven Rizal siblings."
    }
  ];

  return (
    <section className="py-20 bg-vintage-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-brown mb-4">
            Family Heritage & The Rizal Surname
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="text-lg text-vintage-darkBrown max-w-3xl mx-auto mb-4">
            Discover the rich ancestry that shaped José Rizal, from Chinese and Japanese roots to Spanish colonial influences.
          </p>
          <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-vintage-brown mb-2">Origin of the Surname 'Rizal'</h3>
            <p className="text-vintage-darkBrown">
              Due to a Spanish decree requiring native Filipinos to adopt Spanish surnames, the family chose "Rizal" 
              (from "Ricial" meaning green fields), though it was assigned by a Spanish official.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Paternal Side */}
          <div className="bg-white rounded-lg p-6 shadow-lg ornate-border">
            <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center">
              Mercado Clan (Paternal)
            </h3>
            <div className="space-y-4">
              {paternalSide.map((member, index) => (
                <div 
                  key={index}
                  className="p-4 border border-vintage-sepia rounded-lg cursor-pointer transition-all duration-300 hover:bg-vintage-cream hover:shadow-md"
                  onClick={() => setSelectedMember(member)}
                >
                  <h4 className="font-semibold text-vintage-brown">{member.name}</h4>
                  <p className="text-sm text-vintage-darkBrown">{member.relationship}</p>
                  <p className="text-xs text-vintage-brown mt-1">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maternal Side */}
          <div className="bg-white rounded-lg p-6 shadow-lg ornate-border">
            <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center">
              Alonso Clan (Maternal)
            
            </h3>
            <div className="space-y-4">
              {maternalSide.map((member, index) => (
                <div 
                  key={index}
                  className="p-4 border border-vintage-sepia rounded-lg cursor-pointer transition-all duration-300 hover:bg-vintage-cream hover:shadow-md"
                  onClick={() => setSelectedMember(member)}
                >
                  <h4 className="font-semibold text-vintage-brown">{member.name}</h4>
                  <p className="text-sm text-vintage-darkBrown">{member.relationship}</p>
                  <p className="text-xs text-vintage-brown mt-1">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Siblings */}
          <div className="bg-white rounded-lg p-6 shadow-lg ornate-border">
            <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-6 text-center">
              10 Siblings (José was 7th child)
            </h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {siblings.map((member, index) => (
                <div 
                  key={index}
                  className="p-3 border border-vintage-sepia rounded-lg cursor-pointer transition-all duration-300 hover:bg-vintage-cream hover:shadow-md"
                  onClick={() => setSelectedMember(member)}
                >
                  <h4 className="font-semibold text-vintage-brown text-sm">{member.name}</h4>
                  <p className="text-xs text-vintage-darkBrown">{member.relationship}</p>
                  <p className="text-xs text-vintage-brown mt-1">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family Home Details */}
        <div className="bg-vintage-cream rounded-lg p-8 shadow-lg mb-8">
          <h3 className="font-serif text-2xl font-bold text-vintage-brown mb-4 text-center">The Rizal Family Home</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-vintage-brown mb-2">Living Conditions</h4>
              <ul className="text-vintage-darkBrown space-y-1 text-sm">
                <li>• Two-story stone and wood house</li>
                <li>• Beautiful garden and poultry yard</li>
                <li>• Belonged to the principalia (town elite)</li>
                <li>• Considered middle class family</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-vintage-brown mb-2">Education & Values</h4>
              <ul className="text-vintage-darkBrown space-y-1 text-sm">
                <li>• Private library with over 1,000 books</li>
                <li>• Largest library in Calamba</li>
                <li>• Disciplined and religious household</li>
                <li>• Children taught respect, obedience, Catholic values</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Selected Member Details */}
        {selectedMember && (
          <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-8 shadow-lg animate-fade-in">
            <h3 className="font-serif text-3xl font-bold text-vintage-brown mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-vintage-darkBrown font-medium mb-4">
              {selectedMember.relationship}
            </p>
            <p className="text-vintage-brown leading-relaxed">
              {selectedMember.details}
            </p>
            <button 
              onClick={() => setSelectedMember(null)}
              className="mt-4 px-4 py-2 bg-vintage-brown text-vintage-cream rounded-lg hover:bg-vintage-darkBrown transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FamilyTree;
