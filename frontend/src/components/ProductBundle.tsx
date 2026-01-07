import React, { useMemo, useState } from "react";

export default function ProductBundle() {
  const topColors = useMemo(() => ([
    { id: "orange", hex: "#ff7a00" },
    { id: "red", hex: "#ff2d2d" },
    { id: "blue", hex: "#2a6bff" },
    { id: "teal", hex: "#16e0c2" }
  ]), []);

  const bottomColors = useMemo(() => ([
    { id: "grey", hex: "#d8d8d8" },
    { id: "yellow", hex: "#ffe34a" },
    { id: "green", hex: "#2bdc4f" }
  ]), []);

  const sizes = useMemo(() => (["S", "M", "L", "XL"]), []);

  const [qty, setQty] = useState(1);
  const [topColor, setTopColor] = useState("orange");
  const [bottomColor, setBottomColor] = useState("grey");
  const [topSize, setTopSize] = useState("M");
  const [bottomSize, setBottomSize] = useState("M");

  const decQty = () => setQty((v) => Math.max(1, v - 1));
  const incQty = () => setQty((v) => v + 1);

  return (
    <section className="grid gap-7 rounded-[18px] bg-[#0b0b0b] p-7 text-white [grid-template-columns:1.05fr_0.95fr]">
      <div className="grid min-h-[420px] gap-[18px] [grid-template-rows:1fr_1fr]">
        <div className="grid items-stretch gap-[18px] [grid-template-columns:92px_1fr]">
          <div aria-label="Jacket thumbnails" className="flex flex-col gap-[14px]">
            <button type="button" className="cursor-pointer rounded-[14px] bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              <div className="grid min-h-[98px] select-none place-items-center rounded-[14px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Jacket</div>
            </button>
            <button type="button" className="cursor-pointer rounded-[14px] bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              <div className="grid min-h-[98px] select-none place-items-center rounded-[14px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Jacket</div>
            </button>
          </div>

          <div className="overflow-hidden rounded-[18px]">
            <div className="grid min-h-[210px] w-full select-none place-items-center rounded-[18px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Jacket</div>
          </div>
        </div>

        <div className="grid items-stretch gap-[18px] [grid-template-columns:92px_1fr]">
          <div aria-label="Trouser thumbnails" className="flex flex-col gap-[14px]">
            <button type="button" className="cursor-pointer rounded-[14px] bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              <div className="grid min-h-[98px] select-none place-items-center rounded-[14px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Trouser</div>
            </button>
            <button type="button" className="cursor-pointer rounded-[14px] bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              <div className="grid min-h-[98px] select-none place-items-center rounded-[14px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Trouser</div>
            </button>
          </div>

          <div className="overflow-hidden rounded-[18px]">
            <div className="grid min-h-[210px] w-full select-none place-items-center rounded-[18px] bg-[#d2d2d2] font-bold tracking-[0.04em] text-black/55">Trouser</div>
          </div>
        </div>
      </div>

      <div className="grid pt-[6px] [grid-auto-rows:min-content] gap-y-4">
        <h1 className="m-0 text-[34px] font-extrabold uppercase leading-[1.05] tracking-[0.02em]">
          YELIRWORLD WINDCHEATER<br />&amp; TECH COMBAT TROUSER
        </h1>

        <div className="flex items-center justify-between gap-4">
          <div className="whitespace-nowrap text-[28px] font-extrabold tracking-[0.01em] text-[var(--accent-color)]">£178.00</div>

          <div role="group" aria-label="Quantity" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-[10px] py-[6px]">
            <button type="button" onClick={decQty} aria-label="Decrease quantity" className="h-[30px] w-[30px] cursor-pointer rounded-full bg-transparent text-lg leading-none text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              −
            </button>
            <div aria-live="polite" className="min-w-[22px] text-center font-bold opacity-95">
              {qty}
            </div>
            <button type="button" onClick={incQty} aria-label="Increase quantity" className="h-[30px] w-[30px] cursor-pointer rounded-full bg-transparent text-lg leading-none text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
              +
            </button>
          </div>
        </div>

        <div className="inline-flex items-center gap-[10px] font-bold text-[var(--accent-color)]">
          <span aria-hidden="true" className="grid h-[18px] w-[18px] place-items-center rounded-full border border-[rgba(189,255,0,0.28)] bg-[rgba(189,255,0,0.14)] text-xs">✓</span>
          <span>Available</span>
        </div>

        <div className="grid items-center gap-4 [grid-template-columns:120px_1fr]">
          <div className="whitespace-nowrap font-bold text-white/80">Top Colour</div>
          <div role="radiogroup" aria-label="Top colour" className="flex flex-wrap items-center gap-2">
            {topColors.map((c) => (
              <button
                key={c.id}
                type="button"
                style={{ backgroundColor: c.hex }}
                onClick={() => setTopColor(c.id)}
                role="radio"
                aria-checked={topColor === c.id}
                aria-label={c.id}
                className={[
                  "h-8 w-8 cursor-pointer rounded-full border border-white/20 p-0 transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]",
                  topColor === c.id ? "border-white/60 shadow-[0_0_0_2px_rgba(189,255,0,0.35)]" : ""
                ].join(" ").trim()}
              />
            ))}
          </div>
        </div>

        <div className="grid items-center gap-4 [grid-template-columns:120px_1fr]">
          <div className="whitespace-nowrap font-bold text-white/80">Bottom Colour</div>
          <div role="radiogroup" aria-label="Bottom colour" className="flex flex-wrap items-center gap-2">
            {bottomColors.map((c) => (
              <button
                key={c.id}
                type="button"
                style={{ backgroundColor: c.hex }}
                onClick={() => setBottomColor(c.id)}
                role="radio"
                aria-checked={bottomColor === c.id}
                aria-label={c.id}
                className={[
                  "h-8 w-8 cursor-pointer rounded-full border border-white/20 p-0 transition-transform hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]",
                  bottomColor === c.id ? "border-white/60 shadow-[0_0_0_2px_rgba(189,255,0,0.35)]" : ""
                ].join(" ").trim()}
              />
            ))}
          </div>
        </div>

        <div className="grid items-center gap-4 [grid-template-columns:120px_1fr_auto]">
          <div className="whitespace-nowrap font-bold text-white/80">Top Size</div>

          <div role="radiogroup" aria-label="Top size" className="flex flex-wrap items-center gap-[10px]">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTopSize(s)}
                role="radio"
                aria-checked={topSize === s}
                className={[
                  "h-10 w-10 cursor-pointer rounded-[10px] border border-white/10 bg-white/5 font-extrabold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]",
                  topSize === s ? "border-[rgba(189,255,0,0.9)] bg-[var(--accent-color)] text-[#0b0b0b]" : ""
                ].join(" ").trim()}
              >
                {s}
              </button>
            ))}
          </div>

          <a href="#" onClick={(e) => e.preventDefault()} className="whitespace-nowrap font-bold text-white/70 no-underline hover:text-white/85 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)] focus-visible:rounded-lg">
            Size Guide
          </a>
        </div>

        <div className="grid items-center gap-4 [grid-template-columns:120px_1fr_auto]">
          <div className="whitespace-nowrap font-bold text-white/80">Bottom Size</div>

          <div role="radiogroup" aria-label="Bottom size" className="flex flex-wrap items-center gap-[10px]">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setBottomSize(s)}
                role="radio"
                aria-checked={bottomSize === s}
                className={[
                  "h-10 w-10 cursor-pointer rounded-[10px] border border-white/10 bg-white/5 font-extrabold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]",
                  bottomSize === s ? "border-[rgba(189,255,0,0.9)] bg-[var(--accent-color)] text-[#0b0b0b]" : ""
                ].join(" ").trim()}
              >
                {s}
              </button>
            ))}
          </div>

          <a href="#" onClick={(e) => e.preventDefault()} className="whitespace-nowrap font-bold text-white/70 no-underline hover:text-white/85 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)] focus-visible:rounded-lg">
            Size Guide
          </a>
        </div>

        <div className="mt-0.5">
          <div className="mb-2 font-extrabold text-white/85">Description</div>
          <p className="m-0 max-w-[52ch] text-sm leading-[1.6] text-[#b9b9b9]">
            Lorem ipsum dolor sit amet consectetur. Pharetra ullamcorper ornare consequat sed. Sed magna arcu nunc pellentesque eget sit feugiat sed accumsan. Id viverra erat.
          </p>
        </div>

        <div className="mt-1.5 flex items-center gap-3">
          <button type="button" className="flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded-[12px] border border-transparent bg-[var(--accent-color)] px-[18px] font-black tracking-[0.01em] text-[#0b0b0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
            Add To Cart
          </button>
          <button type="button" className="flex h-[46px] flex-1 cursor-pointer items-center justify-center rounded-[12px] border border-transparent bg-[#e5ff9e] px-[18px] font-black tracking-[0.01em] text-[#0b0b0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
            Buy Now
          </button>
          <button type="button" aria-label="Add to wishlist" className="h-[46px] w-14 cursor-pointer rounded-[12px] border border-[rgba(189,255,0,0.55)] bg-transparent text-[var(--accent-color)] transition-colors hover:bg-[rgba(189,255,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--accent-color)]">
            <span aria-hidden="true" className="inline-block translate-y-px text-xl leading-none">♡</span>
          </button>
        </div>
      </div>
    </section>
  );
}
