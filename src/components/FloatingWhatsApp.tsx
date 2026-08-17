import React, { useState } from 'react';
import { MessageSquare, Phone, X, ShieldCheck } from 'lucide-react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop & Mobile Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 font-sans">
        {showTooltip && (
          <div className="bg-slate-900 border border-amber-400/40 text-white rounded-2xl p-3.5 shadow-2xl max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative text-xs">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-0.5"
              aria-label="Fechar dica"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Plantão de Vistorias RJ</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-tight">
              Precisa de laudo urgente ou tem dúvidas sobre a autovistoria? Fale agora com nossa equipe.
            </p>
          </div>
        )}

        <a
          id="floating-whatsapp-btn"
          href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/50 transform hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Falar no WhatsApp com a 4K Inspeção de Gás"
        >
          {/* Ripple Pulse Rings */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
          <MessageSquare className="w-7 h-7 text-slate-950 fill-slate-950/30 relative z-10" />
          
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border border-slate-900 shadow">
            1
          </span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${OFFICIAL_COMPANY_DATA.phoneClean}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Ligar ({OFFICIAL_COMPANY_DATA.phone})</span>
        </a>

        <a
          href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white/20" />
          <span>WhatsApp Rápido</span>
        </a>
      </div>
    </>
  );
};
