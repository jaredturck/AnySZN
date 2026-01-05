import React, { useMemo, useState } from "react";
import "../../styles/ProductPage.scss";

// Local placeholder images (swap to API images later)
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
        if (product.stock.status === "out") return "stockPill stockPill--out";
        if (product.stock.status === "low") return "stockPill stockPill--low";
        return "stockPill stockPill--in";
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
        <section className="productPage">
            <div className="productPage__wrap">
                <nav className="productPage__crumbs" aria-label="Breadcrumb">
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        if (isLast || !crumb.href) {
                            return (
                                <React.Fragment key={crumb.id}>
                                    {index > 0 ? <span className="productPage__crumbSep">/</span> : null}
                                    <span className="productPage__crumbCurrent" aria-current="page">
                                        {crumb.label}
                                    </span>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={crumb.id}>
                                {index > 0 ? <span className="productPage__crumbSep">/</span> : null}
                                <a className="productPage__crumb" href={crumb.href}>
                                    {crumb.label}
                                </a>
                            </React.Fragment>
                        );
                    })}
                </nav>

                <div className="productPage__grid">
                    <section className="productPage__gallery productGallery" aria-label="Product images">
                        <div className="productGallery__thumbs" role="listbox" aria-label="Choose an image">
                            {product.images.map((img) => {
                                const isActive = img.id === selectedImage?.id;
                                const className = isActive
                                    ? "productGallery__thumb productGallery__thumb--active"
                                    : "productGallery__thumb";

                                return (
                                    <button
                                        key={img.id}
                                        className={className}
                                        type="button"
                                        aria-selected={isActive}
                                        onClick={() => setSelectedImageId(img.id)}
                                    >
                                        <img className="productGallery__thumbImg" src={img.src} alt={img.alt} />
                                    </button>
                                );
                            })}
                        </div>

                        <figure className="productGallery__main">
                            <div className="productGallery__badge">
                                <span className="productGallery__badgeDot" />
                                New Drop
                            </div>

                            {selectedImage ? (
                                <img className="productGallery__mainImg" src={selectedImage.src} alt={mainImageAlt} />
                            ) : null}

                            <div className="productGallery__meta" aria-label="Shipping and returns highlights">
                                <span className="productGallery__metaPill">Free returns</span>
                                <span className="productGallery__metaPill">Ships in 24h</span>
                            </div>
                        </figure>
                    </section>

                    <aside className="productPage__info productInfo" aria-label="Product information">
                        <header className="productInfo__header">
                            <p className="productInfo__brand">{product.brand}</p>
                            <h1 className="productInfo__title">{product.name}</h1>

                            <div className="productInfo__sub">
                                <span className="productInfo__sku">SKU: {product.sku}</span>
                                <span className="productInfo__subDot">•</span>
                                <span className="productInfo__tag">{product.tags[0] ?? "New"}</span>
                            </div>
                        </header>

                        <div className="productInfo__buyRow">
                            <p className="productInfo__price" aria-label="Price">
                                {formatMoney(product.price, product.currency)}
                            </p>

                            <div className="productInfo__qty qtyStepper" aria-label="Quantity">
                                <button
                                    className="qtyStepper__btn"
                                    type="button"
                                    aria-label="Decrease quantity"
                                    onClick={handleDecreaseQty}
                                >
                                    −
                                </button>

                                <input
                                    className="qtyStepper__value"
                                    type="number"
                                    min={1}
                                    value={quantity}
                                    inputMode="numeric"
                                    aria-label="Quantity value"
                                    onChange={(e) => handleQtyInput(e.target.value)}
                                />

                                <button
                                    className="qtyStepper__btn"
                                    type="button"
                                    aria-label="Increase quantity"
                                    onClick={handleIncreaseQty}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className={`productInfo__stock ${stockClassName}`} role="status" aria-live="polite">
                            <span className="stockPill__dot" />
                            <span className="stockPill__text">{product.stock.label}</span>

                            {product.stock.hint ? (
                                <>
                                    <span className="stockPill__sep">•</span>
                                    <span className="stockPill__hint">{product.stock.hint}</span>
                                </>
                            ) : null}
                        </div>

                        <section className="productInfo__block" aria-label="Colour selection">
                            <div className="productInfo__labelRow">
                                <span className="productInfo__label">Colour</span>
                                <span className="productInfo__hint">Tap to preview</span>
                            </div>

                            <div className="swatches swatches--colors" role="radiogroup" aria-label="Choose a colour">
                                {product.colors.map((color) => {
                                    const isActive = color.id === selectedColorId;
                                    const className = isActive
                                        ? "swatches__swatch swatches__swatch--active"
                                        : "swatches__swatch";

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

                        <section className="productInfo__block" aria-label="Size selection">
                            <div className="productInfo__labelRow">
                                <span className="productInfo__label">Size</span>
                                <a className="productInfo__link" href="#">
                                    Size guide
                                </a>
                            </div>

                            <div className="sizePicker" role="radiogroup" aria-label="Choose a size">
                                {product.sizes.map((size) => {
                                    const isActive = size.id === selectedSizeId;
                                    const className = isActive
                                        ? "sizePicker__option sizePicker__option--active"
                                        : "sizePicker__option";

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

                            {product.fitNote ? <p className="productInfo__fitNote">{product.fitNote}</p> : null}
                        </section>

                        <section className="productInfo__desc" aria-label="Description">
                            <p className="productInfo__descTitle">Description</p>
                            <p className="productInfo__descText">{product.description}</p>
                        </section>

                        <div className="productInfo__actions" aria-label="Actions">
                            <button
                                className="productInfo__addBtn"
                                type="button"
                                onClick={handleAddToCart}
                                disabled={product.stock.status === "out"}
                            >
                                Add to cart
                            </button>

                            <button
                                className="productInfo__favBtn"
                                type="button"
                                aria-pressed={isFavorite}
                                aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
                                onClick={handleToggleFavorite}
                            >
                                <svg className="productInfo__favIcon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 21s-7.2-4.4-9.6-8.7C.7 9.3 2.3 5.8 5.8 5.1c1.9-.4 3.8.3 5 1.7 1.2-1.4 3.1-2.1 5-1.7 3.5.7 5.1 4.2 3.4 7.2C19.2 16.6 12 21 12 21z" />
                                </svg>
                            </button>
                        </div>

                        <div className="productInfo__trust" aria-label="Trust signals">
                            <div className="productInfo__trustItem">
                                <span className="productInfo__trustIcon">✓</span>
                                Secure checkout
                            </div>
                            <div className="productInfo__trustItem">
                                <span className="productInfo__trustIcon">↺</span>
                                30-day returns
                            </div>
                            <div className="productInfo__trustItem">
                                <span className="productInfo__trustIcon">⚡</span>
                                Fast dispatch
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="productRecs" aria-label="Recommended products">
                    <header className="productRecs__header">
                        <div className="productRecs__titleBlock">
                            <p className="productRecs__kicker">
                                <span className="productRecs__kickerDot" />
                                Pair it up
                            </p>
                            <h2 className="productRecs__title">Complete the fit</h2>
                        </div>

                        <a className="productRecs__link" href="#">
                            View all
                        </a>
                    </header>

                    <div className="productRecs__grid">
                        {recommendations.map((rec) => (
                            <article key={rec.id} className="recCard">
                                <div className="recCard__media">
                                    <img className="recCard__img" src={rec.image.src} alt={rec.image.alt} />
                                </div>
                                <div className="recCard__body">
                                    <p className="recCard__name">{rec.name}</p>
                                    <p className="recCard__price">{formatMoney(rec.price, rec.currency)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
