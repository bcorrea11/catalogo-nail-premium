import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleConfirm = () => {
        window.location.href = "https://wa.me/message/LBM22JXSDL3DJ1";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            {/* Popup */}
            {isOpen && (
                <div className="bg-[#f5f7f9] rounded-2xl shadow-2xl mb-2 w-[340px] overflow-hidden animate-in slide-in-from-bottom-2 duration-300 border border-gray-100/50">

                    {/* Header */}
                    <div className="bg-[#091e16] p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse"></div>
                            </div>
                            <h3 className="text-white font-bold text-base tracking-wide">Suporte Online</h3>
                        </div>
                        <button
                            onClick={togglePopup}
                            className="text-white/80 hover:text-white transition-colors bg-white/10 p-1 rounded-full hover:bg-white/20"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 bg-white">
                        {/* Message Bubble */}
                        <div className="bg-[#f8f9fa] p-4 rounded-xl rounded-tl-sm border border-gray-100 shadow-sm mb-6">
                            <p className="text-gray-600 text-[13px] leading-relaxed">
                                Olá! 👋 <br />
                                Ficou com alguma dúvida? Fale com nosso time de sucesso do cliente.
                            </p>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={handleConfirm}
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 group"
                        >
                            <MessageCircle className="w-5 h-5 fill-current" />
                            <span className="font-extrabold text-sm tracking-wide">INICIAR ATENDIMENTO</span>
                        </button>

                        {/* Footer Text */}
                        <p className="text-center text-gray-400 text-[10px] mt-4 font-medium">
                            Respondemos em alguns minutos
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button
                onClick={togglePopup}
                className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 relative group`}
                aria-label="Falar no WhatsApp"
            >
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                <MessageCircle className="w-7 h-7 fill-white/20" />
            </button>
        </div>
    );
};
