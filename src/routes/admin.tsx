import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Shield, 
  Users, 
  BarChart3, 
  ArrowLeft, 
  Lock, 
  Unlock, 
  Star,
  UserCheck,
  TrendingUp,
  LayoutDashboard
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    title: "Administração | SAP SD Quest",
    meta: [
      { name: "description", content: "Portal administrativo do simulador SAP SD Quest da AAM LOGÍSTICA LTDA." },
      { name: "robots", content: "noindex, nofollow" }
    ]
  }),
});

function AdminPage() {
  const navigate = useNavigate();
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  useEffect(() => {
    // Check if current user is an admin
    const userData = localStorage.getItem("sap-quest-data");
    const userProfile = userData ? JSON.parse(userData) : {};
    const isAdmin = userProfile.isAdmin === true;
    
    const adminSession = localStorage.getItem("sap-quest-admin-session");
    
    // Authorization Check:
    // User must either have a valid admin session OR have isAdmin: true in their profile
    if (adminSession === "true" || isAdmin) {
      setIsAdminAuth(true);
    } else {
      // Redirect unauthorized users to home
      toast.error("Acesso restrito a administradores");
      navigate({ to: "/" });
      return;
    }

    const superAdminStatus = localStorage.getItem("sap-quest-super-admin");
    if (superAdminStatus === "true") {
      setIsSuperAdmin(true);
    }

    // Load users from localStorage or use mock data
    const savedHistory = localStorage.getItem("sap-quest-history");
    const currentUser = localStorage.getItem("sap-quest-username");

    const mockUsers = [
      { 
        name: currentUser || "Consultor Atual", 
        date: new Date().toLocaleDateString(), 
        missions: userProfile.completedMissions || 0, 
        xp: userProfile.xp || 0, 
        isPremium: userProfile.isPremium || false 
      },
      { name: "João Silva", date: "01/08/2026", missions: 12, xp: 1250, isPremium: true },
      { name: "Maria Oliveira", date: "03/08/2026", missions: 5, xp: 450, isPremium: false },
      { name: "Carlos Souza", date: "05/08/2026", missions: 18, xp: 2100, isPremium: true },
    ];
    setUsers(mockUsers);
  }, [navigate]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAdminAuth(true);
      localStorage.setItem("sap-quest-admin-session", "true");
      toast.success("Acesso administrativo concedido!");
    } else {
      toast.error("Senha incorreta!");
    }
  };

  const toggleSuperAdmin = () => {
    const newState = !isSuperAdmin;
    setIsSuperAdmin(newState);
    localStorage.setItem("sap-quest-super-admin", newState ? "true" : "false");
    toast.info(newState ? "Modo Super Admin Ativado!" : "Modo Super Admin Desativado!");
  };

  const togglePremium = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].isPremium = !updatedUsers[index].isPremium;
    setUsers(updatedUsers);
    toast.success(`Plano de ${updatedUsers[index].name} atualizado.`);
  };

  const handleLogout = () => {
    localStorage.removeItem("sap-quest-admin-session");
    setIsAdminAuth(false);
  };

  if (!isAdminAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 space-y-6 shadow-xl border-t-4 border-t-indigo-600">
          <div className="text-center space-y-2">
            <div className="bg-indigo-100 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="size-8 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Portal do Administrador</h1>
            <p className="text-slate-500 text-sm">Insira a Senha Master para continuar</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Input 
                type="password" 
                placeholder="Senha Master" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-lg tracking-widest"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg">
              Entrar no Painel
            </Button>
          </form>
          
          <Button variant="ghost" className="w-full text-slate-400" onClick={() => navigate({ to: "/" })}>
            Voltar para o Início
          </Button>
        </Card>
      </div>
    );
  }

  const stats = {
    totalUsers: users.length,
    avgMissions: Math.round(users.reduce((acc, u) => acc + u.missions, 0) / users.length),
    premiumPct: Math.round((users.filter(u => u.isPremium).length / users.length) * 100)
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
              <Shield size={20} />
            </div>
            <span className="font-bold text-slate-900 hidden md:inline-block">Admin Dashboard</span>
            <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">v1.0.4</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/" })} className="text-slate-600">
              <ArrowLeft size={16} className="mr-2" />
              Sair do Admin
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-red-200 text-red-600 hover:bg-red-50">
              Encerrar Sessão
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total de Alunos</p>
              <h3 className="text-2xl font-bold text-slate-900">{stats.totalUsers}</h3>
            </div>
          </Card>
          
          <Card className="p-6 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Média de Missões</p>
              <h3 className="text-2xl font-bold text-slate-900">{stats.avgMissions}</h3>
            </div>
          </Card>
          
          <Card className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
              <Star size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Usuários Premium</p>
              <h3 className="text-2xl font-bold text-slate-900">{stats.premiumPct}%</h3>
            </div>
          </Card>
        </div>

        {/* Super Admin Control Card */}
        <Card className="overflow-hidden border-indigo-100">
          <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="size-5" />
              <h2 className="font-bold">Controle de Acesso do Criador</h2>
            </div>
            <Badge className="bg-white/20 text-white border-transparent">Privilegiado</Badge>
          </div>
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Modo Super Admin</p>
              <p className="text-sm text-slate-500">Libera acesso total a todas as 170 missões e níveis da aplicação.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={toggleSuperAdmin}
                className={isSuperAdmin ? "bg-amber-500 hover:bg-amber-600" : "bg-slate-200 text-slate-600 hover:bg-slate-300"}
              >
                {isSuperAdmin ? <Unlock size={18} className="mr-2" /> : <Lock size={18} className="mr-2" />}
                {isSuperAdmin ? "Desativar Master" : "Ativar Modo Super Admin"}
              </Button>
              <Button onClick={() => navigate({ to: "/" })} variant="outline" className="border-indigo-200 text-indigo-600">
                <LayoutDashboard size={18} className="mr-2" />
                Acessar Visão do Aluno
              </Button>
            </div>
          </div>
        </Card>

        {/* User Management Table */}
        <Card className="p-0 overflow-hidden border-slate-200">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-slate-900">Gestão de Usuários e Assinaturas</h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{users.length} usuários</Badge>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Nome do Consultor</th>
                  <th className="px-6 py-4">Data Cadastro</th>
                  <th className="px-6 py-4">Missões</th>
                  <th className="px-6 py-4">XP Acumulado</th>
                  <th className="px-6 py-4">Status Plano</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {users.map((user, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group text-sm">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{user.date}</td>
                    <td className="px-6 py-4 font-mono font-medium">{user.missions}</td>
                    <td className="px-6 py-4 text-indigo-600 font-bold">{user.xp} XP</td>
                    <td className="px-6 py-4">
                      {user.isPremium ? (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">Premium</Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-transparent">Gratuito</Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => togglePremium(idx)}
                        className={user.isPremium ? "text-slate-400 hover:text-red-500" : "text-amber-600 hover:bg-amber-50"}
                      >
                        {user.isPremium ? "Remover Premium" : "Tornar Premium"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
