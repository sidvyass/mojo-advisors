document.querySelectorAll('.accordion-item').forEach(item => {
	const logosSwiper = new Swiper('.my-logos-swiper', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 24,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window ≤ 576px
			0: { slidesPerView: 1, spaceBetween: 12 },
			// ≥ 576px
			576: { slidesPerView: 2, spaceBetween: 16 },
			// ≥ 768px
			768: { slidesPerView: 3, spaceBetween: 20 },
			// ≥ 992px
			992: { slidesPerView: 4, spaceBetween: 24 },
			// ≥ 1200px
			1200: { slidesPerView: 5, spaceBetween: 24 }
		}
	});
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

	const carouselEl = document.getElementById('testimonialCarousel');
	new bootstrap.Carousel(carouselEl, {
		interval: 5000,
		wrap: true,
		touch: true,
		ride: 'carousel'
	});

	// Initialize client-logos carousel
});
