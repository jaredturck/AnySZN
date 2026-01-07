import { ClothingBanner } from "../clothing_banner";
import { FeaturedProducts, FeaturedProductsItem } from "../featured_products";
import { CircleLogo } from "../circle_logo";

import men_banner from "../../imgs/banners/pexels-ryan-holloway-71499-242829 1.png";
import women_banner from "../../imgs/banners/women_banner_1.png";

import product_mens_img1 from "../../imgs/featured_products/mens_collection/Frame 31.png";
import product_mens_img2 from "../../imgs/featured_products/mens_collection/Frame 31 (1).png";
import product_mens_img3 from "../../imgs/featured_products/mens_collection/Frame 31 (2).png";
import product_mens_img4 from "../../imgs/featured_products/mens_collection/Frame 31 (3).png";
import product_mens_img5 from "../../imgs/featured_products/mens_collection/Frame 31 (4).png";
import product_mens_img6 from "../../imgs/featured_products/mens_collection/Frame 31 (5).png";
import product_mens_img7 from "../../imgs/featured_products/mens_collection/Frame 31 (6).png";
import product_mens_img8 from "../../imgs/featured_products/mens_collection/Frame 31 (7).png";
import product_mens_img9 from "../../imgs/featured_products/mens_collection/Frame 31 (8).png";
import product_mens_img10 from "../../imgs/featured_products/mens_collection/Frame 31 (9).png";
import product_mens_img11 from "../../imgs/featured_products/mens_collection/Frame 31 (10).png";
import product_mens_img12 from "../../imgs/featured_products/mens_collection/Frame 31 (11).png";
import product_mens_img13 from "../../imgs/featured_products/mens_collection/Frame 31 (12).png";
import product_mens_img14 from "../../imgs/featured_products/mens_collection/Frame 31 (13).png";
import product_mens_img15 from "../../imgs/featured_products/mens_collection/Frame 31 (14).png";
import product_mens_img16 from "../../imgs/featured_products/mens_collection/Frame 31 (15).png";
import product_mens_img17 from "../../imgs/featured_products/mens_collection/Frame 31 (16).png";
import product_mens_img18 from "../../imgs/featured_products/mens_collection/Frame 31 (17).png";
import product_mens_img19 from "../../imgs/featured_products/mens_collection/Frame 31 (18).png";
import product_mens_img20 from "../../imgs/featured_products/mens_collection/Frame 31 (19).png";

import product_womens_img1 from "../../imgs/featured_products/womens_collection/product_8.png";
import product_womens_img2 from "../../imgs/featured_products/womens_collection/Frame 31.png";
import product_womens_img3 from "../../imgs/featured_products/womens_collection/Frame 31 (1).png";
import product_womens_img4 from "../../imgs/featured_products/womens_collection/Frame 31 (2).png";
import product_womens_img5 from "../../imgs/featured_products/womens_collection/Frame 31 (3).png";
import product_womens_img6 from "../../imgs/featured_products/womens_collection/Frame 31 (4).png";
import product_womens_img7 from "../../imgs/featured_products/womens_collection/Frame 31 (5).png";
import product_womens_img8 from "../../imgs/featured_products/womens_collection/Frame 31 (6).png";
import product_womens_img9 from "../../imgs/featured_products/womens_collection/Frame 31 (7).png";
import product_womens_img10 from "../../imgs/featured_products/womens_collection/Frame 31 (8).png";
import product_womens_img11 from "../../imgs/featured_products/womens_collection/Frame 31 (9).png";
import product_womens_img12 from "../../imgs/featured_products/womens_collection/Frame 31 (10).png";
import product_womens_img13 from "../../imgs/featured_products/womens_collection/Frame 31 (11).png";
import product_womens_img14 from "../../imgs/featured_products/womens_collection/Frame 31 (12).png";
import product_womens_img15 from "../../imgs/featured_products/womens_collection/Frame 31 (13).png";
import product_womens_img16 from "../../imgs/featured_products/womens_collection/Frame 31 (14).png";
import product_womens_img17 from "../../imgs/featured_products/womens_collection/Frame 31 (15).png";
import product_womens_img18 from "../../imgs/featured_products/womens_collection/Frame 31 (16).png";
import product_womens_img19 from "../../imgs/featured_products/womens_collection/Frame 31 (17).png";
import product_womens_img20 from "../../imgs/featured_products/womens_collection/Frame 31 (18).png";

type Product = {
  imageSrc: string;
  description: string;
  price: string;
};

