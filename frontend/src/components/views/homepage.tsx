import{FeaturedProducts, FeaturedProductsItem} from '../featured_products';
import {FeaturedOutfits} from '../featured_outfits';
import {FeaturedBrands} from '../featured_brands';
import {OurProducts} from '../our_products';
import {FeatureRoadmap} from '../feature_roadmap';
import {HeroSection} from '../hero_section';
import {CircleLogo} from '../circle_logo';

import product_img1 from '../../imgs/featured_products/product_1.png';
import product_img2 from '../../imgs/featured_products/product_2.png';
import product_img3 from '../../imgs/featured_products/product_3.png';
import product_img4 from '../../imgs/featured_products/product_4.png';
import product_img5 from '../../imgs/featured_products/product_5.png';
import product_img6 from '../../imgs/featured_products/product_6.png';
import product_img7 from '../../imgs/featured_products/product_7.png';
import product_img8 from '../../imgs/featured_products/product_8.png';

export function HomePage() {
    return (
        <div>
            <HeroSection />
            <CircleLogo />
            <FeaturedProducts main_title = "New Collection" sub_title="Our Latest Collection">
                <FeaturedProductsItem imageSrc={product_img1} description="Yelliworld Windcheater Tech & Combat Trouser" price="£254.95" />
                <FeaturedProductsItem imageSrc={product_img2} description="Supreme x Martin Wong & Essentials" price="£169.00" />
                <FeaturedProductsItem imageSrc={product_img3} description="MISBHV & Hugo Boss" price="£195.00" />
                <FeaturedProductsItem imageSrc={product_img4} description="Hellstar & Essentials" price="£140.00" />
                <FeaturedProductsItem imageSrc={product_img5} description="More Motion & Amicci" price="£180.00" />
                <FeaturedProductsItem imageSrc={product_img6} description="Soleboy & More Motion" price="£127.00" />
                <FeaturedProductsItem imageSrc={product_img7} description="Orlebar Brown & Amicci" price="£127.00" />
                <FeaturedProductsItem imageSrc={product_img8} description="Suavo World & Amicci" price="£154.00" />
            </FeaturedProducts>
            <FeaturedOutfits />
            <FeaturedBrands />
            <OurProducts />
            <FeatureRoadmap />
        </div>
    );
}
