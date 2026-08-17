import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/companyData';
import { ShieldCheck, Award, Zap, FileCheck, BadgePercent, Gauge, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-sky-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-emerald-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-indigo-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Excelência & Autoridade Técnica
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Por que escolher a <span className="text-amber-400">4K Inspeção de Gás e Vistoria</span>?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trabalhamos com seriedade máxima para proteger o que mais importa: sua família, seus moradores e seu patrimônio. Conheça os pilares que fazem da 4K a escolha mais segura no Estado do Rio de Janeiro.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink("Olá! Gostaria de entender mais sobre a 4K Inspeção e agendar um horário.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com Nossa Equipe Técnica</span>
              </a>
            </div>
          </div>

          {/* Social Proof Numbers Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif mb-1">+2.500</div>
              <div className="text-sm font-bold text-white mb-1">Vistorias Realizadas</div>
              <p className="text-xs text-slate-400">Em apartamentos, casas, condomínios e restaurantes no RJ.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif mb-1">100%</div>
              <div className="text-sm font-bold text-white mb-1">Conformidade Legal</div>
              <p className="text-xs text-slate-400">Laudos aprovados perante a Naturgy e Corpo de Bombeiros.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-serif mb-1">4.9 / 5.0</div>
              <div className="text-sm font-bold text-white mb-1">Avaliação dos Clientes</div>
              <p className="text-xs text-slate-400">Reconhecimento pela pontualidade, educação e rigor técnico.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-serif mb-1">0</div>
              <div className="text-sm font-bold text-white mb-1">Acidentes em Vistorias</div>
              <p className="text-xs text-slate-400">Compromisso inegociável com a segurança e a vida humana.</p>
            </div>
          </div>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                {getIcon(point.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
