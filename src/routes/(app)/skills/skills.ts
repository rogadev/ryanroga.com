
export type Skill = {
  skill: string;
  type: string;
  proficiency: 1 | 2 | 3;
  favorite: boolean;
  icon: string;
};

const skills: Skill[] = [
  {
    skill: 'JavaScript',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:javascript'
  },
  {
    skill: 'TypeScript',
    type: 'Language',
    proficiency: 1,
    favorite: true,
    icon: 'logos:typescript-icon'
  },
  {
    skill: 'HTML',
    type: 'Language',
    proficiency: 1,
    favorite: false,
    icon: 'logos:html-5'
  },
  {
    skill: 'CSS',
    type: 'Language',
    proficiency: 1,
    favorite: false,
    icon: 'logos:css-3'
  },
  {
    skill: 'Python',
    type: 'Language',
    proficiency: 3,
    favorite: false,
    icon: 'logos:python'
  },
  {
    skill: 'Svelte',
    type: 'UI Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:svelte-icon'
  },
  {
    skill: 'Vue',
    type: 'UI Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:vue'
  },
  {
    skill: 'React',
    type: 'UI Framework',
    proficiency: 1,
    favorite: false,
    icon: 'logos:react'
  },
  {
    skill: 'Node',
    type: 'Runtime',
    proficiency: 1,
    favorite: true,
    icon: 'logos:nodejs-icon'
  },
  {
    skill: 'TS Node',
    type: 'Runtime',
    proficiency: 2,
    favorite: true,
    icon: 'logos:tsnode'
  },
  {
    skill: 'Express',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:express'
  },
  {
    skill: 'SvelteKit',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:svelte-kit'
  },
  {
    skill: 'Nuxt',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:nuxt-icon'
  },
  {
    skill: 'Astro',
    type: 'Web Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:astro-icon'
  },
  {
    skill: 'Supabase',
    type: 'Database',
    proficiency: 1,
    favorite: false,
    icon: 'logos:supabase-icon'
  },
  {
    skill: 'GitHub',
    type: 'Version Control',
    proficiency: 1,
    favorite: false,
    icon: 'logos:github-icon'
  },
  {
    skill: 'OpenAI',
    type: 'API',
    proficiency: 1,
    favorite: false,
    icon: 'logos:openai-icon'
  },
  {
    skill: 'Prisma',
    type: 'ORM',
    proficiency: 1,
    favorite: true,
    icon: 'logos:prisma'
  },
  {
    skill: 'Tailwind',
    type: 'CSS Framework',
    proficiency: 1,
    favorite: true,
    icon: 'logos:tailwindcss-icon'
  },
  {
    skill: 'Vercel',
    type: 'Hosting',
    proficiency: 1,
    favorite: true,
    icon: 'logos:vercel-icon'
  },
  {
    skill: 'Vercel Postgres',
    type: 'Database',
    proficiency: 1,
    favorite: false,
    icon: 'logos:vercel-icon'
  },
  {
    skill: 'Vercel KV',
    type: 'Database',
    proficiency: 1,
    favorite: false,
    icon: 'logos:vercel-icon'
  },
  {
    skill: 'Vercel AI',
    type: 'Package',
    proficiency: 1,
    favorite: false,
    icon: 'logos:vercel-icon'
  },
  {
    skill: 'Puppeteer',
    type: 'Package',
    proficiency: 1,
    favorite: false,
    icon: 'logos:puppeteer'
  },
  {
    skill: 'Mapbox',
    type: 'Package',
    proficiency: 1,
    favorite: false,
    icon: 'logos:mapbox-icon'
  },
  {
    skill: 'Zod',
    type: 'Package',
    proficiency: 1,
    favorite: true,
    icon: 'logos:zod'
  },
  {
    skill: 'Vitest',
    type: 'Testing',
    proficiency: 1,
    favorite: false,
    icon: 'logos:vitest'
  },
  {
    skill: 'Jest',
    type: 'Testing',
    proficiency: 1,
    favorite: true,
    icon: 'logos:jest'
  },
  {
    skill: 'Mocha',
    type: 'Testing',
    proficiency: 1,
    favorite: false,
    icon: 'logos:mocha'
  },
  {
    skill: 'Flask',
    type: 'Web Framework',
    proficiency: 3,
    favorite: false,
    icon: 'logos:flask'
  }
];
export default skills;
