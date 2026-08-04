import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, ChevronRight, HelpCircle, CheckCircle2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: SAPSDQuestApp,
});

function SAPSDQuestApp() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-foreground font-sans">
      {/* Mobile-first Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-[#fcfbf8]/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="size-6 text-primary" />
          <h1 className="font-display font-bold text-lg">SAP SD Quest</h1>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden sm:inline">Nível 1: Trainee SD</span>
          <div className="flex flex-col gap-1 w-24">
            <Progress value={70} className="h-1.5" />
          </div>
          <span className="text-primary font-bold">1.250 XP</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr,300px] gap-6 p-4 lg:p-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block space-y-8">
          <nav className="space-y-2">
            {[
              { icon: Target, label: "Trilha Principal" },
              { icon: Rocket, label: "Treino Rápido" },
              { icon: BookOpen, label: "Módulos & Apostila" },
              { icon: Crown, label: "Modos Premium" },
              { icon: BarChart3, label: "Estatísticas" },
              { icon: Trophy, label: "Conquistas" },
              { icon: Settings, label: "Configurações" },
            ].map((item) => (
              <Button key={item.label} variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-primary">
                <item.icon className="size-5" />
                {item.label}
              </Button>
            ))}
          </nav>
          <Card className="p-4 bg-primary text-primary-foreground">
            <p className="font-bold mb-2">Quer acelerar sua carreira?</p>
            <Button variant="secondary" className="w-full text-xs">Saber mais</Button>
          </Card>
        </aside>

        {/* Center Canvas */}
        <main className="space-y-6">
          <div className="bg-white p-4 rounded-xl border border-border shadow-soft flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-muted rounded-full flex items-center justify-center font-bold">Hugo</div>
              <p className="text-sm">"Ajude o cliente ALFA DISTRIBUIDORA com o novo pedido de venda!"</p>
            </div>
            <Button size="sm" className="gap-2">
              <HelpCircle className="size-4" /> Ajuda (F1)
            </Button>
          </div>

          <div className="flex gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <span>[1 Contexto]</span>
            <span className="text-primary">[2 Transação]</span>
            <span>[3 Preencher]</span>
            <span>[4 Revisar]</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="font-display text-xl mb-4">Código da Transação</h2>
              <div className="space-y-2">
                {["VA01", "BP", "VL01N", "VF01", "SE16N"].map((code) => (
                  <div key={code} className="p-3 border border-border rounded-lg hover:border-primary cursor-pointer transition-colors flex justify-between">
                    {code} <ChevronRight className="size-4" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="font-display text-xl mb-4">Dados da Ordem</h2>
              <div className="space-y-4">
                {["Tipo de Ordem", "Org. Vendas", "Cliente", "Material"].map((field) => (
                  <div key={field}>
                    <label className="text-xs font-bold text-muted-foreground">{field}</label>
                    <input className="w-full p-2 border border-border rounded-md mt-1" placeholder={`Preencher ${field}...`} />
                  </div>
                ))}
                <Button className="w-full mt-4">Conferir e Submeter</Button>
              </div>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          <Card className="p-4 border-success/50 bg-success/5">
            <h3 className="font-bold text-success">Feedback do Chefe Hugo</h3>
            <p className="text-sm text-muted-foreground mt-2">Ótimo começo! Continue atento às datas.</p>
            <Button className="w-full mt-4">Próximo Pedido</Button>
          </Card>

          <Card className="p-4">
            <h3 className="font-bold">Seu Progresso</h3>
            <p className="text-xs text-muted-foreground mt-1">Missões: 12/30</p>
            <Progress value={40} className="mt-2" />
          </Card>
        </aside>
      </div>
    </div>
  );
}
