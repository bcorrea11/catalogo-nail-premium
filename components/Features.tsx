
import React from 'react';

export const Features: React.FC = () => {
  const products = [
    {
      img: "https://i.imgur.com/FrbJl6L.png", // Catálogo Classic
      title: "Catálogo Nail Classic",
      desc: "Versatilidade para o seu negócio. Uma segunda opção de layout com design minimalista e atemporal, focado na clareza para atrair clientes exigentes."
    },
    {
      img: "https://i.imgur.com/3VR7VDw.png", // Pós-atendimento
      title: "Guia de Pós-Atendimento",
      desc: "O segredo para a cliente voltar. Um material educativo e elegante que ensina os cuidados pós-unha, demonstrando sua preocupação e profissionalismo."
    },
    {
      img: "https://i.imgur.com/hDZonnz.png", // Figurinhas
      title: "Pack de Figurinhas Gold",
      desc: "Abandone os GIFs infantis. Receba um pacote de stickers adesivos (png) com estética dourada e minimalista para deixar seus stories com 'cara de loja cara'."
    },
    {
      img: "https://i.imgur.com/0RowsMw.png", // Ideias de Stories
      title: "+150 Ideias de Conteúdo",
      desc: "Um cronograma estratégico para quem não tem tempo. Saiba exatamente o que postar para transformar seguidoras em clientes pagantes."
    },
    {
      img: "https://i.imgur.com/FQJrMyn.png", // Feed
      title: "10 Artes para o seu Instagram",
      desc: "Templates de Feed e Stories prontos. Apenas insira a foto da unha da sua cliente e veja a mágica acontecer. Design limpo que destaca o seu trabalho."
    }
  ];

  return (
    <section className="py-20 bg-[#fffcf9] relative z-10 rounded-[50px] mx-2 shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-[#f3e9e3]">
      <div className="px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-[#AB8669] uppercase tracking-[0.2em] mb-2 block">Quer ir além do básico?</span>
          <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-none mb-4">
            Leve Também o <br/> <span className="text-gold-metallic">Kit Completo</span>
          </h2>
          <p className="text-xs text-[#8d6e63] max-w-xs mx-auto">
            Além do Catálogo Principal, o <strong>Combo Nail Express</strong> desbloqueia todo esse ecossistema para sua marca:
          </p>
        </div>

        <div className="space-y-6">
          {products.map((item, idx) => (
            <div key={idx} className="group relative bg-white border border-[#f0e6dd] p-4 rounded-[24px] hover:border-[#D6C0A9] transition-colors duration-300 shadow-sm">
              <div className="flex items-center gap-5">
                {/* Imagem do Mockup */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#f8f5f2] border border-[#f3e9e3] shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    width="80"
                    height="80"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-1">{item.title}</h3>
                  <p className="text-xs text-[#8d6e63] leading-relaxed font-medium opacity-90 pr-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
