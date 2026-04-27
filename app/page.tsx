import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import HeroPanel from "@/components/HeroPanel";
import SectionHeading from "@/components/SectionHeading";
import MarqueeRail from "@/components/MarqueeRail";
import BrandCard from "@/components/BrandCard";
import FocusCard from "@/components/FocusCard";
import {
  contentPillars,
  dealCampaigns,
  featuredBrands,
  marqueePhrases,
  marketplaceItems,
  serviceOffers,
  storyPosts
} from "@/lib/content";

export default function HomePage() {
  return (
    <div className="page-frame">
      <RevealSection delay={20}>
        <HeroPanel />
      </RevealSection>

      <RevealSection delay={90}>
        <MarqueeRail items={marqueePhrases} />
      </RevealSection>

      <RevealSection delay={140} className="page-section">
        <SectionHeading
          eyebrow="Shared DNA"
          title="One monogram logic. Multiple personalities."
          body="The center-letter system keeps the family related without flattening the brands into one repeated stamp."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-panel section-mask p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {contentPillars.map((pillar) => (
                <div key={pillar.title} className="surface-tile">
                  <p className="tile-label">{pillar.title}</p>
                  <p className="tile-copy">{pillar.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-0">
            <Image
              src="/brands/shared/connects.png"
              alt="Shared monogram system across the four brands"
              width={1200}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </RevealSection>

      <RevealSection delay={180} className="page-section">
        <SectionHeading
          eyebrow="Brand lanes"
          title="Three active lanes inside the Litty world."
          body="Each sub-brand gets its own space, its own tone, and its own offer while still reading as part of the same ecosystem."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </RevealSection>

      <RevealSection delay={240} className="page-section">
        <SectionHeading
          eyebrow="Community"
          title="Editorial energy that sells the lifestyle first."
          body="The posts preview where the ecosystem is headed: ambition, behind-the-build context, and the feeling of a real come-up."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {storyPosts.map((post) => (
            <FocusCard
              key={post.slug}
              title={post.title}
              summary={post.excerpt}
              meta={`${post.category} · ${post.readTime}`}
              image={post.image}
              href={`/community/${post.slug}`}
              tag="Story"
              accent="#D4AF37"
            />
          ))}
        </div>
      </RevealSection>

      <RevealSection delay={300} className="page-section">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Marketplace preview"
              title="Curated products and services with honest pass-one framing."
              body="This first build is seeded, not fake-live. The surfaces still read like a real product base and can grow into full approval and selling flows later."
            />
            <div className="mt-8 grid gap-5">
              {marketplaceItems.slice(0, 2).map((item) => (
                <FocusCard
                  key={item.title}
                  title={item.title}
                  summary={item.summary}
                  meta={`${item.category} · ${item.price}`}
                  image={item.image}
                  href="/marketplace"
                  tag={item.tag}
                />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Service layer"
              title="Lead-worthy offers that fit the ecosystem."
              body="Consults, direction, and service-entry offers already have a place in pass one, even before the heavier booking logic lands."
            />
            <div className="mt-8 grid gap-5">
              {serviceOffers.slice(0, 2).map((offer) => (
                <FocusCard
                  key={offer.title}
                  title={offer.title}
                  summary={offer.summary}
                  meta={`${offer.category} · ${offer.delivery}`}
                  image={offer.image}
                  href="/services"
                  tag={offer.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection delay={350} className="page-section">
        <SectionHeading
          eyebrow="Deals and drops"
          title="Campaign timing should feel alive, not hidden."
          body="Current, upcoming, and archived incentives all help the brand feel in motion. Pass one makes that visible without pretending checkout logic already exists."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {dealCampaigns.map((deal) => (
            <article key={deal.code} className="surface-panel deal-card">
              <div className="deal-card__row">
                <p className="deal-card__status">{deal.status.replace("-", " ")}</p>
                <p className="deal-card__window">{deal.window}</p>
              </div>
              <h3 className="deal-card__title">{deal.title}</h3>
              <p className="deal-card__summary">{deal.summary}</p>
              <div className="deal-card__footer">
                <span>{deal.code}</span>
                <strong>{deal.reward}</strong>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection delay={420} className="page-section">
        <div className="cta-band">
          <div>
            <p className="section-kicker">Built to scale</p>
            <h2 className="section-title max-w-2xl">
              Start with the shell, then let the ecosystem fill it in.
            </h2>
            <p className="section-body max-w-2xl">
              Litty already has the right structure for stronger community,
              approved sellers, editorial distribution, and deeper motion passes.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link href="/brands" className="hero-button hero-button--primary">
              View the brands
            </Link>
            <Link href="/deals" className="hero-button hero-button--ghost">
              Browse the campaign board
            </Link>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
