import { connectTile, worldTiles, type WorldTile } from "./data";

/** Warm, graded browns — darkest to lightest across the grid. */
const shades = ["#33281F", "#3B2E23", "#4A3A2C", "#5A4636"];
const connectShade = "#6B513D";

function Tile({ tile, bg }: { tile: WorldTile; bg: string }) {
  const linkProps = tile.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={tile.href}
      {...linkProps}
      style={{ backgroundColor: bg }}
      className="group flex h-full min-h-[190px] flex-col justify-center px-8 py-10 text-cream transition-transform duration-300 ease-editorial hover:-translate-y-0.5 sm:px-10"
    >
      <h3 className="flex items-center gap-3 font-display text-3xl sm:text-4xl">
        {tile.label}
        <span
          aria-hidden="true"
          className="text-2xl leading-none transition-transform duration-300 ease-editorial group-hover:translate-x-1.5"
        >
          &rarr;
        </span>
      </h3>
      <p className="mt-3 font-body text-sm text-cream/65">{tile.meta}</p>
      <p className="mt-1.5 font-body text-sm italic text-[#DCB988]">
        {tile.tagline}
      </p>
    </a>
  );
}

export default function WorldGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {worldTiles.map((tile, i) => (
        <Tile key={tile.label} tile={tile} bg={shades[i % shades.length]} />
      ))}
      <div className="sm:col-span-2">
        <Tile tile={connectTile} bg={connectShade} />
      </div>
    </div>
  );
}
