import banner1 from "../../imgs/banners/shipping.avif";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Shipping() {
    return (
        <div>
            <ClothingBanner
                title="Shipping"
                subtitle="Delivery times, regions & charges"
                img_src={banner1}
            />

            <GenericPageSection
                label="Shipping"
                title="Shipping Information"
                subtitle="Find the latest details on how we ship your orders, estimated delivery times, and how delivery charges are applied."
            >
                <p>
                    On this page you can find the latest information about how we ship your
                    orders, including estimated delivery times and how delivery charges are
                    applied. Delivery times may vary depending on your location and other
                    external factors, but we aim to get your order to you as quickly as
                    possible.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th>Estimated Delivery Time</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United Kingdom</td>
                            <td>3–4 working days</td>
                            <td>
                                We aim to dispatch UK orders quickly so they arrive within
                                3–4 working days.
                            </td>
                        </tr>
                        <tr>
                            <td>Europe</td>
                            <td>Approximately 5 working days</td>
                            <td>
                                European orders typically arrive within around 5 working
                                days after dispatch.
                            </td>
                        </tr>
                        <tr>
                            <td>Rest of World</td>
                            <td>Approximately 7 working days</td>
                            <td>
                                International orders outside Europe usually arrive within
                                about 1 week.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Delivery charges are calculated and displayed at checkout as part of your
                    order total. The final shipping cost will depend on your delivery
                    address and the items in your cart.
                </p>
            </GenericPageSection>
        </div>
    );
}
