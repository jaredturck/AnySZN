import '../styles/FeaturedOutfits.scss';

import outfit_img1 from '../imgs/featured_outfits/outfit_1.png';
import outfit_img2 from '../imgs/featured_outfits/outfit_2.png';
import outfit_img3 from '../imgs/featured_outfits/outfit_3.png';
import outfit_img4 from '../imgs/featured_outfits/outfit_4.png';

export function FeaturedOutfits() {
    return (
        <div className="FeaturedOutfits">
            <div className="FeaturedOutfits__title">
                <h2 className="FeaturedOutfits__title-main">ANYSZN LOOKS GOOD ON YOU</h2>
                <p className="FeaturedOutfits__title-sub">Tag @anyszn to be featured</p>
            </div>
            <div className="FeaturedOutfits__gallery">
                <div className="FeaturedOutfits__images">
                    <div className="FeaturedOutfits__image">
                        <img src={outfit_img1} alt="Outfit 1" />
                    </div>
                    <div className="FeaturedOutfits__image">
                        <img src={outfit_img2} alt="Outfit 2" />
                    </div>
                    <div className="FeaturedOutfits__image">
                        <img src={outfit_img3} alt="Outfit 3" />
                    </div>
                    <div className="FeaturedOutfits__image">
                        <img src={outfit_img4} alt="Outfit 4" />
                    </div>
                </div>
                <button className="FeaturedOutfits__arrow FeaturedOutfits__arrow--left" type="button" aria-label="Previous">&#10094;</button>
                <button className="FeaturedOutfits__arrow FeaturedOutfits__arrow--right" type="button" aria-label="Next">&#10095;</button>
            </div>
        </div>
    );
}
