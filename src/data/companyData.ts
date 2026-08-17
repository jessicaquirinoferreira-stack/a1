import { ServiceItem, Testimonial, FAQItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "autovistoria-gas",
    title: "Autovistoria de Gás",
    shortDesc: "Inspeção técnica obrigatória para apartamentos, casas e comércios no Estado do RJ com teste de estanqueidade e emissão de laudo oficial com ART/TRT.",
    fullDesc: "Realizamos a autovistoria de gás obrigatória, conforme a Lei Estadual nº 6.890/2014, com profissionais certificados e empresa credenciada pelo Inmetro, proporcionando mais segurança e conformidade às instalações. (Norma: 054 / Inmetro)",
    norms: ["Norma 054", "Lei Estadual nº 6.890/2014"],
    law: "Lei Estadual nº 6.890/2014",
    badge: "Obrigatório por Lei no RJ",
    features: [
      "Teste de estanqueidade com manômetro digital calibrado",
      "Medição de monóxido de carbono (CO) e queima dos queimadores",
      "Inspeção de duto de exaustão e chaminé do aquecedor",
      "Verificação de ventilação permanente e registros de segurança",
      "Emissão de Laudo Técnico e Selo de Conformidade com ART/TRT"
    ],
    whatsappMessage: "Olá! Quero fazer a Autovistoria de Gás obrigatória pela Lei 6.890/2014",
    iconName: "Flame",
    image: "https://i.postimg.cc/4xjTNBGS/Whats-App-Image-2026-08-17-at-13-48-19.jpg",
    imagePosition: "object-[center_15%]"
  },
  {
    id: "autovistoria-predial",
    title: "Autovistoria Predial",
    shortDesc: "Vistoria técnica detalhada para condomínios residenciais, comerciais e edifícios públicos em atendimento à Lei Estadual nº 6.400/13.",
    fullDesc: "Realizamos a autovistoria predial obrigatória, em atendimento à Lei Estadual nº 6.400/13, contribuindo para a identificação de possíveis irregularidades e para a preservação da segurança e integridade da edificação.",
    norms: ["Lei Estadual nº 6.400/13", "Normas ABNT NBR 16747", "Laudo com ART/CREA"],
    law: "Lei Estadual nº 6.400/13",
    badge: "Exigência para Condomínios",
    features: [
      "Inspeção visual e instrumental das fachadas e estruturas",
      "Avaliação de impermeabilizações, telhados e marquises",
      "Vistoria em instalações elétricas, hidrossanitárias e de gás",
      "Prevenção contra desabamentos, trincas e infiltrações graves",
      "Relatório fotográfico com plano de ação e priorização de reformas"
    ],
    whatsappMessage: "Olá! Quero solicitar a Autovistoria Predial (Lei Estadual nº 6.400/13) para meu condomínio/edifício",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "manutencao-predial",
    title: "Manutenção Predial",
    shortDesc: "Soluções completas de manutenção preventiva e corretiva para preservar seu patrimônio, evitar sinistros e valorizar o imóvel.",
    fullDesc: "Oferecemos serviços de manutenção preventiva e corretiva, visando conservar as instalações, reduzir riscos e prolongar a vida útil dos sistemas e estruturas do imóvel.",
    norms: ["ABNT NBR 5674", "Manutenção de Edificações", "Gestão de Riscos"],
    law: "Preservação Patrimonial",
    badge: "Preventiva & Corretiva",
    features: [
      "Adequação e reparo de tubulações de gás e conexões",
      "Ajustes e substituição de flexíveis, registros e chaminés",
      "Manutenção de bombas hidráulicas e quadros técnicos",
      "Impermeabilização de caixas d'água e reservatórios",
      "Planos de manutenção periódica customizados para síndicos"
    ],
    whatsappMessage: "Olá! Gostaria de um orçamento para serviços de Manutenção Predial",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "treinamentos-seguranca",
    title: "Treinamentos e Certificados de Segurança do Trabalho",
    shortDesc: "Capacitação profissional, brigada de incêndio e cursos de Normas Regulamentadoras (NRs) com emissão de certificados válidos.",
    fullDesc: "Realizamos treinamentos voltados à segurança do trabalho e fornecemos os respectivos certificados, auxiliando empresas e profissionais na prevenção de acidentes e no atendimento às exigências aplicáveis.",
    norms: ["NR 10", "NR 20 (Inflamáveis)", "NR 33", "NR 35", "Brigada de Incêndio"],
    law: "Normas Regulamentadoras MTE",
    badge: "Certificados Oficiais",
    features: [
      "NR 20: Segurança com Inflamáveis e Gases Combustíveis",
      "NR 35: Trabalho em Altura com segurança",
      "NR 33: Trabalho em Espaço Confinado",
      "Formação e reciclagem de Brigada de Incêndio Predial",
      "Emissão ágil de certificados homologados para funcionários e equipes"
    ],
    whatsappMessage: "Olá! Gostaria de informações sobre Treinamentos e Certificados de Segurança do Trabalho",
    iconName: "GraduationCap",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Dra. Renata Albuquerque",
    role: "Síndica Profissional (Condomínio Solar de Mesquita)",
    location: "Mesquita / Juscelino - RJ",
    phoneNumber: "+55 21 99841-****",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    time: "11:42",
    replyTime: "11:45",
    text: "Boa tarde, equipe 4K! Passando para agradecer pelo atendimento impecável no Condomínio Solar de Mesquita. O laudo com a ART e o selo de conformidade foram aceitos na Naturgy de primeira, sem nenhuma exigência. Os 48 condôminos elogiaram muito a pontualidade e o respeito dos técnicos. Muito obrigada!",
    mediaCaption: "Laudo_Autovistoria_SolarMesquita_ART.pdf (Aprovado)",
    companyReply: "Boa tarde, Dra. Renata! Nós que agradecemos imensamente a confiança no trabalho da 4K Inspeção de Gás. Conte sempre conosco para manter a segurança do condomínio em dia! 🛡️✨",
    serviceUsed: "Autovistoria de Gás & Predial",
    date: "Julho de 2026"
  },
  {
    id: "test-2",
    name: "Carlos Eduardo Silveira",
    role: "Proprietário da Cantina & Pizzaria Bella Donna",
    location: "Nova Iguaçu / Centro - RJ",
    phoneNumber: "+55 21 98712-****",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    time: "16:20",
    replyTime: "16:23",
    text: "Amigo, vocês salvaram a minha pizzaria hoje! A Naturgy tinha deixado uma notificação de prazo curto e eu já estava desesperado achando que ia ter que fechar o forno no fim de semana. O técnico de vocês veio no mesmo dia, fez o teste digital de estanqueidade, ajustou a válvula e me entregou o laudo no prazo. Nota mil pra 4K!",
    companyReply: "Fala, Carlos! Que excelente notícia! Sabemos da importância de manter a operação do seu restaurante 100% segura e funcionando. Grande abraço de toda a equipe 4K!",
    serviceUsed: "Autovistoria de Gás Comercial",
    date: "Maio de 2026"
  },
  {
    id: "test-3",
    name: "Marcio Vinicius Rocha",
    role: "Proprietário de Imóvel Residencial",
    location: "Nilópolis / Olinda - RJ",
    phoneNumber: "+55 21 97634-****",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    time: "09:15",
    replyTime: "09:18",
    audioDuration: "0:42",
    text: "Bom dia! Gostaria de deixar registrado o excelente trabalho do técnico que veio aqui em Nilópolis. Ele identificou na hora que o duto do aquecedor estava com retorno de monóxido de carbono e resolveu o problema com total clareza. Agora minha família dorme tranquila com a instalação 100% segura.",
    companyReply: "Bom dia, Sr. Marcio! A segurança da sua família é a nossa maior prioridade. Muito obrigado pelo carinho e pela confiança em nossa equipe!",
    serviceUsed: "Inspeção Residencial de Gás",
    date: "Junho de 2026"
  },
  {
    id: "test-4",
    name: "Eng. Patrícia Magalhães",
    role: "Gestora Patrimonial de Galpão Logístico",
    location: "São João de Meriti / Dutra - RJ",
    phoneNumber: "+55 21 99128-****",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    time: "14:08",
    replyTime: "14:12",
    text: "Prezados da 4K, confirmamos o recebimento de todos os certificados de Treinamento de NR 20 e Brigada da equipe operacional do galpão, além do laudo das instalações técnicas. A auditoria aprovou toda a documentação sem ressalvas. Parabéns pelo profissionalismo!",
    mediaCaption: "Certificados_NR20_Brigada_Concluidos.pdf",
    companyReply: "Perfeito, Patrícia! Ficamos muito honrados em atender sua empresa com os mais altos padrões de conformidade técnica. À disposição para as próximas etapas!",
    serviceUsed: "Treinamentos & Vistoria Técnica",
    date: "Abril de 2026"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é a Autovistoria de Gás (Lei Estadual nº 6.890/2014) e quem é obrigado a fazer?",
    answer: "A Autovistoria de Gás é uma inspeção técnica periódica e obrigatória por lei no Estado do Rio de Janeiro para todos os imóveis residenciais (casas e apartamentos) e comerciais que possuem instalações de gás natural (canalizado) ou GLP (botijão). A inspeção deve ser feita por empresa credenciada pelo Inmetro, como a 4K Inspeção de Gás.",
    category: "gas"
  },
  {
    id: "faq-2",
    question: "Com que frequência a inspeção de gás deve ser renovada no RJ?",
    answer: "De acordo com a Lei Estadual nº 6.890/2014, a autovistoria de gás deve ser realizada a cada 5 (cinco) anos. Ao final de cada inspeção aprovada, é emitido um Laudo Técnico com ART/TRT e um Selo Oficial de Conformidade afixado no local com a data de validade.",
    category: "gas"
  },
  {
    id: "faq-3",
    question: "O que acontece se eu NÃO fizer a autovistoria obrigatória?",
    answer: "O não cumprimento da lei acarreta graves consequências: interrupção (corte) do fornecimento de gás pela distribuidora (Naturgy), aplicação de multas pesadas por órgãos fiscalizadores, perda de cobertura do seguro do condomínio ou residencial em caso de sinistro, e principalmente risco à vida por vazamentos de gás e intoxicação silenciosa por Monóxido de Carbono (CO).",
    category: "lei"
  },
  {
    id: "faq-4",
    question: "O laudo emitido pela 4K Inspeção de Gás é aceito pela Naturgy e Bombeiros?",
    answer: "Sim, 100%! A 4K Inspeção de Gás e Vistoria atua em estrita conformidade com as normas NBR 15526 e NBR 13103, credenciada pelo Inmetro e com responsáveis técnicos registrados no CREA/CFT. Todos os nossos laudos acompanham Anotação de Responsabilidade Técnica (ART/TRT), tendo validade jurídica plena perante concessionárias, prefeituras e Corpo de Bombeiros.",
    category: "geral"
  },
  {
    id: "faq-5",
    question: "O que o técnico da 4K verifica durante a inspeção de gás?",
    answer: "Nossa equipe realiza uma bateria completa de testes: 1) Teste de estanqueidade nas tubulações para detectar microvazamentos; 2) Verificação do estado de mangueiras flexíveis, registros e válvulas; 3) Medição de queima dos queimadores e presença de Monóxido de Carbono; 4) Inspeção do duto de exaustão, chaminé e ventilação permanente do ambiente onde fica o aquecedor a gás.",
    category: "gas"
  },
  {
    id: "faq-6",
    question: "Qual é a área de atendimento da 4K Inspeção de Gás e Vistoria?",
    answer: "Nossa sede fica em Mesquita/RJ, e atendemos com rapidez e equipe própria todos os municípios da Baixada Fluminense (Nova Iguaçu, Nilópolis, São João de Meriti, Belford Roxo, Duque de Caxias, Queimados, Magé), além da Capital do Rio de Janeiro (Zona Norte, Zona Oeste, Centro, Zona Sul), Niterói, São Gonçalo e Região Metropolitana.",
    category: "geral"
  }
];

