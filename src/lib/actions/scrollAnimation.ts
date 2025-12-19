/**
 * Svelte action for scroll-based reveal animations.
 * Adds 'animate-in' class when element enters viewport.
 *
 * Usage: <div use:scrollAnimation={{ delay: 200, threshold: 0.1 }}>content</div>
 */
export function scrollAnimation(
	node: HTMLElement,
	options: { delay?: number; threshold?: number } = {}
) {
	const { delay = 0, threshold = 0.1 } = options;

	// Add base animation class
	node.classList.add('animate-on-scroll');

	// Apply delay if specified
	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('animate-in');
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Initializes scroll animations for all elements with the 'animate-on-scroll' class.
 * Useful for pages with many animated elements that don't need individual control.
 *
 * Call this in $effect() in your page component.
 */
export function initScrollAnimations(threshold = 0.1): () => void {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold }
	);

	document.querySelectorAll('.animate-on-scroll').forEach((el) => {
		observer.observe(el);
	});

	return () => observer.disconnect();
}
