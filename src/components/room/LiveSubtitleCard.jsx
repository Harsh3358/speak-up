import React from "react";

const LiveSubtitleCard = () => {
  return (
    <div className="bg-[#121926] rounded-2xl p-5 border border-white/5 relative">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 bg-primary/20 rounded flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Live AI Subtitles</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[10px] text-text-muted font-bold uppercase">
          <span>ENG</span>
          <span className="material-symbols-outlined text-[14px]">translate</span>
        </div>
      </div>

      <p className="text-white leading-relaxed">
        <span className="text-primary font-bold">Alex Chen:</span> "Integrating AI moderation shouldn't stifle voice, but empower it. We're building for safety at scale..."
      </p>
    </div>
  );
};

export default LiveSubtitleCard;
