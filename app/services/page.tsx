import RevealSection from "@/components/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import FocusCard from "@/components/FocusCard";
import { serviceOffers } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <SectionHeading
            eyebrow="Services"
            title="Offers that already fit the ecosystem."
            body="Strategy, consultations, and proof-building services can all live here now without needing the full backend layer to feel intentional."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceOffers.map((offer) => (
              <FocusCard
                key={offer.title}
                title={offer.title}
                summary={offer.summary}
                meta={`${offer.category} · ${offer.delivery}`}
                image={offer.image}
                tag={offer.tag}
              />
            ))}
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
