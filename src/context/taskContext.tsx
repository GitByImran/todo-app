import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface Task {
  id: string;
  text: string;
  status: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  editTask: (taskId: string, newText: string) => void;
  completeTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  completeTask: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    setTasks(storedTasks);
  }, []);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (taskId: string, newText: string) => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = (taskId: string) => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "completed" } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
