import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UrgencyAlert } from './components/UrgencyAlert';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InspectionProcess } from './components/InspectionProcess';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { CoverageArea } from './components/CoverageArea';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenLegalModal = (type: 'privacy' | 'terms') => {
    setLegalModalType(type);
  };

  const handleCloseLegalModal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (Extreme Sales Conversion) */}
        <Hero />

        {/* 2. Urgency & Regulatory Warning Alert */}
        <UrgencyAlert />

        {/* 3. Core Services with Inmetro & Norms */}
        <ServicesSection />

        {/* 4. Why Choose 4K (Differentiators & Proof) */}
        <WhyChooseUs />

        {/* 5. How Inspection Works (4 Steps) */}
        <InspectionProcess />

        {/* 6. Interactive Quote & Urgency Calculator */}
        <QuoteCalculator />

        {/* 7. Institutional Story & About Us */}
        <AboutSection />

        {/* 8. Real Client Testimonials */}
        <Testimonials />

        {/* 9. Interactive FAQ on Gas Laws in RJ */}
        <FAQSection />

        {/* 10. Coverage in Mesquita & Rio de Janeiro */}
        <CoverageArea />

        {/* 11. Final High-Impact Urgency CTA */}
        <FinalCTA />

        {/* 12. Direct Contact Form and Details */}
        <ContactSection />
      </main>

      {/* Footer with Complete Legal Data */}
      <Footer onOpenModal={handleOpenLegalModal} />

      {/* Floating WhatsApp Action & Mobile Action Bar */}
      <FloatingWhatsApp />

      {/* Legal Information Modals */}
      <LegalModals
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
}
