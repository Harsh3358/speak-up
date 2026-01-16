import React from "react";
import { useNavigate } from "react-router-dom";


const RoomCard = ({ title }) => {
    const navigate = useNavigate();
    const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

    return (
        <div className="bg-bg-card border border-slate-700/30 rounded-[2rem] p-8 hover:border-slate-600/50 transition-all">
            <h4 className="text-xl font-bold mb-6 leading-tight">{title}</h4>

            <button 
                onClick={() => navigate(`/room/${slug}`, { state: { title } })}
                className="bg-white text-bg-main px-8 py-2.5 rounded-xl font-extrabold text-sm hover:bg-slate-200 transition-all"
            >
                Join
            </button>
        </div>
    );
};

export default RoomCard;
