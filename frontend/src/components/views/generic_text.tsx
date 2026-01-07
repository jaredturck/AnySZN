import React from "react";

type GenericPageSectionProps = {
  label?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function GenericPageSection({ label, title, subtitle, children }: GenericPageSectionProps) {
  return (
    <section className="flex justify-center bg-[radial-gradient(circle_at_12%_8%,rgba(189,255,0,0.10)_0%,transparent_42%),radial-gradient(circle_at_88%_18%,rgba(189,255,0,0.06)_0%,transparent_46%),linear-gradient(180deg,rgba(26,26,26,0.02)_0%,rgba(26,26,26,0.00)_55%),#FFF7EE] px-[clamp(1rem,3vw,1.75rem)] pb-[clamp(3.5rem,6vw,5rem)] pt-[clamp(2.5rem,4vw,3.5rem)] text-[#1A1A1A]">
      <div className="relative w-full max-w-[960px] overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.62)_100%)] px-[clamp(1.25rem,3.5vw,2.75rem)] py-[clamp(1.75rem,3.5vw,2.75rem)] shadow-[0_22px_60px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out before:pointer-events-none before:absolute before:inset-[-40%] before:opacity-95 before:content-[''] before:bg-[radial-gradient(circle_at_0%_0%,rgba(189,255,0,0.14),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(189,255,0,0.08),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(189,255,0,0.06),transparent_55%)] after:pointer-events-none after:absolute after:inset-0 after:opacity-80 after:content-[''] after:bg-[linear-gradient(135deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0.00)_70%)] hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_30px_74px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]">
        {(label || title || subtitle) && (
          <header className="relative z-10">
            {label && (
              <span className="mb-[0.9rem] inline-flex items-center gap-[0.6rem] rounded-full border border-[rgba(26,26,26,0.10)] bg-white/70 px-3 py-[0.35rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[rgba(26,26,26,0.72)] shadow-[0_10px_22px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)]">
                <span className="h-[10px] w-[10px] rounded-full bg-[var(--accent-color)] shadow-[0_0_0_4px_rgba(189,255,0,0.16)]" />
                {label}
              </span>
            )}

            {title && <h1 className="m-0 mb-3 text-[clamp(1.95rem,3.2vw,2.55rem)] leading-[1.08] tracking-[0.02em] text-transparent bg-[linear-gradient(135deg,rgba(26,26,26,0.96)_0%,rgba(26,26,26,0.70)_65%,rgba(26,26,26,0.96)_100%)] [background-clip:text] [-webkit-background-clip:text]">{title}</h1>}

            {subtitle && <p className="m-0 mb-7 max-w-[42rem] text-base leading-[1.6] text-[rgba(26,26,26,0.70)]">{subtitle}</p>}
          </header>
        )}

        <div className="relative z-10 text-[0.98rem] leading-[1.75] text-[rgba(26,26,26,0.84)] [&_p]:m-0 [&_p+_p]:mt-4 [&_h2]:m-0 [&_h2]:mb-[0.85rem] [&_h2]:mt-[2.25rem] [&_h2]:relative [&_h2]:pl-[0.85rem] [&_h2]:text-[1.35rem] [&_h2]:font-extrabold [&_h2]:tracking-[0.02em] [&_h2]:text-[rgba(26,26,26,0.95)] [&_h2:before]:content-[''] [&_h2:before]:absolute [&_h2:before]:left-0 [&_h2:before]:top-[0.2rem] [&_h2:before]:bottom-[0.2rem] [&_h2:before]:w-[3px] [&_h2:before]:rounded-full [&_h2:before]:bg-[var(--accent-color)] [&_h2:before]:shadow-[0_0_0_4px_rgba(189,255,0,0.14)] [&_h3]:m-0 [&_h3]:mb-3 [&_h3]:mt-[1.85rem] [&_h3]:inline-flex [&_h3]:items-center [&_h3]:gap-2 [&_h3]:text-[0.98rem] [&_h3]:font-extrabold [&_h3]:uppercase [&_h3]:tracking-[0.12em] [&_h3]:text-[rgba(26,26,26,0.88)] [&_h3:before]:content-[''] [&_h3:before]:h-[0.45rem] [&_h3:before]:w-[0.45rem] [&_h3:before]:rounded-full [&_h3:before]:bg-[var(--accent-color)] [&_h3:before]:shadow-[0_0_0_4px_rgba(189,255,0,0.14)] [&_ul]:my-[0.85rem] [&_ul]:mb-[1.1rem] [&_ul]:pl-[1.4rem] [&_ol]:my-[0.85rem] [&_ol]:mb-[1.1rem] [&_ol]:pl-[1.4rem] [&_li+_li]:mt-[0.45rem] [&_li]:text-[rgba(26,26,26,0.84)] [&_a]:relative [&_a]:font-semibold [&_a]:text-[rgba(26,26,26,0.92)] [&_a]:no-underline [&_a]:transition-[color,transform] [&_a]:duration-200 [&_a:after]:content-[''] [&_a:after]:absolute [&_a:after]:left-0 [&_a:after]:bottom-[-0.15rem] [&_a:after]:h-[2px] [&_a:after]:w-0 [&_a:after]:bg-[rgba(189,255,0,0.85)] [&_a:after]:transition-[width] [&_a:after]:duration-200 [&_a:hover]:text-[#1A1A1A] [&_a:hover:after]:w-full [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-[3px] [&_a:focus-visible]:outline-[rgba(189,255,0,0.9)] [&_a:focus-visible]:rounded [&_table]:my-7 [&_table]:w-full [&_table]:border-separate [&_table]:border-spacing-0 [&_table]:overflow-hidden [&_table]:rounded-[1rem] [&_table]:border [&_table]:border-[rgba(26,26,26,0.10)] [&_table]:bg-white/75 [&_table]:text-[0.92rem] [&_table]:shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] [&_thead]:bg-[rgba(26,26,26,0.04)] [&_th]:border-b [&_th]:border-[rgba(26,26,26,0.08)] [&_th]:px-[0.95rem] [&_th]:py-[0.85rem] [&_th]:text-left [&_th]:align-top [&_th]:text-[0.85rem] [&_th]:font-extrabold [&_th]:uppercase [&_th]:tracking-[0.10em] [&_th]:text-[rgba(26,26,26,0.80)] [&_td]:border-b [&_td]:border-[rgba(26,26,26,0.08)] [&_td]:px-[0.95rem] [&_td]:py-[0.85rem] [&_td]:text-left [&_td]:align-top [&_tbody_tr]:transition-[background-color,transform] [&_tbody_tr:nth-child(even)]:bg-[rgba(26,26,26,0.02)] [&_tbody_tr:hover]:bg-[rgba(189,255,0,0.10)] [&_tbody_tr:last-child_td]:border-b-0 [&_code]:rounded-[0.4rem] [&_code]:border [&_code]:border-[rgba(26,26,26,0.10)] [&_code]:bg-[rgba(26,26,26,0.06)] [&_code]:px-[0.35rem] [&_code]:py-[0.15rem] [&_code]:font-mono [&_code]:text-[0.92em] [&_code]:text-[rgba(26,26,26,0.92)] [&_hr]:my-8 [&_hr]:h-px [&_hr]:border-0 [&_hr]:bg-[rgba(26,26,26,0.10)]">
          {children}
        </div>
      </div>
    </section>
  );
}
