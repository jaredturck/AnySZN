import banner1 from "../../imgs/banners/ai_styelist.png";
import aiStylistImage from "../../imgs/banners/ai_stylist_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function AIStylist() {
  return (
    <div>
      <ClothingBanner title="AI Stylist" subtitle="Your 24/7 AI-powered personal stylist (Coming soon)" img_src={banner1} />

      <GenericPageSection
        label="Labs"
        title="AI Stylist (Coming Soon)"
        subtitle="An upcoming feature that builds complete outfits for any occasion using natural language and fashion-focused AI."
      >
        <h1>AI Stylist (Coming Soon)</h1>

        <p>
          Imagine having a personal stylist on call 24/7 – that’s exactly what <strong>AI Stylist</strong> is designed to be. This upcoming feature will live inside
          our platform and act like a highly trained fashion expert you can chat with in plain language. Tell it where you’re going, how you’re feeling and how you
          want to look, and it will build complete outfits from hundreds of brands available on our site.
        </p>

        <p>
          Whether it’s a birthday party with your son, a job interview, a first date, a weekend city break or just a casual coffee run, AI Stylist understands the
          occasion, the vibe and the dress code. It uses advanced language models together with fashion-focused AI to ask smart follow-up questions, refine your look,
          and then recommend ready-to-shop outfits tailored to you.
        </p>

        <figure className="my-6">
          <img src={aiStylistImage} alt="Preview of AI Stylist feature" className="w-full rounded-xl border border-[rgba(26,26,26,0.10)] bg-white/70 shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]" />
        </figure>

        <h2>How AI Stylist Works</h2>

        <p>AI Stylist combines deep fashion knowledge with your personal taste:</p>

        <ul className="mt-3">
          <li>
            <strong>Occasion-based recommendations:</strong> Describe your event in your own words and AI Stylist will suggest outfits that match the setting, mood and
            formality.
          </li>
          <li>
            <strong>Trend-aware styling:</strong> The model is continually updated using current fashion and social media trends, so your looks feel fresh and up to date.
          </li>
          <li>
            <strong>Personalised to you:</strong> It learns from the products you view, favourite and buy, adapting to your preferred colours, fits, brands and styles
            over time.
          </li>
          <li>
            <strong>Head-to-toe outfits:</strong> Get complete looks – from shoes and trousers to tops, outerwear and accessories – all pulled from our multi-brand
            catalogue.
          </li>
          <li>
            <strong>Smart filters:</strong> Refine suggestions by budget, season, comfort level or how bold you want your outfit to be.
          </li>
        </ul>

        <p>
          Because we stock clothing from hundreds of different brands, AI Stylist isn’t limited to a single label or style. It can mix Nike trainers with premium
          outerwear, pair minimalist basics with statement pieces, and show you multiple outfit options so you can choose the one that feels most like you.
        </p>

        <h2>Why You’ll Love AI Stylist</h2>

        <p>
          Fashion moves quickly, and it can be hard to keep up with what’s in, what’s out, and what actually suits your personal taste. AI Stylist takes away the
          guesswork by turning your ideas (“smart casual for a rooftop bar”, “cosy but stylish for cold weather”, “streetwear look for a gig”) into shoppable, curated
          outfits in seconds.
        </p>

        <p>
          No more endlessly scrolling through pages of products or wondering what goes with what. Tell AI Stylist what you’re looking for, and it will search across
          our entire platform to recommend combinations that are both stylish and uniquely you – all ready to add to your basket in just a few taps.
        </p>

        <h2>Status: In Development</h2>

        <p>
          AI Stylist is currently in active development as one of our flagship AI features. Our team is working hard to train and integrate the system so that it feels
          natural to talk to, genuinely helpful, and fully aligned with your style.
        </p>

        <p>
          This feature is not yet available, but it’s coming soon. Keep an eye on this page and follow us on social media for updates, early previews and launch
          announcements. We can’t wait for you to meet your new AI Stylist and start building outfits in a whole new way.
        </p>
      </GenericPageSection>
    </div>
  );
}
