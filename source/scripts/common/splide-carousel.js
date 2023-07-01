import Splide from '@splidejs/splide';

const splideImageCarousel = () => {
	const splideMainCarousel = document.querySelector('.product__wrapper');
	if (!splideMainCarousel) {
		return;
	}

	const splideMainImage = document.querySelector('#main-carousel');
	const splideMainImageSplide = new Splide(splideMainImage, {
		arrows: false,
		pagination: false,
		rewind: true,
		type: 'fade'
	});

	const splideImage = document.querySelector('#thumbnail');
	const splideImageSplide = new Splide(splideImage, {
		direction: 'ttb',
		fixedHeight: 120,
		fixedWidth: 100,
		gap: 30,
		height: '420px',
		isNavigation: true,
		pagination: false,
		perPage: 3,
		rewind: true
	});

	const mqs = window.matchMedia('(min-width:1440px)');
	if (mqs.matches) {
		splideMainImageSplide.sync(splideImageSplide);
		splideMainImageSplide.mount();
		splideImageSplide.mount();
	}

	mqs.addEventListener('change', () => {
		if (mqs.matches) {
			splideMainImageSplide.mount();
			splideImageSplide.mount();
		} else {
			splideMainImageSplide.destroy();
			splideImageSplide.destroy();
		}
	});
};

export default splideImageCarousel;
