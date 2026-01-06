import { useEffect, useState } from "react";
import banner1 from "../../imgs/banners/blog.avif";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { fetchJson } from "../api_fetch";
import '../../styles/blog.scss';

export function Blog() {
    const [articles, setArticles] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = "/api/blog-articles/?page=1&no_articles=5";

        setIsLoading(true);
        setError(null);

        fetchJson(url)
            .then((data: any) => {
                setArticles(data.data || []);
            })
            .catch((err: any) => {
                setError(err instanceof Error ? err.message : "Failed to load blog articles.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <ClothingBanner
                title="AnyHJS Blog"
                subtitle="News, drops and stories from the world of fashion and tech."
                img_src={banner1}
            />

            <GenericPageSection
                label="Stories"
                title="Latest from AnyHJS"
                subtitle="Catch up on trends, collabs and product updates from across the platform."
            >
                <div className="blog">
                    {isLoading && <p className="blog__loading">Loading articles…</p>}
                    {error && <p className="blog__error">Error: {error}</p>}

                    <div className="blog__list">
                        {articles.map((article, index) => (
                            <article key={index} className="blog-card">
                                <header className="blog-card__header">
                                    <div className="blog-card__meta">
                                        <span className="blog-card__tag">{article.tag}</span>
                                        <span className="blog-card__date">{article.created}</span>
                                    </div>
                                    <h2 className="blog-card__title">{article.title}</h2>
                                    <p className="blog-card__subtitle">{article.summary}</p>
                                </header>
                                <p className="blog-card__excerpt">{article.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </GenericPageSection>
        </div>
    );
}
