import { useEffect, useState } from "react";
import banner1 from "../../imgs/banners/blog.avif";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { fetchJson } from "../api_fetch";

export function Blog() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "/api/blog-articles/?page=1&no_articles=5";

    setIsLoading(true);
    setError(null);

    fetchJson(url)
      .then((data: any) => setArticles(data.data || []))
      .catch((err: any) =>
        setError(err instanceof Error ? err.message : "Failed to load blog articles."),
      )
      .finally(() => setIsLoading(false));
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
        <div className="mt-6">
          {isLoading && (
            <p className="text-[0.95rem] text-[rgba(26,26,26,0.72)]">
              Loading articles…
            </p>
          )}

          {error && (
            <p className="text-[0.95rem] text-red-700">
              Error: {error}
            </p>
          )}

          <div className="flex flex-col gap-5">
            {articles.map((article, index) => (
              <article
                key={index}
                className="relative overflow-hidden rounded-[1.1rem] border border-[#262626] bg-[radial-gradient(circle_at_top_left,#181818_0,#050505_70%)] px-6 pt-[1.4rem] pb-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.8)]"
              >
                {/* subtle glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-[20%] -left-[20%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_0%_0%,rgba(189,255,0,0.12),transparent_55%)] opacity-70"
                />

                <header className="relative z-10">
                  <div className="mb-2 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.13em]">
                    <span className="rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.06)] px-2 py-[0.16rem] font-medium text-[#a5c44a]">
                      {article.tag}
                    </span>
                    <span className="text-[#777]">{article.created}</span>
                  </div>

                  <h2 className="mb-[0.35rem] text-[1.28rem] font-semibold tracking-[0.01em] text-[var(--accent-color,#BDFF00)]">
                    {article.title}
                  </h2>

                  <p className="mb-[0.85rem] text-[0.95rem] text-[#c1c1c1]">
                    {article.summary}
                  </p>
                </header>

                <p className="relative z-10 m-0 text-[0.95rem] leading-[1.6] text-[#d8d8d8]">
                  {article.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </GenericPageSection>
    </div>
  );
}
