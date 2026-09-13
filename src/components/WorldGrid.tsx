import { connectTile, worldTiles, type WorldTile } from "./data";
import {
  ConnectGlyph,
  ExternalGlyph,
  ImpactGlyph,
  ListenGlyph,
  ReadGlyph,
} from "./icons";
import type { SVGProps } from "react";

/** Warm, graded browns — lighter, coffee-toned rather than near-black. */
const shades = ["#4E3B2A", "#5C4735", "#6B5540"];
const connectShade = "#7A6249";

const glyphs: Record<string, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  Read: ReadGlyph,
  "Listen & Watch": ListenGlyph,
  Impact: ImpactGlyph,
  Connect: ConnectGlyph,
};

function Tile({ tile, bg }: { tile: WorldTile; bg: string }) {
  const linkProps = tile.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const Icon = glyphs[tile.eyebrow];
  return (
    <a
      href={tile.href}
      {...linkProps}
      className="group flex h-full min-h-[230px] flex-col justify-between text-cream transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
    >
      <div style={{ backgroundColor: bg }} className="flex-1 px-7 py-8 sm:px-8">
        <div className="flex items-center justify-between gap-3">
          {Icon && <Icon className="h-6 w-6 shrink-0 text-cream/65" />}
          <span className="font-sans text-[10px] uppercase tracking-widemark text-cream/60">
            {tile.eyebrow}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight sm:text-[1.7rem]">
          {tile.title}
        </h3>
        <p className="mt-2 font-body text-sm text-cream/75">{tile.meta}</p>
        <p className="mt-1.5 font-body text-sm italic text-[#DCB988]">
          {tile.tagline}
        </p>
      </div>

      {/* Solid navy bar — same treatment as the Enter the Library button. Always
          visible, not hover-dependent, so it works on touch. */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 bg-navy px-7 py-4 sm:px-8">
        <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-transform duration-300 ease-editorial group-hover:translate-x-1">
          {tile.cta}
          {tile.external ? (
            <ExternalGlyph className="h-3.5 w-3.5" />
          ) : (
            <span aria-hidden="true">&darr;</span>
          )}
        </span>
        {tile.url && (
          <span className="font-body text-[11px] text-cream/70 underline decoration-cream/40 underline-offset-2">
            {tile.url}
          </span>
        )}
      </div>
    </a>
  );
}

export default function WorldGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {worldTiles.map((tile, i) => (
        <Tile key={tile.eyebrow} tile={tile} bg={shades[i % shades.length]} />
      ))}
      <div className="sm:col-span-3">
        <Tile tile={connectTile} bg={connectShade} />
      </div>
    </div>
  );
}
