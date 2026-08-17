import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles, Building, Flame, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const QuoteCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState('apartamento');
  const [appliances, setAppliances] = useState<string[]>(['aquecedor', 'fogao']);
  const [city, setCity] = useState('Mesquita');
  const [urgency, setUrgency] = useState('urgente');
  const [clientName, setClientName] = useState('');

  const toggleAppliance = (item: string) => {
    if (appliances.includes(item)) {
      setAppliances(appliances.filter(a => a !== item));
    } else {
      setAppliances([...appliances, item]);
    }
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const typeNames: Record<string, string> = {
      apartamento: 'Apartamento Residencial',
      casa: 'Casa / Sobrado Residencial',
      condominio: 'Condomínio Predial Completo',
      comercio: 'Comércio / Restaurante / Pizzaria'
    };

    const applianceLabels = appliances.map(a => {
      if (a === 'aquecedor') return 'Aquecedor a Gás';
      if (a === 'fogao') return 'Fogão Convencional';
      if (a === 'cooktop') return 'Cooktop Embutido';
      if (a === 'central') return 'Central GLP / Tubulação Predial';
      return a;
    }).join(', ') || 'Não especificado';

    const urgencyLabels: Record<string, string> = {
      normal: 'Rotina / Prevenção',
      urgente: 'Urgente (Notificação / Prazo)',
      emergencia: 'Imediato (Cheiro de gás / Corte iminente)'
    };

    const nameText = clientName.trim() ? `Meu nome é ${clientName.trim()}.\n` : '';
    const message = `Olá, 4K Inspeção! Gostaria de um orçamento personalizado:\n${nameText}- Tipo de Imóvel: ${typeNames[propertyType] || propertyType}\n- Equipamentos a Inspecionar: ${applianceLabels}\n- Município: ${city}\n- Grau de Urgência: ${urgencyLabels[urgency] || urgency}\n\nPor favor, me informe o valor e o horário mais próximo para vistoria!`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-amber-400/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Calculator className="w-3.5 h-3.5" />
              Simulador Interativo
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Calcule sua Vistoria de Gás em <span className="text-amber-400">Segundos</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Selecione as opções do seu imóvel e receba uma proposta técnica sob medida no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleGenerateQuote} className="space-y-6">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                1. Selecione o Tipo do Imóvel:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'apartamento', label: 'Apartamento', icon: Building },
                  { id: 'casa', label: 'Casa', icon: Building },
                  { id: 'condominio', label: 'Condomínio', icon: Building },
                  { id: 'comercio', label: 'Comércio / Restaurante', icon: Flame },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setPropertyType(item.id)}
                    className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      propertyType === item.id
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <item.icon className={`w-5 h-5 ${propertyType === item.id ? 'text-amber-400' : 'text-slate-400'}`} />
                      {propertyType === item.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <span className="text-xs font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Appliances Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                2. Equipamentos a Gás Presentes no Imóvel:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'aquecedor', label: 'Aquecedor a Gás' },
                  { id: 'fogao', label: 'Fogão Tradicional' },
                  { id: 'cooktop', label: 'Cooktop Embutido' },
                  { id: 'central', label: 'Central / Tubulação' },
                ].map((item) => {
                  const isSelected = appliances.includes(item.id);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleAppliance(item.id)}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Location and Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  3. Município no RJ:
                </label>
                <div className="relative">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Mesquita (Sede)">Mesquita (Sede)</option>
                    <option value="Nova Iguaçu">Nova Iguaçu</option>
                    <option value="Nilópolis">Nilópolis</option>
                    <option value="São João de Meriti">São João de Meriti</option>
                    <option value="Belford Roxo">Belford Roxo</option>
                    <option value="Duque de Caxias">Duque de Caxias</option>
                    <option value="Queimados">Queimados</option>
                    <option value="Rio de Janeiro (Capital)">Rio de Janeiro (Capital)</option>
                    <option value="Outro Município RJ">Outro Município do RJ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  4. Grau de Urgência:
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="urgente">⚠️ Urgente (Notificado pela Naturgy / Prazo)</option>
                  <option value="normal">📅 Rotina / Vencimento dos 5 anos</option>
                  <option value="emergencia">🚨 Emergência (Dúvida de Vazamento / Corte)</option>
                </select>
              </div>
            </div>

            {/* Optional Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Seu Nome ou Nome do Condomínio (Opcional):
              </label>
              <input
                type="text"
                placeholder="Ex: Dra. Juliana / Condomínio Residencial Bella Vista"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                id="quote-calculator-submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-base bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 shadow-xl shadow-emerald-950 flex items-center justify-center gap-3 transform active:scale-[0.99] transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950/20" />
                <span>Receber Orçamento e Horários Disponíveis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
