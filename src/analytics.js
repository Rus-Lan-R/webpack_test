function createAnalytics() {
	let counter = 0;

	let isDestroyed = false;
	const listiner = () => counter++;

	document.addEventListener("click", listiner);

	return {
		destroy() {
			document.removeEventListener("click", listiner);
			isDestroyed = true;
		},
		getClicks() {
			if (isDestroyed) return `Analitics is destroyed, total click -> ${counter}`;
			return counter;
		},
	};
}

window.analytics = createAnalytics();
