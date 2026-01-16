import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";


const SpeakUpDashboard = () => {

  return (
    <div className="dark bg-bg-main text-white min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            <section className="gradient-banner rounded-[2rem] p-10 shadow-2xl shadow-primary/20 mb-10">
              <h2 className="text-4xl font-extrabold mb-3">
                Instant Connections
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Get matched with a partner based on your common interests
                instantly and start talking.
              </p>
              <button className="bg-white text-primary px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3">
                <span className="material-symbols-outlined">bolt</span>
                Quick Match
              </button>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "IELTS Practice: Speak with Confidence and Flow",
                "React vs Vue Debate: The 2024 State of Frontend",
                "Learn Japanese: Daily Conversation Practice & Slang",
                "Life Talk: Sharing Stories from Around the World",
              ].map((title) => (
                <RoomCard key={title} title={title} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SpeakUpDashboard;
