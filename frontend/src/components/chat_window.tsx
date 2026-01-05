import chat_icon1 from '../imgs/icons/chat_icon1.png';
import '../styles/chat_window.scss';

type ChatWindowProps = {
    onClose: () => void;
};

export function ChatWindow({ onClose }: ChatWindowProps) {
    return (
        <div className="chat-window">
            <div className="chat-window__inner">
                <div className="chat-window__top-bar">
                    <button
                        type="button"
                        className="chat-window__close-btn"
                        aria-label="Close chat"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="chat-window__content">
                    <div className="chat-window__logo-wrap">
                        <div className="chat-window__logo-circle">
                            <span className="chat-window__logo-text">ANYSZN</span>
                        </div>
                    </div>

                    <div className="chat-window__messages">
                        <div className="chat-window__message chat-window__message--incoming">
                            <div className="chat-window__avatar chat-window__avatar--brand">
                                <span>AS</span>
                            </div>
                            <div className="chat-window__bubble">
                                Hi Mark, I&apos;m here to assist you!
                            </div>
                        </div>

                        <div className="chat-window__message chat-window__message--outgoing">
                            <div className="chat-window__bubble">
                                I need help creating a fit with a few t-shirts. One of the
                                t-shirts I already have in my wardrobe and one is from your
                                site but I didn&apos;t like the fit. Can you advise me on
                                what will go with the t-shirts?
                            </div>
                            <div className="chat-window__avatar chat-window__avatar--user">
                                <span>U</span>
                            </div>
                        </div>

                        <div className="chat-window__message chat-window__message--incoming">
                            <div className="chat-window__avatar chat-window__avatar--brand">
                                <span>AS</span>
                            </div>
                            <div className="chat-window__bubble">
                                Press the plus button and select the T-shirt from your
                                Saved section, and also press the Camera Roll to see what
                                T-shirt you already have.
                            </div>
                        </div>

                        <div className="chat-window__message chat-window__message--product">
                            <div className="chat-window__product-preview">
                                <img
                                    src={chat_icon1}
                                    alt="Example T-shirt"
                                    className="chat-window__product-image"
                                />
                            </div>
                            <div className="chat-window__avatar chat-window__avatar--user">
                                <span>U</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-window__input">
                    <div className="chat-window__input-inner">
                        <input
                            type="text"
                            className="chat-window__input-field"
                            placeholder="Write here"
                        />
                        <div className="chat-window__input-actions">
                            <button
                                type="button"
                                className="chat-window__icon-btn chat-window__icon-btn--secondary"
                                aria-label="Add attachment"
                            >
                                +
                            </button>
                            <button
                                type="button"
                                className="chat-window__icon-btn chat-window__icon-btn--primary"
                                aria-label="Send message"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
