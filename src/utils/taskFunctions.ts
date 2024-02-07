interface Task {
  id: string;
  text: string;
  status: string;
}

export const editTask = (
  tasks: Task[],
  taskId: string,
  editedTaskText: string
): Task[] => {
  return tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, text: editedTaskText };
    }
    return task;
  });
};

export const deleteTask = (tasks: Task[], taskId: string): Task[] => {
  return tasks.filter((task) => task.id !== taskId);
};

export const completeTask = (tasks: Task[], taskId: string): Task[] => {
  return tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, status: "completed" };
    }
    return task;
  });
};
