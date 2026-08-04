import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, 
  ChevronRight, HelpCircle, CheckCircle2, Flame, Star, Shield,
  Search, Bell, Plus, MoreHorizontal, ArrowRight, Check, Menu, X,
  Gamepad2, Dices, User, UserCheck
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

function HugoAvatar({ className }: { className?: string }) {
  return (
    <div 
      className={`rounded-2xl flex-shrink-0 flex items-center justify-center bg-gradient-to-tr from-indigo-600 to-blue-500 border-2 border-indigo-400 shadow-md relative group overflow-hidden ${className}`}
      role="img"
      aria-label="Avatar do Chefe Hugo"
    >
      <div className="flex flex-col items-center justify-center text-white">
        <UserCheck className="size-8 text-white" />
        <span className="text-[10px] font-bold tracking-wider leading-none mt-0.5">CH</span>
      </div>
      <div 
        className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full z-10 shadow-sm"
        aria-hidden="true"
      ></div>
    </div>
  );
}



function SAPSDQuestApp() {
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [mode, setMode] = useState("standard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [xp, setXp] = useState(0);
  const [completedMissions, setCompletedMissions] = useState(0);
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
  const [feedbackState, setFeedbackState] = useState<"idle" | "review" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [hintMessage, setHintMessage] = useState("");
  const [trainingHistory, setTrainingHistory] = useState<{
    id: string;
    status: "success" | "error";
    transaction: string;
    message: string;
    timestamp: number;
  }[]>([]);

  // Auto-save & Load persistence
  useEffect(() => {
    // Reset data on initialization for a clean start
    localStorage.removeItem("sap-quest-data");
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
    setSelectedTransaction("");
    setXp(0);
    setCompletedMissions(0);
    setFeedbackState("idle");
    setMode("standard");
  }, []);

  useEffect(() => {
    if (xp > 0 || completedMissions > 0 || selectedTransaction !== "" || feedbackState !== "idle") {
      const dataToSave = {
        formData,
        selectedTransaction,
        xp,
        completedMissions,
        feedbackState,
        mode
      };
      localStorage.setItem("sap-quest-data", JSON.stringify(dataToSave));
    }
  }, [formData, selectedTransaction, xp, completedMissions, feedbackState, mode]);



  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const errors: string[] = [];
    
    if (!selectedTransaction) {
      errors.push("transaction");
      setHintMessage("Ops! Você esqueceu de selecionar a transação correta. Qual código inicia uma Ordem de Venda?");
    } else if (selectedTransaction !== CORRECT_DATA.transaction) {
      errors.push("transaction");
      setHintMessage(`A transação ${selectedTransaction} não é a correta para este processo. Tente a transação padrão de criação de ordens.`);
    }

    if (!formData.orderType || formData.orderType !== CORRECT_DATA.orderType) {
      errors.push("orderType");
      if (!hintMessage) setHintMessage("O 'Tipo de Ordem' está incorreto. Geralmente usamos 'OR' para ordens standard.");
    }
    
    if (!formData.salesOrg || formData.salesOrg !== CORRECT_DATA.salesOrg) {
      errors.push("salesOrg");
      if (!hintMessage) setHintMessage("Verifique a 'Org. de Vendas'. O cliente pertence à organização 1000.");
    }
    
    if (!formData.customer || formData.customer !== CORRECT_DATA.customer) {
      errors.push("customer");
      if (!hintMessage) setHintMessage("O código do 'Cliente' está errado. Dica: ALFA DISTRIBUIDORA é o código 200015.");
    }
    
    if (!formData.material || formData.material !== CORRECT_DATA.material) {
      errors.push("material");
      if (!hintMessage) setHintMessage("O 'Material' solicitado é o MAT-SD-015. Confira a digitação.");
    }

    setValidationErrors(errors);

    if (errors.length === 0) {
      if (feedbackState === "idle") {
        setFeedbackState("review");
        toast.info("Dados validados! Revise o resumo antes de enviar.");
      } else {
        setFeedbackState("success");
        const successMsg = "🎉 Excelente, Adriana! A ordem de venda foi criada com sucesso!";
        setHintMessage(successMsg);
        setXp(prev => Math.min(prev + 25, 500));
        setCompletedMissions(prev => prev + 1);
        setTrainingHistory(prev => {
          const newItem: { id: string; status: "success" | "error"; transaction: string; message: string; timestamp: number } = {
            id: Math.random().toString(36).substr(2, 9),
            status: "success",
            transaction: selectedTransaction,
            message: "Fluxo concluído corretamente.",
            timestamp: Date.now()
          };
          return [newItem, ...prev].slice(0, 10);
        });
        toast.success("Parabéns! Desafio concluído corretamente. +25 XP");
      }
    } else {
      setFeedbackState("error");
      setTrainingHistory(prev => {
        const newItem: { id: string; status: "success" | "error"; transaction: string; message: string; timestamp: number } = {
          id: Math.random().toString(36).substr(2, 9),
          status: "error",
          transaction: selectedTransaction || "N/A",
          message: hintMessage || "Dados incorretos no formulário.",
          timestamp: Date.now()
        };
        return [newItem, ...prev].slice(0, 10);
      });
      toast.error("Ops! Verifique os dados. Erros não geram XP.");
    }
  };


  const resetGame = () => {
    setFeedbackState("idle");
    setValidationErrors([]);
    setHintMessage("");
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
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-background text-foreground font-sans flex flex-col pb-20 md:pb-0">

      {/* 2. Header Bar (Full Width Top Nav) */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center text-primary">
            <Rocket className="size-6" />
          </div>
          <h1 className="font-display font-bold text-lg md:text-xl tracking-tight text-slate-800">SAP SD Quest</h1>
        </div>

        <div className="hidden lg:flex items-center gap-4">
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
                <span className="text-[10px] font-bold text-slate-700 leading-none" aria-label={`XP atual: ${xp} de 500`}>{xp} / 500</span>
              </div>
              <Progress value={(xp / 500) * 100} className="h-1.5 w-24 bg-slate-100" />
            </div>
          </Card>

          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl">
            <div className="size-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              <Star className="size-5" />
            </div>
            <span className="text-xs font-bold text-slate-700">{xp}</span>
          </Card>


          <div className="flex items-center bg-slate-100 p-1 rounded-full">
            <Button 
              variant={mode === "standard" ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-full h-8 text-[11px] font-bold px-4 ${mode === "standard" ? "bg-primary text-white" : "text-slate-500"}`}
              onClick={() => setMode("standard")}
            >
              SD
            </Button>
            <Button 
              variant={mode === "tax" ? "default" : "ghost"} 
              size="sm" 
              className={`rounded-full h-8 text-[11px] font-bold px-4 ${mode === "tax" ? "bg-primary text-white" : "text-slate-500"}`}
              onClick={() => setMode("tax")}
            >
              TAX
            </Button>
          </div>
        </div>
        
        <div className="lg:hidden flex items-center gap-2">
           <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Lvl 1</Badge>
           <Badge variant="outline" className="bg-indigo-50 text-primary border-indigo-200">{xp} XP</Badge>
        </div>
      </header>



      <div className="flex-1 flex flex-col md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr_300px] overflow-hidden relative">
        {/* LEFT SIDEBAR */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-[260px] bg-card border-r border-border p-6 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="space-y-6 h-full flex flex-col justify-between overflow-y-auto">
            <div className="space-y-3 shrink-0">
              <nav className="space-y-0.5">
                {[
                  { icon: Target, label: "Trilha Principal", sub: "Carreira passo a passo", active: true },
                  { icon: Rocket, label: "Treino Rápido", sub: "Desafios aleatórios" },
                  { icon: BookOpen, label: "Módulos & Apostila", sub: "Estude por tópico" },
                  { icon: Crown, label: "Modos Premium", sub: "Recursos exclusivos" },
                  { icon: BarChart3, label: "Estatísticas", sub: "Seu desempenho" },
                  { icon: Trophy, label: "Conquistas", sub: "Medalhas e troféus" },
                  { icon: Settings, label: "Configurações", sub: "Preferências" },
                ].map((item) => (
                  <Button 
                    key={item.label} 
                    variant="ghost" 
                    className={`w-full justify-start h-11 px-3 rounded-xl gap-3 group transition-all ${item.active ? "bg-indigo-50 text-primary border border-indigo-100" : "text-slate-500 hover:bg-slate-50"}`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <div className={`size-8 rounded-lg flex items-center justify-center transition-colors ${item.active ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-primary"}`}>
                      <item.icon className="size-4" />
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className={`text-xs font-bold leading-tight ${item.active ? "text-primary" : "text-slate-700"}`}>{item.label}</span>
                      <span className="text-[9px] font-medium text-slate-400">{item.sub}</span>
                    </div>
                  </Button>
                ))}
              </nav>
            </div>

            {/* Removed Upgrade Card */}
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}


        {/* CENTER CANVAS (Flexible Grid Main Content) */}
        <main className="bg-slate-50 p-3 md:p-4 lg:p-4 overflow-hidden flex-1 flex flex-col space-y-3 lg:space-y-3">
          {/* 1. Chefe Hugo Order Banner */}
          <Card className="p-2 lg:p-3 border-slate-200 shadow-sm rounded-2xl flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-4 shrink-0">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
              <HugoAvatar className="size-12 lg:size-14" />

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">Chefe Hugo</h3>
                  <span className="animate-bounce">👋</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Adriana, crie uma ordem de venda urgente para a <span className="font-bold text-primary">ALFA DISTRIBUIDORA LTDA</span>.
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full md:w-auto gap-2 border-slate-200 text-slate-600 font-bold rounded-xl whitespace-nowrap min-h-[36px] h-9">
              <HelpCircle className="size-4" /> Ajuda (F1)
            </Button>
          </Card>

          {/* 2. Progress Stepper Bar */}
          <div className="hidden lg:flex items-center justify-between px-10 relative py-1 shrink-0">

            <div className="absolute h-0.5 top-1/2 left-10 right-10 -translate-y-1/2 bg-slate-200 z-0"></div>
            {[
              { id: 1, label: "Contexto", status: "complete" },
              { id: 2, label: "Transação", status: "active" },
              { id: 3, label: "Preencher Dados", status: "pending" },
              { id: 4, label: "Revisar & Enviar", status: "pending" },
            ].map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center gap-1 relative z-10 bg-slate-50 px-3">
                <div className={`size-7 rounded-full flex items-center justify-center font-bold text-[10px] transition-all shadow-sm ${
                  step.status === "active" ? "bg-primary text-white scale-110 ring-2 ring-indigo-100" : 
                  step.status === "complete" ? "bg-green-500 text-white" : "bg-white text-slate-400 border border-slate-200"
                }`}>
                  {step.status === "complete" ? <Check className="size-4" /> : step.id}
                </div>
                <span className={`text-[8px] font-bold uppercase tracking-wider ${
                  step.status === "active" ? "text-primary" : "text-slate-400"
                }`}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* 3. Dual Interactive Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 flex-1 overflow-hidden">
            {/* Left Box */}
            <Card className="p-4 lg:p-4 border-slate-200 shadow-sm rounded-2xl flex flex-col h-full bg-white overflow-hidden">
              <div className="mb-3">
                <h3 className="font-semibold text-slate-800 text-lg">Passo 2 de 4: Transação</h3>
                <p className="text-xs text-slate-500">Qual código inicia o processo?</p>
              </div>

              <RadioGroup value={selectedTransaction} onValueChange={setSelectedTransaction} className="space-y-1.5 mb-3 overflow-y-auto pr-1">
                {[
                  { id: "VA01", label: "VA01 - Criar Ordem de Venda" },
                  { id: "BP", label: "BP - Criar / Alterar Cliente" },
                  { id: "VL01N", label: "VL01N - Criar Entrega" },
                  { id: "VF01", label: "VF01 - Faturar" },
                  { id: "SE16N", label: "SE16N - Exibir Dados" },
                ].map((item) => (
                  <Label
                    key={item.id}
                    className={`flex items-center gap-2 p-2 border rounded-xl cursor-pointer transition-all hover:bg-slate-50 min-h-[36px] focus-within:ring-2 focus-within:ring-primary ${
                      selectedTransaction === item.id ? "border-primary bg-indigo-50/50 ring-1 ring-primary" : 
                      validationErrors.includes("transaction") ? "border-red-400 bg-red-50/50 ring-1 ring-red-200" : "border-slate-100"
                    }`}
                  >
                    <RadioGroupItem value={item.id} className="text-primary border-slate-300" aria-label={item.label} />
                    <span className={`font-bold text-xs ${selectedTransaction === item.id ? "text-primary" : "text-slate-700"}`}>
                      {item.label}
                    </span>
                  </Label>

                ))}
              </RadioGroup>

              <div className="mt-auto bg-slate-50 p-3 rounded-xl flex gap-3 border border-slate-100 shrink-0">
                <HugoAvatar className="size-8 rounded-lg ring-0 shadow-none" />

                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  <span className="font-bold text-slate-700 block not-italic mb-0.5 text-[11px]">Dica do Chefe Hugo:</span>
                  Pense: qual transação inicia o processo Order-to-Cash?
                </p>
              </div>
            </Card>

            {/* Right Box */}
            <Card className={`p-4 lg:p-4 border-slate-200 shadow-sm rounded-2xl bg-white transition-opacity flex flex-col h-full overflow-hidden ${!selectedTransaction ? "opacity-50 pointer-events-none select-none" : "opacity-100"}`}>
              <div className="mb-3">
                <h3 className="font-semibold text-slate-800 text-lg">Passo 3 de 4: Dados</h3>
                {!selectedTransaction && <p className="text-[10px] text-amber-600 font-medium">Selecione uma transação no Passo 2.</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-1">
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Tipo de Ordem</Label>
                  <Select value={formData.orderType} onValueChange={(v) => handleInputChange("orderType", v)}>
                    <SelectTrigger className={`h-11 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700 focus:ring-2 focus:ring-primary ${validationErrors.includes("orderType") ? "border-red-400 bg-red-50/50" : ""}`} aria-label="Tipo de Ordem">
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
                    placeholder="Informe a data" 
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
                    className={`h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700 focus:ring-2 focus:ring-primary ${validationErrors.includes("salesOrg") ? "border-red-400 bg-red-50/50" : ""}`}
                    aria-label="Org. de Vendas"
                  />

                </div>

                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Data de Entrega</Label>
                  <Input 
                    placeholder="Informe a data" 
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Canal de Distr.</Label>
                  <Input 
                    placeholder="Código do Canal" 
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
                    placeholder="Código do Cliente" 
                    value={formData.customer}
                    onChange={(e) => handleInputChange("customer", e.target.value)}
                    className={`h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700 focus:ring-2 focus:ring-primary ${validationErrors.includes("customer") ? "border-red-400 bg-red-50/50" : ""}`}
                    aria-label="Cliente"
                  />

                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Preço Líquido</Label>
                  <Input 
                    placeholder="Valor total" 
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700" 
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 space-y-1.5">
                  <Label className="text-[11px] font-bold text-slate-500 uppercase">Material</Label>
                  <Input 
                    placeholder="Código do Material" 
                    value={formData.material}
                    onChange={(e) => handleInputChange("material", e.target.value)}
                    className={`h-10 rounded-xl border-slate-200 bg-slate-50/50 font-bold text-slate-700 focus:ring-2 focus:ring-primary ${validationErrors.includes("material") ? "border-red-400 bg-red-50/50" : ""}`}
                    aria-label="Material"
                  />

                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full h-11 mt-6 bg-primary hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all scale-100 active:scale-95 gap-2"
              >
                📝 Conferir e Submeter
              </Button>

            </Card>
          </div>


          {/* 4. Bottom Grid Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-slate-200 shadow-sm rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-indigo-100 rounded-xl flex items-center justify-center text-primary">
                  <Shield className="size-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-slate-800">Processo OTC</h4>
                  <p className="text-[11px] text-slate-400">Aprenda todo o fluxo.</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-slate-500">Progresso</span>
                  <span className="text-primary">{completedMissions} / 30 missões</span>
                </div>
                <Progress value={(completedMissions / 30) * 100} className="h-1 bg-slate-100" />
              </div>
            </Card>

            <div className="md:col-span-1 lg:col-span-2 space-y-2">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Missões Recentes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  { label: "Criar Ordem - VA01", status: completedMissions > 0 ? "complete" : "locked", value: 0 },
                  { label: "Criar Entrega - VL01N", status: "locked", value: 0 },
                  { label: "Faturar - VF01", status: "locked", value: 0 },
                  { label: "Parceiros BP", status: "locked", value: 0 },
                  { label: "Dados Incompletos", status: "locked", value: 0 },
                ].map((mission, idx) => (
                  <Card key={idx} className={`p-3 border shadow-none rounded-xl flex items-center gap-3 transition-all hover:border-slate-300 min-h-[56px] ${
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
        <aside className="hidden lg:flex border-l border-border bg-card p-4 lg:p-5 flex-col gap-4 overflow-y-auto">
          {/* 1. Feedback Card */}
          <Card className={`p-4 border shadow-sm rounded-2xl relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 shrink-0 ${
            feedbackState === "success" ? "border-green-200 bg-green-50/30" : 
            feedbackState === "error" ? "border-red-200 bg-red-50/30" : 
            "border-slate-200 bg-white"
          }`}>
            <div className={`absolute top-0 right-0 p-2 opacity-20 transition-all ${
              feedbackState === "success" ? "text-green-500" : feedbackState === "error" ? "text-red-500" : "text-slate-200"
            }`}>
              {feedbackState === "success" ? <Star className="size-16" /> : <Target className="size-16" />}
            </div>
            
            <HugoAvatar className="size-20 rounded-3xl mb-4 ring-4 ring-white shadow-md transition-all scale-110" />



            <h3 className="font-semibold text-slate-800 mb-1">Feedback do Chefe Hugo</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6" aria-live="polite">
              {feedbackState === "idle" && "Aguardando preenchimento dos campos. Selecione a transação e preencha os dados à esquerda."}
              {feedbackState === "review" && (
                <div className="text-left space-y-2">
                  <p className="font-bold text-slate-800 border-b pb-1 mb-2 text-center">Resumo do Pedido</p>
                  <p><strong>Transação:</strong> {selectedTransaction || "Não selecionada"}</p>
                  <p><strong>Tipo:</strong> {formData.orderType}</p>
                  <p><strong>Cliente:</strong> {formData.customer}</p>
                  <p><strong>Material:</strong> {formData.material}</p>
                  <p><strong>Org. Vendas:</strong> {formData.salesOrg}</p>
                  
                  <div className="pt-2 flex flex-col gap-2 shrink-0">
                    <Button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700 text-white h-9">
                      Confirmar e Enviar 🚀
                    </Button>
                    <Button variant="ghost" onClick={() => setFeedbackState("idle")} className="w-full text-[10px] text-slate-500 h-8">
                      Voltar e Editar
                    </Button>
                  </div>
                </div>
              )}
              {(feedbackState === "success" || feedbackState === "error") && hintMessage}

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
          <div className="space-y-3 shrink-0">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Seu Progresso</h4>
            <Card className="p-4 border-slate-200 shadow-sm rounded-2xl space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">Missões concluídas</span>
                  <span className="text-slate-800" aria-label={`Missões concluídas: ${completedMissions} de 30`}>{completedMissions} / 30</span>
                </div>
                <Progress value={(completedMissions / 30) * 100} className="h-2 bg-slate-100" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">XP neste nível</span>
                  <span className="text-slate-800" aria-label={`XP atual: ${xp} de 500`}>{xp} / 500</span>
                </div>
                <Progress value={(xp / 500) * 100} className="h-2 bg-slate-100" />
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                <div className="size-8 bg-indigo-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <BookOpen className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Próxima Promoção</span>
                  <span className="text-[11px] font-bold text-slate-700">Faltam {500 - xp} XP para Júnior</span>
                </div>

              </div>
            </Card>
          </div>

          {/* 3. Upgrade Banner Card */}
          <Card className="p-4 border-none bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl relative overflow-hidden group shrink-0">
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
            <Button className="w-full bg-white hover:bg-slate-100 text-indigo-900 font-black rounded-xl h-9 shadow-xl text-xs">
              Ativar Modo Premium
            </Button>
          </Card>
        </aside>
      </div>

      {/* 3. Mobile Navigation (Bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border flex items-center justify-around h-20 md:hidden px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full flex-1 text-primary">
          <Gamepad2 className="size-6" />
          <span className="text-[10px] font-bold">Missões</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full flex-1 text-slate-400">
          <Dices className="size-6" />
          <span className="text-[10px] font-bold">Treino</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full flex-1 text-slate-400">
          <BarChart3 className="size-6" />
          <span className="text-[10px] font-bold">Progresso</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full flex-1 text-slate-400">
          <User className="size-6" />
          <span className="text-[10px] font-bold">Perfil</span>
        </Button>
      </nav>
    </div>
  );
}

