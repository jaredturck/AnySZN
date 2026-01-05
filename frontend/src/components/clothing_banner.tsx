import '../styles/men_collection.scss';

type ClothingBannerProps = {
    title: string;
    subtitle: string;
    img_src?: string;
};

export function ClothingBanner({ title, subtitle, img_src }: ClothingBannerProps) {
    return (
        <section className="men-collection">
            <div className="men-collection__image-container">
                <img
                    src={img_src}
                    alt={title}
                    className="men-collection__image-container__image"
                />

                <div className="men-collection__text-overlay">
                    <div className="men-collection__text-overlay__panel">
                        <h2 className="men-collection__text-overlay__title">{title}</h2>
                        <p className="men-collection__text-overlay__subtitle">{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
