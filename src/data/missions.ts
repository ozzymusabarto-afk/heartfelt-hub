export interface Mission {
  id: string;
  title: string;
  transaction: string;
  requiredTransactions?: string[];
  chefeHugoDialog: string;
  successFeedback: string;
  errorFeedback: string;
  expectedData: {
    tipoOrdem: string;
    orgVendas: string;
    canalDist: string;
    setorAtiv: string;
    partnerCode: string;
    materialCode: string;
    quantidade: string;
    headerIncoterms: string;
    partnerFunction: string;
    [key: string]: string;
  };
  f1Help: {
    title: string;
    concept: string;
    businessImpact: string;
    brazilRule: string;
  };
}

/**
 * SAP SD Master Data - Single Source of Truth for selection options
 */
export const SAP_MASTER_DATA = {
  salesOrgs: [
    { code: "1000", name: "AAM Vendas São Paulo" },
    { code: "2000", name: "AAM Vendas Rio de Janeiro" }
  ],
  channels: [
    { code: "10", name: "Venda Direta" },
    { code: "20", name: "Distribuição" },
    { code: "30", name: "Exportação" }
  ],
  divisions: [
    { code: "00", name: "Geral" },
    { code: "01", name: "Peças" },
    { code: "10", name: "Serviços" },
    { code: "20", name: "Projetos" }
  ],
  materials: [
    { code: "MAT-SD-015", desc: "Cabo de Aço Reforçado" },
    { code: "MAT-SD-020", desc: "Polímero Industrial G3" },
    { code: "MAT-SD-030", desc: "Kit de Vedação Premium" },
    { code: "MAT-SD-045", desc: "Rolamento Blindado" },
    { code: "MAT-PRIME-X", desc: "Módulo Eletrônico Central" },
    { code: "MAT-ECO-99", desc: "Lubrificante Sintético" }
  ],
  customers: [
    { code: "208015", name: "TechBrasil Automação Ltda" },
    { code: "208016", name: "Distribuidora Sul de Metais" },
    { code: "208017", name: "Comércio Fictício S/A" },
    { code: "208018", name: "Logística Integrada Global" },
    { code: "208019", name: "Manutenção Express ME" },
    { code: "309001", name: "Indústrias Reunidas do Norte" },
    { code: "405002", name: "Panteon Construções" }
  ],
  incoterms: ["FOB", "CIF", "EXW", "DDP"],
  paymentConds: ["ZF30", "ZF60", "ZB00", "0001", "ZF90"]
};

export const MISSIONS: Mission[] = [
  {
    "id": "M001-BP",
    "title": "01. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000. Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "",
        "quantidade": "",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: BP (Business Partner)",
        "concept": "No S/4HANA, o BP é o ponto de entrada único para gerenciar dados mestres de Clientes e Fornecedores.",
        "businessImpact": "Um cadastro de BP correto evita bloqueios no faturamento e garante que os impostos sejam calculados pela localização (Brasil).",
        "brazilRule": "O campo 'Contribuinte de ICMS' deve ser validado no cadastro para evitar rejeição da NF-e na SEFAZ."
    }
  },
  // ... including more missions simplified or kept as they were, but they will be hydrated dynamically in App
  {
    "id": "M002-BP",
    "title": "02. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 12). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "12",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: BP (Business Partner)",
        "concept": "No S/4HANA, o BP é o ponto de entrada único para gerenciar dados mestres de Clientes e Fornecedores.",
        "businessImpact": "Um cadastro de BP correto evita bloqueios no faturamento e garante que os impostos sejam calculados pela localização (Brasil).",
        "brazilRule": "O campo 'Contribuinte de ICMS' deve ser validado no cadastro para evitar rejeição da NF-e na SEFAZ."
    }
  }
];
