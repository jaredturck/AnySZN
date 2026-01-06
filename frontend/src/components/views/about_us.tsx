import '../../styles/about.scss';

import bannerAbout from "../../imgs/main_banners/ANYHJS_About_Us_Banner.png";
import about_img from '../../imgs/main_banners/About_us_Page_Image.png';

import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function AboutUs() {
    return (
        <div>
            <ClothingBanner
                title="Abous Us"
                subtitle="Learn more about our mission to revolutionize the way you discover fashion with ANYHJS"
                img_src={bannerAbout}
            />

            <GenericPageSection
                label="About"
                title="About AnyHJS"
                subtitle="A next-generation, AI-driven fashion platform built around how people actually shop today."
            >
                <section className="about">
                    <div className="about__intro">
                        <div className="about__intro-text">
                            <p>
                                AnyHJS is a next-generation fashion platform built for how people shop today. We bring together 
                                hundreds of independent and emerging fashion brands into one seamless, AI-powered experience. Instead 
                                of bouncing between dozens of websites, you can discover, style and shop full outfits in one place — 
                                with the help of smart technology that actually understands fashion.
                            </p>

                            <p>
                                At our core, we're about making fashion personal, effortless and inclusive. We combine powerful AI 
                                tools with a multi-brand marketplace to help you answer two simple questions: “What should I wear?” 
                                and “Where do I get it?” — without the stress, guesswork or endless scrolling.
                            </p>
                        </div>

                        <div className="about__intro-media">
                            <div className="about__image">
                                <img src={about_img} alt="AnyHJS outfits" className="about__image-img" />
                            </div>
                            <p className="about__image-caption">
                                One platform. Hundreds of brands. Endless ways to style your season.
                            </p>
                        </div>
                    </div>

                    <div className="about__stats">
                        <div className="about__stat">
                            <span className="about__stat-label">Brands</span>
                            <span className="about__stat-value">100+</span>
                            <span className="about__stat-note">Independent and emerging designers</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-label">Built with AI</span>
                            <span className="about__stat-value">AI-First</span>
                            <span className="about__stat-note">Recommendations, discovery & intelligent styling</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-label">Future</span>
                            <span className="about__stat-value">In Progress</span>
                            <span className="about__stat-note">AI Stylist, VR Wardrobe & VR Changing Room</span>
                        </div>
                    </div>

                    <section className="about__section">
                        <header className="about__section-header">
                            <h2>What We Do</h2>
                            <p>
                                AnyHJS is a multi-brand fashion marketplace built exclusively online. We focus on 
                                clothing, bringing together products from hundreds of different brands and selling 
                                them through a single, unified platform.
                            </p>
                        </header>

                        <div className="about__section-body about__section-body--two-col">
                            <div>
                                <p>
                                    You can mix pieces from different labels, build full outfits, and check out in one 
                                    simple order. We handle the technology, secure payments and customer support — so 
                                    you can focus on creating looks you love.
                                </p>

                                <p>
                                    Because we operate purely online, we're able to move quickly, curate a wide range of 
                                    styles and invest heavily in technology that makes shopping smarter: personalised 
                                    recommendations and AI-powered styling tools that bring fashion and tech together.
                                </p>
                            </div>

                            <div className="about__highlight-card">
                                <h3 className="about__highlight-title">One basket. One checkout.</h3>
                                <p className="about__highlight-text">
                                    Mix brands. Build full looks. Check out once. AnyHJS handles the rest behind the scenes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="about__section">
                        <header className="about__section-header">
                            <h2>AI at the Heart of AnyHJS</h2>
                            <p>
                                We're a heavily AI-focused company, and our products are built around intelligent systems 
                                designed to help you make better style decisions — faster and with more confidence.
                            </p>
                        </header>

                        <div className="about__feature-grid">
                            <article className="about__feature-card">
                                <span className="about__feature-tag">Coming Soon</span>
                                <h3>AI Stylist</h3>
                                <p>
                                    <strong>AI Stylist</strong> is your personal digital stylist. You describe your occasion — birthday dinner, 
                                    smart-casual office day, festival weekend, first date — and our fashion model builds complete outfits from 
                                    our catalogue to match the vibe, weather and dress code.
                                </p>
                                <p>
                                    It understands trends, listens to your preferences and adapts to your personal style over time, 
                                    making it easier than ever to look put-together without needing to be an expert in fashion.
                                </p>
                            </article>

                            <article className="about__feature-card">
                                <span className="about__feature-tag">Coming Soon</span>
                                <h3>VR Wardrobe</h3>
                                <p>
                                    <strong>VR Wardrobe</strong> connects the clothes you already own with the options on AnyHJS. 
                                    Snap a photo of a piece from your wardrobe and our AI analyses its colour, style and cut, then 
                                    recommends new items from our store that pair perfectly with it.
                                </p>
                                <p>
                                    You keep your favourite pieces — VR Wardrobe helps you build fresh outfits around them, always tailored to you.
                                </p>
                            </article>

                            <article className="about__feature-card">
                                <span className="about__feature-tag">Coming Soon</span>
                                <h3>VR Changing Room</h3>
                                <p>
                                    With <strong>VR Changing Room</strong>, you'll be able to virtually try on clothing using your phone's camera. 
                                    Instead of guessing how something might look, you'll see it realistically overlaid on your body as you 
                                    move — like a digital changing room you can access from anywhere.
                                </p>
                                <p>
                                    It's our way of bringing the “try before you buy” experience of a physical store into the online world.
                                </p>
                            </article>
                        </div>
                    </section>

                    <section className="about__section">
                        <header className="about__section-header">
                            <h2>Why Shop with AnyHJS?</h2>
                        </header>

                        <div className="about__section-body about__section-body--two-col">
                            <ul className="about__bullets">
                                <li>
                                    <strong>One platform, hundreds of brands:</strong> mix and match without juggling multiple websites or checkouts
                                </li>
                                <li>
                                    <strong>Smarter recommendations:</strong> AI-driven suggestions based on your taste, not just trends
                                </li>
                                <li>
                                    <strong>Future-facing features:</strong> AI stylists, wardrobe tools and virtual experiences designed around real life
                                </li>
                                <li>
                                    <strong>Flexible payments:</strong> pay in a way that works for you
                                </li>
                                <li>
                                    <strong>Community and creators:</strong> a growing ecosystem of designers, influencers and resellers shaping what you see
                                </li>
                            </ul>

                            <p>
                                We're constantly evolving — adding new brands, refining our AI and rolling out features that make online fashion 
                                feel more intuitive, more fun and more human. Our mission is to build a fashion experience that feels like it was 
                                designed just for you.
                            </p>
                        </div>
                    </section>

                    <section className="about__section about__section--closing">
                        <header className="about__section-header">
                            <h2>Looking Ahead</h2>
                        </header>

                        <p>
                            AnyHJS is still growing, and many of our most ambitious features — including AI Stylist, VR Wardrobe and 
                            VR Changing Room — are actively in development. As we expand, we'll continue to blend technology, 
                            creativity and community to make fashion more accessible, more enjoyable and more personal for everyone.
                        </p>

                        <p>
                            Whether you're here for a quick outfit refresh or to explore the future of AI-powered fashion, we're glad you've found us.
                        </p>
                        <p>Welcome to AnyHJS.</p>
                    </section>
                </section>
            </GenericPageSection>
        </div>
    );
}
