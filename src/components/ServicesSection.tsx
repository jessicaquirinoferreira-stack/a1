import React from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { getWhatsAppLink } from '../utils/whatsapp';
import { Flame, Building2, Wrench, GraduationCap, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-7 h-7 text-amber-500" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-sky-500" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-emerald-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-indigo-500" />;
      default:
        return <Flame className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Nossos Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções Técnicas com Rigor, Segurança e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Conformidade Legal
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Atuamos em estrita conformidade com as normas técnicas brasileiras da ABNT, legislação do Estado do Rio de Janeiro e credenciamento do Inmetro.
          </p>
        </div>

        {/* 4 Large Persuasive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-950/90 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image & Badge Header */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-amber-300 border border-amber-400/40 backdrop-blur-sm shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Norms Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                  {service.norms.map((norm, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold bg-slate-950/80 text-slate-200 px-2 py-0.5 rounded border border-slate-700/80 backdrop-blur-xs"
                    >
                      {norm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Official Exact Service Description */}
                  <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                    {service.fullDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluído no serviço:
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button per Service */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    id={`btn-service-${service.id}`}
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950 transition-all group/btn"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Quero esse serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
