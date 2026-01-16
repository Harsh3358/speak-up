import React from "react";

/* small static chat stream replicating original HTML */
const ChatSidebar = () => {
  return (
    <aside className="w-96 border-l border-border-dark flex flex-col bg-bgDark hidden xl:flex">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Chat Stream</h3>
          <span className="material-symbols-outlined text-text-muted text-[18px]">more_horiz</span>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-2">
          <div className="flex gap-4">
            <div className="size-10 rounded-full bg-cover bg-center shrink-0 border border-white/10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVz35bQLDrNGMNBY4ZqSWi69-5amEj4wRp_-UWm2-KaAXJ_t3NsncGRk_3CiLafXPfT3JcMXvehzVSfEqAIJsfzP6bWlauCvNMpx_ilUFO_2uQDN-LzVBdF_sS3Slru-oSe4t7xhdts7cOFiqhv9bcDE76AuSDydiogU8q-9OcKtzEOhYYO0a9zX4lTgvN72IBzzceVGw8dtKRiP-YF_jeio0TgtwItOlU8nT81qjas2wcL-XHqttEn7bifij6pBslfjbl1AytCLxX")` }} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Jordan</span>
                <span className="text-[10px] text-text-muted">2:45 PM</span>
              </div>
              <div className="bg-slate-900/80 rounded-2xl rounded-tl-none p-4 border border-white/5">
                <p className="text-sm text-white/90 leading-relaxed">
                  Totally agree, Alex! Check out this report on decentralized trust:{" "}
                  <span className="text-primary underline cursor-pointer">speakup.io/blog/safety</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="size-10 rounded-full bg-cover bg-center shrink-0 border border-white/10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC_v6-sXgyF5Pv66vX2qt0tGWcOhtjbF7Dnif9QLhadDT1PWmxwiHSjm0A-Z_S8LcAiLe_Kta7z2ldxgjQByDzxvuq-iPdWGMUvy3JdbrV3CcHdOykiCFggXkcnf5aN2E3EWdzCr3i7Ex8SBiOoRvNjsks0C3c-b2ycIFJY9HyWGHRNuyump6ivmyT-8wWH7ojlqODxY1sKR-uK1TnhRrQw2SfCJoszgu-vhujgxX0fckJ65EZO6lo738juu20m1H9WVAXh3qCX8SD")` }} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Elena</span>
                <span className="text-[10px] text-text-muted">2:48 PM</span>
              </div>
              <div className="bg-slate-900/80 rounded-2xl rounded-tl-none p-4 border border-white/5">
                <p className="text-sm text-white/90 leading-relaxed">The moderation engine seems much faster today. ✨</p>
              </div>
            </div>
          </div>

          <div className="h-40" />
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;
