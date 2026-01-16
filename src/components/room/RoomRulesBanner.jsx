import React from "react";

const RoomRulesBanner = () => {
  return (
    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary/20 text-primary">
        <span className="material-symbols-outlined filled">verified_user</span>
      </div>
      <div className="flex-1">
        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-0.5">Room Rules Active</p>
        <p className="text-white/90 text-sm">Be respectful. SpeakUp AI is moderating for safety.</p>
      </div>
      <button className="text-text-muted" aria-label="room-info">
        <span className="material-symbols-outlined text-[20px]">info</span>
      </button>
    </div>
  );
};

export default RoomRulesBanner;
