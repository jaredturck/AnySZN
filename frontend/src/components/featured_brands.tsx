import '../styles/FeaturedBrands.scss';

import brand_1 from '../imgs/brands/Screenshot 2024-09-25 184637 3.png';
import brand_2 from '../imgs/brands/image 219.png';
import brand_3 from '../imgs/brands/image 220.png';
import brand_4 from '../imgs/brands/image 221.png';
import brand_5 from '../imgs/brands/image 222.png';
import brand_6 from '../imgs/brands/image 223.png';
import brand_7 from '../imgs/brands/Screenshot 2024-09-27 205541 3.png';
import brand_8 from '../imgs/brands/image 224.png';
import brand_9 from '../imgs/brands/image 225.png';
import brand_10 from '../imgs/brands/image 226.png';
import brand_11 from '../imgs/brands/image 227.png';

export function FeaturedBrands() {
    return (
        <section className="FeaturedBrands">
            <div className="FeaturedBrands__title">
                <h2 className="FeaturedBrands__title-main">
                    FROM 10,000 BRANDS TO ONE PERFECT LOOK - DISCOVER YOUR STYLE.
                </h2>
            </div>

            <div className="FeaturedBrands__logos" aria-label="Featured brands">
                <div className="FeaturedBrands__track">
                    {/* Set 1 */}
                    <img className="FeaturedBrands__logo" src={brand_1} alt="NVLTY" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_2} alt="mnml" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_3} alt="Moremotion" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_4} alt="Zavetti" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_5} alt="Daily Paper" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_6} alt="Maniere De Voir" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_7} alt="Sole Et Al" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_8} alt="Brand 8" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_9} alt="Shop Boys Never Die" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_10} alt="Stay Uno" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_11} alt="Only" draggable={false} />

                    {/* Set 2 (duplicate for seamless loop) */}
                    <img className="FeaturedBrands__logo" src={brand_1} alt="NVLTY" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_2} alt="mnml" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_3} alt="Moremotion" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_4} alt="Zavetti" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_5} alt="Daily Paper" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_6} alt="Maniere De Voir" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_7} alt="Sole Et Al" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_8} alt="Brand 8" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_9} alt="Shop Boys Never Die" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_10} alt="Stay Uno" draggable={false} />
                    <img className="FeaturedBrands__logo" src={brand_11} alt="Only" draggable={false} />
                </div>
            </div>
        </section>
    );
}
