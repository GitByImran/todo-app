import React, { useState } from "react";
import { useTaskContext } from "../context/taskContext";

const AllTasks: React.FC = () => {
  const { tasks, addTask, deleteTask, editTask, completeTask } =
    useTaskContext();
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [editedTaskId, setEditedTaskId] = useState<string | null>(null);
  const [editedTaskText, setEditedTaskText] = useState<string>("");

  const handleAddTask = () => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text: newTaskText,
      status: "incomplete",
    };
    addTask(newTask);
    setNewTaskText("");
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-baseline justify-between">
        <h2 className="font-bold text-muted-foreground">All Tasks</h2>
        <div className="mb-5">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Enter a new task"
            className="border rounded px-4 py-2 mr-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border">Task</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
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
                    <>
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
                    </>
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
