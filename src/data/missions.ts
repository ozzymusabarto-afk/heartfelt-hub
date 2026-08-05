export interface Mission {
  id: number;
  name: string;
  transaction: string;
  description: string;
  objective: string;
  correctData: {
    transaction: string;
    orderType: string;
    salesOrg: string;
    customer: string;
    material: string;
    incoterms: string;
    distChannel: string;
  };
  hints: {
    transaction: string;
    orderType: string;
    salesOrg: string;
    customer: string;
    material: string;
    incoterms: string;
    distChannel: string;
  };
  businessImpact: {
    success: string;
    error: string;
  };
}

export const missions: Mission[] = [
  {
    id: 1,
    name: "Criação de Ordem de Venda Padrão",
    transaction: "VA01",
    description: "O cliente AAM LOGÍSTICA (200015) solicitou 50 unidades do material MAT-SD-015. A entrega deve ser feita via retirada pelo cliente (FOB).",
    objective: "Registrar a ordem de venda no sistema para iniciar o fluxo logístico.",
    correctData: {
      transaction: "VA01",
      orderType: "OR",
      salesOrg: "1000",
      customer: "200015",
      material: "MAT-SD-015",
      incoterms: "FOB",
      distChannel: "10"
    },
    hints: {
      transaction: "Para criar ordens de venda, usamos a VA01 no SAP GUI.",
      orderType: "OR significa 'Standard Order' (Ordem Padrão).",
      salesOrg: "A AAM Corp utiliza a organização de vendas 1000 para vendas domésticas.",
      customer: "O código do cliente AAM LOGÍSTICA é 200015.",
      material: "O código do produto solicitado é MAT-SD-015.",
      incoterms: "FOB (Free On Board) indica que o comprador assume a responsabilidade no embarque.",
      distChannel: "Canal 10 é para Venda Direta."
    },
    businessImpact: {
      success: "Excelente! Ordem criada. O estoque foi reservado no MM e a logística já recebeu o alerta de separação (Picking).",
      error: "Erro crítico! A falha no preenchimento pode causar atrasos na SEFAZ e prejuízos com fretes não planejados."
    }
  },
  {
    id: 2,
    name: "Ordem de Amostra Grátis",
    transaction: "VA01",
    description: "Um novo cliente em potencial solicitou uma amostra do material MAT-SD-015 para testes de qualidade. Use o tipo de ordem FD.",
    objective: "Processar a remessa de amostra gratuita garantindo a isenção de impostos.",
    correctData: {
      transaction: "VA01",
      orderType: "FD",
      salesOrg: "1000",
      customer: "300045",
      material: "MAT-SD-015",
      incoterms: "CIF",
      distChannel: "10"
    },
    hints: {
      transaction: "Mesmo para amostras, iniciamos na VA01.",
      orderType: "Use FD para 'Delivery Free of Charge' (Amostra Grátis).",
      salesOrg: "Mantenha a Org. 1000.",
      customer: "O cliente prospect é o 300045.",
      material: "O material é o mesmo: MAT-SD-015.",
      incoterms: "Como é brinde, nós pagamos o frete (CIF).",
      distChannel: "Canal 10."
    },
    businessImpact: {
      success: "Amostra registrada! A integração contábil tratará isso como despesa de marketing, não como receita de vendas.",
      error: "Cuidado! Usar o tipo de ordem errado (OR) cobraria o cliente indevidamente, gerando atrito comercial."
    }
  },
  {
    id: 3,
    name: "Venda para Exportação",
    transaction: "VA01",
    description: "Venda internacional do material MAT-SD-EX para cliente no exterior. Exige Canal 20 (Exportação) e Incoterm EXW.",
    objective: "Configurar a ordem para cumprir as normas de comércio exterior.",
    correctData: {
      transaction: "VA01",
      orderType: "OR",
      salesOrg: "1000",
      customer: "900088",
      material: "MAT-SD-EX",
      incoterms: "EXW",
      distChannel: "20"
    },
    hints: {
      transaction: "VA01.",
      orderType: "OR.",
      salesOrg: "1000.",
      customer: "Cliente internacional: 900088.",
      material: "Material de exportação: MAT-SD-EX.",
      incoterms: "EXW (Ex Works) - Cliente retira na fábrica.",
      distChannel: "Canal 20 é exclusivo para Exportação."
    },
    businessImpact: {
      success: "Exportação validada! O sistema aplicará a imunidade tributária de IPI/ICMS conforme a legislação vigente.",
      error: "Erro grave! O uso do canal de venda incorreto resultaria em tributação indevida e problemas com a Receita Federal."
    }
  }
];
