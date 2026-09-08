"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The one photograph — fills the right side of the hero.
 * Drop a portrait at `public/diane.jpg` (portrait orientation) and it appears
 * here. Until then, a warm monogram holds the space.
 */
export default function Portrait() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // The <img> may 404 before React hydrates and attaches onError, so also
  // check for an already-broken image once on mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep md:aspect-auto md:h-[560px]">
        {!failed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src="/diane.jpg"
            alt="Diane Denise"
            className="h-full w-full object-cover object-top"
            onError={() => setFailed(true)}
          />
        )}
        {failed && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-navy/5">
            <span className="font-display text-6xl font-light text-navy/60">DD</span>
            <span className="eyebrow text-taupe/70">Portrait</span>
          </div>
        )}
      </div>
      {/* thin inset frame */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
    </figure>
  );
}
