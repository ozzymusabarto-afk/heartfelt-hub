export type Task = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};

export type Filter = "all" | "pending" | "done";

export const STORAGE_KEY = "foco.tasks.v1";
