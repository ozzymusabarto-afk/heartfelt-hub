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
    "id": "M001-BP",
    "title": "01. Trainee - Cadastro de Parceiro (BP)",
    "transaction": "BP",
    "chefeHugoDialog": "Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: 11). Garanta que os dados mestres estejam corretos.",
    "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
    "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
    "expectedData": {
        "tipoOrdem": "OR",
        "orgVendas": "1000",
        "canalDist": "10",
        "setorAtiv": "00",
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "11",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "12",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "13",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "14",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "15",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "16",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "17",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "18",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "19",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "20",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "21",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "22",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "23",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "24",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "25",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "26",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "27",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "28",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "29",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "30",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "31",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "32",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "33",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "34",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "25",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208016",
        "material": "MAT-SD-015",
        "quantidade": "26",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208017",
        "material": "MAT-SD-020",
        "quantidade": "27",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "28",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "29",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "30",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "31",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "32",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "33",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "34",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "35",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "36",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "37",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-015",
        "quantidade": "38",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "39",
        "incoterms": "FOB",
        "condPagto": "ZF30"
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
        "cliente": "208015",
        "material": "MAT-SD-020",
        "quantidade": "40",
        "incoterms": "FOB",
        "condPagto": "ZF30"
    },
    "f1Help": {
        "title": "Dica VF03: Finalização",
        "concept": "A fatura encerra o ciclo de SD e inicia o ciclo de FI.",
        "businessImpact": "Sem erro na fatura, o cliente paga no prazo e a empresa cresce.",
        "brazilRule": "Valide se o número do protocolo da SEFAZ está presente no documento de faturamento."
    }
},
    "f1Help": {
      "title": "Dica SAP: VA05",
      "concept": "Entenda o fluxo de VA05 no nível Trainee.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M041-VA01",
    "title": "41. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 51.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "51",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M042-VA01",
    "title": "42. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 52.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "52",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M043-VA01",
    "title": "43. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 53.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "53",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M044-VA01",
    "title": "44. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 54.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "54",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M045-VA01",
    "title": "45. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 55.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "55",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M046-VA01",
    "title": "46. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 56.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "56",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M047-VA01",
    "title": "47. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 57.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "57",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M048-VA01",
    "title": "48. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 58.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "58",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M049-VA01",
    "title": "49. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 59.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "59",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M050-VA01",
    "title": "50. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 60.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "60",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M051-VA01",
    "title": "51. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 61.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "61",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M052-VA01",
    "title": "52. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 62.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "62",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M053-VA01",
    "title": "53. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 63.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "63",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M054-VA01",
    "title": "54. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 64.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "64",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M055-VA01",
    "title": "55. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 65.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "65",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M056-VA01",
    "title": "56. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 66.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "66",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M057-VA01",
    "title": "57. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 67.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "67",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M058-VA01",
    "title": "58. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 68.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "68",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M059-VA01",
    "title": "59. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 69.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "69",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M060-VA01",
    "title": "60. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 70.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "70",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M061-VA01",
    "title": "61. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 71.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "71",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M062-VA01",
    "title": "62. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 72.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "72",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M063-VA01",
    "title": "63. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 73.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "73",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M064-VA01",
    "title": "64. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 74.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "74",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M065-VA01",
    "title": "65. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 75.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "75",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M066-VA01",
    "title": "66. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 76.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "76",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M067-VA01",
    "title": "67. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 77.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "77",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M068-VA01",
    "title": "68. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 78.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "78",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M069-VA01",
    "title": "69. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 79.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "79",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M070-VA01",
    "title": "70. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 80.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "80",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M071-VA01",
    "title": "71. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 81.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "81",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M072-VA01",
    "title": "72. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 82.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "82",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M073-VA01",
    "title": "73. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 83.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "83",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M074-VA01",
    "title": "74. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 84.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "84",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M075-VA01",
    "title": "75. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 85.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "85",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M076-VA01",
    "title": "76. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 86.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "86",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M077-VA01",
    "title": "77. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 87.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "87",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M078-VA01",
    "title": "78. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 88.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "88",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M079-VA01",
    "title": "79. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 89.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "89",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M080-VA01",
    "title": "80. Júnior - Operação VA01",
    "transaction": "VA01",
    "chefeHugoDialog": "Consultor(a), no nível Júnior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA01. Use Material MAT-SD-015 e Qtd 90.",
    "successFeedback": "Excelente! Operação VA01 finalizada com sucesso no nível Júnior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA01. Revise o Tipo de Ordem e Cliente para o nível Júnior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "90",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA01",
      "concept": "Entenda o fluxo de VA01 no nível Júnior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M081-VL01N",
    "title": "81. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 91.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "91",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M082-VL01N",
    "title": "82. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 92.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "92",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M083-VL01N",
    "title": "83. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 93.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "93",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M084-VL01N",
    "title": "84. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 94.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "94",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M085-VL01N",
    "title": "85. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 95.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "95",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M086-VL01N",
    "title": "86. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 96.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "96",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M087-VL01N",
    "title": "87. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 97.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "97",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M088-VL01N",
    "title": "88. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 98.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "98",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M089-VL01N",
    "title": "89. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 99.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "99",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M090-VL01N",
    "title": "90. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 100.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "100",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M091-VL01N",
    "title": "91. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 101.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "101",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M092-VL01N",
    "title": "92. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 102.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "102",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M093-VL01N",
    "title": "93. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 103.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "103",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M094-VL01N",
    "title": "94. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 104.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "104",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M095-VL01N",
    "title": "95. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 105.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "105",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M096-VL01N",
    "title": "96. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 106.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "106",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M097-VL01N",
    "title": "97. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 107.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "107",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M098-VL01N",
    "title": "98. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 108.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "108",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M099-VL01N",
    "title": "99. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 109.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "109",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M100-VL01N",
    "title": "100. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 110.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "110",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M101-VL01N",
    "title": "101. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 111.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "111",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M102-VL01N",
    "title": "102. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 112.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "112",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M103-VL01N",
    "title": "103. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 113.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "113",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M104-VL01N",
    "title": "104. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 114.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "114",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M105-VL01N",
    "title": "105. Pleno - Operação VL01N",
    "transaction": "VL01N",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VL01N. Use Material MAT-SD-015 e Qtd 115.",
    "successFeedback": "Excelente! Operação VL01N finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VL01N. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "115",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VL01N",
      "concept": "Entenda o fluxo de VL01N no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M106-VF01",
    "title": "106. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 116.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "116",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M107-VF01",
    "title": "107. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 117.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "117",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M108-VF01",
    "title": "108. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 118.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "118",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M109-VF01",
    "title": "109. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 119.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "119",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M110-VF01",
    "title": "110. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 120.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "120",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M111-VF01",
    "title": "111. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 121.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "121",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M112-VF01",
    "title": "112. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 122.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "122",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M113-VF01",
    "title": "113. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 123.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "123",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M114-VF01",
    "title": "114. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 124.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "124",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M115-VF01",
    "title": "115. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 125.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "125",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M116-VF01",
    "title": "116. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 126.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "126",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M117-VF01",
    "title": "117. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 127.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "127",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M118-VF01",
    "title": "118. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 128.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "128",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M119-VF01",
    "title": "119. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 129.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "129",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M120-VF01",
    "title": "120. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 130.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "130",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M121-VF01",
    "title": "121. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 131.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "131",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M122-VF01",
    "title": "122. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 132.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "132",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M123-VF01",
    "title": "123. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 133.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "133",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M124-VF01",
    "title": "124. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 134.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "134",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M125-VF01",
    "title": "125. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 135.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "135",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M126-VF01",
    "title": "126. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 136.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "136",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M127-VF01",
    "title": "127. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 137.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "137",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M128-VF01",
    "title": "128. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 138.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "138",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M129-VF01",
    "title": "129. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 139.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "139",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M130-VF01",
    "title": "130. Pleno - Operação VF01",
    "transaction": "VF01",
    "chefeHugoDialog": "Consultor(a), no nível Pleno a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF01. Use Material MAT-SD-015 e Qtd 140.",
    "successFeedback": "Excelente! Operação VF01 finalizada com sucesso no nível Pleno. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF01. Revise o Tipo de Ordem e Cliente para o nível Pleno.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "140",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF01",
      "concept": "Entenda o fluxo de VF01 no nível Pleno.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M131-VA02",
    "title": "131. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 141.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "141",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M132-VA02",
    "title": "132. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 142.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "142",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M133-VA02",
    "title": "133. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 143.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "143",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M134-VA02",
    "title": "134. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 144.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "144",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M135-VA02",
    "title": "135. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 145.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "145",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M136-VA02",
    "title": "136. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 146.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "146",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M137-VA02",
    "title": "137. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 147.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "147",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M138-VA02",
    "title": "138. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 148.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "148",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M139-VA02",
    "title": "139. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 149.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "149",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M140-VA02",
    "title": "140. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 150.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "150",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M141-VA02",
    "title": "141. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 151.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "151",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M142-VA02",
    "title": "142. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 152.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "152",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M143-VA02",
    "title": "143. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 153.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "153",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M144-VA02",
    "title": "144. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 154.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "154",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M145-VA02",
    "title": "145. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 155.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "155",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M146-VA02",
    "title": "146. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 156.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "156",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M147-VA02",
    "title": "147. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 157.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "157",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M148-VA02",
    "title": "148. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 158.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "158",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M149-VA02",
    "title": "149. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 159.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "159",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M150-VA02",
    "title": "150. Sênior - Operação VA02",
    "transaction": "VA02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VA02. Use Material MAT-SD-015 e Qtd 160.",
    "successFeedback": "Excelente! Operação VA02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VA02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "160",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VA02",
      "concept": "Entenda o fluxo de VA02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M151-VF11",
    "title": "151. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 161.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "161",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M152-VF11",
    "title": "152. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 162.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "162",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M153-VF11",
    "title": "153. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 163.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "163",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M154-VF11",
    "title": "154. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 164.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "164",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M155-VF11",
    "title": "155. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 165.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "165",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M156-VF11",
    "title": "156. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 166.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "166",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M157-VF11",
    "title": "157. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 167.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "167",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M158-VF11",
    "title": "158. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 168.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "168",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M159-VF11",
    "title": "159. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 169.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "169",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M160-VF11",
    "title": "160. Sênior - Operação VF11",
    "transaction": "VF11",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar VF11. Use Material MAT-SD-015 e Qtd 170.",
    "successFeedback": "Excelente! Operação VF11 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação VF11. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "170",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: VF11",
      "concept": "Entenda o fluxo de VF11 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M161-V.02",
    "title": "161. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 171.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "171",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M162-V.02",
    "title": "162. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 172.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "172",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M163-V.02",
    "title": "163. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 173.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "173",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M164-V.02",
    "title": "164. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 174.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "174",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M165-V.02",
    "title": "165. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 175.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "175",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M166-V.02",
    "title": "166. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 176.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "176",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M167-V.02",
    "title": "167. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 177.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "177",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M168-V.02",
    "title": "168. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 178.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "178",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M169-V.02",
    "title": "169. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 179.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "179",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  },
  {
    "id": "M170-V.02",
    "title": "170. Sênior - Operação V.02",
    "transaction": "V.02",
    "chefeHugoDialog": "Consultor(a), no nível Sênior a AAM LOGÍSTICA demanda precisão. O cliente solicitou processar V.02. Use Material MAT-SD-015 e Qtd 180.",
    "successFeedback": "Excelente! Operação V.02 finalizada com sucesso no nível Sênior. Hugo está satisfeito.",
    "errorFeedback": "Erro na operação V.02. Revise o Tipo de Ordem e Cliente para o nível Sênior.",
    "expectedData": {
      "tipoOrdem": "OR",
      "orgVendas": "1000",
      "canalDist": "10",
      "setorAtiv": "00",
      "cliente": "208015",
      "material": "MAT-SD-015",
      "quantidade": "180",
      "incoterms": "FOB",
      "condPagto": "ZF30"
    },
    "f1Help": {
      "title": "Dica SAP: V.02",
      "concept": "Entenda o fluxo de V.02 no nível Sênior.",
      "businessImpact": "Mantém o KPI de entregas da AAM LOGÍSTICA em dia.",
      "brazilRule": "Obrigatório validar NCM e impostos para a SEFAZ."
    }
  }
];
