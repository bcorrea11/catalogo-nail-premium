
import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: "Glaucia Mendes",
      text: "Ficou lindo mesmo, amei o seu catálogo! Fiz umas mudanças rápidas e já enviei para as clientes. A reação delas foi outra!",
      // Foto mais lifestyle, fundo neutro mas real, pose espontânea
      img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=200&h=200&fit=crop"
    },
    {
      name: "Bruna Oliveira",
      text: "Que chiqueee! Eu amei tanto, meu atendimento mudou da água pro vinho. Pode ter certeza que serei cliente fiel.",
      // Foto externa, luz natural, parecendo foto de perfil de rede social real
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop"
    },
    {
      name: "Bianca Lopes",
      text: "Gostei muito do design. As informações ficam claras e passa muita credibilidade. Facilita muito nossa vida na correria.",
      // Mantida a referência que o cliente gostou (Outdoor, chapéu, vibe natural)
      img: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#C5A083]/5 rotate-12 blur-3xl rounded-full -z-10"></div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-black uppercase text-[#5d4037] mb-2">Quem usa, aprova</h2>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C5A083] text-[#C5A083]" />
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-[30px] shadow-sm relative">
            {/* Aspas */}
            <div className="absolute top-6 right-6 text-6xl font-serif text-[#C5A083] opacity-20 leading-none h-4">"</div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-[2px] bg-gradient-to-br from-[#C5A083] to-transparent rounded-full shadow-sm">
                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#5d4037] text-sm uppercase">{rev.name}</h4>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C5A083] text-[#C5A083]" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-xs text-[#5d4037]/80 italic leading-relaxed font-medium">
              "{rev.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
