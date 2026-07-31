import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Filter } from "./types";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendentes" },
  { value: "done", label: "Concluídas" },
];

export function TaskProgress({
  total,
  done,
  filter,
  onFilterChange,
}: {
  total: number;
  done: number;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-muted-foreground">
            {done} de {total} {total === 1 ? "tarefa" : "tarefas"} concluída
            {done === 1 ? "" : "s"}
          </span>
          <span className="font-display text-lg text-primary">{percent}%</span>
        </div>
        <Progress value={percent} className="h-2 bg-secondary" />
      </div>

      <div
        className="flex gap-1 rounded-xl border border-border bg-card p-1"
        role="group"
        aria-label="Filtrar tarefas"
      >
        {FILTERS.map((f) => (
          <Button
            key={f.value}
            variant="ghost"
            size="sm"
            aria-pressed={filter === f.value}
            onClick={() => onFilterChange(f.value)}
            className={`flex-1 rounded-lg text-sm ${
              filter === f.value
                ? "bg-accent text-accent-foreground hover:bg-accent"
                : "text-muted-foreground"
            }`}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
