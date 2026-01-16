import React from "react";
import ParticipantAvatar from "./ParticipantAvatar";

/* accepts participants array */
const RoomParticipants = ({ participants = [] }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto">
        {participants.map((p) => (
          <ParticipantAvatar
            key={p.id}
            avatar={p.avatar || ""}
            name={p.name}
            role={p.role}
            isSpeaking={p.isSpeaking}
            muted={p.muted}
            raisedHand={p.raisedHand}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomParticipants;
