import chat_icon1 from '../imgs/icons/chat_icon1.png';

type ChatWindowProps = {
  onClose: () => void;
};

export function ChatWindow({ onClose }: ChatWindowProps) {
  return (
    <div className="fixed bottom-8 right-8 z-[999] w-[min(520px,calc(100vw-4rem))]">
      <div className="flex h-[30rem] max-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-3xl bg-[#d1d1d1] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <div className="relative flex justify-end px-4 pb-1 pt-3">
          <button type="button" aria-label="Close chat" onClick={onClose} className="absolute right-4 cursor-pointer bg-transparent p-1 text-[1.1rem] leading-none text-[#444] hover:text-black">
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden px-6 pb-3">
          <div className="flex justify-center pb-0 pt-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-color)] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <span className="text-[0.9rem] font-bold uppercase tracking-[0.18em] text-black">ANYHJS</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto pb-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/25">
            <div className="flex items-end justify-start gap-[0.6rem]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-color)] text-[0.7rem] font-semibold text-black">
                <span>AS</span>
              </div>
              <div className="max-w-[75%] rounded-xl bg-[#111] px-[0.9rem] py-[0.7rem] text-[0.9rem] leading-[1.4] text-white">
                Hi Mark, I&apos;m here to assist you!
              </div>
            </div>

            <div className="flex items-end justify-end gap-[0.6rem]">
              <div className="max-w-[75%] rounded-xl bg-[var(--accent-color)] px-[0.9rem] py-[0.7rem] text-[0.9rem] leading-[1.4] text-black">
                I need help creating a fit with a few t-shirts. One of the t-shirts I already have in my wardrobe and one is from your site but I didn&apos;t like the fit. Can you advise me on what will go with the t-shirts?
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[0.7rem] font-semibold text-white">
                <span>U</span>
              </div>
            </div>

            <div className="flex items-end justify-start gap-[0.6rem]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-color)] text-[0.7rem] font-semibold text-black">
                <span>AS</span>
              </div>
              <div className="max-w-[75%] rounded-xl bg-[#111] px-[0.9rem] py-[0.7rem] text-[0.9rem] leading-[1.4] text-white">
                Press the plus button and select the T-shirt from your Saved section, and also press the Camera Roll to see what T-shirt you already have.
              </div>
            </div>

            <div className="flex items-end justify-end gap-[0.6rem]">
              <div className="flex h-[110px] w-[90px] items-center justify-center rounded-xl bg-[var(--accent-color)] p-2">
                <img src={chat_icon1} alt="Example T-shirt" className="h-full w-full object-contain" />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[0.7rem] font-semibold text-white">
                <span>U</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#bfbfbf] px-6 pb-4 pt-3">
          <div className="relative flex items-center rounded-[1.25rem] bg-[#111] px-[0.9rem] py-[0.6rem]">
            <input type="text" placeholder="Write here" className="flex-1 border-none bg-transparent text-[0.95rem] text-white outline-none placeholder:text-[#888]" />
            <div className="absolute right-2 flex items-center gap-2">
              <button type="button" aria-label="Add attachment" className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-[1rem] leading-none text-[var(--accent-color)]">
                +
              </button>
              <button type="button" aria-label="Send message" className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-color)] text-[1rem] leading-none text-black shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
