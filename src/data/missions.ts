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
    { code: "3000", name: "AAM Vendas Curitiba" },
    { code: "4000", name: "AAM Vendas Recife" },
    { code: "5000", name: "AAM Vendas Porto Alegre" }
  ],
  channels: [
    { code: "10", name: "Venda Direta" },
    { code: "20", name: "Distribuição" },
    { code: "30", name: "E-commerce" }
  ],
  divisions: [
    { code: "00", name: "Geral" },
    { code: "01", name: "Peças" },
    { code: "02", name: "Serviços" }
  ],
  materials: [
    { code: "MAT-SD-001", desc: "Parafuso Sextavado Aço G5" },
    { code: "MAT-SD-015", desc: "Cabo de Aço Reforçado" },
    { code: "MAT-PRIME-X", desc: "Módulo Eletrônico Central" },
    { code: "MAT-OIL-500", desc: "Óleo Lubrificante Sintético" },
    { code: "MAT-GEAR-S1", desc: "Engrenagem Helicoidal" },
    { code: "MAT-BELT-V", desc: "Correia de Transmissão V" },
    { code: "MAT-PUMP-H", desc: "Bomba Hidráulica 10bar" },
    { code: "MAT-VALV-P", desc: "Válvula Pneumática 3/2" },
    { code: "MAT-FLTR-A", desc: "Filtro de Ar Industrial" },
    { code: "MAT-BRNG-6205", desc: "Rolamento de Esferas 6205" },
    { code: "MAT-TOOL-KIT", desc: "Kit de Ferramentas Manuais" },
    { code: "MAT-SCREW-M8", desc: "Parafuso M8 Zincado" },
    { code: "MAT-WIRE-100", desc: "Rolo Fio Cobre 100m" },
    { code: "MAT-CLMP-30", desc: "Braçadeira Inox 30mm" },
    { code: "MAT-GASK-R", desc: "Junta de Vedação Borracha" }
  ],
  customers: [
    { code: "208015", name: "TechBrasil Automação Ltda", uf: "SP", cnpj: "12.345.678/0001-90" },
    { code: "208016", name: "Distribuidora Sul de Metais", uf: "RS", cnpj: "23.456.789/0001-01" },
    { code: "309001", name: "Indústrias Reunidas do Norte", uf: "AM", cnpj: "34.567.890/0001-12" },
    { code: "208017", name: "Logística Expressa Nordeste", uf: "PE", cnpj: "45.678.901/0001-23" },
    { code: "208018", name: "Manutenção Industrial Rio", uf: "RJ", cnpj: "56.789.012/0001-34" },
    { code: "208019", name: "AgroTech Soluções", uf: "MT", cnpj: "67.890.123/0001-45" },
    { code: "208020", name: "Construtora Horizonte", uf: "GO", cnpj: "78.901.234/0001-56" },
    { code: "208021", name: "Metalúrgica Vale do Aço", uf: "MG", cnpj: "89.012.345/0001-67" },
    { code: "208022", name: "Fábrica de Móveis Design", uf: "SC", cnpj: "90.123.456/0001-78" },
    { code: "208023", name: "Química Industrial S.A.", uf: "BA", cnpj: "01.234.567/0001-89" },
    { code: "208024", name: "Mineração Ouro Preto", uf: "MG", cnpj: "12.345.678/0002-99" },
    { code: "208025", name: "Transportadora Rápido", uf: "SP", cnpj: "23.456.789/0002-02" },
    { code: "208026", name: "Auto Peças Central", uf: "DF", cnpj: "34.567.890/0002-13" },
    { code: "208027", name: "Elétrica São João", uf: "PR", cnpj: "45.678.901/0002-24" },
    { code: "208028", name: "Papelaria Corporativa", uf: "SP", cnpj: "56.789.012/0002-35" }
  ],
  incoterms: ["FOB", "CIF", "EXW", "DDP", "FCA"],
  paymentConds: ["ZF30", "ZF60", "ZB00", "ZF90", "Z001"]
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
