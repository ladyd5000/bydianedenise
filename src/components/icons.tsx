import type { SVGProps } from "react";

/* Minimal, single-color line/glyph icons. currentColor throughout. */

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
