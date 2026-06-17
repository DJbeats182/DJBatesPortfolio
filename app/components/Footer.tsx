import { profile, navLinks, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-mono text-sm font-medium text-fg">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role}. Available remote from {profile.location}.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-tech" />
              {profile.location}
            </span>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line/60 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            © 2026 {profile.name} · {profile.location}
          </p>
          <p className="font-mono text-xs text-muted">
            Built with Next.js &amp; Tailwind · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
