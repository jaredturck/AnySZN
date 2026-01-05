import banner1 from "../../imgs/banners/vr_waredrobe.avif";
import vrWardrobeImage from "../../imgs/banners/vr_waredrobe_img1.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function VRWardrobe() {
    return (
        <div>
            <ClothingBanner
                title="VR Wardrobe"
                subtitle="Turn your existing wardrobe into AI-powered outfits (Coming soon)"
                img_src={banner1}
            />

            <GenericPageSection
                label="Labs"
                title="VR Wardrobe (Coming Soon)"
                subtitle="An upcoming feature in our mobile app that uses AI to build outfits around the clothes you already own."
            >
                <h1>VR Wardrobe (Coming Soon)</h1>

                <p>
                    Say hello to the future of getting dressed. <strong>VR Wardrobe</strong> is an upcoming
                    feature in our mobile app that will transform the way you style the clothes you already
                    own. Simply snap a photo of any item in your wardrobe – a shirt, pair of trousers,
                    jacket, dress, or even your favourite sneakers – and our AI will instantly analyse it
                    and recommend pieces from our store that match perfectly.
                </p>

                <p>
                    Behind the scenes, VR Wardrobe uses advanced <strong>convolutional neural networks</strong>
                    and fashion-trained AI models to understand the item’s type, colours, patterns and overall
                    vibe. It doesn’t just match colours – it looks at current fashion trends, social media
                    styles, and what’s in or out of season, then suggests outfits from hundreds of brands
                    all in one place. No more guessing what goes with what, no more endlessly scrolling:
                    you get smart, curated outfit suggestions in seconds.
                </p>

                <figure>
                    <img
                        src={vrWardrobeImage}
                        alt="Preview of VR Wardrobe feature"
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </figure>

                <h2>What VR Wardrobe Will Let You Do</h2>

                <ul>
                    <li>Take a photo of any item in your wardrobe and let our AI identify it automatically.</li>
                    <li>Get instant outfit suggestions that complement your existing clothes.</li>
                    <li>Discover new pieces from hundreds of brands without visiting multiple websites.</li>
                    <li>Stay on-trend with recommendations informed by real-time fashion and social media trends.</li>
                    <li>Save your favourite AI-generated outfits and shop them directly through our platform.</li>
                </ul>

                <p>
                    Whether you’re building a capsule wardrobe or planning a big night out, VR Wardrobe
                    helps you look stylish without needing to be a fashion expert. It bridges the gap
                    between the clothes you already own and the huge range of items available on our site,
                    making it easier than ever to build outfits you actually love.
                </p>

                <h2>Status: Work in Progress</h2>

                <p>
                    Our developers are currently working hard to bring VR Wardrobe to life and integrate it
                    seamlessly into our mobile app. This feature is still in development and not yet
                    available to use, but it’s a key part of our long-term vision for AnySzn.
                </p>

                <p>
                    Check back here for updates, or follow us on social media to be the first to know when
                    VR Wardrobe launches. We can’t wait to help you turn your existing wardrobe into a
                    smarter, more stylish, AI-powered experience.
                </p>
            </GenericPageSection>
        </div>
    );
}
