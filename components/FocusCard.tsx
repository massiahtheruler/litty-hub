import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface FocusCardProps {
  title: string;
  summary: string;
  meta: string;
  image: string;
  href?: string;
  accent?: string;
  tag?: string;
}

export default function FocusCard({
  title,
  summary,
  meta,
  image,
  href,
  accent,
  tag
}: FocusCardProps) {
  const content = (
    <article className="focus-card">
      <div className="focus-card__imageWrap">
        <Image
          src={image}
          alt={title}
          width={720}
          height={520}
          className="focus-card__image"
        />
        {tag ? (
          <span className="focus-card__tag" style={accent ? { color: accent } : undefined}>
            {tag}
          </span>
        ) : null}
      </div>
      <div className="focus-card__body">
        <p className="focus-card__meta">{meta}</p>
        <h3 className="focus-card__title">{title}</h3>
        <p className="focus-card__summary">{summary}</p>
        {href ? (
          <span className="focus-card__link">
            Read more
            <MoveRight size={15} />
          </span>
        ) : null}
      </div>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
