import React from "react";
import { CopyPlus, CalendarCheck } from "lucide-react";
import Link from "next/link";

const options = [
  {
    icon: <CalendarCheck size={20} />,
    label: "All Tasks",
    goto: "/components/addTask",
  },
  {
    icon: <CopyPlus size={20} />,
    label: "Add Task",
    goto: "/components/addTask",
  },
];

const Menus = () => {
  return (
    <div className="flex">
      {options.map((option, index) => (
        <Link
          href={option.goto}
          key={index}
          className="flex items-center gap-2 px-2 py-1 hover:bg-teal-300 rounded"
        >
          <p>{option.icon}</p>
          <p className="font-bold">{option.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Menus;
