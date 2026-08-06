export const CERTIFICATION_QUESTIONS = [
    {
        id: "cert-001",
        topic: "Vendas",
        question: "Ao criar uma Ordem de Venda (VA01), quais elementos organizacionais compõem a Área de Vendas?",
        options: [
            { id: "A", text: "Organização de Vendas, Canal de Distribuição e Divisão (Setor de Atividade)." },
            { id: "B", text: "Organização de Vendas, Centro e Depósito." },
            { id: "C", text: "Empresa, Organização de Vendas e Canal de Distribuição." },
            { id: "D", text: "Organização de Vendas, Grupo de Compras e Divisão." }
        ],
        correctOptionId: "A",
        explanation: "A Área de Vendas no SAP S/4HANA é a combinação única de Organização de Vendas, Canal de Distribuição e Setor de Atividade (Divisão). Ela é fundamental para determinar dados mestres e estratégias de preço."
    },
    {
        id: "cert-002",
        topic: "Precificação",
        question: "Qual elemento do esquema de cálculo (Pricing Procedure) controla se uma condição é obrigatória ou estatística?",
        options: [
            { id: "A", text: "A Sequência de Acesso." },
            { id: "B", text: "A Coluna 'Obrigatório' e 'Estatístico' no esquema de cálculo." },
            { id: "C", text: "O Tipo de Condição." },
            { id: "D", text: "A Tabela de Condições." }
        ],
        correctOptionId: "B",
        explanation: "No esquema de cálculo, cada linha possui indicadores. O campo 'Obrigatório' exige que a condição esteja presente para que o documento seja válido, enquanto 'Estatístico' faz com que o valor não seja somado ao valor líquido final, servindo apenas para informação ou base de cálculo."
    },
    {
        id: "cert-003",
        topic: "Expedição",
        question: "Qual documento é o ponto de partida obrigatório para realizar o Picking e a Saída de Mercadorias (Post Goods Issue) no fluxo padrão SD?",
        options: [
            { id: "A", text: "Ordem de Venda (Sales Order)." },
            { id: "B", text: "Fatura (Billing Document)." },
            { id: "C", text: "Remessa (Outbound Delivery)." },
            { id: "D", text: "Ordem de Transferência (Transfer Order)." }
        ],
        correctOptionId: "C",
        explanation: "A Remessa (Outbound Delivery) é o documento que controla todas as atividades logísticas de expedição, incluindo picking, embalagem e a baixa de estoque final (PGI)."
    },
    {
        id: "cert-004",
        topic: "Faturamento",
        question: "Ao processar o faturamento (VF01), de onde o sistema geralmente busca os dados de preço por padrão no SAP S/4HANA?",
        options: [
            { id: "A", text: "Sempre do Mestre de Materiais." },
            { id: "B", text: "Sempre do Cadastro do Cliente." },
            { id: "C", text: "Da Ordem de Venda precedente (Cópia de Condições)." },
            { id: "D", text: "Da Remessa." }
        ],
        correctOptionId: "C",
        explanation: "No fluxo padrão (Order-related billing), as condições de preço são determinadas na Ordem de Venda e copiadas para a Fatura para garantir a integridade financeira do ciclo."
    },
    {
        id: "cert-005",
        topic: "Dados Mestres/BP",
        question: "No SAP S/4HANA, qual a principal mudança em relação ao cadastro de Clientes e Fornecedores?",
        options: [
            { id: "A", text: "Não houve mudanças, continua sendo usado VD01 e XK01." },
            { id: "B", text: "A introdução do Business Partner (BP) como entrada central para gerenciar parceiros." },
            { id: "C", text: "Clientes agora são cadastrados dentro do mestre de materiais." },
            { id: "D", text: "Os clientes são criados automaticamente pela Ordem de Venda." }
        ],
        correctOptionId: "B",
        explanation: "O conceito de Business Partner (BP) é obrigatório no S/4HANA. Ele unifica o cadastro de pessoas, organizações e grupos, permitindo que uma mesma entidade assuma múltiplos papéis (Cliente, Fornecedor, etc.)."
    },
    {
        id: "cert-006",
        topic: "Processos Transversais",
        question: "O que define a estratégia de determinação de contas de receita no faturamento?",
        options: [
            { id: "A", text: "Apenas o Centro (Plant)." },
            { id: "B", text: "A combinação de Chave de Conta, Esquema de Faturamento e Grupo de Imputação." },
            { id: "C", text: "O tipo de remessa utilizado." },
            { id: "D", text: "A categoria de item da remessa." }
        ],
        correctOptionId: "B",
        explanation: "A determinação de contas (Account Determination) usa uma técnica de condições para mapear a receita baseada em critérios como plano de contas, organização de vendas, grupo de imputação do cliente/material e chave de conta."
    },
    {
        id: "cert-007",
        topic: "Precificação",
        question: "O que é uma 'Sequência de Acesso' na técnica de condições?",
        options: [
            { id: "A", text: "A ordem em que o sistema procura registros de condição válidos em tabelas de condição." },
            { id: "B", text: "A lista de usuários que podem alterar preços." },
            { id: "C", text: "A sequência de telas na transação VA01." },
            { id: "D", text: "O caminho do menu SAP Easy Access." }
        ],
        correctOptionId: "A",
        explanation: "A Sequência de Acesso define a estratégia de busca do sistema: ele tenta encontrar o registro de condição mais específico primeiro e vai para os mais genéricos sucessivamente."
    },
    {
        id: "cert-008",
        topic: "Vendas",
        question: "Qual a função da Categoria de Item (Item Category) em um documento de vendas?",
        options: [
            { id: "A", text: "Definir o nome do cliente." },
            { id: "B", text: "Controlar o comportamento do item, como relevância para preço, faturamento e estoque." },
            { id: "C", text: "Definir a cor do material no sistema." },
            { id: "D", text: "Controlar apenas o peso do material." }
        ],
        correctOptionId: "B",
        explanation: "A Categoria de Item (ex: TAN para item padrão) é crucial pois dita como o item será processado nos fluxos subsequentes de logística e finanças."
    },
    {
        id: "cert-009",
        topic: "Expedição",
        question: "A determinação do Centro de Expedição (Shipping Point) é baseada em quais critérios?",
        options: [
            { id: "A", text: "Organização de Vendas, Canal e Divisão." },
            { id: "B", text: "Condição de Expedição, Grupo de Carregamento e Centro." },
            { id: "C", text: "Apenas o CEP do cliente." },
            { id: "D", text: "O tipo de documento de venda." }
        ],
        correctOptionId: "B",
        explanation: "O SAP determina o Shipping Point automaticamente cruzando a Condição de Expedição (do cliente), o Grupo de Carregamento (do material) e o Centro (Plant) de origem."
    },
    {
        id: "cert-010",
        topic: "Faturamento",
        question: "No S/4HANA, qual a vantagem da Fatura Eletrônica integrada?",
        options: [
            { id: "A", text: "Elimina a necessidade de ter um Business Partner." },
            { id: "B", text: "Permite a comunicação em tempo real com órgãos fiscais (como a SEFAZ no Brasil) via SAP Document and Reporting Compliance." },
            { id: "C", text: "Faz com que os impostos sejam sempre zero." },
            { id: "D", text: "Aumenta o tempo de entrega das mercadorias." }
        ],
        correctOptionId: "B",
        explanation: "O S/4HANA oferece soluções nativas para conformidade fiscal (Compliance), facilitando o envio de documentos eletrônicos e relatórios legais diretamente do ERP."
    },
    {
        "id": "cert-011",
        "topic": "Processos Transversais",
        "question": "Em qual nível organizacional a 'Determinação de Centro' (Plant Determination) é primeiramente verificada na Ordem de Venda?",
        "options": [
            {
                "id": "A",
                "text": "No registro mestre do material."
            },
            {
                "id": "B",
                "text": "No registro info de cliente-material."
            },
            {
                "id": "C",
                "text": "No registro mestre do cliente."
            },
            {
                "id": "D",
                "text": "Na categoria de item."
            }
        ],
        "correctOptionId": "B",
        "explanation": "A prioridade de determinação do centro no SAP SD segue a ordem: 1. Registro Info Cliente-Material, 2. Mestre de Clientes, 3. Mestre de Materiais. O sistema busca a fonte mais específica primeiro."
    },
    {
        "id": "cert-012",
        "topic": "Vendas",
        "question": "Qual é a função da 'Divisão de Remessa' (Schedule Line Category) no processo de vendas?",
        "options": [
            {
                "id": "A",
                "text": "Determinar o preço do item."
            },
            {
                "id": "B",
                "text": "Controlar a transferência de necessidades (Reqs) e a verificação de disponibilidade (ATP)."
            },
            {
                "id": "C",
                "text": "Definir o parceiro pagador."
            },
            {
                "id": "D",
                "text": "Controlar o faturamento agrupado."
            }
        ],
        "correctOptionId": "B",
        "explanation": "As Schedule Lines controlam a logística do item, incluindo se ele é relevante para entrega, se gera transferência de necessidades para o planejamento (MRP) e se passa pela verificação ATP."
    },
    {
        "id": "cert-013",
        "topic": "Precificação",
        "question": "Na técnica de condições, o que acontece se o campo 'Exclusivo' estiver marcado em um acesso dentro da Sequência de Acesso?",
        "options": [
            {
                "id": "A",
                "text": "O sistema para de procurar outros registros se encontrar um valor válido nesse acesso."
            },
            {
                "id": "B",
                "text": "O acesso só pode ser usado por administradores."
            },
            {
                "id": "C",
                "text": "O preço resultante é multiplicado por dois."
            },
            {
                "id": "D",
                "text": "O sistema ignora este acesso durante a simulação."
            }
        ],
        "correctOptionId": "A",
        "explanation": "O indicador 'Exclusive' instrui o sistema a encerrar a busca na sequência de acesso assim que encontrar o primeiro registro de condição válido, otimizando a performance e garantindo a aplicação da regra mais específica."
    },
    {
        "id": "cert-014",
        "topic": "Faturamento",
        "question": "Qual transação é utilizada no S/4HANA para o processamento coletivo de faturas (Billing Due List)?",
        "options": [
            {
                "id": "A",
                "text": "VF04"
            },
            {
                "id": "B",
                "text": "VA05"
            },
            {
                "id": "C",
                "text": "VL06G"
            },
            {
                "id": "D",
                "text": "VF11"
            }
        ],
        "correctOptionId": "A",
        "explanation": "A transação VF04 permite processar múltiplos documentos de faturamento pendentes simultaneamente, baseando-se em critérios como data de faturamento, cliente e organização de vendas."
    },
    {
        "id": "cert-015",
        "topic": "Dados Mestres/BP",
        "question": "Qual 'Role' (Função de Parceiro) do Business Partner é necessária para estender um parceiro às funções de Vendas e Distribuição?",
        "options": [
            {
                "id": "A",
                "text": "FLCU00 (FI Customer) e FLCU01 (Sales Customer)."
            },
            {
                "id": "B",
                "text": "BBP000 (Vendor)."
            },
            {
                "id": "C",
                "text": "000000 (General Business Partner)."
            },
            {
                "id": "D",
                "text": "FLVN00 (FI Vendor)."
            }
        ],
        "correctOptionId": "A",
        "explanation": "Para que um BP atue como cliente em SD, ele deve ter as funções FLCU00 (para dados da Empresa/FI) e FLCU01 (para dados de Área de Vendas)."
    },
    {
        "id": "cert-016",
        "topic": "Processos Transversais",
        "question": "No SAP S/4HANA, qual componente substituiu o 'FI-AR Credit Management' (antigo SD Credit Management)?",
        "options": [
            {
                "id": "A",
                "text": "SAP FSCM (Financial Supply Chain Management)."
            },
            {
                "id": "B",
                "text": "SAP Treasury."
            },
            {
                "id": "C",
                "text": "SAP CRM."
            },
            {
                "id": "D",
                "text": "SAP Ariba."
            }
        ],
        "correctOptionId": "A",
        "explanation": "O S/4HANA utiliza o SAP Credit Management (parte do SAP FSCM) para centralizar a gestão de limites de crédito, substituindo o antigo módulo SD-BF-CM."
    },
    {
        "id": "cert-017",
        "topic": "Processos Transversais",
        "question": "Qual a relação hierárquica entre Organização de Vendas e Empresa (Company Code)?",
        "options": [
            {
                "id": "A",
                "text": "Uma Organização de Vendas pode pertencer a várias Empresas."
            },
            {
                "id": "B",
                "text": "Uma Empresa pode ter apenas uma Organização de Vendas."
            },
            {
                "id": "C",
                "text": "Uma Organização de Vendas deve ser atribuída a exatamente uma Empresa."
            },
            {
                "id": "D",
                "text": "Não há relação direta entre elas."
            }
        ],
        "correctOptionId": "C",
        "explanation": "Na estrutura organizacional do SAP, cada Organização de Vendas é vinculada a um único Company Code para fins de integração contábil e balanço financeiro."
    },
    {
        "id": "cert-018",
        "topic": "Vendas",
        "question": "O que é o 'Log de Incompletude' (Incompletion Log)?",
        "options": [
            {
                "id": "A",
                "text": "Um relatório de erros de programação."
            },
            {
                "id": "B",
                "text": "Uma funcionalidade que identifica campos obrigatórios não preenchidos em um documento de vendas."
            },
            {
                "id": "C",
                "text": "Uma lista de clientes inativos."
            },
            {
                "id": "D",
                "text": "Um histórico de alterações de preços."
            }
        ],
        "correctOptionId": "B",
        "explanation": "O log de incompletude avisa o usuário quando dados essenciais (definidos no Customizing) faltam no documento, impedindo processos subsequentes como remessa ou faturamento."
    },
    {
        "id": "cert-019",
        "topic": "Precificação",
        "question": "Qual das seguintes categorias de condição é usada para 'Impostos' no esquema de cálculo?",
        "options": [
            {
                "id": "A",
                "text": "Categoria D"
            },
            {
                "id": "B",
                "text": "Categoria A (Sobretaxas)"
            },
            {
                "id": "C",
                "text": "Categoria B (Preço)"
            },
            {
                "id": "D",
                "text": "Categoria C (Descontos)"
            }
        ],
        "correctOptionId": "A",
        "explanation": "Em SAP SD, o tipo de condição (Condition Type) para impostos é geralmente configurado com a categoria 'D' no Customizing (ex: MWST ou BX10)."
    },
    {
        "id": "cert-020",
        "topic": "Faturamento",
        "question": "O que ocorre fisicamente no sistema quando o 'Registro de Saída de Mercadorias' (PGI) é efetuado?",
        "options": [
            {
                "id": "A",
                "text": "O estoque é reduzido e documentos contábeis de custo (COGS) são gerados."
            },
            {
                "id": "B",
                "text": "O preço do material é alterado."
            },
            {
                "id": "C",
                "text": "O cliente recebe um e-mail automaticamente."
            },
            {
                "id": "D",
                "text": "O pedido de vendas é excluído."
            }
        ],
        "correctOptionId": "A",
        "explanation": "O PGI finaliza o processo logístico na expedição, atualizando a quantidade em estoque no MM e gerando o lançamento contábil de custo das mercadorias vendidas no FI."
    }
];
