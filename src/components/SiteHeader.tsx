import { Instagram, Facebook } from "./icons";

/**
 * Author-style masthead: stacked wordmark on the left, quiet nav + two social
 * marks on the right. Sticky, cream, hairline underline.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
        <a href="#top" className="leading-none">
          <span className="block font-display text-lg tracking-[0.14em] text-ink sm:text-xl">
            DIANE DENISE
          </span>
          <span className="mt-0.5 block font-script text-base text-navy/80">
            stories, music &amp; purpose
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 font-sans text-[11px] uppercase tracking-[0.2em] text-ink/70 sm:flex">
            <a href="#about" className="transition-colors hover:text-navy">
              About
            </a>
            <a href="#explore" className="transition-colors hover:text-navy">
              Explore
            </a>
            <a href="#connect" className="transition-colors hover:text-navy">
              Connect
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/bydianedenise"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-navy-ink"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/bydianedenise"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-navy-ink"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
