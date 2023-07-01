import Splide from '@splidejs/splide';

const splideProductInputInit = () => {
	const splideColor = document.querySelector('.color-splide');
	if (!splideColor) {
		return;
	}
	const splideColorInput = new Splide(splideColor, {
		arrows: true,
		breakpoints: {
			768: { width: '230px' },
		},
		fixedHeight: '40px',
		fixedWidth: '70px',
		gap: '10px',
		pagination: false,
		perPage: 3,
		type: 'loop',
		width: '270px',
	});
	splideColorInput.mount();
	const splideSize = document.querySelector('.size-splide');
	const splideSizeInput = new Splide(splideSize, {
		arrows: true,
		breakpoints: {
			768: { width: '230px' },
		},
		fixedHeight: '40px',
		fixedWidth: '70px',
		gap: '10px',
		pagination: false,
		perPage: 3,
		type: 'loop',
		width: '270px'
	});
	splideSizeInput.mount();
};
export default splideProductInputInit;
