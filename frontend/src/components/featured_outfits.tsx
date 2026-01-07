import outfit_img1 from '../imgs/featured_outfits/outfit_1.png';
import outfit_img2 from '../imgs/featured_outfits/outfit_2.png';
import outfit_img3 from '../imgs/featured_outfits/outfit_3.png';
import outfit_img4 from '../imgs/featured_outfits/outfit_4.png';

export function FeaturedOutfits() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream-white)] py-[clamp(2.5rem,5vw,4rem)] text-[var(--soft-black)]">
      <div className="relative z-10 mb-[clamp(1.5rem,3vw,2.25rem)] px-[clamp(1.25rem,4vw,3rem)] text-center">
        <h2 className="m-0 mb-2 text-[clamp(1.6rem,3vw,2.25rem)] uppercase leading-[1.05] tracking-[0.12em]">ANYHJS LOOKS GOOD ON YOU</h2>
        <p className="m-0 text-[0.95rem] opacity-80">Tag @anyhjs to be featured</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[var(--max-page-width)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="grid grid-cols-4 gap-[clamp(0.75rem,2vw,1.25rem)] rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-white/65 p-[clamp(0.75rem,2vw,1rem)] shadow-[0_14px_34px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] max-md:grid-cols-2 max-[480px]:grid-cols-1">
          <div className="group overflow-hidden rounded-2xl border border-[rgba(26,26,26,0.10)] bg-black/[0.04] shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_4px_14px_rgba(0,0,0,0.06)] focus-within:border-[rgb(var(--accent-rgb)/0.75)] focus-within:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.22)]">
            <img src={outfit_img1} alt="Outfit 1" className="block aspect-square h-full w-full object-cover transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.03]" />
          </div>

          <div className="group overflow-hidden rounded-2xl border border-[rgba(26,26,26,0.10)] bg-black/[0.04] shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_4px_14px_rgba(0,0,0,0.06)] focus-within:border-[rgb(var(--accent-rgb)/0.75)] focus-within:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.22)]">
            <img src={outfit_img2} alt="Outfit 2" className="block aspect-square h-full w-full object-cover transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.03]" />
          </div>

          <div className="group overflow-hidden rounded-2xl border border-[rgba(26,26,26,0.10)] bg-black/[0.04] shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_4px_14px_rgba(0,0,0,0.06)] focus-within:border-[rgb(var(--accent-rgb)/0.75)] focus-within:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.22)]">
            <img src={outfit_img3} alt="Outfit 3" className="block aspect-square h-full w-full object-cover transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.03]" />
          </div>

          <div className="group overflow-hidden rounded-2xl border border-[rgba(26,26,26,0.10)] bg-black/[0.04] shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_4px_14px_rgba(0,0,0,0.06)] focus-within:border-[rgb(var(--accent-rgb)/0.75)] focus-within:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.22)]">
            <img src={outfit_img4} alt="Outfit 4" className="block aspect-square h-full w-full object-cover transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.03]" />
          </div>
        </div>

        <button type="button" aria-label="Previous" className="absolute left-[clamp(1.25rem,3vw,2.25rem)] top-1/2 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(26,26,26,0.12)] bg-white/80 text-[var(--soft-black)] shadow-[0_12px_28px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out hover:scale-[1.06] hover:border-[rgb(var(--accent-rgb)/0.65)] hover:bg-[rgb(var(--accent-rgb)/0.88)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.16),0_6px_14px_rgba(0,0,0,0.08)] active:scale-[1.02] active:shadow-[0_12px_28px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] max-[480px]:hidden md:flex">
          &#10094;
        </button>

        <button type="button" aria-label="Next" className="absolute right-[clamp(1.25rem,3vw,2.25rem)] top-1/2 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(26,26,26,0.12)] bg-white/80 text-[var(--soft-black)] shadow-[0_12px_28px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out hover:scale-[1.06] hover:border-[rgb(var(--accent-rgb)/0.65)] hover:bg-[rgb(var(--accent-rgb)/0.88)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.16),0_6px_14px_rgba(0,0,0,0.08)] active:scale-[1.02] active:shadow-[0_12px_28px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)] max-[480px]:hidden md:flex">
          &#10095;
        </button>
      </div>
    </section>
  );
}
