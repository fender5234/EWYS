import Splide from '@splidejs/splide';

const splideImageMobileCarousel = () => {
	const splideMainCarousel = document.querySelector('.product__wrapper');
	if (!splideMainCarousel) {
		return;
	}

	const splideMainImage = document.querySelector('.splide__image-product');
	const splideMainImageSplide = new Splide(splideMainImage, {
		arrows: false,
		pagination: false,
		rewind: true,
		type: 'fade'
	});

	const mqs = window.matchMedia('(max-width:1440px)');
	if (mqs.matches) {
		splideMainImageSplide.mount();
	}

	mqs.addEventListener('change', () => {
		if (mqs.matches) {
			splideMainImageSplide.mount();
		} else {
			splideMainImageSplide.destroy();
		}
	});
};

export default splideImageMobileCarousel;
