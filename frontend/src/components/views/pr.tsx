import banner1 from "../../imgs/banners/pr.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function PR() {
    return (
        <div>
            <ClothingBanner
                title="Public Relations"
                subtitle="Press, media & interview enquiries"
                img_src={banner1}
            />

            <GenericPageSection
                label="Press"
                title="Public Relations"
                subtitle="Information for journalists, media outlets and partners who want to feature or speak with AnySzn."
            >
                <h1>Public Relations</h1>

                <p>
                    AnySzn is an AI-driven fashion platform bringing together hundreds of global brands and
                    independent creators into one connected shopping experience. From major names like Nike
                    and Adidas to emerging labels and resellers, we’re rethinking how people discover,
                    style and shop outfits online. Our focus on personalised recommendations, virtual try-on
                    technology and multi-brand convenience places us at the intersection of fashion,
                    technology and culture.
                </p>

                <p>
                    For press enquiries, media interviews, event invitations, product features or commentary
                    on fashion, e-commerce or AI in retail, our PR team would be happy to help. Please
                    contact us via our <strong>Contact</strong> page using the “Press / Media” option, or
                    email our media team directly with details of your publication, deadline and the nature
                    of your request. We can provide brand assets, spokesperson quotes, product information
                    and background on our technology and roadmap upon request.
                </p>
            </GenericPageSection>
        </div>
    );
}
