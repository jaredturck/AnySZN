import banner1 from "../../imgs/banners/vr_changing_room.png";
import vrChangingRoomImage from "../../imgs/banners/vr_changing_room_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function VRChangingRoom() {
    return (
        <div>
            <ClothingBanner
                title="VR Changing Room"
                subtitle="Virtual try-on for real outfits (Coming soon)"
                img_src={banner1}
            />

            <GenericPageSection
                label="Labs"
                title="VR Changing Room (Coming Soon)"
                subtitle="A virtual try-on experience that lets you see outfits on your body in real time, straight from your camera."
            >
                <h1>VR Changing Room (Coming Soon)</h1>

                <p>
                    Welcome to the next generation of online shopping. <strong>VR Changing Room</strong>
                    is our upcoming virtual try-on experience that lets you see how clothes will look on
                    you before you buy – all from your phone, in real time. Instead of guessing from
                    product photos or size charts, you’ll be able to stand in front of your camera and
                    watch outfits appear directly on your body, as if you were in a real changing room.
                </p>

                <p>
                    As a multi-brand platform, we stock clothing from hundreds of labels – from Nike and
                    Adidas to emerging designers and niche streetwear brands. VR Changing Room bridges the
                    gap between our huge online selection and the in-store “try it on” experience, giving
                    you a digital mirror that helps you make confident choices with zero hassle.
                </p>

                <figure>
                    <img
                        src={vrChangingRoomImage}
                        alt="Preview of VR Changing Room experience"
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </figure>

                <h2>What Is VR Changing Room?</h2>

                <p>
                    VR Changing Room is an advanced AI-powered virtual fitting feature built into our
                    website and mobile experience. When you find an item you like, you’ll be able to tap a
                    button to launch VR Changing Room, which activates your front-facing camera and turns
                    your screen into a live mirror.
                </p>

                <p>
                    Using cutting-edge computer vision and neural network technology, our system
                    recognises your body in the camera feed and overlays the selected clothing item onto
                    you in real time. As you move, turn, or adjust your phone, the garment moves with you –
                    updating dynamically so you can see how it fits, flows and looks from different angles.
                    This is far more than a simple filter: it’s a dedicated virtual try-on engine designed
                    specifically for fashion.
                </p>

                <h2>Why VR Changing Room Is a Game-Changer</h2>

                <ul>
                    <li>
                        <strong>Try before you buy – virtually:</strong> See what you’d look like in any
                        item before committing to a purchase.
                    </li>
                    <li>
                        <strong>Real-time, live preview:</strong> The clothing stays aligned with your body
                        as you move, just like looking into a physical mirror.
                    </li>
                    <li>
                        <strong>Confidence in your style:</strong> Avoid guesswork about whether something
                        looks smart, casual, bold or subtle – you can see it on yourself instantly.
                    </li>
                    <li>
                        <strong>Perfect for a multi-brand platform:</strong> Test looks from multiple
                        brands in one place without visiting different stores or websites.
                    </li>
                    <li>
                        <strong>Fewer returns, better outfits:</strong> Choose pieces that genuinely suit
                        you, your body shape and your personal style, reducing disappointment and returns.
                    </li>
                </ul>

                <p>
                    For shoppers who love variety but don’t want the uncertainty of blind online purchases,
                    VR Changing Room offers the closest thing to stepping into a real changing room – only
                    faster, smarter and available wherever you are.
                </p>

                <h2>How It Will Work</h2>

                <ol>
                    <li>Browse our website or app and find a piece you like.</li>
                    <li>Tap the <strong>“Try in VR Changing Room”</strong> button on the product page.</li>
                    <li>Allow camera access and position yourself in view of the front-facing camera.</li>
                    <li>Watch as the selected item appears on your body in real time.</li>
                    <li>Move, turn and adjust your angle to see how it looks from different perspectives.</li>
                </ol>

                <p>
                    You’ll be able to switch between sizes, colours and styles quickly, so you can compare
                    outfits and find the combination that feels just right before adding items to your
                    basket.
                </p>

                <h2>Status: In Development</h2>

                <p>
                    VR Changing Room is a complex, cutting-edge feature and is currently in active
                    development. Our AI and engineering teams are working hard to make sure the experience
                    is accurate, responsive and easy to use across a wide range of devices.
                </p>

                <p>
                    This feature is not yet available, but it’s a major part of our roadmap and will be
                    rolled out in future updates. Keep an eye on this page and our social channels for
                    previews, beta testing opportunities and launch announcements. We’re excited to bring
                    the changing room to you – wherever you are.
                </p>
            </GenericPageSection>
        </div>
    );
}