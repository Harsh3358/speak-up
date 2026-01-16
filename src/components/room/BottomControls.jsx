import React from "react";

const BottomControls = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex flex-col items-center">
      <div className="w-full max-w-4xl px-6 pb-6 pt-10 glass-blur border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <button className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all active:scale-95 group border border-white/5">
              <span className="material-symbols-outlined text-white text-[24px]">front_hand</span>
            </button>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Raise</span>
          </div>

          <button className="flex-1 h-16 ptt-gradient rounded-2xl flex items-center justify-center gap-3 text-white font-bold transition-all active:scale-[0.98] active:brightness-90 group relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="material-symbols-outlined text-[28px] filled">mic</span>
            <span className="text-lg tracking-wide uppercase">Push to Talk</span>
          </button>

          <div className="flex flex-col items-center gap-1">
            <button className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-[24px] filled">closed_caption</span>
            </button>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live</span>
          </div>
        </div>

        <div className="relative flex items-center gap-3">
          <div className="flex-1 bg-slate-900/50 border border-white/10 rounded-full h-12 px-5 flex items-center gap-3">
            <button className="text-text-muted hover:text-white">
              <span className="material-symbols-outlined text-[22px]">mood</span>
            </button>
            <input className="bg-transparent border-none flex-1 focus:ring-0 text-sm text-white placeholder:text-text-muted" placeholder="Say something..." type="text" />
          </div>
          <button className="text-primary font-bold px-4 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomControls;
