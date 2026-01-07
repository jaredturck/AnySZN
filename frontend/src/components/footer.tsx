import { Link } from 'react-router-dom';

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
    <footer className="relative flex flex-col overflow-hidden text-[var(--soft-black)] [background:linear-gradient(180deg,rgba(26,26,26,0.02)_0%,rgba(26,26,26,0.06)_100%),var(--cream-white)] before:pointer-events-none before:absolute before:left-[-9rem] before:top-[-9rem] before:h-[22rem] before:w-[22rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.12)] before:blur-[18px] before:content-[''] after:pointer-events-none after:absolute after:bottom-[-10rem] after:right-[-10rem] after:h-[26rem] after:w-[26rem] after:rounded-full after:bg-[rgb(var(--accent-rgb)/0.08)] after:blur-[20px] after:content-['']">
      <div className="relative z-10 flex flex-col gap-[clamp(2.25rem,4vw,3rem)] border-t border-[rgba(26,26,26,0.10)] [background:linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.35)_100%)] pb-[clamp(2.5rem,4vw,3.25rem)] pt-[clamp(3rem,5vw,4rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <section className="mx-auto w-full max-w-[var(--max-page-width)] text-center">
          <h2 className="m-0 text-[clamp(1.6rem,3vw,2.25rem)] font-medium uppercase leading-[1.05] tracking-[0.14em]">JOIN MILLIONS OF ANYHJS MEMBERS ON SOCIAL</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-[0.9rem]">
            <Link to="https://www.instagram.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_instagram} alt="Instagram" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://www.tiktok.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_tiktok} alt="TikTok" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_youtube} alt="YouTube" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://www.pinterest.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_pinterest} alt="Pinterest" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://twitter.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_twitter} alt="Twitter" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://discord.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_discord} alt="Discord" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
            <Link to="https://www.snapchat.com/" target="_blank" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_10px_22px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-[rgb(var(--accent-rgb)/0.22)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
              <img src={social_link_snapchat} alt="Snapchat" className="h-[1.45rem] w-[1.45rem] object-contain opacity-95 transition-[transform,opacity] duration-200 ease-out hover:scale-[1.06] hover:opacity-100" />
            </Link>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[var(--max-page-width)] grid-cols-[1fr_1fr_1fr_2fr] items-start gap-[clamp(1.5rem,3vw,2.5rem)] border-t border-[rgba(26,26,26,0.08)] pt-[clamp(1.5rem,3vw,2rem)] text-[0.92rem] max-md:grid-cols-2 max-[600px]:grid-cols-1">
          <div className="flex min-w-0 flex-col gap-[0.6rem]">
            <h3 className="m-0 mb-1 text-[0.95rem] font-extrabold uppercase tracking-[0.04em] opacity-95">Company</h3>
            <Link to="/about-us" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              About us
            </Link>
            <Link to="/gift-card" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Gift Card
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-[0.6rem]">
            <h3 className="m-0 mb-1 text-[0.95rem] font-extrabold uppercase tracking-[0.04em] opacity-95">Help</h3>
            <Link to="/support-centre" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Support Centre
            </Link>
            <Link to="/shipping" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Shipping &amp; Delivery
            </Link>
            <Link to="/refunds" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Returns &amp; Refunds
            </Link>
            <Link to="/track-orders" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Track My Order
            </Link>
            <Link to="/payment-methods" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Payment Method
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-[0.6rem]">
            <h3 className="m-0 mb-1 text-[0.95rem] font-extrabold uppercase tracking-[0.04em] opacity-95">Contact us</h3>
            <Link to="/contact" className="relative w-fit text-[rgba(26,26,26,0.85)] no-underline transition-[color,transform] duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:-translate-y-px hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
              Contact us
            </Link>
          </div>

          <div className="flex min-w-0 flex-col gap-[1.1rem] max-md:col-span-2 max-[600px]:col-span-1">
            <h3 className="m-0 mb-1 text-[0.95rem] font-extrabold uppercase tracking-[0.04em] opacity-95">Download the ANYHJS app and unlock:</h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-7">
              <ul className="m-0 flex list-none flex-col gap-[0.45rem] p-0">
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/exclusive-offers" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    Exclusive offers
                  </Link>
                </li>
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/checkout" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    Faster checkout
                  </Link>
                </li>
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/vr-wardrobe" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    VR wardrobe
                  </Link>
                </li>
              </ul>

              <ul className="m-0 flex list-none flex-col gap-[0.45rem] p-0">
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/ai-stylist" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    AI stylist
                  </Link>
                </li>
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/vr-changing-room" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    VR changing room
                  </Link>
                </li>
                <li className="text-[rgba(26,26,26,0.85)] before:mr-[0.55rem] before:inline-block before:h-[0.35rem] before:w-[0.35rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.9)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.16)] before:content-[''] before:translate-y-[-1px]">
                  <Link to="/engage-with-followers" className="relative w-fit text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">
                    Engage with followers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-1 flex flex-wrap gap-[0.65rem]">
              <Link to="https://www.apple.com/uk/app-store/" target="_blank" className="inline-flex">
                <button type="button" className="inline-flex cursor-pointer items-center gap-[0.6rem] rounded-full border border-[rgba(26,26,26,0.12)] bg-black/90 px-[1.05rem] py-[0.65rem] text-white shadow-[0_12px_26px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-black/95 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22),0_6px_16px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
                  <span className="inline-flex items-center justify-center"><img src={apple_store_icon} alt="Apple App Store" className="h-[1.05rem] w-[1.05rem] object-contain brightness-110" /></span>
                  <span className="whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.10em]">App Store</span>
                </button>
              </Link>

              <Link to="https://play.google.com/store/" target="_blank" className="inline-flex">
                <button type="button" className="inline-flex cursor-pointer items-center gap-[0.6rem] rounded-full border border-[rgba(26,26,26,0.12)] bg-black/90 px-[1.05rem] py-[0.65rem] text-white shadow-[0_12px_26px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:bg-black/95 hover:shadow-[0_18px_40px_rgba(0,0,0,0.22),0_6px_16px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_12px_26px_rgba(0,0,0,0.16),0_2px_10px_rgba(0,0,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
                  <span className="inline-flex items-center justify-center"><img src={google_play_icon} alt="Google Play Store" className="h-[1.05rem] w-[1.05rem] object-contain brightness-110" /></span>
                  <span className="whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.10em]">Google Play Store</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[var(--max-page-width)] flex-col items-center gap-5 border-t border-[rgba(26,26,26,0.08)] pt-[clamp(1.5rem,3vw,2rem)] text-center">
          <h2 className="m-0 text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold uppercase leading-[1.1] tracking-[0.12em]">Join Us for exclusive access and more!</h2>

          <form className="flex w-full max-w-[38rem] flex-col gap-4">
            <div className="flex overflow-hidden rounded-full border border-[rgba(26,26,26,0.12)] bg-white/70 shadow-[0_12px_26px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[box-shadow,border-color] duration-200 ease-out focus-within:border-[rgb(var(--accent-rgb)/0.65)] focus-within:shadow-[0_18px_40px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.18)]">
              <input type="email" placeholder="Enter your Email" className="flex-1 border-0 bg-transparent px-4 py-[0.85rem] text-[0.95rem] text-[var(--soft-black)] outline-none placeholder:text-[rgba(26,26,26,0.45)]" />
              <button type="button" className="inline-flex items-center justify-center bg-black/95 px-[1.4rem] text-white transition-[background-color,transform] duration-200 ease-out hover:bg-black active:translate-y-px">
                <Link to="/register" className="inline-flex h-full items-center justify-center text-[0.9rem] font-extrabold uppercase tracking-[0.14em] text-white no-underline">REGISTER</Link>
              </button>
            </div>

            <label className="flex items-center gap-2 text-left text-[0.82rem] text-[rgba(26,26,26,0.80)]">
              <input type="checkbox" className="m-0 h-4 w-4 cursor-pointer accent-[var(--accent-color)]" />
              <span>
                I accept the{' '}
                <Link to="/terms-and-conditions" className="text-[var(--soft-black)] underline underline-offset-[0.15rem] transition-colors duration-200 ease-out hover:text-[rgba(26,26,26,0.75)]">Terms &amp; Conditions</Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-[var(--soft-black)] underline underline-offset-[0.15rem] transition-colors duration-200 ease-out hover:text-[rgba(26,26,26,0.75)]">Privacy Policy</Link>.
              </span>
            </label>
          </form>
        </section>

        <section className="mx-auto flex w-full max-w-[var(--max-page-width)] flex-col items-center gap-5 border-t border-[rgba(26,26,26,0.08)] pt-[clamp(1.5rem,3vw,2rem)]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_0} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_1} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_2} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_3} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_4} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_5} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_6} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_7} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_8} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_9} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_10} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_11} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_12} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
            <Link to="/payment-methods" className="inline-flex items-center justify-center rounded-[0.85rem] border border-[rgba(26,26,26,0.10)] bg-white/55 px-[0.65rem] py-[0.45rem] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.45)]"><img src={payment_link_13} alt="" className="block h-[1.6rem] object-contain opacity-90" /></Link>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-[0.82rem] text-[rgba(26,26,26,0.80)]">
            <Link to="/cookie-policy" className="relative cursor-pointer text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">ANYHJS Cookie Policy</Link>
            <Link to="/privacy-policy" className="relative cursor-pointer text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="relative cursor-pointer text-inherit no-underline transition-colors duration-200 ease-out after:absolute after:left-0 after:bottom-[-0.15rem] after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 after:content-[''] hover:text-[var(--soft-black)] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] focus-visible:rounded">Terms Of Service</Link>
          </div>
        </section>
      </div>

      <div className="relative bg-black/95 px-4 py-5 text-center text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/90 before:absolute before:left-0 before:right-0 before:top-0 before:h-[2px] before:bg-[rgb(var(--accent-rgb)/0.85)] before:content-['']">
        © 2024 ANYHJS All Rights Reserved
      </div>
    </footer>
  );
}
