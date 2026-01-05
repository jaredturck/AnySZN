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

import "./../../styles/CreateWardrobe.scss";

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
    { id: "men-top-cat-6", label: "Plain Tee", imageUrl: mens_img6 }
];

const MEN_BOTTOM_CATEGORIES: TCategory[] = [
    { id: "men-bottom-cat-1", label: "Shorts", imageUrl: mens_img7 },
    { id: "men-bottom-cat-2", label: "Sport Short", imageUrl: mens_img8 },
    { id: "men-bottom-cat-3", label: "Sweat Short", imageUrl: mens_img9 },
    { id: "men-bottom-cat-4", label: "Joggers", imageUrl: mens_img10 },
    { id: "men-bottom-cat-5", label: "Cargo", imageUrl: mens_img11 },
    { id: "men-bottom-cat-6", label: "Denim", imageUrl: mens_img12 }
];

const WOMEN_TOP_CATEGORIES: TCategory[] = [
    { id: "women-top-cat-1", label: "Top", imageUrl: womens_img1 },
    { id: "women-top-cat-2", label: "Solitaria", imageUrl: womens_img2 },
    { id: "women-top-cat-3", label: "Hoodie", imageUrl: womens_img3 },
    { id: "women-top-cat-4", label: "Crewneck", imageUrl: womens_img4 },
    { id: "women-top-cat-5", label: "Graphic Tee", imageUrl: womens_img5 },
    { id: "women-top-cat-6", label: "Plain Tee", imageUrl: womens_img6 }
];

const WOMEN_BOTTOM_CATEGORIES: TCategory[] = [
    { id: "women-bottom-cat-1", label: "Shorts", imageUrl: womens_img7 },
    { id: "women-bottom-cat-2", label: "Sport Short", imageUrl: womens_img8 },
    { id: "women-bottom-cat-3", label: "Sweat Short", imageUrl: womens_img9 },
    { id: "women-bottom-cat-4", label: "Joggers", imageUrl: womens_img10 },
    { id: "women-bottom-cat-5", label: "Cargo", imageUrl: womens_img11 },
    { id: "women-bottom-cat-6", label: "Denim", imageUrl: womens_img12 }
];

const MEN_IMAGES: string[] = [
    mens_img1, mens_img2, mens_img3, mens_img4, mens_img5, mens_img6,
    mens_img7, mens_img8, mens_img9, mens_img10, mens_img11, mens_img12
];

const WOMEN_IMAGES: string[] = [
    womens_img1, womens_img2, womens_img3, womens_img4, womens_img5, womens_img6,
    womens_img7, womens_img8, womens_img9, womens_img10, womens_img11, womens_img12
];

type TActiveFilterChip = {
    key: "type" | "brand" | "colour";
    label: string;
    value: string;
    onClear: () => void;
};

function setUrlSearchParams(params: URLSearchParams): void {
    const qs = params.toString();
    const url = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", url);
}

function getParam(params: URLSearchParams, key: string): string | null {
    const v = params.get(key);
    return v && v.trim().length > 0 ? v : null;
}

function ActiveFilterChips(props: { chips: TActiveFilterChip[]; ariaLabel: string }) {
    if (props.chips.length === 0) {
        return null;
    }

    return (
        <div className="CreateOutfit__Panels__SidePanel__ActiveFilters" aria-label={props.ariaLabel}>
            {props.chips.map((c: TActiveFilterChip) => (
                <button
                    key={c.key}
                    type="button"
                    className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip"
                    onClick={c.onClear}
                    aria-label={`Remove ${c.label} filter ${c.value}`}
                >
                    <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Label">
                        {c.label}:
                    </span>
                    <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Value">
                        {c.value}
                    </span>
                    <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__X" aria-hidden="true">
                        ×
                    </span>
                </button>
            ))}
        </div>
    );
}

function formatPrice(price: number): string {
    return `£${price.toFixed(2)}`;
}

