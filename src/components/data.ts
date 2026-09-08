export type Project = {
  name: string;
  blurb: string;
  href: string;
  cta: string;
  kind: string;
};

export const featured: Project = {
  name: "The Lantern Library",
  blurb:
    "A quiet house of words — novels, poems, and songs about love, heartbreak, healing, and second chances, written so you remember you're not alone. Step inside the reading room and stay a while.",
  href: "https://www.yourlanternlibrary.com",
  cta: "Enter the Library",
  kind: "Stories & Writing",
};

export const projects: Project[] = [
  {
    name: "The Open Music Vault",
    blurb:
      "Original songs and soundscapes, shared freely. A growing collection of music made to score the ordinary and the tender moments in between.",
    href: "https://www.youtube.com/@theopenmusicvault",
    cta: "Listen on YouTube",
    kind: "Music",
  },
  {
    name: "Conscious Kid",
    blurb:
      "Gentle stories and resources for raising thoughtful, kind, curious children — imagination with intention, for families and classrooms.",
    href: "https://myconsciouskids.org",
    cta: "Explore Conscious Kid",
    kind: "Imagination for kids",
  },
];

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
