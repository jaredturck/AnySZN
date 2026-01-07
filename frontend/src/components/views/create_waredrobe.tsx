import React, { useEffect, useMemo, useRef, useState } from "react";

import { ClothingBanner } from "../clothing_banner";
import { CircleLogo } from "../circle_logo";

import men_banner from "../../imgs/banners/pexels-ryan-holloway-71499-242829 1.png";
import women_banner from "../../imgs/banners/women_banner_1.png";

import mens_img1 from "../../imgs/featured_products/mens_collection/Frame 31.png";
import mens_img2 from "../../imgs/featured_products/mens_collection/Frame 31 (1).png";
import mens_img3 from "../../imgs/featured_products/mens_collection/Frame 31 (2).png";
import mens_img4 from "../../imgs/featured_products/mens_collection/Frame 31 (3).png";
import mens_img5 from "../../imgs/featured_products/mens_collection/Frame 31 (4).png";
import mens_img6 from "../../imgs/featured_products/mens_collection/Frame 31 (5).png";
import mens_img7 from "../../imgs/featured_products/mens_collection/Frame 31 (6).png";
import mens_img8 from "../../imgs/featured_products/mens_collection/Frame 31 (7).png";
import mens_img9 from "../../imgs/featured_products/mens_collection/Frame 31 (8).png";
import mens_img10 from "../../imgs/featured_products/mens_collection/Frame 31 (9).png";
import mens_img11 from "../../imgs/featured_products/mens_collection/Frame 31 (10).png";
import mens_img12 from "../../imgs/featured_products/mens_collection/Frame 31 (11).png";

import womens_img1 from "../../imgs/featured_products/womens_collection/product_8.png";
import womens_img2 from "../../imgs/featured_products/womens_collection/Frame 31.png";
import womens_img3 from "../../imgs/featured_products/womens_collection/Frame 31 (1).png";
import womens_img4 from "../../imgs/featured_products/womens_collection/Frame 31 (2).png";
import womens_img5 from "../../imgs/featured_products/womens_collection/Frame 31 (3).png";
import womens_img6 from "../../imgs/featured_products/womens_collection/Frame 31 (4).png";
import womens_img7 from "../../imgs/featured_products/womens_collection/Frame 31 (5).png";
import womens_img8 from "../../imgs/featured_products/womens_collection/Frame 31 (6).png";
import womens_img9 from "../../imgs/featured_products/womens_collection/Frame 31 (7).png";
import womens_img10 from "../../imgs/featured_products/womens_collection/Frame 31 (8).png";
import womens_img11 from "../../imgs/featured_products/womens_collection/Frame 31 (9).png";
import womens_img12 from "../../imgs/featured_products/womens_collection/Frame 31 (10).png";

type TCollection = "men" | "women";
type TSlot = "top" | "bottom";

type TFilters = {
  top: boolean;
  bottom: boolean;
};

type TFacetTab = "type" | "brand" | "colour";

type TCategory = {
  id: string;
  label: string;
  imageUrl: string;
};

type TSort = "recommended" | "newest" | "price_asc" | "price_desc";

type TProduct = {
  id: string;
  slot: TSlot;
  categoryId: string;

  name: string;
  brand: string;
  colour: string;
  price: number;

  imageUrl: string;

  createdAt: number;
  popularity: number;
  isAvailable: boolean;
};

type TChip = {
  id: string;
  label: string;
  imageUrl: string;
  value: string;
};

const MEN_TOP_CATEGORIES: TCategory[] = [
  { id: "men-top-cat-1", label: "Top", imageUrl: mens_img1 },
  { id: "men-top-cat-2", label: "Solitaria", imageUrl: mens_img2 },
  { id: "men-top-cat-3", label: "Hoodie", imageUrl: mens_img3 },
  { id: "men-top-cat-4", label: "Crewneck", imageUrl: mens_img4 },
  { id: "men-top-cat-5", label: "Graphic Tee", imageUrl: mens_img5 },
  { id: "men-top-cat-6", label: "Plain Tee", imageUrl: mens_img6 },
];

const MEN_BOTTOM_CATEGORIES: TCategory[] = [
  { id: "men-bottom-cat-1", label: "Shorts", imageUrl: mens_img7 },
  { id: "men-bottom-cat-2", label: "Sport Short", imageUrl: mens_img8 },
  { id: "men-bottom-cat-3", label: "Sweat Short", imageUrl: mens_img9 },
  { id: "men-bottom-cat-4", label: "Joggers", imageUrl: mens_img10 },
  { id: "men-bottom-cat-5", label: "Cargo", imageUrl: mens_img11 },
  { id: "men-bottom-cat-6", label: "Denim", imageUrl: mens_img12 },
];

const WOMEN_TOP_CATEGORIES: TCategory[] = [
  { id: "women-top-cat-1", label: "Top", imageUrl: womens_img1 },
  { id: "women-top-cat-2", label: "Solitaria", imageUrl: womens_img2 },
  { id: "women-top-cat-3", label: "Hoodie", imageUrl: womens_img3 },
  { id: "women-top-cat-4", label: "Crewneck", imageUrl: womens_img4 },
  { id: "women-top-cat-5", label: "Graphic Tee", imageUrl: womens_img5 },
  { id: "women-top-cat-6", label: "Plain Tee", imageUrl: womens_img6 },
];

const WOMEN_BOTTOM_CATEGORIES: TCategory[] = [
  { id: "women-bottom-cat-1", label: "Shorts", imageUrl: womens_img7 },
  { id: "women-bottom-cat-2", label: "Sport Short", imageUrl: womens_img8 },
  { id: "women-bottom-cat-3", label: "Sweat Short", imageUrl: womens_img9 },
  { id: "women-bottom-cat-4", label: "Joggers", imageUrl: womens_img10 },
  { id: "women-bottom-cat-5", label: "Cargo", imageUrl: womens_img11 },
  { id: "women-bottom-cat-6", label: "Denim", imageUrl: womens_img12 },
];

