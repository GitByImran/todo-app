import React from "react";
import Menus from "../components/menus";

const Appbar = () => {
  return (
    <nav className="backdrop-blur-xl bg-black/10 max-w-[1200px] mx-auto px-10 py-5 my-5 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="logo capitalize font-bold text-3xl">todo app</h2>
        <Menus />
      </div>
    </nav>
  );
};

export default Appbar;
