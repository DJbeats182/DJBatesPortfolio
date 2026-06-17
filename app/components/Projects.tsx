import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] text-fg/90"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function DomainTag({ project }: { project: Project }) {
  const dot = project.accent === "tech" ? "bg-tech" : "bg-electric";
  return (
    <span className="mt-1.5 flex items-center gap-2 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {project.domain}
    </span>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-electric/40 bg-surface/60 p-7 ring-1 ring-electric/15 transition-all hover:-translate-y-1 hover:border-electric/70 hover:ring-electric/30 sm:p-9"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-electric/60 to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-electric-bright">
            Featured build
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-fg sm:text-3xl">
            {project.name}
          </h3>
          <DomainTag project={project} />
        </div>
        <ArrowUpRight
          size={24}
          className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-bright"
        />
      </div>

      <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-10">
        <div>
          <FieldLabel>Builder challenge</FieldLabel>
          <p className="mt-2.5 text-[15px] leading-relaxed text-fg/80">
            {project.challenge}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-bright">
            Visit live site
            <ArrowUpRight size={15} />
          </span>
        </div>
        <div className="space-y-6">
          <div>
            <FieldLabel>Tech stack</FieldLabel>
            <div className="mt-2.5">
              <StackChips stack={project.stack} />
            </div>
          </div>
          <div>
            <FieldLabel>Why it scales</FieldLabel>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {project.scales}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hover =
    project.accent === "tech"
      ? "hover:border-tech/50"
      : "hover:border-electric/50";
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:bg-surface ${hover}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
          <DomainTag project={project} />
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
        />
      </div>

      <div className="mt-6 space-y-5 text-sm">
        <div>
          <FieldLabel>Builder challenge</FieldLabel>
          <p className="mt-2 leading-relaxed text-muted">{project.challenge}</p>
        </div>
        <div>
          <FieldLabel>Tech stack</FieldLabel>
          <div className="mt-2.5">
            <StackChips stack={project.stack} />
          </div>
        </div>
        <div>
          <FieldLabel>Why it scales</FieldLabel>
          <p className="mt-2 leading-relaxed text-muted">{project.scales}</p>
        </div>
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg/80 transition-colors group-hover:text-fg">
        Visit live site
        <ArrowUpRight size={15} />
      </span>
    </a>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Project Spotlight"
          title="Builder evidence, in production"
          description="Three live products. Each one started as a business problem and shipped on an automated pipeline — here's the challenge, the stack, and why it holds up as it grows."
        />

        <div className="mt-12 space-y-6">
          {featured ? <FeaturedCard project={featured} /> : null}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.domain} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
