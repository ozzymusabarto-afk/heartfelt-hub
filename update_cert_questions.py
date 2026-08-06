import re
import json

def generate_questions():
    questions = []
    
    # Existing 10 questions IDs: cert-001 to cert-010
    # New 10 questions to complete 20 as requested
    
    new_data = [
        {
            "id": "cert-011",
            "topic": "Organizational Structures",
            "question": "Em qual nível organizacional a 'Determinação de Centro' (Plant Determination) é primeiramente verificada na Ordem de Venda?",
            "options": [
                {"id": "A", "text": "No registro mestre do material."},
                {"id": "B", "text": "No registro info de cliente-material."},
                {"id": "C", "text": "No registro mestre do cliente."},
                {"id": "D", "text": "Na categoria de item."}
            ],
            "correctOptionId": "B",
            "explanation": "A prioridade de determinação do centro no SAP SD segue a ordem: 1. Registro Info Cliente-Material, 2. Mestre de Clientes, 3. Mestre de Materiais. O sistema busca a fonte mais específica primeiro."
        },
        {
            "id": "cert-012",
            "topic": "Sales Documents",
            "question": "Qual é a função da 'Divisão de Remessa' (Schedule Line Category) no processo de vendas?",
            "options": [
                {"id": "A", "text": "Determinar o preço do item."},
                {"id": "B", "text": "Controlar a transferência de necessidades (Reqs) e a verificação de disponibilidade (ATP)."},
                {"id": "C", "text": "Definir o parceiro pagador."},
                {"id": "D", "text": "Controlar o faturamento agrupado."}
            ],
            "correctOptionId": "B",
            "explanation": "As Schedule Lines controlam a logística do item, incluindo se ele é relevante para entrega, se gera transferência de necessidades para o planejamento (MRP) e se passa pela verificação ATP."
        },
        {
            "id": "cert-013",
            "topic": "Pricing",
            "question": "Na técnica de condições, o que acontece se o campo 'Exclusivo' estiver marcado em um acesso dentro da Sequência de Acesso?",
            "options": [
                {"id": "A", "text": "O sistema para de procurar outros registros se encontrar um valor válido nesse acesso."},
                {"id": "B", "text": "O acesso só pode ser usado por administradores."},
                {"id": "C", "text": "O preço resultante é multiplicado por dois."},
                {"id": "D", "text": "O sistema ignora este acesso durante a simulação."}
            ],
            "correctOptionId": "A",
            "explanation": "O indicador 'Exclusive' instrui o sistema a encerrar a busca na sequência de acesso assim que encontrar o primeiro registro de condição válido, otimizando a performance e garantindo a aplicação da regra mais específica."
        },
        {
            "id": "cert-014",
            "topic": "Shipping & Billing",
            "question": "Qual transação é utilizada no S/4HANA para o processamento coletivo de faturas (Billing Due List)?",
            "options": [
                {"id": "A", "text": "VF04"},
                {"id": "B", "text": "VA05"},
                {"id": "C", "text": "VL06G"},
                {"id": "D", "text": "VF11"}
            ],
            "correctOptionId": "A",
            "explanation": "A transação VF04 permite processar múltiplos documentos de faturamento pendentes simultaneamente, baseando-se em critérios como data de faturamento, cliente e organização de vendas."
        },
        {
            "id": "cert-015",
            "topic": "Master Data",
            "question": "Qual 'Role' (Função de Parceiro) do Business Partner é necessária para estender um parceiro às funções de Vendas e Distribuição?",
            "options": [
                {"id": "A", "text": "FLCU00 (FI Customer) e FLCU01 (Sales Customer)."},
                {"id": "B", "text": "BBP000 (Vendor)."},
                {"id": "C", "text": "000000 (General Business Partner)."},
                {"id": "D", "text": "FLVN00 (FI Vendor)."}
            ],
            "correctOptionId": "A",
            "explanation": "Para que um BP atue como cliente em SD, ele deve ter as funções FLCU00 (para dados da Empresa/FI) e FLCU01 (para dados de Área de Vendas)."
        },
        {
            "id": "cert-016",
            "topic": "Credit Management",
            "question": "No SAP S/4HANA, qual componente substituiu o 'FI-AR Credit Management' (antigo SD Credit Management)?",
            "options": [
                {"id": "A", "text": "SAP FSCM (Financial Supply Chain Management)."},
                {"id": "B", "text": "SAP Treasury."},
                {"id": "C", "text": "SAP CRM."},
                {"id": "D", "text": "SAP Ariba."}
            ],
            "correctOptionId": "A",
            "explanation": "O S/4HANA utiliza o SAP Credit Management (parte do SAP FSCM) para centralizar a gestão de limites de crédito, substituindo o antigo módulo SD-BF-CM."
        },
        {
            "id": "cert-017",
            "topic": "Organizational Structures",
            "question": "Qual a relação hierárquica entre Organização de Vendas e Empresa (Company Code)?",
            "options": [
                {"id": "A", "text": "Uma Organização de Vendas pode pertencer a várias Empresas."},
                {"id": "B", "text": "Uma Empresa pode ter apenas uma Organização de Vendas."},
                {"id": "C", "text": "Uma Organização de Vendas deve ser atribuída a exatamente uma Empresa."},
                {"id": "D", "text": "Não há relação direta entre elas."}
            ],
            "correctOptionId": "C",
            "explanation": "Na estrutura organizacional do SAP, cada Organização de Vendas é vinculada a um único Company Code para fins de integração contábil e balanço financeiro."
        },
        {
            "id": "cert-018",
            "topic": "Sales Documents",
            "question": "O que é o 'Log de Incompletude' (Incompletion Log)?",
            "options": [
                {"id": "A", "text": "Um relatório de erros de programação."},
                {"id": "B", "text": "Uma funcionalidade que identifica campos obrigatórios não preenchidos em um documento de vendas."},
                {"id": "C", "text": "Uma lista de clientes inativos."},
                {"id": "D", "text": "Um histórico de alterações de preços."}
            ],
            "correctOptionId": "B",
            "explanation": "O log de incompletude avisa o usuário quando dados essenciais (definidos no Customizing) faltam no documento, impedindo processos subsequentes como remessa ou faturamento."
        },
        {
            "id": "cert-019",
            "topic": "Pricing",
            "question": "Qual das seguintes categorias de condição é usada para 'Impostos' no esquema de cálculo?",
            "options": [
                {"id": "A", "text": "Categoria D"},
                {"id": "B", "text": "Categoria A (Sobretaxas)"},
                {"id": "C", "text": "Categoria B (Preço)"},
                {"id": "D", "text": "Categoria C (Descontos)"}
            ],
            "correctOptionId": "A",
            "explanation": "Em SAP SD, o tipo de condição (Condition Type) para impostos é geralmente configurado com a categoria 'D' no Customizing (ex: MWST ou BX10)."
        },
        {
            "id": "cert-020",
            "topic": "Shipping & Billing",
            "question": "O que ocorre fisicamente no sistema quando o 'Registro de Saída de Mercadorias' (PGI) é efetuado?",
            "options": [
                {"id": "A", "text": "O estoque é reduzido e documentos contábeis de custo (COGS) são gerados."},
                {"id": "B", "text": "O preço do material é alterado."},
                {"id": "C", "text": "O cliente recebe um e-mail automaticamente."},
                {"id": "D", "text": "O pedido de vendas é excluído."}
            ],
            "correctOptionId": "A",
            "explanation": "O PGI finaliza o processo logístico na expedição, atualizando a quantidade em estoque no MM e gerando o lançamento contábil de custo das mercadorias vendidas no FI."
        }
    ]
    
    return new_data

def update_file():
    with open('src/data/certificationQuestions.ts', 'r') as f:
        content = f.read()
    
    new_questions = generate_questions()
    
    # Existing content ends with '];'
    # We will insert before the last '];'
    
    # Convert to standard JS-like string for insertion
    questions_js = ",\n" + ",\n".join([json.dumps(q, indent=2, ensure_ascii=False) for q in new_questions])
    
    last_bracket_idx = content.rfind('];')
    if last_bracket_idx != -1:
        new_content = content[:last_bracket_idx] + questions_js + "\n];"
        with open('src/data/certificationQuestions.ts', 'w') as f:
            f.write(new_content)
        print("Certification questions updated to 20.")
    else:
        print("Closing array bracket not found.")

if __name__ == "__main__":
    update_file()
