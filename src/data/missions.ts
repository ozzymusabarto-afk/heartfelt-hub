export interface Mission {
  id: string;
  title: string;
  transaction: string;
  chefeHugoDialog: string;
  successFeedback: string;
  errorFeedback: string;
  expectedData: {
    tipoOrdem: string;
    orgVendas: string;
    canalDist: string;
    setorAtiv: string;
    cliente: string;
    material: string;
    quantidade: string;
    incoterms: string;
    condPagto: string;
  };
  f1Help: {
    title: string;
    concept: string;
    businessImpact: string;
    brazilRule: string;
  };
}

export const MISSIONS: Mission[] = [
  {
    id: "M1-VA01-STD",
    title: "01. Ordem Standard (OTC Padrão)",
    transaction: "VA01",
    chefeHugoDialog: "Parabéns pelo seu primeiro dia, Consultor(a)! Vamos começar com uma operação de rotina da AAM Corp: o cliente AAM LOGÍSTICA precisa de 99 unidades do material MAT-SD-015 para entrega faturada em 30 dias (ZF30) com frete FOB.",
    successFeedback: "Excelente trabalho! A ordem foi criada e o módulo de MM já reservou o estoque no depósito de SP. A logística da AAM Corp foi notificada.",
    errorFeedback: "Atenção aos dados informados! Verifique se usou Tipo de Ordem 'OR', Org. Vendas '1000', Canal '10', Setor '00', Cliente '208015' e Condição 'ZF30'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "99",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Ordem Standard (Tipo OR)",
      concept: "Documento comercial que registra a venda de mercadorias no fluxo Order-to-Cash da AAM Corp.",
      businessImpact: "Reserva o estoque no módulo de MM e inicia a verificação de disponibilidade (ATP).",
      brazilRule: "Determina a alíquota base de ICMS/PIS/COFINS dependendo do estado do cliente."
    }
  },
  {
    id: "M2-VA01-CIF",
    title: "02. Venda com Frete Pago (CIF)",
    transaction: "VA01",
    chefeHugoDialog: "O cliente AAM LOGÍSTICA negociou e fechou o pedido com frete por nossa conta (CIF SP). Registre essa ordem de 50 unidades do MAT-SD-015 com condição de pagamento faturada (ZF30).",
    successFeedback: "Perfeito! A cláusula CIF acionou a precificação de frete interno no SAP e a transportadora parceira da AAM Corp foi vinculada.",
    errorFeedback: "O frete negociado foi CIF! Ajuste o campo Incoterms para 'CIF' para garantes a inclusão do custo no documento.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "50",
      incoterms: "CIF",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Incoterms - Frete CIF vs. FOB",
      concept: "CIF (Cost, Insurance and Freight) indica que a AAM Corp arca com o frete e seguro até o destino.",
      businessImpact: "Influencia diretamente a formação de preço da ordem e o valor destacado de frete na NF-e.",
      brazilRule: "O tipo de frete (CIF = 1 / FOB = 2) é informado no campo específico da DANFE/SEFAZ."
    }
  },
  {
    id: "M3-VA01-AVISTA",
    title: "03. Venda à Vista com Desconto Especial",
    transaction: "VA01",
    chefeHugoDialog: "Temos um pedido especial do cliente AAM Corp! Eles vão pagar à vista (Condição ZB00) para obter desconto financeiro imediato. Lance a ordem de 20 unidades do MAT-SD-015 (Frete FOB).",
    successFeedback: "Excelente! O pagamento à vista liberou a ordem imediatamente no Financeiro (FI) para expedição sem necessidade de análise de crédito.",
    errorFeedback: "Para pagamentos à vista com desconto, certifique-se de preencher a Condição de Pagamento como 'ZB00'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "20",
      incoterms: "FOB",
      condPagto: "ZB00"
    },
    f1Help: {
      title: "Condições de Pagamento À Vista (ZB00)",
      concept: "Determina que a liquidação financeira ocorre no momento do faturamento da nota.",
      businessImpact: "Elimina o risco de inadimplência e acelera o fluxo de caixa no módulo FI.",
      brazilRule: "Altera o indicador da forma de pagamento na NF-e para Pagamento À Vista."
    }
  },
  {
    id: "M4-VA01-REVENDA",
    title: "04. Venda para Canal Atacado / Revenda",
    transaction: "VA01",
    chefeHugoDialog: "Atenção às regras operacionais! Este pedido do cliente AAM LOGÍSTICA é para operação de Revenda. Altere o Canal de Distribuição para '20' (Atacado/Revenda) com 150 unidades do MAT-SD-015.",
    successFeedback: "Muito bem! Ao alterar o Canal para 20, o SAP aplicou a tabela de preços do atacado e a substituição tributária correspondente.",
    errorFeedback: "Atenção! Para vendas destinadas a revendedores, o Canal de Distribuição correto no cadastro da AAM Corp é '20'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "20",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "150",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Canal de Distribuição (Atacado - 20)",
      concept: "Define a via comercial pela qual os produtos da AAM Corp chegam aos clientes.",
      businessImpact: "Determina quais esquemas de cálculo de preço (Pricing) e regras contratuais serão acionados.",
      brazilRule: "Definir se a venda é para revenda impacta a incidência de ICMS-ST (Substituição Tributária)."
    }
  },
  {
    id: "M5-VA01-BONIF",
    title: "05. Ordem de Bonificação / Amostra Grátis",
    transaction: "VA01",
    chefeHugoDialog: "A diretoria aprovou o envio de 10 unidades de amostra sem cobrança comercial para o cliente AAM LOGÍSTICA. Utilize o Tipo de Ordem de Bonificação 'ZBN' e condição 'ZB00'.",
    successFeedback: "Registrado com sucesso! O valor de receita comercial foi zerado, mantendo apenas o destaque fiscal obrigatório para trânsito.",
    errorFeedback: "Para operações sem cobrança (Bonificação), utilize obrigatoriamente o Tipo de Ordem 'ZBN'.",
    expectedData: {
      tipoOrdem: "ZBN",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "10",
      incoterms: "FOB",
      condPagto: "ZB00"
    },
    f1Help: {
      title: "Ordem de Bonificação (ZBN)",
      concept: "Remessa de mercadoria sem cobrança financeira do cliente, usada em ações promocionais.",
      businessImpact: "Não gera lançamento de Contas a Receber no Financeiro (FI), mas abate o estoque físico.",
      brazilRule: "Exige emissão de Nota Fiscal com natureza da operação 'Bonificação/Doação'."
    }
  },
  {
    id: "M6-VA01-CREDITO",
    title: "06. Pedido com Bloqueio de Crédito",
    transaction: "VA01",
    chefeHugoDialog: "O cliente AAM Corp está próximo do limite de crédito, mas a gerência pediu para registrar a ordem de 500 peças (ZF30) assim mesmo. A ordem vai salvar com bloqueio automático no sistema.",
    successFeedback: "Ordem gravada! Como o valor ultrapassou o limite do cliente, o SAP aplicou a trava automática no Financeiro (FSCM/Credit Management).",
    errorFeedback: "Insira a quantidade de 500 peças e verifique os dados padrão da ordem 'OR' com cliente '208015'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "500",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Gestão e Bloqueio de Crédito",
      concept: "Mecanismo de segurança que analisa a saúde financeira e títulos em aberto do cliente.",
      businessImpact: "Impede que a remessa (VL01N) e o faturamento sejam gerados sem aprovação do Gerente Financeiro.",
      brazilRule: "Garante a governança fiscal prevenindo vendas para clientes inadimplentes."
    }
  },
  {
    id: "M7-VA01-OUTROMAT",
    title: "07. Inclusão de Novo Material da Linha",
    transaction: "VA01",
    chefeHugoDialog: "Lançamento de produto novo na AAM Corp! O cliente solicitou 80 unidades do material de linha avançada MAT-SD-020 (faturado 30 dias - ZF30 e frete FOB).",
    successFeedback: "Material validado! A determinação de depósitos e a alíquota fiscal do novo item foram aplicadas corretamente.",
    errorFeedback: "Atenção ao código do material! O item correto para esta operação é o 'MAT-SD-020'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-020",
      quantidade: "80",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Mestre de Materiais (Cadastro SD)",
      concept: "Guarda as visões de vendas, dados do centro fornecedor e grupo de impostos do produto.",
      businessImpact: "Define o peso, volume de transporte e determinação de contas de receita.",
      brazilRule: "Conecta a NCM (Nomenclatura Comum do Mercosul) ao cálculo de IPI e impostos retidos."
    }
  },
  {
    id: "M8-VA01-EXPOR",
    title: "08. Ordem de Exportação / Filial Externa",
    transaction: "VA01",
    chefeHugoDialog: "Temos uma venda corporativa internacional! Altere a Organização de Vendas para '2000' (Exportação/Internacional) para 300 unidades do MAT-SD-015 com Incoterm CIF.",
    successFeedback: "Ordem internacional gerada! A Org. Vendas 2000 acionou as regras de faturamento com isenção de impostos nacionais para exportação.",
    errorFeedback: "Para vendas do departamento de Exportação, a Org. de Vendas deve ser a '2000'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "2000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "300",
      incoterms: "CIF",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Organização de Vendas (Org. Vendas 2000)",
      concept: "Unidade jurídica responsável por celebrar os contratos de vendas em diferentes mercados.",
      businessImpact: "Segrega os resultados financeiros e relatórios de vendas entre mercado interno e exportação.",
      brazilRule: "Aciona o regime de não incidência de ICMS/PIS/COFINS para operações de exportação."
    }
  },
  {
    id: "M9-VA01-PARCEL",
    title: "09. Venda com Condição Faturada em 60 Dias",
    transaction: "VA01",
    chefeHugoDialog: "Fechamos um fornecimento de longo prazo com a AAM LOGÍSTICA: 250 unidades do MAT-SD-015 com prazo de pagamento estendido de 60 dias (Condição ZF60).",
    successFeedback: "Muito bem! O prazo de 60 dias recalculou a data de vencimento das duplicatas no financeiro com sucesso.",
    errorFeedback: "A condição de pagamento estendida acordada com o cliente foi a 'ZF60'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "250",
      incoterms: "FOB",
      condPagto: "ZF60"
    },
    f1Help: {
      title: "Prazos de Pagamento Longos (ZF60)",
      concept: "Regra que calcula as datas de vencimento do faturamento no futuro.",
      businessImpact: "Afeta a previsão de fluxo de caixa da empresa no módulo financeiro.",
      brazilRule: "Gera a informação do número de parcelas e vencimentos na fatura da NF-e."
    }
  },
  {
    id: "M10-VA01-DEVOL",
    title: "10. Ordem de Devolução de Mercadoria",
    transaction: "VA01",
    chefeHugoDialog: "O cliente solicita a devolução de 15 unidades do MAT-SD-015 com avaria no transporte. Crie a ordem com Tipo 'RE' (Devolução) para registro do retorno ao estoque.",
    successFeedback: "Ordem de devolução aberta! O fluxo de entrada de estoque e o estorno da cobrança foram configurados.",
    errorFeedback: "Para registrar o retorno de mercadorias devolvidas, o Tipo de Ordem correto é 'RE'.",
    expectedData: {
      tipoOrdem: "RE",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "15",
      incoterms: "FOB",
      condPagto: "ZB00"
    },
    f1Help: {
      title: "Ordem de Devolução (Tipo RE)",
      concept: "Documento que inicia o processo de estorno financeiro e retorno físico de produtos ao depósito.",
      businessImpact: "Gera uma nota de crédito ao cliente e aguarda o recebimento físico para dar entrada em estoque.",
      brazilRule: "Exige emissão de Nota Fiscal de Entrada com o CFOP relativo a devoluções de vendas."
    }
  },
  {
    id: "M11-VA01-SERVICO",
    title: "11. Venda de Serviços / Consultoria SD",
    transaction: "VA01",
    chefeHugoDialog: "A AAM Corp também presta serviços de consultoria técnica! Registre a ordem para 10 horas do material de serviço 'MAT-SD-099' (Condição ZF30 e Ordem OR).",
    successFeedback: "Ordem de serviço cadastrada! O sistema dispensou a checagem de transporte e estoque físico por se tratar de um item intangível.",
    errorFeedback: "Verifique se indicou o código do material de serviço 'MAT-SD-099'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-099",
      quantidade: "10",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Venda de Serviços (Itens Intangíveis)",
      concept: "Operação comercial sem transferência física de bens materiais.",
      businessImpact: "Não aciona o picking ou remessa no depósito (VL01N), permitindo ir direto para o faturamento.",
      brazilRule: "Sujeito à tributação de ISS (Imposto Sobre Serviços) em vez de ICMS."
    }
  },
  {
    id: "M12-VA01-PROVA",
    title: "12. Desafio Final Trainee - Ordem Completa",
    transaction: "VA01",
    chefeHugoDialog: "Chegamos ao fim da primeira etapa de avaliação do Nível Trainee! Registre o pedido urgente do cliente AAM LOGÍSTICA para 120 peças do MAT-SD-015 com Frete CIF e faturamento estendido ZF60.",
    successFeedback: "SENSACIONAL! Você concluiu com 100% de precisão todas as variações da VA01! Seu cargo de Trainee na AAM LOGÍSTICA LTDA foi consolidado com sucesso!",
    errorFeedback: "Atenção máxima no Desafio Final! Verifique: Ordem 'OR', Org '1000', Canal '10', Setor '00', Cliente '208015', Material 'MAT-SD-015', Quantidade '120', Incoterms 'CIF' e Condição 'ZF60'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "120",
      incoterms: "CIF",
      condPagto: "ZF60"
    },
    f1Help: {
      title: "Conclusão do Bloco VA01 - Criar Ordem",
      concept: "Você domina agora a criação de ordens com fretes dinâmicos, prazos, descontos, devoluções e bonificações.",
      businessImpact: "Pronto para avançar no ciclo Order-to-Cash para os módulos de Expedição (VL01N) e Faturamento (VF01).",
      brazilRule: "Capacitado para tratar as principais regras fiscais e comerciais de vendas no Brasil."
    }
  },
  {
    id: "M13-VL01N-STD",
    title: "13. Criar Remessa de Entrega Standard",
    transaction: "VL01N",
    chefeHugoDialog: "A ordem do cliente AAM LOGÍSTICA LTDA (Cód: 208015) foi aprovada! Acesse a transação VL01N para gerar a Remessa de Entrega a partir do Centro Fornecedor 1000 (SP).",
    successFeedback: "Remessa gerada com sucesso! O documento de expedição foi enviado para a equipe de separação (Picking) no armazém.",
    errorFeedback: "Atenção aos dados de expedição! Certifique-se de selecionar a transação 'VL01N', usar o Centro '1000' e o cliente '208015'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "99",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Criar Remessa com Referência (VL01N)",
      concept: "Transação logarítmica que inicia o processo de picking, embalagem e expedição de mercadorias no SAP SD/LES.",
      businessImpact: "Reserva fisicamente os lotes no depósito e impede a alocação para outros pedidos.",
      brazilRule: "Gera a lista de embarque necessária para a conferência de carga física do transporte rodoviário."
    }
  },
  {
    id: "M14-VL01N-PARCIAL",
    title: "14. Remessa Parcial por Corte de Estoque",
    transaction: "VL01N",
    chefeHugoDialog: "Atenção, o armazém de SP só possui 50 unidades do MAT-SD-015 em estoque para o cliente NORTEL DISTRIBUIDORA (Cód: 208016). Gere a remessa parcial ajustando a quantidade fornecida para 50.",
    successFeedback: "Remessa parcial registrada! O SAP manteve o saldo restante na ordem de venda aberto para posterior fornecimento.",
    errorFeedback: "Para a remessa parcial da NORTEL, ajuste o campo Quantidade no pedido/fornecimento para '50'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "20",
      setorAtiv: "00",
      cliente: "208016",
      material: "MAT-SD-015",
      quantidade: "50",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Fornecimento Parcial (Partial Delivery)",
      concept: "Permite expedir uma quantidade menor do que a solicitada originalmente no pedido de venda.",
      businessImpact: "Atende emergencialmente o cliente sem cancelar o saldo remanescente da ordem.",
      brazilRule: "Exige que a Nota Fiscal seja emitida com o valor proporcional aos produtos efetivamente embarcados."
    }
  },
  {
    id: "M15-VL01N-BLOQ",
    title: "15. Tentativa de Expedição com Bloqueio Financeiro",
    transaction: "VL01N",
    chefeHugoDialog: "O cliente TECH BRASIL S.A. (Cód: 208017) solicita o envio urgente do material MAT-SD-020, mas o pedido está retido por crédito. Tente gerar a remessa para verificar a mensagem de trava do SAP.",
    successFeedback: "Trava de segurança acionada! O SAP impediu a geração da remessa devido ao bloqueio de crédito ativo no departamento financeiro.",
    errorFeedback: "Selecione o cliente '208017' e confirme os dados para visualizar a validação de trava de crédito da transação.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208017",
      material: "MAT-SD-020",
      quantidade: "80",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Bloqueio de Remessa por Crédito (FSCM)",
      concept: "Controle que impede a saída física de mercadorias para clientes com inadimplência ou limite estourado.",
      businessImpact: "Protege o patrimônio da AAM Corp evitando perdas financeiras e entregas não autorizadas.",
      brazilRule: "Evita o fato gerador do ICMS e emissão de NF-e para títulos com risco de não recebimento."
    }
  }
];
