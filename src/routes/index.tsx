import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Rocket, Target, BookOpen, Crown, BarChart3, Trophy, Settings, 
  ChevronRight, HelpCircle, CheckCircle2, Flame, Star, Shield,
  Search, Bell, Plus, MoreHorizontal, ArrowRight, Check, Menu, X,
  Gamepad2, Dices, User, UserCheck, Eye, EyeOff, LogIn,
  FileText, Undo2, ChevronDown, LogOut
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { MISSIONS as missions, type Mission } from "@/data/missions";
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

// Correct data is now handled per mission from missions.ts
const getRandomMissionIndex = (excludeIndex?: number, reinforcementQueue: string[] = []) => {
  // If there's a mission in the reinforcement queue, and it's not the same as the current one,
  // we have a chance to pick it (spaced repetition)
  if (reinforcementQueue.length > 0 && Math.random() > 0.4) {
    const queueIndex = missions.findIndex(m => m.id === reinforcementQueue[0]);
    if (queueIndex !== -1 && queueIndex !== excludeIndex) {
      return queueIndex;
    }
  }

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * missions.length);
  } while (newIndex === excludeIndex && missions.length > 1);
  return newIndex;
};

const randomizeMissionData = (mission: Mission): Mission => {
  const materials = ["MAT-SD-015", "MAT-SD-020", "MAT-SD-030", "MAT-SD-045"];
  const incoterms = ["FOB", "CIF"];
  const paymentConds = ["ZF30", "ZF60", "ZB00"];
  const quantities = ["10", "25", "50", "80", "100", "150"];

  const randomValue = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Create a deep copy to avoid mutating the original mission
  const newMission = JSON.parse(JSON.stringify(mission));
  
  newMission.expectedData.material = randomValue(materials);
  newMission.expectedData.incoterms = randomValue(incoterms);
  newMission.expectedData.condPagto = randomValue(paymentConds);
  newMission.expectedData.quantidade = randomValue(quantities);
  
  // Randomize customer from master if not BP
  if (mission.transaction !== "BP") {
    const customers = ["208015", "208016", "208017", "208018", "208019"];
    newMission.expectedData.cliente = randomValue(customers);
  }

  // Update dialog text with new values
  newMission.chefeHugoDialog = newMission.chefeHugoDialog
    .replace(/\bMAT-SD-\d+\b/g, newMission.expectedData.material)
    .replace(/\b\d+ unidades\b/g, `${newMission.expectedData.quantidade} unidades`)
    .replace(/\b\d+ peças\b/g, `${newMission.expectedData.quantidade} peças`)
    .replace(/\bfrete \w+\b/g, `frete ${newMission.expectedData.incoterms}`)
    .replace(/\bCondição \w+\b/g, `Condição ${newMission.expectedData.condPagto}`)
    .replace(/\bZF\d+\b/g, newMission.expectedData.condPagto);

  return newMission;
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
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);

  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [activeMission, setActiveMission] = useState<Mission | null>(null);
  
  const currentMission = useMemo((): Mission => {
    if (activeMission && activeMission.id === missions[currentMissionIndex]?.id) {
       return activeMission;
    }
    const baseMission = missions[currentMissionIndex] || missions[0];
    return baseMission!;
  }, [currentMissionIndex, activeMission]);

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
    quantity: "",
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
  const [reinforcementQueue, setReinforcementQueue] = useState<string[]>([]);
  const [historyPeriod, setHistoryPeriod] = useState<"all" | "7d" | "30d">("all");
  const [historySearch, setHistorySearch] = useState("");
  const [lastStateBeforeReset, setLastStateBeforeReset] = useState<any>(null);
  const [showUndoReset, setShowUndoReset] = useState(false);
  const helpCloseRef = useRef<HTMLButtonElement>(null);
  const helpContainerRef = useRef<HTMLDivElement>(null);
  const undoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isCustomerSearchOpen, setIsCustomerSearchOpen] = useState(false);
  const [customerSearchTerm, setHistorySearchTerm] = useState(""); // Reusing generic search term logic if needed, but let's keep it separate
  const [isF1ModalOpen, setIsF1ModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [f1ActiveField, setF1ActiveField] = useState<{
    label: string;
    table: string;
    concept: string;
    impact: string;
  } | null>(null);

  const CUSTOMER_MASTER = [
    { code: "208015", name: "AAM LOGÍSTICA LTDA", uf: "SP", canal: "10" },
    { code: "208016", name: "NORTEL DISTRIBUIDORA", uf: "RJ", canal: "20" },
    { code: "208017", name: "MERCADO LIVRE", uf: "SP", canal: "10" },
    { code: "208018", name: "LOGGI TECNOLOGIA", uf: "PR", canal: "20" },
    { code: "208019", name: "MAGAZINE LUIZA", uf: "MG", canal: "10" },
  ];

  const FIELD_METADATA: Record<string, { label: string; table: string; concept: string; impact: string }> = {
    orderType: { 
      label: "Tipo de Ordem", 
      table: "VBAK-AUART", 
      concept: "Define a categoria do documento comercial (Venda, Devolução, etc).", 
      impact: "Determina o fluxo de documentos e a numeração da nota fiscal." 
    },
    salesOrg: { 
      label: "Org. Vendas", 
      table: "VBAK-VKORG", 
      concept: "Unidade organizacional responsável pelas vendas e contratos.", 
      impact: "Define a origem do faturamento e a base de cálculo de impostos estaduais." 
    },
    customer: { 
      label: "Emissor (Cliente)", 
      table: "KNA1-KUNNR", 
      concept: "O parceiro de negócios que solicita a mercadoria.", 
      impact: "Determina o endereço de entrega e as alíquotas de ICMS/Substituição Tributária." 
    },
    material: { 
      label: "Material", 
      table: "VBAP-MATNR", 
      concept: "Código único do produto no mestre de materiais.", 
      impact: "Define a NCM, alíquota de IPI e o peso para cálculo do frete." 
    },
    quantity: { 
      label: "Quantidade", 
      table: "VBAP-KWMENG", 
      concept: "Volume solicitado pelo cliente para o item.", 
      impact: "Impacta a disponibilidade de estoque e o valor total da NF-e." 
    },
    incoterms: { 
      label: "Incoterms", 
      table: "VBAK-INCO1", 
      concept: "Termos internacionais de comércio (CIF/FOB).", 
      impact: "Determina quem paga o frete e como ele é informado no XML da NF-e." 
    },
    distChannel: { 
      label: "Canal de Distribuição", 
      table: "VBAK-VTWEG", 
      concept: "Meio pelo qual o produto chega ao cliente (Varejo/Atacado).", 
      impact: "Pode alterar a precificação e a incidência de PIS/COFINS." 
    },
    paymentCond: { 
      label: "Condição de Pagamento", 
      table: "VBAK-ZTERM", 
      concept: "Regras de vencimento e parcelamento acordadas.", 
      impact: "Define as datas de vencimento das duplicatas no financeiro." 
    },
    division: { 
      label: "Setor de Atividade", 
      table: "VBAK-SPART", 
      concept: "Agrupamento de produtos (Peças, Serviços).", 
      impact: "Usado para determinar o setor fiscal de saída dos produtos." 
    }
  };

  const openF1ForField = (field: string) => {
    const meta = FIELD_METADATA[field];
    if (meta) {
      setF1ActiveField(meta);
      setIsF1ModalOpen(true);
    }
  };


  const generatePDFReport = () => {
    toast.info("Gerando relatório...");
    const content = `
      RELATÓRIO DE TREINAMENTO SAP SD QUEST
      Data: ${new Date().toLocaleDateString()}
      Consultor(a): ${userName}
      -------------------------------------
      Empresa: AAM LOGÍSTICA LTDA
      Status: Nível 1 - Trainee SD
      XP Total: ${xp} / 500
      Missões Concluídas: ${completedMissions} / ${missions.length}
      Taxa de Sucesso: ${Math.round((trainingHistory.filter(h => h.status === 'success').length / Math.max(trainingHistory.length, 1)) * 100)}%
      -------------------------------------
      Última Missão: ${trainingHistory[0]?.missionName || 'Nenhuma'}
      Resultado: ${trainingHistory[0]?.status === 'success' ? 'SUCESSO' : 'ERRO'}
      
      DADOS TÉCNICOS DA MISSÃO:
      Transação: ${trainingHistory[0]?.transaction || 'N/A'}
      Mensagem Hugo: ${trainingHistory[0]?.message || 'N/A'}
      
      FEEDBACK ESTRATÉGICO:
      ${trainingHistory[0]?.status === 'success' 
        ? "Excelente execução! Com a criação correta desta ordem, a AAM LOGÍSTICA LTDA garante a reserva automática no estoque (MM) e o fluxo logístico sem gargalos." 
        : "Atenção necessária! O erro cometido pode impactar a expedição e causar rejeições na SEFAZ. Revise os conceitos na Ajuda F1."}
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio_sap_sd_${Date.now()}.txt`;
    link.click();
    toast.success("Relatório baixado com sucesso!");
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsAuth(false);
    setIsLogoutModalOpen(false);
    // Preserving progress (XP, level, missions) - only clearing the session name
    localStorage.removeItem("sap-quest-username");
    toast.info("Sessão encerrada.");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim() && password.trim()) {
      localStorage.setItem("sap-quest-username", userName);
      setIsAuth(true);
      
      // Load saved data for this user
      const saved = localStorage.getItem("sap-quest-data");
      const savedHistory = localStorage.getItem("sap-quest-history");
      
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.xp !== undefined) setXp(parsed.xp);
          if (parsed.completedMissions !== undefined) {
            setCompletedMissions(parsed.completedMissions);
          }
          if (parsed.currentMissionIndex !== undefined) {
            setCurrentMissionIndex(parsed.currentMissionIndex);
          } else {
            setCurrentMissionIndex(getRandomMissionIndex());
          }
        } catch (e) {
          console.error("Erro ao carregar progresso", e);
        }
      } else {
        // First time or no data, pick a random mission
        setCurrentMissionIndex(getRandomMissionIndex());
      }
      
      if (savedHistory) {
        try {
          setTrainingHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error("Erro ao carregar histórico", e);
        }
      }

      const hasCompletedOnboarding = localStorage.getItem("sap-quest-onboarding-done");
      if (!hasCompletedOnboarding) {
        setShowOnboarding(true);
      }
      toast.success(`Bem-vindo(a), Consultor(a) ${userName}!`);
    } else {
      toast.error("Preencha todos os campos para acessar o SAP GUI.");
    }
  };

  const finishOnboarding = () => {
    localStorage.setItem("sap-quest-onboarding-done", "true");
    setShowOnboarding(false);
    toast.info("Jornada iniciada! Boa sorte nas demandas.");
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsF1ModalOpen(false);
        setIsLogoutModalOpen(false);
        setIsCustomerSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);

    const savedUser = localStorage.getItem("sap-quest-username");
    if (savedUser) {
      setUserName(savedUser);
      setIsAuth(true);
    }

    const hasStarted = sessionStorage.getItem("sap-quest-session-started");
    const saved = localStorage.getItem("sap-quest-data");
    const savedHistory = localStorage.getItem("sap-quest-history");
    
    // Check for Super Admin mode
    const isSuperAdmin = localStorage.getItem("sap-quest-super-admin") === "true";
    
    if (!hasStarted) {
      setFormData({
        orderType: "", orderDate: "", salesOrg: "", deliveryDate: "",
        distChannel: "", paymentCond: "", customer: "", quantity: "", material: "",
        incoterms: "", division: "", poNumber: "",
      });
      setSelectedTransaction("");
      
      if (savedUser && saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.xp !== undefined) setXp(parsed.xp);
          if (parsed.completedMissions !== undefined) {
            // Super Admin can skip missions or has them all unlocked, but let's keep normal flow
            // for tracking, and only handle the "unlock" part in the UI if needed
            setCompletedMissions(parsed.completedMissions);
          }
          if (parsed.currentMissionIndex !== undefined) {
            setCurrentMissionIndex(parsed.currentMissionIndex);
          } else {
            setCurrentMissionIndex(getRandomMissionIndex());
          }
        } catch (e) {}
      } else if (savedUser) {
        setCurrentMissionIndex(getRandomMissionIndex());
      }
      if (savedUser && savedHistory) {
        try { setTrainingHistory(JSON.parse(savedHistory)); } catch (e) {}
      }

      setFeedbackState("idle");
      sessionStorage.setItem("sap-quest-session-started", "true");
    } else {
      if (saved) {

        try {
          const parsed = JSON.parse(saved);
          if (parsed.formData) setFormData(parsed.formData);
          if (parsed.selectedTransaction) setSelectedTransaction(parsed.selectedTransaction);
          if (parsed.xp !== undefined) setXp(parsed.xp);
          if (parsed.completedMissions !== undefined) {
            setCompletedMissions(parsed.completedMissions);
            setCurrentMissionIndex(parsed.completedMissions);
          }
          if (parsed.feedbackState) setFeedbackState(parsed.feedbackState);
          if (parsed.mode) setMode(parsed.mode);
        } catch (e) {
          // Error loading data silently
        }
      }
      if (savedHistory) {
        try {
          setTrainingHistory(JSON.parse(savedHistory));
        } catch (e) {
          // Error parsing history silently
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
      currentMissionIndex,
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
          if (parsed.currentMissionIndex !== undefined) setCurrentMissionIndex(parsed.currentMissionIndex);
          // Only update feedback if it changed to keep UI consistent
          if (parsed.feedbackState && parsed.feedbackState !== feedbackState) setFeedbackState(parsed.feedbackState);
        } catch (err) {
          // Tab sync error silently
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [formData, selectedTransaction, xp, completedMissions, currentMissionIndex, feedbackState, mode, reinforcementQueue]);

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

  // Click outside to close help
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (helpContainerRef.current && !helpContainerRef.current.contains(event.target as Node)) {
        setIsHelpOpen(false);
      }
    }
    if (isHelpOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHelpOpen]);

  // Persist expanded sections
  useEffect(() => {
    localStorage.setItem("sap-quest-help-expanded", JSON.stringify(expandedSections));
  }, [expandedSections]);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("sap-quest-history");
    if (savedData) {
      try {
        setTrainingHistory(JSON.parse(savedData));
      } catch (e) {
        // Silently handle parse error
      }
    }
  }, []);

  useEffect(() => {
    if (trainingHistory.length > 0) {
      localStorage.setItem("sap-quest-history", JSON.stringify(trainingHistory));
    }
  }, [trainingHistory]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const errors: string[] = [];
    let localHint = "";
    
    // Validate Transaction
    if (!selectedTransaction || selectedTransaction !== currentMission.transaction) {
      errors.push("transaction");
      localHint = `Transação incorreta. O Chefe Hugo pediu ${currentMission.transaction}.`;
    } 

    // Dynamic validation logic based on Transaction
    if (selectedTransaction === "BP") {
      // Missions M19 and M20 require code and function
      if (!formData.customer || formData.customer !== currentMission.expectedData.cliente) {
        errors.push("customer");
        localHint = `Código do Parceiro incorreto. Esperado: ${currentMission.expectedData.cliente}`;
      } else if (!formData.salesOrg || formData.salesOrg !== currentMission.expectedData.orgVendas) {
        // Even for BP, we are checking the Sales Org as per requirement "Exibir apenas... Organização de Vendas (1000)"
        errors.push("salesOrg");
        localHint = `Organização de Vendas incorreta. Esperado: ${currentMission.expectedData.orgVendas}`;
      }
    } else if (selectedTransaction === "VL01N") {
      // Logic for delivery
      if (!formData.salesOrg || formData.salesOrg !== "1000") { // Using 1000 as point of expedition mock
        errors.push("salesOrg");
        localHint = `Ponto de Expedição incorreto. Esperado: 1000`;
      } else if (!formData.poNumber || formData.poNumber !== "REF-ORDEM") { // Mock ref
         // Validation would be more specific in real scenario
      }
    } else if (selectedTransaction === "VF01") {
       // Logic for billing
    } else if (selectedTransaction === "VA05" || selectedTransaction === "V.02") {
       // Logic for reports
    } else {
      // Standard VA01 logic
      if (!formData.orderType || formData.orderType !== currentMission.expectedData.tipoOrdem) {
        errors.push("orderType");
        localHint = `Tipo de ordem incorreto. Esperado: ${currentMission.expectedData.tipoOrdem}`;
      } else if (!formData.salesOrg || formData.salesOrg !== currentMission.expectedData.orgVendas) {
        errors.push("salesOrg");
        localHint = `Org. Vendas incorreta. Esperado: ${currentMission.expectedData.orgVendas}`;
      } else if (!formData.customer || formData.customer !== currentMission.expectedData.cliente) {
        errors.push("customer");
        localHint = `Cliente incorreto. Esperado: ${currentMission.expectedData.cliente}`;
      } else if (!formData.material || formData.material !== currentMission.expectedData.material) {
        errors.push("material");
        localHint = `Material incorreto. Esperado: ${currentMission.expectedData.material}`;
      } else if (!formData.incoterms || formData.incoterms !== currentMission.expectedData.incoterms) {
        errors.push("incoterms");
        localHint = `Incoterms incorreto. Esperado: ${currentMission.expectedData.incoterms}`;
      } else if (!formData.distChannel || formData.distChannel !== currentMission.expectedData.canalDist) {
        errors.push("distChannel");
        localHint = `Canal de Distribuição incorreto. Esperado: ${currentMission.expectedData.canalDist}`;
      } else if (!formData.quantity || formData.quantity !== currentMission.expectedData.quantidade) {
        errors.push("quantity");
        localHint = `Quantidade incorreta. Esperado: ${currentMission.expectedData.quantidade}`;
      } else if (!formData.division || formData.division !== currentMission.expectedData.setorAtiv) {
        errors.push("division");
        localHint = `Setor de Atividade incorreto. Esperado: ${currentMission.expectedData.setorAtiv}`;
      } else if (!formData.paymentCond || formData.paymentCond !== currentMission.expectedData.condPagto) {
        errors.push("paymentCond");
        localHint = `Condição de Pagamento incorreta. Esperado: ${currentMission.expectedData.condPagto}`;
      }
    }

    setValidationErrors(errors);
    setHintMessage(localHint);

    if (errors.length === 0) {
      if (feedbackState === "idle") {
        setFeedbackState("review");
        toast.info("Validação OK! Revise antes de enviar.");
      } else {
        setFeedbackState("success");
        // Remove from reinforcement queue if completed successfully
        if (reinforcementQueue.includes(currentMission.id)) {
          setReinforcementQueue(prev => prev.filter(id => id !== currentMission.id));
        }

        const isVL01N = currentMission.transaction === "VL01N";
        const isVF01 = currentMission.transaction === "VF01";
        const isBP = currentMission.transaction === "BP";
        const isReport = currentMission.transaction === "VA05" || currentMission.transaction === "V.02";
        const isAudit = currentMission.transaction === "VA02" || currentMission.transaction === "VA03";
        
        let successMsg = "";
        if (isBP) {
          successMsg = `Parceiro Comercial ${formData.customer || currentMission.expectedData.cliente} verificado com sucesso no cadastro do SAP S/4HANA! Dados fiscais e áreas de vendas validados.`;
        } else if (isVL01N) {
          const remNum = Math.floor(800000000 + Math.random() * 999999);
          const ordNum = 450000000 + Math.floor(Math.random() * 1000);
          successMsg = `Documento de Remessa ${remNum} criado com sucesso para o Pedido ${ordNum}!`;
        } else if (isVF01) {
          const fatNum = Math.floor(900000000 + Math.random() * 999999);
          const refNum = currentMission.id.includes("SERVICO") ? 450000000 : 800000000;
          successMsg = `Fatura/NF-e ${fatNum} emitida com sucesso para o documento ${refNum + Math.floor(Math.random() * 1000)}!`;
        } else if (isReport) {
          successMsg = "Relatório gerado com sucesso! Nenhuma pendência crítica encontrada para os filtros selecionados.";
        } else if (isAudit) {
          const ordNum = 450000000 + Math.floor(Math.random() * 1000);
          successMsg = `Alteração/Auditoria da Ordem ${ordNum} realizada com sucesso no sistema.`;
        } else {
          const ordNum = Math.floor(450000000 + Math.random() * 999999);
          successMsg = `Ordem de Venda ${currentMission.expectedData.tipoOrdem} ${ordNum} criada com sucesso para o cliente ${formData.customer || currentMission.expectedData.cliente}!`;
        }

        setHintMessage(`🎉 ${successMsg} \n\n${currentMission.successFeedback}`);
        toast.success(successMsg);

        if (mode !== "practice") {
          setXp(prev => Math.min(prev + 25, 500));
          setCompletedMissions(prev => prev + 1);
        }
        setTrainingHistory(prev => [{
          id: Math.random().toString(36).substr(2, 9),
          status: "success" as const,
          transaction: selectedTransaction,
          message: currentMission.chefeHugoDialog,
          timestamp: Date.now(),
          xpEarned: mode !== "practice" ? 25 : 0,
          missionName: currentMission.title,
          progressAtTime: Math.round(((completedMissions + (mode !== "practice" ? 1 : 0)) / missions.length) * 100)
        }, ...prev].slice(0, 10));
        
        if (mode !== "practice") {
          toast.success("Missão Concluída!", {
            description: "Você ganhou +25 XP e desbloqueou a próxima etapa.",
          });
        } else {
          toast.success("Sucesso (Modo Prática)");
        }
      }
    } else {
      setFeedbackState("error");
      // Add to reinforcement queue on error
      if (!reinforcementQueue.includes(currentMission.id)) {
        setReinforcementQueue(prev => [...prev, currentMission.id]);
      }
      setHintMessage(currentMission.errorFeedback + " " + localHint);
      setTrainingHistory(prev => [{
        id: Math.random().toString(36).substr(2, 9),
        status: "error" as const,
        transaction: selectedTransaction || "N/A",
        message: localHint || "Erro de validação operacional.",
        timestamp: Date.now(),
        missionName: currentMission.title
      }, ...prev].slice(0, 10));
      toast.error("Erro Crítico de Negócio", {
        description: "Verifique as orientações do Chefe Hugo.",
      });
    }
  };

  const nextMission = () => {
    const nextIdx = getRandomMissionIndex(currentMissionIndex, reinforcementQueue);
    let nextM = missions[nextIdx] || missions[0];
    
    // If it's a reinforced mission, randomize its data
    if (nextM && reinforcementQueue.includes(nextM.id)) {
      nextM = randomizeMissionData(nextM);
      setActiveMission(nextM);
    } else {
      setActiveMission(null);
    }

    setCurrentMissionIndex(nextIdx);
    resetGame();
    if (nextM) {
      const isReinforced = reinforcementQueue.includes(nextM.id);
      toast.info(isReinforced ? `Reforço de Aprendizado: ${nextM.title}` : `Sorteando Nova Missão: ${nextM.title}`);
    }
  };

  const resetGame = () => {
    setFeedbackState("idle");
    setValidationErrors([]);
    setHintMessage("");
    setSelectedTransaction("");
    setFormData({
      orderType: "", orderDate: "", salesOrg: "", deliveryDate: "",
      distChannel: "", paymentCond: "", customer: "", quantity: "", material: "",
      incoterms: "", division: "", poNumber: "",
    });
  };

  const fullReset = () => {
    if (confirm("Tem certeza que deseja reiniciar TODO o seu progresso? Isso limpará seu XP e histórico de missões.")) {
      // Salva estado para desfazer
      const currentState = { xp, completedMissions, currentMissionIndex, trainingHistory };
      setLastStateBeforeReset(currentState);
      setShowUndoReset(true);

      // Limpa dados
      setXp(0);
      setCompletedMissions(0);
      setCurrentMissionIndex(0);
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
      setCurrentMissionIndex(lastStateBeforeReset.currentMissionIndex || 0);
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

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-[#f4f7fc] flex flex-col items-center justify-center p-4 font-sans">
        <Card className="w-full max-w-[400px] p-8 border-slate-200 shadow-2xl rounded-3xl bg-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500" />
          
          <div className="flex flex-col items-center mb-8">
            <div className="size-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100 mb-4 rotate-3">
              <Rocket className="size-10" />
            </div>
            <h1 className="font-display font-black text-2xl tracking-tight text-slate-800">SAP SD Quest</h1>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">AAM LOGÍSTICA LTDA</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Nome do Consultor(a)</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Seu nome"
                  className="h-12 pl-10 rounded-xl border-slate-200 focus:ring-indigo-600 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">Senha de Acesso</Label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <Input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 pl-10 rounded-xl border-slate-200 focus:ring-indigo-600 bg-slate-50/50"
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] mt-2">
              ENTRAR NO SISTEMA SAP <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>

          <div className="mt-10 pt-6 border-t border-slate-100 text-center">
            <p className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">
              Desenvolvido por <span className="text-indigo-600">Adriana Martins</span> | SAP SD Quest
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col pb-20 md:pb-0 overflow-y-auto">
      {showOnboarding && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-[500px] border-none shadow-2xl rounded-3xl overflow-hidden bg-white animate-in zoom-in-95 duration-300">
            <div className="h-2 w-full bg-slate-100">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500" 
                style={{ width: `${((onboardingStep + 1) / 3) * 100}%` }}
              />
            </div>
            
            <div className="p-8">
              {onboardingStep === 0 && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div className="size-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <Trophy className="size-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">A Contratação</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Parabéns, <b>{userName}</b>! Você acaba de ser contratado(a) como Trainee de SAP SD na <b>AAM Corp</b>! 
                      Dedique-se para alcançar novos níveis e evoluir na sua carreira. Contamos com você!
                    </p>
                  </div>
                </div>
              )}

              {onboardingStep === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div className="size-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <HugoAvatar className="size-12" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">O Mentor</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Conheça o <b>Chefe Hugo</b>! Ele será seu líder direto e enviará demandas reais do fluxo <b>Order-to-Cash</b>. 
                      Leia atentamente as solicitações dele no painel lateral.
                    </p>
                  </div>
                </div>
              )}

              {onboardingStep === 2 && (
                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                  <div className="size-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
                    <Star className="size-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Regras do Jogo</h2>
                    <p className="text-slate-600 leading-relaxed">
                      Preencha as transações corretamente para ganhar <b>+25 XP</b>, subir na hierarquia da empresa e acumular pontos. 
                      Em caso de dúvidas nos campos, utilize a <b>Ajuda (F1)</b>.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mt-10">
                <Button 
                  variant="ghost" 
                  className="font-bold text-slate-400"
                  onClick={finishOnboarding}
                >
                  PULAR
                </Button>
                <div className="flex-1" />
                {onboardingStep < 2 ? (
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 rounded-xl"
                    onClick={() => setOnboardingStep(onboardingStep + 1)}
                  >
                    AVANÇAR
                  </Button>
                ) : (
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 rounded-xl shadow-lg shadow-indigo-100"
                    onClick={finishOnboarding}
                  >
                    INICIAR MINHA JORNADA NA AAM CORP
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}

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
          <Badge variant="outline" className="h-9 px-3 border-slate-200 bg-slate-50/50 text-slate-600 rounded-xl flex items-center gap-2 group cursor-default">
            <div className="size-5 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-black text-[9px]">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-[10px] font-bold">Consultor: {userName}</span>
          </Badge>

          <div className="flex items-center gap-2 border-l ml-3 pl-3 border-slate-200">
            <div className="flex items-center gap-2">
              <Card className="flex items-center gap-2 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
                <Shield className="size-4 text-indigo-600" />
                <span className="text-[11px] font-bold text-slate-700 leading-none">Nível 1 - Trainee SD</span>
              </Card>

              <Card className="flex items-center gap-2 px-3 py-1.5 border-slate-200 shadow-none rounded-xl bg-slate-50/50">
                <Star className="size-4 text-amber-500 fill-amber-500" />
                <span className="text-[11px] font-bold text-slate-700 leading-none">{xp * 5} pts</span>
              </Card>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l ml-3 pl-3 border-slate-200">
            <Button 
              variant="ghost" 
              size="icon" 
              className="size-9 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              onClick={handleLogoutClick}
              title="Sair do Sistema"
            >
              <LogOut className="size-4" />
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
                  <p className="text-xs text-slate-600">{userName}, sua missão [{currentMissionIndex + 1}/{missions.length}]: <b>{currentMission.title}</b>.</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 italic">
                    "{currentMission.chefeHugoDialog.replace("AAM LOGÍSTICA", "AAM LOGÍSTICA LTDA (Cód: 208015)")}"
                  </p>
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
                    ref={helpContainerRef}
                    className="fixed inset-0 md:absolute md:inset-auto md:right-0 md:top-10 w-full h-full md:w-[320px] md:h-auto md:max-h-[80vh] p-0 z-[60] shadow-2xl border-indigo-100 animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-top-2 duration-200 flex flex-col bg-white overflow-hidden rounded-none md:rounded-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="help-title"
                  >
                    <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white sticky top-0 z-10">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="size-4 text-indigo-600" />
                        <h4 id="help-title" className="text-xs font-black text-indigo-600 uppercase tracking-widest">Guia de Apoio SAP</h4>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 h-8 w-8 hover:bg-slate-100 rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600" 
                        onClick={() => setIsHelpOpen(false)}
                        ref={helpCloseRef}
                        aria-label="Fechar ajuda"
                      >
                        <X className="size-5 text-slate-400" />
                      </Button>
                    </div>

                    <div 
                      ref={helpScrollRef}
                      className="flex-1 overflow-y-auto p-5 space-y-3 custom-scrollbar bg-slate-50/30"
                    >
                      {[
                        { 
                          id: "MISSION_OBJ", 
                          title: currentMission.f1Help.title, 
                          icon: Target, 
                          content: currentMission.f1Help.concept,
                          variant: "indigo"
                        },
                        { 
                          id: "IMPACT", 
                          title: "Impacto no Negócio", 
                          icon: BarChart3, 
                          content: currentMission.f1Help.businessImpact,
                          variant: "slate"
                        },
                        { 
                          id: "BRAZIL_RULE", 
                          title: "Regra Brasil (Localização)", 
                          icon: Shield, 
                          content: currentMission.f1Help.brazilRule,
                          variant: "amber"
                        },
                        { 
                          id: "TRANS_HELP", 
                          title: "Transação Requerida", 
                          icon: Rocket, 
                          content: `Utilize a transação ${currentMission.transaction} para esta operação.`,
                          variant: "slate"
                        }
                      ].map((section) => (
                        <div key={section.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                          <button 
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <section.icon className={`size-3.5 ${section.variant === 'indigo' ? 'text-indigo-600' : section.variant === 'amber' ? 'text-amber-500' : 'text-slate-400'}`} />
                              <span className="text-[11px] font-bold text-slate-700">{section.title}</span>
                            </div>
                            <ChevronDown className={`size-3.5 text-slate-400 transition-transform ${expandedSections[section.id] ? 'rotate-180' : ''}`} />
                          </button>
                          {expandedSections[section.id] && (
                            <div className="p-3 pt-0 text-[11px] text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                              <div className="h-px bg-slate-100 mb-3" />
                              {section.content}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border-t border-slate-100 bg-white flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <div className="flex items-center gap-2">
                        <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] border border-slate-200">ESC</kbd>
                        <span>para fechar</span>
                      </div>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[9px]">v1.5.0</span>
                    </div>
                  </Card>
                )}
              </div>
            </div>
            
            {/* Stepper de 4 passos */}
            <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex items-center justify-between">
              {[
                { n: "1", label: "Contexto", color: completedMissions > currentMissionIndex ? "bg-emerald-500" : "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
                { n: "2", label: "Transação", color: selectedTransaction ? "bg-emerald-500" : "bg-indigo-600", text: selectedTransaction ? "text-emerald-700" : "text-indigo-700", bg: "bg-indigo-50", active: true },
                { n: "3", label: "Preencher Dados", color: feedbackState !== "idle" ? "bg-emerald-500" : "bg-slate-200", text: feedbackState !== "idle" ? "text-emerald-700" : "text-slate-400", bg: "bg-slate-100" },
                { n: "4", label: "Revisar & Enviar", color: feedbackState === "success" ? "bg-emerald-500" : "bg-slate-200", text: feedbackState === "success" ? "text-emerald-700" : "text-slate-400", bg: "bg-slate-100" },
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
                {["VA01 - Criar Ordem", "BP - Parceiro", "VL01N - Entrega", "VF01 - Faturar", "VA02 - Modificar", "VA03 - Exibir", "VF11 - Cancelar", "VA05 - Lista", "V.02 - Incomp"].map((label) => {
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
                {(() => {
                  let fieldsToShow = [
                    { id: "orderType", label: "Tipo", type: "select", options: ["OR", "QT", "ZBN", "RE"] },
                    { id: "orderDate", label: "Data Pedido" },
                    { id: "salesOrg", label: "Org. Vendas", type: "select", options: ["1000", "2000"] },
                    { id: "distChannel", label: "Canal Dist.", type: "select", options: ["10", "20"] },
                    { id: "division", label: "Setor Ativ.", type: "select", options: ["00", "01"] },
                    { id: "customer", label: "Emissor", hasSearch: true },
                    { id: "poNumber", label: "Nº Pedido" },
                    { id: "material", label: "Material", type: "select", options: ["MAT-SD-015", "MAT-SD-020", "MAT-SD-099"] },
                    { id: "quantity", label: "Quantidade" },
                    { id: "incoterms", label: "Incoterms", type: "select", options: ["FOB", "CIF"] },
                    { id: "paymentCond", label: "Cond. Pagto.", type: "select", options: ["ZF30", "ZB00", "ZF60", "0001"] },
                  ];

                  if (selectedTransaction === "BP") {
                    fieldsToShow = [
                      { id: "customer", label: "Cód. Parceiro Comercial", hasSearch: true },
                      { id: "poNumber", label: "Categoria (Empresa/Pessoa)", type: "select", options: ["Empresa", "Pessoa"] }, // Reusing poNumber for Categoria
                      { id: "paymentCond", label: "Função de Parceiro", type: "select", options: ["Cliente SD", "Fornecedor"] }, // Reusing paymentCond for Função
                      { id: "salesOrg", label: "Organização de Vendas", type: "select", options: ["1000"] },
                    ];
                  } else if (selectedTransaction === "VL01N") {
                    fieldsToShow = [
                      { id: "salesOrg", label: "Ponto de Expedição", type: "select", options: ["1000"] },
                      { id: "orderDate", label: "Data de Seleção" },
                      { id: "poNumber", label: "Ordem de Venda Ref." },
                    ];
                  } else if (selectedTransaction === "VF01") {
                    fieldsToShow = [
                      { id: "poNumber", label: "Documento Faturável Ref." },
                      { id: "orderType", label: "Tipo de Fatura", type: "select", options: ["F2 - Fatura Padrão", "NFS-e"] },
                    ];
                  } else if (selectedTransaction === "VA05" || selectedTransaction === "V.02") {
                    fieldsToShow = [
                      { id: "customer", label: "Filtro: Cliente", hasSearch: true },
                      { id: "salesOrg", label: "Área de Vendas", type: "select", options: ["1000/10/00"] },
                    ];
                  }

                  return fieldsToShow.map((field) => {
                    const fieldId = field.id as keyof typeof formData;
                    return (
                      <div key={field.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <Label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">{field.label}</Label>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="size-4 h-4 w-4 p-0 text-slate-300 hover:text-indigo-600 transition-colors"
                            onClick={() => openF1ForField(field.id)}
                            title="Ajuda F1"
                          >
                            <HelpCircle className="size-2.5" />
                          </Button>
                        </div>
                        {field.type === "select" ? (
                          <Select value={formData[fieldId] || ""} onValueChange={(v) => handleInputChange(field.id, v)}>
                            <SelectTrigger className={`h-9 rounded-lg border-slate-200 text-xs ${validationErrors.includes(field.id) ? "border-red-400 ring-1 ring-red-400" : ""}`}><SelectValue placeholder="-" /></SelectTrigger>
                            <SelectContent>{field.options?.map(o => <SelectItem key={o} value={o} className="text-xs">{o}</SelectItem>)}</SelectContent>
                          </Select>
                        ) : (
                          <div className="relative group">
                            <Input 
                              value={formData[fieldId] || ""} 
                              onChange={(e) => handleInputChange(field.id, e.target.value)} 
                              className={`h-9 rounded-lg border-slate-200 text-xs placeholder:text-slate-300 focus:ring-indigo-600 ${field.hasSearch ? "pr-8" : ""} ${validationErrors.includes(field.id) ? "border-red-400 ring-1 ring-red-400" : ""}`}
                            />
                            {field.hasSearch && (
                              <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-0 top-0 h-9 w-8 text-slate-400 hover:text-indigo-600"
                                onClick={() => setIsCustomerSearchOpen(true)}
                                title="Busca F4 (Matchcode)"
                              >
                                <Search className="size-3" />
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  });
                })()}
              </div>

              {(selectedTransaction === "VA05" || selectedTransaction === "V.02") && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl h-10 gap-2 shadow-md shadow-indigo-100"
                    onClick={() => {
                      toast.success("Relatório executado com sucesso!");
                      // In a real app, this would show a table modal
                    }}
                  >
                    EXECUTAR RELATÓRIO <Search className="size-4" />
                  </Button>
                </div>
              )}

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
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">[{completedMissions} / {missions.length} Missões]</span>
                    <Button variant="ghost" size="sm" className="h-7 text-indigo-600 text-[10px] font-bold hover:bg-indigo-50">VER DETALHES</Button>
                  </div>
                </div>
                <Rocket className="absolute -right-4 -top-4 size-16 text-indigo-50 -rotate-12 group-hover:scale-110 transition-transform" />
              </Card>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Missão Atual</h3>
              <div className="grid grid-cols-1 gap-2">
                <Card 
                  className="p-3 bg-white border-indigo-600 shadow-sm rounded-xl flex items-center justify-between ring-1 ring-indigo-600 group hover:bg-indigo-50/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg flex items-center justify-center bg-indigo-50 text-indigo-600">
                      <Rocket className="size-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800">{currentMission.title}</h4>
                      <span className="text-[9px] uppercase font-black text-indigo-600">
                        Objetivo Ativo
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-indigo-600" />
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
                  onClick={nextMission} 
                  className="w-full text-xs h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl gap-2 shadow-lg shadow-emerald-100"
                >
                  PRÓXIMO PEDIDO <ArrowRight className="size-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={generatePDFReport}
                  className="w-full h-10 border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold rounded-xl flex items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-300 text-xs"
                >
                  <FileText className="size-4" /> BAIXAR RESUMO PDF
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
                <span>{completedMissions} / {missions.length}</span>
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
                  <span>{Math.round((completedMissions / missions.length) * 100)}%</span>
                </div>
              </div>
              <Progress value={(xp/500)*100} className="h-2 bg-slate-100" />
              
              <div className="pt-2 border-t border-slate-50 flex items-center gap-3">
                <div className="size-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Plus className="size-5 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800">Próxima promoção</h4>
                  <p className="text-[10px] text-slate-500">Faltam {500 - xp} XP para a próxima promoção na AAM Corp</p>
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

      {/* Modal Busca F4 Clientes */}
      {isCustomerSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-lg shadow-2xl overflow-hidden border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="size-5 text-indigo-600" />
                <h3 className="font-bold text-slate-800">Matchcode: Carteira de Clientes AAM Corp</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsCustomerSearchOpen(false)} className="hover:bg-slate-200 rounded-full size-8">
                <X className="size-5" />
              </Button>
            </div>
            <div className="p-0 max-h-[400px] overflow-y-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-600 font-semibold sticky top-0">
                  <tr>
                    <th className="px-6 py-3 border-b">Código</th>
                    <th className="px-6 py-3 border-b">Razão Social</th>
                    <th className="px-6 py-3 border-b">UF</th>
                    <th className="px-6 py-3 border-b">Canal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CUSTOMER_MASTER.map((c) => (
                    <tr 
                      key={c.code} 
                      className="hover:bg-indigo-50 cursor-pointer transition-colors group"
                      onClick={() => {
                        handleInputChange("customer", c.code);
                        setIsCustomerSearchOpen(false);
                        toast.success(`Cliente ${c.name} selecionado.`);
                      }}
                    >
                      <td className="px-6 py-4 font-mono text-indigo-600 font-semibold">{c.code}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{c.name}</td>
                      <td className="px-6 py-4 text-slate-500">{c.uf}</td>
                      <td className="px-6 py-4 text-slate-500">{c.canal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-right">
              <Button size="sm" onClick={() => setIsCustomerSearchOpen(false)} className="bg-indigo-600 text-white font-bold rounded-lg h-8">FECHAR</Button>
            </div>
          </Card>
        </div>
      )}

      {/* Modal de Despedida do Chefe Hugo */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-[450px] border-none shadow-2xl rounded-3xl overflow-hidden bg-white animate-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-amber-500" />
            <div className="p-8 flex flex-col items-center text-center">
              <div className="size-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 relative group overflow-hidden border-2 border-indigo-100 shadow-sm">
                <HugoAvatar className="size-16" />
              </div>
              
              <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Até amanhã, {userName}!</h2>
              
              <p className="text-slate-600 leading-relaxed text-sm mb-8">
                Hoje foi um dia super produtivo! Suas operações no SAP SD garantiram o fluxo da <b>AAM LOGÍSTICA LTDA</b> sem gargalos. Descanse e nos vemos no próximo turno!
              </p>
              
              <div className="grid grid-cols-2 gap-3 w-full">
                <Button 
                  variant="outline" 
                  className="h-12 rounded-xl font-bold border-slate-200 text-slate-500 hover:bg-slate-50"
                  onClick={() => setIsLogoutModalOpen(false)}
                >
                  CANCELAR
                </Button>
                <Button 
                  className="h-12 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-100"
                  onClick={confirmLogout}
                >
                  CONFIRMAR SAÍDA
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* F1 HELP MODAL */}
      {isF1ModalOpen && f1ActiveField && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsF1ModalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="f1-modal-title"
          >
            {/* Modal Header */}
            <div className="bg-indigo-600 px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <HelpCircle className="size-5" />
                </div>
                <div>
                  <h3 id="f1-modal-title" className="font-bold text-lg leading-tight uppercase tracking-wide">
                    Guia de Apoio SAP
                  </h3>
                  <p className="text-indigo-100 text-[10px] font-medium opacity-90 uppercase tracking-wider">
                    {f1ActiveField.label} • {f1ActiveField.table}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsF1ModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Fechar modal"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Dynamic Mission Context Section */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-5 border border-indigo-100 dark:border-indigo-800/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-indigo-600 text-white p-1 rounded">
                    <Target className="size-4" />
                  </div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100 text-xs uppercase tracking-wider">
                    Foco da Missão Atual
                  </h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-indigo-900/70 dark:text-indigo-300 text-[10px] font-bold uppercase mb-1">
                      Conceito SAP
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {currentMission.f1Help.concept}
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-900/70 dark:text-indigo-300 text-[10px] font-bold uppercase mb-1">
                      Dica Prática para o Chefe Hugo
                    </p>
                    <div className="flex gap-2">
                      <div className="mt-1 flex-shrink-0">
                        <div className="size-1.5 rounded-full bg-indigo-500"></div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium italic">
                        {currentMission.f1Help.businessImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Field Concept Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <FileText className="size-4 text-slate-400" />
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase">
                    Detalhes do Campo
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase mb-1">
                      Definição Técnica
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      {f1ActiveField.concept}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase mb-1">
                      Impacto no Negócio
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      {f1ActiveField.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 flex justify-end border-t border-slate-100 dark:border-slate-800">
              <Button 
                onClick={() => setIsF1ModalOpen(false)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 rounded-lg"
              >
                ENTENDI
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

