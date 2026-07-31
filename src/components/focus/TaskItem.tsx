import { X } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Task } from "./types";

export function TaskItem({
  task,
  onToggle,
  onRemove,
}: {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <li
      className={`group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-200 hover:shadow-[var(--shadow-soft)] ${
        task.done ? "opacity-70" : ""
      }`}
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.done}
        onCheckedChange={() => onToggle(task.id)}
        className="size-5 rounded-md"
      />
      <label
        htmlFor={`task-${task.id}`}
        className={`flex-1 cursor-pointer text-base transition-all duration-200 ${
          task.done ? "text-muted-foreground line-through" : "text-foreground"
        }`}
      >
        {task.title}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(task.id)}
        aria-label={`Remover ${task.title}`}
        className="size-8 shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive focus-visible:opacity-100 group-hover:opacity-100"
      >
        <X className="size-4" />
      </Button>
    </li>
  );
}
