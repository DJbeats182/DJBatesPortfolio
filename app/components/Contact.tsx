import { Mail, ArrowRight, Github, Globe } from "lucide-react";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-electric/15 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-tech-bright">
            Let&apos;s Build Something
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            Got a problem worth shipping?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            If your team needs internal tools, customer-facing products, or an
            automation pipeline that turns roadmap into releases — I&apos;m the
            force multiplier you plug in. Tell me the business problem; I&apos;ll
            bring the build.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="glow-electric group inline-flex items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Mail size={17} />
              Get in touch via email
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.liveProjectsHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-tech/50 hover:text-tech-bright"
            >
              <Globe size={16} />
              View Live Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
