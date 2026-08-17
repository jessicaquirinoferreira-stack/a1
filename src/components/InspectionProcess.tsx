import React from 'react';
import { CalendarCheck, Search, Activity, FileCheck2, ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const InspectionProcess: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Agendamento Ágil",
      desc: "Você entra em contato pelo WhatsApp, escolhe o melhor dia e horário para a visita técnica em seu imóvel ou condomínio.",
      icon: CalendarCheck,
      highlight: "Resposta em 2 min"
    },
    {
      stepNumber: "02",
      title: "Inspeção Instrumental",
      desc: "Nosso técnico credenciado chega pontualmente munido de manômetro digital, detector eletrônico de vazamentos e analisador de combustão.",
      icon: Search,
      highlight: "Equipamento Calibrado"
    },
    {
      stepNumber: "03",
      title: "Teste de Estanqueidade",
      desc: "Realizamos os testes de pressão e vedação das tubulações, além de checar a exaustão do aquecedor e a ventilação permanente.",
      icon: Activity,
      highlight: "Normas NBR 15526 / 13103"
    },
    {
      stepNumber: "04",
      title: "Laudo & Selo de Aprovação",
      desc: "Aprovada a instalação, emitimos o Laudo Técnico com ART/TRT e afixamos o Selo Oficial de Conformidade no seu aquecedor.",
      icon: FileCheck2,
      highlight: "Válido por 5 anos"
    }
  ];

  return (
    <section id="processo" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            Passo a Passo Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como funciona a inspeção com a <span className="text-amber-400">4K</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sem burocracia, com agilidade e total respaldo técnico. Regularize seu imóvel em 4 etapas simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 relative flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-serif text-slate-700 group-hover:text-amber-400 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar a vistoria de gás seguindo o passo a passo da 4K.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950 transition-all transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Agendar Minha Vistoria Agora</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
