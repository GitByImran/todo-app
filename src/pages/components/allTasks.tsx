// AllTasks.jsx
import React, { useState } from "react";
import { useTaskContext } from "../context/taskContext";
import AddTask from "./addTask";

const AllTasks: React.FC = () => {
  const { tasks, deleteTask, editTask, completeTask } = useTaskContext();
  const [editedTaskId, setEditedTaskId] = useState<string | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");

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

  const filteredTasks = filterPriority
    ? tasks.filter((task: any) => task.priority === filterPriority)
    : tasks;

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col-reverse sm:flex-row items-baseline justify-between">
        <h2 className="font-bold text-muted-foreground">All Tasks</h2>
        <AddTask />
      </div>
      <div className="mb-5">
        <label htmlFor="priorityFilter" className="mr-2">
          Filter by Priority:
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
      <div className="overflow-x-auto my-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border">Task</th>
              <th className="px-4 py-2 text-left border">Priority</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task: any) => (
              <tr key={task.id}>
                <td className="border px-4 py-2">
                  {editedTaskId === task.id ? (
                    <input
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    task.text
                  )}
                </td>
                <td className="border px-4 py-2">{task.priority}</td>
                <td className="border px-4 py-2">{task.status}</td>
                <td className="border px-4 py-2">
                  {editedTaskId === task.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-700 px-4 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <div className="space-y-1">
                      <button
                        onClick={() => handleEdit(task.id, task.text)}
                        className="bg-gray-300 text-gray-700 px-4 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Delete
                      </button>
                      {task.status !== "completed" && (
                        <button
                          onClick={() => completeTask(task.id)}
                          className="bg-green-500 text-white px-4 py-1 rounded"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
