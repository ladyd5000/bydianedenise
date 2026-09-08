import { socials } from "./data";
import { Instagram, Facebook, XMark, TikTok } from "./icons";

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  x: XMark,
  tiktok: TikTok,
};

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
      {socials.map((s) => {
        const Icon = iconMap[s.icon];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-cream">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink/70">
                {s.label}
              </span>
              <span className="font-body text-xs italic text-taupe">{s.handle}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
