import { Link } from 'react-router-dom';
import our_products_man from '../imgs/our_products/img_man.png';
import our_products_women from '../imgs/our_products/img_women.png';
import '../styles/OurProducts.scss';

export function OurProducts() {
    return (
        <section className="OurProducts">
            <div className="OurProducts__title">
                <h2 className="OurProducts__title-main">OUR PRODUCTS</h2>
            </div>
            <div className="OurProducts__items">
                <article className="OurProducts__item OurProducts__item--men">
                    <img
                        className="OurProducts__item-image"
                        src={our_products_man}
                        alt="Men's products"
                    />
                    <div className="OurProducts__item-overlay">
                        <h3 className="OurProducts__item-heading">MEN</h3>
                        <Link to="/mens-clothing">
                            <button className="OurProducts__item-button" type="button">PRODUCTS</button>
                        </Link>
                    </div>
                </article>
                <article className="OurProducts__item OurProducts__item--women">
                    <img
                        className="OurProducts__item-image"
                        src={our_products_women}
                        alt="Women's products"
                    />
                    <div className="OurProducts__item-overlay">
                        <h3 className="OurProducts__item-heading">WOMEN</h3>
                        <Link to="/womens-clothing">
                            <button className="OurProducts__item-button" type="button">PRODUCTS</button>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}
