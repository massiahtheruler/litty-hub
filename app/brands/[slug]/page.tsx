import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealSection from "@/components/RevealSection";
import { brands } from "@/lib/content";

export function generateStaticParams() {
  return brands
    .filter((brand) => brand.slug !== "litty-co")
    .map((brand) => ({ slug: brand.slug }));
}

export default async function BrandDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((entry) => entry.slug === slug);

  if (!brand || brand.slug === "litty-co") {
    notFound();
  }

  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <div className="brand-hero">
            <div className="brand-hero__copy">
              <p className="section-kicker">{brand.tag}</p>
              <h1 className="hero-title max-w-3xl">{brand.displayName}</h1>
              <p className="hero-body max-w-2xl">{brand.summary}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {brand.proof.map((item) => (
                  <div key={item} className="surface-tile">
                    <p className="tile-copy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="brand-hero__media">
              <Image
                src={brand.heroImage}
                alt={brand.displayName}
                width={920}
                height={1100}
                className="brand-hero__poster"
                priority
              />
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection delay={80}>
        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-panel overflow-hidden">
              <Image
                src={brand.secondaryImage}
                alt={`${brand.displayName} supporting visual`}
                width={1100}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-panel section-mask p-6 sm:p-8">
              <p className="section-kicker">Signature</p>
              <h2 className="section-title">{brand.signature}</h2>
              <p className="section-body">
                <strong>Audience:</strong> {brand.audience}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {brand.palette.map((color) => (
                  <span key={color} className="palette-chip">
                    <span className="palette-chip__swatch" style={{ backgroundColor: color }} />
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection delay={140}>
        <section className="page-section">
          <div className="grid gap-6">
            {brand.sections.map((section, index) => (
              <div
                key={section.title}
                className={`grid gap-6 lg:grid-cols-[1fr_0.95fr] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="surface-panel section-mask p-6 sm:p-8">
                  <p className="section-kicker">{section.eyebrow}</p>
                  <h2 className="section-title">{section.title}</h2>
                  <p className="section-body">{section.body}</p>
                  <ul className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="bullet-line">
                        <span className="bullet-line__dot" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="surface-panel overflow-hidden">
                  <Image
                    src={section.media || brand.secondaryImage}
                    alt={section.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      <RevealSection delay={200}>
        <section className="page-section">
          <div className="cta-band">
            <div>
              <p className="section-kicker">Next move</p>
              <h2 className="section-title max-w-2xl">This lane already fits the Litty world.</h2>
              <p className="section-body max-w-2xl">
                The pass-one page gives the brand a real home now while leaving room
                for fuller selling, booking, or content logic later.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link href="/brands" className="hero-button hero-button--ghost">
                Back to brands
              </Link>
              <Link href={brand.ctaHref} className="hero-button hero-button--primary">
                {brand.ctaLabel}
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
