import React, { useState } from 'react';
import logo_black1 from '../imgs/PNG/logo_black_1.png';
import { ChatWindow } from './chat_window';

export function CircleLogo() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleLogoClick = () => setIsChatOpen((prev) => !prev);
  const handleChatClose = () => setIsChatOpen(false);

  return (
    <div>
      {isChatOpen && <ChatWindow onClose={handleChatClose} />}

      <div className="fixed bottom-8 right-4 z-[1000]">
        <button type="button" aria-label="Open chat" onClick={handleLogoClick} className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-0 bg-[var(--accent-color)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[0.1rem] hover:scale-[1.03] hover:shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
          <img src={logo_black1} alt="AnyHJS logo" className="w-8" />
        </button>
      </div>
    </div>
  );
}