export const CITIES_SERVED = [
  "Mesquita (Sede)",
  "Nova Iguaçu",
  "Nilópolis",
  "São João de Meriti",
  "Belford Roxo",
  "Duque de Caxias",
  "Queimados",
  "Rio de Janeiro (Capital)",
  "Niterói & Região Metropolitana"
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "100% em Conformidade com a Lei",
    desc: "Atendimento estrito às Leis Estaduais nº 6.890/2014 e nº 6.400, garantindo sua tranquilidade jurídica e física.",
    icon: "ShieldCheck"
  },
  {
    title: "Profissionais Certificados & Inmetro",
    desc: "Equipe técnica de engenheiros e técnicos habilitados pelo CREA/CFT e credenciamento pelos padrões Inmetro.",
    icon: "Award"
  },
  {
    title: "Atendimento Ágil em Mesquita e RJ",
    desc: "Equipes volantes para agendamento rápido, vistorias de emergência e cumprimento de prazos notificados pela Naturgy.",
    icon: "Zap"
  },
  {
    title: "Laudos com ART/TRT Válidos",
    desc: "Emissão de laudo técnico oficial assinado digitalmente, com selo de identificação aceito por todos os órgãos.",
    icon: "FileCheck"
  },
  {
    title: "Preço Justo & Sem Surpresas",
    desc: "Orçamento claro, transparente e facilidade de pagamento para condomínios, famílias e empresas comerciais.",
    icon: "BadgePercent"
  },
  {
    title: "Equipamentos de Alta Precisão",
    desc: "Manômetros digitais e detectores de gás calibrados para precisão absoluta na verificação de vazamentos.",
    icon: "Gauge"
  }
];
