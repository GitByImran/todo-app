import React from "react";
import { CopyPlus, CalendarCheck, PenSquare } from "lucide-react";
import Link from "next/link";

const menus = [
  {
    icon: <CopyPlus size={20} />,
    label: "Add Task",
    goto: "",
  },
  {
    icon: <CalendarCheck size={25} />,
    label: "All Tasks",
    goto: "../components/allTasks.tsx",
  },
  {
    icon: <PenSquare size={20} />,
    label: "Edit Task",
    goto: "",
  },
];

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-between">
      {menus.map((menu, index) => (
        <Link
          href={menu.goto}
          key={index}
          className="flex flex-col items-center gap-2 px-2 py-1 hover:bg-teal-300 rounded"
        >
          <p>{menu.icon}</p>
          {/* <p className="font-bold">{menu.label}</p> */}
        </Link>
      ))}
    </div>
  );
};

export default BottomMenu;
