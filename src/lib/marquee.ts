/**
 * Drag-to-scrub marquee. Picks up any `[data-marquee]` element with a
 * `[data-marquee-track]` child whose contents are duplicated for a seamless
 * loop. Mouse uses pointer-capture drag; touch uses native momentum scroll.
 * Above 1280 px (or with reduced motion) the marquee goes static — JS stops,
 * CSS handles the layout swap.
 */
const SPEED = 30; // px/s
const STATIC_QUERY = '(min-width: 1280px)';

export function setupMarquee(container: HTMLElement) {
	if (container.dataset.marqueeReady) return;
	container.dataset.marqueeReady = '1';

	const track = container.querySelector<HTMLElement>('[data-marquee-track]');
	if (!track) return;

	const dirSign = container.dataset.marqueeDirection === 'reverse' ? -1 : 1;

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const staticMql = window.matchMedia(STATIC_QUERY);

	let rafId = 0;
	let lastTime = 0;
	let hovering = false;
	let focused = false;
	let dragging = false;
	let touchActive = false;
	let dragStartX = 0;
	let dragStartScroll = 0;
	let activePointer: number | null = null;
	let touchResumeTimer = 0;

	const half = () => track.scrollWidth / 2;

	/**
	 * Normalize `next` into [0, h). Browsers clamp scrollLeft to >= 0, so we
	 * have to wrap *before* the assignment — otherwise reverse autoplay gets
	 * stuck at 0 and a leftward drag never reaches a negative value to wrap.
	 */
	function setScrollWrapped(next: number) {
		const h = half();
		if (h > 0) next = ((next % h) + h) % h;
		container.scrollLeft = next;
	}

	const isStatic = () => staticMql.matches || reducedMotion.matches;
	const isPaused = () => hovering || focused || dragging || touchActive || isStatic();

	function tick(now: number) {
		if (!lastTime) lastTime = now;
		const dt = (now - lastTime) / 1000;
		lastTime = now;
		if (!isPaused()) {
			setScrollWrapped(container.scrollLeft + SPEED * dirSign * dt);
		}
		rafId = requestAnimationFrame(tick);
	}

	function start() {
		stop();
		if (isStatic()) return;
		// Reverse direction needs room to scroll backward.
		if (dirSign < 0 && container.scrollLeft <= 0) {
			const h = half();
			if (h > 0) container.scrollLeft = h;
		}
		lastTime = 0;
		rafId = requestAnimationFrame(tick);
	}

	function stop() {
		if (rafId) cancelAnimationFrame(rafId);
		rafId = 0;
	}

	container.addEventListener('mouseenter', () => {
		hovering = true;
	});
	container.addEventListener('mouseleave', () => {
		hovering = false;
	});
	container.addEventListener('focusin', () => {
		focused = true;
	});
	container.addEventListener('focusout', () => {
		focused = false;
	});

	container.addEventListener('pointerdown', (e) => {
		if (isStatic()) return;
		if (e.pointerType === 'mouse') {
			dragging = true;
			activePointer = e.pointerId;
			dragStartX = e.clientX;
			dragStartScroll = container.scrollLeft;
			container.classList.add('is-dragging');
			try {
				container.setPointerCapture(e.pointerId);
			} catch {}
			e.preventDefault();
		} else {
			touchActive = true;
			if (touchResumeTimer) {
				window.clearTimeout(touchResumeTimer);
				touchResumeTimer = 0;
			}
		}
	});

	container.addEventListener('pointermove', (e) => {
		if (!dragging || e.pointerId !== activePointer) return;
		const delta = e.clientX - dragStartX;
		setScrollWrapped(dragStartScroll - delta);
		dragStartX = e.clientX;
		dragStartScroll = container.scrollLeft;
	});

	function endPointer(e: PointerEvent) {
		if (e.pointerType === 'mouse') {
			if (!dragging) return;
			dragging = false;
			container.classList.remove('is-dragging');
			try {
				container.releasePointerCapture(e.pointerId);
			} catch {}
			activePointer = null;
		} else {
			touchResumeTimer = window.setTimeout(() => {
				touchActive = false;
				touchResumeTimer = 0;
			}, 600);
		}
	}
	container.addEventListener('pointerup', endPointer);
	container.addEventListener('pointercancel', endPointer);

	container.addEventListener(
		'scroll',
		() => {
			const h = half();
			if (h > 0 && container.scrollLeft >= h) container.scrollLeft -= h;
		},
		{ passive: true },
	);

	const onMqlChange = () => {
		if (isStatic()) {
			stop();
			container.scrollLeft = 0;
		} else {
			start();
		}
	};
	reducedMotion.addEventListener('change', onMqlChange);
	staticMql.addEventListener('change', onMqlChange);

	if (!isStatic()) start();
}

function init() {
	document.querySelectorAll<HTMLElement>('[data-marquee]').forEach(setupMarquee);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
	init();
}
