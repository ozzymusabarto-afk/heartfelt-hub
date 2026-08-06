export interface SAPTable {
  name: string;
  description: string;
}

export interface SAPTransaction {
  tcode: string;
  description: string;
}

export interface SAPModule {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  transactions: SAPTransaction[];
  tables: SAPTable[];
  tips: string[];
  commonErrors: string[];
}

export const SAP_MODULES: SAPModule[] = [
  {
    id: "org-bp",
    title: "1. Estrutura Organizacional & Business Partner (BP)",
    iconName: "UserCheck",
    summary: "A base de todo o processo de vendas no SAP S/4HANA reside na definição correta da Estrutura Organizacional e no cadastro mestre de Parceiros de Negócios (Business Partners). Sem uma hierarquia bem definida de Org. de Vendas, Canal de Distribuição e Setor de Atividade, as transações comerciais não podem ser processadas.",
    transactions: [
      { tcode: "BP", description: "Manutenção de Parceiro de Negócios (Central)" },
      { tcode: "OVX5", description: "Definição de Organização de Vendas" },
      { tcode: "OVX1", description: "Definição de Canal de Distribuição" },
      { tcode: "OVXG", description: "Atribuição de Área de Vendas (Org/Canal/Setor)" }
    ],
    tables: [
      { name: "BUT000", description: "BP: Dados Gerais (Nome, Endereço)" },
      { name: "KNA1", description: "Mestre de Clientes: Dados Gerais" },
      { name: "KNVV", description: "Mestre de Clientes: Dados de Vendas" },
      { name: "T001W", description: "Centros / Plantas" }
    ],
    tips: [
      "No S/4HANA, 'Cliente' é uma função (Role) dentro do BP, não um objeto separado.",
      "Sempre verifique a atribuição da Área de Vendas antes de tentar criar um pedido.",
      "O Grupo de Contas do BP determina quais campos são obrigatórios no cadastro."
    ],
    commonErrors: [
      "BP não estendido para a Área de Vendas solicitada.",
      "Erro de intervalo de numeração no cadastro do parceiro.",
      "Falta de atribuição de Ponto de Expedição ao Centro."
    ]
  },
  {
    id: "sales-docs",
    title: "2. Documentos de Venda & Processos (VA01/VA02/VA03)",
    iconName: "FileText",
    summary: "O ciclo de Order-to-Cash (OTC) inicia-se formalmente com o Documento de Vendas. Aqui configuramos como o sistema deve se comportar para diferentes cenários: Venda Padrão, Cotação, Devolução ou Remessa de Bonificação. O controle de cópia e os tipos de itens são os motores que regem esta etapa.",
    transactions: [
      { tcode: "VA01", description: "Criar Ordem de Venda" },
      { tcode: "VA02", description: "Modificar Ordem de Venda" },
      { tcode: "VA03", description: "Exibir Ordem de Venda" },
      { tcode: "VA05", description: "Lista de Ordens de Vendas" }
    ],
    tables: [
      { name: "VBAK", description: "Cabeçalho do Documento de Vendas" },
      { name: "VBAP", description: "Item do Documento de Vendas" },
      { name: "VBEP", description: "Dados de Divisão de Remessa (Schedule Lines)" },
      { name: "VBKD", description: "Dados Comerciais do Documento" }
    ],
    tips: [
      "O Log de Incompletude (V.02) é seu melhor amigo para diagnosticar por que uma ordem não segue para entrega.",
      "O Fluxo de Documentos (VA03 -> Ambiente) permite rastrear todo o histórico da venda.",
      "Tipos de item (TAN, TANN, REN) definem se o item é relevante para faturamento e estoque."
    ],
    commonErrors: [
      "Bloqueio de Crédito (Ordem criada mas não liberada).",
      "Determinação de preço incorreta ou faltante.",
      "Data de remessa fora do calendário de fábrica."
    ]
  },
  {
    id: "pricing",
    title: "3. Esquema de Cálculo & Precificação (Pricing/VK11)",
    iconName: "Flame",
    summary: "A Precificação é um dos módulos mais complexos do SD. Utiliza a Técnica de Condições para determinar preços, descontos, fretes e impostos. O Esquema de Cálculo (Pricing Procedure) organiza a sequência lógica de como os valores são somados e subtraídos para chegar ao valor líquido e bruto.",
    transactions: [
      { tcode: "VK11", description: "Criar Registros de Condição" },
      { tcode: "VK12", description: "Modificar Registros de Condição" },
      { tcode: "VOK0", description: "Customizing de Precificação (Menu)" },
      { tcode: "V/06", description: "Definição de Tipos de Condição (PR00, K007, etc.)" }
    ],
    tables: [
      { name: "KONV", description: "Condições (Transação) - Itens de Preço" },
      { name: "KONP", description: "Condições (Dados Mestres) - Valores" },
      { name: "A000 a A999", description: "Tabelas de Acesso de Preços" },
      { name: "T683", description: "Esquemas de Cálculo" }
    ],
    tips: [
      "Use a Análise de Preço na aba Condições do Item (VA03) para ver por que uma condição não foi encontrada.",
      "A sequência de acesso determina a hierarquia de busca (ex: Preço por Cliente vs Preço Geral).",
      "Condições estatísticas não alteram o valor líquido, servem apenas para informação/relatório."
    ],
    commonErrors: [
      "Condição obrigatória faltante no esquema.",
      "Validade do registro de condição expirada.",
      "Moeda do registro de condição diferente da moeda da ordem."
    ]
  },
  {
    id: "shipping",
    title: "4. Expedição, Remessa & Faturamento (VL01N/VF01)",
    iconName: "Truck",
    summary: "A fase de execução logística transforma a intenção de venda em movimento físico. A Remessa (Delivery) gerencia o Picking, Packing e o Post Goods Issue (PGI/Baixa). Após a saída da mercadoria, o Faturamento encerra o ciclo comercial gerando o título financeiro e o documento fiscal.",
    transactions: [
      { tcode: "VL01N", description: "Criar Fornecimento com Ref. Ordem" },
      { tcode: "VL02N", description: "Modificar Fornecimento (PGI/Baixa)" },
      { tcode: "VF01", description: "Criar Fatura (Billing)" },
      { tcode: "VF04", description: "Pool de Faturamento" }
    ],
    tables: [
      { name: "LIKP", description: "Cabeçalho da Remessa / Fornecimento" },
      { name: "LIPS", description: "Item da Remessa / Fornecimento" },
      { name: "VBRK", description: "Cabeçalho da Fatura" },
      { name: "VBRP", description: "Item da Fatura" }
    ],
    tips: [
      "O Ponto de Expedição é determinado pela Planta + Condição de Expedição do Cliente.",
      "O estorno de uma fatura deve ser feito via VF11 antes de tentar anular a remessa (VL09).",
      "O Billing Due List (VF04) ajuda a processar faturas em massa no final do dia."
    ],
    commonErrors: [
      "Falta de estoque para picking (Verificação ATP).",
      "Ponto de expedição não determinado corretamente.",
      "Fatura bloqueada para transferência para o Financeiro (FI)."
    ]
  },
  {
    id: "brazil",
    title: "5. Localização Brasil & Impostos (CFOP/Taxation)",
    iconName: "Shield",
    summary: "A Localização Brasil é essencial para operações no país. Ela lida com a complexidade tributária (ICMS, IPI, PIS, COFINS, ISS) e a geração da Nota Fiscal Eletrônica (NF-e). A determinação do CFOP e do Direito Fiscal é o coração da conformidade legal na AAM LOGÍSTICA.",
    transactions: [
      { tcode: "J1B1N", description: "Criar Nota Fiscal Manualmente" },
      { tcode: "J1B3N", description: "Exibir Nota Fiscal" },
      { tcode: "J1BTAX", description: "Manager de Impostos Brasil (Tax Manager)" },
      { tcode: "J1BFLAST", description: "Monitor de NF-e (Sefaz)" }
    ],
    tables: [
      { name: "J_1BNFDOC", description: "Cabeçalho da Nota Fiscal" },
      { name: "J_1BNFLIN", description: "Itens da Nota Fiscal" },
      { name: "J_1BTAXCODE", description: "Códigos de Imposto (SD/MM)" },
      { name: "J_1BTX* ", description: "Tabelas de Taxas de Impostos" }
    ],
    tips: [
      "O CFOP é determinado pela utilização do material e localização dos parceiros (UF).",
      "Sempre confira o NCM do material; um código errado invalida a tributação.",
      "A Dynamic Exception no J1BTAX permite criar regras específicas por cliente ou material."
    ],
    commonErrors: [
      "CFOP não encontrado para o cenário da operação.",
      "Base de cálculo de ICMS zerada indevidamente.",
      "Rejeição da SEFAZ por erro de validação do XML."
    ]
  }
];
