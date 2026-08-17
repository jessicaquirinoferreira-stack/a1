import React from 'react';
import { CITIES_SERVED } from '../data/companyData';
import { MapPin, Navigation, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const CoverageArea: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                Área de Atendimento
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Atendimento Rápido em <span className="text-amber-400">Mesquita</span> e em todo o <span className="text-emerald-400">Rio de Janeiro</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Com base operacional estrategicamente localizada no bairro Juscelino em Mesquita, nossas equipes volantes cobrem prontamente toda a Baixada Fluminense, Capital e Região Metropolitana.
              </p>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Plantão de Agendamentos</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Equipes Próprias e Credenciadas</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de saber a disponibilidade de atendimento para o meu bairro/cidade.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar Meu Bairro no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Cities Pill Grid */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Principais Regiões e Cidades Atendidas:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CITIES_SERVED.map((city, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:border-amber-400/50 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
