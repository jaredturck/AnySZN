import React, { useMemo, useState } from "react";
import '../styles/product_bundle.scss';

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
        <section className="product-bundle">
            <div className="product-bundle__media">
                <div className="product-bundle__media-section">
                    <div className="product-bundle__thumbs" aria-label="Jacket thumbnails">
                        <button className="product-bundle__thumb" type="button">
                            <div className="product-bundle__img-placeholder product-bundle__img-placeholder--jacket-small">
                                Jacket
                            </div>
                        </button>
                        <button className="product-bundle__thumb" type="button">
                            <div className="product-bundle__img-placeholder product-bundle__img-placeholder--jacket-small">
                                Jacket
                            </div>
                        </button>
                    </div>

                    <div className="product-bundle__main">
                        <div className="product-bundle__img-placeholder product-bundle__img-placeholder--jacket">
                            Jacket
                        </div>
                    </div>
                </div>

                <div className="product-bundle__media-section">
                    <div className="product-bundle__thumbs" aria-label="Trouser thumbnails">
                        <button className="product-bundle__thumb" type="button">
                            <div className="product-bundle__img-placeholder product-bundle__img-placeholder--trouser-small">
                                Trouser
                            </div>
                        </button>
                        <button className="product-bundle__thumb" type="button">
                            <div className="product-bundle__img-placeholder product-bundle__img-placeholder--trouser-small">
                                Trouser
                            </div>
                        </button>
                    </div>

                    <div className="product-bundle__main">
                        <div className="product-bundle__img-placeholder product-bundle__img-placeholder--trouser">
                            Trouser
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-bundle__info">
                <h1 className="product-bundle__title">
                    YELIRWORLD WINDCHEATER<br />&amp; TECH COMBAT TROUSER
                </h1>

                <div className="product-bundle__meta">
                    <div className="product-bundle__price">£178.00</div>

                    <div className="product-bundle__qty" role="group" aria-label="Quantity">
                        <button className="product-bundle__qty-btn" type="button" onClick={decQty} aria-label="Decrease quantity">
                            −
                        </button>
                        <div className="product-bundle__qty-value" aria-live="polite">
                            {qty}
                        </div>
                        <button className="product-bundle__qty-btn" type="button" onClick={incQty} aria-label="Increase quantity">
                            +
                        </button>
                    </div>
                </div>

                <div className="product-bundle__status">
                    <span className="product-bundle__status-icon" aria-hidden="true">✓</span>
                    <span className="product-bundle__status-text">Available</span>
                </div>

                <div className="product-bundle__row product-bundle__row--two">
                    <div className="product-bundle__row-label">Top Colour</div>
                    <div className="product-bundle__swatches" role="radiogroup" aria-label="Top colour">
                        {topColors.map((c) => (
                            <button
                                key={c.id}
                                type="button"
                                className={[
                                    "product-bundle__swatch",
                                    topColor === c.id ? "product-bundle__swatch--active" : ""
                                ].join(" ").trim()}
                                style={{ backgroundColor: c.hex }}
                                onClick={() => setTopColor(c.id)}
                                role="radio"
                                aria-checked={topColor === c.id}
                                aria-label={c.id}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-bundle__row product-bundle__row--two">
                    <div className="product-bundle__row-label">Bottom Colour</div>
                    <div className="product-bundle__swatches" role="radiogroup" aria-label="Bottom colour">
                        {bottomColors.map((c) => (
                            <button
                                key={c.id}
                                type="button"
                                className={[
                                    "product-bundle__swatch",
                                    bottomColor === c.id ? "product-bundle__swatch--active" : ""
                                ].join(" ").trim()}
                                style={{ backgroundColor: c.hex }}
                                onClick={() => setBottomColor(c.id)}
                                role="radio"
                                aria-checked={bottomColor === c.id}
                                aria-label={c.id}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-bundle__row product-bundle__row--three">
                    <div className="product-bundle__row-label">Top Size</div>

                    <div className="product-bundle__sizes" role="radiogroup" aria-label="Top size">
                        {sizes.map((s) => (
                            <button
                                key={s}
                                type="button"
                                className={[
                                    "product-bundle__size-btn",
                                    topSize === s ? "product-bundle__size-btn--active" : ""
                                ].join(" ").trim()}
                                onClick={() => setTopSize(s)}
                                role="radio"
                                aria-checked={topSize === s}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <a className="product-bundle__size-guide" href="#" onClick={(e) => e.preventDefault()}>
                        Size Guide
                    </a>
                </div>

                <div className="product-bundle__row product-bundle__row--three">
                    <div className="product-bundle__row-label">Bottom Size</div>

                    <div className="product-bundle__sizes" role="radiogroup" aria-label="Bottom size">
                        {sizes.map((s) => (
                            <button
                                key={s}
                                type="button"
                                className={[
                                    "product-bundle__size-btn",
                                    bottomSize === s ? "product-bundle__size-btn--active" : ""
                                ].join(" ").trim()}
                                onClick={() => setBottomSize(s)}
                                role="radio"
                                aria-checked={bottomSize === s}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <a className="product-bundle__size-guide" href="#" onClick={(e) => e.preventDefault()}>
                        Size Guide
                    </a>
                </div>

                <div className="product-bundle__description">
                    <div className="product-bundle__description-title">Description</div>
                    <p className="product-bundle__description-text">
                        Lorem ipsum dolor sit amet consectetur. Pharetra ullamcorper ornare consequat sed.
                        Sed magna arcu nunc pellentesque eget sit feugiat sed accumsan. Id viverra erat.
                    </p>
                </div>

                <div className="product-bundle__actions">
                    <button className="product-bundle__btn product-bundle__btn--primary" type="button">
                        Add To Cart
                    </button>
                    <button className="product-bundle__btn product-bundle__btn--secondary" type="button">
                        Buy Now
                    </button>
                    <button className="product-bundle__wishlist" type="button" aria-label="Add to wishlist">
                        <span className="product-bundle__wishlist-icon" aria-hidden="true">♡</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
