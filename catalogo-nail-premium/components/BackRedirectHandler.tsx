
import React, { useEffect, useRef } from 'react';

interface BackRedirectHandlerProps {
  onTrigger: () => void;
}

export const BackRedirectHandler: React.FC<BackRedirectHandlerProps> = ({ onTrigger }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    // Empurra um estado nulo para o histórico
    // Usamos null ao invés de objeto para evitar erros de serialização em scripts de terceiros
    window.history.pushState(null, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      // Impede o usuário de voltar, empurrando o estado novamente
      window.history.pushState(null, "", window.location.href);
      
      // Dispara a função que vai abrir a página de Downsell
      onTrigger();
    };

    // Adiciona listener para o botão voltar
    window.addEventListener('popstate', handlePopState);

    // Adiciona listener para Exit Intent (Mouse saindo da tela por cima - Desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        onTrigger();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onTrigger]);

  return null;
};
