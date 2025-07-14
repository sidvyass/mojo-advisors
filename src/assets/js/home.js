document.querySelectorAll('.accordion-item').forEach(item => {
	const title = item.querySelector('.accordion-title');
	const contentWrapper = item.querySelector('.accordion-content-wrapper');
	const content = item.querySelector('.accordion-content');

	// Pre-calculate and store the full height
	contentWrapper.style.setProperty(
		'--content-height',
		content.scrollHeight + 'px'
	);

	title.addEventListener('click', () => {
		const isOpen = item.classList.toggle('open');

		// If closing, clear the height after transition so it collapses
		if (!isOpen) {
			contentWrapper.addEventListener('transitionend', function handler() {
				if (!item.classList.contains('open')) {
					contentWrapper.style.height = '0';
				}
				contentWrapper.removeEventListener('transitionend', handler);
			});
		}
		else {
			contentWrapper.style.height = null;
		}
	});
});
