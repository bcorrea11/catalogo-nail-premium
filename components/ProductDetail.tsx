
import React from 'react';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('precos');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagem do Produto Principal */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute inset-0 bg-[#C5A083] blur-[60px] opacity-20 rounded-full"></div>
             <img
               src="https://i.imgur.com/4SvNhs5.png"
               alt="Catálogo Nail Premium Aberto"
               width="800"
               height="800"
               fetchPriority="high"
               className="relative z-10 w-full rounded-[30px] shadow-[0_20px_50px_-10px_rgba(93,64,55,0.3)] transform hover:scale-[1.02] transition-transform duration-500"
             />
             {/* Selo Flutuante */}
             <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-[#f3e9e3] animate-bounce-slow">
                <p className="text-[10px] font-black uppercase text-[#8d6e63] tracking-widest text-center">100%<br/>Editável</p>
             </div>
          </div>

          {/* Copy de Vendas do Produto Principal */}
          <div className="w-full md:w-1/2 text-left mt-8 md:mt-0">
            <span className="text-[10px] font-bold text-[#C5A083] uppercase tracking-[0.2em] mb-2 block">O Essencial</span>
            <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-none mb-6">
              A Diferença entre <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#946c4e] to-[#5d4037]">Preço e Valor</span>
            </h2>
            
            <p className="text-sm text-[#8d6e63] leading-relaxed mb-8 font-medium">
              Sua cliente decide se você é "cara" ou "barata" antes mesmo de ver seu trabalho, apenas olhando sua apresentação. O <strong>Catálogo Nail Premium</strong> foi criado para que você nunca mais precise enviar uma lista de preços digitada no WhatsApp.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Layout Luxuoso: Valoriza seu serviço instantaneamente.",
                "Tabela de Valores Clara: Elimina curiosos e atrai clientes qualificados.",
                "Explicação de Procedimentos: Educa a cliente sobre a técnica.",
                "Edição no Canva Grátis: Troque cores, fotos e preços pelo celular."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A083] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#5d4037]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#d7ccc8]/30">
              <p className="text-[10px] uppercase tracking-widest text-[#8d6e63] mb-4">
                Disponível no plano de <span className="font-black text-[#5d4037]">R$ 10,00</span>
              </p>

              {/* CTA inserido estrategicamente aqui */}
              <div className="w-full space-y-3">
                <a 
                  href="#precos"
                  onClick={scrollToPricing}
                  className="w-full btn-gold py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  QUERO MEU CATÁLOGO
                  <ChevronRight className="w-5 h-5" />
                </a>
                <div className="flex items-center justify-center gap-2 text-[#8d6e63] text-[10px] font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3 text-[#C5A083] fill-[#C5A083]" />
                  Compra 100% Segura
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
