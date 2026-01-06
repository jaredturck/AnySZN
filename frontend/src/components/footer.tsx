import '../styles/Footer.scss'
import {Link} from 'react-router-dom';

import social_link_instagram from '../imgs/social_icons/ri_instagram-fill.png';
import social_link_tiktok from '../imgs/social_icons/ic_baseline-tiktok.png';
import social_link_youtube from '../imgs/social_icons/mdi_youtube.png';
import social_link_pinterest from '../imgs/social_icons/jam_pinterest.png';
import social_link_twitter from '../imgs/social_icons/mdi_twitter.png';
import social_link_discord from '../imgs/social_icons/ic_baseline-discord.png';
import social_link_snapchat from '../imgs/social_icons/basil_snapchat-solid.png';

import payment_link_0 from '../imgs/payment_links/link0.png';
import payment_link_1 from '../imgs/payment_links/link1.png';
import payment_link_2 from '../imgs/payment_links/link2.png';
import payment_link_3 from '../imgs/payment_links/link3.png';
import payment_link_4 from '../imgs/payment_links/link4.png';
import payment_link_5 from '../imgs/payment_links/link5.png';
import payment_link_6 from '../imgs/payment_links/link6.png';
import payment_link_7 from '../imgs/payment_links/link7.png';
import payment_link_8 from '../imgs/payment_links/link8.png';
import payment_link_9 from '../imgs/payment_links/link9.png';
import payment_link_10 from '../imgs/payment_links/link10.png';
import payment_link_11 from '../imgs/payment_links/link11.png';
import payment_link_12 from '../imgs/payment_links/link12.png';
import payment_link_13 from '../imgs/payment_links/link13.png';

import apple_store_icon from '../imgs/ic_baseline-apple.png';
import google_play_icon from '../imgs/mage_playstore.png';

