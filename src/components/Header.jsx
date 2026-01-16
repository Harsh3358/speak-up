import React from "react";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10 bg-bgMain/80 backdrop-blur-xl z-10">
      <div className="relative max-w-2xl w-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
          search
        </span>
        <input
          type="text"
          placeholder="Find people, rooms or topics..."
          className="w-full bg-slate-800/50 rounded-2xl pl-12 pr-4 py-3 text-sm placeholder:text-slate-500 text-white"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-white">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full" />
        </button>

        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Create Room
        </button>
      </div>
    </header>
  );
};

export default Header;
