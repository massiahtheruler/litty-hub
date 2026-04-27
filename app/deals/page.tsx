import RevealSection from "@/components/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import { dealCampaigns } from "@/lib/content";

export default function DealsPage() {
  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <SectionHeading
            eyebrow="Deals"
            title="Current, upcoming, and archived campaign windows."
            body="The public board shows the rhythm of the brand. Live offers create urgency, upcoming ones create anticipation, and archived ones prove this is an active system."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
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
        </section>
      </RevealSection>
    </div>
  );
}
