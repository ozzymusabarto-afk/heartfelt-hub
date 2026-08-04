import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, 
  ChevronRight, HelpCircle, CheckCircle2, Flame, Star, Shield,
  Search, Bell, Plus, MoreHorizontal, ArrowRight, Check, Menu, X,
  Gamepad2, Dices, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: SAPSDQuestApp,
});

const CORRECT_DATA = {
  transaction: "VA01",
  orderType: "OR",
  salesOrg: "1000",
  customer: "200015",
  material: "MAT-SD-015",
};

function SAPSDQuestApp() {
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [mode, setMode] = useState("standard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    orderType: "",
    orderDate: "",
    salesOrg: "",
    deliveryDate: "",
    distChannel: "",
    paymentCond: "",
    customer: "",
    price: "",
    material: "",
  });
  const [feedbackState, setFeedbackState] = useState<"idle" | "success" | "error">("idle");

  const avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80";

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!selectedTransaction) {
      setFeedbackState("error");
      toast.error("Selecione uma transação!");
      return;
    }

    const isCorrect = 
      selectedTransaction === CORRECT_DATA.transaction &&
      formData.orderType === CORRECT_DATA.orderType &&
      formData.salesOrg === CORRECT_DATA.salesOrg &&
      formData.customer === CORRECT_DATA.customer &&
      formData.material === CORRECT_DATA.material;

    if (isCorrect) {
      setFeedbackState("success");
      toast.success("Ordem criada com sucesso!");
    } else {
      setFeedbackState("error");
      toast.error("Dados incorretos. Revise o formulário.");
    }
  };

  const resetGame = () => {
    setFeedbackState("idle");
    setSelectedTransaction("");
    setFormData({
      orderType: "",
      orderDate: "",
      salesOrg: "",
      deliveryDate: "",
      distChannel: "",
      paymentCond: "",
      customer: "",
      price: "",
      material: "",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col pb-20 md:pb-0">

      {/* 2. Header Bar (Full Width Top Nav) */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center text-primary">
            <Rocket className="size-6" />
          </div>
          <h1 className="font-display font-bold text-xl tracking-tight text-slate-800">SAP SD Quest</h1>
        </div>

        <div className="flex items-center gap-4">
          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl">
            <div className="size-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <Shield className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 leading-none uppercase">Nível 1</span>
              <span className="text-xs font-bold text-slate-700">Trainee SD</span>
            </div>
          </Card>

          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-end gap-4">
                <span className="text-[10px] font-bold text-slate-400 leading-none uppercase">XP</span>
                <span className="text-[10px] font-bold text-slate-700 leading-none">350 / 500</span>
              </div>
              <Progress value={70} className="h-1.5 w-24 bg-slate-100" />
            </div>
          </Card>

          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl">
            <div className="size-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              <Star className="size-5" />
            </div>
            <span className="text-xs font-bold text-slate-700">1.250 Pontos</span>
          </Card>

          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl">
            <div className="size-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <Flame className="size-5" />
            </div>
            <span className="text-xs font-bold text-slate-700">7 dias</span>
          </Card>

          <div className="flex items-center bg-slate-100 p-1 rounded-full">
            <Button 
              variant={mode === "standard" ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-full h-8 text-[11px] font-bold px-4 ${mode === "standard" ? "bg-primary text-white" : "text-slate-500"}`}
              onClick={() => setMode("standard")}
            >
              SD Standard
            </Button>
            <Button 
              variant={mode === "tax" ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-full h-8 text-[11px] font-bold px-4 ${mode === "tax" ? "bg-primary text-white" : "text-slate-500"}`}
              onClick={() => setMode("tax")}
            >
              Localização Brasil (TAX)
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-[260px_1fr_300px] overflow-hidden">
        {/* LEFT SIDEBAR (Fixed Width: 260px) */}
        <aside className="border-r border-border bg-card p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <nav className="space-y-1">
              {[
                { icon: Target, label: "Trilha Principal", sub: "Sua carreira passo a passo", active: true },
                { icon: Rocket, label: "Treino Rápido", sub: "Desafios aleatórios" },
                { icon: BookOpen, label: "Módulos & Apostila", sub: "Estude por tópico" },
                { icon: Crown, label: "Modos Premium", sub: "Desbloqueie recursos" },
                { icon: BarChart3, label: "Estatísticas", sub: "Seu desempenho" },
                { icon: Trophy, label: "Conquistas", sub: "Medalhas e troféus" },
                { icon: Settings, label: "Configurações", sub: "Conta e preferências" },
              ].map((item) => (
                <Button 
                  key={item.label} 
                  variant="ghost" 
                  className={`w-full justify-start h-14 px-3 rounded-xl gap-4 group transition-all ${item.active ? "bg-indigo-50 text-primary border border-indigo-100" : "text-slate-500 hover:bg-slate-50"}`}
                >
                  <div className={`size-10 rounded-lg flex items-center justify-center transition-colors ${item.active ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-primary"}`}>
                    <item.icon className="size-5" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className={`text-sm font-bold leading-tight ${item.active ? "text-primary" : "text-slate-700"}`}>{item.label}</span>
                    <span className="text-[10px] font-medium text-slate-400">{item.sub}</span>
                  </div>
                </Button>
              ))}
            </nav>
          </div>

          <Card className="bg-indigo-50 border-indigo-100 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 text-indigo-200">
              <Rocket className="size-16 -rotate-12 opacity-20" />
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-1 relative z-10">Quer acelerar sua carreira?</h3>
            <p className="text-[11px] text-slate-500 mb-4 relative z-10">Desbloqueie tudo no SAP SD Quest Premium!</p>
            <Button size="sm" className="w-full bg-primary hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition-all group-hover:scale-[1.02]">
              Ver planos Premium
            </Button>
          </Card>
        </aside>

        {/* CENTER CANVAS (Flexible Grid Main Content) */}
        <main className="bg-slate-50 p-8 overflow-y-auto space-y-8">
          {/* 1. Chefe Hugo Order Banner */}
          <Card className="p-6 border-slate-200 shadow-sm rounded-2xl flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="size-16 bg-blue-100 rounded-2xl overflow-hidden ring-4 ring-blue-50 flex-shrink-0">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hugo&backgroundColor=b6e3f4&style=circle&top=shortHair&accessories=prescription02&facialHair=none&clothing=shirtBlue" 
                  alt="Chefe Hugo" 
                  className="size-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-800">Chefe Hugo</h3>
                  <span className="animate-bounce">👋</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Adriana, recebemos um pedido urgente do cliente <span className="font-bold text-primary">ALFA DISTRIBUIDORA LTDA</span>. 
                  Precisamos criar uma ordem de venda com os dados informados. <span className="underline decoration-indigo-300 decoration-2 underline-offset-2">Atenção aos detalhes!</span>
                </p>
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-slate-200 text-slate-600 font-bold rounded-xl whitespace-nowrap">
              <HelpCircle className="size-4" /> Ajuda do Campo (F1)
            </Button>
          </Card>

          {/* 2. Progress Stepper Bar */}
          <div className="flex items-center justify-between px-10 relative">
            <div className="absolute h-1 top-1/2 left-10 right-10 -translate-y-1/2 bg-slate-200 z-0"></div>
            {[
              { id: 1, label: "Contexto", status: "complete" },
              { id: 2, label: "Transação", status: "active" },
              { id: 3, label: "Preencher Dados", status: "pending" },
              { id: 4, label: "Revisar & Enviar", status: "pending" },
            ].map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center gap-2 relative z-10 bg-slate-50 px-4">
                <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                  step.status === "active" ? "bg-primary text-white scale-110 ring-4 ring-indigo-100" : 
                  step.status === "complete" ? "bg-green-500 text-white" : "bg-white text-slate-400 border border-slate-200"
                }`}>
                  {step.status === "complete" ? <Check className="size-5" /> : step.id}
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${
                  step.status === "active" ? "text-primary" : "text-slate-400"
                }`}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* 3. Dual Interactive Workspace */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Box */}
            <Card className="p-8 border-slate-200 shadow-sm rounded-2xl flex flex-col h-full bg-white">
              <div className="mb-6">
                <h3 className="font-bold text-slate-800 text-lg">Passo 2 de 4: Escolha a Transação correta</h3>
                <p className="text-sm text-slate-500">Qual transação você deve utilizar para resolver esta solicitação?</p>
              </div>

              <RadioGroup value={selectedTransaction} onValueChange={setSelectedTransaction} className="space-y-3 mb-8">
                {[
                  { id: "VA01", label: "VA01 - Criar Ordem de Venda" },
                  { id: "BP", label: "BP - Criar / Alterar Cliente (Business Partner)" },
                  { id: "VL01N", label: "VL01N - Criar Entrega" },
                  { id: "VF01", label: "VF01 - Faturar" },
                  { id: "SE16N", label: "SE16N - Exibir Dados da Tabela" },
                ].map((item) => (
                  <Label
                    key={item.id}
                    className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all hover:bg-slate-50 ${
                      selectedTransaction === item.id ? "border-primary bg-indigo-50/50 ring-1 ring-primary" : "border-slate-100"
                    }`}
                  >
                    <RadioGroupItem value={item.id} className="text-primary border-slate-300" />
                    <span className={`font-bold text-sm ${selectedTransaction === item.id ? "text-primary" : "text-slate-700"}`}>
                      {item.label}
                    </span>
                  </Label>
                ))}
              </RadioGroup>

              <div className="mt-auto bg-slate-50 p-4 rounded-xl flex gap-3 border border-slate-100">
                <div className="size-10 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hugo&style=circle" alt="Hugo Mini" className="size-8" />
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed italic">
                  <span className="font-bold text-slate-700 block not-italic mb-0.5">Dica do Chefe Hugo:</span>
                  Pense: qual transação inicia o processo Order-to-Cash?
                </p>
              </div>
            </Card>

            {/* Right Box */}
            <Card className="p-8 border-slate-200 shadow-sm rounded-2xl bg-white">
              <div className="mb-6">
                <h3 className="font-bold text-slate-800 text-lg">Passo 3 de 4: Preencha os dados da Ordem de Venda</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Tipo de Ordem</Label>
                  <Select value={formData.orderType} onValueChange={(v) => handleInputChange("orderType", v)}>
                    <SelectTrigger className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OR">OR - Ordem Standard</SelectItem>
                      <SelectItem value="QT">QT - Cotação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Data do Pedido</Label>
                  <Input 
                    placeholder="Ex: 17.05.2024" 
                    value={formData.orderDate}
                    onChange={(e) => handleInputChange("orderDate", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Org. de Vendas</Label>
                  <Input 
                    placeholder="Ex: 1000" 
                    value={formData.salesOrg}
                    onChange={(e) => handleInputChange("salesOrg", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Data de Entrega</Label>
                  <Input 
                    placeholder="Ex: 24.05.2024" 
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Canal de Distr.</Label>
                  <Input 
                    placeholder="Ex: 10" 
                    value={formData.distChannel}
                    onChange={(e) => handleInputChange("distChannel", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Condição Pagto.</Label>
                  <Select value={formData.paymentCond} onValueChange={(v) => handleInputChange("paymentCond", v)}>
                    <SelectTrigger className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ZF30">ZF30 - 30 dias</SelectItem>
                      <SelectItem value="Z000">Z000 - À vista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Cliente</Label>
                  <Input 
                    placeholder="Ex: 200015" 
                    value={formData.customer}
                    onChange={(e) => handleInputChange("customer", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Preço Líquido</Label>
                  <Input 
                    placeholder="Ex: 150,00 BRL" 
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Material</Label>
                  <Input 
                    placeholder="Ex: MAT-SD-015" 
                    value={formData.material}
                    onChange={(e) => handleInputChange("material", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full h-12 mt-8 bg-primary hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all scale-100 active:scale-95 gap-2"
              >
                🚀 Conferir e Submeter
              </Button>
            </Card>
          </div>

          {/* 4. Bottom Grid Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-slate-200 shadow-sm rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-indigo-100 rounded-xl flex items-center justify-center text-primary">
                  <Shield className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-slate-800">Processo Order-to-Cash</h4>
                  <p className="text-[11px] text-slate-400">Aprenda e pratique todo o fluxo.</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500">Progresso do Tópico</span>
                  <span className="text-primary">4 / 8 missões</span>
                </div>
                <Progress value={50} className="h-1.5 bg-slate-100" />
              </div>
            </Card>

            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Missões Recentes</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { label: "Criar Ordem - VA01", status: "complete" },
                  { label: "Criar Entrega - VL01N", status: "complete" },
                  { label: "Faturar - VF01", status: "complete" },
                  { label: "Parceiros BP", status: "progress", value: 60 },
                  { label: "Dados Incompletos", status: "locked" },
                ].map((mission, idx) => (
                  <Card key={idx} className={`p-3 border shadow-none rounded-xl flex items-center gap-3 transition-all hover:border-slate-300 ${
                    mission.status === "complete" ? "bg-green-50/50 border-green-100" : 
                    mission.status === "progress" ? "bg-white border-slate-200" : "bg-slate-50 border-slate-100 opacity-60"
                  }`}>
                    <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${
                      mission.status === "complete" ? "bg-green-500 text-white" : 
                      mission.status === "progress" ? "bg-primary text-white" : "bg-slate-200 text-slate-400"
                    }`}>
                      {mission.status === "complete" ? <Check className="size-4" /> : 
                       mission.status === "progress" ? <Rocket className="size-4" /> : <Shield className="size-4" />}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold text-slate-700 truncate">{mission.label}</span>
                      {mission.status === "progress" && (
                        <div className="flex items-center gap-2 mt-0.5">
                          <Progress value={mission.value} className="h-1 flex-1" />
                          <span className="text-[9px] font-bold text-primary">{mission.value}%</span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR (Fixed Width: 300px) */}
        <aside className="border-l border-border bg-card p-6 flex flex-col gap-8 overflow-y-auto">
          {/* 1. Feedback Card */}
          <Card className={`p-6 border shadow-sm rounded-2xl relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 ${
            feedbackState === "success" ? "border-green-200 bg-green-50/30" : 
            feedbackState === "error" ? "border-red-200 bg-red-50/30" : 
            "border-slate-200 bg-white"
          }`}>
            <div className={`absolute top-0 right-0 p-2 opacity-20 transition-all ${
              feedbackState === "success" ? "text-green-500" : feedbackState === "error" ? "text-red-500" : "text-slate-200"
            }`}>
              {feedbackState === "success" ? <Star className="size-16" /> : <Target className="size-16" />}
            </div>
            
            <div className={`size-20 rounded-3xl overflow-hidden mb-4 ring-4 ring-white shadow-md transition-all ${
              feedbackState === "success" ? "bg-green-100 scale-110" : "bg-blue-100"
            }`}>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Hugo&style=circle&clothing=shirtBlue&mouth=${feedbackState === "success" ? "smile" : feedbackState === "error" ? "serious" : "neutral"}`}
                alt="Chefe Hugo Feedback" 
                className="size-full object-cover"
              />
            </div>

            <h3 className="font-bold text-slate-800 mb-1">Feedback do Chefe Hugo</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {feedbackState === "idle" && "Aguardando submissão do pedido. Selecione a transação, preencha os campos e clique em 'Conferir e Submeter'."}
              {feedbackState === "success" && "🎉 Excelente, Adriana! A ordem de venda foi criada com sucesso!"}
              {feedbackState === "error" && "Esse pedido ainda precisa de revisão antes de seguir para faturamento. Revise se a transação e os campos obrigatórios (Tipo, Org, Cliente, Material) estão corretos."}
            </p>

            {feedbackState === "success" && (
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-green-100 flex items-center gap-2 mb-6 animate-bounce">
                <Star className="size-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-black text-slate-800">+25 XP</span>
              </div>
            )}

            <Button 
              onClick={feedbackState === "success" ? resetGame : undefined}
              className={`w-full font-bold rounded-xl h-11 gap-2 shadow-md transition-all ${
                feedbackState === "success" ? "bg-primary hover:bg-indigo-700 text-white" : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              Próximo Pedido <ArrowRight className="size-4" />
            </Button>
          </Card>

          {/* 2. Progress Tracker Card */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Seu Progresso</h4>
            <Card className="p-5 border-slate-200 shadow-sm rounded-2xl space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">Missões concluídas</span>
                  <span className="text-slate-800">12 / 30</span>
                </div>
                <Progress value={40} className="h-2 bg-slate-100" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">XP neste nível</span>
                  <span className="text-slate-800">350 / 500</span>
                </div>
                <Progress value={70} className="h-2 bg-slate-100" />
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <BookOpen className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Próxima Promoção</span>
                  <span className="text-[11px] font-bold text-slate-700">Faltam 150 XP para Júnior</span>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. Upgrade Banner Card */}
          <Card className="p-6 border-none bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-amber-400 rounded-xl flex items-center justify-center text-indigo-900 shadow-lg">
                <Crown className="size-6" />
              </div>
              <h4 className="font-black text-sm uppercase tracking-tighter">Modo Premium</h4>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Simulador de Entrevista IA",
                "Analisador de CV SAP",
                "+300 Missões Avançadas",
                "Localização Brasil Completa"
              ].map((feature, i) => (
                <li key={feature} className="flex items-center gap-2 text-[11px] font-bold">
                  <CheckCircle2 className="size-3 text-amber-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white hover:bg-slate-100 text-indigo-900 font-black rounded-xl h-11 shadow-xl">
              Quero desbloquear!
            </Button>
          </Card>
        </aside>
      </div>
    </div>
  );
}
