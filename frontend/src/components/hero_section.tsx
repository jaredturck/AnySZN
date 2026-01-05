import hero_img from '../imgs/hero_images/slide1.png';
import '../styles/hero.scss';

export function HeroSection() {
    return (
        <section className="hero">
            <div className="hero__media" aria-hidden="true">
                <img
                    className="hero__image"
                    src={hero_img}
                    alt=""
                />
            </div>

            <div className="hero__content">
                <div className="hero__content-inner">
                    <div className="hero__eyebrow">
                        <span className="hero__eyebrow-text hero__eyebrow-text--accent">
                            COMING SOON
                        </span>
                        <span className="hero__eyebrow-dot" aria-hidden="true">•</span>
                        <span className="hero__eyebrow-text">
                            ANYSZN APP
                        </span>
                    </div>

                    <h1 className="hero__title">
                        Reinvent your wardrobe in one tap.
                    </h1>

                    <p className="hero__subtitle">
                        Discover AI-curated outfits from 100+ brands.
                        Build your look, compare prices, and shop it all in one place.
                    </p>

                    <div className="hero__actions">
                        <button className="hero__button hero__button--primary" type="button">
                            Join the waitlist
                        </button>
                        <button className="hero__button hero__button--secondary" type="button">
                            Preview the collection
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}