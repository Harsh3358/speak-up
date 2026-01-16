import React from "react";

/**
 * ParticipantAvatar - reusable avatar with overlays for mic, hand, speaking ring
 * props:
 *   - avatar (url)
 *   - name
 *   - role (Host/Speaker/Listener)
 *   - isSpeaking (boolean)
 *   - muted (boolean)
 *   - raisedHand (boolean)
 */
const ParticipantAvatar = ({ avatar, name, role, isSpeaking, muted, raisedHand }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div
          className={`size-28 rounded-full bg-cover bg-center border-2 ${isSpeaking ? "border-primary speaking-ring" : "border-border-dark"}`}
          style={{ backgroundImage: `url("${avatar}")` }}
        />
        {/* overlays */}
        {isSpeaking && (
          <div className="absolute -bottom-1 -right-1 size-8 bg-primary rounded-full flex items-center justify-center border-4 border-bg-dark">
            <span className="material-symbols-outlined text-white text-[18px] filled">mic</span>
          </div>
        )}

        {raisedHand && !isSpeaking && (
          <div className="absolute -top-1 -right-1 size-8 bg-raised-hand rounded-full flex items-center justify-center border-4 border-bg-dark">
            <span className="material-symbols-outlined text-bg-dark text-[18px] filled">front_hand</span>
          </div>
        )}

        {muted && (
          <div className="absolute -bottom-1 -right-1 size-8 bg-slate-700 rounded-full flex items-center justify-center border-4 border-bg-dark text-white/50">
            <span className="material-symbols-outlined text-[18px] filled">mic_off</span>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="font-bold text-white">{name}</p>
        {role && <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary">{role}</p>}
      </div>
    </div>
  );
};

export default ParticipantAvatar;
