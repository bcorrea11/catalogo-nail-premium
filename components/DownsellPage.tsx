
import React from 'react';
import { ArrowRight, Check, X, Unlock } from 'lucide-react';
import { useUTMParams, buildCheckoutUrl } from '../hooks/useUTMParams';

interface DownsellPageProps {
  onClose: () => void;
}

export const DownsellPage: React.FC<DownsellPageProps> = ({ onClose }) => {
  const utmParams = useUTMParams();

  const discountCheckoutUrl = buildCheckoutUrl(
    "https://pagamentoseguro.eusounat.com.br/checkout/v5/C7tKjbLkKAxKhYmwn0BH",
    utmParams
  );

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto animate-in fade-in duration-500">

      {/* Background Overlay com Blur e Textura */}
      <div className="fixed inset-0 bg-[#f3e9e3]/95 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/white-marble.png')" }}></div>
      </div>

      {/* Botão Fechar */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[110] p-2 bg-white/50 hover:bg-white rounded-full text-[#8d6e63] transition-all shadow-sm"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="min-h-screen flex items-center justify-center p-4 relative z-[105]">

        {/* Card Principal - Estilo High-End */}
        <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(93,64,55,0.25)] border border-[#eaddcf] overflow-hidden transform transition-all">

          {/* Cabeçalho do Card - Dark Brown */}
          <div className="bg-[#2a1e16] pt-10 pb-8 px-8 relative overflow-hidden text-center">
            {/* Efeitos de Luz no Fundo */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A083] rounded-full blur-[50px] opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#C5A083] rounded-full blur-[50px] opacity-20"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#C5A083]/10 border border-[#C5A083]/30 text-[#C5A083] px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
                <Unlock className="w-3 h-3" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Condição Desbloqueada</span>
              </div>

              <h2 className="text-3xl font-black text-white uppercase leading-none tracking-wide">
                Não vá embora <br /> <span className="text-[#C5A083]">sem o seu kit</span>
              </h2>
            </div>
          </div>

          {/* Corpo do Card */}
          <div className="p-8">
            <p className="text-center text-[#8d6e63] text-sm font-medium leading-relaxed mb-8">
              Entendemos que o momento exige economia. Por isso, o sistema liberou um <span className="text-[#5d4037] font-bold">desconto único de 30%</span> para você não perder essa transformação.
            </p>

            {/* Box de Preço */}
            <div className="bg-[#fffcf9] border border-[#f3e9e3] rounded-2xl p-6 relative mb-8 text-center shadow-inner">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ef4444] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Expira em instantes
              </div>

              <div className="flex flex-col items-center mt-2">
                <span className="text-gray-400 text-sm font-bold line-through decoration-red-400/50 mb-1">de R$ 24,90</span>
                <div className="flex items-baseline justify-center gap-1 text-[#3e2723]">
                  <span className="text-xl font-bold">R$</span>
                  <span className="text-6xl font-black tracking-tighter">17,40</span>
                </div>
                <p className="text-[10px] text-[#C5A083] font-black uppercase tracking-[0.15em] mt-2">
                  Combo Nail Express Completo
                </p>
              </div>
            </div>

            {/* Benefícios Resumidos */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 opacity-80">
              {["Catálogos", "Pós-Atendimento", "Artes Editáveis"].map((tag, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#C5A083]" />
                  <span className="text-[10px] font-bold text-[#5d4037] uppercase tracking-wide">{tag}</span>
                </div>
              ))}
            </div>

            {/* Botão de Ação */}
            <a
              href={discountCheckoutUrl}
              className="w-full btn-gold py-5 rounded-xl font-black text-sm uppercase tracking-[0.15em] text-[#3e2723] shadow-[0_10px_30px_-10px_rgba(197,160,131,0.5)] flex items-center justify-center gap-3 group transition-transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Quero Aproveitar os 30% OFF</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

              {/* Shine Effect Animation */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] animate-[shimmer_2s_infinite]"></div>
            </a>

            <button
              onClick={onClose}
              className="w-full mt-4 text-[10px] font-bold text-[#bcaaa4] uppercase tracking-widest hover:text-[#8d6e63] transition-colors"
            >
              Prefiro perder o desconto e sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
