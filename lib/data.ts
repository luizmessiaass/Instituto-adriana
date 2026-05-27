import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Heart,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Course = {
  title: string;
  subtitle?: string;
  modules: number;
  progress?: number;
  cover: string;
  description?: string;
  badge?: string;
  category: string;
  duration: string;
  level: string;
  nextLesson: string;
  instructor: string;
  lessons: {
    title: string;
    duration: string;
    status: "done" | "current" | "locked";
  }[];
};

export type CertificateRecord = {
  id: string;
  course: string;
  issuedAt: string;
  workload: string;
  validationCode: string;
};

export type MessageThread = {
  id: string;
  subject: string;
  status: "Aberto" | "Respondido" | "Resolvido";
  lastUpdate: string;
  preview: string;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Meus Cursos", href: "/meus-cursos", icon: BookOpen },
  { label: "Certificados", href: "/certificados", icon: Award },
  { label: "Meus Pedidos", href: "/pedidos", icon: BriefcaseBusiness },
  { label: "Favoritos", href: "/favoritos", icon: Heart },
  { label: "Mensagens", href: "/mensagens", icon: MessageSquare },
  { label: "Perfil", href: "/perfil", icon: User },
  { label: "Configurações", href: "/configuracoes", icon: Settings },
  { label: "Sair", href: "/", icon: LogOut }
];

export const courses: Course[] = [
  {
    title: "Anatomia ITC",
    subtitle: "Módulo 2 - Preenchedores faciais",
    modules: 9,
    progress: 62,
    cover: "/assets/covers/cover-1.png",
    category: "HOF clínica",
    duration: "10h",
    level: "Intermediário",
    nextLesson: "Camadas anatômicas e zonas de risco",
    instructor: "Dra. Adriana Vinhal",
    description:
      "Formação completa com 9 módulos sobre anatomia e aplicação estética com segurança e excelência.",
    badge: "RECONHECIDA PELO MEC",
    lessons: [
      { title: "Boas-vindas e método ITC", duration: "12 min", status: "done" },
      { title: "Fundamentos de anatomia facial", duration: "28 min", status: "done" },
      { title: "Camadas anatômicas e zonas de risco", duration: "45 min", status: "current" },
      { title: "Planejamento clínico seguro", duration: "36 min", status: "locked" }
    ]
  },
  {
    title: "Toxina botulínica",
    subtitle: "Módulo 1 - Fundamentos",
    modules: 8,
    progress: 48,
    cover: "/assets/covers/cover-2.png",
    category: "HOF clínica",
    duration: "8h",
    level: "Essencial",
    nextLesson: "Mapeamento muscular para toxina",
    instructor: "Dra. Adriana Vinhal",
    lessons: [
      { title: "Fundamentos e indicações", duration: "18 min", status: "done" },
      { title: "Mapeamento muscular para toxina", duration: "32 min", status: "current" },
      { title: "Protocolos por região", duration: "41 min", status: "locked" }
    ]
  },
  {
    title: "Preenchedores faciais",
    subtitle: "Módulo 2 - Técnicas",
    modules: 9,
    progress: 37,
    cover: "/assets/covers/cover-3.png",
    category: "HOF clínica",
    duration: "9h",
    level: "Avançado",
    nextLesson: "Escolha de produto por plano anatômico",
    instructor: "Dra. Adriana Vinhal",
    lessons: [
      { title: "Avaliação facial integrada", duration: "24 min", status: "done" },
      { title: "Escolha de produto por plano anatômico", duration: "39 min", status: "current" },
      { title: "Técnicas de aplicação avançadas", duration: "52 min", status: "locked" }
    ]
  },
  {
    title: "Bioestimuladores de colágeno",
    modules: 7,
    progress: 30,
    cover: "/assets/covers/cover-4.png",
    category: "HOF clínica",
    duration: "7h",
    level: "Intermediário",
    nextLesson: "Indicações por perfil de paciente",
    instructor: "Dra. Adriana Vinhal",
    lessons: [
      { title: "Bioestimulação e envelhecimento", duration: "22 min", status: "done" },
      { title: "Indicações por perfil de paciente", duration: "34 min", status: "current" },
      { title: "Protocolos combinados", duration: "38 min", status: "locked" }
    ]
  },
  {
    title: "Fios",
    subtitle: "Módulo 1 - Introdução",
    modules: 4,
    progress: 22,
    cover: "/assets/covers/cover-5.png",
    category: "HOF clínica",
    duration: "4h",
    level: "Essencial",
    nextLesson: "Vetores de sustentação",
    instructor: "Dra. Adriana Vinhal",
    lessons: [
      { title: "Introdução aos fios", duration: "16 min", status: "done" },
      { title: "Vetores de sustentação", duration: "29 min", status: "current" },
      { title: "Cuidados pós-procedimento", duration: "21 min", status: "locked" }
    ]
  },
  {
    title: "Visagismo na HOF",
    modules: 5,
    cover: "/assets/covers/cover-6.png",
    category: "HOF clínica",
    duration: "5h",
    level: "Intermediário",
    nextLesson: "Leitura estética e proporção",
    instructor: "Dra. Adriana Vinhal",
    lessons: [
      { title: "Princípios do visagismo", duration: "20 min", status: "current" },
      { title: "Leitura estética e proporção", duration: "31 min", status: "locked" },
      { title: "Plano de tratamento personalizado", duration: "27 min", status: "locked" }
    ]
  },
  {
    title: "Gestão empresarial",
    modules: 6,
    cover: "/assets/covers/cover-7.png",
    category: "Gestão",
    duration: "6h",
    level: "Gestão",
    nextLesson: "Indicadores de clínica premium",
    instructor: "Equipe Instituto Adriana Vinhal",
    lessons: [
      { title: "Modelo de operação premium", duration: "25 min", status: "current" },
      { title: "Indicadores de clínica premium", duration: "33 min", status: "locked" },
      { title: "Rotina financeira e agenda", duration: "35 min", status: "locked" }
    ]
  },
  {
    title: "Marketing comercial",
    modules: 7,
    cover: "/assets/covers/cover-8.png",
    category: "Comercial",
    duration: "7h",
    level: "Estratégico",
    nextLesson: "Posicionamento e oferta",
    instructor: "Equipe Instituto Adriana Vinhal",
    lessons: [
      { title: "Comunicação para autoridade", duration: "21 min", status: "current" },
      { title: "Posicionamento e oferta", duration: "36 min", status: "locked" },
      { title: "Calendário comercial", duration: "28 min", status: "locked" }
    ]
  },
  {
    title: "Assessoria contábil",
    modules: 8,
    cover: "/assets/covers/cover-9.png",
    category: "Gestão",
    duration: "8h",
    level: "Gestão",
    nextLesson: "Tributação e previsibilidade",
    instructor: "Equipe Instituto Adriana Vinhal",
    lessons: [
      { title: "Organização contábil da clínica", duration: "23 min", status: "current" },
      { title: "Tributação e previsibilidade", duration: "42 min", status: "locked" },
      { title: "Relatórios de decisão", duration: "30 min", status: "locked" }
    ]
  },
  {
    title: "Assessoria jurídica",
    modules: 9,
    cover: "/assets/covers/cover-10.png",
    category: "Jurídico",
    duration: "9h",
    level: "Compliance",
    nextLesson: "Contratos e consentimento informado",
    instructor: "Equipe Instituto Adriana Vinhal",
    lessons: [
      { title: "Risco jurídico na estética", duration: "24 min", status: "current" },
      { title: "Contratos e consentimento informado", duration: "37 min", status: "locked" },
      { title: "Documentação de atendimento", duration: "29 min", status: "locked" }
    ]
  }
];

