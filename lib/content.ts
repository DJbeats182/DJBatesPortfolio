export const profile = {
  name: "DJ Bates",
  role: "Full-Stack Builder & Automation Architect",
  tagline: "Turning business problems into scalable, AI-powered digital products.",
  email: "blooviper@gmail.com",
  location: "Vineyard, Utah",
  liveProjectsHref: "#projects",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/DJbeats182" },
  { label: "Email", href: "mailto:blooviper@gmail.com" },
];

export type Project = {
  name: string;
  href: string;
  domain: string;
  featured?: boolean;
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
    featured: true,
    challenge:
      "Flvme needed a landing hub that felt like the product itself — not a brochure pointing at it. The bar was steep: instant load, zero layout jank on any device, and a look sharp enough to carry the brand on its own.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "AI Agents"],
    scales:
      "I built the UI as composable blocks, so adding a section is a prompt and a preview — not a rebuild. Lighthouse stays green as the page grows, and the SEO never pays for the polish. New ideas land in minutes, not days.",
    accent: "electric",
  },
  {
    name: "Rocket Repair",
    href: "https://rocket-repair.com",
    domain: "rocket-repair.com",
    challenge:
      "A specialized repair shop was losing jobs to phone tag and sticky-note intake. They needed one place where a customer request lands, gets tracked, and turns into booked work — without anyone babysitting a spreadsheet.",
    stack: ["Next.js", "Supabase", "AI Agents", "Vercel"],
    scales:
      "Supabase runs intake and customer comms in real time. New service types or form fields ship through a prompt-to-preview loop: I describe the change, an agent writes it, I approve the preview. No back-office bottleneck, no manual coding crunch.",
    accent: "tech",
  },
  {
    name: "Peak Performance Window Films",
    href: "https://peakperformancewindowfilms.com",
    domain: "peakperformancewindowfilms.com",
    challenge:
      "Premium window film is a trust sale. The site had to look the part and walk a visitor from 'just looking' to 'book me' without hitting a single dead end along the way.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    scales:
      "Every marketing hook and layout bet gets staged on a real preview URL and pressure-tested before it touches production. I ship what's verified and kill what isn't — fast iteration without ever gambling on the live site.",
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
