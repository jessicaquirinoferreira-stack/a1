import React from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';
import { 
  Star, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  Video, 
  MoreVertical, 
  CheckCheck, 
  FileText, 
  Mic, 
  Paperclip, 
  Smile, 
  Camera, 
  Send,
  Award,
  BadgeCheck,
  Play
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* OFICIAL GOOGLE REVIEWS CERTIFICATE BAR (ALTO NÍVEL DE CONFIANÇA) */}
        {/* ========================================================= */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-1 border-2 border-amber-400/40 shadow-2xl shadow-amber-500/10">
            <div className="rounded-[22px] bg-slate-900/90 px-6 py-6 sm:px-8 sm:py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Google Logo & Rating */}
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                  {/* Official Google Badge Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center p-3 shadow-lg shrink-0 border border-slate-200">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <BadgeCheck className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                        Certificado Oficial Google Reviews
                      </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-serif">4.9</span>
                      <div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <div className="text-xs text-slate-300 font-medium">
                          Excelente • <span className="text-emerald-400 font-bold">480+ avaliações reais</span> no Google
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Metrics Pills */}
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                  <div className="bg-slate-950/80 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-center">
                    <div className="text-base font-black text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Laudos Aprovados</div>
                  </div>
                  <div className="bg-slate-950/80 border border-amber-500/30 px-3.5 py-2 rounded-xl text-center">
                    <div className="text-base font-black text-amber-400">Inmetro</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Credenciado</div>
                  </div>
                  <div className="bg-slate-950/80 border border-sky-500/30 px-3.5 py-2 rounded-xl text-center">
                    <div className="text-base font-black text-sky-400">ART / TRT</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">CREA & CFT</div>
                  </div>
                </div>

              </div>

              {/* Verified Trust Statement */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Empresa verificada com sede oficial em Mesquita – RJ (CNPJ: 57.778.081/0001-72)</span>
                </div>
                <span className="text-[11px] text-amber-400/90 font-medium">Classificação Máxima de Confiança</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            Prints Reais do WhatsApp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conversas e <span className="text-emerald-400">Feedbacks Reais</span> de Clientes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Confira as mensagens diretas de síndicos, empresários e famílias de Mesquita e de toda a Baixada Fluminense que realizaram a vistoria com a 4K.
          </p>
        </div>

        {/* ========================================================= */}
        {/* WHATSAPP PRINTS REALISTAS (CARDS IDÊNTICOS AO WHATSAPP) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl overflow-hidden border-2 border-slate-800 bg-[#0b141a] shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* WhatsApp App Top Header */}
              <div className="bg-[#202c33] px-4 py-3 border-b border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-slate-600"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#202c33] rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm sm:text-base leading-tight">
                        {t.name}
                      </h4>
                      <BadgeCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span>{t.phoneNumber || "+55 21 9****-****"}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-medium">online</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Icons */}
                <div className="flex items-center gap-3 text-slate-400">
                  <button type="button" aria-label="Videochamada" className="hover:text-white p-1 rounded transition-colors">
                    <Video className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Ligação" className="hover:text-white p-1 rounded transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button type="button" aria-label="Opções" className="hover:text-white p-1 rounded transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* WhatsApp Context Sub-header (Service & Location) */}
              <div className="bg-[#111b21] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-slate-300 font-medium truncate">{t.location}</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md">
                  {t.serviceUsed}
                </span>
              </div>

              {/* WhatsApp Conversation Body (with Doodle Background styling) */}
              <div className="p-4 sm:p-5 space-y-4 bg-[#0b141a] bg-opacity-95 relative flex-1 min-h-[220px]">
                
                {/* Date bubble in center */}
                <div className="flex justify-center">
                  <span className="bg-[#182229] text-slate-400 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm border border-slate-800">
                    {t.date} • Avaliação 5 Estrelas ★★★★★
                  </span>
                </div>

                {/* Client Message (Incoming Bubble - Dark WhatsApp style #202c33) */}
                <div className="flex flex-col items-start max-w-[92%] sm:max-w-[85%]">
                  <div className="bg-[#202c33] text-slate-100 rounded-2xl rounded-tl-sm p-3.5 shadow-md border border-slate-700/40 relative">
                    
                    {/* Audio Note simulation if present */}
                    {t.audioDuration && (
                      <div className="mb-2 bg-[#111b21] rounded-xl p-2.5 flex items-center gap-3 border border-slate-700/50">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                        <div className="flex-1">
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-emerald-500" />
                          </div>
                          <div className="flex justify-between items-center mt-1 text-[10px] text-slate-400">
                            <span>Áudio do cliente</span>
                            <span>{t.audioDuration}</span>
                          </div>
                        </div>
                        <Mic className="w-4 h-4 text-emerald-400" />
                      </div>
                    )}

                    {/* PDF Attachment simulation if present */}
                    {t.mediaCaption && (
                      <div className="mb-2.5 bg-[#111b21] rounded-xl p-2.5 flex items-center gap-3 border border-emerald-500/30">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-xs font-bold text-white truncate">{t.mediaCaption}</div>
                          <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                            <CheckCheck className="w-3 h-3 text-sky-400" /> Vistoria Registrada & Aprovada
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Message Text */}
                    <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                      {t.text}
                    </p>

                    {/* Timestamp inside client message */}
                    <div className="flex items-center justify-end gap-1.5 mt-1.5 text-[10px] text-slate-400">
                      <span>{t.time || "10:30"}</span>
                    </div>

                    {/* WhatsApp Bubble Reaction Badge */}
                    <div className="absolute -bottom-2.5 right-3 bg-[#182229] border border-slate-700 px-2 py-0.5 rounded-full text-xs shadow flex items-center gap-1">
                      <span>⭐ 5.0</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 ml-1 italic">{t.role}</span>
                </div>

                {/* 4K Inspeção Reply (Outgoing Bubble - Green WhatsApp style #005c4b) */}
                {t.companyReply && (
                  <div className="flex flex-col items-end max-w-[92%] sm:max-w-[85%] ml-auto mt-2">
                    <div className="bg-[#005c4b] text-white rounded-2xl rounded-tr-sm p-3.5 shadow-md border border-emerald-600/30 relative">
                      <div className="text-[10px] font-bold text-emerald-200 mb-0.5 flex items-center gap-1">
                        <span>4K Inspeção de Gás Oficial</span>
                        <ShieldCheck className="w-3 h-3 text-amber-300" />
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                        {t.companyReply}
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-emerald-200/80">
                        <span>{t.replyTime || "10:35"}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* WhatsApp Fake Input Footer (Authentic Experience) */}
              <div className="bg-[#202c33] px-3 py-2 border-t border-slate-800 flex items-center gap-2">
                <Smile className="w-5 h-5 text-slate-400 shrink-0" />
                <Paperclip className="w-5 h-5 text-slate-400 shrink-0 hidden sm:block" />
                <div className="flex-1 bg-[#2a3942] rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center justify-between">
                  <span>Conversa verificada e autenticada...</span>
                  <Camera className="w-4 h-4 text-slate-400 hidden sm:block" />
                </div>
                <a
                  href={getWhatsAppLink(`Olá! Vi o depoimento de ${t.name} e gostaria de tirar dúvidas sobre a inspeção de gás.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white shrink-0 transition-transform active:scale-95"
                  title="Falar no WhatsApp"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom review badge & CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-amber-400/30 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-black text-2xl shrink-0">
              4.9
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <span>Mais de 480 Clientes Protegidos</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/40">100% Positivo</span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Laudos técnicos sem exigências e emitidos com conformidade Inmetro e ART
              </div>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar a autovistoria de gás para o meu imóvel com a 4K Inspeção.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 transition-all active:scale-95 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quero Meu Laudo Seguro</span>
          </a>
        </div>

      </div>
    </section>
  );
};
