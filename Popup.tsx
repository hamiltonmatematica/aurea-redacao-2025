import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup immediately on mount
        setIsVisible(true);

        // Auto-close after 15 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden animate-scale-up">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-aurea-blue to-aurea-tangerine"></div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-aurea-tangerine transition-colors bg-white rounded-full p-1 hover:bg-gray-100"
                >
                    <X size={24} />
                </button>

                <div className="p-8 pt-10 text-center">
                    <h3 className="font-display text-2xl md:text-3xl text-aurea-blue uppercase leading-tight mb-4">
                        Seletiva por<br />
                        <span className="text-aurea-tangerine">Desempenho das Notas Enem</span>
                    </h3>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        A sua nota no Enem pode te ajudar a garantir uma bolsa de até <span className="font-bold text-aurea-ebony">80%</span> nas nossas turmas do Áurea em 2026!
                    </p>

                    <a
                        href="https://delicategiantpanda-n8n.cloudfy.live/form/3d4c98de-ad6c-49ec-ac52-1a984cd83bfe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-aurea-tangerine text-white font-bold text-lg uppercase px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                    >
                        FAÇA JÁ SUA SIMULAÇÃO
                    </a>
                </div>
            </div>
        </div>
    );
};
