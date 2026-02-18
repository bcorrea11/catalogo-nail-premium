
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { useUTMParams, buildCheckoutUrl } from '../hooks/useUTMParams';

interface PricingProps {
  onBasicClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBasicClick }) => {
  const utmParams = useUTMParams();

  const premiumCheckoutUrl = buildCheckoutUrl(
    "https://pay.lowify.com.br/checkout?product_id=chnhDq",
    utmParams
  );

  return (
    <section id="precos" className="py-24 px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black uppercase text-[#5d4037] leading-none mb-4">Escolha <br />seu Plano</h2>
        <p className="text-xs uppercase tracking-widest text-[#8d6e63]">Investimento único • Acesso vitalício</p>
      </div>

      <div className="space-y-8 max-w-sm mx-auto">

        {/* === PLANO BÁSICO (1º) === */}
        <div className="bg-white border-2 border-[#f3e9e3] rounded-[30px] p-8 relative">
          <div className="absolute top-0 right-0 left-0 h-1 bg-[#f3e9e3] mx-10 rounded-b-lg"></div>

          <div className="text-center mb-6">
            <h3 className="text-[#8d6e63] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Entrada</h3>
            <p className="text-[#5d4037] font-bold text-sm">Catálogo Individual</p>
          </div>

          <div className="flex items-baseline justify-center gap-1 text-[#5d4037] mb-8">
            <span className="text-sm font-bold">R$</span>
            <span className="text-5xl font-black">10,00</span>
          </div>

          <div className="space-y-3 mb-8 px-2 opacity-80">
            <div className="flex items-center gap-3">
              <div className="bg-[#f3e9e3] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
              <span className="text-xs font-bold text-[#5d4037]">Catálogo Nail Premium</span>
            </div>
            <div className="flex items-center gap-3 opacity-40">
              <div className="border border-gray-200 p-1 rounded-full"><Check className="w-3 h-3 text-transparent" /></div>
              <span className="text-xs text-[#8d6e63]">Catálogo Classic</span>
            </div>
            <div className="flex items-center gap-3 opacity-40">
              <div className="border border-gray-200 p-1 rounded-full"><Check className="w-3 h-3 text-transparent" /></div>
              <span className="text-xs text-[#8d6e63]">Bônus Exclusivos</span>
            </div>
          </div>

          <button
            onClick={onBasicClick}
            className="w-full py-4 bg-[#f8f5f2] border border-[#eaddcf] rounded-xl text-[10px] font-black uppercase tracking-widest text-[#946c4e] hover:bg-[#eaddcf] transition-colors"
          >
            Quero Apenas o Catálogo
          </button>
        </div>


        {/* === PLANO PREMIUM (2º - DESTAQUE) === */}
        <div className="relative mt-12">
          {/* BADGE */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-max">
            <div className="bg-gold-metallic py-2 px-6 rounded-full shadow-lg border-2 border-white">
              <p className="text-[10px] font-black text-[#3e2723] uppercase tracking-[0.2em]">Mais Vendido</p>
            </div>
          </div>

          <div className="relative bg-[#2a1e16] rounded-[40px] p-1 text-center card-premium-shadow overflow-hidden transform scale-105">
            {/* Inner Content - Padding bottom reduzido para 6 (24px) e margem da lista reduzida */}
            <div className="bg-gradient-to-b from-[#3e2b22] to-[#1a110d] rounded-[36px] pt-8 pb-6 px-6 relative">

              {/* Champagne Accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A083] opacity-10 blur-[60px] rounded-full"></div>

              <h3 className="text-gold-metallic text-sm font-black uppercase tracking-[0.2em] mb-1 mt-3">Combo Nail Express</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6">Experiência Completa</p>

              {/* Preço */}
              <div className="flex flex-col items-center justify-center mb-6 border-y border-white/5 py-4">
                <span className="text-white/30 text-xs font-bold line-through mb-1">de R$ 67,90</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-lg font-bold">R$</span>
                  <span className="text-7xl font-black tracking-tighter">24,90</span>
                </div>
              </div>

              {/* Lista - Margem inferior reduzida para mb-5 */}
              <ul className="text-left space-y-2.5 mb-5 pl-2">
                {[
                  "Catálogo Premium & Classic",
                  "Guia de Pós-Atendimento",
                  "Pack de Figurinhas Gold",
                  "+150 Ideias de Stories",
                  "10 Artes para o seu Instagram",
                  "Atualizações Gratuitas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-xs font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#C5A083]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#C5A083]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={premiumCheckoutUrl}
                className="w-full btn-gold py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(197,160,131,0.3)] animate-pulse hover:scale-[1.02] transition-transform block text-center"
              >
                Quero o Kit Completo
              </a>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="flex items-center justify-center gap-4 opacity-60 pt-4">
          <ShieldCheck className="w-5 h-5 text-[#5d4037]" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d4037]">7 Dias de Garantia Incondicional</p>
        </div>

      </div>
    </section>
  );
};
