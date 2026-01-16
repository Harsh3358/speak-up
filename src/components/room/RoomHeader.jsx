import React from "react";
import { useNavigate } from "react-router-dom";

const RoomHeader = ({ title, roomTag, listeners }) => {
  const navigate = useNavigate();

  
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-bgDark z-20">
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center text-text-muted hover:text-white"
          onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-white text-lg font-bold">{title}</h2>
            <span className="w-2 h-2 rounded-full bg-red-500" />
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
            <span className="text-primary">{roomTag}</span>
            <span className="text-text-muted">• {listeners}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2 bg-[#2d1b1e] text-[#ff4d4d] rounded-full text-sm font-bold hover:bg-[#3d2428] transition-colors">
          Leave
        </button>
        <div
          className="bg-center bg-noRepeat aspect-square bg-cover rounded-full w-10 h-10 border border-border-dark"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC64KO6fln7vbuw8CBAMrRTmDdFni4aCImIaAgXkLaUfs__FyGTEj8DnHh-hS5SW7vZcKgQmwAkK6YRZa-_qV5Yn87u2Oa3JHaJy7S-bX6rJPqqv5Ts4aro-8J85UnvQFvTzQ8RGrlEzdfDlxiGVNvQXzayN23O9DpnPCEBE4cuiMhnmHjFn2UYO1gzTPZES4Ok_k3cp4S6s8IwzS5bSITuUnVuWQtCUjvnFIuydpapEjAKf8qvXkbimeO0E6ZJPq_Q5HxQVH3mzny')",
          }}
        />
      </div>
    </header>
  );
};

export default RoomHeader;
