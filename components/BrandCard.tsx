import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MoveRight } from "lucide-react";
import { Brand } from "@/lib/types";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const style = {
    "--brand-accent": brand.theme.accent,
    "--brand-soft": brand.theme.accentSoft,
    "--brand-glow": brand.theme.accentGlow,
    "--brand-edge": brand.theme.edge
  } as CSSProperties;

  return (
    <Link href={brand.route} className="brand-card" style={style}>
      <div className="brand-card__copy">
        <p className="brand-card__tag">{brand.tag}</p>
        <h3 className="brand-card__title">{brand.displayName}</h3>
        <p className="brand-card__summary">{brand.summary}</p>
        <div className="brand-card__meta">
          <span>{brand.monogramVariant} monogram</span>
          <span className="brand-card__cta">
            Enter lane
            <MoveRight size={15} />
          </span>
        </div>
      </div>

      <div className="brand-card__media">
        <Image
          src={brand.heroImage}
          alt={brand.displayName}
          width={560}
          height={720}
          className="brand-card__image"
        />
      </div>
    </Link>
  );
}