const mensProducts: Product[] = [
  { imageSrc: product_mens_img1, description: "Noisey & Denim Tears", price: "£254.95" },
  { imageSrc: product_mens_img2, description: "Supreme x Martin Wong & Essentials", price: "£169.00" },
  { imageSrc: product_mens_img3, description: "Hellstar & Essentials", price: "£140.00" },
  { imageSrc: product_mens_img4, description: "MISBHV & Hugo Boss", price: "£195.00" },
  { imageSrc: product_mens_img5, description: "Solitaire London & Zara", price: "£56.00" },
  { imageSrc: product_mens_img6, description: "Disanti & Disanti", price: "£200.00" },
  { imageSrc: product_mens_img7, description: "Noisey & Maniere de voir", price: "£100.00" },
  { imageSrc: product_mens_img8, description: "Centurion Studios & Centurion Studios", price: "£100.00" },
  { imageSrc: product_mens_img9, description: "Gallery Dept", price: "£225.00" },
  { imageSrc: product_mens_img10, description: "Yelliworld Windcheater Tech & Combat Trouser", price: "£254.95" },
  { imageSrc: product_mens_img11, description: "Soleboy & More Motion", price: "£127.00" },
  { imageSrc: product_mens_img12, description: "Orlebar Brown & Amicci", price: "£127.00" },
  { imageSrc: product_mens_img13, description: "Suavo World & Amicci", price: "£154.00" },
  { imageSrc: product_mens_img14, description: "Billionaire Boys Club x Yankees & Cole Buxton", price: "£320.00" },
  { imageSrc: product_mens_img15, description: "Marni & Aurelien", price: "£582.00" },
  { imageSrc: product_mens_img16, description: "Billionaire Boys Club x Ice Cream & Amicci", price: "£140.00" },
  { imageSrc: product_mens_img17, description: "Billionaire Boys Club & Amicci", price: "£190.00" },
  { imageSrc: product_mens_img18, description: "Represent & Arne", price: "£135.00" },
  { imageSrc: product_mens_img19, description: "Sole.et.Al & Suavo World", price: "£225.00" },
  { imageSrc: product_mens_img20, description: "Jugg & Billionaire Boys Club", price: "£350.00" },
];

const womensProducts: Product[] = [
  { imageSrc: product_womens_img1, description: "Noisey & Denim Tears", price: "£254.95" },
  { imageSrc: product_womens_img2, description: "Supreme x Martin Wong & Essentials", price: "£169.00" },
  { imageSrc: product_womens_img3, description: "Hellstar & Essentials", price: "£140.00" },
  { imageSrc: product_womens_img4, description: "MISBHV & Hugo Boss", price: "£195.00" },
  { imageSrc: product_womens_img5, description: "Solitaire London & Zara", price: "£56.00" },
  { imageSrc: product_womens_img6, description: "Disanti & Disanti", price: "£200.00" },
  { imageSrc: product_womens_img7, description: "Noisey & Maniere de voir", price: "£100.00" },
  { imageSrc: product_womens_img8, description: "Centurion Studios & Centurion Studios", price: "£100.00" },
  { imageSrc: product_womens_img9, description: "Gallery Dept", price: "£225.00" },
  { imageSrc: product_womens_img10, description: "Yelliworld Windcheater Tech & Combat Trouser", price: "£254.95" },
  { imageSrc: product_womens_img11, description: "Soleboy & More Motion", price: "£127.00" },
  { imageSrc: product_womens_img12, description: "Orlebar Brown & Amicci", price: "£127.00" },
  { imageSrc: product_womens_img13, description: "Suavo World & Amicci", price: "£154.00" },
  { imageSrc: product_womens_img14, description: "Billionaire Boys Club x Yankees & Cole Buxton", price: "£320.00" },
  { imageSrc: product_womens_img15, description: "Marni & Aurelien", price: "£582.00" },
  { imageSrc: product_womens_img16, description: "Billionaire Boys Club x Ice Cream & Amicci", price: "£140.00" },
  { imageSrc: product_womens_img17, description: "Billionaire Boys Club & Amicci", price: "£190.00" },
  { imageSrc: product_womens_img18, description: "Represent & Arne", price: "£135.00" },
  { imageSrc: product_womens_img19, description: "Sole.et.Al & Suavo World", price: "£225.00" },
  { imageSrc: product_womens_img20, description: "Jugg & Billionaire Boys Club", price: "£350.00" },
];

function ClothingPage({
  bannerTitle,
  bannerSubtitle,
  bannerSrc,
  products,
}: {
  bannerTitle: string;
  bannerSubtitle: string;
  bannerSrc: string;
  products: Product[];
}) {
  return (
    <div>
      <ClothingBanner title={bannerTitle} subtitle={bannerSubtitle} img_src={bannerSrc} />
      <CircleLogo />
      <FeaturedProducts showFilterAndSort>
        {products.map((p, idx) => (
          <FeaturedProductsItem
            key={`${p.description}-${idx}`}
            imageSrc={p.imageSrc}
            description={p.description}
            price={p.price}
          />
        ))}
      </FeaturedProducts>
    </div>
  );
}

export function MensClothing() {
  return (
    <ClothingPage
      bannerTitle="TOP MEN COLLECTION"
      bannerSubtitle="OUR LATEST COLLECTION"
      bannerSrc={men_banner}
      products={mensProducts}
    />
  );
}

export function WomensClothing() {
  return (
    <ClothingPage
      bannerTitle="TOP WOMEN COLLECTION"
      bannerSubtitle="OUR LATEST COLLECTION"
      bannerSrc={women_banner}
      products={womensProducts}
    />
  );
}
