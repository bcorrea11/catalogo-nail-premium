
import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-black uppercase text-brown">Dúvidas Frequentes</h2>
      </div>

      <div className="space-y-4 max-w-sm mx-auto">
        {[
          { q: "Preciso ser designer?", a: "Absolutamente não! O material foi feito para quem não tem tempo e precisa de praticidade. Basta clicar e editar." },
          { q: "Funciona no celular?", a: "Sim! Você pode editar tudo pelo aplicativo gratuito do Canva no seu celular em minutos." },
          { q: "O acesso expira?", a: "Não. O acesso é vitalício e você receberá todas as atualizações futuras sem pagar um centavo a mais." },
          { q: "Como recebo o material?", a: "Imediatamente! Assim que o pagamento for confirmado, o link de acesso vai para o seu e-mail cadastrado." }
        ].map((item, i) => (
          <details key={i} className="group bg-nude/10 border border-nude/30 rounded-3xl overflow-hidden transition-all">
            <summary className="list-none p-6 font-black text-[10px] uppercase tracking-widest cursor-pointer flex justify-between items-center select-none text-brown">
              {item.q}
              <span className="text-lg font-normal transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-xs leading-relaxed opacity-70 text-brown">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};
