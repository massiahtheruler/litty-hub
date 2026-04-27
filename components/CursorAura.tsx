"use client";

import { useEffect, useState } from "react";

export default function CursorAura() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canRun =
      !mediaQuery.matches &&
      window.matchMedia("(pointer:fine)").matches &&
      window.innerWidth >= 1024;

    if (!canRun) return;

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="cursor-aura"
      style={{
        transform: `translate3d(${position.x - 210}px, ${position.y - 210}px, 0)`
      }}
    />
  );
}
