import banner1 from "../../imgs/banners/exclusive_offers.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function ExclusiveOffers() {
    return (
        <div>
            <ClothingBanner
                title="Exclusive Offers & Rewards"
                subtitle="Loyalty perks, bulk order savings and community rewards"
                img_src={banner1}
            />

            <GenericPageSection
                label="Offers"
                title="Exclusive Offers & Rewards"
                subtitle="Learn how loyalty, bulk orders and community engagement can unlock extra savings at AnyHJS."
            >
                <h1>Exclusive Offers &amp; Rewards</h1>

                <p>
                    At AnyHJS, we believe loyal customers and active supporters deserve something extra.
                    Whether you’ve been with us from the beginning, are placing a big order, or help spread
                    the word on social media, our exclusive offers are designed to thank you with real
                    savings on the brands you love – from Nike and Adidas to hundreds of other labels.
                </p>

                <hr />

                <h2>How to Unlock Discounts</h2>

                <p>
                    We offer three main ways to earn special discounts and rewards:
                </p>

                <ul>
                    <li><strong>Loyalty Rewards</strong> – for customers who shop with us regularly.</li>
                    <li><strong>Bulk Order Savings</strong> – for big wardrobe refreshes and high-value orders.</li>
                    <li><strong>Social &amp; Influencer Perks</strong> – for helping us grow our community online.</li>
                </ul>

                <p>
                    The examples below are a guide to how our discounts work. Exact offers may vary over
                    time and by promotion, and the latest details will always be shown at checkout or in
                    your account area.
                </p>

                <hr />

                <h2>Loyalty Rewards – Thank You for Coming Back</h2>

                <p>
                    We love seeing familiar names. If you’ve been shopping with us consistently, we’ll
                    reward you with automatic discounts and surprise perks. Your Lifetime Spend and number
                    of orders help unlock higher tiers of rewards.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Loyalty Tier</th>
                            <th>Typical Criteria (Example)</th>
                            <th>Sample Benefits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Style Insider</td>
                            <td>3+ orders or £300+ spent in the last 12 months</td>
                            <td>Up to 5% off selected orders, early access to selected drops and sales.</td>
                        </tr>
                        <tr>
                            <td>Style VIP</td>
                            <td>8+ orders or £800+ spent in the last 12 months</td>
                            <td>Up to 10% off selected orders, priority access to new collections, occasional free shipping promos.</td>
                        </tr>
                        <tr>
                            <td>Style Elite</td>
                            <td>15+ orders or £1,500+ spent in the last 12 months</td>
                            <td>Up to 15% off selected orders, access to exclusive offers, special birthday/anniversary discounts.</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    You don’t need to do anything special to join – we track your eligible orders
                    automatically. When you qualify for a new tier or offer, you’ll see your discount
                    applied at checkout or receive a unique code via email.
                </p>

                <hr />

                <h2>Bulk Order Savings – Bigger Baskets, Bigger Benefits</h2>

                <p>
                    Refreshing your wardrobe or shopping for multiple people? We reward high-value orders
                    with extra savings, even if it’s your first time with us.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Order Value (Example)</th>
                            <th>Sample Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>£150+</td>
                            <td>Up to 5% off eligible items</td>
                        </tr>
                        <tr>
                            <td>£300+</td>
                            <td>Up to 10% off eligible items</td>
                        </tr>
                        <tr>
                            <td>£500+</td>
                            <td>Up to 15% off eligible items</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    These bulk discounts are perfect for seasonal hauls, team kits, family shopping or
                    complete outfit refreshes across multiple brands – all in one basket, one checkout.
                </p>

                <hr />

                <h2>Social &amp; Influencer Perks – Get Rewarded for Sharing</h2>

                <p>
                    AnyHJS is a social-first brand, and we’re grateful to everyone who helps spread the
                    word. If you share your AnyHJS outfits, review us publicly or introduce our platform to
                    your audience, we want to say thanks.
                </p>

                <ul>
                    <li>
                        <strong>Share &amp; Save:</strong> From time to time, we run campaigns where posting your AnyHJS fit and tagging us can unlock one-off discount codes.
                    </li>
                    <li>
                        <strong>Referral Rewards:</strong> Invite friends using your unique referral link. When they place their first order, they get a discount – and you receive a reward too.
                    </li>
                    <li>
                        <strong>Influencer Discounts:</strong> Creators with an established audience may qualify for higher-tier discount codes, affiliate commissions or collab opportunities.
                    </li>
                </ul>

                <p>
                    If you’re a content creator, influencer or brand interested in a deeper partnership,
                    please visit our <strong>Collaborations</strong> page or contact us via the “Press /
                    Media” or “Collaboration” options on our Contact page.
                </p>

                <hr />

                <h2>Staying Up to Date</h2>

                <p>
                    Our exclusive offers and reward levels may change over time as we add new brands,
                    features and campaigns. For the most accurate and up-to-date information, always check
                    your account area, your email inbox for AnyHJS updates, and the promotions shown at
                    checkout.
                </p>

                <p>
                    However you choose to shop – regularly, in bulk or as part of our social community –
                    we’re committed to making sure you feel valued and rewarded at AnyHJS.
                </p>
            </GenericPageSection>
        </div>
    );
}
