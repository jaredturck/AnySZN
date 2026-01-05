import React, { useState } from 'react';
import logo_black1 from '../imgs/PNG/logo_black_1.png';
import { ChatWindow } from './chat_window';
import '../styles/circle_logo.scss';

export function CircleLogo() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleLogoClick = () => {
        setIsChatOpen((prev) => !prev);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div>
            {isChatOpen && <ChatWindow onClose={handleChatClose} />}
            <div className="circle-logo__container">
                <button
                    type="button"
                    className="circle-logo"
                    onClick={handleLogoClick}
                    aria-label="Open chat"
                >
                    <img
                        className="circle-logo__image"
                        src={logo_black1}
                        alt="AnySzn logo"
                    />
                </button>
            </div>
        </div>
    );
}
