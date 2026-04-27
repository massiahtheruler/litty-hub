import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import BrandCard from "@/components/BrandCard";
import { brands, featuredBrands } from "@/lib/content";

export default function BrandsPage() {
  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <SectionHeading
            eyebrow="Brand system"
            title="A family that acts like a family."
            body="The shared monogram rules keep the system connected while the voice, palette, and use case flex for each lane."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="surface-panel overflow-hidden">
              <Image
                src="/brands/shared/symbol.png"
                alt="Shared symbol overview"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-panel overflow-hidden">
              <Image
                src="/brands/shared/connects.png"
                alt="How the monogram connects across the brands"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection delay={80}>
        <section className="page-section">
          <SectionHeading
            eyebrow="The lanes"
            title="Three active sub-brands and one umbrella."
            body="Litty frames the culture. The other brands handle utility, premium installs, and practical service."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {featuredBrands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
        </section>
      </RevealSection>

      <RevealSection delay={120}>
        <section className="page-section">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-panel overflow-hidden">
              <Image
                src="/brands/shared/applications.png"
                alt="Application examples for the monogram system"
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="surface-panel section-mask p-6 sm:p-8">
              <p className="section-kicker">System rules</p>
              <h2 className="section-title">
                Mirrored horizontally. Stems inward. Tails outward.
              </h2>
              <p className="section-body">
                The mark stays intentional by being strict. Tight spacing, outward
                tails, inward stems, and no decorative extra copies. One logic,
                different reads.
              </p>
              <div className="mt-8 grid gap-3">
                {brands.map((brand) => (
                  <div key={brand.slug} className="surface-tile">
                    <p className="tile-label">{brand.displayName}</p>
                    <p className="tile-copy">
                      Reads as <strong>{brand.monogramVariant}</strong> and carries a {brand.tag.toLowerCase()} tone.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
