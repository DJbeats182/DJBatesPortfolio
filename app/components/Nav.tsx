import { Terminal } from "lucide-react";
import { profile } from "@/lib/content";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-electric-bright transition-colors group-hover:border-electric/60">
            <Terminal size={16} strokeWidth={2.25} />
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-fg">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-electric/40 bg-electric/10 px-4 py-2 text-sm font-medium text-electric-bright transition-colors hover:bg-electric/20"
        >
          Let&apos;s build
        </a>
      </nav>
    </header>
  );
}
