import React from "react";
import { useTaskContext } from "../context/taskContext";

const Appbar = () => {
  const { tasks } = useTaskContext();

  const totalTasks: number = tasks.length;
  const completedTasks: number = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <div className="mx-5">
      <nav className="backdrop-blur-xl bg-sky-100 max-w-[1200px] mx-auto my-5 px-10 py-5 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
          <h2 className="logo capitalize font-bold text-2xl text-slate-700">
            todo list app
          </h2>
          <div className="flex items-center gap-5">
            <div className="space-x-2">
              <span className="text-muted-foreground font-semibold">
                Total Tasks :
              </span>
              <span className="font-bold text-gray-600">{totalTasks}</span>
            </div>
            <div className="space-x-2">
              <span className="text-muted-foreground font-semibold">
                Completed Tasks:
              </span>
              <span className="font-bold text-gray-600">{completedTasks}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
