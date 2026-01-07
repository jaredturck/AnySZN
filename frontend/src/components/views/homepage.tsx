import { CircleLogo } from "../circle_logo";
import { FeatureRoadmap } from "../feature_roadmap";
import { FeaturedBrands } from "../featured_brands";
import { FeaturedOutfits } from "../featured_outfits";
import { FeaturedProducts, FeaturedProductsItem } from "../featured_products";
import { HeroSection } from "../hero_section";
import { OurProducts } from "../our_products";

import productImg1 from "../../imgs/featured_products/product_1.png";
import productImg2 from "../../imgs/featured_products/product_2.png";
import productImg3 from "../../imgs/featured_products/product_3.png";
import productImg4 from "../../imgs/featured_products/product_4.png";
import productImg5 from "../../imgs/featured_products/product_5.png";
import productImg6 from "../../imgs/featured_products/product_6.png";
import productImg7 from "../../imgs/featured_products/product_7.png";
import productImg8 from "../../imgs/featured_products/product_8.png";

export function HomePage() {
    return (
        <div>
            <HeroSection />
            <CircleLogo />
            <FeaturedProducts main_title="New Collection" sub_title="Our Latest Collection">
                <FeaturedProductsItem imageSrc={productImg1} description="Yelliworld Windcheater Tech & Combat Trouser" price="£254.95" />
                <FeaturedProductsItem imageSrc={productImg2} description="Supreme x Martin Wong & Essentials" price="£169.00" />
                <FeaturedProductsItem imageSrc={productImg3} description="MISBHV & Hugo Boss" price="£195.00" />
                <FeaturedProductsItem imageSrc={productImg4} description="Hellstar & Essentials" price="£140.00" />
                <FeaturedProductsItem imageSrc={productImg5} description="More Motion & Amicci" price="£180.00" />
                <FeaturedProductsItem imageSrc={productImg6} description="Soleboy & More Motion" price="£127.00" />
                <FeaturedProductsItem imageSrc={productImg7} description="Orlebar Brown & Amicci" price="£127.00" />
                <FeaturedProductsItem imageSrc={productImg8} description="Suavo World & Amicci" price="£154.00" />
            </FeaturedProducts>
            <FeaturedOutfits />
            <FeaturedBrands />
            <OurProducts />
            <FeatureRoadmap />
        </div>
    );
}
