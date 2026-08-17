import React from 'react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';
import { Building, Award, ShieldCheck, MapPin, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column (Left 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 bg-slate-950 p-4 sm:p-6 shadow-2xl shadow-amber-500/5 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-6 border border-slate-800">
                <img
                  src={OFFICIAL_COMPANY_DATA.logoUrl}
                  alt="Logo Oficial 4K Inspeção de Gás e Vistoria"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[280px] sm:max-w-[320px] max-h-72 object-contain filter drop-shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105"
                />
                
                {/* Embedded Credential Tag below Logo */}
                <div className="mt-6 w-full bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-amber-400/30 flex items-center justify-between gap-3 text-center">
                  <div className="text-left">
                    <div className="text-xs font-bold text-white font-serif">{OFFICIAL_COMPANY_DATA.name}</div>
                    <div className="text-[10px] text-amber-300 font-medium">Fundada em 2023 • Mesquita / RJ</div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-md font-semibold shrink-0">
                    Inmetro & CREA/CFT
                  </span>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-3 -right-3 bg-emerald-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg border border-emerald-400/40 hidden sm:flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Selo Oficial</span>
            </div>
          </div>

          {/* Text Column (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              Institucional & História
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Compromisso Inegociável com a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Segurança e a Vida
              </span>
            </h2>

            {/* Official Requested About Text */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <p className="font-medium text-white text-base sm:text-lg border-l-4 border-amber-400 pl-4 py-1">
                “A 4K Inspeção de Gás e Vistoria nasceu em 2023 em Mesquita/RJ com o propósito de oferecer segurança real para famílias e empresas. Especializados em inspeções periódicas de gás e vistorias prediais, seguimos rigorosamente as normas técnicas brasileiras (NBR 15526, NBR 13103) e a legislação estadual.”
              </p>
              <p className="text-slate-400 text-sm">
                Nossa atuação vai além do cumprimento de formalidades burocráticas: realizamos diagnósticos aprofundados com equipamentos de precisão calibrados, prevenindo sinistros graves como vazamentos tóxicos de Monóxido de Carbono, explosões de gás e desabamentos estruturais.
              </p>
            </div>

            {/* Official Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>CNPJ:</strong> {OFFICIAL_COMPANY_DATA.cnpj}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Sede Oficial:</strong> Mesquita – Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Normas ABNT:</strong> NBR 15526 e NBR 13103</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Leis Estaduais:</strong> Lei nº 6.890/14 e 6.400</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Olá! Gostaria de agendar uma inspeção técnica com a equipe da 4K.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com a Diretoria Técnica</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
