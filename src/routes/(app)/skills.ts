type Skills = {
  name: string;
  type: string;
  proficiency: 1 | 2 | 3;
  favorite: boolean;
  icon: string;
};
const skills: Skills[] = [
  {
    name: 'JavaScript',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:javascript'
  },
  {
    name: 'TypeScript',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:typescript-icon'
  },
  {
    name: 'HTML',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:html-5'
  },
  {
    name: 'CSS',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:css-3'
  },
  {
    name: 'Python',
    type: 'Language',
    proficiency: 3,
    favorite: true,
    icon: 'logos:python'
  },
  {
    name: 'Svelte',
    type: 'UI Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:svelte-icon'
  },
  {
    name: 'Vue',
    type: 'UI Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:vue'
  },
  {
    name: 'React',
    type: 'UI Framework',
    proficiency: 1,
    favorite: false,
    icon: 'logos:react'
  },
  {
    name: 'Node',
    type: 'Runtime',
    proficiency: 1,
    favorite: true,
    icon: 'logos:nodejs-icon'
  },
  {
    name: 'Express',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:express'
  },
  {
    name: 'SvelteKit',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:svelte-kit'
  },
  {
    name: 'Nuxt',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:nuxt-icon'
  },
  {
    name: 'Astro',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:astro-icon'
  },
  {
    name: 'OpenAI',
    type: 'API',
    proficiency: 1,
    favorite: true,
    icon: 'logos:openai-icon'
  },
  {
    name: 'Prisma',
    type: 'ORM',
    proficiency: 1,
    favorite: true,
    icon: 'logos:prisma'
  },
  {
    name: 'Tailwind',
    type: 'CSS Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:tailwindcss-icon'
  },
  {
    name: 'Zod',
    type: 'Package',
    proficiency: 1,
    favorite: true,
    icon: 'logos:zod'
  },
  {
    name: 'Vitest',
    type: 'Testing',
    proficiency: 1,
    favorite: true,
    icon: 'logos:vitest'
  },
  {
    name: 'Vercel',
    type: 'Hosting',
    proficiency: 1,
    favorite: true,
    icon: 'logos:vercel-icon'
  },
  {
    name: 'Puppeteer',
    type: 'Web Scraping',
    proficiency: 1,
    favorite: true,
    icon: 'logos:puppeteer'
  }
];

export default skills;