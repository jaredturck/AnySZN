import banner1 from "../../imgs/banners/payment.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function PaymentMethods() {
    return (
        <div>
            <ClothingBanner
                title="Payment Methods"
                subtitle="Simple, secure ways to pay for your order"
                img_src={banner1}
            />

            <GenericPageSection
                label="Payments"
                title="Payment Information"
                subtitle="Learn about the payment options we support and how your details are handled at checkout."
            >
                <h1>Payment Information</h1>

                <p>
                    Shopping with us is simple and secure. Because we bring hundreds of leading
                    brands together in one place, you can fill your basket with pieces from
                    different labels and check out in a single, streamlined payment. No more
                    jumping between multiple brand websites – just one easy checkout for all
                    your favourite styles.
                </p>

                <p>
                    We also offer a wide range of payment options, so you can pay in the way that
                    suits you best. From major debit and credit cards to digital wallets and
                    flexible “buy now, pay later” providers, our goal is to make checkout fast,
                    familiar and hassle-free. Your payment details are processed securely, and
                    you’ll see a full summary of your order and chosen payment method before you
                    confirm.
                </p>

                <h2>Accepted Payment Methods</h2>

                <p>
                    Below is a general overview of the payment methods we currently support.
                    Availability may vary by country and currency, and you’ll always see the
                    latest options displayed at checkout.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Payment Method</th>
                            <th>Type</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Visa, Mastercard, American Express, Discover, JCB, UnionPay
                            </td>
                            <td>Credit &amp; Debit Cards</td>
                            <td>
                                Pay quickly with all major card providers. Great for fast, secure
                                one-time payments.
                            </td>
                        </tr>
                        <tr>
                            <td>Diners Club</td>
                            <td>Credit Card</td>
                            <td>
                                Accepted on many international orders, subject to issuer and
                                region.
                            </td>
                        </tr>
                        <tr>
                            <td>PayPal</td>
                            <td>Digital Wallet</td>
                            <td>
                                Check out using your PayPal balance or linked cards without
                                sharing card details with us.
                            </td>
                        </tr>
                        <tr>
                            <td>Apple&nbsp;Pay &amp; Google&nbsp;Pay</td>
                            <td>Mobile Wallets</td>
                            <td>
                                Speedy checkout on supported devices using your stored cards and
                                biometric security.
                            </td>
                        </tr>
                        <tr>
                            <td>Shop&nbsp;Pay</td>
                            <td>Accelerated Checkout</td>
                            <td>
                                Save your details securely for even faster repeat purchases across
                                supported Shopify stores.
                            </td>
                        </tr>
                        <tr>
                            <td>Klarna &amp; Clearpay</td>
                            <td>Buy Now, Pay Later</td>
                            <td>
                                Split the cost of your order into instalments where available,
                                subject to approval and terms.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    You’ll see all available payment logos and options on the checkout page. If
                    your preferred provider is supported, simply select it at checkout and follow
                    the on-screen instructions to complete your purchase.
                </p>
            </GenericPageSection>
        </div>
    );
}
