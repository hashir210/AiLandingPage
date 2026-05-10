# BlendAI — Your 3D Vision, No Learning Curve

AI-powered Blender add-on that lets you describe what you want and watch it appear. No tutorials, no manual, no learning curve.

<p align="center">
  <img src="./preview.png" alt="BlendAI Preview" width="100%" />
</p>

## ✨ Features

- 🎙️ **Natural Language Commands** — Type or speak in plain English. We translate it into exact Blender operations.
- 🧱 **Smart Scene Building** — Describe objects, layouts, environments. Get a fully structured scene ready to render.
- 🎨 **Material & Shader Generation** — From "weathered concrete" to "iridescent soap bubble" — node trees generated for you.
- 💡 **Lighting & Camera Setup** — Professional-grade setups from a single sentence. Cinematic, product, studio, outdoor.
- 🔁 **Animation Assist** — Keyframes, rigs, constraints — described in plain language, applied in seconds.
- 🔌 **Native Blender Integration** — Works as a Blender add-on. No tab switching. Lives right inside your workspace.

## 🛠️ Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Radix UI** (shadcn/ui primitives)
- **Framer Motion** (animations)
- **next-themes** (dark/light mode)

## 📂 Project Structure

```
app/
  layout.tsx       # Root layout with metadata
  page.tsx         # Landing page composition
  globals.css      # Design tokens & theme
components/
  hero.tsx         # Hero section with CTAs
  navbar.tsx       # Navigation bar
  partners.tsx     # Trusted-by logos
  problem.tsx      # Problem → Solution
  features.tsx     # Feature cards grid
  how-it-works.tsx # 4-step flow
  use-cases.tsx    # Target audience cards
  stats.tsx        # Animated counters
  testimonials.tsx # User reviews
  pricing.tsx      # Pricing plans
  faq.tsx          # FAQ accordion
  cta.tsx          # Final call-to-action
  footer.tsx       # Footer with links
  ui/              # Reusable UI components
lib/
  utils.ts         # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Customization

1. Update copy and CTAs in `components/hero.tsx` and `components/pricing.tsx`
2. Replace testimonials in `components/testimonials.tsx`
3. Adjust branding (name, colors, theme) in `app/globals.css`
4. Add or remove sections in `app/page.tsx`

## 🚢 Deployment

Ready to deploy on any platform that supports Next.js (recommended: **Vercel**).

```bash
npm run build
npm run start
```

## 📄 License

MIT License. See [license.txt](license.txt) for details.
