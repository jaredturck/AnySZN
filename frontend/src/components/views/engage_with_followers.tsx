import banner1 from "../../imgs/banners/engage_with_followers.png";
import engageImage from "../../imgs/banners/clothing_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function EngageWithFollowers() {
    return (
        <div>
            <ClothingBanner
                title="Engage with AnyHJS"
                subtitle="Follow, connect and be part of the community"
                img_src={banner1}
            />

            <GenericPageSection
                label="Community"
                title="Engage with AnyHJS"
                subtitle="Discover all the ways you can follow, contact and connect with us across our social channels."
            >
                <h1>Engage with AnyHJS</h1>

                <p>
                    At AnyHJS, fashion is a conversation. We’re more than just a place to shop – we’re a
                    community of style lovers, creators and brands from all over the world. Follow us, talk
                    to us, and stay up to date with the latest drops, trends and outfit ideas across all of
                    our social media channels.
                </p>

                <p>
                    Because we bring hundreds of brands together in one place, you can discover new labels,
                    compare styles from big names like Nike and Adidas, and buy full outfits in a single,
                    easy checkout. Our AI-powered recommendations help you find pieces you’ll actually wear,
                    while our social channels inspire you with fresh looks every day.
                </p>

                <figure>
                    <img
                        src={engageImage}
                        alt="AnyHJS community and social media banner"
                        className="w-full rounded-xl"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <hr />

                <h2>Connect with Us on Social Media</h2>

                <p>
                    Follow AnyHJS on your favourite platforms to see the latest fashion trends, outfit
                    inspiration, behind-the-scenes content, and community spotlights. Join the conversation,
                    tag us in your looks, and let us know what you want to see more of.
                </p>

                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Platform</th>
                                <th>Handle</th>
                                <th>What You’ll Find</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Instagram</td>
                                <td>@AnyHJS (placeholder)</td>
                                <td>Daily outfit inspiration, drops, styling reels and community features.</td>
                            </tr>
                            <tr>
                                <td>TikTok</td>
                                <td>@AnyHJS (placeholder)</td>
                                <td>Short-form styling tips, trend breakdowns and behind-the-scenes content.</td>
                            </tr>
                            <tr>
                                <td>YouTube</td>
                                <td>AnyHJS (placeholder)</td>
                                <td>Long-form lookbooks, styling guides, interviews and fashion deep dives.</td>
                            </tr>
                            <tr>
                                <td>Pinterest</td>
                                <td>@AnyHJS (placeholder)</td>
                                <td>Curated moodboards, outfit boards and seasonal trend collections.</td>
                            </tr>
                            <tr>
                                <td>Twitter / X</td>
                                <td>@AnyHJS (placeholder)</td>
                                <td>Real-time updates, news, drops and quick community chats.</td>
                            </tr>
                            <tr>
                                <td>Discord</td>
                                <td>AnyHJS Community (placeholder)</td>
                                <td>Chat with other members, share outfits, vote on future features and drops.</td>
                            </tr>
                            <tr>
                                <td>Snapchat</td>
                                <td>AnyHJS (placeholder)</td>
                                <td>Quick sneak peeks, early looks and exclusive behind-the-scenes moments.</td>
                            </tr>
                            <tr>
                                <td>News Section</td>
                                <td>On our website</td>
                                <td>Official announcements, feature updates, collaborations and brand news.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Please replace the placeholder handles above with your actual social media usernames and
                    links once they are finalised.
                </p>

                <hr />

                <h2>Why Engage with AnyHJS?</h2>

                <p>
                    Our community is at the heart of everything we do. By engaging with us online, you’ll be
                    the first to know about new brands joining the platform, exclusive outfit drops, limited
                    collections and special promotions. You’ll also see how other users style their pieces,
                    and you can share your own fits for a chance to be featured.
                </p>

                <p>
                    Because we aggregate clothing from hundreds of different brands, you can discover a
                    complete look – shoes, trousers, hoodies, accessories and more – without jumping between
                    multiple websites. Our AI algorithms learn what you like and help surface the pieces and
                    outfits that match your style, budget and wardrobe, all in one place and with flexible
                    payment options at checkout.
                </p>

                <hr />

                <h2>Get in Touch</h2>

                <p>
                    Got a question, collaboration idea, or just want to say hi? We’d love to hear from you.
                    You can contact us directly via our <strong>Contact</strong> page on the website or send
                    us a message through any of our social platforms listed above.
                </p>

                <p>
                    For support about an existing order, please include your order number and any relevant
                    details so we can help you as quickly as possible. For brand and influencer partnership
                    enquiries, please reach out via our business email or contact form and a member of the
                    team will get back to you.
                </p>

                <p>
                    Join the AnyHJS community today, follow us online, and be part of the future of fashion.
                </p>
            </GenericPageSection>
        </div>
    );
}