function normalizeSearch(value: string): string {
    const v = value.trim().toLowerCase();

    if (!v) {
        return "";
    }

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
            isAvailable: i % 9 !== 0
        });
    }

    return out;
}

const MEN_TOP_PRODUCTS: TProduct[] = buildMockProducts({
    prefix: "men-top",
    slot: "top",
    categories: MEN_TOP_CATEGORIES,
    images: MEN_IMAGES
});

const MEN_BOTTOM_PRODUCTS: TProduct[] = buildMockProducts({
    prefix: "men-bottom",
    slot: "bottom",
    categories: MEN_BOTTOM_CATEGORIES,
    images: MEN_IMAGES
});

const WOMEN_TOP_PRODUCTS: TProduct[] = buildMockProducts({
    prefix: "women-top",
    slot: "top",
    categories: WOMEN_TOP_CATEGORIES,
    images: WOMEN_IMAGES
});

const WOMEN_BOTTOM_PRODUCTS: TProduct[] = buildMockProducts({
    prefix: "women-bottom",
    slot: "bottom",
    categories: WOMEN_BOTTOM_CATEGORIES,
    images: WOMEN_IMAGES
});

type TFacetTabsHeaderProps = {
    activeTab: TFacetTab;
    onTabChange: (tab: TFacetTab) => void;
    ariaLabel: string;
};

