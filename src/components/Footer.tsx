import React from 'react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowUp, Flame } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_COMPANY_DATA.logoUrl}
                alt="4K Inspeção de Gás e Vistoria"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain rounded-lg bg-slate-900 p-1 border border-amber-400/40"
              />
              <div>
                <div className="text-base font-bold text-white font-serif">{OFFICIAL_COMPANY_DATA.name}</div>
                <div className="text-[11px] text-amber-400 font-semibold">Credenciada Inmetro • NBR 15526 / 13103</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empresa especializada em Autovistoria de Gás (Lei 6.890/2014), Autovistoria Predial (Lei 6.400), manutenção técnica e treinamentos de segurança no Estado do Rio de Janeiro.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                CNPJ: {OFFICIAL_COMPANY_DATA.cnpj}
              </span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-amber-400 transition-colors">Por que a 4K?</a></li>
              <li><a href="#processo" className="hover:text-amber-400 transition-colors">Como Funciona</a></li>
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Dúvidas (FAQ)</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Serviços Oficiais</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors block">
                  Autovistoria de Gás (Lei 6.890/14)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors block">
                  Autovistoria Predial (Lei 6.400)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors block">
                  Manutenção Predial Preventiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors block">
                  Treinamentos & Certificados de Segurança
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors block">
                  Teste de Estanqueidade com ART
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Dados de Contato</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="leading-snug">{OFFICIAL_COMPANY_DATA.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${OFFICIAL_COMPANY_DATA.phoneClean}`} className="hover:text-white transition-colors font-medium">
                  {OFFICIAL_COMPANY_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-300 font-bold transition-colors"
                >
                  WhatsApp: {OFFICIAL_COMPANY_DATA.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_COMPANY_DATA.email}`} className="hover:text-white transition-colors break-all">
                  {OFFICIAL_COMPANY_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-800 transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2023-2026 {OFFICIAL_COMPANY_DATA.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
