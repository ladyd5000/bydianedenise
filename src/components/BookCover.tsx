/**
 * Featured "book" — pure SVG, no image asset. Navy hardcover with a warm
 * lantern-glow, a gentle 3D tilt, and a soft drop shadow. Palette-matched.
 */
const serif = { fontFamily: "var(--font-display), Georgia, serif" } as const;
const sans = { fontFamily: "var(--font-sans), system-ui, sans-serif" } as const;

export default function BookCover() {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <svg
        viewBox="0 0 360 470"
        role="img"
        aria-label="The Lantern Library — a book by Diane Denise"
        className="w-full"
      >
        <defs>
          <linearGradient id="ll-cover" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2B3757" />
            <stop offset="0.55" stopColor="#1E273E" />
            <stop offset="1" stopColor="#161D2E" />
          </linearGradient>
          <radialGradient id="ll-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#F6CE86" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="#E4BE7E" stopOpacity="0.14" />
            <stop offset="1" stopColor="#E4BE7E" stopOpacity="0" />
          </radialGradient>
          <filter id="ll-shadow" x="-40%" y="-20%" width="180%" height="160%">
            <feDropShadow
              dx="0"
              dy="20"
              stdDeviation="22"
              floodColor="#0A0E18"
              floodOpacity="0.42"
            />
          </filter>
          <clipPath id="ll-clip">
            <rect x="74" y="26" width="212" height="402" rx="11" />
          </clipPath>
        </defs>

        <g transform="rotate(-6 180 232)">
          {/* page block / thickness */}
          <rect
            x="82"
            y="30"
            width="212"
            height="402"
            rx="11"
            fill="#EFE7D8"
            filter="url(#ll-shadow)"
          />
          <rect x="82" y="30" width="212" height="402" rx="11" fill="#000" opacity="0.05" />

          {/* front cover */}
          <rect x="74" y="26" width="212" height="402" rx="11" fill="url(#ll-cover)" />

          {/* spine edge highlight */}
          <rect x="79" y="34" width="2.5" height="386" rx="1.25" fill="#46557C" opacity="0.5" />

          {/* lantern glow, kept inside the cover */}
          <g clipPath="url(#ll-clip)">
            <circle cx="252" cy="126" r="104" fill="url(#ll-glow)" opacity="0.85" />
            <circle cx="122" cy="118" r="58" fill="url(#ll-glow)" opacity="0.28" />
            <circle cx="184" cy="286" r="40" fill="url(#ll-glow)" opacity="0.6" />
          </g>

          {/* foil frame */}
          <rect
            x="92"
            y="46"
            width="176"
            height="362"
            fill="none"
            stroke="#E4BE7E"
            strokeOpacity="0.55"
            strokeWidth="1"
          />

          {/* eyebrow */}
          <text x="106" y="100" fill="#E4BE7E" fontSize="9" letterSpacing="3.5" style={sans}>
            A HOUSE OF WORDS
          </text>

          {/* title */}
          <text x="105" y="150" fill="#F5ECDC" fontSize="29" style={serif}>
            The Lantern
          </text>
          <text x="105" y="186" fill="#F5ECDC" fontSize="29" style={serif}>
            Library
          </text>

          {/* author */}
          <text
            x="180"
            y="392"
            textAnchor="middle"
            fill="#E4BE7E"
            fontSize="11"
            letterSpacing="3.5"
            style={sans}
          >
            DIANE DENISE
          </text>
        </g>
      </svg>
    </div>
  );
}
