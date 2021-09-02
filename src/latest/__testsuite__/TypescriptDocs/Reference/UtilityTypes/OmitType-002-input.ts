interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};