import React from "react";
import { useTaskContext } from "../context/taskContext";

const Appbar = () => {
  const { tasks } = useTaskContext();

  const totalTasks: number = tasks.length;
  const completedTasks: number = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <nav className="backdrop-blur-xl bg-sky-100 max-w-[1200px] mx-5 sm:mx-auto px-10 py-5 my-5 rounded-lg">
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
        <h2 className="logo capitalize font-bold text-2xl">todo app</h2>
        <div className="flex items-center">
          <div className="mr-4">
            Total Tasks: <span className="font-bold">{totalTasks}</span>
          </div>
          <div>
            Completed Tasks: <span className="font-bold">{completedTasks}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