const MEN_IMAGES: string[] = [
  mens_img1,
  mens_img2,
  mens_img3,
  mens_img4,
  mens_img5,
  mens_img6,
  mens_img7,
  mens_img8,
  mens_img9,
  mens_img10,
  mens_img11,
  mens_img12,
];

const WOMEN_IMAGES: string[] = [
  womens_img1,
  womens_img2,
  womens_img3,
  womens_img4,
  womens_img5,
  womens_img6,
  womens_img7,
  womens_img8,
  womens_img9,
  womens_img10,
  womens_img11,
  womens_img12,
];

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.22)]";

function setUrlSearchParams(params: URLSearchParams): void {
  const qs = params.toString();
  const url = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", url);
}

function getParam(params: URLSearchParams, key: string): string | null {
  const v = params.get(key);
  return v && v.trim().length > 0 ? v : null;
}

function isFacetTab(v: string | null): v is TFacetTab {
  return v === "type" || v === "brand" || v === "colour";
}

function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

function normalizeSearch(value: string): string {
  const v = value.trim().toLowerCase();
  if (!v) return "";
  return v
    .replaceAll("tshirt", "t-shirt")
    .replaceAll("t shirt", "t-shirt")
    .replaceAll("tee", "t-shirt")
    .replaceAll("short", "shorts");
}

function buildMockProducts(args: {
  prefix: string;
  slot: TSlot;
  categories: TCategory[];
  images: string[];
}): TProduct[] {
  const brands: string[] = ["Nike", "Adidas", "Gap", "H&M", "Noisey", "Solitaria"];
  const colours: string[] = ["Black", "White", "Grey", "Blue", "Pink", "Orange", "Green"];
  const basePrices: number[] = [55, 72, 89, 110, 140, 165, 195, 225];

  const out: TProduct[] = [];

  for (let i = 0; i < 40; i += 1) {
    const category = args.categories[i % args.categories.length];
    const imageUrl = args.images[i % args.images.length];
    const brand = brands[i % brands.length];
    const colour = colours[i % colours.length];
    const price = basePrices[i % basePrices.length] + (i % 3) * 7;

    out.push({
      id: `${args.prefix}-${i + 1}`,
      slot: args.slot,
      categoryId: category.id,
      name: `${category.label} ${i + 1}`,
      brand,
      colour,
      price,
      imageUrl,
      createdAt: Date.now() - i * 1000 * 60 * 60 * 24,
      popularity: 1000 - i * 11,
      isAvailable: i % 9 !== 0,
    });
  }

  return out;
}

const MEN_TOP_PRODUCTS: TProduct[] = buildMockProducts({
  prefix: "men-top",
  slot: "top",
  categories: MEN_TOP_CATEGORIES,
  images: MEN_IMAGES,
});

const MEN_BOTTOM_PRODUCTS: TProduct[] = buildMockProducts({
  prefix: "men-bottom",
  slot: "bottom",
  categories: MEN_BOTTOM_CATEGORIES,
  images: MEN_IMAGES,
});

const WOMEN_TOP_PRODUCTS: TProduct[] = buildMockProducts({
  prefix: "women-top",
  slot: "top",
  categories: WOMEN_TOP_CATEGORIES,
  images: WOMEN_IMAGES,
});

const WOMEN_BOTTOM_PRODUCTS: TProduct[] = buildMockProducts({
  prefix: "women-bottom",
  slot: "bottom",
  categories: WOMEN_BOTTOM_CATEGORIES,
  images: WOMEN_IMAGES,
});

type TFacetTabsHeaderProps = {
  activeTab: TFacetTab;
  onTabChange: (tab: TFacetTab) => void;
  ariaLabel: string;
};

function FacetTabsHeader(props: TFacetTabsHeaderProps) {
  function tabClass(tab: TFacetTab): string {
    const active = props.activeTab === tab;
    return cn(
      "inline-flex items-center justify-center rounded-full px-3 py-2 text-[0.92rem] font-black tracking-[-0.01em] transition",
      "border border-transparent bg-transparent text-black",
      "hover:bg-black/5 hover:-translate-y-[1px] active:translate-y-0",
      focusRing,
      active && "bg-[rgba(189,255,0,0.22)] border-black/10 shadow-[0_0_0_4px_rgba(189,255,0,0.14)]"
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 rounded-full border border-black/5 bg-white/80 p-1",
        "shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]"
      )}
      role="tablist"
      aria-label={props.ariaLabel}
    >
      <button
        type="button"
        role="tab"
        aria-selected={props.activeTab === "type"}
        className={tabClass("type")}
        onClick={() => props.onTabChange("type")}
      >
        Type
      </button>

      <span className="px-1 text-black/35" aria-hidden="true">
        •
      </span>

      <button
        type="button"
        role="tab"
        aria-selected={props.activeTab === "brand"}
        className={tabClass("brand")}
        onClick={() => props.onTabChange("brand")}
      >
        Brand
      </button>

      <span className="px-1 text-black/35" aria-hidden="true">
        •
      </span>

      <button
        type="button"
        role="tab"
        aria-selected={props.activeTab === "colour"}
        className={tabClass("colour")}
        onClick={() => props.onTabChange("colour")}
      >
        Colour
      </button>
    </div>
  );
}

type TProductPanelProps = {
  title: string;
  activeFacetTab: TFacetTab;

  categories: TCategory[];
  products: TProduct[];

  selectedTypeId: string;
  onTypeChange: (categoryId: string) => void;

  selectedBrand: string; // "all" allowed
  onBrandChange: (brand: string) => void;

  selectedColour: string; // "all" allowed
  onColourChange: (colour: string) => void;

  selectedProductId: string;
  onSelectProduct: (productId: string) => void;

  searchValue: string;
  onSearchChange: (value: string) => void;

  sort: TSort;
  onSortChange: (sort: TSort) => void;
};

