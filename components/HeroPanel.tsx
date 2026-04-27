"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

const initialState = {
  panel: { transform: "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px)" },
  artwork: { transform: "translate3d(0px,0px,0px) scale(1)" },
  glow: { transform: "translate3d(0px,0px,0px) scale(1)" }
};

export default function HeroPanel() {
  const [parallax, setParallax] = useState(initialState);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 4;
    const rotateX = (0.5 - y) * 2.4;
    const shiftX = (x - 0.5) * 16;
    const shiftY = (0.5 - y) * 12;

    setParallax({
      panel: {
        transform: `perspective(1600px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`
      },
      artwork: {
        transform: `translate3d(${shiftX.toFixed(2)}px,${shiftY.toFixed(2)}px,0px) scale(1.02)`
      },
      glow: {
        transform: `translate3d(${(shiftX * 0.58).toFixed(2)}px,${(shiftY * 0.45).toFixed(2)}px,0px) scale(1.05)`
      }
    });
  };

  const resetMove = () => setParallax(initialState);

  return (
    <section className="hero-shell">
      <div
        className="hero-panel"
        style={parallax.panel as CSSProperties}
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
      >
        <div className="hero-panel__copy">
          <p className="eyebrow-pill">
            <Sparkles size={12} />
            Lifestyle. Culture. Legacy.
          </p>
          <h1 className="hero-title">
            The hub where all four lanes feel like one world.
          </h1>
          <p className="hero-body">
            Litty is the attention engine. A cinematic umbrella brand with community,
            curated recommendations, light commerce, and soft handoffs into the
            ecosystem below it.
          </p>
          <div className="hero-actions">
            <Link href="/brands" className="hero-button hero-button--primary">
              Explore the brands
              <ArrowRight size={16} />
            </Link>
            <Link href="/community" className="hero-button hero-button--ghost">
              See the stories
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-pill">
              <span>4 brands</span>
              <strong>1 DNA</strong>
            </div>
            <div className="stat-pill">
              <span>Pass one</span>
              <strong>Seeded but real-feeling</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel__art">
          <div className="hero-orb hero-orb--red" style={parallax.glow as CSSProperties} />
          <div className="hero-orb hero-orb--gold" />
          <div className="hero-media-card" style={parallax.artwork as CSSProperties}>
            <div className="ghost-monogram" />
            <Image
              src="/brands/litty/wordmark.png"
              alt="Litty Co."
              width={620}
              height={440}
              className="hero-wordmark"
              priority
            />
            <div className="hero-chip-row">
              <span className="focus-chip">
                <Flame size={14} />
                dark clarity
              </span>
              <span className="focus-chip">shared monogram system</span>
              <span className="focus-chip">motion-first shell</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
