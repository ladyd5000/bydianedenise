import type { Metadata } from "next";
import { contactEmail, featured } from "@/components/data";
import BookCover from "@/components/BookCover";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SocialLinks from "@/components/SocialLinks";
import WorldGrid from "@/components/WorldGrid";

export const metadata: Metadata = {
  title: "Diane Denise — Stories. Music. Purpose.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-wrap items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-20">
            <Reveal>
              <p className="eyebrow">The creative home of Diane Denise</p>
              <h1 className="mt-5 font-display text-[3.25rem] font-medium leading-[1.03] text-ink sm:text-7xl lg:text-[5.25rem]">
                Stories.
                <br />
                Music.
                <br />
                <span className="font-normal italic text-navy">Purpose.</span>
              </h1>
              <p className="mt-7 max-w-prose font-body text-lg text-ink-soft">
                I turn ideas, emotions, and life into stories, lyrics, music, and
                spoken word.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#explore" className="btn-navy">
                  Explore my world
                </a>
                <a href="#about" className="btn-outline">
                  Meet Diane
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Portrait />
            </Reveal>
          </div>
        </section>

        {/* ---------- Pull quote ---------- */}
        <section className="bg-navy py-16 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-body text-2xl italic leading-relaxed text-cream/95 sm:text-3xl">
              &ldquo;Written so you remember you&rsquo;re not alone.&rdquo;
            </p>
            <p className="mt-4 font-sans text-[11px] uppercase tracking-widemark text-cream/50">
              From The Lantern Library
            </p>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="border-b border-ink/10">
          <div className="mx-auto max-w-prose px-6 py-20 text-center sm:py-24">
            <Reveal>
              <p className="font-script text-3xl text-navy">meet</p>
              <h2 className="mt-1 font-display text-4xl text-ink sm:text-5xl">
                Diane Denise
              </h2>
              <p className="mt-4 font-sans text-[11px] uppercase tracking-widemark text-taupe">
                Writer · Lyricist · Storyteller · Founder
              </p>
              <div className="mx-auto my-8 h-px w-12 bg-ink/25" />
              <div className="space-y-4 font-body text-lg text-ink-soft">
                <p>
                  I believe words can make us feel something, see something
                  differently, and sometimes change something.
                </p>
                <p>
                  I&rsquo;m also the founder of My Conscious Kids, creating
                  opportunities for children to grow with confidence, awareness,
                  and purpose.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Featured: The Lantern Library ---------- */}
        <section id="library" className="border-b border-ink/10">
          <div className="mx-auto grid max-w-wrap items-center gap-12 px-6 py-20 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <Reveal>
              <BookCover />
            </Reveal>
            <Reveal delay={100} className="text-center md:text-left">
              <p className="eyebrow">Featured</p>
              <h2 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
                {featured.name}
              </h2>
              <p className="mx-auto mt-6 max-w-prose font-body text-lg text-ink-soft md:mx-0">
                {featured.blurb}
              </p>
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy mt-9"
              >
                {featured.cta}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------- Explore: My World ---------- */}
        <section id="explore" className="border-b border-ink/10 bg-cream-deep">
          <div className="mx-auto max-w-wrap px-6 py-20 sm:py-24">
            <Reveal>
              <p className="eyebrow text-center">Explore</p>
              <h2 className="mt-4 text-center font-display text-4xl text-ink sm:text-5xl">
                My world
              </h2>
            </Reveal>
            <Reveal delay={100} className="mx-auto mt-14 max-w-3xl">
              <WorldGrid />
            </Reveal>
          </div>
        </section>

        {/* ---------- Connect ---------- */}
        <section id="connect" className="border-b border-ink/10">
          <div className="mx-auto max-w-wrap px-6 py-20 text-center sm:py-24">
            <Reveal>
              <p className="font-script text-3xl text-navy">say hello</p>
              <h2 className="mt-1 font-display text-4xl text-ink sm:text-5xl">
                Find me elsewhere
              </h2>
              <p className="mx-auto mt-5 max-w-md font-body text-lg text-ink-soft">
                New stories, songs, and small joys — shared as they happen. Or
                write to me directly.
              </p>
              <a href={`mailto:${contactEmail}`} className="btn-navy mt-8">
                Write to me
              </a>
              <div className="mt-14">
                <SocialLinks />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-navy text-cream">
        <div className="mx-auto flex max-w-wrap flex-col items-center gap-3 px-6 py-14 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-cream/45">
            Welcome to my world
          </p>
          <p className="mt-2 font-display text-xl tracking-[0.14em]">
            DIANE DENISE
          </p>
          <p className="font-script text-xl text-cream/75">
            stories, music &amp; purpose
          </p>
          <nav className="mt-3 flex gap-6 font-sans text-[11px] uppercase tracking-[0.2em] text-cream/60">
            <a href="#about" className="transition-colors hover:text-cream">
              About
            </a>
            <a href="#explore" className="transition-colors hover:text-cream">
              Explore
            </a>
            <a href="#connect" className="transition-colors hover:text-cream">
              Connect
            </a>
          </nav>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 font-body text-sm italic text-cream/70 transition-colors hover:text-cream"
          >
            {contactEmail}
          </a>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.2em] text-cream/40">
            © {new Date().getFullYear()} Diane Denise
          </p>
        </div>
      </footer>
    </>
  );
}
