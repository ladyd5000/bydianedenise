"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * The one photograph — fills the right side of the hero.
 * Source lives at `public/diane.png`; Next.js serves an optimized, resized
 * WebP/AVIF. If it ever fails to load, a warm monogram stands in.
 */
export default function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep md:aspect-auto md:h-[560px]">
        {!failed ? (
          <Image
            src="/diane.png"
            alt="Diane Denise"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
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
