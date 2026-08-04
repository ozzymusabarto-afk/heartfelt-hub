import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, 
  ChevronRight, HelpCircle, CheckCircle2, Flame, Star, Shield,
  Search, Bell, Plus, MoreHorizontal, ArrowRight, Check, Menu, X,
  Gamepad2, Dices, User, UserCheck, Download, Upload, Eye, EyeOff, LogIn
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
  const [historyPeriod, setHistoryPeriod] = useState<"all" | "7d" | "30d">("all");

  // Auto-save continuous progress in local storage
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {};
    window.addEventListener("beforeunload", handleBeforeUnload);

    const hasBeenReset = sessionStorage.getItem("sap-quest-session-reset");
    if (!hasBeenReset) {
      if (confirm("Deseja iniciar um novo treino? Os dados anteriores serão zerados para esta sessão.")) {
        localStorage.removeItem("sap-quest-data");
        resetGame();
        setXp(0);
        setCompletedMissions(0);
        setMode("standard");
        sessionStorage.setItem("sap-quest-session-reset", "true");
        toast.success("Sessão resetada com sucesso.");
      } else {
        const saved = localStorage.getItem("sap-quest-data");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            setFormData(parsed.formData);
            setSelectedTransaction(parsed.selectedTransaction);
            setXp(parsed.xp);
            setCompletedMissions(parsed.completedMissions);
            setFeedbackState(parsed.feedbackState);
            setMode(parsed.mode);
          } catch (e) {
            console.error("Failed to load data", e);
          }
        }
        sessionStorage.setItem("sap-quest-session-reset", "true");
      }
    }

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
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

  useEffect(() => {
    const savedData = localStorage.getItem("sap-quest-history");
    if (savedData) {
      try {
        setTrainingHistory(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  useEffect(() => {
    if (trainingHistory.length > 0) {
      localStorage.setItem("sap-quest-history", JSON.stringify(trainingHistory));
    }
  }, [trainingHistory]);

  const exportState = () => {
    const state = { formData, selectedTransaction, xp, completedMissions, mode, trainingHistory };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "sap_sd_quest_state.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    toast.success("Estado exportado!");
  };

  const importState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.xp !== undefined) setXp(json.xp);
        if (json.completedMissions !== undefined) setCompletedMissions(json.completedMissions);
        if (json.formData) setFormData(json.formData);
        if (json.selectedTransaction) setSelectedTransaction(json.selectedTransaction);
        if (json.mode) setMode(json.mode);
        if (json.trainingHistory) setTrainingHistory(json.trainingHistory);
        toast.success("Dados importados!");
      } catch (err) {
        toast.error("Erro ao importar.");
      }
    };
    reader.readAsText(file);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const errors: string[] = [];
    let localHint = "";
    
    if (!selectedTransaction || selectedTransaction !== CORRECT_DATA.transaction) {
      errors.push("transaction");
      localHint = "Transação incorreta para criar Ordem de Venda.";
    } else if (!formData.orderType || formData.orderType !== CORRECT_DATA.orderType) {
      errors.push("orderType");
      localHint = "O 'Tipo de Ordem' standard é OR.";
    } else if (!formData.salesOrg || formData.salesOrg !== CORRECT_DATA.salesOrg) {
      errors.push("salesOrg");
      localHint = "A Org. Vendas correta é 1000.";
    } else if (!formData.customer || formData.customer !== CORRECT_DATA.customer) {
      errors.push("customer");
      localHint = "O cliente ALFA é 200015.";
    } else if (!formData.material || formData.material !== CORRECT_DATA.material) {
      errors.push("material");
      localHint = "O material solicitado é MAT-SD-015.";
    }

    setValidationErrors(errors);
    setHintMessage(localHint);

    if (errors.length === 0) {
      if (feedbackState === "idle") {
        setFeedbackState("review");
        toast.info("Validação OK! Revise antes de enviar.");
      } else {
        setFeedbackState("success");
        setHintMessage("🎉 Excelente! Ordem criada com sucesso!");
        if (mode !== "practice") {
          setXp(prev => Math.min(prev + 25, 500));
          setCompletedMissions(prev => prev + 1);
        }
        setTrainingHistory(prev => [{
          id: Math.random().toString(36).substr(2, 9),
          status: "success" as const,
          transaction: selectedTransaction,
          message: "Concluído com sucesso.",
          timestamp: Date.now()
        }, ...prev].slice(0, 10));
        toast.success(mode === "practice" ? "Sucesso (Modo Prática)" : "Parabéns! +25 XP");
      }
    } else {
      setFeedbackState("error");
      setTrainingHistory(prev => [{
        id: Math.random().toString(36).substr(2, 9),
        status: "error" as const,
        transaction: selectedTransaction || "N/A",
        message: localHint || "Dados incorretos.",
        timestamp: Date.now()
      }, ...prev].slice(0, 10));
      toast.error("Erro nos dados. Tente novamente.");
    }
  };

  const resetGame = () => {
    setFeedbackState("idle");
    setValidationErrors([]);
    setHintMessage("");
    setSelectedTransaction("");
    setFormData({
      orderType: "", orderDate: "", salesOrg: "", deliveryDate: "",
      distChannel: "", paymentCond: "", customer: "", price: "", material: "",
    });
  };

  const filteredHistory = trainingHistory.filter(h => {
    if (historyPeriod === "all") return true;
    const days = historyPeriod === "7d" ? 7 : 30;
    return (Date.now() - h.timestamp) < (days * 24 * 60 * 60 * 1000);
  });

  const successRate = filteredHistory.length > 0 
    ? Math.round((filteredHistory.filter(h => h.status === "success").length / filteredHistory.length) * 100)
    : 0;

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-background text-foreground font-sans flex flex-col pb-20 md:pb-0">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center text-primary">
            <Rocket className="size-6" />
          </div>
          <h1 className="font-display font-bold text-lg md:text-xl tracking-tight text-slate-800">SAP SD Quest</h1>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
            <div className="flex items-center gap-4">
              <div className="flex flex-col border-r pr-4 border-slate-200 text-xs font-bold text-slate-700">
                <span className="text-[9px] font-black text-slate-400 uppercase mb-1">Status</span>
                <div className="flex items-center gap-2">
                  <Shield className="size-3.5 text-amber-600" /> Trainee SD
                </div>
              </div>
              <div className="flex flex-col border-r pr-4 border-slate-200 text-xs font-bold text-slate-700">
                <span className="text-[9px] font-black text-slate-400 uppercase mb-1">Missões</span>
                {completedMissions} / 30
              </div>
              <div className="flex flex-col min-w-[120px]">
                <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase mb-1">
                  <span>XP ({xp})</span> <span>{xp}/500</span>
                </div>
                <Progress value={(xp / 500) * 100} className="h-1.5" />
              </div>
            </div>
          </Card>

          <div className="flex items-center bg-slate-100 p-1 rounded-full ml-2">
            {["standard", "practice", "tax"].map((m) => (
              <Button 
                key={m}
                variant={mode === m ? "default" : "ghost"} 
                size="sm" 
                className={`rounded-full h-8 text-[11px] font-bold px-4 ${mode === m ? "bg-primary text-white" : "text-slate-500"}`}
                onClick={() => setMode(m)}
              >
                {m === "practice" && <EyeOff className="size-3 mr-1" />}
                {m.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l pl-2 border-slate-200">
            <Button variant="ghost" size="icon" className="size-8 text-slate-500" onClick={exportState} title="Exportar">
              <Download className="size-4" />
            </Button>
            <div className="relative">
              <Input type="file" accept=".json" onChange={importState} className="hidden" id="import-state" />
              <Label htmlFor="import-state" className="size-8 flex items-center justify-center rounded-md hover:bg-slate-100 cursor-pointer text-slate-500" title="Importar">
                <Upload className="size-4" />
              </Label>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr_300px] overflow-hidden relative">
        <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] bg-card border-r p-6 transform transition-transform md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <nav className="space-y-1">
            {[
              { icon: Target, label: "Trilha Principal", sub: "Carreira passo a passo", active: true },
              { icon: Rocket, label: "Treino Rápido", sub: "Desafios aleatórios" },
              { icon: BookOpen, label: "Módulos", sub: "Estude por tópico" },
              { icon: BarChart3, label: "Estatísticas", sub: "Seu desempenho" },
            ].map((item) => (
              <Button key={item.label} variant="ghost" className={`w-full justify-start h-11 px-3 rounded-xl gap-3 ${item.active ? "bg-indigo-50 text-primary" : "text-slate-500"}`}>
                <item.icon className="size-4" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                  <span className="text-[9px] text-slate-400">{item.sub}</span>
                </div>
              </Button>
            ))}
          </nav>
        </aside>

        <main className="bg-slate-50 p-4 overflow-y-auto lg:overflow-hidden flex-1 flex flex-col gap-4">
          <Card className="p-3 border-slate-200 shadow-sm rounded-2xl flex items-center gap-4 shrink-0">
            <HugoAvatar className="size-12" />
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">Chefe Hugo 👋</h3>
              <p className="text-xs text-slate-600">Adriana, crie uma ordem de venda urgente para a <b>ALFA DISTRIBUIDORA</b>.</p>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 lg:overflow-hidden">
            <Card className="p-4 flex flex-col h-full bg-white lg:overflow-hidden">
              <h3 className="font-semibold text-slate-800 mb-3 text-sm">Transação</h3>
              <RadioGroup value={selectedTransaction} onValueChange={setSelectedTransaction} className="space-y-2 overflow-y-auto pr-1">
                {["VA01 - Criar Ordem", "BP - Parceiro", "VL01N - Entrega", "VF01 - Faturar"].map((label) => {
                  const id = label.split(" ")[0];
                  if (!id) return null;
                  return (
                    <Label key={id} className={`flex items-center gap-2 p-2 border rounded-xl cursor-pointer hover:bg-slate-50 ${selectedTransaction === id ? "border-primary bg-indigo-50" : "border-slate-100"}`}>
                      <RadioGroupItem value={id} id={id} /> <span className="text-xs font-bold text-slate-700">{label}</span>
                    </Label>
                  );
                })}
              </RadioGroup>
            </Card>

            <Card className={`p-4 bg-white flex flex-col h-full lg:overflow-hidden ${!selectedTransaction ? "opacity-50 pointer-events-none" : ""}`}>
              <h3 className="font-semibold text-slate-800 mb-3 text-sm">Dados do Pedido</h3>
              <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-1">
                {[
                  { id: "orderType", label: "Tipo", type: "select", options: ["OR", "QT"] },
                  { id: "orderDate", label: "Data Pedido" },
                  { id: "salesOrg", label: "Org. Vendas", disabled: !formData.orderType },
                  { id: "customer", label: "Cliente" },
                  { id: "material", label: "Material", span: true }
                ].map((field) => {
                  const fieldId = field.id as keyof typeof formData;
                  return (
                    <div key={field.id} className={`space-y-1 ${field.span ? "col-span-2" : ""}`}>
                      <Label className="text-[10px] font-bold text-slate-500 uppercase">{field.label}</Label>
                      {field.type === "select" ? (
                        <Select value={formData[fieldId] || ""} onValueChange={(v) => handleInputChange(field.id, v)}>
                          <SelectTrigger className="h-9 rounded-lg"><SelectValue placeholder="Selecione" /></SelectTrigger>
                          <SelectContent>{field.options?.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                        </Select>
                      ) : (
                        <Input 
                          disabled={field.disabled}
                          value={formData[fieldId] || ""} 
                          onChange={(e) => handleInputChange(field.id, e.target.value)} 
                          className={`h-9 rounded-lg ${validationErrors.includes(field.id) ? "border-red-400" : ""}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <Button onClick={handleSubmit} className="w-full h-10 mt-4 bg-primary text-white font-bold rounded-xl">📝 Submeter</Button>
            </Card>
          </div>
        </main>

        <aside className="hidden lg:flex border-l bg-card p-5 flex-col gap-4 overflow-y-auto">
          <Card className={`p-4 border shadow-sm rounded-2xl flex flex-col items-center text-center ${feedbackState === "success" ? "bg-green-50" : feedbackState === "error" ? "bg-red-50" : "bg-white"}`}>
            <HugoAvatar className="size-16 mb-4" />
            <h3 className="font-semibold text-xs mb-1">Feedback do Hugo</h3>
            <p className="text-[10px] text-slate-600 mb-4" aria-live="polite">
              {feedbackState === "idle" ? "Selecione a transação e preencha os dados." : hintMessage}
            </p>
            {feedbackState === "success" && <Button onClick={resetGame} className="w-full text-xs h-9">Próximo Pedido</Button>}
          </Card>

          <div className="space-y-3 shrink-0">
            <div className="flex justify-between items-center px-1 text-[10px] font-bold text-slate-400 uppercase">
              <span>Desempenho</span> 
              <Select value={historyPeriod} onValueChange={(v: any) => setHistoryPeriod(v)}>
                <SelectTrigger className="h-5 w-20 text-[9px] border-none bg-transparent shadow-none p-0 focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-[9px]">Tudo</SelectItem>
                  <SelectItem value="7d" className="text-[9px]">7 dias</SelectItem>
                  <SelectItem value="30d" className="text-[9px]">30 dias</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between px-1 text-[10px] font-bold text-indigo-600 mb-1">
              <span>Taxa de Acerto</span>
              <span>{successRate}%</span>
            </div>
            <Card className="p-2 max-h-[140px] overflow-y-auto space-y-1">
              {filteredHistory.map(h => (
                <div key={h.id} className={`p-1.5 rounded-lg border text-[9px] flex justify-between items-center ${h.status === "success" ? "bg-green-50" : "bg-red-50"}`}>
                  <span className="font-bold">{h.transaction}</span>
                  <span className="text-slate-500">{new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
              {filteredHistory.length === 0 && <p className="text-[9px] text-slate-400 text-center py-2">Nenhum registro</p>}
            </Card>

            <div className="space-y-2 text-[10px] font-bold text-slate-400 uppercase">
              <span>Progresso Real</span>
              <Progress value={(completedMissions/30)*100} className="h-1.5" />
              <div className="flex justify-between"><span>XP {xp}/500</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
