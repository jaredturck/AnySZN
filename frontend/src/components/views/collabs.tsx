import banner1 from "../../imgs/banners/collabs.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Collabs() {
    return (
        <div>
            <ClothingBanner
                title="Collaborate with AnySzn"
                subtitle="Partner, create and sell with our multi-brand fashion platform"
                img_src={banner1}
            />

            <GenericPageSection
                label="Collaboration"
                title="Collaborate with AnySzn"
                subtitle="Information for influencers, brands, designers and sellers who want to work with us."
            >
                <h1>Collaborate with AnySzn</h1>

                <p>
                    At AnySzn, we’re building more than a store – we’re creating a connected fashion
                    ecosystem. From global brands like Nike and Adidas to emerging designers, fashion
                    students and independent resellers, our goal is to bring the entire style community
                    together in one place. If you’re interested in collaborating, advertising or selling
                    through our platform, this page is for you.
                </p>

                <hr />

                <h2>For Influencers &amp; Creators</h2>

                <p>
                    Are you a fashion creator, stylist or content producer with an engaged audience on
                    Instagram, TikTok, YouTube or other platforms? We’d love to work with you. As a
                    multi-brand hub, AnySzn gives you a single place to showcase complete outfits from
                    hundreds of labels, making it easy for your followers to shop your looks in just a few
                    clicks.
                </p>

                <p>
                    We offer flexible collaboration opportunities, including sponsored content, featured
                    collections, outfit edits, affiliate links and long-term ambassador partnerships.
                    Whether you’re just starting to grow your audience or already have a large following,
                    we’re open to hearing your ideas and building something that works for both sides.
                </p>

                <hr />

                <h2>For Designers, Brands &amp; Fashion Students</h2>

                <p>
                    If you’re a fashion designer, brand owner or fashion student with your own pieces to
                    showcase, AnySzn can help you connect with a wider audience. We already stock products
                    from hundreds of established brands, and we’re actively exploring ways to highlight
                    unique, independent talent alongside them.
                </p>

                <p>
                    From capsule collections to limited drops and co-branded campaigns, we’re interested in
                    creative collaborations that bring something fresh to our community. If you have a
                    collection, project or concept you’d like to launch, we can help with visibility,
                    logistics and a ready-made audience of style-conscious shoppers.
                </p>

                <hr />

                <h2>Marketplace: Sell Your Clothes Through AnySzn</h2>

                <p>
                    One of our major future features is the <strong>AnySzn Marketplace</strong> – a space
                    where anyone can list and sell clothing through our platform. Think of it as a
                    fashion-first marketplace where you can sell pre-loved items, custom pieces or small
                    batch designs, while we handle the heavy lifting.
                </p>

                <p>Our vision is simple:</p>

                <ul>
                    <li>You list your items on our site.</li>
                    <li>We handle the payments and order processing.</li>
                    <li>You ship the items, and we take a small commission on each sale.</li>
                </ul>

                <p>
                    This means you get access to the same audience that shops big brands like Nike and
                    Adidas on our platform, while enjoying streamlined logistics and secure payment
                    handling. The Marketplace feature is currently in development – watch this space for
                    launch details and seller onboarding information.
                </p>

                <hr />

                <h2>Collaboration Options at a Glance</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Collaboration Type</th>
                            <th>Who It’s For</th>
                            <th>What It Involves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Influencer Partnerships</td>
                            <td>Social media creators, stylists, fashion influencers</td>
                            <td>Sponsored outfits, affiliate links, featured edits, co-branded campaigns.</td>
                        </tr>
                        <tr>
                            <td>Designer &amp; Brand Collaborations</td>
                            <td>Established brands, emerging designers, fashion students</td>
                            <td>Capsule collections, limited drops, joint promotions and editorial features.</td>
                        </tr>
                        <tr>
                            <td>Marketplace Selling (Coming Soon)</td>
                            <td>Independent sellers, resellers, individuals with clothes to sell</td>
                            <td>
                                List items on AnySzn, we manage payments and logistics, you earn minus a small
                                commission.
                            </td>
                        </tr>
                        <tr>
                            <td>Advertising &amp; Media Campaigns</td>
                            <td>Brands, agencies, creative studios</td>
                            <td>
                                Display placements, sponsored sections, integrated content and social
                                amplification.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h2>How to Get in Touch</h2>

                <p>
                    If you’re interested in collaborating with AnySzn, we’d love to hear from you. There are
                    several ways to reach out:
                </p>

                <ul>
                    <li>
                        Use the contact form on our <strong>Contact</strong> page and select “Collaboration /
                        Partnership” from the subject options.
                    </li>
                    <li>
                        Send us an email with your proposal, media kit or portfolio (including links to your
                        social channels, if relevant).
                    </li>
                    <li>
                        Reach out via our social media platforms (Instagram, TikTok, YouTube, Pinterest,
                        Twitter/X, Discord, Snapchat) and let us know you’re interested in working together.
                    </li>
                </ul>

                <p>To help us review your enquiry quickly, please include:</p>

                <ul>
                    <li>A brief introduction about you or your brand.</li>
                    <li>
                        What kind of collaboration you’re interested in (influencer campaign, marketplace
                        selling, designer collab, etc.).
                    </li>
                    <li>Any relevant links (social media profiles, website, portfolio, lookbook).</li>
                </ul>

                <p>
                    We review collaboration requests regularly and will get back to you if we see a good fit
                    with our audience and roadmap. Even if your idea is experimental or early-stage, we’re
                    always open to creative conversations – especially when it pushes fashion and technology
                    forward.
                </p>

                <hr />

                <h2>Join the AnySzn Community</h2>

                <p>
                    AnySzn is built on the idea that fashion is better when it’s shared. Whether you’re
                    inspiring people with your outfits, designing your own collections, reselling pieces you
                    love, or planning a bigger campaign, our platform is here to help you reach more people
                    and make more impact.
                </p>

                <p>
                    Follow us on social media, explore our latest drops and stay tuned as we roll out the
                    Marketplace and other collaboration features. We’re excited to build the future of
                    fashion together – one collab at a time.
                </p>
            </GenericPageSection>
        </div>
    );
}
