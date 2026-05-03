/**
 * Drag-to-scrub marquee with bidirectional infinite scroll.
 *
 * Picks up any `[data-marquee]` element with a `[data-marquee-track]` child
 * whose contents are rendered as three identical copies. Anchoring scrollLeft
 * into the middle copy gives the user a full unit of room in either direction
 * before native momentum hits a clamp; on scroll settle we silently recenter.
 *
 * Mouse uses pointer-capture drag; touch uses native momentum scroll.
 * Above 1280 px (or with reduced motion) the marquee goes static — JS stops,
 * CSS handles the layout swap.
 */
const SPEED = 30; // px/s
const STATIC_QUERY = '(min-width: 1280px)';
const SETTLE_MS = 150;

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
	let touchSettling = false;
	let dragStartX = 0;
	let dragStartScroll = 0;
	let activePointer: number | null = null;
	let scrollSettleTimer = 0;

	// Track renders three identical copies side-by-side; `unit` is one copy.
	const unit = () => track.scrollWidth / 3;

	/**
	 * Normalize `next` into [unit, 2*unit). Browsers clamp scrollLeft to the
	 * scroll-range, so we have to compute the wrapped target *before* the
	 * assignment — otherwise reverse autoplay would get stuck at 0 and a
	 * leftward drag would never reach a negative value to wrap.
	 */
	function setScrollWrapped(next: number) {
		const u = unit();
		if (u <= 0) {
			container.scrollLeft = next;
			return;
		}
		next = ((((next - u) % u) + u) % u) + u;
		container.scrollLeft = next;
	}

	function recenter() {
		if (dragging || touchActive) return;
		const u = unit();
		if (u <= 0) return;
		if (container.scrollLeft < u || container.scrollLeft >= 2 * u) {
			setScrollWrapped(container.scrollLeft);
		}
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
		const u = unit();
		if (u > 0 && (container.scrollLeft < u || container.scrollLeft >= 2 * u)) {
			container.scrollLeft = u;
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
			touchSettling = false;
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
			// Don't resume auto-scroll on a fixed timer — that fights native
			// momentum on a fast flick (programmatic scrollLeft kills it,
			// looking like the marquee snapped). Wait for the scroll-settle
			// handler below to confirm momentum has actually ended.
			touchSettling = true;
		}
	}
	container.addEventListener('pointerup', endPointer);
	container.addEventListener('pointercancel', endPointer);

	// After native scroll momentum settles, silently recenter into the middle
	// copy so the user always has a full unit of room in either direction.
	container.addEventListener(
		'scroll',
		() => {
			if (scrollSettleTimer) window.clearTimeout(scrollSettleTimer);
			scrollSettleTimer = window.setTimeout(() => {
				scrollSettleTimer = 0;
				if (touchSettling) {
					touchSettling = false;
					touchActive = false;
				}
				recenter();
			}, SETTLE_MS);
		},
		{ passive: true },
	);

	// Re-anchor when track width changes (images loading, viewport resize).
	const ro = new ResizeObserver(() => {
		if (!isStatic()) recenter();
	});
	ro.observe(track);

	const onMqlChange = () => {
		if (isStatic()) {
			stop();
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
