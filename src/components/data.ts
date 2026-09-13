export type Featured = {
  name: string;
  blurb: string;
  href: string;
  /** plain-text domain shown next to the button, so it visibly reads as a website */
  url: string;
  cta: string;
  kind: string;
};

export const featured: Featured = {
  name: "The Lantern Library",
  blurb:
    "A quiet house of words — novels, poems, and songs about love, heartbreak, healing, and second chances, written so you remember you're not alone. Step inside the reading room and stay a while.",
  href: "https://www.yourlanternlibrary.com",
  url: "yourlanternlibrary.com",
  cta: "Enter the Library",
  kind: "Stories & Writing",
};

export type WorldTile = {
  /** small label above the title — what kind of thing this is */
  eyebrow: string;
  /** the actual site/brand name — the big, readable heading */
  title: string;
  meta: string;
  tagline: string;
  href: string;
  /** plain-text destination shown on the tile; omitted for on-page links */
  url?: string;
  external: boolean;
  cta: string;
};

/** The three destinations — the main way into Diane's world. */
export const worldTiles: WorldTile[] = [
  {
    eyebrow: "Read",
    title: "The Lantern Library",
    meta: "Stories · Books · Poetry",
    tagline: "Enter my world of words.",
    href: "https://www.yourlanternlibrary.com",
    url: "yourlanternlibrary.com",
    external: true,
    cta: "Visit Website",
  },
  {
    eyebrow: "Listen & Watch",
    title: "The Open Music Vault",
    meta: "Lyrics · Music · Spoken Word · Videos",
    tagline: "Dig through the vault. Find your next track.",
    href: "https://www.youtube.com/@theopenmusicvault",
    url: "youtube.com/@theopenmusicvault",
    external: true,
    cta: "Watch on YouTube",
  },
  {
    eyebrow: "Impact",
    title: "My Conscious Kids",
    meta: "Nonprofit for children",
    tagline: "Brighter minds. A kinder tomorrow.",
    href: "https://myconsciouskids.org",
    url: "myconsciouskids.org",
    external: true,
    cta: "Visit Website",
  },
];

export const connectTile: WorldTile = {
  eyebrow: "Connect",
  title: "Get in Touch",
  meta: "About · Contact · Socials",
  tagline: "Let's keep the conversation going.",
  href: "#connect",
  external: false,
  cta: "Go to Contact",
};

export const contactEmail = "dianeddavis@gmail.com";

export const socials = [
  {
    label: "Instagram",
    handle: "@bydianedenise",
    href: "https://www.instagram.com/bydianedenise",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    handle: "bydianedenise",
    href: "https://www.facebook.com/bydianedenise",
    icon: "facebook" as const,
  },
  {
    label: "X",
    handle: "@bydianedenise",
    href: "https://x.com/bydianedenise",
    icon: "x" as const,
  },
  {
    label: "TikTok",
    handle: "@deesvibes18",
    href: "https://www.tiktok.com/@deesvibes18",
    icon: "tiktok" as const,
  },
];
