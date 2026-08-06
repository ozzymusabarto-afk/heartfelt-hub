export type SAPProfile = "Consultor" | "KeyUser" | "Suporte" | "Arquiteto";

export interface ProfileQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    profile: SAPProfile;
  }[];
}

export const PROFILE_TEST_QUESTIONS: ProfileQuestion[] = [
  {
    id: "pq-001",
    question: "Diante de um erro de determinação de preço em ambiente de produção, qual sua primeira reação?",
    options: [
      { id: "A", text: "Abrir o esquema de cálculo e analisar as sequências de acesso para identificar a falha na técnica de condições.", profile: "Consultor" },
      { id: "B", text: "Verificar se o cadastro do material ou do cliente foi alterado recentemente e validar a regra de negócio.", profile: "KeyUser" },
      { id: "C", text: "Analisar o log de erros do documento e verificar se há algum chamado similar aberto anteriormente.", profile: "Suporte" },
      { id: "D", text: "Avaliar se o erro é sintoma de um gap no desenho do processo global e propor uma revisão estrutural.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-002",
    question: "Como você prefere documentar uma nova funcionalidade no SAP SD?",
    options: [
      { id: "A", text: "Criando um documento de configuração (BBP/Config Guide) detalhando cada entrada na SPRO.", profile: "Consultor" },
      { id: "B", text: "Elaborando um manual de usuário passo a passo com prints de tela e regras de negócio.", profile: "KeyUser" },
      { id: "C", text: "Documentando a solução no histórico do ticket e atualizando a base de conhecimento de erros conhecidos.", profile: "Suporte" },
      { id: "D", text: "Desenhando o fluxo de processo ponta a ponta em um fluxograma de arquitetura e integrações.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-003",
    question: "Qual dessas tarefas te dá mais satisfação profissional?",
    options: [
      { id: "A", text: "Configurar um novo cenário complexo de impostos ou precificação do zero.", profile: "Consultor" },
      { id: "B", text: "Apoiar a operação a bater metas de faturamento através da melhoria do uso do sistema.", profile: "KeyUser" },
      { id: "C", text: "Resolver rapidamente um problema crítico que estava parando a expedição de mercadorias.", profile: "Suporte" },
      { id: "D", text: "Desenhar a estratégia de integração entre o SAP S/4HANA e um sistema de e-commerce externo.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-004",
    question: "Em uma reunião de projeto, qual costuma ser seu foco principal?",
    options: [
      { id: "A", text: "Garantir que os requisitos do cliente sejam atendidos através das melhores práticas de configuração.", profile: "Consultor" },
      { id: "B", text: "Garantir que o sistema seja intuitivo e que as regras de negócio da empresa sejam respeitadas.", profile: "KeyUser" },
      { id: "C", text: "Garantir que a solução implementada seja fácil de manter e que não gere novos incidentes.", profile: "Suporte" },
      { id: "D", text: "Garantir a escalabilidade da solução e o alinhamento com o roadmap tecnológico da empresa.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-005",
    question: "O que você faz quando se depara com uma necessidade de negócio que o SAP padrão (Standard) não atende?",
    options: [
      { id: "A", text: "Procuro exaustivamente por uma nota da SAP ou configuração alternativa antes de sugerir um desenvolvimento.", profile: "Consultor" },
      { id: "B", text: "Explico para a gerência os riscos de desviar do padrão e tento ajustar o processo de negócio.", profile: "KeyUser" },
      { id: "C", text: "Analiso se existe alguma User Exit ou BADI disponível para realizar o ajuste necessário com segurança.", profile: "Suporte" },
      { id: "D", text: "Desenho uma especificação funcional (FS) robusta para uma solução Z que se integre perfeitamente ao ecossistema.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-006",
    question: "Qual seu nível de proximidade com o time de desenvolvimento (ABAP)?",
    options: [
      { id: "A", text: "Falo com eles frequentemente para debater lógicas complexas e depurar erros de configuração.", profile: "Consultor" },
      { id: "B", text: "Interajo apenas para validar se as telas e campos novos estão conforme solicitado pelo negócio.", profile: "KeyUser" },
      { id: "C", text: "Trabalho lado a lado para resolver dumps e bugs críticos em ambiente de produção.", profile: "Suporte" },
      { id: "D", text: "Defino os padrões de desenvolvimento, nomenclaturas e arquitetura de objetos para o projeto.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-007",
    question: "Como você se mantém atualizado sobre o ecossistema SAP?",
    options: [
      { id: "A", text: "Lendo o SAP Help, participando de treinamentos oficiais e testando novas transações no ambiente sandbox.", profile: "Consultor" },
      { id: "B", text: "Acompanhando fóruns de usuários, grupos de melhores práticas e novidades fiscais do país.", profile: "KeyUser" },
      { id: "C", text: "Monitorando as KBA (Knowledge Base Articles) da SAP sobre bugs conhecidos e novas correções.", profile: "Suporte" },
      { id: "D", text: "Estudando tendências como SAP BTP, IA Generativa aplicada a processos e novas arquiteturas Cloud.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-008",
    question: "Qual o seu perfil de comunicação predominante?",
    options: [
      { id: "A", text: "Técnico-funcional: explico o 'como' as coisas funcionam por dentro do sistema.", profile: "Consultor" },
      { id: "B", text: "Negocial: traduzo necessidades de negócio para linguagem que a TI entenda.", profile: "KeyUser" },
      { id: "C", text: "Pragmático: foco na resolução rápida do problema e retorno da operação.", profile: "Suporte" },
      { id: "D", text: "Estratégico: foco no valor de longo prazo e na visão macro do projeto.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-009",
    question: "Se você pudesse mudar uma coisa no seu dia a dia, o que seria?",
    options: [
      { id: "A", text: "Ter mais tempo para prototipar novos cenários no ambiente de desenvolvimento.", profile: "Consultor" },
      { id: "B", text: "Ter processos de negócio mais claros e menos exceções 'na mão' dos usuários.", profile: "KeyUser" },
      { id: "C", text: "Receber chamados com descrições melhores e dados de teste corretos.", profile: "Suporte" },
      { id: "D", text: "Poder focar no desenho da solução sem me preocupar tanto com a micro-configuração.", profile: "Arquiteto" }
    ]
  },
  {
    id: "pq-010",
    question: "Como você reage a uma atualização de versão do sistema (ex: migração para S/4HANA)?",
    options: [
      { id: "A", text: "Fico empolgado para testar as novas funcionalidades e entender o que mudou nas tabelas.", profile: "Consultor" },
      { id: "B", text: "Fico preocupado com o impacto na rotina dos usuários e na necessidade de novos treinamentos.", profile: "KeyUser" },
      { id: "C", text: "Foco em mapear todos os programas Z que podem quebrar e garantir a estabilidade pós-go-live.", profile: "Suporte" },
      { id: "D", text: "Vejo como uma oportunidade para redesenhar processos obsoletos e simplificar a arquitetura.", profile: "Arquiteto" }
    ]
  }
];

export const PROFILE_METADATA: Record<SAPProfile, { 
  title: string; 
  description: string; 
  strengths: string[]; 
  developmentPoints: string[];
  transactions: string[]; 
  recommendations: string;
}> = {
  Consultor: {
    title: "Consultor Funcional SD",
    description: "Você é o mestre da configuração. Seu foco está em transformar requisitos complexos em soluções sistêmicas sólidas utilizando o melhor do padrão SAP.",
    strengths: [
      "Domínio profundo da SPRO",
      "Habilidade analítica para técnica de condições",
      "Visão funcional ponta a ponta",
      "Capacidade de prototipação rápida"
    ],
    developmentPoints: [
      "Integrações técnicas (EDIs/IDocs)",
      "Linguagem ABAP para debug",
      "Processos cross (MM/FI)"
    ],
    transactions: ["SPRO", "VOK0", "VOV7", "V/06", "V/08", "OVA8"],
    recommendations: "Foque em missões de Nível Pleno e Sênior que envolvam cenários de precificação complexos e determinação de contas. Explore o módulo de Certificação para validar seus conhecimentos teóricos."
  },
  KeyUser: {
    title: "Analista de Negócios / Key User",
    description: "Você é a ponte entre o negócio e a tecnologia. Garante que o sistema atenda às necessidades reais da operação e que os usuários saibam extrair o máximo dele.",
    strengths: [
      "Visão clara das regras de negócio",
      "Excelente comunicação com usuários",
      "Foco em eficiência operacional",
      "Habilidade em testes de aceitação (UAT)"
    ],
    developmentPoints: [
      "Conhecimento técnico de tabelas",
      "Configuração básica de documentos",
      "Visão de parametrização fiscal"
    ],
    transactions: ["VA01", "VA05", "VF04", "VC01N", "V.02", "BP"],
    recommendations: "Pratique missões que envolvam gestão de dados mestres (BP) e fluxos de venda padrão. Utilize a trilha de Trainee e Júnior para consolidar os fundamentos do Order-to-Cash."
  },
  Suporte: {
    title: "Especialista em Suporte / AMS",
    description: "Você é o guardião da estabilidade. Sua agilidade em resolver problemas e sua capacidade de depurar erros garantem que a empresa nunca pare.",
    strengths: [
      "Resolução rápida de incidentes",
      "Foco em SLA e satisfação do cliente",
      "Habilidade em depuração (Debug/Logs)",
      "Gestão de conhecimento de erros"
    ],
    developmentPoints: [
      "Implementação de novos cenários",
      "Arquitetura de soluções",
      "Design de processos de negócio"
    ],
    transactions: ["VA02", "VF11", "VL09", "SU53", "ST22", "SM37"],
    recommendations: "Foque em missões que envolvam correções de documentos, estornos de faturamento e análise de log de determinação. O Modo de Treino Rápido é excelente para você."
  },
  Arquiteto: {
    title: "Arquiteto de Soluções SD",
    description: "Você é o estrategista do ecossistema. Desenha soluções escaláveis e integradas, garantindo que o SAP SD converse perfeitamente com o restante da tecnologia da empresa.",
    strengths: [
      "Visão sistêmica e de integrações",
      "Desenho de soluções complexas",
      "Liderança técnica em projetos",
      "Foco em inovação e escalabilidade"
    ],
    developmentPoints: [
      "Micro-configurações específicas",
      "Gestão de usuários e perfis",
      "Suporte operacional do dia a dia"
    ],
    transactions: ["WE20", "BD64", "BD87", "NACE", "SOAMANAGER"],
    recommendations: "Foque em missões de Nível Sênior que envolvam integrações e processos transversais. Utilize o simulador para testar o impacto de mudanças estruturais em processos de faturamento e remessa."
  }
};
