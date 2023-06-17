import Splide from '@splidejs/splide';

const splideInit = () => {
	const splideWrapper = document.querySelector('.about__wrapper');
	if (splideWrapper !== null) {
		const splide = new Splide(splideWrapper, {
			arrows: false,
			perPage: 1,
			type: 'loop'
		});

		const mqs = window.matchMedia('(max-width:600px)');
		if (mqs.matches) {
			splide.mount();
		}

		mqs.addEventListener('change', () => {
			if (mqs.matches) {
				splide.mount();
			} else {
				splide.destroy();
			}
		});
	}
};

export default splideInit;