export function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__main">
                <section className="Footer__social">
                    <h2 className="Footer__social-title">
                        JOIN MILLIONS OF ANYHJS MEMBERS ON SOCIAL
                    </h2>
                    <div className="Footer__social-icons">
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_instagram} alt="Instagram" />
                        </Link>
                        <Link to="https://www.tiktok.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_tiktok} alt="TikTok" />
                        </Link>
                        <Link to="https://www.youtube.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_youtube} alt="YouTube" />
                        </Link>
                        <Link to="https://www.pinterest.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_pinterest} alt="Pinterest" />
                        </Link>
                        <Link to="https://twitter.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_twitter} alt="Twitter" />
                        </Link>
                        <Link to="https://discord.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_discord} alt="Discord" />
                        </Link>
                        <Link to="https://www.snapchat.com/" target="_blank">
                            <img className="Footer__social-icon" src={social_link_snapchat} alt="Snapchat" />
                        </Link>
                    </div>
                </section>
                <section className="Footer__links">
                    <div className="Footer__links-column Footer__links-column--company">
                        <h3 className="Footer__links-heading">Company</h3>
                        <Link className="Footer__links-item" to="/about-us">About us</Link>
                        {/* <Link className="Footer__links-item" to="/blog">Blog</Link> */}
                        <Link className="Footer__links-item" to="/gift-card">Gift Card</Link>
                    </div>
                    <div className="Footer__links-column Footer__links-column--help">
                        <h3 className="Footer__links-heading">Help</h3>
                        <Link className="Footer__links-item" to="/support-centre">Support Centre</Link>
                        <Link className="Footer__links-item" to="/shipping">Shipping &amp; Delivery</Link>
                        <Link className="Footer__links-item" to="/refunds">Returns &amp; Refunds</Link>
                        {/* <Link className="Footer__links-item" to="/sizing-guide">Sizing Guide</Link> */}
                        <Link className="Footer__links-item" to="/track-orders">Track My Order</Link>
                        <Link className="Footer__links-item" to="/payment-methods">Payment Method</Link>
                    </div>

                    <div className="Footer__links-column Footer__links-column--contact">
                        <h3 className="Footer__links-heading">Contact us</h3>
                        <Link className="Footer__links-item" to="/contact">Contact us</Link>
                        {/* <Link className="Footer__links-item" to="/collabs">Collabs</Link> */}
                        {/* <Link className="Footer__links-item" to="/pr">PR</Link> */}
                    </div>
                    <div className="Footer__links-column Footer__links-column--download">
                        <h3 className="Footer__links-heading">
                            Download the ANYHJS app and unlock:
                        </h3>
                        <div className="Footer__download-grid">
                            <ul className="Footer__download-list Footer__download-list--left">
                                <li className="Footer__download-item">
                                    <Link to="/exclusive-offers">Exclusive offers</Link>
                                </li>
                                <li className="Footer__download-item">
                                    <Link to="/checkout">Faster checkout</Link>
                                </li>
                                <li className="Footer__download-item">
                                    <Link to="/vr-wardrobe">VR wardrobe</Link>
                                </li>
                                {/* <li className="Footer__download-item">And more...</li> */}
                            </ul>
                            <ul className="Footer__download-list Footer__download-list--right">
                                <li className="Footer__download-item">
                                    <Link to="/ai-stylist">AI stylist</Link>
                                </li>
                                <li className="Footer__download-item">
                                    <Link to="/vr-changing-room">VR changing room</Link>
                                </li>
                                <li className="Footer__download-item">
                                    <Link to="/engage-with-followers">Engage with followers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Footer__download-buttons">
                            <Link to="https://www.apple.com/uk/app-store/" target="_blank">
                                <button className="Footer__store-button Footer__store-button--apple" type="button">
                                    <span className="Footer__store-icon">
                                        <img src={apple_store_icon} alt="Apple App Store" />
                                    </span>
                                    <span className="Footer__store-text">App Store</span>
                                </button>
                            </Link>
                            <Link to="https://play.google.com/store/" target="_blank">
                                <button className="Footer__store-button Footer__store-button--google" type="button">
                                    <span className="Footer__store-icon">
                                        <img src={google_play_icon} alt="Google Play Store" />
                                    </span>
                                    <span className="Footer__store-text">Google Play Store</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="Footer__join">
                    <h2 className="Footer__join-title">
                        Join Us for exclusive access and more!
                    </h2>
                    <form className="Footer__newsletter">
                        <div className="Footer__newsletter-field">
                            <input className="Footer__newsletter-input" type="email" placeholder="Enter your Email" />
                            <button className="Footer__newsletter-button" type="button">
                                <Link to="/register">REGISTER</Link>
                            </button>
                        </div>
                        <label className="Footer__newsletter-consent">
                            <input className="Footer__newsletter-checkbox" type="checkbox" />
                            <span>
                                I accept the{' '}
                                <Link to="/terms-and-conditions" className="Footer__newsletter-link">Terms &amp; Conditions{' '}</Link> 
                                and{' '}
                                <Link to="/privacy-policy" className="Footer__newsletter-link">Privacy Policy</Link>
                                .
                            </span>
                        </label>
                    </form>
                </section>
                <section className="Footer__payments">
                    <div className="Footer__payments-logos">
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_0} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_1} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_2} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_3} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_4} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_5} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_6} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_7} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_8} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_9} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_10} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_11} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_12} alt="" /></Link>
                        <Link to="/payment-methods"><img className="Footer__payments-logo" src={payment_link_13} alt="" /></Link>
                    </div>
                    <div className="Footer__payments-links">
                        <Link className="Footer__payments-link" to="/cookie-policy">ANYHJS Cookie Policy</Link>
                        <Link className="Footer__payments-link" to="/privacy-policy">Privacy Policy</Link>
                        <Link className="Footer__payments-link" to="/terms-and-conditions">Terms Of Service</Link>
                    </div>
                </section>
            </div>
            <div className="Footer__copyright">
                © 2024 ANYHJS All Rights Reserved
            </div>
        </footer>
    );
}
