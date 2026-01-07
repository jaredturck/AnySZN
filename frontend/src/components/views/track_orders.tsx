import banner1 from "../../imgs/banners/track_my_order.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

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

                <div className="mt-7 text-[var(--soft-black)]">
                    <div className="mb-6 grid grid-cols-1 gap-4 min-[820px]:grid-cols-3 min-[820px]:gap-6">
                        {/* Royal Mail */}
                        <section className="relative flex flex-col gap-2 overflow-hidden rounded-[1.15rem] border border-[rgba(26,26,26,0.12)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.62))] px-[1.4rem] pb-6 pt-[1.35rem] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0)_70%)] after:opacity-75">
                            <h2 className="relative z-[1] m-0 mb-1 text-[1.1rem] font-extrabold tracking-[0.02em] text-[rgba(26,26,26,0.95)]">
                                Royal Mail
                            </h2>
                            <p className="relative z-[1] m-0">
                                Use this option if your dispatch email shows{" "}
                                <strong>Royal Mail</strong> as the courier.
                            </p>
                            <p className="relative z-[1] m-0 text-[0.9rem] leading-relaxed text-[rgba(26,26,26,0.70)]">
                                Typical format: a mix of letters and numbers, e.g.{" "}
                                <em>AA123456789GB</em>.
                            </p>
                            <a
                                href="https://www.royalmail.com/track-your-item"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-[1] mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[rgba(26,26,26,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.70)_100%)] px-[1.15rem] py-[0.65rem] text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.92)] shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.55)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(189,255,0,0.9)] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_20%_20%,rgba(189,255,0,0.18),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_35%,rgba(255,255,255,0)_70%)] before:opacity-75"
                            >
                                Track with Royal Mail
                            </a>
                        </section>

                        {/* DHL */}
                        <section className="relative flex flex-col gap-2 overflow-hidden rounded-[1.15rem] border border-[rgba(189,255,0,0.30)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.62))] px-[1.4rem] pb-6 pt-[1.35rem] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0)_70%)] after:opacity-75">
                            <h2 className="relative z-[1] m-0 mb-1 text-[1.1rem] font-extrabold tracking-[0.02em] text-[rgba(26,26,26,0.95)]">
                                DHL
                            </h2>
                            <p className="relative z-[1] m-0">
                                Choose this if your confirmation shows{" "}
                                <strong>DHL</strong> as the delivery partner.
                            </p>
                            <p className="relative z-[1] m-0 text-[0.9rem] leading-relaxed text-[rgba(26,26,26,0.70)]">
                                Typical format: 10+ digits, or starting with{" "}
                                <em>JD</em> followed by numbers.
                            </p>
                            <a
                                href="https://www.dhl.com/track"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-[1] mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[rgba(26,26,26,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.70)_100%)] px-[1.15rem] py-[0.65rem] text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.92)] shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.55)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(189,255,0,0.9)] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_20%_20%,rgba(189,255,0,0.18),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_35%,rgba(255,255,255,0)_70%)] before:opacity-75"
                            >
                                Track with DHL
                            </a>
                        </section>

                        {/* FedEx */}
                        <section className="relative flex flex-col gap-2 overflow-hidden rounded-[1.15rem] border border-[rgba(26,26,26,0.12)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.62))] px-[1.4rem] pb-6 pt-[1.35rem] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0)_70%)] after:opacity-75">
                            <h2 className="relative z-[1] m-0 mb-1 text-[1.1rem] font-extrabold tracking-[0.02em] text-[rgba(26,26,26,0.95)]">
                                FedEx
                            </h2>
                            <p className="relative z-[1] m-0">
                                Select this option if your order was shipped with{" "}
                                <strong>FedEx</strong>.
                            </p>
                            <p className="relative z-[1] m-0 text-[0.9rem] leading-relaxed text-[rgba(26,26,26,0.70)]">
                                Typical format: a 12–14 digit numeric code.
                            </p>
                            <a
                                href="https://www.fedex.com/fedextrack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-[1] mt-4 inline-flex w-fit items-center justify-center rounded-full border border-[rgba(26,26,26,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.70)_100%)] px-[1.15rem] py-[0.65rem] text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.92)] shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.55)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(189,255,0,0.9)] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_20%_20%,rgba(189,255,0,0.18),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_35%,rgba(255,255,255,0)_70%)] before:opacity-75"
                            >
                                Track with FedEx
                            </a>
                        </section>
                    </div>

                    <p className="m-0 text-[0.92rem] leading-[1.7] text-[rgba(26,26,26,0.70)]">
                        Can&apos;t see which courier was used? Check your shipping
                        confirmation email from AnyHJS – it includes the courier name
                        and tracking number for your parcel.
                    </p>
                </div>
            </GenericPageSection>
        </div>
    );
}
