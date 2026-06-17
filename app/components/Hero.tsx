import { ArrowRight, Sparkles, Zap, Target, Workflow } from "lucide-react";
import { profile, capabilities } from "@/lib/content";

const capIcons = { zap: Zap, target: Target, workflow: Workflow } as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line/60"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-electric/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[320px] w-[420px] rounded-full bg-tech/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 font-mono text-xs text-muted">
          <Sparkles size={13} className="text-tech-bright" />
          AI-native delivery, built to ship
        </div>

        <h1 className="animate-rise mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-gradient">Full-Stack Builder</span>
          <br />
          <span className="text-fg">&amp; Automation Architect</span>
        </h1>

        <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline} I act as a{" "}
          <span className="text-fg">force multiplier</span> — pairing autonomous
          coding agents with hard engineering judgment to take an idea from PRD
          to production in hours, not sprints.
        </p>

        <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={profile.liveProjectsHref}
            className="glow-electric group inline-flex items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View Live Projects
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-tech/50 hover:text-tech-bright"
          >
            Let&apos;s Build Something
          </a>
        </div>

        <dl className="animate-rise mt-16 grid gap-4 sm:grid-cols-3">
          {capabilities.map((c) => {
            const Icon = capIcons[c.icon as keyof typeof capIcons];
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-electric/40"
              >
                <dt className="flex items-center gap-2.5 text-sm font-semibold text-fg">
                  <Icon size={17} className="text-electric-bright" />
                  {c.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {c.body}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
