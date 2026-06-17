export const profile = {
  name: "DJ Bates",
  role: "Full-Stack Builder & Automation Architect",
  tagline: "Turning business problems into scalable, AI-powered digital products.",
  email: "blooviper@gmail.com",
  location: "Utah, USA",
  liveProjectsHref: "#projects",
};

export type Project = {
  name: string;
  href: string;
  domain: string;
  challenge: string;
  stack: string[];
  scales: string;
  accent: "electric" | "tech";
};

export const projects: Project[] = [
  {
    name: "Flvme",
    href: "https://flvme.com",
    domain: "flvme.com",
    challenge:
      "Ship a high-performance product landing hub that loads instantly and converts — a destination polished enough to anchor the brand, not just describe it.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "AI Agents"],
    scales:
      "Built on an AI-first lifecycle so UI components iterate in minutes, not days. The modular architecture lets the layout evolve without touching core load times or SEO — fast stays fast as the surface area grows.",
    accent: "electric",
  },
  {
    name: "Rocket Repair",
    href: "https://rocket-repair.com",
    domain: "rocket-repair.com",
    challenge:
      "Give a specialized repair business one conversion-oriented platform to handle service intake and customer communication without a back-office bottleneck.",
    stack: ["Next.js", "Supabase", "AI Agents", "Vercel"],
    scales:
      "Autonomous coding agents sit in the update pipeline, so new feature requests and service changes ship through a prompt-to-production workflow. The business stays agile while staying off the hook for manual code.",
    accent: "tech",
  },
  {
    name: "Peak Performance Window Films",
    href: "https://peakperformancewindowfilms.com",
    domain: "peakperformancewindowfilms.com",
    challenge:
      "Signal premium value and carry the visitor from interest to service inquiry with zero friction — every section earning the next click.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    scales:
      "Structured for rapid prototyping on a PRD-to-Production pipeline: new marketing hooks and layout changes get tested in an isolated preview environment and only reach production once they're performance-verified.",
    accent: "electric",
  },
];

export type WorkflowStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: "fileText" | "bot" | "gitBranch" | "checkCircle" | "rocket";
};

export const workflow: WorkflowStep[] = [
  {
    id: "01",
    label: "Define",
    title: "PRD",
    description:
      "Every build starts with a tight product requirements doc — scope, success criteria, and constraints written down before a line of code.",
    icon: "fileText",
  },
  {
    id: "02",
    label: "Generate",
    title: "Claude Code / Codex",
    description:
      "Autonomous coding agents turn the PRD into working implementation. I direct, review, and course-correct — the agents do the keystrokes.",
    icon: "bot",
  },
  {
    id: "03",
    label: "Isolate",
    title: "Preview Branch",
    description:
      "Every change deploys to an isolated preview URL. Stakeholders see the real thing — no 'works on my machine,' no guesswork.",
    icon: "gitBranch",
  },
  {
    id: "04",
    label: "Verify",
    title: "Approval",
    description:
      "Performance, data integrity, and acceptance criteria are checked against the PRD. Nothing ships on vibes — it ships when it passes validation.",
    icon: "checkCircle",
  },
  {
    id: "05",
    label: "Ship",
    title: "Production",
    description:
      "Merge triggers an automated CI/CD release to Vercel. Idea to live in hours, repeatable every time, with rollback one click away.",
    icon: "rocket",
  },
];

export const capabilities = [
  {
    title: "Force multiplier",
    body: "I compress a team's idea-to-shipped cycle. Agents handle the volume; I own the judgment, architecture, and quality gate.",
    icon: "zap",
  },
  {
    title: "Business-first",
    body: "I read a problem in terms of revenue, conversion, and operational drag — then build the smallest thing that moves the metric.",
    icon: "target",
  },
  {
    title: "Automation by default",
    body: "CI/CD, preview environments, and agent pipelines aren't extras. They're how internal tools get built fast and stay reliable.",
    icon: "workflow",
  },
];
