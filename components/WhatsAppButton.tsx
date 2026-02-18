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
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Popup */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl p-4 mb-2 w-64 border border-[#eaddcf] animate-in slide-in-from-bottom-2 duration-200">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-bold text-[#5d4037]">Atendimento</h3>
                        <button onClick={togglePopup} className="text-gray-400 hover:text-gray-600">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-xs text-[#8d6e63] mb-4">
                        Deseja falar com uma atendente?
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={togglePopup}
                            className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-[#8d6e63] text-xs font-bold rounded-lg transition-colors"
                        >
                            Não
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="flex-1 py-2 px-3 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors"
                        >
                            Sim
                        </button>
                    </div>
                </div>
            )}

            {/* Button */}
            <button
                onClick={togglePopup}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group"
                aria-label="Falar no WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </button>
        </div>
    );
};
