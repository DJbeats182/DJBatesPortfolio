import {
  FileText,
  Bot,
  GitBranch,
  CheckCircle,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { workflow } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons = {
  fileText: FileText,
  bot: Bot,
  gitBranch: GitBranch,
  checkCircle: CheckCircle,
  rocket: Rocket,
} as const;

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative border-b border-line/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="My AI-Native Workflow"
          title="PRD to Production, on rails"
          description="This is the differentiator. A repeatable pipeline where autonomous agents do the volume and I own the architecture and the quality gate — so a team ships more, faster, without lowering the bar."
        />

        {/* Pipeline rail */}
        <ol className="mt-14 grid gap-5 md:grid-cols-5">
          {workflow.map((step, i) => {
            const Icon = icons[step.icon];
            const isLast = i === workflow.length - 1;
            return (
              <li key={step.id} className="relative flex flex-col">
                <div className="group h-full rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-electric/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-electric-bright transition-colors group-hover:border-electric/50 group-hover:text-tech-bright">
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {step.id}
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-tech-bright">
                    {step.label}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <span className="absolute -right-4 top-9 z-10 hidden text-line md:block">
                    <ArrowRight size={18} className="text-electric/70" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Terminal: the preview-branch step, grounded in real practice */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-[#070b11]">
          <div className="flex items-center gap-2 border-b border-line/80 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">
              preview&nbsp;·&nbsp;zsh
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-tech-bright">~/member-portal</span>
              <span className="text-muted"> $ </span>
              <span className="text-fg">git push origin feat/enrollment-flow</span>
              {"\n"}
              <span className="text-electric-bright">▲ Vercel</span>
              <span className="text-muted">  Building preview deployment…</span>
              {"\n"}
              <span className="text-tech-bright">✓ Ready</span>
              <span className="text-muted">   </span>
              <span className="text-fg/90">
                enrollment-flow-git-feat-djbates.vercel.app
              </span>
              {"\n"}
              <span className="text-electric-bright">→ </span>
              <span className="text-muted">
                awaiting approval to promote{" "}
              </span>
              <span className="text-fg">main → production</span>
            </code>
          </pre>
        </div>

        <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-line bg-surface/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-fg">The result:</span> a
            CI/CD-backed loop that turns one builder into a delivery team —
            instrumented, reviewable, and reversible at every step.
          </p>
          <span className="shrink-0 rounded-lg border border-tech/30 bg-tech/10 px-3.5 py-2 font-mono text-xs text-tech-bright">
            idea → live in hours
          </span>
        </div>
      </div>
    </section>
  );
}
