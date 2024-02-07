import React from "react";
import { CopyPlus, CalendarCheck, PenSquare } from "lucide-react";
import Link from "next/link";

const menus = [
  {
    icon: <CalendarCheck size={20} />,
    label: "All Tasks",
    goto: "../components/allTasks.tsx",
  },
  {
    icon: <CopyPlus size={20} />,
    label: "Add Task",
    goto: "",
  },
  {
    icon: <PenSquare size={20} />,
    label: "Edit Task",
    goto: "",
  },
];

const Sidemenu = () => {
  return (
    <div className="">
      {menus.map((menu, index) => (
        <Link
          href={menu.goto}
          key={index}
          className="flex items-center gap-2 px-2 py-1 hover:bg-teal-300 rounded"
        >
          <p>{menu.icon}</p>
          <p className="font-bold">{menu.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidemenu;
