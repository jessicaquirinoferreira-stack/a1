import React from 'react';
import { AlertOctagon, Flame, ShieldAlert, FileX, ArrowRight, MessageSquare, Skull } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const UrgencyAlert: React.FC = () => {
  const risks = [
    {
      icon: Flame,
      title: "Risco de Corte Imediato pela Concessionária",
      desc: "A Naturgy e órgãos fiscalizadores estão notificando e suspendendo o fornecimento de gás em imóveis sem autovistoria em dia."
    },
    {
      icon: Skull,
      title: "Perigo de Intoxicação por Monóxido de Carbono",
      desc: "Vazamentos imperceptíveis e má queima de aquecedores são silenciosos e letais. A inspeção técnica salva vidas."
    },
    {
      icon: FileX,
      title: "Perda da Cobertura de Seguros em Sinistros",
      desc: "Em caso de vazamento ou princípio de incêndio, seguradoras negam indenização se o imóvel não possuir o laudo obrigatório com ART."
    },
    {
      icon: ShieldAlert,
      title: "Multas Pesadas para Síndicos e Proprietários",
      desc: "O síndico ou proprietário responde civil e criminalmente pela omissão na realização da autovistoria exigida por lei estadual."
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-y border-red-500/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/50 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertOctagon className="w-4 h-4 text-red-500" />
            Alerta de Segurança & Legislação Obrigatória RJ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Por que você <span className="text-red-400 underline decoration-red-500/50">NÃO PODE</span> adiar a sua Autovistoria de Gás?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            A Lei Estadual nº 6.890/2014 estabelece a obrigatoriedade da autovistoria a cada 5 anos. Ignorar a inspeção coloca em risco sua família, seu condomínio e seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {risks.map((risk, index) => {
            const IconComp = risk.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-red-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {risk.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {risk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="bg-gradient-to-r from-red-950/60 via-slate-900 to-emerald-950/60 rounded-2xl p-6 sm:p-8 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Foi notificado ou precisa regularizar seu imóvel hoje?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossos engenheiros e técnicos realizam o teste de estanqueidade e emitem o laudo com agilidade em todo o RJ.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Fui notificado / preciso regularizar minha autovistoria de gás com urgência. Gostaria de atendimento rápido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/50 transform hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Regularizar Agora pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
