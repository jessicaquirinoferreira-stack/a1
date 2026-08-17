import React from 'react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';
import { AlertTriangle, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-red-950/40 to-slate-950 text-white relative overflow-hidden border-t border-red-500/30">
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 bg-radial-at-c from-red-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/60 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-wider animate-bounce shadow-lg">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span>Fique 100% Regularizado e Seguro</span>
        </div>

        {/* Main Required Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Não espere o corte de gás ou um acidente.{' '}
          <span className="text-amber-400">
            Agende sua inspeção agora e fique em dia com a lei!
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Atendimento rápido em Mesquita, Baixada Fluminense e todo o RJ. Laudo oficial com ART/TRT aceito pela Naturgy e Bombeiros.
        </p>

        {/* Enormous Pulsing WhatsApp CTA Button */}
        <div className="pt-2">
          <a
            id="final-cta-whatsapp-btn"
            href="https://wa.me/5521995974572?text=Ol%C3%A1!%20Quero%20agendar%20minha%20inspe%C3%A7%C3%A3o%20de%20g%C3%A1s%20agora%20mesmo%20com%20a%204K."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 py-5 px-10 rounded-2xl text-lg sm:text-xl font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 transform hover:-translate-y-1 active:translate-y-0 transition-all group"
          >
            <MessageSquare className="w-7 h-7 text-slate-950 fill-slate-950/20 group-hover:scale-110 transition-transform" />
            <span>Chamar no WhatsApp Agora</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 font-medium pt-4">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Resposta em 2 minutos</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300">
            <ShieldCheck className="w-4 h-4" />
            <span>Credenciada pelo Inmetro</span>
          </div>
          <div className="flex items-center gap-1.5 text-sky-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Orçamento Transparente</span>
          </div>
        </div>
      </div>
    </section>
  );
};
