type ClothingBannerProps = {
  title: string;
  subtitle: string;
  img_src?: string;
};

export function ClothingBanner({ title, subtitle, img_src }: ClothingBannerProps) {
  return (
    <section className="flex items-center justify-center bg-black px-8 pb-8 pt-32">
      <div className="relative w-full max-h-[30rem] overflow-hidden rounded-[0.9375rem]">
        <img src={img_src} alt={title} className="block h-full w-full object-cover" />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="pointer-events-auto max-w-[90%] rounded-[1.25rem] border border-white/10 px-9 py-5 shadow-[0_14px_32px_rgba(0,0,0,0.45)] backdrop-blur-[6px] [-webkit-backdrop-filter:blur(6px)] [background:linear-gradient(120deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.32)_55%,rgba(189,255,0,0.16)_100%)]">
            <h2 className="m-0 text-[2rem] font-semibold tracking-[2px]">{title}</h2>
            <p className="mt-2 text-base opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
