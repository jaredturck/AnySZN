import { useEffect, useState } from "react";
import banner1 from "../../imgs/banners/img2.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { fetchJson } from "../api_fetch";
import '../../styles/generic-page.scss';

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
                setError(
                    err instanceof Error ? err.message : "Failed to load help centre articles."
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <ClothingBanner
                title="Support Centre"
                subtitle="How can we assist you today?"
                img_src={banner1}
            />

            <GenericPageSection
                label="Support"
                title="Help & FAQs"
                subtitle="Find quick answers to common questions about orders, shipping, returns and more."
            >
                <h2>Frequently Asked Questions</h2>

                {isLoading && <p>Loading…</p>}
                {error && <p>Error: {error}</p>}

                {faqs.map((item, index) => (
                    <div key={index}>
                        <h3 className="generic-page__faq-question">
                            {item.question}
                        </h3>
                        <p className="generic-page__faq-answer">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </GenericPageSection>
        </div>
    );
}
