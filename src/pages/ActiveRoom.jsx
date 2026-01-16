import React from "react";
import RoomHeader from "../components/room/RoomHeader";
import RoomRulesBanner from "../components/room/RoomRulesBanner";
import RoomParticipants from "../components/room/RoomParticipants";
import LiveSubtitleCard from "../components/room/LiveSubtitleCard";
import BottomControls from "../components/room/BottomControls";
import ChatSidebar from "../components/room/ChatSidebar";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";



/* Sample participants data */
const participants = [
  {
    id: 1,
    name: "Alex Chen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7shm-C-yCgd5RN4zbObQE5a9fltgdhm81taUojr2rszOg8KiL8CUW71gA84Rwkzc1Ek2g_XNNDbd4AcWukU93b1lOh-lScvQ5vx7zmR4uTiRtQ8ig1nbhU_iOoNGxvqs42qmeF458nv_3OX_V1g5HjU762mUwOiUb-lnIiXS37gZy4SEUOWnb3ZuNw7LX3KMiasRbUr6K8dVc5P51GGNTRFhauPMldtlYR9jSAjtqvQ_Vo9IkLsILjlasRAVf5CekRtVLe7K3zvN",
    role: "Host",
    isSpeaking: true,
    muted: false,
    raisedHand: false,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC_v6-sXgyF5Pv66vX2qt0tGWcOhtjbF7Dnif9QLhadDT1PWmxwiHSjm0A-Z_S8LcAiLe_Kta7z2ldxgjQByDzxvuq-iPdWGMUvy3JdbrV3CcHdOykiCFggXkcnf5aN2E3EWdzCr3i7Ex8SBiOoRvNjsks0C3c-b2ycIFJY9HyWGHRNuyump6ivmyT-8wWH7ojlqODxY1sKR-uK1TnhRrQw2SfCJoszgu-vhujgxX0fckJ65EZO6lo738juu20m1H9WVAXh3qCX8SD",
    role: "Speaker",
    isSpeaking: false,
    muted: true,
    raisedHand: true,
  },
  {
    id: 3,
    name: "Mike Ross",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4613aeVrgjzeG7IBqa_YroKkhcrXOrzjeGIz_9lvUl7CYxIgVti27xR6yfHH1OKkJadCcIto5iCPqnVzh4FB-zTKY0u1KzDgQN9hbV9AqitDsxfuwjegwrgf1Nr1RrAk7R5PY5zknw7oghx1P5Lf0mUGcJUti2bhTIJ6nB03QDBGTWnSUYmFAzgXtJhJuP1w7IBKSa7MsI6aTp-i02AK64W66uXqzWbwn1BJpDbgCJMIoOdr1hAaD8s2V2sNtyrEAbNvbH7pFX7ss",
    role: "Speaker",
    isSpeaking: false,
    muted: true,
    raisedHand: false,
  },
  /* additional listeners */
  { id: 4, name: "Elena", avatar: "...", role: "Listener" },
  { id: 5, name: "David", avatar: "...", role: "Listener" },
  { id: 6, name: "Chris", avatar: "...", role: "Listener" },
];

const ActiveRoom = () => {
    const { id } = useParams();
    const location = useLocation();
    const roomTitle = location.state?.title ?? id;


    return (
        <div className="flex h-screen flex-col">
        <RoomHeader title={roomTitle} roomTag="SpeakUp" listeners="1.2k listening" />
        <main className="flex-1 flex overflow-hidden relative">
            <section className="flex-1 flex flex-col bg-bg-dark custom-scrollbar overflow-y-auto pb-40">
            <div className="mx-6 mt-6 mb-8">
                <RoomRulesBanner />
            </div>

            <div className="px-8 flex-1">
                <RoomParticipants participants={participants} />
                <div className="max-w-xl mx-auto mt-12 mb-20">
                <LiveSubtitleCard />
                </div>
            </div>

            <BottomControls />
            </section>

            <ChatSidebar />
        </main>
        </div>
    );
};

export default ActiveRoom;
