import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface Task {
  id: string;
  text: string;
  status: string;
}

const AddTask: React.FC = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9), // Generating a unique ID
      text: "",
      status: "incomplete",
    };
    setTasks([...tasks, newTask]);
  };

  const handleSave = (index: number) => {
    const updatedTasks: Task[] = [...tasks];
    const taskToUpdate = updatedTasks[index];
    if (taskToUpdate.text.trim() !== "") {
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleChange = (index: number, value: string) => {
    const updatedTasks: Task[] = [...tasks];
    updatedTasks[index].text = value;
    setTasks(updatedTasks);
  };

  const handleDone = () => {
    router.push("../components/allTasks");
  };

  return (
    <div className="w-full">
      <h2 className="text-muted-foreground font-bold">Add Your Task</h2>
      <div className="my-5 space-y-4">
        {tasks.map((task, index) => (
          <div className="flex items-center gap-5" key={index}>
            <input
              type="text"
              placeholder="Write your text here"
              className="outline-none border-b-2 p-1 px-3 w-full"
              value={task.text}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <Button onClick={() => handleSave(index)}>Save</Button>
          </div>
        ))}
        <Button variant={"ghost"} onClick={handleAddTask}>
          + Add new task
        </Button>
      </div>
      <div className="text-right">
        <Button
          size={"lg"}
          variant={"default"}
          className="text-md"
          onClick={handleDone}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
