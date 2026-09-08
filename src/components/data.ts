export type Featured = {
  name: string;
  blurb: string;
  href: string;
  cta: string;
  kind: string;
};

export const featured: Featured = {
  name: "The Lantern Library",
  blurb:
    "A quiet house of words — novels, poems, and songs about love, heartbreak, healing, and second chances, written so you remember you're not alone. Step inside the reading room and stay a while.",
  href: "https://www.yourlanternlibrary.com",
  cta: "Enter the Library",
  kind: "Stories & Writing",
};

export type WorldTile = {
  label: string;
  meta: string;
  tagline: string;
  href: string;
  external: boolean;
};

/** The verb-tiles — the main way into Diane's world. */
export const worldTiles: WorldTile[] = [
  {
    label: "Read",
    meta: "Stories · Books · Poetry",
    tagline: "Enter my world of words.",
    href: "https://www.yourlanternlibrary.com",
    external: true,
  },
  {
    label: "Listen",
    meta: "Lyrics · Music · Spoken Word",
    tagline: "Words you can feel.",
    href: "https://www.youtube.com/@theopenmusicvault",
    external: true,
  },
  {
    label: "Watch",
    meta: "YouTube · Visual Stories",
    tagline: "Stories brought to life.",
    href: "https://www.youtube.com/@theopenmusicvault",
    external: true,
  },
  {
    label: "Impact",
    meta: "My Conscious Kids",
    tagline: "Brighter minds. A kinder tomorrow.",
    href: "https://myconsciouskids.org",
    external: true,
  },
];

export const connectTile: WorldTile = {
  label: "Connect",
  meta: "About · Contact · Socials",
  tagline: "Let's keep the conversation going.",
  href: "#connect",
  external: false,
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
