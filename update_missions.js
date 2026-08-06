import fs from 'fs';

const MISSIONS_FILE = 'src/data/missions.ts';

const missions25to40 = [
  // 25-28: BP
  {
    id: "M025-BP",
    title: "25. Trainee - Funções de Parceiro (BP)",
    transaction: "BP",
    chefeHugoDialog: "Hugo aqui! Verifique se o Cliente 208015 possui a função de Emissor da Ordem (SP) ativa para a Org. Vendas 1000. Use o material MAT-SD-015 com Qtd 25 para validar o acesso.",
    successFeedback: "Excelente! A função SP (Sold-to Party) é a base de qualquer ordem de venda.",
    errorFeedback: "Falha na verificação. O cliente 208015 deve estar associado à Org. 1000 e canal 10.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "25", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica BP: Funções", concept: "Funções de parceiro definem os papéis (quem compra, quem recebe, quem paga).", businessImpact: "Sem a função SP, o sistema bloqueia a criação de ordens.", brazilRule: "No Brasil, o CNPJ deve estar vinculado à função SP para emissão de documentos fiscais." }
  },
  {
    id: "M026-BP",
    title: "26. Trainee - Funções de Parceiro (BP)",
    transaction: "BP",
    chefeHugoDialog: "Consultor, valide se o Cliente 208016 está configurado como Destinatário das Mercadorias (SH). Verifique a Org. Vendas 1000 e use Material MAT-SD-015 (Qtd 26).",
    successFeedback: "Correto! A função SH (Ship-to Party) determina o local físico de entrega.",
    errorFeedback: "Dados incorretos. Verifique se usou o Cliente 208016 e a quantidade 26.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208016", material: "MAT-SD-015", quantidade: "26", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica BP: SH", concept: "O Destinatário (SH) pode ser diferente do Emissor (SP) caso o cliente tenha várias filiais.", businessImpact: "Garante que a logística entregue no armazém correto.", brazilRule: "O endereço do SH define o cálculo do ICMS Interestadual (DIFAL)." }
  },
  {
    id: "M027-BP",
    title: "27. Trainee - Funções de Parceiro (BP)",
    transaction: "BP",
    chefeHugoDialog: "Preciso confirmar o Pagador (PY) para o Cliente 208017. Acesse BP, valide a Org. 1000 e use MAT-SD-020 com Qtd 27 para o teste técnico.",
    successFeedback: "Sucesso! A função PY (Payer) é essencial para o fluxo financeiro.",
    errorFeedback: "Verificação falhou. Cheque o cliente 208017 e o material MAT-SD-020.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208017", material: "MAT-SD-020", quantidade: "27", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica BP: PY", concept: "O Pagador (PY) é quem assume a dívida financeira no Contas a Receber (FI-AR).", businessImpact: "Evita inadimplência ao direcionar a cobrança para a entidade correta.", brazilRule: "O PY deve ter dados bancários e instruções de cobrança (Boleto) válidos." }
  },
  {
    id: "M028-BP",
    title: "28. Trainee - Funções de Parceiro (BP)",
    transaction: "BP",
    chefeHugoDialog: "Hugo solicitando: valide a função de Cobrador (BP) para o Cliente 208015. Use Org. 1000 e Material MAT-SD-020 (Qtd 28).",
    successFeedback: "Perfeito! Todas as quatro funções básicas (SP, SH, PY, BP) foram validadas.",
    errorFeedback: "Erro. O cliente 208015 deve estar com a função BP ativa para este teste.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "28", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica BP: Funções Básicas", concept: "O Cobrador (Bill-to Party) recebe a fatura física/digital.", businessImpact: "Agiliza o recebimento de documentos fiscais pelo cliente.", brazilRule: "Fundamental para o envio automático do XML da NF-e ao destinatário." }
  },
  // 29-32: VA03
  {
    id: "M029-VA03",
    title: "29. Trainee - Exibição de Ordem (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "O cliente quer consultar a Ordem 45000100. Acesse VA03, verifique o Cliente 208015 e o Material MAT-SD-015 (Qtd 29).",
    successFeedback: "Ordem localizada! A VA03 é sua melhor amiga para auditorias rápidas.",
    errorFeedback: "Não foi possível exibir. Verifique o número da ordem 45000100 e o material.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "29", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA03", concept: "Transação de apenas leitura para visualizar Ordens de Venda.", businessImpact: "Segurança de dados: permite consulta sem risco de alteração acidental.", brazilRule: "Pode ser usada para verificar se o CFOP foi determinado corretamente antes da remessa." }
  },
  {
    id: "M030-VA03",
    title: "30. Trainee - Exibição de Ordem (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "Hugo no controle: cheque os itens da Ordem 45000101. Valide o Cliente 208015 e o Material MAT-SD-015 (Qtd 30).",
    successFeedback: "Itens conferidos. A consistência entre cabeçalho e item é vital.",
    errorFeedback: "Erro na consulta. Certifique-se de usar a Ordem 45000101.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "30", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA03: Itens", concept: "Uma ordem pode ter múltiplos itens com diferentes materiais e prazos.", businessImpact: "Permite rastrear entregas parciais de um mesmo pedido.", brazilRule: "Diferentes itens podem ter diferentes tratamentos fiscais (Ex: Substituição Tributária)." }
  },
  {
    id: "M031-VA03",
    title: "31. Trainee - Exibição de Ordem (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "Preciso validar as quantidades da Ordem 45000102. Cliente 208015, Material MAT-SD-020 (Qtd 31).",
    successFeedback: "Quantidades validadas. No SAP, 'O que foi pedido' deve ser o 'O que foi registrado'.",
    errorFeedback: "Quantidade divergente. Verifique se usou Qtd 31 para a Ordem 45000102.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "31", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA03: Quantidades", concept: "A 'Quantidade da Ordem' é o que o cliente solicitou originalmente.", businessImpact: "Afeta o planejamento de produção (PP) e estoque (MM).", brazilRule: "A unidade de medida (Ex: UN, PC, KG) deve seguir o padrão da Nota Fiscal." }
  },
  {
    id: "M032-VA03",
    title: "32. Trainee - Exibição de Ordem (VA03)",
    transaction: "VA03",
    chefeHugoDialog: "Última auditoria de VA03: Ordem 45000103. Verifique Cliente 208015 e Material MAT-SD-020 (Qtd 32).",
    successFeedback: "Excelente! Você domina a navegação em ordens de venda.",
    errorFeedback: "Falha na auditoria. Cheque a Ordem 45000103 e o material MAT-SD-020.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "32", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA03: Conclusão", concept: "Visualizar o status global da ordem ajuda a identificar bloqueios de crédito.", businessImpact: "Reduz chamados de suporte ao permitir que o comercial consulte seus próprios pedidos.", brazilRule: "Verifique o status de aprovação de crédito para pedidos acima do limite permitido." }
  },
  // 33-36: VL03N
  {
    id: "M033-VL03N",
    title: "33. Trainee - Fluxo de Documentos (VL03N)",
    transaction: "VL03N",
    chefeHugoDialog: "A logística quer saber sobre a Remessa vinculada à Ordem. Acesse VL03N para o Cliente 208015, Material MAT-SD-015 (Qtd 33).",
    successFeedback: "Remessa localizada! O fluxo de documentos SAP é a 'árvore genealógica' do seu processo.",
    errorFeedback: "Remessa não encontrada. Use VL03N e os dados do enunciado.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "33", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VL03N", concept: "Exibe o documento de Entrega/Remessa (Outbound Delivery).", businessImpact: "Permite saber se a carga já saiu do armazém.", brazilRule: "O número da remessa é o passo anterior à geração do Manifesto de Carga (MDF-e)." }
  },
  {
    id: "M034-VL03N",
    title: "34. Trainee - Fluxo de Documentos (VL03N)",
    transaction: "VL03N",
    chefeHugoDialog: "Hugo falando: verifique o status da expedição na VL03N. Use Cliente 208015 e MAT-SD-015 (Qtd 34).",
    successFeedback: "Status OK! Sem remessa, não há faturamento. Você garantiu a continuidade do fluxo.",
    errorFeedback: "Erro no status. Verifique se selecionou a transação VL03N corretamente.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "34", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VL03N: Status", concept: "Indica se o picking (separação) e o post goods issue (PGI) foram feitos.", businessImpact: "Evita faturar produtos que ainda não foram separados fisicamente.", brazilRule: "O PGI (Baixa de Estoque) é o gatilho contábil para o custo da mercadoria vendida (CPV)." }
  },
  {
    id: "M035-VL03N",
    title: "35. Trainee - Fluxo de Documentos (VL03N)",
    transaction: "VL03N",
    chefeHugoDialog: "Consulte o documento de saída vinculada ao Cliente 208015. Use MAT-SD-020 (Qtd 35) na VL03N.",
    successFeedback: "Documento de saída validado. A integração SD-LE (Logistics Execution) está operando.",
    errorFeedback: "Falha na VL03N. Cheque o material MAT-SD-020 e a quantidade 35.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "35", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VL03N: Integração", concept: "A VL03N conecta as vendas ao armazém (WM/EWM).", businessImpact: "Garante que a quantidade vendida é a mesma que está sendo enviada.", brazilRule: "A conferência física na expedição evita multas por divergência em barreiras fiscais." }
  },
  {
    id: "M036-VL03N",
    title: "36. Trainee - Fluxo de Documentos (VL03N)",
    transaction: "VL03N",
    chefeHugoDialog: "Hugo precisa de agilidade! Valide a última remessa do dia. Cliente 208015, Material MAT-SD-020 (Qtd 36).",
    successFeedback: "Excelente agilidade! Você fechou o ciclo de consultas logísticas.",
    errorFeedback: "Erro na missão 36. Verifique os dados e a transação VL03N.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "36", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VL03N: Fluxo", concept: "Pode-se acessar o fluxo de documentos diretamente de dentro da VL03N.", businessImpact: "Visibilidade ponta-a-ponta (Order-to-Cash).", brazilRule: "No Brasil, o DANFE deve acompanhar a mercadoria logo após a remessa ser faturada." }
  },
  // 37-40: VA05 / VF03
  {
    id: "M037-VA05",
    title: "37. Trainee - Relatório de Vendas (VA05)",
    transaction: "VA05",
    chefeHugoDialog: "Extraia a lista de ordens em aberto para o Cliente 208015. Use MAT-SD-015 (Qtd 37) como parâmetro de validação.",
    successFeedback: "Relatório gerado! A VA05 é essencial para o controle de backlog.",
    errorFeedback: "Falha ao gerar relatório. Verifique a transação VA05 e os dados informados.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "37", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA05", concept: "Lista de ordens de venda com diversos filtros (cliente, material, data).", businessImpact: "Identifica pedidos 'esquecidos' que precisam de ação imediata.", brazilRule: "Permite monitorar se há pedidos sem Nota Fiscal emitida após o prazo legal." }
  },
  {
    id: "M038-VA05",
    title: "38. Trainee - Relatório de Vendas (VA05)",
    transaction: "VA05",
    chefeHugoDialog: "Hugo pede: liste todas as vendas da Org. 1000 para o Cliente 208015. Use Material MAT-SD-015 (Qtd 38).",
    successFeedback: "Lista completa! O comercial agradece pela rapidez.",
    errorFeedback: "Dados incorretos. Verifique Cliente 208015 e Qtd 38 na VA05.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-015", quantidade: "38", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VA05: Filtros", concept: "Use filtros de 'Documentos em Aberto' para focar no que falta entregar.", businessImpact: "Melhora o fluxo de caixa ao agilizar o faturamento pendente.", brazilRule: "Filtre por 'Tipo de Ordem' para separar vendas de bonificações e devoluções." }
  },
  {
    id: "M039-VF03",
    title: "39. Trainee - Exibição de Fatura (VF03)",
    transaction: "VF03",
    chefeHugoDialog: "Vamos para a parte financeira! Exiba a fatura do Cliente 208015. Use MAT-SD-020 (Qtd 39) na VF03.",
    successFeedback: "Fatura exibida. A VF03 mostra o resultado final do nosso trabalho: a cobrança.",
    errorFeedback: "Erro ao exibir fatura. Verifique se usou a transação VF03 e o material MAT-SD-020.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "39", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VF03", concept: "Exibição de documentos de faturamento (Invoices).", businessImpact: "Garante que o valor cobrado reflete as condições comerciais pactuadas.", brazilRule: "Na VF03, você pode visualizar a Nota Fiscal Eletrônica (aba Brazil) e os impostos calculados." }
  },
  {
    id: "M040-VF03",
    title: "40. Trainee - Exibição de Fatura (VF03)",
    transaction: "VF03",
    chefeHugoDialog: "Missão Final do Nível Trainee! Valide o valor total da última fatura. Cliente 208015, Material MAT-SD-020 (Qtd 40).",
    successFeedback: "Parabéns! Você concluiu o Nível Trainee com excelência. A AAM LOGÍSTICA agora tem um(a) consultor(a) preparado(a)!",
    errorFeedback: "Falha na missão final. Verifique os dados e tente novamente para conquistar o título de Júnior.",
    expectedData: { tipoOrdem: "OR", orgVendas: "1000", canalDist: "10", setorAtiv: "00", cliente: "208015", material: "MAT-SD-020", quantidade: "40", incoterms: "FOB", condPagto: "ZF30" },
    f1Help: { title: "Dica VF03: Finalização", concept: "A fatura encerra o ciclo de SD e inicia o ciclo de FI.", businessImpact: "Sem erro na fatura, o cliente paga no prazo e a empresa cresce.", brazilRule: "Valide se o número do protocolo da SEFAZ está presente no documento de faturamento." }
  }
];

