import React, { useMemo, useState } from "react";

type Gender = "men" | "women" | "unisex";
type ClothingType = "hoodie" | "shorts" | "tracksuit" | "tshirt" | "jacket";
type Color = "black" | "cream" | "green" | "blue" | "pink";

type SortKey = "relevance" | "priceLow" | "priceHigh" | "nameAZ";

type Product = {
    id: string;
    name: string;
    price: number;
    gender: Gender;
    type: ClothingType;
    color: Color;
    imageUrl: string;
    isNew?: boolean;
    isLowStock?: boolean;
};

type ProductCardProps = {
    product: Product;
    onView: (product: Product) => void;
    onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onView, onAddToCart }: ProductCardProps) {
    return (
        <article className="grid overflow-hidden rounded-[1.55rem] border border-black/5 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[2px] hover:border-black/10 hover:shadow-[0_18px_46px_rgba(0,0,0,0.14)] focus-within:outline-none focus-within:ring-4 focus-within:ring-[rgba(189,255,0,0.55)] max-[480px]:grid-cols-1 grid-cols-[160px_minmax(0,1fr)]">
            <div className="relative bg-[radial-gradient(240px_140px_at_18%_18%,rgba(189,255,0,0.18),rgba(189,255,0,0)_65%),linear-gradient(180deg,rgba(255,242,227,0.55),rgba(255,255,255,0.92))]">
                <img
                    className="block h-full w-full min-h-[160px] object-cover max-[480px]:min-h-[220px]"
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                />
                {(product.isNew || product.isLowStock) && (
                    <div className="absolute left-3.5 top-3.5 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3.5 py-2 text-black/70 shadow-[0_12px_32px_rgba(0,0,0,0.09)] backdrop-blur-[10px] font-black tracking-[-0.01em]">
                        <span className="h-[0.55rem] w-[0.55rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
                        <span className="text-[0.9rem]">{product.isNew ? "New drop" : "Low stock"}</span>
                    </div>
                )}
            </div>

            <div className="flex min-w-0 flex-col justify-between p-4">
                <div className="">
                    <div className="mb-2 flex flex-wrap gap-2">
                        <span className="inline-flex h-[26px] items-center rounded-full border border-black/10 bg-black/[0.04] px-3 text-[0.86rem] font-black text-black/70 capitalize">
                            {product.gender}
                        </span>
                        <span className="inline-flex h-[26px] items-center rounded-full border border-black/10 bg-black/[0.04] px-3 text-[0.86rem] font-black text-black/70 capitalize">
                            {product.type}
                        </span>
                        <span className="inline-flex h-[26px] items-center rounded-full border border-black/10 bg-black/[0.04] px-3 text-[0.86rem] font-black text-black/70 capitalize">
                            {product.color}
                        </span>
                    </div>

                    <h3 className="m-0 text-[1.15rem] font-black leading-snug tracking-[-0.02em]">
                        {product.name}
                    </h3>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="m-0 whitespace-nowrap text-[1.25rem] font-black tracking-[-0.02em]">
                        £{product.price.toFixed(2)}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            className="h-11 rounded-[1.05rem] border border-black/10 bg-white/90 px-4 font-black tracking-[-0.01em] transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                            onClick={() => onView(product)}
                        >
                            View product
                        </button>

                        <button
                            type="button"
                            className="h-11 rounded-[1.05rem] border border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.58),rgba(100,255,155,0.22))] px-4 font-black tracking-[-0.01em] transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                            onClick={() => onAddToCart(product)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

const MOCK_PRODUCTS: Product[] = [
    {
        id: "p-001",
        name: "Aura Hoodie (Cream)",
        price: 64.99,
        gender: "unisex",
        type: "hoodie",
        color: "cream",
        imageUrl: "https://picsum.photos/seed/aura-hoodie/720/720",
        isNew: true
    },
    {
        id: "p-002",
        name: "Core Track Jacket (Black)",
        price: 79.99,
        gender: "men",
        type: "jacket",
        color: "black",
        imageUrl: "https://picsum.photos/seed/core-jacket/720/720"
    },
    {
        id: "p-003",
        name: "Mint Sprint Shorts",
        price: 34.99,
        gender: "women",
        type: "shorts",
        color: "green",
        imageUrl: "https://picsum.photos/seed/mint-shorts/720/720",
        isLowStock: true
    },
    {
        id: "p-004",
        name: "Studio Tee (Blue)",
        price: 24.99,
        gender: "unisex",
        type: "tshirt",
        color: "blue",
        imageUrl: "https://picsum.photos/seed/studio-tee/720/720"
    },
    {
        id: "p-005",
        name: "City Tracksuit Set (Black)",
        price: 119.0,
        gender: "men",
        type: "tracksuit",
        color: "black",
        imageUrl: "https://picsum.photos/seed/city-tracksuit/720/720"
    },
    {
        id: "p-006",
        name: "Cloud Hoodie (Pink)",
        price: 69.5,
        gender: "women",
        type: "hoodie",
        color: "pink",
        imageUrl: "https://picsum.photos/seed/cloud-hoodie/720/720",
        isNew: true
    },
    {
        id: "p-007",
        name: "Tempo Shorts (Cream)",
        price: 31.99,
        gender: "men",
        type: "shorts",
        color: "cream",
        imageUrl: "https://picsum.photos/seed/tempo-shorts/720/720"
    },
    {
        id: "p-008",
        name: "Arc Track Jacket (Green)",
        price: 84.99,
        gender: "women",
        type: "jacket",
        color: "green",
        imageUrl: "https://picsum.photos/seed/arc-jacket/720/720",
        isLowStock: true
    },
    {
        id: "p-009",
        name: "Everyday Tee (Black)",
        price: 22.0,
        gender: "unisex",
        type: "tshirt",
        color: "black",
        imageUrl: "https://picsum.photos/seed/everyday-tee/720/720"
    },
    {
        id: "p-010",
        name: "Commuter Tracksuit (Blue)",
        price: 129.99,
        gender: "unisex",
        type: "tracksuit",
        color: "blue",
        imageUrl: "https://picsum.photos/seed/commuter-tracksuit/720/720"
    }
];

type SearchPageProps = {
    initialQuery?: string;
};

export default function SearchPage({ initialQuery = "hoodie" }: SearchPageProps) {
    const [queryInput, setQueryInput] = useState<string>(initialQuery);
    const [query, setQuery] = useState<string>(initialQuery);

    const [gender, setGender] = useState<"all" | Gender>("all");
    const [types, setTypes] = useState<Set<ClothingType>>(new Set());
    const [colors, setColors] = useState<Set<Color>>(new Set());

    const [sort, setSort] = useState<SortKey>("relevance");

    const activeFilterCount =
        (gender !== "all" ? 1 : 0) + (types.size > 0 ? 1 : 0) + (colors.size > 0 ? 1 : 0);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();

        let filtered = MOCK_PRODUCTS.filter((p) => {
            const matchesQuery = q.length === 0 ? true : p.name.toLowerCase().includes(q);
            const matchesGender = gender === "all" ? true : p.gender === gender;
            const matchesType = types.size === 0 ? true : types.has(p.type);
            const matchesColor = colors.size === 0 ? true : colors.has(p.color);

            return matchesQuery && matchesGender && matchesType && matchesColor;
        });

        if (sort === "priceLow") {
            filtered = filtered.slice().sort((a, b) => a.price - b.price);
        }

        if (sort === "priceHigh") {
            filtered = filtered.slice().sort((a, b) => b.price - a.price);
        }

        if (sort === "nameAZ") {
            filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    }, [query, gender, types, colors, sort]);

    function toggleSetValue<T>(setValue: React.Dispatch<React.SetStateAction<Set<T>>>, value: T) {
        setValue((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            } else {
                next.add(value);
            }
            return next;
        });
    }

    function clearFilters() {
        setGender("all");
        setTypes(new Set());
        setColors(new Set());
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setQuery(queryInput);
    }

    function onView(product: Product) {
        // Placeholder: wire to router later
        // eslint-disable-next-line no-console
        console.log("View product:", product.id);
    }

    function onAddToCart(product: Product) {
        // Placeholder: wire to cart later
        // eslint-disable-next-line no-console
        console.log("Add to cart:", product.id);
    }

    return (
        <main className="min-h-screen px-5 pb-16 pt-9 text-[#141414] max-[600px]:px-4 max-[600px]:pb-12 max-[600px]:pt-6 bg-[radial-gradient(900px_420px_at_18%_10%,rgba(189,255,0,0.18),rgba(189,255,0,0)_60%),radial-gradient(860px_520px_at_86%_14%,rgba(255,242,227,0.95),rgba(255,242,227,0)_70%),#FFF7EE]">
            <div className="mx-auto max-w-[70rem] pt-5">
                <header className="mb-5">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-black/70 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-[10px] font-black tracking-[-0.01em]">
                        <span className="h-[0.55rem] w-[0.55rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
                        Search results
                    </div>

                    <h1 className="m-0 mb-4 text-[2rem] font-black leading-[1.1] tracking-[-0.03em] max-[600px]:text-[1.65rem]">
                        Showing results for{" "}
                        <span className="inline-block rounded-[0.65rem] border border-black/10 bg-[rgba(189,255,0,0.20)] px-2 py-[0.05rem] font-black">
                            “{query}”
                        </span>
                    </h1>

                    <form className="flex items-center gap-3 max-[600px]:flex-col max-[600px]:items-stretch" onSubmit={onSubmit} role="search" aria-label="Search products">
                        <div className="flex h-14 flex-1 items-center gap-2 rounded-[1.35rem] border border-black/5 bg-white/80 px-4 shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]">
                            <span className="select-none font-black text-black/55" aria-hidden="true">
                                ⌕
                            </span>
                            <input
                                className="h-full w-full flex-1 border-0 bg-transparent font-extrabold tracking-[-0.01em] text-black/80 placeholder:font-extrabold placeholder:text-black/40 focus:outline-none"
                                value={queryInput}
                                onChange={(e) => setQueryInput(e.target.value)}
                                placeholder="Search hoodies, tracksuits, tees…"
                                aria-label="Search query"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-14 rounded-[1.35rem] border border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.62),rgba(100,255,155,0.24))] px-5 font-black tracking-[-0.01em] shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(0,0,0,0.13)] hover:saturate-105 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                        >
                            Search
                        </button>
                    </form>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/75 px-4 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                            <span className="h-[0.6rem] w-[0.6rem] rounded-full bg-[#64ff9b] shadow-[0_0_0_6px_rgba(100,255,155,0.18)]" aria-hidden="true" />
                            <span className="font-black tracking-[-0.01em] text-black/80">{results.length} products</span>
                            {activeFilterCount > 0 && (
                                <span className="font-extrabold text-black/55">· {activeFilterCount} filter group(s) active</span>
                            )}
                        </div>

                        <label className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white/75 px-3 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                            <span className="font-black text-black/70">Sort</span>
                            <select
                                className="h-[38px] rounded-[0.9rem] border border-black/10 bg-white/90 px-3 font-extrabold text-black/80 focus:outline-none focus:ring-4 focus:ring-[rgba(189,255,0,0.55)]"
                                value={sort}
                                onChange={(e) => setSort(e.target.value as SortKey)}
                            >
                                <option value="relevance">Relevance</option>
                                <option value="priceLow">Price: Low → High</option>
                                <option value="priceHigh">Price: High → Low</option>
                                <option value="nameAZ">Name: A → Z</option>
                            </select>
                        </label>
                    </div>
                </header>

                <section className="grid items-start gap-5 max-[820px]:grid-cols-1 grid-cols-[minmax(0,0.95fr)_minmax(0,2.05fr)]">
                    <aside className="min-w-0" aria-label="Search filters">
                        <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <h2 className="m-0 font-black tracking-[-0.02em]">Filters</h2>

                                <button
                                    type="button"
                                    className="h-[38px] rounded-full border border-black/10 bg-white/85 px-4 font-black transition-[transform,box-shadow,opacity] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] disabled:cursor-not-allowed disabled:opacity-55"
                                    onClick={clearFilters}
                                    disabled={activeFilterCount === 0}
                                >
                                    Clear
                                </button>
                            </div>

                            <div className="mb-3 rounded-[1.35rem] border border-black/5 bg-white/70 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                <div className="mb-3 flex items-baseline justify-between gap-4">
                                    <h3 className="m-0 text-base font-black tracking-[-0.01em]">Gender</h3>
                                    <span className="text-[0.92rem] font-extrabold text-black/55">Pick one</span>
                                </div>

                                <div className="grid grid-cols-4 gap-2 max-[600px]:grid-cols-2" role="radiogroup" aria-label="Gender filter">
                                    {(["all", "men", "women", "unisex"] as const).map((g) => (
                                        <button
                                            key={g}
                                            type="button"
                                            className={`h-10 rounded-[0.95rem] border border-black/10 px-3 font-black tracking-[-0.01em] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[1px] hover:border-black/20 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]
                                            ${
                                                gender === g
                                                    ? "bg-[rgba(189,255,0,0.16)] shadow-[0_16px_40px_rgba(0,0,0,0.12)] ring-4 ring-[rgba(189,255,0,0.14)] border-black/20"
                                                    : "bg-white/85"
                                            }`}
                                            role="radio"
                                            aria-checked={gender === g}
                                            onClick={() => setGender(g)}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3 rounded-[1.35rem] border border-black/5 bg-white/70 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                <div className="mb-3 flex items-baseline justify-between gap-4">
                                    <h3 className="m-0 text-base font-black tracking-[-0.01em]">Type</h3>
                                    <span className="text-[0.92rem] font-extrabold text-black/55">Multi-select</span>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    {(["hoodie", "shorts", "tracksuit", "tshirt", "jacket"] as ClothingType[]).map((t) => (
                                        <label
                                            key={t}
                                            className="inline-flex cursor-pointer items-center gap-2 rounded-[1.05rem] border border-black/10 bg-black/[0.03] px-3 py-2 transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 accent-[#BDFF00] focus:outline-none focus:ring-4 focus:ring-[rgba(189,255,0,0.55)]"
                                                checked={types.has(t)}
                                                onChange={() => toggleSetValue(setTypes, t)}
                                            />
                                            <span className="font-extrabold tracking-[-0.01em] text-black/75 capitalize">{t}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4 rounded-[1.35rem] border border-black/5 bg-white/70 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                <div className="mb-3 flex items-baseline justify-between gap-4">
                                    <h3 className="m-0 text-base font-black tracking-[-0.01em]">Color</h3>
                                    <span className="text-[0.92rem] font-extrabold text-black/55">Multi-select</span>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    {(["black", "cream", "green", "blue", "pink"] as Color[]).map((c) => (
                                        <label
                                            key={c}
                                            className="inline-flex cursor-pointer items-center gap-2 rounded-[1.05rem] border border-black/10 bg-black/[0.03] px-3 py-2 transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 accent-[#BDFF00] focus:outline-none focus:ring-4 focus:ring-[rgba(189,255,0,0.55)]"
                                                checked={colors.has(c)}
                                                onChange={() => toggleSetValue(setColors, c)}
                                            />
                                            <span
                                                className="h-[14px] w-[14px] rounded-full border border-black/10 shadow-[0_8px_18px_rgba(0,0,0,0.10)] data-[color=black]:bg-[#141414] data-[color=cream]:bg-[#FFF2E3] data-[color=green]:bg-[#64ff9b] data-[color=blue]:bg-[#6aa7ff] data-[color=pink]:bg-[#ff73c6]"
                                                data-color={c}
                                                aria-hidden="true"
                                            />
                                            <span className="font-extrabold tracking-[-0.01em] text-black/75 capitalize">{c}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="inline-flex w-full items-center gap-2 rounded-[1.25rem] border border-black/5 bg-white/75 px-4 py-3 font-extrabold text-black/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                                <span className="inline-flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.25)] font-black">
                                    ✓
                                </span>
                                Tip: combine Type + Color for “tight” results.
                            </div>
                        </div>
                    </aside>

                    <div className="min-w-0" aria-label="Search results list">
                        {results.length === 0 ? (
                            <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 text-left shadow-[0_14px_34px_rgba(0,0,0,0.10)]">
                                <h2 className="m-0 mb-2 text-[1.35rem] font-black tracking-[-0.02em]">No matches</h2>
                                <p className="m-0 mb-4 font-extrabold leading-relaxed text-black/70">
                                    Try a different search term, or clear a couple of filters.
                                </p>
                                <button
                                    type="button"
                                    className="h-12 rounded-[1.1rem] border border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.62),rgba(100,255,155,0.24))] px-4 font-black tracking-[-0.01em] shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(0,0,0,0.13)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                                    onClick={clearFilters}
                                >
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-4 max-[820px]:grid-cols-1">
                                {results.map((p) => (
                                    <ProductCard key={p.id} product={p} onView={onView} onAddToCart={onAddToCart} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
