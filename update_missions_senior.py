import re
import json

def generate_missions():
    missions = []
    
    # Missões 131 a 140: Devoluções e Notas de Crédito (T-Codes: VA01 / RE / VL01N / VF01)
    for i in range(131, 141):
        qty = 130 + (i - 130)
        missions.append({
            "id": f"M{i:03d}-RE",
            "title": f"{i:03d}. Sênior - Processo de Devolução (RE)",
            "transaction": "VA01",
            "chefeHugoDialog": f"Consultor Sênior, o cliente 208015 está devolvendo mercadorias por avaria. Crie uma Ordem de Devolução tipo RE para o material MAT-SD-015 (Qtd {qty}). Lembre-se que este processo exige referência à fatura original e gera um crédito posterior.",
            "successFeedback": "Ordem de devolução criada! O fluxo de recebimento e a nota de crédito (G2) podem ser processados. Visão analítica perfeita.",
            "errorFeedback": "Falha no processo de devolução. Verifique se o tipo de ordem é RE e se a quantidade de devolução está correta.",
            "expectedData": {
                "tipoOrdem": "RE",
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
                "title": "Diagnóstico Sênior: Devoluções",
                "concept": "O processo de devolução (Return) no SAP integra SD, MM e FI, afetando o estoque e as contas a receber.",
                "businessImpact": "Gerenciar devoluções com eficiência é crucial para a satisfação do cliente e a acuracidade do estoque.",
                "brazilRule": "No Brasil, a devolução deve ser acompanhada de uma Nota Fiscal de Entrada para anular os impostos da venda original."
            }
        })

    # Missões 141 a 150: Estornos e Cancelamentos Operacionais (T-Codes: VF11 / VL09 / VA02)
    for i in range(141, 151):
        qty = 140 + (i - 140)
        missions.append({
            "id": f"M{i:03d}-CANCEL",
            "title": f"{i:03d}. Sênior - Estorno e Cancelamento (VF11/VL09)",
            "transaction": "VF11",
            "chefeHugoDialog": f"Atenção, erro crítico no faturamento! Precisamos estornar a fatura do Cliente 208015 para o material MAT-SD-015 (Qtd {qty}). Use a VF11 e depois anule o PGI via VL09 para reverter o estoque.",
            "successFeedback": "Faturamento estornado e fluxo logístico revertido. O sistema está limpo para a nova tentativa. Excelente suporte N3!",
            "errorFeedback": "Erro ao estornar. Verifique se a fatura já possui lançamentos contábeis compensados ou se a VL09 não foi executada.",
            "expectedData": {
                "tipoOrdem": "S1",
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
                "title": "Diagnóstico Sênior: Estornos",
                "concept": "O estorno (Reversal) no SAP deve seguir a ordem inversa da criação: VF11 (Fatura) -> VL09 (PGI) -> VA02 (Ordem).",
                "businessImpact": "Estornos incorretos causam divergências em inventário e na contabilidade fiscal.",
                "brazilRule": "O cancelamento da NF-e tem prazo legal na SEFAZ (geralmente 24h). Passado o prazo, deve-se emitir NF de estorno."
            }
        })

    # Missões 151 a 160: Tratamento de Incompletude (V.02 / VA02)
    for i in range(151, 161):
        qty = 150 + (i - 150)
        missions.append({
            "id": f"M{i:03d}-INCOMP",
            "title": f"{i:03d}. Sênior - Log de Incompletude (V.02)",
            "transaction": "V.02",
            "chefeHugoDialog": f"Consultor, temos ordens bloqueadas por incompletude. Acesse a V.02 e resolva os campos faltantes para o Cliente 208015, material MAT-SD-015 (Qtd {qty}). Foque nos Incoterms FOB e Cond. Pagto ZF30.",
            "successFeedback": "Log de incompletude resolvido! A ordem foi liberada para remessa. Sua atenção aos detalhes é de nível sênior.",
            "errorFeedback": "A ordem continua incompleta. Verifique o esquema de incompletude no customizing e preencha todos os campos obrigatórios.",
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
                "title": "Diagnóstico Sênior: Incompletude",
                "concept": "O Log de Incompletude (Incompletion Log) garante que nenhum documento avance sem dados vitais para faturamento ou logística.",
                "businessImpact": "Reduz o retrabalho manual no faturamento e evita rejeições sistêmicas.",
                "brazilRule": "Campos como NCM, Origem da Mercadoria e Dados do Transportador são frequentes causas de incompletude no Brasil."
            }
        })

    # Missões 161 a 170: Cenários Especiais e Arquitetura (VA01 / VF01 / VKM1)
    for i in range(161, 171):
        qty = 160 + (i - 160)
        missions.append({
            "id": f"M{i:03d}-ADV",
            "title": f"{i:03d}. Sênior - Arquitetura de Vendas Complexa",
            "transaction": "VA01",
            "chefeHugoDialog": f"Desafio final! Precisamos estruturar uma Venda Triangular complexa para o Cliente 208015. Material MAT-SD-015 (Qtd {qty}). Garanta a integração total do fluxo OTC, desde a análise de crédito até o faturamento consolidado.",
            "successFeedback": "Cenário complexo implementado com maestria! Você dominou o fluxo OTC da AAM LOGÍSTICA. Nível Sênior alcançado!",
            "errorFeedback": "O fluxo quebrou em algum ponto. Analise o fluxo de documentos e identifique onde a integração falhou.",
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
                "title": "Diagnóstico Sênior: Arquitetura OTC",
                "concept": "O Order-to-Cash (OTC) avançado envolve Invoice Split, Vendas de Terceiros e Processamento Intercompany.",
                "businessImpact": "Uma arquitetura robusta permite que a AAM LOGÍSTICA opere em modelos de negócio diversificados.",
                "brazilRule": "Vendas triangulares exigem emissão de Notas Fiscais simbólicas e de entrega, respeitando a legislação de ICMS/IPI."
            }
        })
        
    return missions

def update_file():
    with open('src/data/missions.ts', 'r') as f:
        content = f.read()
    
    new_missions = generate_missions()
    
    # Convert missions to JS objects
    missions_js = ",\n".join([json.dumps(m, indent=4, ensure_ascii=False) for m in new_missions])
    
    # Locate the M131 block and the end of the MISSIONS array
    # Since I just updated 81-130, M131 should be a placeholder or the next one
    
    blocks = re.findall(r'\{\s+"id":\s+"M\d{3}-.*?\n\s+\}', content, re.DOTALL)
    
    start_idx = -1
    for block in blocks:
        if '"id": "M131-VA02"' in block:
            start_idx = content.find(block)
            break
            
    if start_idx != -1:
        # Find the end of the array (last ']')
        # But wait, there might be more placeholders after M131 if we had a lot.
        # Let's just replace from M131 until the end of the array brackets.
        
        # Actually, let's find the closing bracket of the array
        end_idx = content.rfind('];')
        
        if end_idx != -1:
            new_content = content[:start_idx] + missions_js + "\n" + content[end_idx:]
            with open('src/data/missions.ts', 'w') as f:
                f.write(new_content)
            print("Missions 131-170 updated successfully.")
        else:
            print("Closing array bracket '];' not found.")
    else:
        print("Marker M131-VA02 not found.")

if __name__ == "__main__":
    update_file()
