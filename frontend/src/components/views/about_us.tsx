import bannerAbout from "../../imgs/main_banners/ANYHJS_About_Us_Banner.png";
import about_img from "../../imgs/main_banners/About_us_Page_Image.png";

import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function AboutUs() {
  return (
    <div>
      <ClothingBanner title="Abous Us" subtitle="Learn more about our mission to revolutionize the way you discover fashion with ANYHJS" img_src={bannerAbout} />

      <GenericPageSection label="About" title="About AnyHJS" subtitle="A next-generation, AI-driven fashion platform built around how people actually shop today.">
        <section className="flex flex-col gap-[clamp(2.25rem,4vw,3rem)] text-[var(--soft-black)]">
          <div className="relative grid items-center overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(189,255,0,0.06),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.60))] p-[clamp(1.5rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,0.6fr)] gap-[clamp(1.5rem,3vw,2.5rem)] after:pointer-events-none after:absolute after:inset-0 after:opacity-75 after:content-[''] after:bg-[linear-gradient(135deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0.00)_70%)] max-[640px]:grid-cols-1">
            <div className="relative z-10 text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
              <p>
                AnyHJS is a next-generation fashion platform built for how people shop today. We bring together hundreds of independent and emerging fashion brands into one seamless, AI-powered experience. Instead of bouncing between dozens of websites, you can discover, style and shop full outfits in one place — with the help of smart technology that actually understands fashion.
              </p>

              <p>
                At our core, we&apos;re about making fashion personal, effortless and inclusive. We combine powerful AI tools with a multi-brand marketplace to help you answer two simple questions: “What should I wear?” and “Where do I get it?” — without the stress, guesswork or endless scrolling.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-[0.9rem] max-[640px]:items-start">
              <div className="group flex max-h-[14.5rem] w-full max-w-[22rem] items-center overflow-hidden rounded-[1.1rem] border border-[rgba(26,26,26,0.10)] bg-white/60 shadow-[0_18px_44px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]">
                <img src={about_img} alt="AnyHJS outfits" className="block h-full w-full flex-1 object-cover transition-[transform,filter] duration-500 ease-out [filter:saturate(1.06)_contrast(1.02)] scale-[1.01] group-hover:scale-[1.06] group-hover:[filter:saturate(1.10)_contrast(1.04)]" />
              </div>

              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(26,26,26,0.10)] bg-white/70 px-7 py-[0.35rem] text-[0.78rem] uppercase tracking-[0.10em] text-[rgba(26,26,26,0.70)]">
                One platform. Hundreds of brands. Endless ways to style your season.
              </p>
            </div>
          </div>

          <div className="grid gap-[clamp(0.9rem,2vw,1.4rem)] rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.60))] px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(1rem,2.5vw,1.35rem)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] [grid-template-columns:repeat(3,minmax(0,1fr))] max-[640px]:grid-cols-1">
            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">Brands</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">100+</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">Independent and emerging designers</span>
            </div>

            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">Built with AI</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">AI-First</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">Recommendations, discovery &amp; intelligent styling</span>
            </div>

            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">Future</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">In Progress</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">AI Stylist, VR Wardrobe &amp; VR Changing Room</span>
            </div>
          </div>

          <section className="flex flex-col gap-[1.4rem]">
            <header className="max-w-[44rem] text-[rgba(26,26,26,0.70)] [&_p]:m-0 [&_p]:text-[0.98rem] [&_p]:leading-[1.65]">
              <h2>What We Do</h2>
              <p>
                AnyHJS is a multi-brand fashion marketplace built exclusively online. We focus on clothing, bringing together products from hundreds of different brands and selling them through a single, unified platform.
              </p>
            </header>

            <div className="grid items-start gap-[clamp(1.25rem,3vw,2rem)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,1fr)] max-[640px]:grid-cols-1">
              <div className="text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
                <p>
                  You can mix pieces from different labels, build full outfits, and check out in one simple order. We handle the technology, secure payments and customer support — so you can focus on creating looks you love.
                </p>

                <p>
                  Because we operate purely online, we&apos;re able to move quickly, curate a wide range of styles and invest heavily in technology that makes shopping smarter: personalised recommendations and AI-powered styling tools that bring fashion and tech together.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.12),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.35rem] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]">
                <h3 className="m-0 mb-2 text-[1.05rem] font-extrabold tracking-[0.02em]">One basket. One checkout.</h3>
                <p className="m-0 text-[0.95rem] leading-[1.7] text-[rgba(26,26,26,0.78)]">Mix brands. Build full looks. Check out once. AnyHJS handles the rest behind the scenes.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-[1.4rem]">
            <header className="max-w-[44rem] text-[rgba(26,26,26,0.70)] [&_p]:m-0 [&_p]:text-[0.98rem] [&_p]:leading-[1.65]">
              <h2>AI at the Heart of AnyHJS</h2>
              <p>
                We&apos;re a heavily AI-focused company, and our products are built around intelligent systems designed to help you make better style decisions — faster and with more confidence.
              </p>
            </header>

            <div className="grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(3,minmax(0,1fr))] max-[640px]:grid-cols-1">
              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">AI Stylist</h3>
                <p>
                  <strong>AI Stylist</strong> is your personal digital stylist. You describe your occasion — birthday dinner, smart-casual office day, festival weekend, first date — and our fashion model builds complete outfits from our catalogue to match the vibe, weather and dress code.
                </p>
                <p>
                  It understands trends, listens to your preferences and adapts to your personal style over time, making it easier than ever to look put-together without needing to be an expert in fashion.
                </p>
              </article>

              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">VR Wardrobe</h3>
                <p>
                  <strong>VR Wardrobe</strong> connects the clothes you already own with the options on AnyHJS. Snap a photo of a piece from your wardrobe and our AI analyses its colour, style and cut, then recommends new items from our store that pair perfectly with it.
                </p>
                <p>
                  You keep your favourite pieces — VR Wardrobe helps you build fresh outfits around them, always tailored to you.
                </p>
              </article>

              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">VR Changing Room</h3>
                <p>
                  With <strong>VR Changing Room</strong>, you&apos;ll be able to virtually try on clothing using your phone&apos;s camera. Instead of guessing how something might look, you&apos;ll see it realistically overlaid on your body as you move — like a digital changing room you can access from anywhere.
                </p>
                <p>
                  It&apos;s our way of bringing the “try before you buy” experience of a physical store into the online world.
                </p>
              </article>
            </div>
          </section>

          <section className="flex flex-col gap-[1.4rem]">
            <header>
              <h2>Why Shop with AnyHJS?</h2>
            </header>

            <div className="grid items-start gap-[clamp(1.25rem,3vw,2rem)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,1fr)] max-[640px]:grid-cols-1">
              <ul className="m-0 flex list-none flex-col gap-[0.6rem] p-0 [&_li]:leading-[1.65] [&_li]:text-[rgba(26,26,26,0.82)] [&_li:before]:mr-2 [&_li:before]:text-[var(--accent-color)] [&_li:before]:content-['•']">
                <li><strong>One platform, hundreds of brands:</strong> mix and match without juggling multiple websites or checkouts</li>
                <li><strong>Smarter recommendations:</strong> AI-driven suggestions based on your taste, not just trends</li>
                <li><strong>Future-facing features:</strong> AI stylists, wardrobe tools and virtual experiences designed around real life</li>
                <li><strong>Flexible payments:</strong> pay in a way that works for you</li>
                <li><strong>Community and creators:</strong> a growing ecosystem of designers, influencers and resellers shaping what you see</li>
              </ul>

              <p className="m-0 text-[rgba(26,26,26,0.84)] leading-[1.75]">
                We&apos;re constantly evolving — adding new brands, refining our AI and rolling out features that make online fashion feel more intuitive, more fun and more human. Our mission is to build a fashion experience that feels like it was designed just for you.
              </p>
            </div>
          </section>

          <section className="mt-2 flex flex-col gap-[1.4rem] border-t border-[rgba(26,26,26,0.10)] pt-7">
            <header>
              <h2>Looking Ahead</h2>
            </header>

            <div className="text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
              <p>
                AnyHJS is still growing, and many of our most ambitious features — including AI Stylist, VR Wardrobe and VR Changing Room — are actively in development. As we expand, we&apos;ll continue to blend technology, creativity and community to make fashion more accessible, more enjoyable and more personal for everyone.
              </p>

              <p>
                Whether you&apos;re here for a quick outfit refresh or to explore the future of AI-powered fashion, we&apos;re glad you&apos;ve found us.
              </p>

              <p>Welcome to AnyHJS.</p>
            </div>
          </section>
        </section>
      </GenericPageSection>
    </div>
  );
}
