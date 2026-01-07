import { useEffect, useState } from "react";
import banner1 from "../../imgs/banners/img2.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { fetchJson } from "../api_fetch";

export function SupportCentre() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "/api/help-centre/?page=1&no_articles=5";

    setIsLoading(true);
    setError(null);

    fetchJson(url)
      .then((data: any) => {
        setFaqs(data.data || []);
      })
      .catch((err: any) => {
        setError(err instanceof Error ? err.message : "Failed to load help centre articles.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <ClothingBanner title="Support Centre" subtitle="How can we assist you today?" img_src={banner1} />

      <GenericPageSection label="Support" title="Help & FAQs" subtitle="Find quick answers to common questions about orders, shipping, returns and more.">
        <h2>Frequently Asked Questions</h2>

        {isLoading && <p>Loading…</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="mt-6 space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-xl border border-[rgba(26,26,26,0.10)] bg-white/65 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.10),0_6px_14px_rgba(0,0,0,0.06)]">
              <h3 className="m-0 text-[0.98rem] font-extrabold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.88)]">
                {item.question}
              </h3>
              <p className="m-0 mt-2 text-[0.98rem] leading-[1.75] text-[rgba(26,26,26,0.84)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </GenericPageSection>
    </div>
  );
}
