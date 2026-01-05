import '../styles/collection.scss';
import filter_icon from '../imgs/icons/filter.png';
import { Link } from 'react-router-dom';

type FeaturedProductsProps = {
    imageSrc: string,
    description: string,
    price: string
};

type FeaturedProductsInfoProps = {
    main_title?: string,
    sub_title?: string,
    children: React.ReactNode,
    showFilterAndSort?: boolean
};

export function FeaturedProductsItem({ imageSrc, description, price }: FeaturedProductsProps) {
    return (
        <Link to="/product" className="collection__item-link">
            <article className="collection__item">
                <div className="collection__item-image-wrapper">
                    <img
                        className="collection__item-image"
                        src={imageSrc}
                        alt={description}
                    />
                </div>
                <p className="collection__item-name">{description}</p>
                <p className="collection__item-price">{price}</p>
            </article>
        </Link>
    );
}

export function FeaturedProducts({main_title, sub_title, children, showFilterAndSort = false}: FeaturedProductsInfoProps) {
    const showTitle = !!(main_title?.trim() && sub_title?.trim());

    return (
        <section className="collection">
            {showTitle && (
                <div className="collection__title">
                    <h2 className="collection__title-main">{main_title}</h2>
                    <p className="collection__title-sub">{sub_title}</p>
                </div>
            )}

            {showFilterAndSort && (
                <div className="collection__controls">
                    <button type="button" className="collection__filter">
                        <span className="collection__filter-label">Filter</span>
                        <img
                            className="collection__filter-icon"
                            src={filter_icon}
                            alt="Filter products"
                        />
                    </button>
                    <p className="collection__sort">Sort By</p>
                </div>
            )}

            <div className="collection__items">
                {children}
            </div>

            <div className="collection__footer">
                <a href="#" className="collection__view-all">View All</a>
            </div>
        </section>
    );
}
