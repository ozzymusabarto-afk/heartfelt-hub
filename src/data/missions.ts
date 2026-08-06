export interface Mission {
  id: string;
  title: string;
  transaction: string;
  requiredTransactions?: string[]; // Para fluxos encadeados (ex: ['BP', 'VA01'])
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
    [key: string]: string; // Permitir chaves dinâmicas sem erro de tipo
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
},
  {
    "id": "M003-BP",
    "title": "03. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 13). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "13",
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
  {
    "id": "M004-BP",
    "title": "04. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 14). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "14",
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
  {
    "id": "M005-BP",
    "title": "05. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 15). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "15",
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
  {
    "id": "M006-BP",
    "title": "06. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 16). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "16",
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
  {
    "id": "M007-BP",
    "title": "07. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 17). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "17",
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
  {
    "id": "M008-BP",
    "title": "08. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 18). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "18",
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
  {
    "id": "M009-BP",
    "title": "09. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 19). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "19",
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
  {
    "id": "M010-BP",
    "title": "10. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 20). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "20",
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
  {
    "id": "M011-BP",
    "title": "11. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 21). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "21",
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
  {
    "id": "M012-BP",
    "title": "12. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 22). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "22",
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
  {
    "id": "M013-BP",
    "title": "13. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 23). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "23",
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
  {
    "id": "M014-BP",
    "title": "14. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 24). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "24",
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
  {
    "id": "M015-BP",
    "title": "15. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 25). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "25",
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
  {
    "id": "M016-BP",
    "title": "16. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 26). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "26",
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
  {
    "id": "M017-BP",
    "title": "17. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 27). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "27",
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
  {
    "id": "M018-BP",
    "title": "18. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 28). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "28",
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
  {
    "id": "M019-BP",
    "title": "19. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 29). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "29",
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
  {
    "id": "M020-BP",
    "title": "20. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 30). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "30",
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
  {
    "id": "M021-VA05",
    "title": "21. Trainee - Relatório de Ordens (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Preciso de um relatório atualizado das ordens de venda pendentes. Acesse a transação VA05 e verifique as ordens do cliente 208015 para o material MAT-SD-015. Use a quantidade 31 como filtro de verificação técnica.",
    "successFeedback": "Relatório gerado com sucesso! A visibilidade das ordens é crucial para a gestão da carteira da AAM LOGÍSTICA.",
    "errorFeedback": "Erro ao acessar o relatório. Verifique se a transação selecionada é a VA05 e se os filtros de cliente e material estão corretos.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "31",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: VA05 (Lista de Ordens)",
        "concept": "A transação VA05 permite visualizar uma lista de documentos de vendas por cliente, material ou período.",
        "businessImpact": "Ajuda o setor comercial a identificar pedidos que ainda não foram faturados ou que possuem bloqueios de remessa.",
        "brazilRule": "Relatórios de vendas no Brasil costumam incluir a chave de acesso da NF-e para fins de rastreabilidade fiscal."
    }
},
  {
    "id": "M022-VA05",
    "title": "22. Trainee - Relatório de Ordens (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Preciso de um relatório atualizado das ordens de venda pendentes. Acesse a transação VA05 e verifique as ordens do cliente 208015 para o material MAT-SD-015. Use a quantidade 32 como filtro de verificação técnica.",
    "successFeedback": "Relatório gerado com sucesso! A visibilidade das ordens é crucial para a gestão da carteira da AAM LOGÍSTICA.",
    "errorFeedback": "Erro ao acessar o relatório. Verifique se a transação selecionada é a VA05 e se os filtros de cliente e material estão corretos.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "32",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: VA05 (Lista de Ordens)",
        "concept": "A transação VA05 permite visualizar uma lista de documentos de vendas por cliente, material ou período.",
        "businessImpact": "Ajuda o setor comercial a identificar pedidos que ainda não foram faturados ou que possuem bloqueios de remessa.",
        "brazilRule": "Relatórios de vendas no Brasil costumam incluir a chave de acesso da NF-e para fins de rastreabilidade fiscal."
    }
},
  {
    "id": "M023-VA05",
    "title": "23. Trainee - Relatório de Ordens (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Preciso de um relatório atualizado das ordens de venda pendentes. Acesse a transação VA05 e verifique as ordens do cliente 208015 para o material MAT-SD-015. Use a quantidade 33 como filtro de verificação técnica.",
    "successFeedback": "Relatório gerado com sucesso! A visibilidade das ordens é crucial para a gestão da carteira da AAM LOGÍSTICA.",
    "errorFeedback": "Erro ao acessar o relatório. Verifique se a transação selecionada é a VA05 e se os filtros de cliente e material estão corretos.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "33",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: VA05 (Lista de Ordens)",
        "concept": "A transação VA05 permite visualizar uma lista de documentos de vendas por cliente, material ou período.",
        "businessImpact": "Ajuda o setor comercial a identificar pedidos que ainda não foram faturados ou que possuem bloqueios de remessa.",
        "brazilRule": "Relatórios de vendas no Brasil costumam incluir a chave de acesso da NF-e para fins de rastreabilidade fiscal."
    }
},
  {
    "id": "M024-VA05",
    "title": "24. Trainee - Relatório de Ordens (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Preciso de um relatório atualizado das ordens de venda pendentes. Acesse a transação VA05 e verifique as ordens do cliente 208015 para o material MAT-SD-015. Use a quantidade 34 como filtro de verificação técnica.",
    "successFeedback": "Relatório gerado com sucesso! A visibilidade das ordens é crucial para a gestão da carteira da AAM LOGÍSTICA.",
    "errorFeedback": "Erro ao acessar o relatório. Verifique se a transação selecionada é a VA05 e se os filtros de cliente e material estão corretos.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "34",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito SAP: VA05 (Lista de Ordens)",
        "concept": "A transação VA05 permite visualizar uma lista de documentos de vendas por cliente, material ou período.",
        "businessImpact": "Ajuda o setor comercial a identificar pedidos que ainda não foram faturados ou que possuem bloqueios de remessa.",
        "brazilRule": "Relatórios de vendas no Brasil costumam incluir a chave de acesso da NF-e para fins de rastreabilidade fiscal."
    }
},
  {
    "id": "M025-BP",
    "title": "25. Trainee - Funções de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Hugo aqui! Verifique se o Cliente 208015 possui a função de Emissor da Ordem (SP) ativa para a Org. Vendas 1000. Use o material MAT-SD-015 com Qtd 25 para validar o acesso.",
    "successFeedback": "Excelente! A função SP (Sold-to Party) é a base de qualquer ordem de venda.",
    "errorFeedback": "Falha na verificação. O cliente 208015 deve estar associado à Org. 1000 e canal 10.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "25",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica BP: Funções",
        "concept": "Funções de parceiro definem os papéis (quem compra, quem recebe, quem paga).",
        "businessImpact": "Sem a função SP, o sistema bloqueia a criação de ordens.",
        "brazilRule": "No Brasil, o CNPJ deve estar vinculado à função SP para emissão de documentos fiscais."
    }
},
  {
    "id": "M026-BP",
    "title": "26. Trainee - Funções de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Consultor, valide se o Cliente 208016 está configurado como Destinatário das Mercadorias (SH). Verifique a Org. Vendas 1000 e use Material MAT-SD-015 (Qtd 26).",
    "successFeedback": "Correto! A função SH (Ship-to Party) determina o local físico de entrega.",
    "errorFeedback": "Dados incorretos. Verifique se usou o Cliente 208016 e a quantidade 26.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208016",
        "materialCode": "MAT-SD-015",
        "quantidade": "26",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica BP: SH",
        "concept": "O Destinatário (SH) pode ser diferente do Emissor (SP) caso o cliente tenha várias filiais.",
        "businessImpact": "Garante que a logística entregue no armazém correto.",
        "brazilRule": "O endereço do SH define o cálculo do ICMS Interestadual (DIFAL)."
    }
},
  {
    "id": "M027-BP",
    "title": "27. Trainee - Funções de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Preciso confirmar o Pagador (PY) para o Cliente 208017. Acesse BP, valide a Org. 1000 e use MAT-SD-020 com Qtd 27 para o teste técnico.",
    "successFeedback": "Sucesso! A função PY (Payer) é essencial para o fluxo financeiro.",
    "errorFeedback": "Verificação falhou. Cheque o cliente 208017 e o material MAT-SD-020.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208017",
        "materialCode": "MAT-SD-020",
        "quantidade": "27",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica BP: PY",
        "concept": "O Pagador (PY) é quem assume a dívida financeira no Contas a Receber (FI-AR).",
        "businessImpact": "Evita inadimplência ao direcionar a cobrança para a entidade correta.",
        "brazilRule": "O PY deve ter dados bancários e instruções de cobrança (Boleto) válidos."
    }
},
  {
    "id": "M028-BP",
    "title": "28. Trainee - Funções de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Hugo solicitando: valide a função de Cobrador (BP) para o Cliente 208015. Use Org. 1000 e Material MAT-SD-020 (Qtd 28).",
    "successFeedback": "Perfeito! Todas as quatro funções básicas (SP, SH, PY, BP) foram validadas.",
    "errorFeedback": "Erro. O cliente 208015 deve estar com a função BP ativa para este teste.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "28",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica BP: Funções Básicas",
        "concept": "O Cobrador (Bill-to Party) recebe a fatura física/digital.",
        "businessImpact": "Agiliza o recebimento de documentos fiscais pelo cliente.",
        "brazilRule": "Fundamental para o envio automático do XML da NF-e ao destinatário."
    }
},
  {
    "id": "M029-VA03",
    "title": "29. Trainee - Exibição de Ordem (VA03)",
    "transaction": "VA03",
    "chefeHugoDialog": "O cliente quer consultar a Ordem 45000100. Acesse VA03, verifique o Cliente 208015 e o Material MAT-SD-015 (Qtd 29).",
    "successFeedback": "Ordem localizada! A VA03 é sua melhor amiga para auditorias rápidas.",
    "errorFeedback": "Não foi possível exibir. Verifique o número da ordem 45000100 e o material.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "29",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA03",
        "concept": "Transação de apenas leitura para visualizar Ordens de Venda.",
        "businessImpact": "Segurança de dados: permite consulta sem risco de alteração acidental.",
        "brazilRule": "Pode ser usada para verificar se o CFOP foi determinado corretamente antes da remessa."
    }
},
  {
    "id": "M030-VA03",
    "title": "30. Trainee - Exibição de Ordem (VA03)",
    "transaction": "VA03",
    "chefeHugoDialog": "Hugo no controle: cheque os itens da Ordem 45000101. Valide o Cliente 208015 e o Material MAT-SD-015 (Qtd 30).",
    "successFeedback": "Itens conferidos. A consistência entre cabeçalho e item é vital.",
    "errorFeedback": "Erro na consulta. Certifique-se de usar a Ordem 45000101.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "30",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA03: Itens",
        "concept": "Uma ordem pode ter múltiplos itens com diferentes materiais e prazos.",
        "businessImpact": "Permite rastrear entregas parciais de um mesmo pedido.",
        "brazilRule": "Diferentes itens podem ter diferentes tratamentos fiscais (Ex: Substituição Tributária)."
    }
},
  {
    "id": "M031-VA03",
    "title": "31. Trainee - Exibição de Ordem (VA03)",
    "transaction": "VA03",
    "chefeHugoDialog": "Preciso validar as quantidades da Ordem 45000102. Cliente 208015, Material MAT-SD-020 (Qtd 31).",
    "successFeedback": "Quantidades validadas. No SAP, 'O que foi pedido' deve ser o 'O que foi registrado'.",
    "errorFeedback": "Quantidade divergente. Verifique se usou Qtd 31 para a Ordem 45000102.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "31",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA03: Quantidades",
        "concept": "A 'Quantidade da Ordem' é o que o cliente solicitou originalmente.",
        "businessImpact": "Afeta o planejamento de produção (PP) e estoque (MM).",
        "brazilRule": "A unidade de medida (Ex: UN, PC, KG) deve seguir o padrão da Nota Fiscal."
    }
},
  {
    "id": "M032-VA03",
    "title": "32. Trainee - Exibição de Ordem (VA03)",
    "transaction": "VA03",
    "chefeHugoDialog": "Última auditoria de VA03: Ordem 45000103. Verifique Cliente 208015 e Material MAT-SD-020 (Qtd 32).",
    "successFeedback": "Excelente! Você domina a navegação em ordens de venda.",
    "errorFeedback": "Falha na auditoria. Cheque a Ordem 45000103 e o material MAT-SD-020.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "32",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA03: Conclusão",
        "concept": "Visualizar o status global da ordem ajuda a identificar bloqueios de crédito.",
        "businessImpact": "Reduz chamados de suporte ao permitir que o comercial consulte seus próprios pedidos.",
        "brazilRule": "Verifique o status de aprovação de crédito para pedidos acima do limite permitido."
    }
},
  {
    "id": "M033-VL03N",
    "title": "33. Trainee - Fluxo de Documentos (VL03N)",
    "transaction": "VL03N",
    "chefeHugoDialog": "A logística quer saber sobre a Remessa vinculada à Ordem. Acesse VL03N para o Cliente 208015, Material MAT-SD-015 (Qtd 33).",
    "successFeedback": "Remessa localizada! O fluxo de documentos SAP é a 'árvore genealógica' do seu processo.",
    "errorFeedback": "Remessa não encontrada. Use VL03N e os dados do enunciado.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "33",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VL03N",
        "concept": "Exibe o documento de Entrega/Remessa (Outbound Delivery).",
        "businessImpact": "Permite saber se a carga já saiu do armazém.",
        "brazilRule": "O número da remessa é o passo anterior à geração do Manifesto de Carga (MDF-e)."
    }
},
  {
    "id": "M034-VL03N",
    "title": "34. Trainee - Fluxo de Documentos (VL03N)",
    "transaction": "VL03N",
    "chefeHugoDialog": "Hugo falando: verifique o status da expedição na VL03N. Use Cliente 208015 e MAT-SD-015 (Qtd 34).",
    "successFeedback": "Status OK! Sem remessa, não há faturamento. Você garantiu a continuidade do fluxo.",
    "errorFeedback": "Erro no status. Verifique se selecionou a transação VL03N corretamente.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "34",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VL03N: Status",
        "concept": "Indica se o picking (separação) e o post goods issue (PGI) foram feitos.",
        "businessImpact": "Evita faturar produtos que ainda não foram separados fisicamente.",
        "brazilRule": "O PGI (Baixa de Estoque) é o gatilho contábil para o custo da mercadoria vendida (CPV)."
    }
},
  {
    "id": "M035-VL03N",
    "title": "35. Trainee - Fluxo de Documentos (VL03N)",
    "transaction": "VL03N",
    "chefeHugoDialog": "Consulte o documento de saída vinculada ao Cliente 208015. Use MAT-SD-020 (Qtd 35) na VL03N.",
    "successFeedback": "Documento de saída validado. A integração SD-LE (Logistics Execution) está operando.",
    "errorFeedback": "Falha na VL03N. Cheque o material MAT-SD-020 e a quantidade 35.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "35",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VL03N: Integração",
        "concept": "A VL03N conecta as vendas ao armazém (WM/EWM).",
        "businessImpact": "Garante que a quantidade vendida é a mesma que está sendo enviada.",
        "brazilRule": "A conferência física na expedição evita multas por divergência em barreiras fiscais."
    }
},
  {
    "id": "M036-VL03N",
    "title": "36. Trainee - Fluxo de Documentos (VL03N)",
    "transaction": "VL03N",
    "chefeHugoDialog": "Hugo precisa de agilidade! Valide a última remessa do dia. Cliente 208015, Material MAT-SD-020 (Qtd 36).",
    "successFeedback": "Excelente agilidade! Você fechou o ciclo de consultas logísticas.",
    "errorFeedback": "Erro na missão 36. Verifique os dados e a transação VL03N.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "36",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VL03N: Fluxo",
        "concept": "Pode-se acessar o fluxo de documentos diretamente de dentro da VL03N.",
        "businessImpact": "Visibilidade ponta-a-ponta (Order-to-Cash).",
        "brazilRule": "No Brasil, o DANFE deve acompanhar a mercadoria logo após a remessa ser faturada."
    }
},
  {
    "id": "M037-VA05",
    "title": "37. Trainee - Relatório de Vendas (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Extraia a lista de ordens em aberto para o Cliente 208015. Use MAT-SD-015 (Qtd 37) como parâmetro de validação.",
    "successFeedback": "Relatório gerado! A VA05 é essencial para o controle de backlog.",
    "errorFeedback": "Falha ao gerar relatório. Verifique a transação VA05 e os dados informados.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "37",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA05",
        "concept": "Lista de ordens de venda com diversos filtros (cliente, material, data).",
        "businessImpact": "Identifica pedidos 'esquecidos' que precisam de ação imediata.",
        "brazilRule": "Permite monitorar se há pedidos sem Nota Fiscal emitida após o prazo legal."
    }
},
  {
    "id": "M038-VA05",
    "title": "38. Trainee - Relatório de Vendas (VA05)",
    "transaction": "VA05",
    "chefeHugoDialog": "Hugo pede: liste todas as vendas da Org. 1000 para o Cliente 208015. Use Material MAT-SD-015 (Qtd 38).",
    "successFeedback": "Lista completa! O comercial agradece pela rapidez.",
    "errorFeedback": "Dados incorretos. Verifique Cliente 208015 e Qtd 38 na VA05.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "38",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VA05: Filtros",
        "concept": "Use filtros de 'Documentos em Aberto' para focar no que falta entregar.",
        "businessImpact": "Melhora o fluxo de caixa ao agilizar o faturamento pendente.",
        "brazilRule": "Filtre por 'Tipo de Ordem' para separar vendas de bonificações e devoluções."
    }
},
  {
    "id": "M039-VF03",
    "title": "39. Trainee - Exibição de Fatura (VF03)",
    "transaction": "VF03",
    "chefeHugoDialog": "Vamos para a parte financeira! Exiba a fatura do Cliente 208015. Use MAT-SD-020 (Qtd 39) na VF03.",
    "successFeedback": "Fatura exibida. A VF03 mostra o resultado final do nosso trabalho: a cobrança.",
    "errorFeedback": "Erro ao exibir fatura. Verifique se usou a transação VF03 e o material MAT-SD-020.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "39",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VF03",
        "concept": "Exibição de documentos de faturamento (Invoices).",
        "businessImpact": "Garante que o valor cobrado reflete as condições comerciais pactuadas.",
        "brazilRule": "Na VF03, você pode visualizar a Nota Fiscal Eletrônica (aba Brazil) e os impostos calculados."
    }
},
  {
    "id": "M040-VF03",
    "title": "40. Trainee - Exibição de Fatura (VF03)",
    "transaction": "VF03",
    "chefeHugoDialog": "Missão Final do Nível Trainee! Valide o valor total da última fatura. Cliente 208015, Material MAT-SD-020 (Qtd 40).",
    "successFeedback": "Parabéns! Você concluiu o Nível Trainee com excelência. A AAM LOGÍSTICA agora tem um(a) consultor(a) preparado(a)!",
    "errorFeedback": "Falha na missão final. Verifique os dados e tente novamente para conquistar o título de Júnior.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-020",
        "quantidade": "40",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Dica VF03: Finalização",
        "concept": "A fatura encerra o ciclo de SD e inicia o ciclo de FI.",
        "businessImpact": "Sem erro na fatura, o cliente paga no prazo e a empresa cresce.",
        "brazilRule": "Valide se o número do protocolo da SEFAZ está presente no documento de faturamento."
    }
},
    {
      "id": "M041-VA01",
      "title": "41. Júnior - Cotação (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de cotação. Por favor, crie o documento no sistema. Tipo: QT, Cliente: 208018, Material: MAT-SD-030, Qtd: 91. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Cotação criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "QT",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-030",
          "quantidade": "91",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Cotação",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M042-VA01",
      "title": "42. Júnior - Cotação (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de cotação. Por favor, crie o documento no sistema. Tipo: QT, Cliente: 208015, Material: MAT-SD-015, Qtd: 92. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Cotação criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "QT",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "92",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Cotação",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M043-VA01",
      "title": "43. Júnior - Cotação (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de cotação. Por favor, crie o documento no sistema. Tipo: QT, Cliente: 208016, Material: MAT-SD-020, Qtd: 93. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Cotação criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "QT",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "93",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Cotação",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M044-VA01",
      "title": "44. Júnior - Cotação (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de cotação. Por favor, crie o documento no sistema. Tipo: QT, Cliente: 208018, Material: MAT-SD-030, Qtd: 94. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Cotação criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "QT",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-030",
          "quantidade": "94",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Cotação",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M045-VA01",
      "title": "45. Júnior - Cotação (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de cotação. Por favor, crie o documento no sistema. Tipo: QT, Cliente: 208015, Material: MAT-SD-015, Qtd: 95. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Cotação criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "QT",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "95",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Cotação",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M046-VA01",
      "title": "46. Júnior - Ordem de Venda (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de ordem de venda. Por favor, crie o documento no sistema. Tipo: OR, Cliente: 208016, Material: MAT-SD-020, Qtd: 96. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Ordem de Venda criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "96",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Ordem de Venda",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M047-VA01",
      "title": "47. Júnior - Ordem de Venda (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de ordem de venda. Por favor, crie o documento no sistema. Tipo: OR, Cliente: 208018, Material: MAT-SD-030, Qtd: 97. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Ordem de Venda criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-030",
          "quantidade": "97",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Ordem de Venda",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M048-VA01",
      "title": "48. Júnior - Ordem de Venda (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de ordem de venda. Por favor, crie o documento no sistema. Tipo: OR, Cliente: 208015, Material: MAT-SD-015, Qtd: 98. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Ordem de Venda criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "98",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Ordem de Venda",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M049-VA01",
      "title": "49. Júnior - Ordem de Venda (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de ordem de venda. Por favor, crie o documento no sistema. Tipo: OR, Cliente: 208016, Material: MAT-SD-020, Qtd: 99. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Ordem de Venda criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "99",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Ordem de Venda",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M050-VA01",
      "title": "50. Júnior - Ordem de Venda (VA01)",
      "transaction": "VA01",
      "chefeHugoDialog": "Consultor(a), a AAM LOGÍSTICA recebeu uma solicitação de ordem de venda. Por favor, crie o documento no sistema. Tipo: OR, Cliente: 208018, Material: MAT-SD-030, Qtd: 100. Org. Vendas 1000, Canal 10.",
      "successFeedback": "Ordem de Venda criada com sucesso! O fluxo de vendas da AAM LOGÍSTICA segue operando com eficiência sob sua supervisão Júnior.",
      "errorFeedback": "Erro na criação do documento. Verifique o Tipo de Documento, Cliente e Material conforme solicitado pelo Chefe Hugo.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-030",
          "quantidade": "100",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA01 - Ordem de Venda",
          "concept": "A VA01 inicia o compromisso comercial. Cotações (QT) precedem Ordens (OR).",
          "businessImpact": "Documentos bem criados garantem que a reserva de estoque (ATP) funcione corretamente.",
          "brazilRule": "O tipo de documento determina o código de imposto (Tax Code) que será sugerido pelo sistema."
      }
  },
  {
      "id": "M051-VA02",
      "title": "51. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208016 solicitou alterar a quantidade e validar o item. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-020, nova Qtd 111. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "111",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M052-VA02",
      "title": "52. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208015 solicitou alterar a quantidade e validar o item. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-015, nova Qtd 112. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "112",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M053-VA02",
      "title": "53. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208016 solicitou alterar a quantidade e validar o item. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-020, nova Qtd 113. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "113",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M054-VA02",
      "title": "54. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208015 solicitou alterar a quantidade e validar o item. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-015, nova Qtd 114. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "114",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M055-VA02",
      "title": "55. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208016 solicitou alterar a quantidade e validar o item. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-020, nova Qtd 115. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "115",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M056-VA02",
      "title": "56. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208015 solicitou adicionar um novo item de material. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-015, nova Qtd 116. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "116",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M057-VA02",
      "title": "57. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208016 solicitou adicionar um novo item de material. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-020, nova Qtd 117. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "117",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M058-VA02",
      "title": "58. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208015 solicitou adicionar um novo item de material. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-015, nova Qtd 118. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "118",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M059-VA02",
      "title": "59. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208016 solicitou adicionar um novo item de material. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-020, nova Qtd 119. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-020",
          "quantidade": "119",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M060-VA02",
      "title": "60. Júnior - Modificação de Ordem (VA02)",
      "transaction": "VA02",
      "chefeHugoDialog": "Houve uma mudança nos planos! O cliente 208015 solicitou adicionar um novo item de material. Acesse a VA02 para a Ordem Padrão (OR) e atualize: Material MAT-SD-015, nova Qtd 120. Org. 1000.",
      "successFeedback": "Modificação concluída! Manter as ordens atualizadas é vital para evitar faturamentos incorretos.",
      "errorFeedback": "A alteração não foi processada corretamente. Revise a quantidade ou o material no formulário da VA02.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "120",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: VA02 - Modificações",
          "concept": "A VA02 permite ajustar ordens antes do processamento da remessa.",
          "businessImpact": "Evita devoluções por erro de quantidade ou material errado no pedido.",
          "brazilRule": "Alterações no cabeçalho ou itens podem disparar novo cálculo de impostos (pricing redetermination)."
      }
  },
  {
      "id": "M061-VA02-PRC",
      "title": "61. Júnior - Precificação e Condições (PR00)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição PR00 (Preço Base). Valide os dados da Ordem (OR) para o cliente 208015, Material MAT-SD-015, Qtd 131. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "131",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - PR00",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M062-VA02-PRC",
      "title": "62. Júnior - Precificação e Condições (PR00)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição PR00 (Preço Base). Valide os dados da Ordem (OR) para o cliente 208018, Material MAT-SD-015, Qtd 132. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-015",
          "quantidade": "132",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - PR00",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M063-VA02-PRC",
      "title": "63. Júnior - Precificação e Condições (PR00)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição PR00 (Preço Base). Valide os dados da Ordem (OR) para o cliente 208015, Material MAT-SD-015, Qtd 133. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "133",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - PR00",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M064-VA02-PRC",
      "title": "64. Júnior - Precificação e Condições (PR00)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição PR00 (Preço Base). Valide os dados da Ordem (OR) para o cliente 208018, Material MAT-SD-015, Qtd 134. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-015",
          "quantidade": "134",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - PR00",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M065-VA02-PRC",
      "title": "65. Júnior - Precificação e Condições (PR00)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição PR00 (Preço Base). Valide os dados da Ordem (OR) para o cliente 208015, Material MAT-SD-015, Qtd 135. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "135",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - PR00",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M066-VA02-PRC",
      "title": "66. Júnior - Precificação e Condições (K007)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição K007 (Desconto %). Valide os dados da Ordem (OR) para o cliente 208018, Material MAT-SD-015, Qtd 136. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-015",
          "quantidade": "136",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - K007",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M067-VA02-PRC",
      "title": "67. Júnior - Precificação e Condições (K007)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição K007 (Desconto %). Valide os dados da Ordem (OR) para o cliente 208015, Material MAT-SD-015, Qtd 137. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "137",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - K007",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M068-VA02-PRC",
      "title": "68. Júnior - Precificação e Condições (K007)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição K007 (Desconto %). Valide os dados da Ordem (OR) para o cliente 208018, Material MAT-SD-015, Qtd 138. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-015",
          "quantidade": "138",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - K007",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M069-VA02-PRC",
      "title": "69. Júnior - Precificação e Condições (K007)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição K007 (Desconto %). Valide os dados da Ordem (OR) para o cliente 208015, Material MAT-SD-015, Qtd 139. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-015",
          "quantidade": "139",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - K007",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M070-VA02-PRC",
      "title": "70. Júnior - Precificação e Condições (K007)",
      "transaction": "VA02",
      "chefeHugoDialog": "A equipe comercial da AAM LOGÍSTICA precisa aplicar a condição K007 (Desconto %). Valide os dados da Ordem (OR) para o cliente 208018, Material MAT-SD-015, Qtd 140. Garanta a Org. Vendas 1000.",
      "successFeedback": "Condição de preço aplicada com sucesso! A margem de lucro da operação está garantida.",
      "errorFeedback": "Erro na precificação. Verifique se a condição e os dados da ordem estão consistentes.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208018",
          "materialCode": "MAT-SD-015",
          "quantidade": "140",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: Precificação - K007",
          "concept": "O esquema de cálculo (Pricing Procedure) organiza como os preços e descontos são somados.",
          "businessImpact": "Erros aqui impactam diretamente o lucro e a base de cálculo dos impostos.",
          "brazilRule": "No Brasil, o IPI e ICMS dependem do valor líquido da mercadoria definido nestas condições."
      }
  },
  {
      "id": "M071-VA01-ATP",
      "title": "71. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208016 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 151. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-030",
          "quantidade": "151",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M072-VA01-ATP",
      "title": "72. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208015 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 152. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-030",
          "quantidade": "152",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M073-VA01-ATP",
      "title": "73. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208016 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 153. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-030",
          "quantidade": "153",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M074-VA01-ATP",
      "title": "74. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208015 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 154. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-030",
          "quantidade": "154",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M075-VA01-ATP",
      "title": "75. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208016 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 155. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-030",
          "quantidade": "155",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M076-VA01-ATP",
      "title": "76. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208015 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 156. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-030",
          "quantidade": "156",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M077-VA01-ATP",
      "title": "77. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208016 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 157. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-030",
          "quantidade": "157",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M078-VA01-ATP",
      "title": "78. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208015 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 158. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-030",
          "quantidade": "158",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M079-VA01-ATP",
      "title": "79. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208016 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 159. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208016",
          "materialCode": "MAT-SD-030",
          "quantidade": "159",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
      "id": "M080-VA01-ATP",
      "title": "80. Júnior - Verificação ATP (Disponibilidade)",
      "transaction": "VA01",
      "chefeHugoDialog": "O cliente 208015 precisa de urgência! Verifique a disponibilidade (ATP) para o material MAT-SD-030 na quantidade 160. Processe a Ordem (OR) na Org. 1000 e Canal 10.",
      "successFeedback": "Verificação concluída! O estoque foi confirmado e a data de entrega está garantida no sistema.",
      "errorFeedback": "Erro no ATP. Verifique se a quantidade solicitada e o material estão corretos no formulário.",
      "expectedData": {
          "tipoOrdem": "OR",
          "orgVendas": "1000",
          "canalDist": "10",
          "setorAtiv": "00",
          "partnerCode": "208015",
          "materialCode": "MAT-SD-030",
          "quantidade": "160",
          "headerIncoterms": "FOB",
          "partnerFunction": "ZF30"
      },
      "f1Help": {
          "title": "Dica Júnior: ATP (Available to Promise)",
          "concept": "O ATP verifica se há estoque físico ou ordens de produção para atender o pedido.",
          "businessImpact": "Evita promessas de entrega falsas que geram insatisfação no cliente.",
          "brazilRule": "O local de expedição (Shipping Point) deve estar corretamente configurado para que o ATP funcione."
      }
  },
  {
    "id": "M081-VL01N",
    "title": "081. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 81. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 81.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "81",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M082-VL01N",
    "title": "082. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 82. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 82.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "82",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M083-VL01N",
    "title": "083. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 83. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 83.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "83",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M084-VL01N",
    "title": "084. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 84. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 84.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "84",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M085-VL01N",
    "title": "085. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 85. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 85.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "85",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M086-VL01N",
    "title": "086. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 86. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 86.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "86",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M087-VL01N",
    "title": "087. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 87. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 87.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "87",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M088-VL01N",
    "title": "088. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 88. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 88.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "88",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M089-VL01N",
    "title": "089. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 89. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 89.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "89",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M090-VL01N",
    "title": "090. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 90. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 90.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "90",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M091-VL01N",
    "title": "091. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 91. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 91.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "91",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M092-VL01N",
    "title": "092. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 92. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 92.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "92",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M093-VL01N",
    "title": "093. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 93. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 93.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "93",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M094-VL01N",
    "title": "094. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 94. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 94.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "94",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M095-VL01N",
    "title": "095. Pleno - Expedição e Remessa (VL01N)",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd 95. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
    "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
    "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a 95.",
    "expectedData": {
        "tipoOrdem": "LF",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "95",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VL01N / VL02N",
        "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
        "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
        "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
    }
},
{
    "id": "M096-VF01",
    "title": "096. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 96. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "96",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M097-VF01",
    "title": "097. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 97. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "97",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M098-VF01",
    "title": "098. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 98. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "98",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M099-VF01",
    "title": "099. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 99. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "99",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M100-VF01",
    "title": "100. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 100. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "100",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M101-VF01",
    "title": "101. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 101. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "101",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M102-VF01",
    "title": "102. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 102. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "102",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M103-VF01",
    "title": "103. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 103. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "103",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M104-VF01",
    "title": "104. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 104. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "104",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M105-VF01",
    "title": "105. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 105. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "105",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M106-VF01",
    "title": "106. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 106. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "106",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M107-VF01",
    "title": "107. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 107. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "107",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M108-VF01",
    "title": "108. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 108. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "108",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M109-VF01",
    "title": "109. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 109. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "109",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M110-VF01",
    "title": "110. Pleno - Faturamento F2 (VF01)",
    "transaction": "VF01",
    "chefeHugoDialog": "Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd 110. Verifique se não há bloqueios de faturamento no cabeçalho.",
    "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
    "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
    "expectedData": {
        "tipoOrdem": "F2",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "110",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VF01 (Billing)",
        "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
        "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
        "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
    }
},
{
    "id": "M111-TAX",
    "title": "111. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 6102 para o Cliente 208015. Material MAT-SD-015 (Qtd 111). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 6102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "111",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M112-TAX",
    "title": "112. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 5102 para o Cliente 208015. Material MAT-SD-015 (Qtd 112). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 5102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "112",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M113-TAX",
    "title": "113. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 6102 para o Cliente 208015. Material MAT-SD-015 (Qtd 113). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 6102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "113",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M114-TAX",
    "title": "114. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 5102 para o Cliente 208015. Material MAT-SD-015 (Qtd 114). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 5102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "114",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M115-TAX",
    "title": "115. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 6102 para o Cliente 208015. Material MAT-SD-015 (Qtd 115). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 6102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "115",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M116-TAX",
    "title": "116. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 5102 para o Cliente 208015. Material MAT-SD-015 (Qtd 116). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 5102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "116",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M117-TAX",
    "title": "117. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 6102 para o Cliente 208015. Material MAT-SD-015 (Qtd 117). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 6102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "117",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M118-TAX",
    "title": "118. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 5102 para o Cliente 208015. Material MAT-SD-015 (Qtd 118). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 5102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "118",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M119-TAX",
    "title": "119. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 6102 para o Cliente 208015. Material MAT-SD-015 (Qtd 119). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 6102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "119",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M120-TAX",
    "title": "120. Pleno - Localização Brasil & Impostos",
    "transaction": "VA02",
    "chefeHugoDialog": "Auditoria fiscal! Verifique a determinação do CFOP 5102 para o Cliente 208015. Material MAT-SD-015 (Qtd 120). Cheque as condições BX10 (ICMS) e IPI1.",
    "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
    "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser 5102 e a categoria de imposto deve refletir a operação.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "120",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: Localização Brasil",
        "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
        "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
        "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
    }
},
{
    "id": "M121-VKM1",
    "title": "121. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 121) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "121",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M122-VKM1",
    "title": "122. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 122) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "122",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M123-VKM1",
    "title": "123. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 123) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "123",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M124-VKM1",
    "title": "124. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 124) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "124",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M125-VKM1",
    "title": "125. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 125) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "125",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M126-VKM1",
    "title": "126. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 126) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "126",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M127-VKM1",
    "title": "127. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 127) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "127",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M128-VKM1",
    "title": "128. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 128) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "128",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M129-VKM1",
    "title": "129. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 129) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "129",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
{
    "id": "M130-VKM1",
    "title": "130. Pleno - Gestão de Crédito (VKM1)",
    "transaction": "VKM1",
    "chefeHugoDialog": "Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd 130) e remova bloqueios de expedição.",
    "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
    "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "130",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Conceito Pleno: VKM1 (Credit Management)",
        "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
        "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
        "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
    }
},
  {
    "id": "M131-RE",
    "title": "131. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 131). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "131",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M132-RE",
    "title": "132. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 132). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "132",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M133-RE",
    "title": "133. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 133). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "133",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M134-RE",
    "title": "134. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 134). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "134",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M135-RE",
    "title": "135. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 135). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "135",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M136-RE",
    "title": "136. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 136). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "136",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M137-RE",
    "title": "137. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 137). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "137",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M138-RE",
    "title": "138. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 138). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "138",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M139-RE",
    "title": "139. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 139). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "139",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M140-RE",
    "title": "140. Sênior - Processo de Devolução (RE)",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd 140). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
    "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
    "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
    "expectedData": {
        "tipoOrdem": "RE",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "140",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Devoluções",
        "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
        "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
        "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
    }
},
{
    "id": "M141-CANCEL",
    "title": "141. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 141). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "141",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M142-CANCEL",
    "title": "142. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 142). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "142",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M143-CANCEL",
    "title": "143. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 143). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "143",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M144-CANCEL",
    "title": "144. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 144). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "144",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M145-CANCEL",
    "title": "145. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 145). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "145",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M146-CANCEL",
    "title": "146. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 146). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "146",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M147-CANCEL",
    "title": "147. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 147). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "147",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M148-CANCEL",
    "title": "148. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 148). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "148",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M149-CANCEL",
    "title": "149. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 149). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "149",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M150-CANCEL",
    "title": "150. Sênior - Estorno e Cancelamento (VF11/VL09)",
    "transaction": "VF11",
    "chefeHugoDialog": "Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd 150). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
    "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
    "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
    "expectedData": {
        "tipoOrdem": "S1",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "150",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Estornos",
        "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
        "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
        "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
    }
},
{
    "id": "M151-INCOMP",
    "title": "151. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 151). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "151",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M152-INCOMP",
    "title": "152. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 152). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "152",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M153-INCOMP",
    "title": "153. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 153). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "153",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M154-INCOMP",
    "title": "154. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 154). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "154",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M155-INCOMP",
    "title": "155. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 155). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "155",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M156-INCOMP",
    "title": "156. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 156). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "156",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M157-INCOMP",
    "title": "157. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 157). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "157",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M158-INCOMP",
    "title": "158. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 158). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "158",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M159-INCOMP",
    "title": "159. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 159). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "159",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M160-INCOMP",
    "title": "160. Sênior - Log de Incompletude (V.02)",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd 160). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
    "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
    "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "160",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Incompletude",
        "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
        "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
        "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
    }
},
{
    "id": "M161-ADV",
    "title": "161. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 161). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "161",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M162-ADV",
    "title": "162. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 162). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "162",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M163-ADV",
    "title": "163. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 163). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "163",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M164-ADV",
    "title": "164. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 164). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "164",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M165-ADV",
    "title": "165. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 165). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "165",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M166-ADV",
    "title": "166. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 166). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "166",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M167-ADV",
    "title": "167. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 167). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "167",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M168-ADV",
    "title": "168. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 168). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "168",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M169-ADV",
    "title": "169. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 169). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "169",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
},
{
    "id": "M170-ADV",
    "title": "170. Sênior - Arquitetura de Vendas Complexa",
    "transaction": "VA01",
    "chefeHugoDialog": "Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd 170). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
    "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
    "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "partnerCode": "208015",
        "materialCode": "MAT-SD-015",
        "quantidade": "170",
        "headerIncoterms": "FOB",
        "partnerFunction": "ZF30"
    },
    "f1Help": {
        "title": "Diagnóstico Sênior: Arquitetura OTC",
        "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
        "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
        "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
    }
}
];
