export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  norms: string[];
  law: string;
  badge: string;
  features: string[];
  whatsappMessage: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  serviceUsed: string;
  date: string;
  avatar?: string;
  phoneNumber?: string;
  time?: string;
  replyTime?: string;
  audioDuration?: string;
  mediaImage?: string;
  mediaCaption?: string;
  companyReply?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'gas' | 'predial' | 'lei' | 'geral';
}

export interface QuoteSimulation {
  propertyType: string;
  appliances: string[];
  city: string;
  urgency: string;
  name?: string;
  phone?: string;
}
