import hero_img from '../imgs/hero_images/slide1.png';

export function HeroSection() {
  return (
    <section className="group relative w-full overflow-hidden bg-[#0b0b0b] min-h-[clamp(30rem,65vh,48rem)]">
      <div aria-hidden="true" className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img src={hero_img} alt="" className="flex h-full min-w-[40%] object-cover object-top scale-[1.12] pt-[10rem] transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.14]" />
      </div>

      <div className="relative z-10 flex min-h-[inherit] w-full items-center justify-start px-6 py-[clamp(2.5rem,5vw,4rem)]">
        <div className="flex w-full max-w-[720px] flex-col gap-5">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-[0.6rem] text-white/90 [backdrop-filter:blur(10px)]">
            <span className="text-[0.9rem] font-bold leading-none tracking-[0.06em] text-[var(--accent-color)]">COMING SOON</span>
            <span aria-hidden="true" className="font-bold opacity-70">•</span>
            <span className="text-[0.9rem] font-bold leading-none tracking-[0.06em]">ANYHJS APP</span>
          </div>

          <h1 className="m-0 max-w-[18ch] text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[1.02] text-white [text-wrap:balance]">
            Reinvent your wardrobe in one tap.
          </h1>

          <p className="m-0 max-w-[46ch] text-[clamp(1rem,1.6vw,1.35rem)] leading-[1.5] text-white/80">
            Discover AI-curated outfits from 100+ brands. Build your look, compare prices, and shop it all in one place.
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            <button type="button" className="cursor-pointer rounded-[14px] border-0 bg-[var(--accent-color)] px-5 py-[0.95rem] text-[1.05rem] font-extrabold leading-none text-[#0b0b0b] shadow-[0_10px_30px_rgba(199,255,26,0.15)] transition-[transform,box-shadow,background,border-color] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(199,255,26,0.22)] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(199,255,26,0.9)]">
              Join the waitlist
            </button>

            <button type="button" className="cursor-pointer rounded-[14px] border border-white/15 bg-black/35 px-5 py-[0.95rem] text-[1.05rem] font-extrabold leading-none text-white/90 transition-[transform,box-shadow,background,border-color] duration-200 ease-out hover:-translate-y-px hover:border-white/25 hover:bg-black/45 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(199,255,26,0.9)] [backdrop-filter:blur(10px)]">
              Preview the collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
