import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import filter_icon from '../imgs/icons/filter.png';

type FeaturedProductsItemProps = {
  imageSrc: string;
  description: string;
  price: string;
};

type FeaturedProductsProps = {
  main_title?: string;
  sub_title?: string;
  children: ReactNode;
  showFilterAndSort?: boolean;
};

export function FeaturedProductsItem({ imageSrc, description, price }: FeaturedProductsItemProps) {
  return (
    <Link to="/product" className="block no-underline">
      <article className="group flex flex-col rounded-2xl border border-[rgba(26,26,26,0.10)] bg-white/70 px-[1.1rem] pb-4 pt-[1.1rem] shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[0.3rem] hover:border-[rgb(var(--accent-rgb)/0.55)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] focus-within:border-[rgb(var(--accent-rgb)/0.75)] focus-within:shadow-[0_18px_42px_rgba(0,0,0,0.10),0_0_0_3px_rgb(var(--accent-rgb)/0.22)]">
        <div className="mb-[0.9rem]">
          <img src={imageSrc} alt={description} className="block aspect-square w-full rounded-[0.65rem] object-contain transition-transform duration-200 ease-out group-hover:scale-[1.04]" />
        </div>

        <p className="m-0 mb-2 text-[0.95rem] font-semibold leading-[1.25] tracking-[0.01em] text-[var(--soft-black)] [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
          {description}
        </p>

        <p className="m-0 text-[0.9rem] font-bold text-[rgba(26,26,26,0.85)] before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-[var(--accent-color)] before:shadow-[0_0_0_3px_rgb(var(--accent-rgb)/0.18)] before:content-[''] before:translate-y-[-1px]">
          {price}
        </p>
      </article>
    </Link>
  );
}

export function FeaturedProducts({ main_title, sub_title, children, showFilterAndSort = false }: FeaturedProductsProps) {
  const showTitle = !!(main_title?.trim() && sub_title?.trim());

  return (
    <section className="relative mx-auto my-8 flex max-w-[var(--max-page-width)] flex-col gap-[clamp(1.75rem,3vw,3rem)] overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.08)] bg-[var(--cream-white)] px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2.5rem,5vw,4rem)] text-[var(--soft-black)] shadow-[0_12px_34px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] before:pointer-events-none before:absolute before:right-[-6rem] before:top-[-6rem] before:h-[16rem] before:w-[16rem] before:rounded-full before:bg-[rgb(var(--accent-rgb)/0.18)] before:content-[''] max-[600px]:rounded-2xl">
      {showTitle && (
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="m-0 text-[clamp(2rem,3.5vw,2.75rem)] uppercase leading-[1.05] tracking-[0.14em] max-[600px]:tracking-[0.12em]">{main_title}</h2>
          <p className="m-0 max-w-[40rem] text-base opacity-80">{sub_title}</p>
        </div>
      )}

      {showFilterAndSort && (
        <div className="flex items-center justify-between rounded-[0.9rem] border border-[rgba(26,26,26,0.08)] bg-white/55 px-[0.85rem] py-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)] max-[600px]:gap-3 max-[600px]:px-[0.7rem] max-[600px]:py-[0.65rem]">
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,26,26,0.14)] bg-white/70 px-[0.95rem] py-[0.55rem] text-[0.9rem] font-semibold text-[var(--soft-black)] transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out hover:-translate-y-px hover:border-[rgb(var(--accent-rgb)/0.9)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-[0_6px_14px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgb(var(--accent-rgb)/0.9)]">
            <span className="normal-case">Filter</span>
            <img src={filter_icon} alt="Filter products" className="block h-[0.95rem] w-[0.95rem] opacity-85" />
          </button>

          <p className="m-0 rounded-full border border-dashed border-[rgba(26,26,26,0.18)] bg-white/55 px-[0.95rem] py-[0.55rem] text-[0.9rem] font-semibold text-[var(--soft-black)] opacity-90">
            Sort By
          </p>
        </div>
      )}

      <div className="grid items-stretch gap-[clamp(1rem,2vw,1.75rem)] [grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))] max-[600px]:[grid-template-columns:repeat(auto-fit,minmax(11.5rem,1fr))]">
        {children}
      </div>

      <div className="flex justify-end">
        <a href="#" className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/0.9)] bg-[rgb(var(--accent-rgb)/0.9)] px-4 py-[0.7rem] text-[0.9rem] font-bold text-[var(--soft-black)] no-underline shadow-[0_10px_22px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,filter] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_16px_34px_rgba(0,0,0,0.14)] hover:brightness-[0.98] active:translate-y-0 active:shadow-[0_10px_22px_rgba(0,0,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(26,26,26,0.6)]">
          View All
        </a>
      </div>
    </section>
  );
}
