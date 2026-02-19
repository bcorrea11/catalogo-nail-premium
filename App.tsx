
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProductDetail } from './components/ProductDetail';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { UpsellPopup } from './components/UpsellPopup';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SalesNotification } from './components/SalesNotification';
import { BackRedirectHandler } from './components/BackRedirectHandler';
import { DownsellPage } from './components/DownsellPage';


const App: React.FC = () => {
  const [isUpsellVisible, setIsUpsellVisible] = useState(false);
  const [isDownsellPageVisible, setIsDownsellPageVisible] = useState(false);

  const handleOpenUpsell = () => {
    setIsUpsellVisible(true);
  };

  const handleCloseUpsell = () => {
    setIsUpsellVisible(false);
  };

  const handleTriggerDownsell = () => {
    // Só abre o downsell se o upsell não estiver aberto, para não sobrepor
    if (!isUpsellVisible) {
      setIsDownsellPageVisible(true);
    }
  };

  const handleCloseDownsell = () => {
    setIsDownsellPageVisible(false);
  };

  return (
    <div className="min-h-screen marble-bg text-neutral-800 selection:bg-gold-200">
      <Header />

      {/* Lógica de "Back Redirect" agora abre a página de Downsell */}
      <BackRedirectHandler onTrigger={handleTriggerDownsell} />

      {/* Se a página de Downsell estiver ativa, ela cobre tudo. Caso contrário, mostra o site normal. */}
      {isDownsellPageVisible ? (
        <DownsellPage onClose={handleCloseDownsell} />
      ) : (
        <main>
          <Hero />
          <ProductDetail />
          <Features />
          <SocialProof />
          <Pricing onBasicClick={handleOpenUpsell} />
          <FAQ />
        </main>
      )}

      {/* Footer só aparece se não estiver no Downsell (para focar na conversão) */}
      {!isDownsellPageVisible && <Footer />}

      {/* Notificações continuam aparecendo */}
      <SalesNotification />


      {isUpsellVisible && !isDownsellPageVisible && (
        <UpsellPopup onClose={handleCloseUpsell} />
      )}
    </div>
  );
};

export default App;
