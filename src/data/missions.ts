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
  },
  {
    id: "M009-VA21",
    title: "09. Trainee - Criar Proposta Comercial (VA21)",
    transaction: "VA21",
    chefeHugoDialog: "",
    successFeedback: "Proposta criada!",
    errorFeedback: "Erro na proposta.",
    expectedData: { tipoOrdem: "QT", orgVendas: "2000", canalDist: "20", setorAtiv: "01", partnerCode: "208018", materialCode: "MAT-GEAR-S1", quantidade: "5" },
    f1Help: { title: "Conceito: VA21", concept: "Criação de propostas", businessImpact: "Pipeline de vendas", brazilRule: "Validade jurídica" }
  },
  {
    id: "M010-VA05",
    title: "10. Trainee - Listar Pedidos (VA05)",
    transaction: "VA05",
    chefeHugoDialog: "",
    successFeedback: "Lista gerada!",
    errorFeedback: "Erro nos filtros.",
    expectedData: { orgVendas: "1000", partnerCode: "208015" },
    f1Help: { title: "Conceito: VA05", concept: "Relatório de ordens", businessImpact: "Visibilidade", brazilRule: "Status NF-e" }
  },
  {
    id: "M011-VL02N",
    title: "11. Trainee - Modificar Entrega (VL02N)",
    transaction: "VL02N",
    chefeHugoDialog: "",
    successFeedback: "Entrega modificada!",
    errorFeedback: "Erro na modificação.",
    expectedData: { orgVendas: "1000", partnerCode: "REF-DEL-789" },
    f1Help: { title: "Conceito: VL02N", concept: "Ajuste de remessa", businessImpact: "Conformidade logística", brazilRule: "Cancelamento de saída" }
  },
  {
    id: "M012-VF04",
    title: "12. Trainee - Lista de Faturamento (VF04)",
    transaction: "VF04",
    chefeHugoDialog: "",
    successFeedback: "Lista de faturamento gerada!",
    errorFeedback: "Erro na geração da lista.",
    expectedData: { orgVendas: "1000", canalDist: "10" },
    f1Help: { title: "Conceito: VF04", concept: "Billing Due List", businessImpact: "Fluxo de caixa", brazilRule: "Lote de NF-e" }
  },
  {
    id: "M013-VA03",
    title: "13. Trainee - Exibir Pedido (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "",
    successFeedback: "Pedido exibido corretamente!",
    errorFeedback: "Documento incorreto.",
    expectedData: { partnerCode: "208015" },
    f1Help: { title: "Conceito: VA03", concept: "Exibição de documentos", businessImpact: "Auditoria", brazilRule: "Danfe vinculada" }
  },
  {
    id: "M014-VA01-2",
    title: "14. Trainee - Venda com Incoterms (VA01)",
    transaction: "VA01",
    chefeHugoDialog: "",
    successFeedback: "Pedido com Incoterms criado!",
    errorFeedback: "Erro no Incoterms.",
    expectedData: { tipoOrdem: "OR", orgVendas: "3000", partnerCode: "208021", headerIncoterms: "CIF", partnerFunction: "ZF60" },
    f1Help: { title: "Conceito: Incoterms", concept: "Termos de frete", businessImpact: "Custo logístico", brazilRule: "Base ICMS ST" }
  },
  {
    id: "M015-VK11-2",
    title: "15. Trainee - Preço Especial (VK11)",
    transaction: "VK11",
    chefeHugoDialog: "",
    successFeedback: "Preço especial cadastrado!",
    errorFeedback: "Erro no cadastro.",
    expectedData: { orgVendas: "2000", canalDist: "20", materialCode: "MAT-PUMP-H" },
    f1Help: { title: "Conceito: Pricing", concept: "Condition Records", businessImpact: "Estratégia comercial", brazilRule: "PIS/COFINS por item" }
  },
  {
    id: "M016-BP-2",
    title: "16. Trainee - Validar Cliente Novo (BP)",
    transaction: "BP",
    chefeHugoDialog: "",
    successFeedback: "Cliente validado!",
    errorFeedback: "Dados de cadastro incorretos.",
    expectedData: { orgVendas: "4000", partnerCode: "208017", setorAtiv: "02" },
    f1Help: { title: "Conceito: BP Master", concept: "Cadastro centralizado", businessImpact: "Governança", brazilRule: "Suframa/Isenção" }
  },
  {
    id: "M017-VA11-2",
    title: "17. Trainee - Cotação de Serviços (VA11)",
    transaction: "VA11",
    chefeHugoDialog: "",
    successFeedback: "Cotação de serviço criada!",
    errorFeedback: "Erro nos dados de serviço.",
    expectedData: { orgVendas: "5000", partnerCode: "208019", materialCode: "MAT-TOOL-KIT", quantidade: "1" },
    f1Help: { title: "Conceito: Service Quote", concept: "Venda de serviços", businessImpact: "Contratos", brazilRule: "ISS vs ICMS" }
  },
  {
    id: "M018-VL01N-2",
    title: "18. Trainee - Remessa Urgente (VL01N)",
    transaction: "VL01N",
    chefeHugoDialog: "",
    successFeedback: "Remessa urgente processada!",
    errorFeedback: "Erro na remessa.",
    expectedData: { orgVendas: "2000", partnerCode: "REF-ORD-999" },
    f1Help: { title: "Conceito: Delivery Flow", concept: "Picking & Packing", businessImpact: "Lead time", brazilRule: "Peso Bruto/Líquido" }
  },
  {
    id: "M019-VF01-2",
    title: "19. Trainee - Faturamento Batch (VF01)",
    transaction: "VF01",
    chefeHugoDialog: "",
    successFeedback: "Faturamento processado!",
    errorFeedback: "Erro no faturamento.",
    expectedData: { tipoOrdem: "F2", partnerCode: "REF-DEL-000" },
    f1Help: { title: "Conceito: Billing", concept: "Contabilização", businessImpact: "Receita", brazilRule: "XML Status SEFAZ" }
  },
  {
    id: "M020-VA01-3",
    title: "20. Trainee - Venda Direta Industrial (VA01)",
    transaction: "VA01",
    chefeHugoDialog: "",
    successFeedback: "Pedido industrial criado!",
    errorFeedback: "Erro nos dados industriais.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", partnerCode: "208021", materialCode: "MAT-BELT-V", quantidade: "100" },
    f1Help: { title: "Conceito: OTC Flow", concept: "Order to Cash", businessImpact: "Operação core", brazilRule: "CFOP industrial" }
  },
  {
    id: "M021-MM03-2",
    title: "21. Trainee - Ver Ficha Técnica (MM03)",
    transaction: "MM03",
    chefeHugoDialog: "",
    successFeedback: "Ficha técnica validada!",
    errorFeedback: "Material não encontrado.",
    expectedData: { materialCode: "MAT-FLTR-A" },
    f1Help: { title: "Conceito: Material Views", concept: "Visão Vendas", businessImpact: "Mestre de dados", brazilRule: "Código NCM" }
  },
  {
    id: "M022-VA02-2",
    title: "22. Trainee - Ajuste de Preço Pedido (VA02)",
    transaction: "VA02",
    chefeHugoDialog: "",
    successFeedback: "Preço ajustado no pedido!",
    errorFeedback: "Ajuste incorreto.",
    expectedData: { orgVendas: "3000", partnerCode: "208027", materialCode: "MAT-WIRE-100" },
    f1Help: { title: "Conceito: Order Management", concept: "Precedência de preços", businessImpact: "Margem", brazilRule: "Diferencial de Alíquota" }
  },
  {
    id: "M023-VA05-2",
    title: "23. Trainee - Lista por Canal (VA05)",
    transaction: "VA05",
    chefeHugoDialog: "",
    successFeedback: "Lista por canal gerada!",
    errorFeedback: "Filtro de canal incorreto.",
    expectedData: { orgVendas: "1000", canalDist: "20" },
    f1Help: { title: "Conceito: Reporting", concept: "SD Reports", businessImpact: "KPIs", brazilRule: "Status de entrega" }
  },
  {
    id: "M024-VF04-2",
    title: "24. Trainee - Fechamento do Dia (VF04)",
    transaction: "VF04",
    chefeHugoDialog: "",
    successFeedback: "Fechamento realizado! Meta de 24 acertos alcançada!",
    errorFeedback: "Erro no fechamento.",
    expectedData: { orgVendas: "1000" },
    f1Help: { title: "Conceito: Billing List", concept: "Fechamento mensal", businessImpact: "Compliance", brazilRule: "Escrituração Fiscal" }
  }
];
