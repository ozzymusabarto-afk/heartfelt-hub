import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { 
  Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, 
  ChevronRight, HelpCircle, CheckCircle2, Flame, Star, Shield,
  Search, Bell, Plus, MoreHorizontal, ArrowRight, Check, Menu, X,
  Gamepad2, Dices, User, UserCheck, Download, Upload, Eye, EyeOff, LogIn,
  FileText, Undo2
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
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
    incoterms: "",
    division: "",
    poNumber: "",
  });
  const [feedbackState, setFeedbackState] = useState<"idle" | "review" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [hintMessage, setHintMessage] = useState("");
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sap-quest-help-expanded");
      return saved ? JSON.parse(saved) : { "VA01": true };
    }
    return { "VA01": true };
  });
  const helpScrollRef = useRef<HTMLDivElement>(null);
  const [trainingHistory, setTrainingHistory] = useState<{
    id: string;
    status: "success" | "error";
    transaction: string;
    message: string;
    timestamp: number;
    xpEarned?: number;
    missionName?: string;
    progressAtTime?: number;
  }[]>([]);
  const [historyPeriod, setHistoryPeriod] = useState<"all" | "7d" | "30d">("all");
  const [historySearch, setHistorySearch] = useState("");
  const [lastStateBeforeReset, setLastStateBeforeReset] = useState<any>(null);
  const [showUndoReset, setShowUndoReset] = useState(false);
  const helpCloseRef = useRef<HTMLButtonElement>(null);
  const helpContainerRef = useRef<HTMLDivElement>(null);
  const undoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const generatePDFReport = () => {
    toast.info("Gerando relatório...");
    // Mock PDF generation logic
    const content = `
      RELATÓRIO DE TREINAMENTO SAP SD QUEST
      Data: ${new Date().toLocaleDateString()}
      -------------------------------------
      Status: Nível 1 - Trainee SD
      XP Total: ${xp} / 500
      Missões Concluídas: ${completedMissions} / 30
      Taxa de Sucesso: ${successRate}%
      -------------------------------------
      Missão Atual: Criar Ordem (VA01) - ${completedMissions > 0 ? "CONCLUÍDO" : "DISPONÍVEL"}
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio_sap_sd_${Date.now()}.txt`;
    link.click();
    toast.success("Relatório baixado com sucesso!");
  };

  // Auto-save continuous progress and draft form
  useEffect(() => {
    const hasStarted = sessionStorage.getItem("sap-quest-session-started");
    
    // Recovery logic
    const saved = localStorage.getItem("sap-quest-data");
    const savedHistory = localStorage.getItem("sap-quest-history");
    
    if (!hasStarted) {
      // Force reset for new session
      localStorage.removeItem("sap-quest-data");
      localStorage.removeItem("sap-quest-history");
      setFormData({
        orderType: "", orderDate: "", salesOrg: "", deliveryDate: "",
        distChannel: "", paymentCond: "", customer: "", price: "", material: "",
        incoterms: "", division: "", poNumber: "",
      });
      setSelectedTransaction("");
      setXp(0);
      setCompletedMissions(0);
      setTrainingHistory([]);
      setFeedbackState("idle");
      sessionStorage.setItem("sap-quest-session-started", "true");
    } else {
      // Load saved state if session already started
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.formData) setFormData(parsed.formData);
          if (parsed.selectedTransaction) setSelectedTransaction(parsed.selectedTransaction);
          if (parsed.xp !== undefined) setXp(parsed.xp);
          if (parsed.completedMissions !== undefined) setCompletedMissions(parsed.completedMissions);
          if (parsed.feedbackState) setFeedbackState(parsed.feedbackState);
          if (parsed.mode) setMode(parsed.mode);
        } catch (e) {
          console.error("Failed to load data", e);
        }
      }
      if (savedHistory) {
        try {
          setTrainingHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error("Failed to parse history", e);
        }
      }
    }
  }, []);

  // Continuous auto-save and tab sync
  useEffect(() => {
    const dataToSave = {
      formData,
      selectedTransaction,
      xp,
      completedMissions,
      feedbackState,
      mode
    };
    localStorage.setItem("sap-quest-data", JSON.stringify(dataToSave));

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "sap-quest-data" && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed.xp !== undefined) setXp(parsed.xp);
          if (parsed.completedMissions !== undefined) setCompletedMissions(parsed.completedMissions);
          // Only update feedback if it changed to keep UI consistent
          if (parsed.feedbackState && parsed.feedbackState !== feedbackState) setFeedbackState(parsed.feedbackState);
        } catch (err) {
          console.error("Tab sync error", err);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [formData, selectedTransaction, xp, completedMissions, feedbackState, mode]);

  // Shortcut for F1 Help and Keyboard Access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F1") {
        e.preventDefault();
        setIsHelpOpen(prev => !prev);
      }
      if (e.key === "Escape" && isHelpOpen) {
        setIsHelpOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHelpOpen]);

  useEffect(() => {
    if (isHelpOpen && helpCloseRef.current) {
      helpCloseRef.current.focus();
    }
  }, [isHelpOpen]);

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
    } else if (!formData.incoterms || formData.incoterms !== "FOB") {
      errors.push("incoterms");
      localHint = "Para este exercício, utilize Incoterms FOB.";
    } else if (!formData.distChannel || formData.distChannel !== "10") {
      errors.push("distChannel");
      localHint = "Canal de Distribuição deve ser 10 (Venda Direta).";
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
          timestamp: Date.now(),
          xpEarned: mode !== "practice" ? 25 : 0,
          missionName: "Criar Ordem (VA01)",
          progressAtTime: Math.round(((completedMissions + (mode !== "practice" ? 1 : 0)) / 30) * 100)
        }, ...prev].slice(0, 10));
        
        if (mode !== "practice") {
          toast.success("Missão Concluída!", {
            description: "Você ganhou +25 XP! Próximo objetivo: Parceiros BP.",
          });
        } else {
          toast.success("Sucesso (Modo Prática)");
        }
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
      incoterms: "", division: "", poNumber: "",
    });
  };

  const fullReset = () => {
    if (confirm("Tem certeza que deseja reiniciar TODO o seu progresso? Isso limpará seu XP e histórico de missões.")) {
      // Salva estado para desfazer
      const currentState = { xp, completedMissions, trainingHistory };
      setLastStateBeforeReset(currentState);
      setShowUndoReset(true);

      // Limpa dados
      setXp(0);
      setCompletedMissions(0);
      setTrainingHistory([]);
      resetGame();
      localStorage.removeItem("sap-quest-data");
      localStorage.removeItem("sap-quest-history");
      toast.success("Progresso reiniciado!");

      // Inicia timeout para ocultar botão de desfazer
      if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
      undoTimeoutRef.current = setTimeout(() => {
        setShowUndoReset(false);
        setLastStateBeforeReset(null);
      }, 10000); // 10 segundos
    }
  };

  const undoReset = () => {
    if (lastStateBeforeReset) {
      setXp(lastStateBeforeReset.xp);
      setCompletedMissions(lastStateBeforeReset.completedMissions);
      setTrainingHistory(lastStateBeforeReset.trainingHistory);
      setShowUndoReset(false);
      setLastStateBeforeReset(null);
      if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
      toast.success("Reinício desfeito com sucesso!");
    }
  };

  const filteredHistory = trainingHistory.filter(h => {
    const matchesSearch = (h.missionName || h.transaction || "").toLowerCase().includes(historySearch.toLowerCase());
    if (!matchesSearch) return false;
    
    if (historyPeriod === "all") return true;
    const days = historyPeriod === "7d" ? 7 : 30;
    return (Date.now() - h.timestamp) < (days * 24 * 60 * 60 * 1000);
  });

  const successRate = filteredHistory.length > 0 
    ? Math.round((filteredHistory.filter(h => h.status === "success").length / filteredHistory.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col pb-20 md:pb-0 overflow-y-auto">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <div className="size-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Rocket className="size-6" />
          </div>
          <h1 className="font-display font-bold text-lg md:text-xl tracking-tight text-slate-800">SAP SD Quest</h1>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* Escudo: Nível 1 - Trainee SD */}
            <Card className="flex items-center gap-2 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
              <Shield className="size-4 text-indigo-600" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-400 uppercase leading-none mb-0.5">Status</span>
                <span className="text-[11px] font-bold text-slate-700 leading-none">Nível 1 - Trainee SD</span>
              </div>
            </Card>

            {/* Barra de progresso: XP (350 / 500 XP) */}
            {/* Barra de progresso: XP (350 / 500 XP) */}
            <Card className="flex items-center gap-3 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50 min-w-[160px]">
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[9px] font-black text-slate-400 uppercase leading-none">Progresso XP</span>
                  <span className="text-[10px] font-bold text-indigo-600 leading-none">{xp} / 500 XP</span>
                </div>
                <Progress value={(xp / 500) * 100} className="h-1.5 bg-indigo-100" />
              </div>
            </Card>

            {/* Estrela Amarela: Pontos 1.250 */}
            <Card className="flex items-center gap-2 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
              <Star className="size-4 text-amber-500 fill-amber-500" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-400 uppercase leading-none mb-0.5">Pontos</span>
                <span className="text-[11px] font-bold text-slate-700 leading-none">{xp * 5}</span>
              </div>
            </Card>

            {/* Chama Laranja: Sequência 7 dias */}
            <Card className="flex items-center gap-2 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
              <Flame className="size-4 text-orange-500 fill-orange-500" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-400 uppercase leading-none mb-0.5">Sequência</span>
                <span className="text-[11px] font-bold text-slate-700 leading-none">7 dias</span>
              </div>
            </Card>

            {/* Select/Badges: Modo [SD Standard] e Localização Brasil (TAX) */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl ml-1 gap-1">
              <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-lg px-2 py-0.5 text-[10px] font-bold">SD Standard</Badge>
              <Badge variant="outline" className="border-slate-300 text-slate-600 rounded-lg px-2 py-0.5 text-[10px] font-bold bg-white">Brasil (TAX)</Badge>
            </div>
          </div>

          <div className="flex items-center gap-1 border-l ml-2 pl-2 border-slate-200">
            <Button variant="ghost" size="icon" className="size-8 text-slate-500 hover:text-indigo-600" onClick={exportState} title="Exportar">
              <Download className="size-4" />
            </Button>
            <div className="relative">
              <Input type="file" accept=".json" onChange={importState} className="hidden" id="import-state" />
              <Label htmlFor="import-state" className="size-8 flex items-center justify-center rounded-md hover:bg-slate-100 cursor-pointer text-slate-500 hover:text-indigo-600" title="Importar">
                <Upload className="size-4" />
              </Label>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 h-8 text-[11px] font-bold border-indigo-200 text-indigo-600 hover:bg-indigo-50 gap-1.5 rounded-lg"
              onClick={() => toast.info("Sincronização na nuvem estará disponível em breve! Por enquanto, use Exportar/Importar.")}
            >
              <LogIn className="size-3" /> LOGIN
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row relative">
        <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] bg-card border-r p-6 transform transition-transform md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} h-screen md:h-auto flex flex-col`}>
          <nav className="space-y-1 flex-1">
            {[
              { icon: Gamepad2, label: "Trilha Principal", sub: "Carreira passo a passo", active: true },
              { icon: Rocket, label: "Treino Rápido", sub: "Desafios aleatórios" },
              { icon: BookOpen, label: "Módulos & Apostila", sub: "Estude por tópico" },
              { icon: Crown, label: "Modos Premium", sub: "Recursos exclusivos" },
              { icon: BarChart3, label: "Estatísticas", sub: "Seu desempenho" },
              { icon: Trophy, label: "Conquistas", sub: "Medalhas e troféus" },
              { icon: Settings, label: "Configurações", sub: "Conta e preferências" },
            ].map((item) => (
              <Button key={item.label} variant="ghost" className={`w-full justify-start h-12 px-3 py-2 rounded-xl gap-3 ${item.label === "Trilha Principal" ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" : "text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"}`}>
                <item.icon className={`size-5 ${item.label === "Trilha Principal" ? "text-white" : ""}`} />
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                  <span className={`text-[9px] ${item.label === "Trilha Principal" ? "text-indigo-100" : "text-slate-400"}`}>{item.sub}</span>
                </div>
              </Button>
            ))}
          </nav>

          <Card className="mt-8 p-4 bg-indigo-50 border-indigo-100 rounded-2xl relative overflow-hidden group cursor-pointer hover:bg-indigo-100 transition-colors">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="size-4 text-indigo-600" />
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider">Premium</span>
              </div>
              <p className="text-[11px] font-bold text-slate-700 leading-snug mb-3">
                Quer acelerar sua carreira? Desbloqueie tudo no SAP SD Quest Premium!
              </p>
              <Button size="sm" className="w-full h-8 bg-indigo-600 text-white text-[10px] font-bold rounded-lg gap-2">
                ASSINAR AGORA <ArrowRight className="size-3" />
              </Button>
            </div>
            <Crown className="absolute -right-4 -bottom-4 size-20 text-indigo-200/50 -rotate-12 group-hover:scale-110 transition-transform" />
          </Card>
        </aside>

        <main className="bg-slate-50 p-4 flex-1 flex flex-col gap-4">
          <Card className="p-0 border-slate-200 shadow-sm rounded-2xl overflow-hidden shrink-0">
            <div className="p-4 flex items-center justify-between gap-4 bg-white">
              <div className="flex items-center gap-4">
                <HugoAvatar className="size-14" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Chefe Hugo 👋</h3>
                  <p className="text-xs text-slate-600">Adriana, crie uma ordem de venda urgente para a <b>ALFA DISTRIBUIDORA</b>.</p>
                </div>
              </div>
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`h-8 text-[10px] font-bold gap-1.5 border-slate-200 rounded-lg transition-colors ${isHelpOpen ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-500'}`}
                  onClick={() => setIsHelpOpen(!isHelpOpen)}
                >
                  <HelpCircle className="size-3" /> AJUDA DO CAMPO [F1]
                </Button>
                
                {isHelpOpen && (
                  <Card 
                    className="absolute right-0 top-10 w-[320px] p-5 z-50 shadow-2xl border-indigo-100 animate-in fade-in zoom-in duration-200"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="help-title"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="size-4 text-indigo-600" />
                        <h4 id="help-title" className="text-xs font-black text-indigo-600 uppercase tracking-widest">Ajuda Contextual</h4>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-6 h-6 w-6 hover:bg-slate-100 rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" 
                        onClick={() => setIsHelpOpen(false)}
                        ref={helpCloseRef}
                        aria-label="Fechar ajuda"
                      >
                        <X className="size-4 text-slate-400" />
                      </Button>
                    </div>
                    <div className="space-y-3 text-[12px] text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                      <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                        <p className="font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-indigo-600" /> Transação VA01
                        </p>
                        <p>Utilizada no SAP para a criação de ordens de venda. É o ponto de entrada para o processo Order-to-Cash (O2C).</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate-400" /> Tipo de Ordem (OR)
                        </p>
                        <p>O código "OR" (Standard Order) define o fluxo comercial padrão para vendas de produtos em estoque.</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate-400" /> Organização de Vendas
                        </p>
                        <p>Define a unidade responsável pela comercialização. No exercício, utilize o código <b>1000</b>.</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate-400" /> Canais e Setores
                        </p>
                        <p><b>Canal 10:</b> Venda Direta. <br/> <b>Setor 00:</b> Divisão de produtos padrão.</p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate-400" /> Incoterms & Pagamento
                        </p>
                        <p>Utilize <b>FOB</b> (Free On Board) para frete e <b>0001</b> para pagamento imediato.</p>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <p className="font-bold text-amber-800 mb-1 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-amber-500" /> Dica de Mestre
                        </p>
                        <p>Certifique-se de que o emissor da ordem (Sold-to Party) seja o código <b>200015</b>.</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <span>Pressione [ESC] para fechar</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[9px]">v1.4.0</span>
                    </div>
                  </Card>
                )}
              </div>
            </div>
            
            {/* Stepper de 4 passos */}
            <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex items-center justify-between">
              {[
                { n: "1", label: "Contexto", color: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
                { n: "2", label: "Transação", color: "bg-indigo-600", text: "text-indigo-700", bg: "bg-indigo-50", active: true },
                { n: "3", label: "Preencher Dados", color: "bg-slate-200", text: "text-slate-400", bg: "bg-slate-100" },
                { n: "4", label: "Revisar & Enviar", color: "bg-slate-200", text: "text-slate-400", bg: "bg-slate-100" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 flex-1 group">
                  <div className={`size-6 rounded-full flex items-center justify-center text-[10px] font-black text-white ${step.color} shadow-sm`}>
                    {step.n}
                  </div>
                  <span className={`text-[10px] font-bold ${step.text} uppercase tracking-wider`}>{step.label}</span>
                  {i < 3 && <div className="h-px bg-slate-200 flex-1 mx-4" />}
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 flex flex-col bg-white border-slate-200 shadow-sm rounded-2xl">
              <h3 className="font-bold text-slate-800 mb-3 text-sm flex items-center gap-2">
                <Dices className="size-4 text-indigo-600" /> Transação
              </h3>
              <RadioGroup value={selectedTransaction} onValueChange={setSelectedTransaction} className="space-y-2 pr-1">
                {["VA01 - Criar Ordem", "BP - Parceiro", "VL01N - Entrega", "VF01 - Faturar"].map((label) => {
                  const id = label.split(" ")[0];
                  if (!id) return null;
                  return (
                    <Label key={id} className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${selectedTransaction === id ? "border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600" : "border-slate-100 hover:bg-slate-50"}`}>
                      <RadioGroupItem value={id} id={id} className="text-indigo-600" /> 
                      <span className={`text-xs font-bold ${selectedTransaction === id ? "text-indigo-700" : "text-slate-600"}`}>{label}</span>
                    </Label>
                  );
                })}
              </RadioGroup>
            </Card>

            <Card className={`p-4 bg-white border-slate-200 shadow-sm rounded-2xl flex flex-col ${!selectedTransaction ? "opacity-50 pointer-events-none" : ""}`}>
              <h3 className="font-bold text-slate-800 mb-3 text-sm flex items-center gap-2">
                <Target className="size-4 text-indigo-600" /> Dados do Pedido
              </h3>
              <div className="grid grid-cols-2 gap-3 pr-1">
                {[
                  { id: "orderType", label: "Tipo", type: "select", options: ["OR", "QT"] },
                  { id: "orderDate", label: "Data Pedido" },
                  { id: "salesOrg", label: "Org. Vendas", disabled: !formData.orderType },
                  { id: "distChannel", label: "Canal Dist.", type: "select", options: ["10", "20"] },
                  { id: "division", label: "Setor Ativ.", type: "select", options: ["00", "01"] },
                  { id: "customer", label: "Emissor" },
                  { id: "poNumber", label: "Nº Pedido" },
                  { id: "material", label: "Material" },
                  { id: "price", label: "Preço" },
                  { id: "incoterms", label: "Incoterms", type: "select", options: ["FOB", "CIF"] },
                  { id: "paymentCond", label: "Cond. Pagto.", type: "select", options: ["0001", "NT30"] },
                ].map((field) => {
                  const fieldId = field.id as keyof typeof formData;
                  return (
                    <div key={field.id} className={`space-y-1`}>
                      <Label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">{field.label}</Label>
                      {field.type === "select" ? (
                        <Select value={formData[fieldId] || ""} onValueChange={(v) => handleInputChange(field.id, v)}>
                          <SelectTrigger className="h-9 rounded-lg border-slate-200 text-xs"><SelectValue placeholder="-" /></SelectTrigger>
                          <SelectContent>{field.options?.map(o => <SelectItem key={o} value={o} className="text-xs">{o}</SelectItem>)}</SelectContent>
                        </Select>
                      ) : (
                        <Input 
                          disabled={field.disabled}
                          value={formData[fieldId] || ""} 
                          onChange={(e) => handleInputChange(field.id, e.target.value)} 
                          className={`h-9 rounded-lg border-slate-200 text-xs placeholder:text-slate-300 focus:ring-indigo-600 ${validationErrors.includes(field.id) ? "border-red-400 ring-1 ring-red-400" : ""}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <Button 
                onClick={handleSubmit} 
                className="w-full h-10 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
              >
                📝 CONFERIR E SUBMETER
              </Button>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Tópico Atual</h3>
              <Card className="p-4 bg-white shadow-sm border-indigo-100 rounded-2xl border-l-4 border-l-indigo-600 relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-black rounded-md mb-2">MODULO 01</span>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Processo Order-to-Cash</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                    Aprenda e pratique todo o fluxo de pedido à fatura.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">[{completedMissions} / 8 Missões]</span>
                    <Button variant="ghost" size="sm" className="h-7 text-indigo-600 text-[10px] font-bold hover:bg-indigo-50">VER DETALHES</Button>
                  </div>
                </div>
                <Rocket className="absolute -right-4 -top-4 size-16 text-indigo-50 -rotate-12 group-hover:scale-110 transition-transform" />
              </Card>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Missões Recentes</h3>
              <div className="grid grid-cols-1 gap-2">
                <Card className={`p-3 bg-white border-slate-200 shadow-sm rounded-xl flex items-center justify-between group hover:border-indigo-200 transition-colors ${completedMissions > 0 ? "" : "border-indigo-200 bg-indigo-50/10"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-lg flex items-center justify-center ${completedMissions > 0 ? "bg-emerald-50 text-emerald-600" : "bg-indigo-50 text-indigo-600"}`}>
                      {completedMissions > 0 ? <CheckCircle2 className="size-5" /> : <Rocket className="size-5" />}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800">Criar Ordem (VA01)</h4>
                      <span className={`text-[9px] uppercase font-black ${completedMissions > 0 ? "text-emerald-600" : "text-indigo-600"}`}>
                        {completedMissions > 0 ? "Concluído" : "Disponível / Em Aberto"}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`size-4 ${completedMissions > 0 ? "text-emerald-500" : "text-indigo-600"}`} />
                </Card>
                
                <Card className="p-3 bg-white border-slate-100/50 shadow-sm rounded-xl flex items-center justify-between opacity-60 bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-slate-100 text-slate-400 rounded-lg flex items-center justify-center">
                      <BarChart3 className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-500">Parceiros BP</h4>
                      <span className="text-[9px] text-slate-400 uppercase font-black">Bloqueado</span>
                    </div>
                  </div>
                  <Settings className="size-4 text-slate-200" />
                </Card>
 
                <Card className="p-3 bg-white border-slate-100/50 shadow-sm rounded-xl flex items-center justify-between opacity-60 bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-slate-100 text-slate-400 rounded-lg flex items-center justify-center">
                      <X className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-500">Fluxo de Entrega</h4>
                      <span className="text-[9px] text-slate-400 uppercase font-black">Bloqueado</span>
                    </div>
                  </div>
                  <Settings className="size-4 text-slate-200" />
                </Card>
              </div>
            </div>
          </div>
        </main>

        <aside className="hidden lg:flex w-[320px] border-l bg-card p-5 flex-col gap-6">
          <Card className={`p-4 border shadow-sm rounded-2xl flex flex-col items-center text-center relative overflow-hidden ${feedbackState === "success" ? "bg-emerald-50 border-emerald-200" : feedbackState === "error" ? "bg-red-50 border-red-200" : "bg-white border-slate-200"}`}>
            <HugoAvatar className="size-20 mb-4" />
            <h3 className="font-bold text-xs mb-1 text-slate-800">Feedback do Chefe Hugo</h3>
            <p className={`text-[11px] font-medium mb-4 leading-relaxed ${feedbackState === "success" ? "text-emerald-700" : feedbackState === "error" ? "text-red-700" : "text-slate-500"}`} aria-live="polite">
              {feedbackState === "idle" ? "Selecione a transação e preencha os dados do pedido para começar." : hintMessage}
            </p>
            {feedbackState === "success" && (
              <div className="w-full space-y-2">
                <div className="bg-emerald-100 text-emerald-700 font-black text-xs py-2 rounded-xl mb-2">+25 XP</div>
                <Button 
                  onClick={resetGame} 
                  disabled={completedMissions === 0}
                  className="w-full text-xs h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  PRÓXIMO PEDIDO <ArrowRight className="size-4" />
                </Button>
              </div>
            )}
            {feedbackState === "error" && <Button onClick={() => setFeedbackState("idle")} variant="outline" className="w-full text-xs h-9 rounded-xl border-red-200 text-red-600 hover:bg-red-50">TENTAR NOVAMENTE</Button>}
            </Card>

            <div className="space-y-2">
              <div className="flex items-center justify-between pl-1">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Histórico</h3>
                <div className="relative">
                  <Input 
                    placeholder="Buscar..." 
                    value={historySearch}
                    onChange={(e) => setHistorySearch(e.target.value)}
                    className="h-6 w-24 text-[9px] bg-slate-50 border-none rounded-md"
                  />
                </div>
              </div>
              <Card className="bg-white border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                <div className="max-h-[180px] overflow-y-auto divide-y divide-slate-50">
                  {filteredHistory.length === 0 ? (
                    <div className="p-4 text-center text-[10px] text-slate-400 italic">
                      {historySearch ? "Nenhum resultado." : "Nenhuma submissão."}
                    </div>
                  ) : (
                    filteredHistory.map((h) => (
                      <div key={h.id} className="p-3 hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <span className={`text-[9px] font-black uppercase ${h.status === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                            {h.status === 'success' ? 'Sucesso' : 'Falha'}
                          </span>
                          <span className="text-[8px] text-slate-400 font-medium">
                            {new Date(h.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <h5 className="text-[10px] font-bold text-slate-800 truncate">{h.missionName || h.transaction}</h5>
                        {h.status === 'success' && (
                          <div className="flex items-center justify-between mt-1 text-[8px] text-slate-500 font-semibold">
                            <span>+{h.xpEarned} XP</span>
                            <span>{h.progressAtTime}%</span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>

            <div className="space-y-2">
              {showUndoReset && (
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full h-8 text-[10px] font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-xl gap-2 animate-bounce"
                  onClick={undoReset}
                >
                  <Undo2 className="size-3" /> DESFAZER REINÍCIO
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full h-8 text-[10px] font-bold text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100 rounded-xl gap-2 transition-all active:scale-[0.98]"
                onClick={fullReset}
              >
                <X className="size-3" /> REINICIAR PROGRESSO
              </Button>
            </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between pl-1">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seu Progresso</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2 text-[9px] font-bold text-indigo-600 hover:bg-indigo-50 gap-1 rounded-md"
                onClick={generatePDFReport}
              >
                <FileText className="size-3" /> RELATÓRIO
              </Button>
            </div>
            <Card className="p-4 bg-white border-slate-200 shadow-sm rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-[11px] font-bold text-slate-700">
                <span className="text-slate-400 uppercase text-[9px] font-black">Missões Concluídas</span>
                <span>{completedMissions} / 30</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-bold text-slate-700">
                <span className="text-slate-400 uppercase text-[9px] font-black">XP Neste Nível</span>
                <span>{xp} / 500</span>
              </div>
              <div className="h-32 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trainingHistory.filter(h => h.status === 'success').reverse().map((h, i) => ({
                    name: i + 1,
                    xp: h.xpEarned || 0,
                    total: trainingHistory.filter(hs => hs.status === 'success').reverse().slice(0, i + 1).reduce((acc, curr) => acc + (curr.xpEarned || 0), 0)
                  }))}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <Tooltip 
                      contentStyle={{ fontSize: '10px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      labelStyle={{ display: 'none' }}
                    />
                    <Area type="monotone" dataKey="total" stroke="#4f46e5" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[8px] font-black text-slate-300 uppercase">
                  <span>Desempenho (Acumulado)</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-emerald-600 font-bold">
                  <span>Progresso Total</span>
                  <span>{Math.round((completedMissions / 30) * 100)}%</span>
                </div>
              </div>
              <Progress value={(xp/500)*100} className="h-2 bg-slate-100" />
              
              <div className="pt-2 border-t border-slate-50 flex items-center gap-3">
                <div className="size-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Plus className="size-5 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800">Próxima promoção</h4>
                  <p className="text-[10px] text-slate-500">Faltam {500 - xp} XP para Consultor SD Júnior</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-indigo-600 border-none shadow-lg shadow-indigo-100 rounded-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-white font-bold text-sm mb-3">Desbloqueie o Modo Premium</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Acesso a todas as transações",
                    "Simulados de certificação",
                    "Suporte prioritário do Hugo",
                    "Dashboard avançado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] text-indigo-100 font-medium">
                      <Check className="size-3 text-indigo-300" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-9 bg-white text-indigo-600 hover:bg-slate-50 text-[10px] font-bold rounded-xl">
                  QUERO DESBLOQUEAR!
                </Button>
              </div>
              <Crown className="absolute -right-6 -bottom-6 size-24 text-indigo-500/30 -rotate-12 group-hover:scale-110 transition-transform" />
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
