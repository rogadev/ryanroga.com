interface TurnstileRenderOptions {
	sitekey: string;
	callback?: (token: string) => void;
	'expired-callback'?: () => void;
	'error-callback'?: () => void;
	theme?: 'light' | 'dark' | 'auto';
}

interface Turnstile {
	render: (el: HTMLElement, options: TurnstileRenderOptions) => string;
	reset: (widgetId?: string) => void;
}

interface Window {
	turnstile?: Turnstile;
}
