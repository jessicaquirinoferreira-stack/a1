import React, { useState } from 'react';
import { FAQ_DATA } from '../data/companyData';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre a <span className="text-amber-400">Lei do Gás no RJ</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Entenda seus direitos, obrigações e como proteger seu imóvel de notificações da concessionária e multas.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-amber-400/50 shadow-xl'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-amber-400 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp helper for unlisted questions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ainda tem alguma dúvida específica sobre o seu imóvel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Nossos técnicos especialistas respondem no WhatsApp em minutos.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre a autovistoria de gás do meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
