import re
import json

def generate_missions():
    missions = []
    
    # Missions 81-95: Expedição, Remessa e Saída de Mercadorias (VL01N / VL02N)
    for i in range(81, 96):
        qty = 80 + (i - 80)
        missions.append({
            "id": f"M{i:03d}-VL01N",
            "title": f"{i:03d}. Pleno - Expedição e Remessa (VL01N)",
            "transaction": "VL01N",
            "chefeHugoDialog": f"Consultor, precisamos processar a remessa para o Cliente 208015. Use o material MAT-SD-015 com Qtd {qty}. Lembre-se: no nível Pleno, o Ponto de Expedição 1000 é obrigatório e o Picking deve ser total.",
            "successFeedback": "Remessa criada e Picking confirmado! O fluxo de expedição segue para o PGI. Trabalho de nível Pleno!",
            "errorFeedback": "A remessa falhou. Verifique se o Ponto de Expedição é 1000 e se a quantidade de Picking corresponde a " + str(qty) + ".",
            "expectedData": {
                "tipoOrdem": "LF",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": str(qty),
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito Pleno: VL01N / VL02N",
                "concept": "A VL01N cria o documento de fornecimento (Delivery) que inicia o processo físico de saída.",
                "businessImpact": "Uma expedição eficiente reduz o Lead Time e melhora o OTIF da AAM LOGÍSTICA.",
                "brazilRule": "O Ponto de Expedição (Shipping Point) determina a origem física e influencia a determinação do ICMS na NF-e."
            }
        })

    # Missions 96-110: Processo de Faturamento e Fluxo Financeiro (VF01 / VF02)
    for i in range(96, 111):
        qty = 95 + (i - 95)
        missions.append({
            "id": f"M{i:03d}-VF01",
            "title": f"{i:03d}. Pleno - Faturamento F2 (VF01)",
            "transaction": "VF01",
            "chefeHugoDialog": f"Hora de faturar! Gere a fatura tipo F2 para o Cliente 208015. Material MAT-SD-015, Qtd {qty}. Verifique se não há bloqueios de faturamento no cabeçalho.",
            "successFeedback": "Fatura F2 gerada com sucesso! O fluxo financeiro foi atualizado e a conta a receber criada.",
            "errorFeedback": "Erro no faturamento. Verifique o tipo de fatura (F2) e se o documento de referência está liberado.",
            "expectedData": {
                "tipoOrdem": "F2",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": str(qty),
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito Pleno: VF01 (Billing)",
                "concept": "A VF01 consolida os dados de venda e entrega para gerar o documento financeiro.",
                "businessImpact": "O faturamento correto garante o fluxo de caixa e a conformidade fiscal da empresa.",
                "brazilRule": "No Brasil, a fatura SAP dispara a geração da NF-e (Nota Fiscal Eletrônica) via mensageria."
            }
        })

    # Missions 111-120: Impostos e Localização Brasil (VF01 / J1B1N / VA02)
    for i in range(111, 121):
        qty = 110 + (i - 110)
        cfop = "5102" if i % 2 == 0 else "6102"
        missions.append({
            "id": f"M{i:03d}-TAX",
            "title": f"{i:03d}. Pleno - Localização Brasil & Impostos",
            "transaction": "VA02",
            "chefeHugoDialog": f"Auditoria fiscal! Verifique a determinação do CFOP {cfop} para o Cliente 208015. Material MAT-SD-015 (Qtd {qty}). Cheque as condições BX10 (ICMS) e IPI1.",
            "successFeedback": "Determinação de impostos validada! CFOP e esquemas de cálculo (TAXBRA) estão em conformidade.",
            "errorFeedback": "Divergência fiscal encontrada. O CFOP deve ser " + cfop + " e a categoria de imposto deve refletir a operação.",
            "expectedData": {
                "tipoOrdem": "OR",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": str(qty),
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito Pleno: Localização Brasil",
                "concept": "A localização brasileira (BR) exige configurações complexas de CFOP, NCM e Direito Fiscal.",
                "businessImpact": "Erros no CFOP geram multas pesadas e problemas no SPED Fiscal.",
                "brazilRule": "O CFOP 5xxx é para operações internas (mesmo estado) e 6xxx para interestaduais."
            }
        })

    # Missions 121-130: Gestão de Crédito e Liberação (VKM1 / VA02)
    for i in range(121, 131):
        qty = 120 + (i - 120)
        missions.append({
            "id": f"M{i:03d}-VKM1",
            "title": f"{i:03d}. Pleno - Gestão de Crédito (VKM1)",
            "transaction": "VKM1",
            "chefeHugoDialog": f"Crédito bloqueado! O pedido do Cliente 208015 excedeu o limite. Analise a VKM1, libere o crédito para o material MAT-SD-015 (Qtd {qty}) e remova bloqueios de expedição.",
            "successFeedback": "Limite de crédito analisado e pedido liberado! A expedição agora pode seguir com a VL01N.",
            "errorFeedback": "Bloqueio persistente. Verifique se o status de crédito foi atualizado para 'Liberado' na VKM1.",
            "expectedData": {
                "tipoOrdem": "OR",
                "orgVendas": "1000",
                "canalDist": "10",
                "setorAtiv": "00",
                "cliente": "208015",
                "material": "MAT-SD-015",
                "quantidade": str(qty),
                "incoterms": "FOB",
                "condPagto": "ZF30"
            },
            "f1Help": {
                "title": "Conceito Pleno: VKM1 (Credit Management)",
                "concept": "A VKM1 é a transação central para liberar documentos de vendas retidos por verificação de crédito.",
                "businessImpact": "Equilibra o risco de inadimplência com a necessidade de faturamento da AAM LOGÍSTICA.",
                "brazilRule": "A gestão de crédito integrada evita que mercadorias saiam do depósito sem garantia de pagamento."
            }
        })
        
    return missions

def update_file():
    with open('src/data/missions.ts', 'r') as f:
        content = f.read()
    
    new_missions = generate_missions()
    
    # Convert missions to JS objects (JSON-like but with unquoted keys where possible if we wanted, but standard JSON is fine here)
    missions_js = ",\n".join([json.dumps(m, indent=4, ensure_ascii=False) for m in new_missions])
    
    # Define start and end markers
    start_pattern = r'\{\s+"id":\s+"M081-VL01N",.*?\n\s+\}'
    end_pattern = r'\{\s+"id":\s+"M131-VA02",.*?\n\s+\}'
    
    # We want to replace everything FROM the block M081-VL01N TO the block BEFORE M131-VA02
    # But since the previous structure was just placeholders, we can look for the whole range.
    
    # Find all blocks
    blocks = re.findall(r'\{\s+"id":\s+"M\d{3}-.*?\n\s+\}', content, re.DOTALL)
    
    # Find indices for M081 and M130 (or the one before M131)
    start_idx = -1
    end_idx = -1
    for idx, block in enumerate(blocks):
        if '"id": "M081-VL01N"' in block:
            start_idx = content.find(block)
        if '"id": "M131-VA02"' in block:
            end_idx = content.find(block)
            break
            
    if start_idx != -1 and end_idx != -1:
        new_content = content[:start_idx] + missions_js + ",\n  " + content[end_idx:]
        with open('src/data/missions.ts', 'w') as f:
            f.write(new_content)
        print("Missions 81-130 updated successfully.")
    else:
        print(f"Markers not found: start_idx={start_idx}, end_idx={end_idx}")

if __name__ == "__main__":
    update_file()