function ProductPanel(props: TProductPanelProps) {
  const ALL = "all";
  const PAGE_SIZE = 12;

  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const productsScrollRef = useRef<HTMLDivElement | null>(null);

  const normalizedSearch: string = useMemo(() => normalizeSearch(props.searchValue), [props.searchValue]);

  const allChipImage: string = useMemo(() => {
    return props.categories[0]?.imageUrl ?? props.products[0]?.imageUrl ?? "";
  }, [props.categories, props.products]);

  const brandChips: TChip[] = useMemo(() => {
    const brands: string[] = Array.from(new Set(props.products.map((p) => p.brand))).sort((a, b) =>
      a.localeCompare(b)
    );

    const out: TChip[] = [{ id: "brand-all", label: "All", imageUrl: allChipImage, value: ALL }];

    brands.forEach((b) => {
      const img = props.products.find((p) => p.brand === b)?.imageUrl ?? allChipImage;
      out.push({ id: `brand-${b}`, label: b, imageUrl: img, value: b });
    });

    return out;
  }, [props.products, allChipImage]);

  const colourChips: TChip[] = useMemo(() => {
    const colours: string[] = Array.from(new Set(props.products.map((p) => p.colour))).sort((a, b) =>
      a.localeCompare(b)
    );

    const out: TChip[] = [{ id: "colour-all", label: "All", imageUrl: allChipImage, value: ALL }];

    colours.forEach((c) => {
      const img = props.products.find((p) => p.colour === c)?.imageUrl ?? allChipImage;
      out.push({ id: `colour-${c}`, label: c, imageUrl: img, value: c });
    });

    return out;
  }, [props.products, allChipImage]);

  const facetChips: TChip[] = useMemo(() => {
    if (props.activeFacetTab === "brand") return brandChips;
    if (props.activeFacetTab === "colour") return colourChips;

    return props.categories.map((c) => ({
      id: c.id,
      label: c.label,
      imageUrl: c.imageUrl,
      value: c.id,
    }));
  }, [props.activeFacetTab, props.categories, brandChips, colourChips]);

  const filteredAndSorted: TProduct[] = useMemo(() => {
    let list: TProduct[] = props.products;

    if (props.selectedTypeId) {
      list = list.filter((p) => p.categoryId === props.selectedTypeId);
    }

    if (props.selectedBrand !== ALL) {
      list = list.filter((p) => p.brand === props.selectedBrand);
    }

    if (props.selectedColour !== ALL) {
      list = list.filter((p) => p.colour === props.selectedColour);
    }

    if (normalizedSearch) {
      const needle = normalizedSearch.toLowerCase();
      list = list.filter((p) => `${p.name} ${p.brand} ${p.colour}`.toLowerCase().includes(needle));
    }

    const sorted = [...list];

    if (props.sort === "newest") sorted.sort((a, b) => b.createdAt - a.createdAt);
    else if (props.sort === "price_asc") sorted.sort((a, b) => a.price - b.price);
    else if (props.sort === "price_desc") sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => b.popularity - a.popularity);

    return sorted;
  }, [
    props.products,
    props.selectedTypeId,
    props.selectedBrand,
    props.selectedColour,
    normalizedSearch,
    props.sort,
  ]);

  const visibleProducts: TProduct[] = useMemo(() => {
    return filteredAndSorted.slice(0, visibleCount);
  }, [filteredAndSorted, visibleCount]);

  const hasMore: boolean = visibleCount < filteredAndSorted.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [props.selectedTypeId, props.selectedBrand, props.selectedColour, normalizedSearch, props.sort]);

  useEffect(() => {
    const sentinelEl = sentinelRef.current;
    const rootEl = productsScrollRef.current;
    if (!sentinelEl || !rootEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first) return;
        if (first.isIntersecting && hasMore) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredAndSorted.length));
        }
      },
      { root: rootEl, rootMargin: "200px", threshold: 0 }
    );

    observer.observe(sentinelEl);
    return () => observer.disconnect();
  }, [hasMore, filteredAndSorted.length]);

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
    props.onSearchChange(e.target.value);
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    props.onSortChange(e.target.value as TSort);
  }

  function handleChipClick(value: string): void {
    if (props.activeFacetTab === "brand") return props.onBrandChange(value);
    if (props.activeFacetTab === "colour") return props.onColourChange(value);
    props.onTypeChange(value);
  }

  function isChipActive(value: string): boolean {
    if (props.activeFacetTab === "brand") return props.selectedBrand === value;
    if (props.activeFacetTab === "colour") return props.selectedColour === value;
    return props.selectedTypeId === value;
  }

  function handleLoadMoreClick(): void {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredAndSorted.length));
  }

  function handleToggleCategories(): void {
    setIsCategoriesOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Facet chips */}
      <div
        className={cn(
          "relative",
          "max-h-[20rem] overflow-y-auto pr-1",
          isCategoriesOpen ? "pt-10" : "pt-0"
        )}
        aria-label={`${props.title} facet options`}
      >
        {/* tiny toggle (top-right) */}
        <button
          type="button"
          onClick={handleToggleCategories}
          aria-expanded={isCategoriesOpen}
          aria-label={isCategoriesOpen ? "Hide facet options" : "Show facet options"}
          className={cn(
            "absolute right-1.5 top-1.5 z-10 grid h-8 w-8 place-items-center rounded-full",
            "bg-white/90 text-black/60",
            "border border-black/10",
            "hover:bg-black/5 hover:text-black/80 active:bg-black/10",
            focusRing
          )}
        >
          <span className="text-xs font-black" aria-hidden="true">
            {isCategoriesOpen ? "▲" : "▼"}
          </span>
        </button>

        {isCategoriesOpen ? (
          <div className="grid grid-cols-3 gap-2 max-[640px]:grid-cols-2">
            {facetChips.map((chip) => {
              const active = isChipActive(chip.value);
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => handleChipClick(chip.value)}
                  aria-pressed={active}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-2xl border p-2 text-center transition",
                    "border-black/5 bg-white/80",
                    "hover:-translate-y-[1px] hover:bg-white/90 hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] hover:border-black/10",
                    "active:translate-y-0",
                    focusRing,
                    active &&
                      "bg-white/95 border-black/10 shadow-[0_0_0_4px_rgba(189,255,0,0.16),0_14px_34px_rgba(0,0,0,0.10)]"
                  )}
                >
                  <img
                    className="aspect-square w-full rounded-xl border border-black/5 bg-black/[0.02] object-cover"
                    src={chip.imageUrl}
                    alt={chip.label}
                    loading="lazy"
                  />
                  <span className="w-full truncate text-[0.86rem] font-black tracking-[-0.01em]">
                    {chip.label}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* Search + sort */}
      <div className="flex items-center gap-2 max-[480px]:flex-col max-[480px]:items-stretch">
        <input
          className={cn(
            "h-11 w-full min-w-0 flex-1 rounded-full border border-black/10 bg-white/95 px-4",
            "text-[0.95rem] font-extrabold tracking-[-0.01em] text-black",
            "placeholder:text-black/45",
            focusRing
          )}
          type="text"
          value={props.searchValue}
          onChange={handleSearchInput}
          placeholder={`Search ${props.title.toLowerCase()}...`}
          aria-label={`Search ${props.title}`}
        />

        <select
          className={cn(
            "h-11 w-[10.5rem] rounded-full border border-black/10 bg-white/95 px-4",
            "text-[0.95rem] font-black tracking-[-0.01em] text-black",
            "cursor-pointer",
            "max-[480px]:w-full",
            focusRing
          )}
          value={props.sort}
          onChange={handleSortChange}
          aria-label={`Sort ${props.title}`}
        >
          <option value="recommended">Recommended</option>
          <option value="newest">Newest</option>
          <option value="price_asc">Price (low)</option>
          <option value="price_desc">Price (high)</option>
        </select>
      </div>

      {/* Products list */}
      <div
        ref={productsScrollRef}
        className={cn(
          "min-h-[16rem] max-h-[32rem] overflow-auto pr-1",
          "[scrollbar-width:thin]"
        )}
        aria-label={`${props.title} products`}
      >
        {filteredAndSorted.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/10 bg-white/70 px-4 py-4 font-black text-black/55">
            No results in your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {visibleProducts.map((p) => {
              const isSelected = p.id === props.selectedProductId;

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => props.onSelectProduct(p.id)}
                  disabled={!p.isAvailable}
                  aria-pressed={isSelected}
                  aria-disabled={!p.isAvailable}
                  className={cn(
                    "overflow-hidden rounded-2xl border text-left transition",
                    "border-black/5 bg-white/80",
                    "hover:-translate-y-0.5 hover:bg-white/95 hover:border-black/10 hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)]",
                    "active:translate-y-0",
                    focusRing,
                    isSelected &&
                      "bg-white/95 border-black/10 shadow-[0_0_0_4px_rgba(189,255,0,0.16),0_14px_34px_rgba(0,0,0,0.10)]",
                    !p.isAvailable && "opacity-60 cursor-not-allowed hover:translate-y-0 hover:shadow-none"
                  )}
                >
                  <div className="relative">
                    <img
                      className="aspect-square w-full bg-black/[0.02] object-cover"
                      src={p.imageUrl}
                      alt={p.name}
                      loading="lazy"
                    />
                    {!p.isAvailable ? (
                      <div className="absolute left-2 top-2 rounded-full bg-black/75 px-3 py-1 text-xs font-black tracking-[-0.01em] text-white">
                        Out of stock
                      </div>
                    ) : null}
                  </div>

                  <div className="px-3 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-black tracking-[-0.01em] leading-tight">{p.name}</span>
                      <span className="whitespace-nowrap font-black tracking-[-0.01em]">
                        {formatPrice(p.price)}
                      </span>
                    </div>

                    <div className="mt-1 text-[0.9rem] font-black tracking-[-0.01em] text-black/55">
                      {p.brand} • {p.colour}
                    </div>

                    <div className="mt-2 text-[0.9rem] font-black tracking-[-0.01em]">
                      Add to outfit →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div ref={sentinelRef} />

        {hasMore ? (
          <button
            type="button"
            onClick={handleLoadMoreClick}
            className={cn(
              "mx-auto mt-4 block rounded-full border border-black/10 bg-white/90 px-4 py-3",
              "font-black tracking-[-0.01em] hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
              focusRing
            )}
          >
            Load more
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function CreateWardrobe() {
  const ALL = "all";

  const sizeOptions = useMemo<string[]>(() => ["Regular", "Slim", "Oversized"], []);

  const [collection, setCollection] = useState<TCollection>("men");
  const [filters, setFilters] = useState<TFilters>({ top: true, bottom: true });

  const topCategories: TCategory[] = collection === "men" ? MEN_TOP_CATEGORIES : WOMEN_TOP_CATEGORIES;
  const bottomCategories: TCategory[] = collection === "men" ? MEN_BOTTOM_CATEGORIES : WOMEN_BOTTOM_CATEGORIES;

  const topProductsAll: TProduct[] = collection === "men" ? MEN_TOP_PRODUCTS : WOMEN_TOP_PRODUCTS;
  const bottomProductsAll: TProduct[] = collection === "men" ? MEN_BOTTOM_PRODUCTS : WOMEN_BOTTOM_PRODUCTS;

  const [topFacetTab, setTopFacetTab] = useState<TFacetTab>("type");
  const [bottomFacetTab, setBottomFacetTab] = useState<TFacetTab>("type");

  const [selectedTopTypeId, setSelectedTopTypeId] = useState<string>(MEN_TOP_CATEGORIES[0]?.id ?? "");
  const [selectedBottomTypeId, setSelectedBottomTypeId] = useState<string>(MEN_BOTTOM_CATEGORIES[0]?.id ?? "");

  const [selectedTopBrand, setSelectedTopBrand] = useState<string>(ALL);
  const [selectedBottomBrand, setSelectedBottomBrand] = useState<string>(ALL);

  const [selectedTopColour, setSelectedTopColour] = useState<string>(ALL);
  const [selectedBottomColour, setSelectedBottomColour] = useState<string>(ALL);

  const [selectedTopProductId, setSelectedTopProductId] = useState<string>(MEN_TOP_PRODUCTS[0]?.id ?? "");
  const [selectedBottomProductId, setSelectedBottomProductId] = useState<string>(MEN_BOTTOM_PRODUCTS[0]?.id ?? "");

  const [size, setSize] = useState<string>(sizeOptions[0]);

  const [topSearch, setTopSearch] = useState<string>("");
  const [bottomSearch, setBottomSearch] = useState<string>("");

  const [topSort, setTopSort] = useState<TSort>("recommended");
  const [bottomSort, setBottomSort] = useState<TSort>("recommended");

  const isSyncingFromUrlRef = useRef<boolean>(false);
  const collectionRef = useRef<TCollection>(collection);

  useEffect(() => {
    collectionRef.current = collection;
  }, [collection]);

  // URL -> state
  useEffect(() => {
    function applyFromUrl(): void {
      isSyncingFromUrlRef.current = true;

      const params = new URLSearchParams(window.location.search);

      const nextCollectionParam = getParam(params, "collection");
      const nextCollection: TCollection = nextCollectionParam === "women" ? "women" : "men";

      const nextTopCategories: TCategory[] = nextCollection === "men" ? MEN_TOP_CATEGORIES : WOMEN_TOP_CATEGORIES;
      const nextBottomCategories: TCategory[] =
        nextCollection === "men" ? MEN_BOTTOM_CATEGORIES : WOMEN_BOTTOM_CATEGORIES;

      const showTop = getParam(params, "showTop");
      const showBottom = getParam(params, "showBottom");

      let nextFilters: TFilters = { top: true, bottom: true };

      if (showTop !== null || showBottom !== null) {
        const t = showTop === null ? true : showTop !== "0";
        const b = showBottom === null ? true : showBottom !== "0";
        nextFilters = !t && !b ? { top: true, bottom: true } : { top: t, bottom: b };
      }

      const urlTopTab = getParam(params, "topTab");
      const urlBottomTab = getParam(params, "bottomTab");

      const urlTopType = getParam(params, "topType");
      const urlBottomType = getParam(params, "bottomType");

      const nextTopTypeId: string =
        urlTopType && nextTopCategories.some((c) => c.id === urlTopType) ? urlTopType : nextTopCategories[0]?.id ?? "";

      const nextBottomTypeId: string =
        urlBottomType && nextBottomCategories.some((c) => c.id === urlBottomType)
          ? urlBottomType
          : nextBottomCategories[0]?.id ?? "";

      const nextTopBrand: string = getParam(params, "topBrand") ?? ALL;
      const nextBottomBrand: string = getParam(params, "bottomBrand") ?? ALL;

      const nextTopColour: string = getParam(params, "topColour") ?? ALL;
      const nextBottomColour: string = getParam(params, "bottomColour") ?? ALL;

      const collectionChanged: boolean = nextCollection !== collectionRef.current;

      setCollection(nextCollection);
      setFilters(nextFilters);

      setTopFacetTab(isFacetTab(urlTopTab) ? urlTopTab : "type");
      setBottomFacetTab(isFacetTab(urlBottomTab) ? urlBottomTab : "type");

      setSelectedTopTypeId(nextTopTypeId);
      setSelectedBottomTypeId(nextBottomTypeId);

      setSelectedTopBrand(nextTopBrand);
      setSelectedBottomBrand(nextBottomBrand);

      setSelectedTopColour(nextTopColour);
      setSelectedBottomColour(nextBottomColour);

      if (collectionChanged) {
        const nextTopProducts: TProduct[] = nextCollection === "men" ? MEN_TOP_PRODUCTS : WOMEN_TOP_PRODUCTS;
        const nextBottomProducts: TProduct[] = nextCollection === "men" ? MEN_BOTTOM_PRODUCTS : WOMEN_BOTTOM_PRODUCTS;

        setSelectedTopProductId(nextTopProducts[0]?.id ?? "");
        setSelectedBottomProductId(nextBottomProducts[0]?.id ?? "");

        setTopSearch("");
        setBottomSearch("");
        setTopSort("recommended");
        setBottomSort("recommended");

        setSize(sizeOptions[0]);
      }

      isSyncingFromUrlRef.current = false;
    }

    applyFromUrl();

    function onPopState(): void {
      applyFromUrl();
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [sizeOptions]);

  // state -> URL
  useEffect(() => {
    if (isSyncingFromUrlRef.current) return;

    const params = new URLSearchParams(window.location.search);

    params.set("collection", collection);
    params.set("showTop", filters.top ? "1" : "0");
    params.set("showBottom", filters.bottom ? "1" : "0");

    params.set("topTab", topFacetTab);
    params.set("bottomTab", bottomFacetTab);

    params.set("topType", selectedTopTypeId);
    params.set("bottomType", selectedBottomTypeId);

    if (selectedTopBrand !== ALL) params.set("topBrand", selectedTopBrand);
    else params.delete("topBrand");

    if (selectedBottomBrand !== ALL) params.set("bottomBrand", selectedBottomBrand);
    else params.delete("bottomBrand");

    if (selectedTopColour !== ALL) params.set("topColour", selectedTopColour);
    else params.delete("topColour");

    if (selectedBottomColour !== ALL) params.set("bottomColour", selectedBottomColour);
    else params.delete("bottomColour");

    setUrlSearchParams(params);
  }, [
    collection,
    filters.top,
    filters.bottom,
    topFacetTab,
    bottomFacetTab,
    selectedTopTypeId,
    selectedBottomTypeId,
    selectedTopBrand,
    selectedBottomBrand,
    selectedTopColour,
    selectedBottomColour,
  ]);

  const selectedTop: TProduct | undefined = useMemo(
    () => topProductsAll.find((p) => p.id === selectedTopProductId),
    [topProductsAll, selectedTopProductId]
  );

  const selectedBottom: TProduct | undefined = useMemo(
    () => bottomProductsAll.find((p) => p.id === selectedBottomProductId),
    [bottomProductsAll, selectedBottomProductId]
  );

  const isComplete: boolean = filters.top && filters.bottom;
  const visibleSidePanelsCount: number = Number(filters.top) + Number(filters.bottom);

  function getCheckboxIcon(isChecked: boolean): string {
    return isChecked ? "✓" : "○";
  }

  function handleToggleFilter(key: keyof TFilters): void {
    setFilters((prev) => {
      const next: TFilters = { ...prev, [key]: !prev[key] };
      if (!next.top && !next.bottom) return prev;
      return next;
    });
  }

  function handleSetComplete(): void {
    setFilters({ top: true, bottom: true });
  }

  function handleSetCollection(next: TCollection): void {
    if (next === collection) return;

    const nextTopCategories: TCategory[] = next === "men" ? MEN_TOP_CATEGORIES : WOMEN_TOP_CATEGORIES;
    const nextBottomCategories: TCategory[] = next === "men" ? MEN_BOTTOM_CATEGORIES : WOMEN_BOTTOM_CATEGORIES;

    const nextTopProducts: TProduct[] = next === "men" ? MEN_TOP_PRODUCTS : WOMEN_TOP_PRODUCTS;
    const nextBottomProducts: TProduct[] = next === "men" ? MEN_BOTTOM_PRODUCTS : WOMEN_BOTTOM_PRODUCTS;

    setCollection(next);

    setTopFacetTab("type");
    setBottomFacetTab("type");

    setSelectedTopTypeId(nextTopCategories[0]?.id ?? "");
    setSelectedBottomTypeId(nextBottomCategories[0]?.id ?? "");

    setSelectedTopBrand(ALL);
    setSelectedBottomBrand(ALL);

    setSelectedTopColour(ALL);
    setSelectedBottomColour(ALL);

    setSelectedTopProductId(nextTopProducts[0]?.id ?? "");
    setSelectedBottomProductId(nextBottomProducts[0]?.id ?? "");

    setTopSearch("");
    setBottomSearch("");
    setTopSort("recommended");
    setBottomSort("recommended");

    setSize(sizeOptions[0]);
    setFilters({ top: true, bottom: true });
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSize(e.target.value);
  }

  function handleStartOver(): void {
    setSelectedTopProductId(topProductsAll[0]?.id ?? "");
    setSelectedBottomProductId(bottomProductsAll[0]?.id ?? "");

    setSelectedTopTypeId(topCategories[0]?.id ?? "");
    setSelectedBottomTypeId(bottomCategories[0]?.id ?? "");

    setSelectedTopBrand(ALL);
    setSelectedBottomBrand(ALL);

    setSelectedTopColour(ALL);
    setSelectedBottomColour(ALL);

    setTopSearch("");
    setBottomSearch("");
    setTopSort("recommended");
    setBottomSort("recommended");

    setSize(sizeOptions[0]);
    setFilters({ top: true, bottom: true });
  }

  const topTypeLabel: string = topCategories.find((c) => c.id === selectedTopTypeId)?.label ?? "Type";
  const bottomTypeLabel: string = bottomCategories.find((c) => c.id === selectedBottomTypeId)?.label ?? "Type";

  function renderActiveFilters(args: {
    ariaLabel: string;
    typeLabel: string;
    brandValue: string;
    onClearBrand: () => void;
    colourValue: string;
    onClearColour: () => void;
  }) {
    const showBrand = args.brandValue !== ALL;
    const showColour = args.colourValue !== ALL;

    const chipBase = cn(
      "inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/85 px-3 py-2",
      "shadow-[0_10px_24px_rgba(0,0,0,0.06)] text-[0.88rem] font-black tracking-[-0.01em]"
    );

    const xBtn = cn(
      "grid h-6 w-6 place-items-center rounded-full bg-black/5 text-black/70",
      "font-black leading-none transition hover:-translate-y-[1px] hover:bg-black/10 active:translate-y-0",
      focusRing
    );

    return (
      <div className="mt-3 flex flex-wrap gap-2" aria-label={args.ariaLabel}>
        {/* locked type chip */}
        <div className={chipBase} aria-label={`Type ${args.typeLabel}`}>
          <span className="text-black/55">Type:</span>
          <span className="text-black">{args.typeLabel}</span>
        </div>

        {showBrand ? (
          <div className={chipBase} aria-label={`Brand ${args.brandValue}`}>
            <span className="text-black/55">Brand:</span>
            <span className="text-black">{args.brandValue}</span>
            <button type="button" className={xBtn} onClick={args.onClearBrand} aria-label={`Remove Brand filter ${args.brandValue}`}>
              ×
            </button>
          </div>
        ) : null}

        {showColour ? (
          <div className={chipBase} aria-label={`Colour ${args.colourValue}`}>
            <span className="text-black/55">Colour:</span>
            <span className="text-black">{args.colourValue}</span>
            <button type="button" className={xBtn} onClick={args.onClearColour} aria-label={`Remove Colour filter ${args.colourValue}`}>
              ×
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  const panelsMode =
    visibleSidePanelsCount === 0 ? "noSides" : visibleSidePanelsCount === 1 ? "oneSide" : "twoSides";

  return (
    <div
      className={cn(
        "min-h-screen text-[#1A1A1A]",
        "bg-[radial-gradient(1200px_500px_at_15%_-10%,rgba(189,255,0,0.20),transparent_55%),radial-gradient(900px_500px_at_85%_0%,rgba(245,255,180,0.35),transparent_55%),linear-gradient(180deg,#FFF7EE_0%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,0.90)_100%)]"
      )}
    >
      <ClothingBanner
        title="CREATE YOUR FIT"
        subtitle="CHOOSE A TOP AND BOTTOM"
        img_src={collection === "men" ? men_banner : women_banner}
      />
      <CircleLogo />

      <div className="mx-auto max-w-[70rem] px-5 pb-12 pt-9 max-[600px]:px-4">
        {/* Header */}
        <header className="mb-6 flex items-start justify-between gap-5 max-[640px]:flex-col max-[640px]:items-start">
          <div className="max-w-[42rem]">
            <h1 className="m-0 text-[clamp(2rem,3.1vw,3.15rem)] font-black tracking-[-0.04em] leading-[1.05]">
              Create your fit
            </h1>
            <p className="mt-3 max-w-[34rem] text-[1.05rem] leading-[1.55] text-black/55">
              Choose a top and bottom. We’ll match brands and pricing.
            </p>

            {/* Collection toggle */}
            <div
              className={cn(
                "mt-4 inline-flex items-center gap-1 rounded-full border border-black/5 bg-white/80 p-1",
                "shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]"
              )}
              aria-label="Choose collection"
            >
              {(["men", "women"] as const).map((key) => {
                const active = collection === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSetCollection(key)}
                    className={cn(
                      "rounded-full px-4 py-2 font-black tracking-[-0.01em] transition",
                      "border border-transparent",
                      "hover:bg-black/5 hover:-translate-y-[1px] active:translate-y-0",
                      focusRing,
                      active &&
                        "bg-[rgba(189,255,0,0.25)] border-black/10 shadow-[0_0_0_4px_rgba(189,255,0,0.16)]"
                    )}
                  >
                    {key === "men" ? "Men" : "Women"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Steps toggle */}
          <div className="flex items-center">
            <div
              className={cn(
                "flex items-center gap-2 rounded-full border border-black/5 bg-white/80 p-2",
                "shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]",
                "max-[640px]:w-full max-[640px]:justify-between"
              )}
              aria-label="Outfit filters"
            >
              {[
                { key: "top" as const, label: "Top", checked: filters.top, onClick: () => handleToggleFilter("top") },
                { key: "bottom" as const, label: "Bottom", checked: filters.bottom, onClick: () => handleToggleFilter("bottom") },
                { key: "complete" as const, label: "Complete", checked: isComplete, onClick: handleSetComplete },
              ].map((s) => {
                const checked = s.checked;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={s.onClick}
                    aria-pressed={checked}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-2 transition select-none",
                      "border border-transparent",
                      "hover:bg-black/5 hover:-translate-y-[1px] active:translate-y-0",
                      focusRing,
                      !checked && "opacity-70",
                      checked && "bg-[rgba(189,255,0,0.20)] border-black/5"
                    )}
                  >
                    <span className="text-[0.95rem] font-black">{s.label}</span>
                    <span
                      className={cn(
                        "grid h-6 w-6 place-items-center rounded-full text-[0.95rem] font-black leading-none",
                        checked ? "bg-[#BDFF00] text-black" : "bg-black/5 text-black/60"
                      )}
                      aria-hidden="true"
                    >
                      {getCheckboxIcon(checked)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Panels */}
        <main
          className={cn(
            "mb-6 flex gap-4 items-stretch",
            "max-[640px]:flex-col",
            panelsMode === "noSides" && "justify-center",
            panelsMode === "noSides" && " [&_.previewHero]:max-w-[38rem] [&_.previewHero]:flex-[0_1_38rem]",
            panelsMode === "oneSide" && " [&_.previewHero]:flex-[1_1_auto]"
          )}
        >
          {/* TOP side panel */}
          {filters.top ? (
            <section
              className={cn(
                "flex-[0_1_clamp(15.25rem,22vw,18rem)] min-w-[15.25rem]",
                "rounded-2xl border border-black/10 bg-white/80 p-4",
                "shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
                "max-[640px]:flex-[1_1_auto] max-[640px]:min-w-0"
              )}
              aria-label="Choose your top"
            >
              <FacetTabsHeader activeTab={topFacetTab} onTabChange={setTopFacetTab} ariaLabel="Top facets" />

              {renderActiveFilters({
                ariaLabel: "Top active filters",
                typeLabel: topTypeLabel,
                brandValue: selectedTopBrand,
                onClearBrand: () => setSelectedTopBrand(ALL),
                colourValue: selectedTopColour,
                onClearColour: () => setSelectedTopColour(ALL),
              })}

              <div className="mt-3">
                <ProductPanel
                  title="Top"
                  activeFacetTab={topFacetTab}
                  categories={topCategories}
                  products={topProductsAll}
                  selectedTypeId={selectedTopTypeId}
                  onTypeChange={setSelectedTopTypeId}
                  selectedBrand={selectedTopBrand}
                  onBrandChange={setSelectedTopBrand}
                  selectedColour={selectedTopColour}
                  onColourChange={setSelectedTopColour}
                  selectedProductId={selectedTopProductId}
                  onSelectProduct={setSelectedTopProductId}
                  searchValue={topSearch}
                  onSearchChange={setTopSearch}
                  sort={topSort}
                  onSortChange={setTopSort}
                />
              </div>
            </section>
          ) : null}

          {/* Preview */}
          <section
            className={cn(
              "previewHero flex-[1_1_0] min-w-[22rem]",
              "rounded-2xl border border-black/10 bg-white/80 p-4",
              "shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
              "sticky top-4 self-start",
              "max-[640px]:static max-[640px]:top-auto max-[640px]:self-auto max-[640px]:min-w-0"
            )}
            aria-label="Outfit preview"
          >
            <div
              className={cn(
                "relative min-h-[26rem] overflow-hidden rounded-2xl border border-black/5 p-4",
                "bg-[radial-gradient(800px_380px_at_30%_20%,rgba(189,255,0,0.14),transparent_55%),radial-gradient(700px_380px_at_70%_35%,rgba(245,255,180,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.62))]",
                "flex items-center justify-center",
                "max-[640px]:min-h-[24rem]"
              )}
            >
              {/* mannequin glow */}
              <div
                className="pointer-events-none absolute inset-4 rounded-2xl opacity-25
                  bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.07),rgba(0,0,0,0.02)_55%,transparent_56%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.01))]"
                aria-hidden="true"
              />

              <div
                className={cn(
                  "relative z-[2] flex h-full w-full flex-col gap-4",
                  Number(filters.top) + Number(filters.bottom) === 1 && "gap-0"
                )}
              >
                {filters.top ? (
                  <div className="flex flex-1 items-center justify-center rounded-2xl border border-black/5 bg-white/70 p-3 shadow-[0_18px_44px_rgba(0,0,0,0.10)]">
                    {selectedTop ? (
                      <img
                        className="max-h-full max-w-full object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.10)]"
                        src={selectedTop.imageUrl}
                        alt={`${selectedTop.name} preview`}
                      />
                    ) : (
                      <div className="font-black tracking-[-0.01em] text-black/55">Select a top</div>
                    )}
                  </div>
                ) : null}

                {filters.bottom ? (
                  <div className="flex flex-1 items-center justify-center rounded-2xl border border-black/5 bg-white/70 p-3 shadow-[0_18px_44px_rgba(0,0,0,0.10)]">
                    {selectedBottom ? (
                      <img
                        className="max-h-full max-w-full object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.10)]"
                        src={selectedBottom.imageUrl}
                        alt={`${selectedBottom.name} preview`}
                      />
                    ) : (
                      <div className="font-black tracking-[-0.01em] text-black/55">Select a bottom</div>
                    )}
                  </div>
                ) : null}
              </div>

              {/* Size selector pill */}
              <div
                className={cn(
                  "absolute bottom-4 right-4 z-[3] flex items-center gap-2 rounded-full",
                  "border border-black/10 bg-white/90 px-3 py-2",
                  "shadow-[0_14px_34px_rgba(0,0,0,0.14)]"
                )}
              >
                <label className="text-xs font-black text-black/55" htmlFor="outfit-size">
                  Size
                </label>
                <select
                  id="outfit-size"
                  value={size}
                  onChange={handleSizeChange}
                  className={cn(
                    "cursor-pointer rounded-full border border-black/10 bg-white/95 px-3 py-2",
                    "font-black text-black",
                    focusRing
                  )}
                >
                  {sizeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* BOTTOM side panel */}
          {filters.bottom ? (
            <section
              className={cn(
                "flex-[0_1_clamp(15.25rem,22vw,18rem)] min-w-[15.25rem]",
                "rounded-2xl border border-black/10 bg-white/80 p-4",
                "shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
                "max-[640px]:flex-[1_1_auto] max-[640px]:min-w-0"
              )}
              aria-label="Choose your bottom"
            >
              <FacetTabsHeader
                activeTab={bottomFacetTab}
                onTabChange={setBottomFacetTab}
                ariaLabel="Bottom facets"
              />

              {renderActiveFilters({
                ariaLabel: "Bottom active filters",
                typeLabel: bottomTypeLabel,
                brandValue: selectedBottomBrand,
                onClearBrand: () => setSelectedBottomBrand(ALL),
                colourValue: selectedBottomColour,
                onClearColour: () => setSelectedBottomColour(ALL),
              })}

              <div className="mt-3">
                <ProductPanel
                  title="Bottom"
                  activeFacetTab={bottomFacetTab}
                  categories={bottomCategories}
                  products={bottomProductsAll}
                  selectedTypeId={selectedBottomTypeId}
                  onTypeChange={setSelectedBottomTypeId}
                  selectedBrand={selectedBottomBrand}
                  onBrandChange={setSelectedBottomBrand}
                  selectedColour={selectedBottomColour}
                  onColourChange={setSelectedBottomColour}
                  selectedProductId={selectedBottomProductId}
                  onSelectProduct={setSelectedBottomProductId}
                  searchValue={bottomSearch}
                  onSearchChange={setBottomSearch}
                  sort={bottomSort}
                  onSortChange={setBottomSort}
                />
              </div>
            </section>
          ) : null}
        </main>

        {/* Actions */}
        <footer className="flex flex-wrap items-center justify-center gap-3" aria-label="Outfit actions">
          <button
            type="button"
            className={cn(
              "inline-flex items-center rounded-full border border-black/10 bg-white/85 px-5 py-3",
              "font-black tracking-[-0.01em] text-black transition",
              "hover:-translate-y-[1px] hover:bg-white/95 hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)]",
              "active:translate-y-0",
              focusRing
            )}
          >
            <span className="mr-2 text-lg opacity-90" aria-hidden="true">
              ♡
            </span>
            Save to favourites
          </button>

          <button
            type="button"
            className={cn(
              "inline-flex items-center rounded-full border border-black/10 bg-[#BDFF00] px-5 py-3",
              "font-black tracking-[-0.01em] text-black transition",
              "hover:-translate-y-[1px] hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)]",
              "active:translate-y-0",
              focusRing
            )}
          >
            Find the best match
          </button>

          <button
            type="button"
            onClick={handleStartOver}
            className={cn(
              "inline-flex items-center rounded-full border border-black/10 bg-white/85 px-5 py-3",
              "font-black tracking-[-0.01em] text-black transition",
              "hover:-translate-y-[1px] hover:bg-white/95 hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)]",
              "active:translate-y-0",
              focusRing
            )}
          >
            Start over
          </button>
        </footer>
      </div>
    </div>
  );
}
