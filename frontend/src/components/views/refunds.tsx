import banner1 from "../../imgs/banners/refund.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Refunds() {
    return (
        <div>
            <ClothingBanner
                title="Returns & Refunds"
                subtitle="How to return items and receive your refund"
                img_src={banner1}
            />

            <GenericPageSection
                label="Returns & Refunds"
                title="Our Returns & Refunds Policy"
                subtitle="Find out when you can return items, what condition they need to be in, and how we process your refund or store credit."
            >
                <p>
                    You can return most items within 30 days of receiving your order for a
                    refund or store credit, as long as they are in their original condition.
                    This means the clothing must be unworn, unwashed, with all original tags
                    and packaging still attached, and free from any signs of wear, makeup,
                    fragrance, or damage. Items marked as final sale or non-returnable, as
                    well as certain hygiene-sensitive items (such as underwear or swimwear),
                    may not be eligible for return.
                </p>

                <p>
                    To start a return, simply contact our customer support team or follow the
                    instructions on our Returns page, and we’ll guide you through the process.
                    Once your return is received and approved, we’ll issue your refund back to
                    your original payment method or as store credit, depending on your
                    preference and our policy. Store credit can be used to shop any item on
                    our website, making it easy to find something you love.
                </p>
            </GenericPageSection>
        </div>
    );
}
