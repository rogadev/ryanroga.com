/**
 * Site-wide constants. Imported by layouts and head components.
 */

export const STUDIO_NAME = 'Roga Digital';
export const SITE_TITLE = 'Roga Digital · Software Studio';
export const SITE_TAGLINE = 'Software, end-to-end.';
export const SITE_DESCRIPTION =
	'Roga Digital is a software studio building internal tools, dashboards, integrations, and AI features for businesses. Full-stack web development, systems architecture, product management, and AI consulting from Ryan Roga.';
export const SITE_AUTHOR = 'Ryan Roga';
export const SITE_LOCATION = 'Vancouver Island, BC, Canada';

export const BOOKING_URL = 'https://cal.com/ryanroga';

export const SOCIAL = {
	github: 'https://github.com/rogadev',
	linkedin: 'https://linkedin.com/in/ryanroga',
} as const;

/**
 * Roles surfaced in hero / metadata. Keep tight enough to mean something,
 * broad enough to capture the breadth of work.
 */
export const ROLES = [
	'Full-Stack Developer',
	'Technical Lead',
	'Web Designer',
	'Product Manager',
	'Integration Specialist',
	'AI Consultant',
] as const;

/**
 * Industries / sectors with at least one shipped project of real scope.
 * Each entry must be backed by a delivered engagement, not a one-off favor.
 */
export const INDUSTRIES = [
	'Telecom',
	'Healthcare',
	'Education',
	'Horticulture',
	'Logistics',
	'Transportation',
	'Trades',
] as const;