function FacetTabsHeader(props: TFacetTabsHeaderProps) {
    function tabClass(tab: TFacetTab): string {
        return (
            "CreateOutfit__Panels__SidePanel__Header__Tab" +
            (props.activeTab === tab ? " CreateOutfit__Panels__SidePanel__Header__Tab--Active" : "")
        );
    }

    return (
        <div className="CreateOutfit__Panels__SidePanel__Header" role="tablist" aria-label={props.ariaLabel}>
            <button
                type="button"
                role="tab"
                aria-selected={props.activeTab === "type"}
                className={tabClass("type")}
                onClick={() => props.onTabChange("type")}
            >
                <span className="CreateOutfit__Panels__SidePanel__Header__Text">Type</span>
            </button>

            <span className="CreateOutfit__Panels__SidePanel__Header__Dot" aria-hidden="true">•</span>

            <button
                type="button"
                role="tab"
                aria-selected={props.activeTab === "brand"}
                className={tabClass("brand")}
                onClick={() => props.onTabChange("brand")}
            >
                <span className="CreateOutfit__Panels__SidePanel__Header__Text">Brand</span>
            </button>

            <span className="CreateOutfit__Panels__SidePanel__Header__Dot" aria-hidden="true">•</span>

            <button
                type="button"
                role="tab"
                aria-selected={props.activeTab === "colour"}
                className={tabClass("colour")}
                onClick={() => props.onTabChange("colour")}
            >
                <span className="CreateOutfit__Panels__SidePanel__Header__Text">Colour</span>
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

    // NEW: collapse/expand categories chips
    const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);

    const sentinelRef = useRef<HTMLDivElement | null>(null);
    const productsScrollRef = useRef<HTMLDivElement | null>(null);

    const normalizedSearch: string = useMemo(() => {
        return normalizeSearch(props.searchValue);
    }, [props.searchValue]);

    const allChipImage: string = useMemo(() => {
        return props.categories[0]?.imageUrl ?? props.products[0]?.imageUrl ?? "";
    }, [props.categories, props.products]);

    const brandChips: TChip[] = useMemo(() => {
        const brands: string[] = Array.from(new Set(props.products.map((p: TProduct) => p.brand))).sort((a, b) =>
            a.localeCompare(b)
        );

        const out: TChip[] = [{ id: "brand-all", label: "All", imageUrl: allChipImage, value: ALL }];

        brands.forEach((b: string) => {
            const img: string = props.products.find((p: TProduct) => p.brand === b)?.imageUrl ?? allChipImage;
            out.push({ id: `brand-${b}`, label: b, imageUrl: img, value: b });
        });

        return out;
    }, [props.products, allChipImage]);

    const colourChips: TChip[] = useMemo(() => {
        const colours: string[] = Array.from(new Set(props.products.map((p: TProduct) => p.colour))).sort((a, b) =>
            a.localeCompare(b)
        );

        const out: TChip[] = [{ id: "colour-all", label: "All", imageUrl: allChipImage, value: ALL }];

        colours.forEach((c: string) => {
            const img: string = props.products.find((p: TProduct) => p.colour === c)?.imageUrl ?? allChipImage;
            out.push({ id: `colour-${c}`, label: c, imageUrl: img, value: c });
        });

        return out;
    }, [props.products, allChipImage]);

    const facetChips: TChip[] = useMemo(() => {
        if (props.activeFacetTab === "brand") return brandChips;
        if (props.activeFacetTab === "colour") return colourChips;

        return props.categories.map((c: TCategory) => ({
            id: c.id,
            label: c.label,
            imageUrl: c.imageUrl,
            value: c.id
        }));
    }, [props.activeFacetTab, props.categories, brandChips, colourChips]);

    const filteredAndSorted: TProduct[] = useMemo(() => {
        let list: TProduct[] = props.products;

        // Type is required
        if (props.selectedTypeId) {
            list = list.filter((p: TProduct) => p.categoryId === props.selectedTypeId);
        }

        // Optional filters
        if (props.selectedBrand !== ALL) {
            list = list.filter((p: TProduct) => p.brand === props.selectedBrand);
        }

        if (props.selectedColour !== ALL) {
            list = list.filter((p: TProduct) => p.colour === props.selectedColour);
        }

        if (normalizedSearch) {
            const needle = normalizedSearch.toLowerCase();
            list = list.filter((p: TProduct) => {
                const haystack = `${p.name} ${p.brand} ${p.colour}`.toLowerCase();
                return haystack.includes(needle);
            });
        }

        const sorted: TProduct[] = [...list];

        if (props.sort === "newest") {
            sorted.sort((a, b) => b.createdAt - a.createdAt);
        } else if (props.sort === "price_asc") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (props.sort === "price_desc") {
            sorted.sort((a, b) => b.price - a.price);
        } else {
            sorted.sort((a, b) => b.popularity - a.popularity);
        }

        return sorted;
    }, [
        props.products,
        props.selectedTypeId,
        props.selectedBrand,
        props.selectedColour,
        normalizedSearch,
        props.sort
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
            (entries: IntersectionObserverEntry[]) => {
                const first = entries[0];
                if (!first) return;

                if (first.isIntersecting && hasMore) {
                    setVisibleCount((prev: number) => Math.min(prev + PAGE_SIZE, filteredAndSorted.length));
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
        if (props.activeFacetTab === "brand") {
            props.onBrandChange(value);
            return;
        }

        if (props.activeFacetTab === "colour") {
            props.onColourChange(value);
            return;
        }

        props.onTypeChange(value);
    }

    function isChipActive(value: string): boolean {
        if (props.activeFacetTab === "brand") return props.selectedBrand === value;
        if (props.activeFacetTab === "colour") return props.selectedColour === value;
        return props.selectedTypeId === value;
    }

    function handleLoadMoreClick(): void {
        setVisibleCount((prev: number) => Math.min(prev + PAGE_SIZE, filteredAndSorted.length));
    }

    // NEW: toggle categories open/closed
    function handleToggleCategories(): void {
        setIsCategoriesOpen((prev: boolean) => !prev);
    }

    const categoriesClassName: string =
        "CreateOutfit__Panels__SidePanel__Categories" +
        (isCategoriesOpen ? "" : " CreateOutfit__Panels__SidePanel__Categories--Collapsed");

    return (
        <div className="CreateOutfit__Panels__SidePanel__Body">
            <div className={categoriesClassName} aria-label={`${props.title} facet options`}>
                {/* NEW: top-right collapse button */}
                <button
                    type="button"
                    className="CreateOutfit__Panels__SidePanel__Categories__Toggle"
                    onClick={handleToggleCategories}
                    aria-expanded={isCategoriesOpen}
                    aria-label={isCategoriesOpen ? "Hide facet options" : "Show facet options"}
                >
                    <span aria-hidden="true">{isCategoriesOpen ? "▲" : "▼"}</span>
                </button>

                {isCategoriesOpen
                    ? facetChips.map((chip: TChip) => {
                          const active: boolean = isChipActive(chip.value);

                          return (
                              <button
                                  key={chip.id}
                                  type="button"
                                  className={
                                      "CreateOutfit__Panels__SidePanel__Categories__Chip" +
                                      (active ? " CreateOutfit__Panels__SidePanel__Categories__Chip--Active" : "")
                                  }
                                  onClick={() => handleChipClick(chip.value)}
                                  aria-pressed={active}
                              >
                                  <img
                                      className="CreateOutfit__Panels__SidePanel__Categories__Chip__Img"
                                      src={chip.imageUrl}
                                      alt={chip.label}
                                      loading="lazy"
                                  />
                                  <span className="CreateOutfit__Panels__SidePanel__Categories__Chip__Label">
                                      {chip.label}
                                  </span>
                              </button>
                          );
                      })
                    : null}
            </div>

            <div className="CreateOutfit__Panels__SidePanel__Controls">
                <input
                    className="CreateOutfit__Panels__SidePanel__Controls__Search"
                    type="text"
                    value={props.searchValue}
                    onChange={handleSearchInput}
                    placeholder={`Search ${props.title.toLowerCase()}...`}
                    aria-label={`Search ${props.title}`}
                />

                <select
                    className="CreateOutfit__Panels__SidePanel__Controls__Sort"
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

            <div ref={productsScrollRef} className="CreateOutfit__Panels__SidePanel__Products" aria-label={`${props.title} products`}>
                {filteredAndSorted.length === 0 ? (
                    <div className="CreateOutfit__Panels__SidePanel__Products__Empty">No results in your filters.</div>
                ) : (
                    <div className="CreateOutfit__Panels__SidePanel__Products__Grid">
                        {visibleProducts.map((p: TProduct) => {
                            const isSelected: boolean = p.id === props.selectedProductId;

                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    className={
                                        "CreateOutfit__Panels__SidePanel__Products__Card" +
                                        (isSelected ? " CreateOutfit__Panels__SidePanel__Products__Card--Selected" : "") +
                                        (!p.isAvailable ? " CreateOutfit__Panels__SidePanel__Products__Card--Disabled" : "")
                                    }
                                    onClick={() => props.onSelectProduct(p.id)}
                                    disabled={!p.isAvailable}
                                    aria-pressed={isSelected}
                                    aria-disabled={!p.isAvailable}
                                >
                                    <div className="CreateOutfit__Panels__SidePanel__Products__Card__Media">
                                        <img
                                            className="CreateOutfit__Panels__SidePanel__Products__Card__Media__Img"
                                            src={p.imageUrl}
                                            alt={p.name}
                                            loading="lazy"
                                        />
                                        {!p.isAvailable ? (
                                            <div className="CreateOutfit__Panels__SidePanel__Products__Card__Media__Badge">
                                                Out of stock
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="CreateOutfit__Panels__SidePanel__Products__Card__Meta">
                                        <div className="CreateOutfit__Panels__SidePanel__Products__Card__Meta__Top">
                                            <span className="CreateOutfit__Panels__SidePanel__Products__Card__Name">{p.name}</span>
                                            <span className="CreateOutfit__Panels__SidePanel__Products__Card__Price">{formatPrice(p.price)}</span>
                                        </div>

                                        <div className="CreateOutfit__Panels__SidePanel__Products__Card__Brand">
                                            {p.brand} • {p.colour}
                                        </div>

                                        <div className="CreateOutfit__Panels__SidePanel__Products__Card__Cta">Add to outfit →</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}

                <div ref={sentinelRef} />

                {hasMore ? (
                    <button type="button" className="CreateOutfit__Panels__SidePanel__Products__LoadMore" onClick={handleLoadMoreClick}>
                        Load more
                    </button>
                ) : null}
            </div>
        </div>
    );
}



export function CreateWardrobe() {
    const ALL = "all";

    const sizeOptions = useMemo<string[]>(() => {
        return ["Regular", "Slim", "Oversized"];
    }, []);

    const [collection, setCollection] = useState<TCollection>("men");
    const [filters, setFilters] = useState<TFilters>({ top: true, bottom: true });

    const topCategories: TCategory[] = collection === "men" ? MEN_TOP_CATEGORIES : WOMEN_TOP_CATEGORIES;
    const bottomCategories: TCategory[] = collection === "men" ? MEN_BOTTOM_CATEGORIES : WOMEN_BOTTOM_CATEGORIES;

    const topProductsAll: TProduct[] = collection === "men" ? MEN_TOP_PRODUCTS : WOMEN_TOP_PRODUCTS;
    const bottomProductsAll: TProduct[] = collection === "men" ? MEN_BOTTOM_PRODUCTS : WOMEN_BOTTOM_PRODUCTS;

    const [topFacetTab, setTopFacetTab] = useState<TFacetTab>("type");
    const [bottomFacetTab, setBottomFacetTab] = useState<TFacetTab>("type");

    // Type is REQUIRED (never "all")
    const [selectedTopTypeId, setSelectedTopTypeId] = useState<string>(MEN_TOP_CATEGORIES[0]?.id ?? "");
    const [selectedBottomTypeId, setSelectedBottomTypeId] = useState<string>(MEN_BOTTOM_CATEGORIES[0]?.id ?? "");

    // Brand + Colour are OPTIONAL ("all" means: no filter applied)
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

    // URL -> state (initial load + back/forward)
    useEffect(() => {
        function applyFromUrl(): void {
            isSyncingFromUrlRef.current = true;

            const params = new URLSearchParams(window.location.search);

            const nextCollectionParam = getParam(params, "collection");
            const nextCollection: TCollection = nextCollectionParam === "women" ? "women" : "men";

            const nextTopCategories: TCategory[] =
                nextCollection === "men" ? MEN_TOP_CATEGORIES : WOMEN_TOP_CATEGORIES;

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

            // Type is REQUIRED: if missing/invalid, fall back to first category
            const nextTopTypeId: string =
                urlTopType && nextTopCategories.some((c: TCategory) => c.id === urlTopType)
                    ? urlTopType
                    : nextTopCategories[0]?.id ?? "";

            const nextBottomTypeId: string =
                urlBottomType && nextBottomCategories.some((c: TCategory) => c.id === urlBottomType)
                    ? urlBottomType
                    : nextBottomCategories[0]?.id ?? "";

            // Optional filters: missing => ALL (no filter)
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

            // Only reset product picks if collection changed (filters shouldn't nuke selection)
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

        return () => {
            window.removeEventListener("popstate", onPopState);
        };
    }, [sizeOptions]);

    // State -> URL (address bar stays in sync)
    useEffect(() => {
        if (isSyncingFromUrlRef.current) {
            return;
        }

        const params = new URLSearchParams(window.location.search);

        params.set("collection", collection);
        params.set("showTop", filters.top ? "1" : "0");
        params.set("showBottom", filters.bottom ? "1" : "0");

        params.set("topTab", topFacetTab);
        params.set("bottomTab", bottomFacetTab);

        // Type is REQUIRED: always present
        params.set("topType", selectedTopTypeId);
        params.set("bottomType", selectedBottomTypeId);

        // Brand optional
        if (selectedTopBrand !== ALL) {
            params.set("topBrand", selectedTopBrand);
        } else {
            params.delete("topBrand");
        }

        if (selectedBottomBrand !== ALL) {
            params.set("bottomBrand", selectedBottomBrand);
        } else {
            params.delete("bottomBrand");
        }

        // Colour optional
        if (selectedTopColour !== ALL) {
            params.set("topColour", selectedTopColour);
        } else {
            params.delete("topColour");
        }

        if (selectedBottomColour !== ALL) {
            params.set("bottomColour", selectedBottomColour);
        } else {
            params.delete("bottomColour");
        }

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
        selectedBottomColour
    ]);

    const selectedTop: TProduct | undefined = useMemo(() => {
        return topProductsAll.find((p: TProduct) => p.id === selectedTopProductId);
    }, [topProductsAll, selectedTopProductId]);

    const selectedBottom: TProduct | undefined = useMemo(() => {
        return bottomProductsAll.find((p: TProduct) => p.id === selectedBottomProductId);
    }, [bottomProductsAll, selectedBottomProductId]);

    const isComplete: boolean = filters.top && filters.bottom;
    const visibleSidePanelsCount: number = Number(filters.top) + Number(filters.bottom);

    function getCheckboxIcon(isChecked: boolean): string {
        return isChecked ? "✓" : "○";
    }

    function handleToggleFilter(key: keyof TFilters): void {
        setFilters((prev: TFilters) => {
            const next: TFilters = { ...prev, [key]: !prev[key] };

            if (!next.top && !next.bottom) {
                return prev;
            }

            return next;
        });
    }

    function handleSetComplete(): void {
        setFilters({ top: true, bottom: true });
    }

    function handleSetCollection(next: TCollection): void {
        if (next === collection) {
            return;
        }

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

    const panelsClassName: string =
        "CreateOutfit__Panels" +
        (visibleSidePanelsCount === 0
            ? " CreateOutfit__Panels--NoSides"
            : visibleSidePanelsCount === 1
                ? " CreateOutfit__Panels--OneSide"
                : "");

    const previewSplitClassName: string =
        "CreateOutfit__Panels__Preview__Stage__Split" +
        (Number(filters.top) + Number(filters.bottom) === 1
            ? " CreateOutfit__Panels__Preview__Stage__Split--Single"
            : "");

    const topTypeLabel: string =
        topCategories.find((c: TCategory) => c.id === selectedTopTypeId)?.label ?? "Type";

    const bottomTypeLabel: string =
        bottomCategories.find((c: TCategory) => c.id === selectedBottomTypeId)?.label ?? "Type";

    function renderActiveFilters(args: {
        ariaLabel: string;
        typeLabel: string;
        brandValue: string;
        onClearBrand: () => void;
        colourValue: string;
        onClearColour: () => void;
    }) {
        const showBrand: boolean = args.brandValue !== ALL;
        const showColour: boolean = args.colourValue !== ALL;

        return (
            <div className="CreateOutfit__Panels__SidePanel__ActiveFilters" aria-label={args.ariaLabel}>
                {/* Type is mandatory: show it, but no "remove" */}
                <div
                    className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip CreateOutfit__Panels__SidePanel__ActiveFilters__Chip--Locked"
                    aria-label={`Type ${args.typeLabel}`}
                >
                    <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Label">
                        Type:
                    </span>
                    <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Value">
                        {args.typeLabel}
                    </span>
                </div>

                {showBrand ? (
                    <div className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip" aria-label={`Brand ${args.brandValue}`}>
                        <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Label">
                            Brand:
                        </span>
                        <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Value">
                            {args.brandValue}
                        </span>
                        <button
                            type="button"
                            className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__X"
                            onClick={args.onClearBrand}
                            aria-label={`Remove Brand filter ${args.brandValue}`}
                        >
                            ×
                        </button>
                    </div>
                ) : null}

                {showColour ? (
                    <div className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip" aria-label={`Colour ${args.colourValue}`}>
                        <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Label">
                            Colour:
                        </span>
                        <span className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__Value">
                            {args.colourValue}
                        </span>
                        <button
                            type="button"
                            className="CreateOutfit__Panels__SidePanel__ActiveFilters__Chip__X"
                            onClick={args.onClearColour}
                            aria-label={`Remove Colour filter ${args.colourValue}`}
                        >
                            ×
                        </button>
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <div className="CreateOutfit">
            <ClothingBanner
                title="CREATE YOUR FIT"
                subtitle="CHOOSE A TOP AND BOTTOM"
                img_src={collection === "men" ? men_banner : women_banner}
            />
            <CircleLogo />

            <div className="CreateOutfit__Inner">
                <header className="CreateOutfit__Header">
                    <div className="CreateOutfit__Header__Left">
                        <h1 className="CreateOutfit__Header__Left__Title">Create your fit</h1>
                        <p className="CreateOutfit__Header__Left__Subtitle">
                            Choose a top and bottom. We’ll match brands and pricing.
                        </p>

                        <div className="CreateOutfit__Header__Left__CollectionToggle" aria-label="Choose collection">
                            <button
                                type="button"
                                className={
                                    "CreateOutfit__Header__Left__CollectionToggle__Button" +
                                    (collection === "men"
                                        ? " CreateOutfit__Header__Left__CollectionToggle__Button--Active"
                                        : "")
                                }
                                onClick={() => handleSetCollection("men")}
                            >
                                Men
                            </button>
                            <button
                                type="button"
                                className={
                                    "CreateOutfit__Header__Left__CollectionToggle__Button" +
                                    (collection === "women"
                                        ? " CreateOutfit__Header__Left__CollectionToggle__Button--Active"
                                        : "")
                                }
                                onClick={() => handleSetCollection("women")}
                            >
                                Women
                            </button>
                        </div>
                    </div>

                    <div className="CreateOutfit__Header__Right">
                        <div className="CreateOutfit__Header__Right__Steps" aria-label="Outfit filters">
                            <button
                                type="button"
                                className={
                                    "CreateOutfit__Header__Right__Steps__Step" +
                                    (filters.top
                                        ? " CreateOutfit__Header__Right__Steps__Step--Checked"
                                        : " CreateOutfit__Header__Right__Steps__Step--Unchecked")
                                }
                                onClick={() => handleToggleFilter("top")}
                                aria-pressed={filters.top}
                            >
                                <span className="CreateOutfit__Header__Right__Steps__Step__Label">Top</span>
                                <span className="CreateOutfit__Header__Right__Steps__Step__Icon" aria-hidden="true">
                                    {getCheckboxIcon(filters.top)}
                                </span>
                            </button>

                            <button
                                type="button"
                                className={
                                    "CreateOutfit__Header__Right__Steps__Step" +
                                    (filters.bottom
                                        ? " CreateOutfit__Header__Right__Steps__Step--Checked"
                                        : " CreateOutfit__Header__Right__Steps__Step--Unchecked")
                                }
                                onClick={() => handleToggleFilter("bottom")}
                                aria-pressed={filters.bottom}
                            >
                                <span className="CreateOutfit__Header__Right__Steps__Step__Label">Bottom</span>
                                <span className="CreateOutfit__Header__Right__Steps__Step__Icon" aria-hidden="true">
                                    {getCheckboxIcon(filters.bottom)}
                                </span>
                            </button>

                            <button
                                type="button"
                                className={
                                    "CreateOutfit__Header__Right__Steps__Step" +
                                    (isComplete
                                        ? " CreateOutfit__Header__Right__Steps__Step--Checked"
                                        : " CreateOutfit__Header__Right__Steps__Step--Unchecked")
                                }
                                onClick={handleSetComplete}
                                aria-pressed={isComplete}
                            >
                                <span className="CreateOutfit__Header__Right__Steps__Step__Label">Complete</span>
                                <span className="CreateOutfit__Header__Right__Steps__Step__Icon" aria-hidden="true">
                                    {getCheckboxIcon(isComplete)}
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className={panelsClassName}>
                    {filters.top ? (
                        <section className="CreateOutfit__Panels__SidePanel" aria-label="Choose your top">
                            <FacetTabsHeader
                                activeTab={topFacetTab}
                                onTabChange={setTopFacetTab}
                                ariaLabel="Top facets"
                            />

                            {renderActiveFilters({
                                ariaLabel: "Top active filters",
                                typeLabel: topTypeLabel,
                                brandValue: selectedTopBrand,
                                onClearBrand: () => setSelectedTopBrand(ALL),
                                colourValue: selectedTopColour,
                                onClearColour: () => setSelectedTopColour(ALL)
                            })}

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
                        </section>
                    ) : null}

                    <section className="CreateOutfit__Panels__Preview" aria-label="Outfit preview">
                        <div className="CreateOutfit__Panels__Preview__Stage">
                            <div className="CreateOutfit__Panels__Preview__Stage__Mannequin" aria-hidden="true" />

                            <div className={previewSplitClassName}>
                                {filters.top ? (
                                    <div className="CreateOutfit__Panels__Preview__Stage__Split__Slot CreateOutfit__Panels__Preview__Stage__Split__Slot--Top">
                                        {selectedTop ? (
                                            <img
                                                className="CreateOutfit__Panels__Preview__Stage__Split__Slot__Img"
                                                src={selectedTop.imageUrl}
                                                alt={`${selectedTop.name} preview`}
                                            />
                                        ) : (
                                            <div className="CreateOutfit__Panels__Preview__Stage__Split__Slot__Empty">
                                                Select a top
                                            </div>
                                        )}
                                    </div>
                                ) : null}

                                {filters.bottom ? (
                                    <div className="CreateOutfit__Panels__Preview__Stage__Split__Slot CreateOutfit__Panels__Preview__Stage__Split__Slot--Bottom">
                                        {selectedBottom ? (
                                            <img
                                                className="CreateOutfit__Panels__Preview__Stage__Split__Slot__Img"
                                                src={selectedBottom.imageUrl}
                                                alt={`${selectedBottom.name} preview`}
                                            />
                                        ) : (
                                            <div className="CreateOutfit__Panels__Preview__Stage__Split__Slot__Empty">
                                                Select a bottom
                                            </div>
                                        )}
                                    </div>
                                ) : null}
                            </div>

                            <div className="CreateOutfit__Panels__Preview__Size">
                                <label className="CreateOutfit__Panels__Preview__Size__Label" htmlFor="outfit-size">
                                    Size
                                </label>
                                <select
                                    id="outfit-size"
                                    className="CreateOutfit__Panels__Preview__Size__Select"
                                    value={size}
                                    onChange={handleSizeChange}
                                >
                                    {sizeOptions.map((opt: string) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {filters.bottom ? (
                        <section className="CreateOutfit__Panels__SidePanel" aria-label="Choose your bottom">
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
                                onClearColour: () => setSelectedBottomColour(ALL)
                            })}

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
                        </section>
                    ) : null}
                </main>

                <footer className="CreateOutfit__Actions" aria-label="Outfit actions">
                    <button type="button" className="CreateOutfit__Actions__Button CreateOutfit__Actions__Button--Ghost">
                        <span className="CreateOutfit__Actions__Button__Icon" aria-hidden="true">♡</span>
                        Save to favourites
                    </button>

                    <button type="button" className="CreateOutfit__Actions__Button CreateOutfit__Actions__Button--Primary">
                        Find the best match
                    </button>

                    <button
                        type="button"
                        className="CreateOutfit__Actions__Button CreateOutfit__Actions__Button--Ghost"
                        onClick={handleStartOver}
                    >
                        Start over
                    </button>
                </footer>
            </div>
        </div>
    );
}