const content = fs.readFileSync(MISSIONS_FILE, 'utf8');

// Identify the block from M025 to M040.
// We know M024 ends at a certain point.
const lines = content.split('\n');
const startIndex = lines.findIndex(l => l.includes('"id": "M025-VA05"')) - 1; // Start of the { object
const endIndex = lines.findIndex(l => l.includes('"id": "M040-VA05"'));

if (startIndex > 0 && endIndex > 0) {
  // Find the end of M040 object
  let actualEndIndex = -1;
  let braceCount = 0;
  for (let i = endIndex; i < lines.length; i++) {
    if (lines[i].includes('{')) braceCount++;
    if (lines[i].includes('}')) braceCount--;
    if (braceCount === -1 || (braceCount === 0 && lines[i].trim() === '},')) {
        actualEndIndex = i;
        break;
    }
  }

  if (actualEndIndex !== -1) {
    const formattedMissions = missions25to40.map(m => `  ${JSON.stringify(m, null, 4)}`).join(',\n');
    lines.splice(startIndex, actualEndIndex - startIndex + 1, formattedMissions + ',');
    fs.writeFileSync(MISSIONS_FILE, lines.join('\n'));
    console.log('Missões 25 a 40 atualizadas com sucesso.');
  } else {
    console.error('Não foi possível encontrar o fim do bloco de missões.');
  }
} else {
  console.error('Missão 25 ou 40 não encontradas.');
}
