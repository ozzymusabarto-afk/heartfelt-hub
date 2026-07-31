# Plano — App de foco diário ("Foco")

Seu pedido veio abreviado ("tes" / "es"), então assumi um ponto de partida útil e simples: um app de tarefas/foco do dia, bonito e funcional, sem backend. Se a ideia era outra, me diga e eu refaço o plano.

## O que será construído

Uma página única (a home do app) com:

1. **Cabeçalho** com data de hoje e uma frase-guia curta.
2. **Campo de nova tarefa** — digitar e pressionar Enter adiciona à lista.
3. **Lista de tarefas** — marcar como concluída, remover, reordenar por concluído.
4. **Barra de progresso** — quantas tarefas do dia já foram concluídas.
5. **Filtros** — Todas / Pendentes / Concluídas.
6. **Persistência local** — as tarefas continuam lá ao recarregar a página.
7. **Estado vazio** com convite para adicionar a primeira tarefa.

## Direção visual

- Tema claro e quente (areia/off-white), com um acento único em verde-oliva profundo.
- Tipografia com personalidade: título em fonte display, corpo em sans-serif legível.
- Cartões com bordas suaves, sombra discreta, micro-animação ao concluir tarefa.
- Sem gradiente roxo, sem Inter/Poppins.

## Passo a passo da implementação

1. Definir os tokens de design (cores, fontes, sombras) no CSS global e carregar as fontes no head do root.
2. Criar o componente de item de tarefa (checkbox, texto, botão remover).
3. Criar o componente de formulário de nova tarefa.
4. Criar o componente de progresso + filtros.
5. Montar a home juntando os componentes e o estado da lista.
6. Adicionar persistência local (leitura após hidratação, para evitar erro de renderização).
7. Definir título/descrição/social preview próprios da página.
8. Verificar no preview: adicionar, concluir, filtrar, remover e recarregar.

## Detalhes técnicos

- Rota: `src/routes/index.tsx` (substitui o placeholder atual).
- Componentes novos em `src/components/` usando os componentes shadcn já disponíveis.
- Estado em React (`useState`) + `localStorage` lido dentro de `useEffect`.
- Nenhum backend/Cloud necessário nesta etapa; fácil de migrar para banco depois se quiser login e sincronização entre dispositivos.

## Fora do escopo (posso adicionar depois)

- Login de usuários e sincronização na nuvem.
- Tarefas recorrentes, prazos, notificações.
- Histórico por dia / estatísticas semanais.
