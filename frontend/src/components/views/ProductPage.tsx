import React, { useMemo, useState } from "react";

import productImg1 from "../../imgs/featured_products/mens_collection/Frame 31.png";
import productImg2 from "../../imgs/featured_products/mens_collection/Frame 31 (1).png";
import productImg3 from "../../imgs/featured_products/mens_collection/Frame 31 (2).png";
import productImg4 from "../../imgs/featured_products/mens_collection/Frame 31 (3).png";
import productImg5 from "../../imgs/featured_products/mens_collection/Frame 31 (4).png";
import productImg6 from "../../imgs/featured_products/mens_collection/Frame 31 (5).png";
import productImg7 from "../../imgs/featured_products/mens_collection/Frame 31 (6).png";
import productImg8 from "../../imgs/featured_products/mens_collection/Frame 31 (7).png";
import productImg9 from "../../imgs/featured_products/mens_collection/Frame 31 (8).png";
import productImg10 from "../../imgs/featured_products/mens_collection/Frame 31 (9).png";
import productImg11 from "../../imgs/featured_products/mens_collection/Frame 31 (10).png";
import productImg12 from "../../imgs/featured_products/mens_collection/Frame 31 (11).png";

type CurrencyCode = "GBP" | string;
type StockStatus = "in" | "low" | "out";

interface ProductImage {
    id: string;
    src: string;
    alt: string;
}

interface ProductColor {
    id: string;
    name: string;
    value: string;
}

interface ProductSize {
    id: string;
    label: "S" | "M" | "L" | "XL";
    disabled?: boolean;
}

interface ProductStock {
    status: StockStatus;
    label: string;
    hint?: string;
}

interface Product {
    id: string;
    brand: string;
    name: string;
    sku: string;
    tags: string[];
    price: number;
    currency: CurrencyCode;
    images: ProductImage[];
    stock: ProductStock;
    colors: ProductColor[];
    sizes: ProductSize[];
    description: string;
    fitNote?: string;
}

interface Recommendation {
    id: string;
    name: string;
    price: number;
    currency: CurrencyCode;
    image: ProductImage;
}

interface BreadcrumbItem {
    id: string;
    label: string;
    href?: string;
}

interface AddToCartPayload {
    productId: string;
    quantity: number;
    colorId?: string;
    sizeId?: string;
}

interface ProductPageProps {
    product?: Product;
    recommendations?: Recommendation[];
    breadcrumbs?: BreadcrumbItem[];
    onAddToCart?: (payload: AddToCartPayload) => void;
    onToggleFavorite?: (productId: string, isFavorite: boolean) => void;
}

const defaultProduct: Product = {
    id: "prod_yelirworld_windcheater",
    brand: "Yelirworld",
    name: "Windcheater Jacket",
    sku: "YLW-1142",
    tags: ["Lightweight"],
    price: 178,
    currency: "GBP",
    images: [
        { id: "img_1", src: productImg1, alt: "Product image 1" },
        { id: "img_2", src: productImg2, alt: "Product image 2" },
        { id: "img_3", src: productImg3, alt: "Product image 3" },
        { id: "img_4", src: productImg4, alt: "Product image 4" },
        { id: "img_5", src: productImg5, alt: "Product image 5" },
        { id: "img_6", src: productImg6, alt: "Product image 6" },
        { id: "img_7", src: productImg7, alt: "Product image 7" },
        { id: "img_8", src: productImg8, alt: "Product image 8" }
    ],
    stock: {
        status: "in",
        label: "In stock",
        hint: "Only 7 left"
    },
    colors: [
        { id: "col_orange", name: "Orange", value: "#FF7A00" },
        { id: "col_blue", name: "Blue", value: "#1E90FF" },
        { id: "col_black", name: "Black", value: "#111111" },
        { id: "col_white", name: "White", value: "#F2F2F2" },
        { id: "col_mint", name: "Mint", value: "#64ff9b" }
    ],
    sizes: [
        { id: "size_s", label: "S" },
        { id: "size_m", label: "M" },
        { id: "size_l", label: "L" },
        { id: "size_xl", label: "XL" }
    ],
    description:
        "Lightweight windcheater with a clean silhouette, soft-touch lining, and weather-ready finish. Designed for everyday layering—street-proof, not shouty.",
    fitNote: "True to size. If you’re between sizes, go up for a roomier fit."
};

