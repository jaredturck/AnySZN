import { ClothingBanner } from "../clothing_banner";
import banner1 from "../../imgs/banners/gift_card.jpg";
import { GenericPageSection } from "./generic_text";

export function GiftCards() {
    return (
        <div>
            <ClothingBanner title="Gift Cards" subtitle="Get Latest Gift Cards" img_src={banner1} />
            <GenericPageSection label="Gift Cards" title="Give the gift of choice"
                subtitle="How our digital and physical gift cards work, and how to redeem them."
            >
                <p>
                    Give the gift of choice with our gift cards. Instead of guessing
                    their size, style, or favourite brand, you can simply load up a gift
                    card and let them explore thousands of clothing options from a huge
                    range of top brands—all in one place. Whether they’re into
                    streetwear, minimal basics, bold statement pieces or designer labels,
                    our gift cards can be used across the full selection available on
                    our store.
                </p>

                <p>
                    Using a gift card at checkout is simple and secure. Just add your
                    favourite pieces to your cart, choose “Gift Card” as your payment
                    method, enter the card details, and you’re done—no need for a credit
                    or debit card. It’s a flexible way to shop that works perfectly for
                    budget-conscious buyers, younger shoppers, or anyone who prefers not
                    to use traditional payment methods online.
                </p>

                <p>
                    Our gift cards make an ideal present for birthdays, holidays,
                    graduations, or any moment worth celebrating. Instead of another
                    generic voucher tied to a single brand, you’re giving access to an
                    entire wardrobe’s worth of possibilities from countless clothing
                    companies. It’s thoughtful, easy, and guaranteed to fit—because they
                    choose exactly what they love.
                </p>
            </GenericPageSection>
        </div>
    );
}