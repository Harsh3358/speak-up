import React from "react";

const SpeakUpDashboard = () => {
  return (
    <div className="dark bg-bg-main text-white min-h-screen font-sans">
      <div className="flex h-screen overflow-hidden">

        {/* SIDEBAR */}
        <aside className="w-72 flex-shrink-0 bg-bg-sidebar flex flex-col border-r border-slate-800/50">
          <div className="p-8 flex items-center gap-3">
            <div className="size-10 gradient-banner rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-2xl">
                record_voice_over
              </span>
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

              {[
                ["EL", "English Lab", "emerald"],
                ["CC", "Code & Coffee", "orange"],
              ].map(([abbr, name, color]) => (
                <a
                  key={name}
                  href="#"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
                >
                  <div
                    className={`size-8 rounded-lg bg-${color}-500/20 text-${color}-500 flex items-center justify-center text-xs font-bold`}
                  >
                    {abbr}
                  </div>
                  {name}
                </a>
              ))}
            </div>
          </nav>

          {/* USER CARD */}
          <div className="p-6 mt-auto">
            <div className="bg-slate-800/40 rounded-2xl p-4 flex items-center gap-3 border border-slate-700/30">
              <div
                className="size-11 rounded-full bg-cover bg-center border-2 border-primary/30"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIwOTHh5ukIhFNOkOWp-p6FRNRaNdWer1Pk9F53chJZ1IJ47KNO-JwgAza9GLn5Ho-re9rkQoXo_XZm1EaX5ZX8tYxsd4HH1FbsgwG6kKuMkBhCRfgow-D9BVG41egg7irl1rHJ87A0tRDeKUCAJZVH9UWTBIcBLcCQRqE87BFpbJRXnlCdcEnRtYHzcCNpBSwEhC4k6zff12GJwWDjz4b_m7bH0ysi0OKKFrkz4ZaVwJZU2Gpf1WNSAN1FHEc5tvjxdHouHZ-g1PL')",
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Alex Smith</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Level 12
                </p>
              </div>
              <button className="text-slate-500 hover:text-white">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* HEADER */}
          <header className="h-20 flex items-center justify-between px-10 bg-bg-main/80 backdrop-blur-xl">
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

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            <div className="max-w-6xl mx-auto space-y-10">

              {/* HERO */}
              <section className="gradient-banner rounded-[2rem] p-10 shadow-2xl shadow-primary/20">
                <h2 className="text-4xl font-extrabold mb-3">
                  Instant Connections
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-lg">
                  Get matched with a partner based on your common interests instantly and start talking.
                </p>
                <button className="bg-white text-primary px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3">
                  <span className="material-symbols-outlined">bolt</span>
                  Quick Match
                </button>
              </section>

              {/* ROOMS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "IELTS Practice: Speak with Confidence and Flow",
                  "React vs Vue Debate: The 2024 State of Frontend",
                  "Learn Japanese: Daily Conversation Practice & Slang",
                  "Life Talk: Sharing Stories from Around the World",
                ].map((title) => (
                  <div
                    key={title}
                    className="bg-bg-card border border-slate-700/30 rounded-[2rem] p-8 hover:border-slate-600/50 transition-all"
                  >
                    <h4 className="text-xl font-bold mb-6 leading-tight">
                      {title}
                    </h4>
                    <button className="bg-white text-bg-main px-8 py-2.5 rounded-xl font-extrabold text-sm">
                      Join
                    </button>
                  </div>
                ))}
              </div>

              {/* LOAD MORE */}
              <div className="flex justify-center py-6">
                <button className="flex flex-col items-center gap-2 text-slate-500 hover:text-white font-bold">
                  <span className="text-xs uppercase tracking-widest">
                    Show More
                  </span>
                  <span className="material-symbols-outlined animate-bounce">
                    expand_more
                  </span>
                </button>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SpeakUpDashboard;
