# Roga Web Development

[![Svelte 5](https://img.shields.io/badge/Svelte-5-orange.svg)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-orange.svg)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg)](https://vercel.com/)

Professional web development services website built with modern technologies. This is the portfolio and business website for Roga Web Development, specializing in custom web applications for small businesses.

**Live Site**: [roga.dev](https://roga.dev)

## Features

### Business Features

- **Professional Portfolio** - Showcasing web development projects and case studies
- **Service Offerings** - Full-stack development, SvelteKit, Vue.js, TypeScript expertise
- **Contact Page** - Book a free 15-minute consultation call
- **Client Testimonials** - Social proof and client logos
- **Responsive Design** - Mobile-first, modern UI/UX
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### Technical Features

- **Svelte 5 with Runes** - Latest Svelte features for reactive state management
- **TypeScript** - Full type safety across the application
- **Tailwind CSS** - Utility-first styling with custom components
- **Static Prerendering** - All pages prerendered for optimal performance
- **Custom Analytics** - Lightweight GA4 tracking with `data-track` attributes
- **Static Assets** - Optimized images, fonts, and logos

## Tech Stack

### Core Framework

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework
- **[Svelte 5](https://svelte.dev/)** - Component framework with runes
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)** - Form styling
- **[Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)** - Typography plugin
- **[Iconify](https://iconify.design/)** - Icon system
- **Poppins Font** - Custom web fonts

### Deployment

- **[Vercel](https://vercel.com/)** - Deployment and hosting (Node.js 22.x runtime)
- **Adapter**: `adapter-vercel` on CI, `adapter-auto` locally (avoids Windows symlink issues)

### Development Tools

- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Testing framework
- **pnpm** - Package manager

## Project Structure

```
src/
├── lib/
│   ├── actions/                # Svelte actions (scroll animations)
│   ├── analytics.ts            # Custom GA4 analytics
│   └── components/             # Reusable components
│       ├── case-studies/       # Case study specific components
│       └── archive/            # Legacy components
├── routes/                     # SvelteKit routes
│   ├── about/                  # About page
│   ├── ai/                     # AI services page
│   ├── contact/                # Contact/booking page (client-side)
│   ├── development/            # Development services page
│   ├── free-tools/             # Free tools page
│   ├── internal-tools/         # Internal tools page
│   ├── privacy/                # Privacy policy
│   ├── projects/               # Portfolio and case studies
│   │   ├── copycleanse/
│   │   ├── eztripr-trip-tracker/
│   │   ├── lot-logistics-web-application/
│   │   └── techcentral-telus/
│   ├── services/               # Service detail pages
│   │   ├── dashboards/
│   │   ├── integrations/
│   │   ├── maintenance/
│   │   ├── rbac-audit-logs/
│   │   └── workflow-automation/
│   └── sitemap.xml/            # Dynamic sitemap
└── app.html                    # HTML template

static/
├── images/                     # Project images and screenshots
├── logos/                      # Client and technology logos
├── fonts/                      # Poppins font files
└── icons/                      # Favicon and app icons
```

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (required package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rogadev/ryanroga.com.git
   cd ryanroga.com
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

## Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm dev --host       # Start dev server with network access

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Prettier + ESLint checks (read-only)
pnpm lint:fix         # Auto-fix lint issues
pnpm format           # Format code with Prettier
pnpm check            # Type check with svelte-check

# Testing
pnpm test             # Run Vitest in watch mode
pnpm test:run         # Run Vitest once (CI-friendly)

# Full Check
pnpm ready            # Format + lint fix + type check + test + build
```

### Svelte 5 Development Guidelines

This project uses **Svelte 5 with runes mode**. Key patterns:

```svelte
<svelte:options runes={true} />

<script>
	import type { Snippet } from 'svelte';

	// Props with $props()
	let { title, children, onClick } = $props<{
		title: string;
		children?: Snippet;
		onClick?: () => void;
	}>();

	// State with $state()
	let count = $state(0);

	// Derived values with $derived()
	let doubled = $derived(count * 2);

	// Effects with $effect()
	$effect(() => {
		console.log('Count changed:', count);
	});
</script>

<!-- Use {@render children?.()} instead of <slot /> -->
<div>
	{@render children?.()}
</div>
```

### Code Quality Standards

- **TypeScript** - All files must be properly typed
- **Svelte 5 Syntax** - Use runes, avoid deprecated patterns
- **Component Structure** - Follow established patterns in `/lib/components`
- **Responsive Design** - Mobile-first with Tailwind classes
- **SEO** - Proper meta tags and semantic HTML

## Pages & Features

### Main Sections

- **Homepage** - Hero, services, process, tech stack, testimonials
- **About** - Professional background and expertise
- **Services** - Web development offerings with detail pages (dashboards, integrations, maintenance, RBAC & audit logs, workflow automation)
- **Projects** - Portfolio with detailed case studies
- **Contact** - Book a free 15-minute consultation call
- **Free Tools** - Public utility tools
- **AI** - AI services page

### Case Studies

- **EzTripr Trip Tracker** - React/Node.js travel application
- **LOT Logistics** - Vue.js/Laravel logistics platform
- **CopyCleanse** - Content cleaning tool
- **TechCentral TELUS** - Enterprise technician management system

## Deployment

### Vercel Deployment

This project is configured for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Deploy** - Automatic deployments from main branch

### Build Configuration

- **Adapter**: `@sveltejs/adapter-vercel` (CI) / `@sveltejs/adapter-auto` (local)
- **Node.js Runtime**: 22.x
- **Build Command**: `pnpm build`
- **Output Directory**: `.svelte-kit`

## Contributing

### Development Workflow

1. Create feature branch from `main`
2. Make changes following code quality standards
3. Run `pnpm ready` to verify everything passes
4. Submit pull request with clear description

### Code Style

- Use Prettier for formatting (configured)
- Follow ESLint rules (configured)
- Use TypeScript for type safety
- Follow Svelte 5 patterns and runes
- Write semantic, accessible HTML

## License

This project is for Roga Web Development business purposes. See individual component licenses for third-party code.

## Contact

**Ryan Roga** - Web Developer

- Website: [roga.dev](https://roga.dev)
- Email: ryan@roga.dev
- LinkedIn: [linkedin.com/in/ryanroga](https://linkedin.com/in/ryanroga)
- GitHub: [github.com/rogadev](https://github.com/rogadev)

---

Built with SvelteKit and modern web technologies.
