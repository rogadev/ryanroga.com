# Roga Web Development

[![Svelte 5](https://img.shields.io/badge/Svelte-5-orange.svg)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-orange.svg)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue.svg)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg)](https://vercel.com/)

Professional web development services website built with modern technologies. This is the portfolio and business website for Roga Web Development, specializing in custom web applications for small businesses.

🌐 **Live Site**: [roga.dev](https://roga.dev)

## 🚀 Features

### Business Features

- **Professional Portfolio** - Showcasing web development projects and case studies
- **Service Offerings** - Full-stack development, SvelteKit, Vue.js, TypeScript expertise
- **Contact Form** - Integrated email system with auto-reply functionality
- **Client Testimonials** - Social proof and client logos
- **Responsive Design** - Mobile-first, modern UI/UX
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### Technical Features

- **Svelte 5 with Runes** - Latest Svelte features for reactive state management
- **TypeScript** - Full type safety across the application
- **Tailwind CSS** - Utility-first styling with custom components
- **Server-Side Rendering** - SvelteKit for optimal performance
- **Email Integration** - Resend API for contact form functionality
- **Static Assets** - Optimized images, fonts, and logos

## 🛠️ Tech Stack

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

### Backend & Services

- **[Resend](https://resend.com/)** - Email API for contact forms
- **[Vercel](https://vercel.com/)** - Deployment and hosting
- QR Code generation for projects

### Development Tools

- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Testing framework
- **[Playwright](https://playwright.dev/)** - End-to-end testing
- **pnpm** - Package manager

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/           # Reusable components
│   │   ├── case-studies/    # Case study specific components
│   │   └── archive/         # Legacy components
│   └── types/               # TypeScript type definitions
├── routes/                  # SvelteKit routes
│   ├── about/              # About page
│   ├── contact/            # Contact form with server actions
│   ├── development/        # Development services page
│   ├── projects/           # Portfolio and case studies
│   │   ├── eztripr-trip-tracker/
│   │   └── lot-logistics-web-application/
│   ├── resume/             # Resume pages
│   ├── ai/                 # AI services page
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
└── app.html                # HTML template

static/
├── images/                 # Project images and screenshots
├── logos/                  # Client and technology logos
├── fonts/                  # Poppins font files
└── icons/                  # Favicon and app icons
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended package manager)

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

3. **Set up environment variables**

   ```bash
   cp env.example .env
   ```

   Configure your environment variables:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com/) for email delivery. See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for detailed setup instructions.

### Quick Setup:

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add `RESEND_API_KEY` to your `.env` file
4. Configure sender domains in production

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm dev --host       # Start dev server with network access

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm check            # Type check with svelte-check
pnpm check:watch      # Watch mode for type checking

# Testing
pnpm test             # Run Vitest tests
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

## 📱 Pages & Features

### Main Sections

- **Homepage** - Hero, services, process, tech stack, testimonials
- **About** - Professional background and expertise
- **Services** - Web development offerings
- **Projects** - Portfolio with detailed case studies
- **Contact** - Contact form with email integration
- **Resume** - Professional experience and skills

### Case Studies

- **EzTripr Trip Tracker** - React/Node.js travel application
- **LOT Logistics** - Vue.js/Laravel logistics platform
- Additional projects and small applications

## 🚀 Deployment

### Vercel Deployment

This project is configured for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `RESEND_API_KEY`
3. **Deploy** - Automatic deployments from main branch

### Build Configuration

- **Adapter**: `@sveltejs/adapter-vercel`
- **Node.js Version**: 18+
- **Build Command**: `pnpm build`
- **Output Directory**: `.svelte-kit`

## 🔧 Customization

### Adding New Projects

1. Create project directory in `src/routes/projects/`
2. Add `+page.svelte` with project details
3. Update project listings and navigation
4. Add project images to `static/images/`

### Modifying Contact Form

1. Edit form fields in `src/routes/contact/+page.svelte`
2. Update server action in `src/routes/contact/+page.server.ts`
3. Customize email templates in the server action

### Adding New Pages

1. Create route directory in `src/routes/`
2. Add `+page.svelte` for the page content
3. Optional: Add `+page.ts` for data loading
4. Update navigation components

## 🤝 Contributing

### Development Workflow

1. Create feature branch from `main`
2. Make changes following code quality standards
3. Test thoroughly (dev server, build, lint)
4. Submit pull request with clear description

### Code Style

- Use Prettier for formatting (configured)
- Follow ESLint rules (configured)
- Use TypeScript for type safety
- Follow Svelte 5 patterns and runes
- Write semantic, accessible HTML

## 📄 License

This project is for Roga Web Development business purposes. See individual component licenses for third-party code.

## 📞 Contact

**Ryan Roga** - Web Developer

- 🌐 Website: [roga.dev](https://roga.dev)
- 📧 Email: ryan@roga.dev
- 💼 LinkedIn: [linkedin.com/in/ryanroga](https://linkedin.com/in/ryanroga)
- 🐙 GitHub: [github.com/rogadev](https://github.com/rogadev)

---

Built with ❤️ using SvelteKit and modern web technologies.
