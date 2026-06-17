import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          {profile.name} — {profile.role}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js · Tailwind · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
