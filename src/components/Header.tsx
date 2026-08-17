import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Shield, Menu, X, MessageSquare, Flame, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_COMPANY_DATA, getWhatsAppLink } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Por que a 4K?', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas (FAQ)', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Bar - Credibility & Direct Contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-slate-300">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Credenciada Inmetro • NBR 15526 & 13103
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Mesquita, Baixada & Todo o Estado do RJ
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${OFFICIAL_COMPANY_DATA.phoneClean}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">{OFFICIAL_COMPANY_DATA.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${OFFICIAL_COMPANY_DATA.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{OFFICIAL_COMPANY_DATA.email}</span>
            </a>
            <span className="hidden lg:inline-block text-slate-600">|</span>
            <span className="text-slate-400">CNPJ: {OFFICIAL_COMPANY_DATA.cnpj}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl py-2.5 border-b border-slate-800/80'
            : 'bg-slate-950/85 backdrop-blur-sm py-3.5 border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            id="header-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative overflow-hidden rounded-xl border border-amber-400/30 bg-slate-900 p-1 shadow-md group-hover:border-amber-400/70 transition-all">
              <img
                src={OFFICIAL_COMPANY_DATA.logoUrl}
                alt="4K Inspeção de Gás e Vistoria"
                referrerPolicy="no-referrer"
                className="h-11 md:h-12 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg md:text-xl font-bold tracking-tight text-white font-serif">
                  4K <span className="text-amber-400 font-sans">INSPEÇÃO</span>
                </span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide">
                Gás & Vistoria Predial RJ
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/60 transform hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-emerald-100 fill-emerald-100/20" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={OFFICIAL_COMPANY_DATA.mainWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Agendar pelo WhatsApp</span>
              </a>
              <a
                href={`tel:${OFFICIAL_COMPANY_DATA.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Ligar: {OFFICIAL_COMPANY_DATA.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
