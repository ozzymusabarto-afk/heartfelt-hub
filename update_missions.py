import re

def update_missions():
    with open('src/data/missions.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Define the 24 Trainee missions with corrected data
    # Missões 01-20: BP
    # Missões 21-24: VA05
    
    missions_update = []
    
    # BP Missions (01-20)
    for i in range(1, 21):
        m_id = f"M{i:03d}-BP"
        quantity = str(10 + i)
        missions_update.append({
            "id": m_id,
            "title": f"{i:02d}. Trainee - Cadastro de Parceiro (BP)",
            "transaction": "BP",
            "chefeHugoDialog": f"Olá Consultor(a)! A AAM LOGÍSTICA precisa cadastrar um novo Parceiro de Negócios (BP) no sistema. Por favor, valide o código do cliente 208015 para a Organização de Vendas 1000 com o material MAT-SD-015 (Qtd: {quantity}). Garanta que os dados mestres estejam corretos.",
            "successFeedback": "Excelente trabalho! O Parceiro de Negócios (BP) foi validado e estendido para as áreas de vendas corretamente. Esse é o primeiro passo para o fluxo de vendas.",
            "errorFeedback": "Atenção! O código do cliente ou os dados da área de vendas não coincidem com o mestre. Verifique se usou o Cliente 208015 e a Org. Vendas 1000.",
            "expectedData": {
                "tipoOrdem": "OR",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": quantity,
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito SAP: BP (Business Partner)",
                "concept": "No S/4HANA, o BP é o ponto de entrada único para gerenciar dados mestres de Clientes e Fornecedores.",
                "businessImpact": "Um cadastro de BP correto evita bloqueios no faturamento e garante que os impostos sejam calculados pela localização (Brasil).",
                "brazilRule": "O campo 'Contribuinte de ICMS' deve ser validado no cadastro para evitar rejeição da NF-e na SEFAZ."
            }
        })

    # VA05 Missions (21-24)
    for i in range(21, 25):
        m_id = f"M{i:03d}-VA05"
        quantity = str(10 + i)
        missions_update.append({
            "id": m_id,
            "title": f"{i:02d}. Trainee - Relatório de Ordens (VA05)",
            "transaction": "VA05",
            "chefeHugoDialog": f"Preciso de um relatório atualizado das ordens de venda pendentes. Acesse a transação VA05 e verifique as ordens do cliente 208015 para o material MAT-SD-015. Use a quantidade {quantity} como filtro de verificação técnica.",
            "successFeedback": "Relatório gerado com sucesso! A visibilidade das ordens é crucial para a gestão da carteira da AAM LOGÍSTICA.",
            "errorFeedback": "Erro ao acessar o relatório. Verifique se a transação selecionada é a VA05 e se os filtros de cliente e material estão corretos.",
            "expectedData": {
                "tipoOrdem": "OR",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": quantity,
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito SAP: VA05 (Lista de Ordens)",
                "concept": "A transação VA05 permite visualizar uma lista de documentos de vendas por cliente, material ou período.",
                "businessImpact": "Ajuda o setor comercial a identificar pedidos que ainda não foram faturados ou que possuem bloqueios de remessa.",
                "brazilRule": "Relatórios de vendas no Brasil costumam incluir a chave de acesso da NF-e para fins de rastreabilidade fiscal."
            }
        })

    # Function to replace a mission block in the string
    def replace_mission(content, mission):
        pattern = r'\{\s*"id":\s*"' + mission["id"] + r'",\s*.*?\}\s*,'
        # This regex is simplified and might need adjustment if the missions are not followed by a comma
        # Actually, let's use a more robust search and replace for each field within the ID block
        
        # Find the start of the mission block
        id_marker = f'"id": "{mission["id"]}"'
        start_idx = content.find(id_marker)
        if start_idx == -1:
            return content
        
        # Find the opening brace before this ID
        brace_start = content.rfind('{', 0, start_idx)
        # Find the closing brace after this ID
        # We need to count braces to handle nested expectedData
        brace_count = 0
        brace_end = -1
        for i in range(brace_start, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    brace_end = i + 1
                    break
        
        if brace_end == -1:
            return content
            
        new_block = json.dumps(mission, indent=4, ensure_ascii=False)
        return content[:brace_start] + new_block + content[brace_end:]

    for m in missions_update:
        content = replace_mission(content, m)
    
    with open('src/data/missions.ts', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_missions()
