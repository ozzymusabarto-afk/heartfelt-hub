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
    id: "M19-BP-CLIENTE",
    title: "19. Consulta de Parceiro Comercial (BP - Business Partner)",
    transaction: "BP",
    chefeHugoDialog: "Antes de fechar um grande contrato, precisamos validar se o cliente NORTEL DISTRIBUIDORA (Cód: 208016) possui a função de cliente SD ativa na Área de Vendas 1000/10/00. Acesse a transação BP para conferir.",
    successFeedback: "Parceiro Comercial 208016 verificado com sucesso no cadastro do SAP S/4HANA! Dados fiscais e áreas de vendas validados.",
    errorFeedback: "Selecione a transação 'BP' e verifique os dados do cliente '208016'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208016",
      material: "MAT-SD-015",
      quantidade: "50",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Parceiro Comercial (Transação BP)",
      concept: "Conceito central no SAP S/4HANA que unifica cadastros de Clientes, Fornecedores e Pessoas Físicas em um único ID.",
      businessImpact: "Garante a consistência de dados entre os módulos de Vendas (SD), Compras (MM) e Financeiro (FI).",
      brazilRule: "Valida obrigatoriamente CNPJ/CPF, Inscrição Estadual e Regime Tributário para emissão de NF-e."
    }
  },
  {
    id: "M20-BP-FUNCOES",
    title: "20. Determinação de Funções de Parceiro",
    transaction: "BP",
    chefeHugoDialog: "A AAM LOGÍSTICA LTDA (Cód: 208015) comprou um lote de produtos, mas solicitou que a entrega seja feita na filial de centro de distribuição (Recebedor da Mercadoria). Valide a função de parceiro na transação BP.",
    successFeedback: "Parceiro Comercial 208015 verificado com sucesso no cadastro do SAP S/4HANA! Dados fiscais e áreas de vendas validados.",
    errorFeedback: "Verifique os dados da transação 'BP' e do cliente '208015'.",
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
      title: "Funções de Parceiro (Partner Functions)",
      concept: "Define os papéis desempenhados na venda: Emissor (SP), Recebedor da Mercadoria (SH), Recebedor da Fatura (BP) e Pagador (PY).",
      businessImpact: "Permite faturar para uma matriz e entregar em filiais logísticas distintas.",
      brazilRule: "Determina o local do fato gerador do transporte e as alíquotas de ICMS interestadual."
    }
  },
  {
    id: "M21-V02-INCOMP",
    title: "21. Análise de Log de Ordens Incompletas (V.02)",
    transaction: "V.02",
    chefeHugoDialog: "Uma ordem criada na VA01 ficou parada no sistema porque o vendedor esqueceu de preencher o Incoterm. Execute a análise na V.02 para identificar a pendência e liberar o documento.",
    successFeedback: "Relatório gerado com sucesso! Nenhuma pendência crítica encontrada para os filtros selecionados.",
    errorFeedback: "Atenção ao processo de correção! Verifique os dados do cliente '208015' e utilize a transação V.02.",
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
      title: "Esquema de Incompletude (Incompleteness Log)",
      concept: "Mecanismo de controle do SAP que bloqueia documentos comercialmente incompletos.",
      businessImpact: "Evita que pedidos sem dados essenciais (ex: condição de pagamento ou frete) sigam para expedição.",
      brazilRule: "Impede a geração de NF-e com campos fiscais obrigatórios ausentes."
    }
  },
  {
    id: "M22-VA05-LISTA",
    title: "22. Relatório de Lista de Ordens de Venda (VA05)",
    transaction: "VA05",
    chefeHugoDialog: "O Gerente Comercial solicitou uma posição de todas as ordens de venda em aberto da AAM Corp para o cliente TECH BRASIL S.A. (Cód: 208017). Acesse o relatório da VA05.",
    successFeedback: "Relatório gerado com sucesso! Nenhuma pendência crítica encontrada para os filtros selecionados.",
    errorFeedback: "Confirme a seleção para o cliente '208017' para listar as ordens correspondentes na VA05.",
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
      title: "Lista de Ordens de Venda (VA05)",
      concept: "Relatório analítico de acompanhamento da carteira de pedidos comerciais por cliente, material ou período.",
      businessImpact: "Oferece visibilidade sobre o volume de vendas pendentes e entregas programadas.",
      brazilRule: "Base para relatórios de compliance fiscal e previsão de arrecadação tributária."
    }
  },
  {
    id: "M23-VA02-ALTERAR",
    title: "23. Modificar Ordem de Venda (VA02)",
    transaction: "VA02",
    chefeHugoDialog: "O cliente AAM LOGÍSTICA LTDA (Cód: 208015) pediu para alterar a condição de pagamento de 30 dias (ZF30) para 60 dias (ZF60) antes do faturamento. Acesse a VA02 e efetue a alteração.",
    successFeedback: "Alteração/Auditoria da Ordem 450000000 realizada com sucesso no sistema.",
    errorFeedback: "Na transação VA02, altere a Condição de Pagamento para 'ZF60'.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208015",
      material: "MAT-SD-015",
      quantidade: "99",
      incoterms: "FOB",
      condPagto: "ZF60"
    },
    f1Help: {
      title: "Modificar Documento de Venda (VA02)",
      concept: "Transação usada para alterar dados operacionais, quantitativos ou comerciais em ordens já gravadas.",
      businessImpact: "Permite ajustes contratuais antes que a remessa ou fatura sejam processadas.",
      brazilRule: "Alterações nos valores antes do faturamento ajustam a base de cálculo tributária da futura NF-e."
    }
  },
  {
    id: "M24-VA03-EXIBIR",
    title: "24. Auditar Fluxo do Documento (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "O departamento de auditoria quer verificar a rastreabilidade do pedido do cliente NORTEL DISTRIBUIDORA (Cód: 208016). Acesse a VA03 e exiba o Fluxo do Documento.",
    successFeedback: "Alteração/Auditoria da Ordem 450000000 realizada com sucesso no sistema.",
    errorFeedback: "Selecione a transação de exibição VA03 e confirme a verificação da ordem para o cliente '208016'.",
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
      title: "Exibir Ordem e Fluxo do Documento (VA03)",
      concept: "Transação de consulta que exibe a ordem de venda e a árvore do fluxo de documentos encadeados.",
      businessImpact: "Garante a rastreabilidade total do processo Order-to-Cash para auditorias internas e externas.",
      brazilRule: "Permite vincular o número da ordem ao protocolo de autorização do documento fiscal SEFAZ."
    }
  },
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
    successFeedback: "Documento de Remessa 800000000 criado com sucesso para o Pedido 450000000!",
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
    successFeedback: "Documento de Remessa 800000000 criado com sucesso para o Pedido 450000000!",
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
    successFeedback: "Documento de Remessa 800000000 criado com sucesso para o Pedido 450000000!",
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
  },
  {
    id: "M16-VF01-STD",
    title: "16. Faturamento Standard de Remessa (NF-e)",
    transaction: "VF01",
    chefeHugoDialog: "A remessa da AAM LOGÍSTICA LTDA (Cód: 208015) foi entregue! Transição para a VF01 para processar o faturamento e emitir a Nota Fiscal Eletrônica (NF-e).",
    successFeedback: "Fatura/NF-e 900000000 emitida com sucesso para o documento 800000000!",
    errorFeedback: "Para faturar a operação standard, selecione a transação 'VF01' e confirme os dados da ordem para o cliente '208015'.",
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
      title: "Criar Fatura (VF01)",
      concept: "Transação do módulo SD/FI que consolida os dados de vendas e expedição para gerar a cobrança ao cliente.",
      businessImpact: "Gera o lançamento automático na conta de Clientes a Receber (FI-AR) e atualiza a receita bruta.",
      brazilRule: "Dispara a comunicação via Schema XML com a SEFAZ para autorização do protocolo da NF-e e DANFE."
    }
  },
  {
    id: "M17-VF01-CANCL",
    title: "17. Cancelamento / Estorno de Fatura (VF11)",
    transaction: "VF01",
    chefeHugoDialog: "Atenção! Houve divergência no valor do frete negociado com a NORTEL DISTRIBUIDORA (Cód: 208016). Crie o estorno do faturamento na transação de cancelamento (VF11).",
    successFeedback: "Fatura/NF-e 900000000 emitida com sucesso para o documento 800000000!",
    errorFeedback: "Atenção à operação de cancelamento! Verifique a seleção da transação e os dados do cliente '208016'.",
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
      title: "Estorno de Faturamento (VF11)",
      concept: "Processo que anula os efeitos contábeis e fiscais de uma fatura emitida com divergência.",
      businessImpact: "Reverte o lançamento de Contas a Receber e libera a remessa para re-faturamento correto.",
      brazilRule: "Exige o envio do evento de Cancelamento de NF-e respeitando o prazo legal estabelecido pela SEFAZ."
    }
  },
  {
    id: "M18-VF01-SERVICO",
    title: "18. Faturamento Direct Drive de Serviços (NFS-e)",
    transaction: "VF01",
    chefeHugoDialog: "A consultoria técnica prestada para a TECH BRASIL S.A. (Cód: 208017) foi concluída. Processe o faturamento direto da ordem de serviços (MAT-SD-099).",
    successFeedback: "Fatura/NF-e 900000000 emitida com sucesso para o documento 450000000!",
    errorFeedback: "Selecione o cliente '208017' e o material de serviços 'MAT-SD-099' para concluir o faturamento.",
    expectedData: {
      tipoOrdem: "OR",
      orgVendas: "1000",
      canalDist: "10",
      setorAtiv: "00",
      cliente: "208017",
      material: "MAT-SD-099",
      quantidade: "10",
      incoterms: "FOB",
      condPagto: "ZF30"
    },
    f1Help: {
      title: "Faturamento de Serviços (NFS-e)",
      concept: "Processamento de cobrança para itens intangíveis que não demandam movimentação física em estoque.",
      businessImpact: "Gera a fatura direto a partir da ordem de venda sem passar pela etapa de remessa (VL01N).",
      brazilRule: "Sujeito à retenção na fonte de ISS e tributos federais (PIS/COFINS/CSLL/IRRF) conforme legislação municipal."
    }
  }
];
