export const OFFICIAL_COMPANY_DATA = {
  name: "4K Inspeção de Gás e Vistoria",
  segment: "Inspeção de instalações de gás, vistoria e serviços técnicos prediais",
  foundationYear: 2023,
  cnpj: "57.778.081/0001-72",
  city: "Mesquita – Rio de Janeiro",
  fullAddress: "Rua Coronel Bernardino de Melo, 15 – Sala 202 – Juscelino – Mesquita – RJ – CEP: 26557-710",
  phone: "(21) 3765-9734",
  phoneClean: "2137659734",
  whatsappNumber: "21995974572",
  whatsappFormatted: "(21) 99597-4572",
  email: "4k.inspecaopredial@gmail.com",
  logoUrl: "https://i.postimg.cc/B6C3Vm4t/Whats-App-Image-2026-08-17-at-11-05-00.jpg",
  mainWhatsappLink: "https://wa.me/5521995974572?text=Ol%C3%A1!%20Quero%20agendar%20uma%20inspe%C3%A7%C3%A3o%20de%20g%C3%A1s",
};

export function getWhatsAppLink(message: string = "Olá! Gostaria de agendar uma inspeção"): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/55${OFFICIAL_COMPANY_DATA.whatsappNumber}?text=${encoded}`;
}
