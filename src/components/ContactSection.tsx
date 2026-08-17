import React, { useState } from 'react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';
import { Phone, Mail, MapPin, MessageSquare, Clock, Building, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyType, setPropertyType] = useState('Residencial');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá! Meu nome é ${name || 'Cliente'}.\nTelefone: ${phone || 'Não informado'}\nTipo de Imóvel: ${propertyType}\nMensagem: ${message || 'Gostaria de agendar uma inspeção de gás.'}`;
    window.open(getWhatsAppLink(formattedMsg), '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Column (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              Canais de Atendimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fale com a <span className="text-amber-400">4K Inspeção</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Estamos à disposição para agendamentos, orçamentos para condomínios, consultorias técnicas e dúvidas sobre a legislação de autovistoria de gás no RJ.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">WhatsApp Oficial</div>
                  <a
                    href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {OFFICIAL_COMPANY_DATA.whatsappFormatted}
                  </a>
                  <p className="text-[11px] text-slate-400">Atendimento e agendamento em tempo real</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Telefone Fixo</div>
                  <a
                    href={`tel:${OFFICIAL_COMPANY_DATA.phoneClean}`}
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {OFFICIAL_COMPANY_DATA.phone}
                  </a>
                  <p className="text-[11px] text-slate-400">Atendimento comercial e corporativo</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">E-mail</div>
                  <a
                    href={`mailto:${OFFICIAL_COMPANY_DATA.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors break-all"
                  >
                    {OFFICIAL_COMPANY_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Endereço Completo</div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {OFFICIAL_COMPANY_DATA.fullAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Envie uma Mensagem Direta
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Preencha os dados abaixo e conecte-se imediatamente com nossa equipe técnica pelo WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome ou condomínio"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      WhatsApp ou Telefone:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(21) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tipo de Imóvel:
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Apartamento Residencial">Apartamento Residencial</option>
                      <option value="Casa Residencial">Casa Residencial</option>
                      <option value="Condomínio (Síndico)">Condomínio (Síndico)</option>
                      <option value="Comércio / Restaurante">Comércio / Restaurante</option>
                      <option value="Indústria / Galpão">Indústria / Galpão</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Como podemos te ajudar? (Opcional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva detalhes como urgência, se já recebeu notificação da Naturgy ou equipamentos instalados..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transform active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Abrir no WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
