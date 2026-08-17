import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { OFFICIAL_COMPANY_DATA } from '../utils/whatsapp';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl text-slate-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : (
              <FileText className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="text-lg font-bold text-white">
              {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso e Responsabilidade Técnica'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>{OFFICIAL_COMPANY_DATA.name}</strong> (CNPJ: {OFFICIAL_COMPANY_DATA.cnpj}), com sede na {OFFICIAL_COMPANY_DATA.fullAddress}, valoriza e respeita a privacidade de seus clientes e usuários.
              </p>
              <h4 className="font-bold text-white text-sm">1. Coleta e Uso de Informações</h4>
              <p>
                As informações fornecidas voluntariamente em nossos canais (como nome, telefone e endereço para agendamento de vistoria técnica) são utilizadas exclusivamente para fins de atendimento, elaboração de orçamentos e emissão de laudos técnicos periciais.
              </p>
              <h4 className="font-bold text-white text-sm">2. Proteção de Dados (LGPD)</h4>
              <p>
                Não compartilhamos, vendemos ou alugamos seus dados para terceiros não autorizados. Os dados técnicos de vistorias são arquivados conforme exigência legal das normas ABNT e órgãos fiscalizadores (CREA/CFT, Inmetro e Concessionária Naturgy).
              </p>
              <h4 className="font-bold text-white text-sm">3. Contato do Encarregado</h4>
              <p>
                Para quaisquer solicitações referentes aos seus dados, entre em contato através do e-mail oficial: {OFFICIAL_COMPANY_DATA.email}.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao site oficial da <strong>{OFFICIAL_COMPANY_DATA.name}</strong>.
              </p>
              <h4 className="font-bold text-white text-sm">1. Natureza dos Serviços</h4>
              <p>
                A 4K atua na prestação de serviços de autovistoria de gás (Lei Estadual nº 6.890/2014), autovistoria predial (Lei Estadual nº 6.400), manutenção predial e treinamentos de segurança do trabalho.
              </p>
              <h4 className="font-bold text-white text-sm">2. Laudos e Responsabilidade Técnica</h4>
              <p>
                Todos os laudos emitidos contam com profissional habilitado e Anotação de Responsabilidade Técnica (ART/TRT). A validade do laudo e a emissão do selo de conformidade estão condicionadas à aprovação técnica das instalações e ao cumprimento das normas NBR 15526 e NBR 13103.
              </p>
              <h4 className="font-bold text-white text-sm">3. Propriedade Intelectual</h4>
              <p>
                Todo o conteúdo, marcas, layout e textos deste site pertencem à 4K Inspeção de Gás e Vistoria. Proibida a reprodução sem prévia autorização.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
