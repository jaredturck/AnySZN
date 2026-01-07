import banner1 from "../../imgs/banners/collabs.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Collabs() {
  return (
    <div>
      <ClothingBanner
        title="Collaborate with AnyHJS"
        subtitle="Partner, create and sell with our multi-brand fashion platform"
        img_src={banner1}
      />

      <GenericPageSection
        label="Collaboration"
        title="Collaborate with AnyHJS"
        subtitle="Information for influencers, brands, designers and sellers who want to work with us."
      >
        <div className="space-y-8">
          <p className="text-[0.98rem] leading-7 text-black/75">
            At AnyHJS, we’re building more than a store – we’re creating a connected fashion ecosystem.
            From global brands like Nike and Adidas to emerging designers, fashion students and independent
            resellers, our goal is to bring the entire style community together in one place. If you’re
            interested in collaborating, advertising or selling through our platform, this page is for you.
          </p>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              For Influencers &amp; Creators
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Are you a fashion creator, stylist or content producer with an engaged audience on Instagram,
              TikTok, YouTube or other platforms? We’d love to work with you. As a multi-brand hub, AnyHJS
              gives you a single place to showcase complete outfits from hundreds of labels, making it easy
              for your followers to shop your looks in just a few clicks.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              We offer flexible collaboration opportunities, including sponsored content, featured
              collections, outfit edits, affiliate links and long-term ambassador partnerships. Whether
              you’re just starting to grow your audience or already have a large following, we’re open to
              hearing your ideas and building something that works for both sides.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              For Designers, Brands &amp; Fashion Students
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              If you’re a fashion designer, brand owner or fashion student with your own pieces to showcase,
              AnyHJS can help you connect with a wider audience. We already stock products from hundreds of
              established brands, and we’re actively exploring ways to highlight unique, independent talent
              alongside them.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              From capsule collections to limited drops and co-branded campaigns, we’re interested in
              creative collaborations that bring something fresh to our community. If you have a collection,
              project or concept you’d like to launch, we can help with visibility, logistics and a ready-made
              audience of style-conscious shoppers.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Marketplace: Sell Your Clothes Through AnyHJS
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              One of our major future features is the <strong>AnyHJS Marketplace</strong> – a space where
              anyone can list and sell clothing through our platform. Think of it as a fashion-first
              marketplace where you can sell pre-loved items, custom pieces or small batch designs, while
              we handle the heavy lifting.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">Our vision is simple:</p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>You list your items on our site.</li>
              <li>We handle the payments and order processing.</li>
              <li>You ship the items, and we take a small commission on each sale.</li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">
              This means you get access to the same audience that shops big brands like Nike and Adidas on
              our platform, while enjoying streamlined logistics and secure payment handling. The Marketplace
              feature is currently in development – watch this space for launch details and seller onboarding
              information.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Collaboration Options at a Glance
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-black/10 bg-white/70 text-sm shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]">
                <thead className="bg-black/[0.04]">
                  <tr>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">
                      Collaboration Type
                    </th>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">
                      Who It’s For
                    </th>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">
                      What It Involves
                    </th>
                  </tr>
                </thead>

                <tbody className="[&>tr:nth-child(even)]:bg-black/[0.02] [&>tr:hover]:bg-[#BDFF00]/10">
                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Influencer Partnerships</td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Social media creators, stylists, fashion influencers
                    </td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Sponsored outfits, affiliate links, featured edits, co-branded campaigns.
                    </td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Designer &amp; Brand Collaborations</td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Established brands, emerging designers, fashion students
                    </td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Capsule collections, limited drops, joint promotions and editorial features.
                    </td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Marketplace Selling (Coming Soon)</td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Independent sellers, resellers, individuals with clothes to sell
                    </td>
                    <td className="px-4 py-3 align-top text-black/80">
                      List items on AnyHJS, we manage payments and logistics, you earn minus a small commission.
                    </td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Advertising &amp; Media Campaigns</td>
                    <td className="px-4 py-3 align-top text-black/80">Brands, agencies, creative studios</td>
                    <td className="px-4 py-3 align-top text-black/80">
                      Display placements, sponsored sections, integrated content and social amplification.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              How to Get in Touch
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              If you’re interested in collaborating with AnyHJS, we’d love to hear from you. There are several
              ways to reach out:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>
                Use the contact form on our <strong>Contact</strong> page and select “Collaboration / Partnership”
                from the subject options.
              </li>
              <li>Send us an email with your proposal, media kit or portfolio (including links to your social channels, if relevant).</li>
              <li>
                Reach out via our social media platforms (Instagram, TikTok, YouTube, Pinterest, Twitter/X, Discord,
                Snapchat) and let us know you’re interested in working together.
              </li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">To help us review your enquiry quickly, please include:</p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>A brief introduction about you or your brand.</li>
              <li>
                What kind of collaboration you’re interested in (influencer campaign, marketplace selling, designer collab, etc.).
              </li>
              <li>Any relevant links (social media profiles, website, portfolio, lookbook).</li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">
              We review collaboration requests regularly and will get back to you if we see a good fit with our
              audience and roadmap. Even if your idea is experimental or early-stage, we’re always open to creative
              conversations – especially when it pushes fashion and technology forward.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Join the AnyHJS Community
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              AnyHJS is built on the idea that fashion is better when it’s shared. Whether you’re inspiring people
              with your outfits, designing your own collections, reselling pieces you love, or planning a bigger
              campaign, our platform is here to help you reach more people and make more impact.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Follow us on social media, explore our latest drops and stay tuned as we roll out the Marketplace and
              other collaboration features. We’re excited to build the future of fashion together – one collab at a time.
            </p>
          </section>
        </div>
      </GenericPageSection>
    </div>
  );
}
