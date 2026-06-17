import { ArrowUpRight, Layers, Gauge, Wrench } from "lucide-react";
import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Project Spotlight"
          title="Builder evidence, in production"
          description="Three live products. Each one started as a business problem and shipped on an automated pipeline — here's the challenge, the stack, and why it holds up as it grows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((p) => {
            const accent =
              p.accent === "tech"
                ? "hover:border-tech/50"
                : "hover:border-electric/50";
            const dot = p.accent === "tech" ? "bg-tech" : "bg-electric";
            return (
              <a
                key={p.domain}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:bg-surface ${accent}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{p.name}</h3>
                    <span className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                      {p.domain}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                  />
                </div>

                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-electric-bright">
                      <Wrench size={13} /> Builder challenge
                    </p>
                    <p className="mt-2 leading-relaxed text-muted">
                      {p.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-electric-bright">
                      <Layers size={13} /> Tech stack
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-fg/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-tech-bright">
                      <Gauge size={13} /> Why it scales
                    </p>
                    <p className="mt-2 leading-relaxed text-muted">
                      {p.scales}
                    </p>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg/80 transition-colors group-hover:text-fg">
                  Visit live site
                  <ArrowUpRight size={15} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
