import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealSection from "@/components/RevealSection";
import { storyPosts } from "@/lib/content";

export function generateStaticParams() {
  return storyPosts.map((post) => ({ slug: post.slug }));
}

export default async function CommunityDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = storyPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page-frame">
      <RevealSection>
        <article className="page-section">
          <div className="surface-panel overflow-hidden p-0">
            <Image
              src={post.image}
              alt={post.title}
              width={1400}
              height={780}
              className="h-[24rem] w-full object-cover md:h-[32rem]"
              priority
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="section-kicker">{post.category}</p>
            <h1 className="hero-title max-w-3xl">{post.title}</h1>
            <p className="hero-body mt-4">{post.excerpt}</p>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-stone-200/78">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/community" className="hero-button hero-button--ghost">
                Back to community
              </Link>
            </div>
          </div>
        </article>
      </RevealSection>
    </div>
  );
}
