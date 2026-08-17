import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, ArrowRight, MessageSquare, PhoneCall, CheckCircle, Flame, Clock, Award, Building, Sparkles } from 'lucide-react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const [propertyType, setPropertyType] = useState('apartamento');
  const [gasAppliance, setGasAppliance] = useState('aquecedor_fogao');
  const [selectedCity, setSelectedCity] = useState('Mesquita');

  const handleHeroSimulatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      propertyType === 'apartamento' ? 'Apartamento' :
      propertyType === 'casa' ? 'Casa Residencial' :
      propertyType === 'condominio' ? 'Condomínio Predial' : 'Comércio / Restaurante';

    const applianceLabel =
      gasAppliance === 'aquecedor_fogao' ? 'Aquecedor a gás + Fogão/Cooktop' :
      gasAppliance === 'apenas_aquecedor' ? 'Apenas Aquecedor a gás' :
      gasAppliance === 'apenas_fogao' ? 'Apenas Fogão/Cooktop' : 'Central de Gás / Cozinha Industrial';

    const msg = `Olá, 4K Inspeção! Gostaria de um orçamento rápido para:\n- Tipo de Imóvel: ${typeLabel}\n- Equipamentos: ${applianceLabel}\n- Município: ${selectedCity}\nPor favor, quais são os horários disponíveis para vistoria?`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 text-white overflow-hidden">
      {/* High Quality Gas Inspection Background with Deep Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80"
          alt="Técnico especialista em inspeção e teste de estanqueidade de gás"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.28] contrast-125"
        />
        {/* Layered Modern Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-radial-at-t from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Urgency Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs md:text-sm font-semibold mb-6 animate-pulse shadow-lg">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span>Lei Estadual nº 6.890/2014 & Lei nº 6.400 • Vistoria Obrigatória a cada 5 anos</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold text-white leading-[1.15] tracking-tight">
              Sua instalação de gás está segura?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                A inspeção obrigatória é lei!
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              Evite multas, corte de gás e riscos de acidente. Empresa especializada em{' '}
              <strong className="text-white font-semibold">Autovistoria de Gás</strong> e{' '}
              <strong className="text-white font-semibold">Vistoria Predial</strong> em Mesquita e toda região do RJ.
            </p>

            {/* Dual CTAs (Extreme Sales Conversion) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                id="hero-primary-cta"
                href="https://wa.me/5521995974572?text=Ol%C3%A1!%20Quero%20agendar%20uma%20inspe%C3%A7%C3%A3o%20de%20g%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base md:text-lg font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950/20" />
                <span>Agendar Inspeção Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-secondary-cta"
                href="https://wa.me/5521995974572?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%204K%20sobre%20minha%20instala%C3%A7%C3%A3o%20de%20g%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base md:text-lg font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                <span>Falar com Especialista</span>
              </a>
            </div>

            {/* Official Credibility Badge */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credenciada pelo Inmetro</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Award className="w-4 h-4" />
                  <span>Normas NBR 15526 e NBR 13103</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Desde 2023 em Mesquita/RJ</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-serif">+850</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Vistorias Realizadas</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-serif">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Laudos Aceitos</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold text-sky-400 font-serif">ART/TRT</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Responsabilidade Técnica</div>
              </div>
            </div>
          </div>

          {/* Quick Quote / Fast Scheduler Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-7 border border-amber-400/30 shadow-2xl shadow-black/80">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Agendamento Prioritário
              </div>

              <div className="space-y-1 mb-5">
                <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Simule sua Inspeção de Gás
                </h3>
                <p className="text-xs text-slate-400">
                  Receba o valor estimado e disponibilidade de horário no WhatsApp em menos de 2 minutos.
                </p>
              </div>

              <form onSubmit={handleHeroSimulatorSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tipo do Imóvel:
                  </label>
                  <select
                    id="hero-property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="apartamento">Apartamento Residencial</option>
                    <option value="casa">Casa / Sobrado</option>
                    <option value="condominio">Condomínio Inteiro (Síndico)</option>
                    <option value="comercio">Comércio / Restaurante / Pizzaria</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Instalações e Equipamentos a Gás:
                  </label>
                  <select
                    id="hero-gas-appliance"
                    value={gasAppliance}
                    onChange={(e) => setGasAppliance(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="aquecedor_fogao">Aquecedor a Gás + Fogão / Cooktop</option>
                    <option value="apenas_aquecedor">Apenas Aquecedor a Gás</option>
                    <option value="apenas_fogao">Apenas Fogão ou Cooktop</option>
                    <option value="central_gas">Central de Gás / Cozinha Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Município no RJ:
                  </label>
                  <select
                    id="hero-city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Mesquita">Mesquita (Sede)</option>
                    <option value="Nova Iguaçu">Nova Iguaçu</option>
                    <option value="Nilópolis">Nilópolis</option>
                    <option value="São João de Meriti">São João de Meriti</option>
                    <option value="Belford Roxo">Belford Roxo</option>
                    <option value="Duque de Caxias">Duque de Caxias</option>
                    <option value="Queimados">Queimados</option>
                    <option value="Rio de Janeiro - Capital">Rio de Janeiro (Capital)</option>
                    <option value="Outro Município RJ">Outro Município do RJ</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="hero-simulator-submit-btn"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Consultar Valor & Horários no WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Resposta em 2 min
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Sem compromisso
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
