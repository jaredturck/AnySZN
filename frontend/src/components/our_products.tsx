import { Link } from 'react-router-dom';
import our_products_man from '../imgs/our_products/img_man.png';
import our_products_women from '../imgs/our_products/img_women.png';

export function OurProducts() {
  return (
    <section className="relative mx-auto my-8 max-w-[var(--max-page-width)] overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.08)] bg-[var(--cream-white)] px-[clamp(1.25rem,4vw,3rem)] py-[clamp(3rem,5vw,4.5rem)] text-[var(--soft-black)] shadow-[0_12px_34px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="relative z-10 mb-[clamp(1.75rem,3vw,2.5rem)] flex items-center justify-center text-center">
        <h2 className="m-0 text-[clamp(1.8rem,3vw,2.4rem)] font-medium uppercase leading-[1.05] tracking-[0.14em]">OUR PRODUCTS</h2>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[var(--max-page-width)] grid-cols-2 gap-[clamp(1rem,2.5vw,2rem)] max-[600px]:grid-cols-1">
        <article className="group relative min-h-[clamp(18rem,32vw,26rem)] overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[0.35rem] hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)]">
          <img src={our_products_man} alt="Men's products" className="block h-full w-full scale-[1.01] object-cover [filter:saturate(1.02)_contrast(1.02)] transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.06] group-hover:[filter:saturate(1.06)_contrast(1.04)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_38%,rgba(0,0,0,0.00)_70%)]" />

          <div className="absolute bottom-[clamp(1rem,2.5vw,1.5rem)] left-[clamp(1rem,2.5vw,1.5rem)] z-10 flex flex-col items-start gap-3">
            <h3 className="m-0 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold uppercase leading-[1.05] tracking-[0.18em] text-white/90 shadow-[0_10px_26px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.25)]">
              MEN
            </h3>
            <Link to="/mens-clothing" className="inline-flex">
              <button type="button" className="cursor-pointer rounded-full border border-white/65 bg-white/90 px-[1.6rem] py-[0.65rem] text-[0.85rem] font-bold uppercase leading-none tracking-[0.14em] text-[var(--soft-black)] shadow-[0_10px_22px_rgba(0,0,0,0.20),0_2px_8px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.92)] hover:bg-[rgb(var(--accent-rgb)/0.92)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.24),0_6px_14px_rgba(0,0,0,0.14)] active:translate-y-0 active:shadow-[0_10px_22px_rgba(0,0,0,0.20),0_2px_8px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
                PRODUCTS
              </button>
            </Link>
          </div>
        </article>

        <article className="group relative min-h-[clamp(18rem,32vw,26rem)] overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-white/55 shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[0.35rem] hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)]">
          <img src={our_products_women} alt="Women's products" className="block h-full w-full scale-[1.01] object-cover [filter:saturate(1.02)_contrast(1.02)] transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.06] group-hover:[filter:saturate(1.06)_contrast(1.04)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_38%,rgba(0,0,0,0.00)_70%)]" />

          <div className="absolute bottom-[clamp(1rem,2.5vw,1.5rem)] left-[clamp(1rem,2.5vw,1.5rem)] z-10 flex flex-col items-start gap-3">
            <h3 className="m-0 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold uppercase leading-[1.05] tracking-[0.18em] text-white/90 shadow-[0_10px_26px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.25)]">
              WOMEN
            </h3>
            <Link to="/womens-clothing" className="inline-flex">
              <button type="button" className="cursor-pointer rounded-full border border-white/65 bg-white/90 px-[1.6rem] py-[0.65rem] text-[0.85rem] font-bold uppercase leading-none tracking-[0.14em] text-[var(--soft-black)] shadow-[0_10px_22px_rgba(0,0,0,0.20),0_2px_8px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.92)] hover:bg-[rgb(var(--accent-rgb)/0.92)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.24),0_6px_14px_rgba(0,0,0,0.14)] active:translate-y-0 active:shadow-[0_10px_22px_rgba(0,0,0,0.20),0_2px_8px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
                PRODUCTS
              </button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
