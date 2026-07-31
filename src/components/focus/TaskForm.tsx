import { useState } from "react";
import { Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TaskForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [value, setValue] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const title = value.trim();
    if (!title) return;
    onAdd(title);
    setValue("");
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="No que você quer focar hoje?"
        aria-label="Nova tarefa"
        className="h-12 rounded-xl border-border bg-card text-base shadow-[var(--shadow-soft)] placeholder:text-muted-foreground/70"
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 shrink-0 rounded-xl px-4 shadow-[var(--shadow-soft)]"
        aria-label="Adicionar tarefa"
      >
        <Plus className="size-5" />
        <span className="hidden sm:inline">Adicionar</span>
      </Button>
    </form>
  );
}
