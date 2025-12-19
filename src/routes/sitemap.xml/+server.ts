import type { RequestHandler } from './$types';

const SITE_URL = 'https://roga.dev';

// Static pages with their priority and change frequency
const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/contact', priority: '0.9', changefreq: 'monthly' },
	{ path: '/internal-tools', priority: '0.9', changefreq: 'monthly' },
	{ path: '/services', priority: '0.9', changefreq: 'monthly' },
	{ path: '/services/dashboards', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services/workflow-automation', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services/integrations', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services/rbac-audit-logs', priority: '0.8', changefreq: 'monthly' },
	{ path: '/services/maintenance', priority: '0.8', changefreq: 'monthly' },
	{ path: '/free-tools', priority: '0.7', changefreq: 'monthly' },
	{ path: '/projects', priority: '0.8', changefreq: 'weekly' },
	{ path: '/projects/techcentral-telus', priority: '0.8', changefreq: 'monthly' },
	{ path: '/projects/lot-logistics-web-application', priority: '0.8', changefreq: 'monthly' },
	{ path: '/projects/eztripr-trip-tracker', priority: '0.7', changefreq: 'monthly' },
	{ path: '/about', priority: '0.7', changefreq: 'monthly' },
	{ path: '/development', priority: '0.6', changefreq: 'monthly' },
	{ path: '/ai', priority: '0.5', changefreq: 'monthly' },
	{ path: '/resume', priority: '0.5', changefreq: 'monthly' },
	{ path: '/privacy', priority: '0.3', changefreq: 'yearly' },
	{ path: '/terms', priority: '0.3', changefreq: 'yearly' }
];

export const GET: RequestHandler = async () => {
	const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
