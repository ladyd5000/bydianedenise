import type { Metadata } from "next";
import { Playfair_Display, Newsreader, Karla, Parisienne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const SITE_URL = "https://bydianedenise.com";
const TITLE = "Diane Denise — Stories. Music. Imagination.";
const DESCRIPTION =
  "The creative home of Diane Denise — storyteller, songwriter, and imaginer. Explore The Lantern Library, The Open Music Vault, and Conscious Kid.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Diane Denise",
    "The Lantern Library",
    "The Open Music Vault",
    "Conscious Kid",
    "stories",
    "music",
    "imagination",
  ],
  authors: [{ name: "Diane Denise" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Diane Denise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@bydianedenise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${newsreader.variable} ${karla.variable} ${parisienne.variable} font-body text-[17px] leading-[1.7] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
