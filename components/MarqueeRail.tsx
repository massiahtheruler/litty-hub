"use client";

import { useEffect, useRef } from "react";

interface MarqueeRailProps {
  items: string[];
}

export default function MarqueeRail({ items }: MarqueeRailProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0.42);
  const targetVelocityRef = useRef(0.42);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const wrapOffset = (value: number, width: number) => {
      if (width <= 0) return 0;
      return ((value % width) + width) % width;
    };

    const step = () => {
      const loopWidth = track.scrollWidth / 2;
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.08;
      offsetRef.current = wrapOffset(offsetRef.current + velocityRef.current, loopWidth);
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      targetVelocityRef.current += (0.42 - targetVelocityRef.current) * 0.03;
      frameRef.current = window.requestAnimationFrame(step);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      targetVelocityRef.current = Math.max(
        -14,
        Math.min(24, targetVelocityRef.current + dominantDelta * 0.18)
      );
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const loopItems = [...items, ...items];

  return (
    <div className="marquee-shell" ref={wrapperRef}>
      <div className="marquee-fade marquee-fade--left" />
      <div className="marquee-fade marquee-fade--right" />
      <div ref={trackRef} className="marquee-track">
        {loopItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="marquee-chip"
            aria-hidden={index >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