export const orders = [
  ["#1257", "Anatomia ITC", "", "10/05/2024", "R$ 2.997,00"],
  ["#1254", "Toxina botulínica", "Módulo 1 - Fundamentos", "08/05/2024", "R$ 1.497,00"],
  ["#1231", "Preenchedores faciais", "Módulo 2 - Técnicas", "30/04/2024", "R$ 1.997,00"],
  ["#1209", "Bioestimuladores de colágeno", "", "25/04/2024", "R$ 1.697,00"],
  ["#1187", "Fios", "Módulo 1 - Introdução", "18/04/2024", "R$ 1.297,00"],
  ["#1122", "Peelings Avançados", "", "05/04/2024", "R$ 1.497,00"]
];

export const achievements = [
  "Módulo 1 concluído",
  "Primeira avaliação aprovada",
  "7 dias consecutivos de estudo"
];

export const profileImage = "/assets/profile-fernanda.png";

export const certificateRecords: CertificateRecord[] = [
  {
    id: "CERT-ITC-2024-1257",
    course: "Anatomia ITC",
    issuedAt: "18/05/2024",
    workload: "10 horas",
    validationCode: "IAV-ANAT-62F9"
  },
  {
    id: "CERT-BTX-2024-1254",
    course: "Toxina botulínica",
    issuedAt: "12/05/2024",
    workload: "8 horas",
    validationCode: "IAV-BTX-41C8"
  }
];

export const messageThreads: MessageThread[] = [
  {
    id: "#MSG-2048",
    subject: "Dúvida sobre certificado de Anatomia ITC",
    status: "Respondido",
    lastUpdate: "Hoje, 09:42",
    preview: "Nossa equipe anexou a orientação para validação digital do certificado."
  },
  {
    id: "#MSG-2036",
    subject: "Acesso ao módulo de bioestimuladores",
    status: "Aberto",
    lastUpdate: "Ontem, 16:10",
    preview: "Seu pedido foi recebido e está na fila de atendimento premium."
  },
  {
    id: "#MSG-1988",
    subject: "Comprovante do pedido #1254",
    status: "Resolvido",
    lastUpdate: "22/05/2024",
    preview: "Comprovante enviado e conversa finalizada."
  }
];
