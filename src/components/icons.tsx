import type { SVGProps } from "react";

/* Minimal, single-color line/glyph icons. currentColor throughout. */

function Glyph({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- "My World" tile glyphs --- */

export function ReadGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M12 6.5C10.7 5.2 8.8 4.5 6.5 4.5H4v13h2.5c2.3 0 4.2.7 5.5 2" />
      <path d="M12 6.5c1.3-1.3 3.2-2 5.5-2H20v13h-2.5c-2.3 0-4.2.7-5.5 2" />
      <path d="M12 6.5v12" />
    </Glyph>
  );
}

export function ListenGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M9 17V5l10-2v12" />
      <circle cx="6.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="15" r="2.5" />
    </Glyph>
  );
}

export function WatchGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3.5" />
      <path d="M10.5 9.2l4.2 2.8-4.2 2.8z" fill="currentColor" stroke="none" />
    </Glyph>
  );
}

export function ImpactGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="8" r="2.6" />
      <path d="M12 2.6v1.5M17 4.6l-1 1.2M7 4.6l1 1.2" />
      <path d="M3.4 13c2.3 3.7 5.2 5.6 8.6 5.6s6.3-1.9 8.6-5.6" />
      <path d="M3.4 13c-.5-.9-.3-1.9.5-2.5.8-.5 1.9-.3 2.6.5" />
      <path d="M20.6 13c.5-.9.3-1.9-.5-2.5-.8-.5-1.9-.3-2.6.5" />
    </Glyph>
  );
}

export function ConnectGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M21 11.5a7 7 0 0 1-7 7H8l-4 3v-4.2A7 7 0 0 1 14 4.5h.2a7 7 0 0 1 6.8 7z" />
      <path d="M9 10.5h6M9 14h4" />
    </Glyph>
  );
}

/** Diagonal arrow + corner — the universal "opens elsewhere" mark. */
export function ExternalGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </Glyph>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Lantern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2v2" />
      <path d="M8 4h8" />
      <rect x="6" y="4" width="12" height="14" rx="4" />
      <path d="M12 8v6" />
      <path d="M9 21h6" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5V13h2.8v8h3.2z" />
    </svg>
  );
}

export function XMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.96 6.82H1.66l7.73-8.84L1.5 2.25h6.83l4.71 6.23 5.2-6.23zm-1.16 17.52h1.83L7.05 4.13H5.09l11.99 15.64z" />
    </svg>
  );
}

export function TikTok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2.36 1.62 3.77 3.9 3.92v2.63c-1.32.13-2.47-.3-3.82-1.11v4.9c0 6.23-6.79 8.18-9.52 3.71-1.75-2.88-.68-7.93 4.97-8.13v2.77c-.43.07-.9.18-1.32.32-1.27.43-1.99 1.24-1.79 2.66.38 2.72 5.37 3.52 4.95-1.79V3.01h2.65z" />
    </svg>
  );
}
