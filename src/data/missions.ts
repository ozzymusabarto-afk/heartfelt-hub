export interface Mission {
  id: string;
  title: string;
  transaction: string;
  requiredTransactions?: string[];
  chefeHugoDialog: string;
  successFeedback: string;
  errorFeedback: string;
  expectedData: {
    tipoOrdem?: string;
    orgVendas?: string;
    canalDist?: string;
    setorAtiv?: string;
    partnerCode?: string;
    materialCode?: string;
    quantidade?: string;
    headerIncoterms?: string;
    partnerFunction?: string;
    [key: string]: any;
  };
  f1Help: {
    title: string;
    concept: string;
    businessImpact: string;
    brazilRule: string;
  };
}

export const SAP_MASTER_DATA = {
  salesOrgs: [
    { code: "1000", name: "AAM Vendas São Paulo" },
    { code: "2000", name: "AAM Vendas Rio de Janeiro" },
    { code: "3000", name: "AAM Vendas Curitiba" }
  ],
  channels: [
    { code: "10", name: "Venda Direta" },
    { code: "20", name: "Distribuição" }
  ],
  divisions: [
    { code: "00", name: "Geral" },
    { code: "01", name: "Peças" }
  ],
  materials: [
    { code: "MAT-SD-001", desc: "Parafuso Sextavado Aço G5" },
    { code: "MAT-SD-015", desc: "Cabo de Aço Reforçado" },
    { code: "MAT-PRIME-X", desc: "Módulo Eletrônico Central" }
  ],
  customers: [
    { code: "208015", name: "TechBrasil Automação Ltda" },
    { code: "208016", name: "Distribuidora Sul de Metais" },
    { code: "309001", name: "Indústrias Reunidas do Norte" }
  ],
  incoterms: ["FOB", "CIF", "EXW"],
  paymentConds: ["ZF30", "ZF60", "ZB00"]
};

export const MISSIONS: Mission[] = [
  {
    id: "M001-BP",
    title: "01. Trainee - Cadastro de Parceiro (BP)",
    transaction: "BP",
    chefeHugoDialog: "",
    successFeedback: "Excelente trabalho! O Parceiro de Negócios (BP) foi validado corretamente.",
    errorFeedback: "Atenção! Os dados do BP não coincidem com o solicitado.",
    expectedData: { orgVendas: "1000", canalDist: "10", setorAtiv: "00", partnerCode: "208015" },
    f1Help: { title: "Conceito: BP", concept: "Business Partner no S/4HANA", businessImpact: "Evita bloqueios", brazilRule: "Contribuinte ICMS" }
  },
  {
    id: "M002-VA01",
    title: "02. Trainee - Criar Pedido de Venda (VA01)",
    transaction: "VA01",
    chefeHugoDialog: "",
    successFeedback: "Pedido criado com sucesso!",
    errorFeedback: "Erro nos dados do pedido.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", partnerCode: "208015", materialCode: "MAT-SD-001", quantidade: "10" },
    f1Help: { title: "Conceito: VA01", concept: "Criação de ordens de venda", businessImpact: "Gera receita", brazilRule: "Impostos automáticos" }
  },
  {
    id: "M003-VA02",
    title: "03. Trainee - Alterar Pedido (VA02)",
    transaction: "VA02",
    chefeHugoDialog: "",
    successFeedback: "Pedido alterado!",
    errorFeedback: "Dados de alteração incorretos.",
    expectedData: { orgVendas: "1000", canalDist: "10", setorAtiv: "00", partnerCode: "208015", materialCode: "MAT-SD-001", quantidade: "20" },
    f1Help: { title: "Conceito: VA02", concept: "Alteração de ordens", businessImpact: "Flexibilidade", brazilRule: "NF-e re-emissão se necessário" }
  },
  {
    id: "M004-VA11",
    title: "04. Trainee - Criar Solicitação de Cotação (VA11)",
    transaction: "VA11",
    chefeHugoDialog: "",
    successFeedback: "Cotação solicitada!",
    errorFeedback: "Erro na solicitação.",
    expectedData: { orgVendas: "1000", canalDist: "10", setorAtiv: "00", partnerCode: "208016", materialCode: "MAT-PRIME-X", quantidade: "1" },
    f1Help: { title: "Conceito: VA11", concept: "Pré-venda", businessImpact: "Lead time", brazilRule: "Validade da proposta" }
  },
  {
    id: "M005-VL01N",
    title: "05. Trainee - Criar Entrega (VL01N)",
    transaction: "VL01N",
    chefeHugoDialog: "",
    successFeedback: "Entrega processada!",
    errorFeedback: "Erro no processamento da entrega.",
    expectedData: { orgVendas: "1000", partnerCode: "REF-ORD-123" },
    f1Help: { title: "Conceito: VL01N", concept: "Expedição de mercadorias", businessImpact: "Logística física", brazilRule: "Data de saída" }
  },
  {
    id: "M006-VF01",
    title: "06. Trainee - Criar Faturamento (VF01)",
    transaction: "VF01",
    chefeHugoDialog: "",
    successFeedback: "Fatura emitida!",
    errorFeedback: "Erro na fatura.",
    expectedData: { tipoOrdem: "F2", partnerCode: "REF-DEL-456" },
    f1Help: { title: "Conceito: VF01", concept: "Faturamento e NF-e", businessImpact: "Financeiro", brazilRule: "SEFAZ Integration" }
  },
  {
    id: "M007-VK11",
    title: "07. Trainee - Criar Condição de Preço (VK11)",
    transaction: "VK11",
    chefeHugoDialog: "",
    successFeedback: "Preço cadastrado!",
    errorFeedback: "Erro no cadastro de preço.",
    expectedData: { orgVendas: "1000", canalDist: "10", materialCode: "MAT-SD-001" },
    f1Help: { title: "Conceito: VK11", concept: "Pricing (PR00)", businessImpact: "Margem de lucro", brazilRule: "ICMS/IPI inclusions" }
  },
  {
    id: "M008-MM03",
    title: "08. Trainee - Visualizar Material (MM03)",
    transaction: "MM03",
    chefeHugoDialog: "",
    successFeedback: "Material visualizado!",
    errorFeedback: "Material incorreto.",
    expectedData: { materialCode: "MAT-SD-015" },
    f1Help: { title: "Conceito: MM03", concept: "Mestre de Materiais", businessImpact: "Dados técnicos", brazilRule: "NCM Code" }
  }
];
