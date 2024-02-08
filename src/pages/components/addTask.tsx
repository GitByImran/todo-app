import React, { useState } from "react";
import { useTaskContext } from "../context/taskContext";
import moment from "moment";

const AddTask = () => {
  const { addTask } = useTaskContext();
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [priority, setPriority] = useState<string>("regular");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: newTaskText,
        status: "incomplete",
        addedTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
        priority: priority,
      };
      addTask(newTask);
      setNewTaskText("");
      setPriority("regular");
    }
  };

  return (
    <div>
      <div className="mb-5 space-y-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter a new task"
          className="border outline-blue-500 rounded px-4 py-2 mr-2"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="h-10 border outline-blue-500 rounded px-2 py-1 mx-2"
        >
          <option value="" disabled>
            Set Priority
          </option>
          <option value="regular">Regular</option>
          <option value="important">Important</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
