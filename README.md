# Builder Portfolio

A high-impact, minimalist portfolio for a **Full-Stack Builder & Automation Architect** — dark-mode startup aesthetic, AI-native workflow story, built to ship on Vercel.

## Stack

- **Next.js 15** (App Router, React 19) — server-rendered, fast by default
- **Tailwind CSS v4** — design tokens in `app/globals.css`
- **TypeScript** — type-safe content model in `lib/content.ts`
- **lucide-react** — clean iconography

## Structure

```
app/
  layout.tsx              # metadata, fonts, global styles
  page.tsx                # section composition
  globals.css             # theme tokens (electric-blue + tech-green on ink)
  components/
    Nav.tsx
    Hero.tsx              # headline + capability cards
    Projects.tsx          # flvme / rocket-repair / peak-performance spotlight
    WorkflowSection.tsx   # PRD → Production pipeline (the differentiator)
    Contact.tsx
    Footer.tsx
lib/content.ts            # all copy + project/workflow data
```

To update copy, project details, or the contact email, edit `lib/content.ts` — no component changes needed.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push to a Git repo and import at [vercel.com/new](https://vercel.com/new) — zero config. Every branch gets a preview URL (the same preview-branch step described in the Workflow section).