const defaultRecommendations: Recommendation[] = [
    {
        id: "rec_1",
        name: "Tech Cargo Trousers",
        price: 154,
        currency: "GBP",
        image: { id: "rec_img_1", src: productImg9, alt: "Recommended product 1" }
    },
    {
        id: "rec_2",
        name: "Minimal Logo Tee",
        price: 72,
        currency: "GBP",
        image: { id: "rec_img_2", src: productImg10, alt: "Recommended product 2" }
    },
    {
        id: "rec_3",
        name: "Clean Runner Sneaker",
        price: 138,
        currency: "GBP",
        image: { id: "rec_img_3", src: productImg11, alt: "Recommended product 3" }
    },
    {
        id: "rec_4",
        name: "Soft Beanie",
        price: 28,
        currency: "GBP",
        image: { id: "rec_img_4", src: productImg12, alt: "Recommended product 4" }
    }
];

const defaultBreadcrumbs: BreadcrumbItem[] = [
    { id: "bc_home", label: "Home", href: "/" },
    { id: "bc_collection", label: "New Collection", href: "/collection/new" },
    { id: "bc_current", label: "Yelirworld Windcheater" }
];

function formatMoney(amount: number, currency: CurrencyCode): string {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency
    }).format(amount);
}

export default function ProductPage(props: ProductPageProps) {
    const product = props.product ?? defaultProduct;
    const recommendations = props.recommendations ?? defaultRecommendations;
    const breadcrumbs = props.breadcrumbs ?? defaultBreadcrumbs;

    const [selectedImageId, setSelectedImageId] = useState<string>(product.images[0]?.id ?? "");
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedColorId, setSelectedColorId] = useState<string>(product.colors[0]?.id ?? "");
    const [selectedSizeId, setSelectedSizeId] = useState<string>(
        product.sizes[1]?.id ?? product.sizes[0]?.id ?? ""
    );
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const selectedImage = useMemo(() => {
        return product.images.find((img) => img.id === selectedImageId) ?? product.images[0];
    }, [product.images, selectedImageId]);

    const stockClassName = useMemo(() => {
        const base =
            "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.06)]";

        if (product.stock.status === "out") {
            return `${base} [&>span:first-child]:bg-[rgba(255,59,48,0.92)] [&>span:first-child]:shadow-[0_0_0_6px_rgba(255,59,48,0.16)]`;
        }
        if (product.stock.status === "low") {
            return `${base} [&>span:first-child]:bg-[#BDFF00] [&>span:first-child]:shadow-[0_0_0_6px_rgba(189,255,0,0.18)]`;
        }
        return `${base} [&>span:first-child]:bg-[#64ff9b] [&>span:first-child]:shadow-[0_0_0_6px_rgba(100,255,155,0.18)]`;
    }, [product.stock.status]);

    const mainImageAlt = useMemo(() => {
        const color = product.colors.find((c) => c.id === selectedColorId)?.name;
        if (!selectedImage) return product.name;
        if (!color) return selectedImage.alt || product.name;
        return `${product.name} in ${color}`;
    }, [product.colors, product.name, selectedColorId, selectedImage]);

    function handleDecreaseQty(): void {
        setQuantity((prev) => Math.max(1, prev - 1));
    }

    function handleIncreaseQty(): void {
        setQuantity((prev) => prev + 1);
    }

    function handleQtyInput(value: string): void {
        const next = Number(value);
        if (!Number.isFinite(next)) return;
        setQuantity(Math.max(1, Math.floor(next)));
    }

    function handleAddToCart(): void {
        const payload: AddToCartPayload = {
            productId: product.id,
            quantity,
            colorId: selectedColorId || undefined,
            sizeId: selectedSizeId || undefined
        };

        props.onAddToCart?.(payload);
    }

    function handleToggleFavorite(): void {
        setIsFavorite((prev) => {
            const next = !prev;
            props.onToggleFavorite?.(product.id, next);
            return next;
        });
    }

    return (
        <section className="min-h-screen px-5 pb-16 pt-9 text-[#141414] sm:px-4 sm:pb-12 sm:pt-6 bg-[radial-gradient(900px_420px_at_18%_10%,rgba(189,255,0,0.18),rgba(189,255,0,0)_60%),radial-gradient(860px_520px_at_86%_14%,rgba(255,242,227,0.95),rgba(255,242,227,0)_70%),#FFF7EE]">
            <div className="mx-auto max-w-[70rem] pt-5">
                <nav className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.92rem] text-black/55" aria-label="Breadcrumb">
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        if (isLast || !crumb.href) {
                            return (
                                <React.Fragment key={crumb.id}>
                                    {index > 0 ? <span className="opacity-50">/</span> : null}
                                    <span className="font-extrabold text-black/75" aria-current="page">
                                        {crumb.label}
                                    </span>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={crumb.id}>
                                {index > 0 ? <span className="opacity-50">/</span> : null}
                                <a
                                    className="rounded-md px-1 text-black/60 underline-offset-4 hover:text-black/80 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                                    href={crumb.href}
                                >
                                    {crumb.label}
                                </a>
                            </React.Fragment>
                        );
                    })}
                </nav>

                <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                    <section className="min-w-0" aria-label="Product images">
                        <div className="grid gap-4 md:grid-cols-[88px_minmax(0,1fr)] md:items-start">
                            <div className="flex max-h-[560px] flex-col gap-3 overflow-auto pr-1 max-md:order-2 max-md:max-h-none max-md:flex-row max-md:overflow-x-auto max-md:overflow-y-hidden max-md:pr-0 max-md:pb-1" role="listbox" aria-label="Choose an image">
                                {product.images.map((img) => {
                                    const isActive = img.id === selectedImage?.id;
                                    const className = isActive
                                        ? "w-full aspect-square overflow-hidden rounded-[1.15rem] border border-black/25 bg-[radial-gradient(120px_90px_at_30%_20%,rgba(189,255,0,0.20),rgba(189,255,0,0)_72%),linear-gradient(180deg,rgba(255,242,227,0.55),rgba(255,255,255,0.82))] shadow-[0_16px_44px_rgba(0,0,0,0.12)] ring-4 ring-[rgba(189,255,0,0.16)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(0,0,0,0.11)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] max-md:w-[88px] max-md:flex-none"
                                        : "w-full aspect-square overflow-hidden rounded-[1.15rem] border border-black/10 bg-[radial-gradient(120px_90px_at_30%_20%,rgba(189,255,0,0.20),rgba(189,255,0,0)_72%),linear-gradient(180deg,rgba(255,242,227,0.55),rgba(255,255,255,0.82))] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[1px] hover:border-black/20 hover:shadow-[0_14px_34px_rgba(0,0,0,0.11)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] max-md:w-[88px] max-md:flex-none";

                                    return (
                                        <button
                                            key={img.id}
                                            className={className}
                                            type="button"
                                            aria-selected={isActive}
                                            onClick={() => setSelectedImageId(img.id)}
                                        >
                                            <img className="block h-full w-full object-cover" src={img.src} alt={img.alt} />
                                        </button>
                                    );
                                })}
                            </div>

                            <figure className="relative m-0 flex min-h-[520px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_18px_46px_rgba(0,0,0,0.14)] max-md:min-h-[420px] before:pointer-events-none before:absolute before:inset-[-2px] before:content-[''] before:opacity-[0.92] before:bg-[radial-gradient(520px_240px_at_12%_10%,rgba(189,255,0,0.22),rgba(189,255,0,0)_60%),radial-gradient(520px_260px_at_88%_14%,rgba(100,255,155,0.16),rgba(100,255,155,0)_66%),radial-gradient(780px_420px_at_40%_120%,rgba(255,242,227,0.85),rgba(255,242,227,0)_70%)] after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.02))]">
                                <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm font-extrabold shadow-[0_12px_32px_rgba(0,0,0,0.09)] backdrop-blur-[10px]">
                                    <span className="h-[0.55rem] w-[0.55rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
                                    New Drop
                                </div>

                                {selectedImage ? (
                                    <img
                                        className="relative z-10 block h-full w-full object-contain p-[2.2rem] pb-[3.4rem]"
                                        src={selectedImage.src}
                                        alt={mainImageAlt}
                                    />
                                ) : null}

                                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2" aria-label="Shipping and returns highlights">
                                    <span className="inline-flex h-[30px] items-center rounded-full border border-black/10 bg-black/5 px-4 text-[0.9rem] font-extrabold text-black/70">
                                        Free returns
                                    </span>
                                    <span className="inline-flex h-[30px] items-center rounded-full border border-black/10 bg-black/5 px-4 text-[0.9rem] font-extrabold text-black/70">
                                        Ships in 24h
                                    </span>
                                </div>
                            </figure>
                        </div>
                    </section>

                    <aside className="min-w-0 rounded-[1.75rem] border border-black/5 bg-white/80 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.10)] backdrop-blur-[10px]" aria-label="Product information">
                        <header className="mb-4">
                            <p className="m-0 mb-1 font-black tracking-[-0.01em] text-black/70">{product.brand}</p>
                            <h1 className="m-0 mb-2 text-[2rem] font-black leading-[1.08] tracking-[-0.03em] max-sm:text-[1.7rem]">
                                {product.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-2 text-[0.95rem] text-black/55">
                                <span className="font-extrabold text-black/55">SKU: {product.sku}</span>
                                <span className="opacity-60">•</span>
                                <span className="inline-flex h-[26px] items-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.20)] px-3 text-[0.86rem] font-black text-black/75">
                                    {product.tags[0] ?? "New"}
                                </span>
                            </div>
                        </header>

                        <div className="mb-3 flex items-center justify-between gap-4">
                            <p className="m-0 text-[1.55rem] font-black tracking-[-0.02em]" aria-label="Price">
                                {formatMoney(product.price, product.currency)}
                            </p>

                            <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/5 p-1" aria-label="Quantity">
                                <button
                                    className="h-[34px] w-[34px] rounded-full border border-black/10 bg-white/90 font-black transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                                    type="button"
                                    aria-label="Decrease quantity"
                                    onClick={handleDecreaseQty}
                                >
                                    −
                                </button>

                                <input
                                    className="h-[34px] w-[54px] rounded-[0.9rem] border border-transparent bg-transparent text-center font-black text-black/80 focus:outline-none focus:ring-4 focus:ring-[rgba(189,255,0,0.55)]"
                                    type="number"
                                    min={1}
                                    value={quantity}
                                    inputMode="numeric"
                                    aria-label="Quantity value"
                                    onChange={(e) => handleQtyInput(e.target.value)}
                                />

                                <button
                                    className="h-[34px] w-[34px] rounded-full border border-black/10 bg-white/90 font-black transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                                    type="button"
                                    aria-label="Increase quantity"
                                    onClick={handleIncreaseQty}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className={stockClassName} role="status" aria-live="polite">
                            <span className="h-[0.6rem] w-[0.6rem] rounded-full" />
                            <span className="font-black tracking-[-0.01em]">{product.stock.label}</span>

                            {product.stock.hint ? (
                                <>
                                    <span className="opacity-50">•</span>
                                    <span className="font-extrabold text-black/55">{product.stock.hint}</span>
                                </>
                            ) : null}
                        </div>

                        <section className="mt-4 mb-3 rounded-[1.35rem] border border-black/5 bg-white/70 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.06)]" aria-label="Colour selection">
                            <div className="mb-3 flex items-baseline justify-between gap-4">
                                <span className="font-black tracking-[-0.01em]">Colour</span>
                                <span className="text-[0.92rem] text-black/55">Tap to preview</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3" role="radiogroup" aria-label="Choose a colour">
                                {product.colors.map((color) => {
                                    const isActive = color.id === selectedColorId;
                                    const className = isActive
                                        ? "relative h-10 w-10 rounded-full border border-black/10 bg-[var(--swatch)] transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] shadow-[0_18px_42px_rgba(0,0,0,0.12)] ring-4 ring-[rgba(189,255,0,0.16)] after:pointer-events-none after:absolute after:inset-[-5px] after:rounded-full after:border-2 after:border-black/20 after:content-['']"
                                        : "relative h-10 w-10 rounded-full border border-black/10 bg-[var(--swatch)] transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] after:pointer-events-none after:absolute after:inset-[-5px] after:rounded-full after:border-2 after:border-transparent after:content-['']";

                                    return (
                                        <button
                                            key={color.id}
                                            className={className}
                                            type="button"
                                            aria-pressed={isActive}
                                            aria-label={color.name}
                                            style={{ ["--swatch" as any]: color.value }}
                                            onClick={() => setSelectedColorId(color.id)}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        <section className="mb-3 rounded-[1.35rem] border border-black/5 bg-white/70 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.06)]" aria-label="Size selection">
                            <div className="mb-3 flex items-baseline justify-between gap-4">
                                <span className="font-black tracking-[-0.01em]">Size</span>
                                <a
                                    className="rounded-md px-1 font-black text-black/70 underline underline-offset-4 hover:text-black/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                                    href="#"
                                >
                                    Size guide
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label="Choose a size">
                                {product.sizes.map((size) => {
                                    const isActive = size.id === selectedSizeId;
                                    const className = isActive
                                        ? "h-10 min-w-[46px] rounded-full border border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.40),rgba(100,255,155,0.18))] px-4 font-black transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.09)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] shadow-[0_14px_34px_rgba(0,0,0,0.10)] ring-4 ring-[rgba(189,255,0,0.14)] disabled:cursor-not-allowed disabled:opacity-45"
                                        : "h-10 min-w-[46px] rounded-full border border-black/10 bg-white/85 px-4 font-black transition-[transform,box-shadow] duration-150 hover:-translate-y-[1px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.09)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] disabled:cursor-not-allowed disabled:opacity-45";

                                    return (
                                        <button
                                            key={size.id}
                                            className={className}
                                            type="button"
                                            aria-pressed={isActive}
                                            disabled={Boolean(size.disabled)}
                                            onClick={() => setSelectedSizeId(size.id)}
                                        >
                                            {size.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {product.fitNote ? (
                                <p className="m-0 mt-3 text-[0.95rem] leading-relaxed text-black/55">{product.fitNote}</p>
                            ) : null}
                        </section>

                        <section className="mt-1 mb-5" aria-label="Description">
                            <p className="m-0 mb-2 font-black tracking-[-0.01em]">Description</p>
                            <p className="m-0 leading-relaxed text-black/70">{product.description}</p>
                        </section>

                        <div className="mb-4 flex items-center gap-3" aria-label="Actions">
                            <button
                                className="h-[52px] flex-1 rounded-[1.1rem] border border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.62),rgba(100,255,155,0.24))] font-black tracking-[-0.01em] shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition-[transform,box-shadow,filter,opacity] duration-150 hover:-translate-y-[1px] hover:shadow-[0_18px_44px_rgba(0,0,0,0.13)] hover:saturate-105 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] disabled:cursor-not-allowed disabled:opacity-55 disabled:grayscale"
                                type="button"
                                onClick={handleAddToCart}
                                disabled={product.stock.status === "out"}
                            >
                                Add to cart
                            </button>

                            <button
                                className="group h-[52px] w-[52px] rounded-[1.1rem] border border-black/10 bg-white/85 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[1px] hover:border-black/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] aria-pressed:border-black/20 aria-pressed:ring-4 aria-pressed:ring-[rgba(189,255,0,0.14)]"
                                type="button"
                                aria-pressed={isFavorite}
                                aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
                                onClick={handleToggleFavorite}
                            >
                                <svg className="h-[22px] w-[22px] fill-black/30 transition-colors group-[aria-pressed=true]:fill-black/80" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 21s-7.2-4.4-9.6-8.7C.7 9.3 2.3 5.8 5.8 5.1c1.9-.4 3.8.3 5 1.7 1.2-1.4 3.1-2.1 5-1.7 3.5.7 5.1 4.2 3.4 7.2C19.2 16.6 12 21 12 21z" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" aria-label="Trust signals">
                            <div className="inline-flex items-center gap-2 rounded-[1.15rem] border border-black/5 bg-white/70 px-4 py-3 font-extrabold text-black/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                                <span className="inline-flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.25)] font-black">
                                    ✓
                                </span>
                                Secure checkout
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-[1.15rem] border border-black/5 bg-white/70 px-4 py-3 font-extrabold text-black/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                                <span className="inline-flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.25)] font-black">
                                    ↺
                                </span>
                                30-day returns
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-[1.15rem] border border-black/5 bg-white/70 px-4 py-3 font-extrabold text-black/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
                                <span className="inline-flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.25)] font-black">
                                    ⚡
                                </span>
                                Fast dispatch
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="mt-6 rounded-[1.9rem] border border-black/5 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.10)] bg-[radial-gradient(620px_240px_at_16%_25%,rgba(189,255,0,0.14),rgba(189,255,0,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,242,227,0.55))]" aria-label="Recommended products">
                    <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div className="min-w-0">
                            <p className="m-0 mb-1 inline-flex items-center gap-2 text-[0.92rem] font-extrabold text-black/55">
                                <span className="h-[0.6rem] w-[0.6rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
                                Pair it up
                            </p>
                            <h2 className="m-0 text-[1.4rem] font-black tracking-[-0.03em]">Complete the fit</h2>
                        </div>

                        <a
                            className="rounded-md px-1 font-black text-black/70 underline underline-offset-4 hover:text-black/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                            href="#"
                        >
                            View all
                        </a>
                    </header>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {recommendations.map((rec) => (
                            <article
                                key={rec.id}
                                className="cursor-pointer overflow-hidden rounded-[1.45rem] border border-black/5 bg-white/85 shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[2px] hover:border-black/20 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)] focus-within:outline-none focus-within:ring-4 focus-within:ring-[rgba(189,255,0,0.55)]"
                            >
                                <div className="p-4 bg-[radial-gradient(260px_120px_at_25%_18%,rgba(189,255,0,0.16),rgba(189,255,0,0)_70%),rgba(0,0,0,0.03)]">
                                    <img className="block h-[140px] w-full rounded-[1.1rem] border border-black/10 object-cover" src={rec.image.src} alt={rec.image.alt} />
                                </div>
                                <div className="p-4 pt-3">
                                    <p className="m-0 mb-1 font-black tracking-[-0.01em]">{rec.name}</p>
                                    <p className="m-0 font-extrabold text-black/70">{formatMoney(rec.price, rec.currency)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
