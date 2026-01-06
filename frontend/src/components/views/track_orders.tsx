import banner1 from "../../imgs/banners/track_my_order.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import '../../styles/track_order.scss';

export function TrackMyOrder() {
    return (
        <div>
            <ClothingBanner
                title="Track Your Order"
                subtitle="Use your courier tracking number to check your delivery status."
                img_src={banner1}
            />

            <GenericPageSection
                label="Orders"
                title="Track My Order"
                subtitle="We partner with several couriers. Use the tracking number from your dispatch email and choose the matching courier below."
            >
                <p>
                    Your shipping confirmation email from AnyHJS will show the{" "}
                    <strong>courier name</strong> (for example Royal Mail, DHL or FedEx) and
                    a <strong>tracking number</strong>. Select the correct courier below and
                    we’ll send you straight to their tracking page.
                </p>

                <div className="track-order">
                    <div className="track-order__grid">
                        {/* Royal Mail */}
                        <section className="track-order__card track-order__card--royalmail">
                            <h2 className="track-order__title">Royal Mail</h2>
                            <p>
                                Use this option if your dispatch email shows{" "}
                                <strong>Royal Mail</strong> as the courier.
                            </p>
                            <p className="track-order__hint">
                                Typical format: a mix of letters and numbers, e.g.{" "}
                                <em>AA123456789GB</em>.
                            </p>
                            <a
                                href="https://www.royalmail.com/track-your-item"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="track-order__cta"
                            >
                                Track with Royal Mail
                            </a>
                        </section>

                        {/* DHL */}
                        <section className="track-order__card track-order__card--dhl">
                            <h2 className="track-order__title">DHL</h2>
                            <p>
                                Choose this if your confirmation shows{" "}
                                <strong>DHL</strong> as the delivery partner.
                            </p>
                            <p className="track-order__hint">
                                Typical format: 10+ digits, or starting with{" "}
                                <em>JD</em> followed by numbers.
                            </p>
                            <a
                                href="https://www.dhl.com/track"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="track-order__cta"
                            >
                                Track with DHL
                            </a>
                        </section>

                        {/* FedEx */}
                        <section className="track-order__card track-order__card--fedex">
                            <h2 className="track-order__title">FedEx</h2>
                            <p>
                                Select this option if your order was shipped with{" "}
                                <strong>FedEx</strong>.
                            </p>
                            <p className="track-order__hint">
                                Typical format: a 12–14 digit numeric code.
                            </p>
                            <a
                                href="https://www.fedex.com/fedextrack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="track-order__cta"
                            >
                                Track with FedEx
                            </a>
                        </section>
                    </div>

                    <p className="track-order__footer">
                        Can&apos;t see which courier was used? Check your shipping
                        confirmation email from AnyHJS – it includes the courier name
                        and tracking number for your parcel.
                    </p>
                </div>
            </GenericPageSection>
        </div>
    );
}
