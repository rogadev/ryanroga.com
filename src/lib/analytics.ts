/**
 * Analytics and conversion tracking utilities.
 *
 * This module provides a lightweight, privacy-respecting approach to tracking
 * key conversions and page interactions. It's designed to work with:
 * - Google Analytics 4 (when gtag is available)
 * - Custom analytics endpoints
 * - Console logging in development
 *
 * Key events tracked:
 * - book_call_click: User clicks a "Book a Call" CTA
 * - case_study_view: User views a case study page
 * - service_page_view: User views a service landing page
 * - contact_page_view: User views the contact page
 * - scroll_depth: User scrolls to 50%, 75%, or 100% of page
 */

// Event types for type safety
export type AnalyticsEvent =
	| 'book_call_click'
	| 'case_study_view'
	| 'service_page_view'
	| 'contact_page_view'
	| 'project_view'
	| 'scroll_depth'
	| 'cta_click';

export interface EventParams {
	event_category?: string;
	event_label?: string;
	value?: number;
	page_path?: string;
	[key: string]: string | number | boolean | undefined;
}

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Check if Google Analytics is available
function hasGtag(): boolean {
	return isBrowser && typeof (window as unknown as { gtag?: unknown }).gtag === 'function';
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: AnalyticsEvent, params?: EventParams): void {
	if (!isBrowser) return;

	const eventData = {
		event_name: eventName,
		timestamp: new Date().toISOString(),
		page_path: window.location.pathname,
		...params
	};

	// Development logging
	if (import.meta.env.DEV) {
		console.log('[Analytics]', eventName, eventData);
	}

	// Send to Google Analytics if available
	if (hasGtag()) {
		const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
		gtag('event', eventName, params);
	}

	// You can add additional analytics providers here
	// e.g., Plausible, Fathom, custom backend, etc.
}

/**
 * Track a "Book a Call" CTA click
 */
export function trackBookCallClick(source: string): void {
	trackEvent('book_call_click', {
		event_category: 'conversion',
		event_label: source,
		page_path: isBrowser ? window.location.pathname : undefined
	});
}

/**
 * Track a CTA click (generic)
 */
export function trackCTAClick(ctaName: string, destination?: string): void {
	trackEvent('cta_click', {
		event_category: 'engagement',
		event_label: ctaName,
		destination
	});
}

/**
 * Track page views for specific page types
 */
export function trackPageView(
	pageType: 'case_study' | 'service' | 'contact' | 'project',
	pageName: string
): void {
	const eventMap = {
		case_study: 'case_study_view',
		service: 'service_page_view',
		contact: 'contact_page_view',
		project: 'project_view'
	} as const;

	trackEvent(eventMap[pageType], {
		event_category: 'page_view',
		event_label: pageName
	});
}

/**
 * Track scroll depth (call this from a scroll observer)
 */
export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
	trackEvent('scroll_depth', {
		event_category: 'engagement',
		value: depth
	});
}

/**
 * Initialize scroll depth tracking for the current page
 */
export function initScrollTracking(): () => void {
	if (!isBrowser) return () => {};

	const trackedDepths = new Set<number>();

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;

		const depths = [25, 50, 75, 100] as const;
		for (const depth of depths) {
			if (scrollPercent >= depth && !trackedDepths.has(depth)) {
				trackedDepths.add(depth);
				trackScrollDepth(depth);
			}
		}
	};

	window.addEventListener('scroll', handleScroll, { passive: true });

	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}

/**
 * Setup click tracking on elements with data-track attribute
 *
 * Usage:
 * <a href="/contact" data-track="book_call" data-track-source="hero">Book a Call</a>
 */
export function initClickTracking(): () => void {
	if (!isBrowser) return () => {};

	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const trackableElement = target.closest('[data-track]') as HTMLElement | null;

		if (trackableElement) {
			const trackType = trackableElement.dataset.track;
			const trackSource = trackableElement.dataset.trackSource || 'unknown';

			if (trackType === 'book_call') {
				trackBookCallClick(trackSource);
			} else if (trackType === 'cta') {
				const destination = trackableElement.getAttribute('href') || undefined;
				trackCTAClick(trackSource, destination);
			}
		}
	};

	document.addEventListener('click', handleClick);

	return () => {
		document.removeEventListener('click', handleClick);
	};
}
