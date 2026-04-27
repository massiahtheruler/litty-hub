import RevealSection from "@/components/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import FocusCard from "@/components/FocusCard";
import { marketplaceItems } from "@/lib/content";

export default function MarketplacePage() {
  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <SectionHeading
            eyebrow="Marketplace"
            title="Curated product and service previews."
            body="This page is honest about the stage: curated now, ready for approved sellers and deeper commerce logic later."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {marketplaceItems.map((item) => (
              <FocusCard
                key={item.title}
                title={item.title}
                summary={item.summary}
                meta={`${item.category} · ${item.price}`}
                image={item.image}
                tag={item.tag}
              />
            ))}
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
