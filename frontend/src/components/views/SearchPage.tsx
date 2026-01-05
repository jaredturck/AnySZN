import React, { useMemo, useState } from "react";
import "../../styles/SearchPage.scss";

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
        <article className="productCard">
            <div className="productCard__media">
                <img
                    className="productCard__img"
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                />
                {(product.isNew || product.isLowStock) && (
                    <div className="productCard__badge">
                        <span className="productCard__badgeDot" />
                        <span className="productCard__badgeText">
                            {product.isNew ? "New drop" : "Low stock"}
                        </span>
                    </div>
                )}
            </div>

            <div className="productCard__body">
                <div className="productCard__top">
                    <div className="productCard__meta">
                        <span className="productCard__pill">{product.gender}</span>
                        <span className="productCard__pill">{product.type}</span>
                        <span className="productCard__pill">{product.color}</span>
                    </div>

                    <h3 className="productCard__title">{product.name}</h3>
                </div>

                <div className="productCard__bottom">
                    <p className="productCard__price">£{product.price.toFixed(2)}</p>

                    <div className="productCard__actions">
                        <button
                            type="button"
                            className="productCard__btn productCard__btn--ghost"
                            onClick={() => onView(product)}
                        >
                            View product
                        </button>

                        <button
                            type="button"
                            className="productCard__btn productCard__btn--primary"
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
        isNew: true,
    },
    {
        id: "p-002",
        name: "Core Track Jacket (Black)",
        price: 79.99,
        gender: "men",
        type: "jacket",
        color: "black",
        imageUrl: "https://picsum.photos/seed/core-jacket/720/720",
    },
    {
        id: "p-003",
        name: "Mint Sprint Shorts",
        price: 34.99,
        gender: "women",
        type: "shorts",
        color: "green",
        imageUrl: "https://picsum.photos/seed/mint-shorts/720/720",
        isLowStock: true,
    },
    {
        id: "p-004",
        name: "Studio Tee (Blue)",
        price: 24.99,
        gender: "unisex",
        type: "tshirt",
        color: "blue",
        imageUrl: "https://picsum.photos/seed/studio-tee/720/720",
    },
    {
        id: "p-005",
        name: "City Tracksuit Set (Black)",
        price: 119.0,
        gender: "men",
        type: "tracksuit",
        color: "black",
        imageUrl: "https://picsum.photos/seed/city-tracksuit/720/720",
    },
    {
        id: "p-006",
        name: "Cloud Hoodie (Pink)",
        price: 69.5,
        gender: "women",
        type: "hoodie",
        color: "pink",
        imageUrl: "https://picsum.photos/seed/cloud-hoodie/720/720",
        isNew: true,
    },
    {
        id: "p-007",
        name: "Tempo Shorts (Cream)",
        price: 31.99,
        gender: "men",
        type: "shorts",
        color: "cream",
        imageUrl: "https://picsum.photos/seed/tempo-shorts/720/720",
    },
    {
        id: "p-008",
        name: "Arc Track Jacket (Green)",
        price: 84.99,
        gender: "women",
        type: "jacket",
        color: "green",
        imageUrl: "https://picsum.photos/seed/arc-jacket/720/720",
        isLowStock: true,
    },
    {
        id: "p-009",
        name: "Everyday Tee (Black)",
        price: 22.0,
        gender: "unisex",
        type: "tshirt",
        color: "black",
        imageUrl: "https://picsum.photos/seed/everyday-tee/720/720",
    },
    {
        id: "p-010",
        name: "Commuter Tracksuit (Blue)",
        price: 129.99,
        gender: "unisex",
        type: "tracksuit",
        color: "blue",
        imageUrl: "https://picsum.photos/seed/commuter-tracksuit/720/720",
    },
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
        <main className="searchPage">
            <div className="searchPage__wrap">
                <header className="searchPage__header">
                    <div className="searchPage__kicker">Search results</div>
                    <h1 className="searchPage__title">
                        Showing results for <span className="searchPage__query">“{query}”</span>
                    </h1>

                    <form className="searchBar" onSubmit={onSubmit} role="search" aria-label="Search products">
                        <div className="searchBar__inputWrap">
                            <span className="searchBar__icon" aria-hidden="true">⌕</span>
                            <input
                                className="searchBar__input"
                                value={queryInput}
                                onChange={(e) => setQueryInput(e.target.value)}
                                placeholder="Search hoodies, tracksuits, tees…"
                                aria-label="Search query"
                            />
                        </div>

                        <button type="submit" className="searchBar__btn">
                            Search
                        </button>
                    </form>

                    <div className="searchPage__summary">
                        <div className="searchPage__count">
                            <span className="searchPage__countDot" aria-hidden="true" />
                            <span className="searchPage__countText">{results.length} products</span>
                            {activeFilterCount > 0 && (
                                <span className="searchPage__countHint">· {activeFilterCount} filter group(s) active</span>
                            )}
                        </div>

                        <label className="searchPage__sort">
                            <span className="searchPage__sortLabel">Sort</span>
                            <select
                                className="searchPage__sortSelect"
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

                <section className="searchPage__grid">
                    <aside className="searchFilters" aria-label="Search filters">
                        <div className="searchFilters__card">
                            <div className="searchFilters__top">
                                <h2 className="searchFilters__title">Filters</h2>

                                <button
                                    type="button"
                                    className="searchFilters__clear"
                                    onClick={clearFilters}
                                    disabled={activeFilterCount === 0}
                                >
                                    Clear
                                </button>
                            </div>

                            <div className="searchFilters__group">
                                <div className="searchFilters__labelRow">
                                    <h3 className="searchFilters__label">Gender</h3>
                                    <span className="searchFilters__hint">Pick one</span>
                                </div>

                                <div className="searchFilters__segmented" role="radiogroup" aria-label="Gender filter">
                                    {(["all", "men", "women", "unisex"] as const).map((g) => (
                                        <button
                                            key={g}
                                            type="button"
                                            className={`searchFilters__segBtn ${gender === g ? "searchFilters__segBtn--active" : ""}`}
                                            role="radio"
                                            aria-checked={gender === g}
                                            onClick={() => setGender(g)}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="searchFilters__group">
                                <div className="searchFilters__labelRow">
                                    <h3 className="searchFilters__label">Type</h3>
                                    <span className="searchFilters__hint">Multi-select</span>
                                </div>

                                <div className="searchFilters__checks">
                                    {(["hoodie", "shorts", "tracksuit", "tshirt", "jacket"] as ClothingType[]).map((t) => (
                                        <label key={t} className="searchFilters__check">
                                            <input
                                                type="checkbox"
                                                checked={types.has(t)}
                                                onChange={() => toggleSetValue(setTypes, t)}
                                            />
                                            <span className="searchFilters__checkText">{t}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="searchFilters__group">
                                <div className="searchFilters__labelRow">
                                    <h3 className="searchFilters__label">Color</h3>
                                    <span className="searchFilters__hint">Multi-select</span>
                                </div>

                                <div className="searchFilters__checks searchFilters__checks--colors">
                                    {(["black", "cream", "green", "blue", "pink"] as Color[]).map((c) => (
                                        <label key={c} className="searchFilters__check">
                                            <input
                                                type="checkbox"
                                                checked={colors.has(c)}
                                                onChange={() => toggleSetValue(setColors, c)}
                                            />
                                            <span className="searchFilters__swatch" data-color={c} aria-hidden="true" />
                                            <span className="searchFilters__checkText">{c}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="searchFilters__tip">
                                <span className="searchFilters__tipIcon">✓</span>
                                Tip: combine Type + Color for “tight” results.
                            </div>
                        </div>
                    </aside>

                    <div className="searchResults" aria-label="Search results list">
                        {results.length === 0 ? (
                            <div className="searchResults__empty">
                                <h2 className="searchResults__emptyTitle">No matches</h2>
                                <p className="searchResults__emptyText">
                                    Try a different search term, or clear a couple of filters.
                                </p>
                                <button type="button" className="searchResults__emptyBtn" onClick={clearFilters}>
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="searchResults__grid">
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
