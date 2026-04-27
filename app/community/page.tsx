import RevealSection from "@/components/RevealSection";
import SectionHeading from "@/components/SectionHeading";
import FocusCard from "@/components/FocusCard";
import { contentPillars, storyPosts } from "@/lib/content";

export default function CommunityPage() {
  return (
    <div className="page-frame">
      <RevealSection>
        <section className="page-section">
          <SectionHeading
            eyebrow="Community"
            title="Stories that make the ecosystem feel lived in."
            body="Pass one uses seeded editorial content, but the structure is already ready for real posts, recommendations, and contributor layers later."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        </section>
      </RevealSection>

      <RevealSection delay={80}>
        <section className="page-section">
          <SectionHeading
            eyebrow="Pillars"
            title="Content lives best when the lanes are clear."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contentPillars.map((pillar) => (
              <div key={pillar.title} className="surface-panel section-mask p-5">
                <p className="tile-label">{pillar.title}</p>
                <p className="tile-copy mt-3">{pillar.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
