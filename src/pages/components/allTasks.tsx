import React, { useState } from "react";
import { useTaskContext } from "../context/taskContext";
import AddTask from "./addTask";
import { Button } from "@/components/ui/button";
import { Check, CheckSquare, PenSquare, Star, Trash, X } from "lucide-react";

const AllTasks: React.FC = () => {
  const { tasks, deleteTask, editTask, completeTask } = useTaskContext();
  const [editedTaskId, setEditedTaskId] = useState<string | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const handleEdit = (taskId: string, currentText: string) => {
    setEditedTaskId(taskId);
    setEditedTaskText(currentText);
  };

  const handleSave = () => {
    if (editedTaskId) {
      editTask(editedTaskId, editedTaskText);
      setEditedTaskId(null);
    }
  };

  const handleCancel = () => {
    setEditedTaskId(null);
    setEditedTaskText("");
  };

  const filteredTasks = tasks.filter((task: any) => {
    if (filterPriority && task.priority !== filterPriority) {
      return false;
    }
    if (filterStatus === "completed" && task.status !== "completed") {
      return false;
    }
    if (filterStatus === "incomplete" && task.status === "completed") {
      return false;
    }
    return true;
  });

  return (
    <div className="container  max-w-[600px] mx-auto px-5">
      <div className="mb-10">
        <AddTask />
      </div>
      <div className="flex items-start justify-between">
        <div className="">
          <label htmlFor="priorityFilter" className="mr-2">
            Priority :
          </label>
          <select
            id="priorityFilter"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="border outline-blue-500 rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="regular">Regular</option>
            <option value="important">Important</option>
          </select>
        </div>
        <div>
          <label htmlFor="priorityFilter" className="mr-2">
            Status :
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border outline-blue-500 rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="completed">Show Completed</option>
            <option value="incomplete">Show Incomplete</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto my-5 space-y-2">
        {filteredTasks.map((task: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 px-3 py-1 border rounded-lg shadow"
          >
            <div className="flex items-center gap-2 flex-grow">
              {task.priority === "important" ? (
                <Star size={16} color="#FEB602" />
              ) : (
                <Star size={16} color="gray" />
              )}
              {editedTaskId === task.id ? (
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <p className="font-semibold capitalize">{task.text}</p>
              )}
            </div>
            <div>
              {editedTaskId === task.id ? (
                <>
                  <Button size={"icon"} variant={"ghost"} onClick={handleSave}>
                    <Check size={16} strokeWidth={3} color="#22C55E" />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    onClick={handleCancel}
                  >
                    <X size={16} strokeWidth={3} />
                  </Button>
                </>
              ) : (
                <div>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    title="edit"
                    onClick={() => handleEdit(task.id, task.text)}
                  >
                    <PenSquare size={16} strokeWidth={3} color="gray" />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    title="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Trash size={16} strokeWidth={3} color="#EF4444" />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    title="completed"
                    onClick={() => completeTask(task.id)}
                    disabled={task.status === "completed"}
                  >
                    <CheckSquare size={16} strokeWidth={3} color="#22C55E" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
