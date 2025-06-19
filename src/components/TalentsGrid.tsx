
import React from 'react';

const TalentsGrid = () => {
  const talents = [
    {
      title: "Physician",
      description: "Studied medicine in Europe, specializing in ophthalmology to treat his mother's eye condition",
      icon: "🩺"
    },
    {
      title: "Writer",
      description: "Authored novels, poems, and essays that awakened Filipino consciousness and inspired a nation",
      icon: "✍️"
    },
    {
      title: "Historian", 
      description: "Documented Philippine culture, colonial experiences, and the Filipino people's struggles",
      icon: "📚"
    },
    {
      title: "Architect",
      description: "Designed buildings and developed urban planning concepts during his time in Europe",
      icon: "🏛️"
    },
    {
      title: "Painter",
      description: "Created beautiful artworks depicting Filipino life, landscapes, and portraits",
      icon: "🎨"
    },
    {
      title: "Sculptor",
      description: "Crafted sculptures with artistic and cultural significance, showcasing Filipino artistry",
      icon: "🗿"
    },
    {
      title: "Philosopher",
      description: "Developed progressive ideas about nationalism, social reform, and Filipino identity",
      icon: "🤔"
    },
    {
      title: "Musician",
      description: "Composed songs and played various musical instruments, enriching Filipino cultural heritage",
      icon: "🎵"
    },
    {
      title: "Linguist",
      description: "Mastered 22 languages including Latin, Greek, Hebrew, Sanskrit, Arabic, and European languages",
      icon: "🗣️"
    },
    {
      title: "Political Martyr",
      description: "Sacrificed his life for Philippine independence, becoming the ultimate symbol of heroism",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vintage-brown mb-4">
            The True Renaissance Man
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto mb-6"></div>
          <p className="text-lg text-vintage-darkBrown max-w-3xl mx-auto">
            José Rizal was recognized as a hero and political martyr - a true polymath whose extraordinary talents 
            and achievements spanned multiple disciplines, making him one of history's greatest Renaissance figures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {talents.map((talent, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {talent.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-vintage-brown mb-3">
                  {talent.title}
                </h3>
                <p className="text-vintage-darkBrown leading-relaxed text-sm">
                  {talent.description}
                </p>
              </div>
              <div className="mt-4 h-1 bg-gradient-to-r from-vintage-gold to-vintage-brown rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-vintage-gold bg-opacity-20 rounded-lg p-8 max-w-4xl mx-auto">
            <blockquote className="font-serif text-xl md:text-2xl text-vintage-brown italic mb-4">
              "The youth is the hope of our future."
            </blockquote>
            <cite className="text-vintage-darkBrown font-medium">- José Protacio Rizal</cite>
            <div className="mt-4 text-sm text-vintage-brown">
              <p>A man whose diverse talents and unwavering dedication to his country</p>
              <p>made him the Philippines' greatest national hero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentsGrid;
