// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-72 flex-shrink-0 bg-bgSidebar flex flex-col border-r border-borderSoft">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="material-symbols-outlined text-white text-2xl">record_voice_over</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">SpeakUp</h1>
      </div>

      <nav className="flex-1 px-6 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
          Navigation
        </p>

        {[
          ["explore", "Lobby", true],
          ["group", "Social"],
          ["diversity_3", "Clubs"],
          ["person", "Profile"],
        ].map(([icon, label, active]) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${
              active
                ? "bg-primary/10 text-primary"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            {label}
          </a>
        ))}

        <div className="pt-6 border-t border-slate-800/50 mt-6">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            Your Clubs
          </p>

          <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">EL</div>
            English Lab
          </a>

          <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs font-bold">CC</div>
            Code & Coffee
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
