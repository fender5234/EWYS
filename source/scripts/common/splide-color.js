import Splide from '@splidejs/splide';

const splideProductInputInit = () => {
	const splideColor = document.querySelector('.color-splide');
	const splideColorInput = new Splide(splideColor, {
		arrows: true,
		fixedHeight: '40px',
		fixedWidth: '70px',
		pagination: false,
		perPage: 3,
		type: 'loop',
		width: '270px',
	});
	splideColorInput.mount();

	const splideSize = document.querySelector('.size-splide');
	const splideSizeInput = new Splide(splideSize, {
		arrows: true,
		fixedHeight: '40px',
		fixedWidth: '70px',
		pagination: false,
		perPage: 3,
		type: 'loop',
		width: '270px',
	});
	splideSizeInput.mount();

	const splideMainImage = document.querySelector('#main-carousel');
	const splideMainImageSplide = new Splide(splideMainImage, {
		arrows: false,
		pagination: false,
		rewind: true,
		type: 'fade',
	});

	const splideImage = document.querySelector('#thumbnail-carousel');
	const splideImageSplide = new Splide(splideImage, {
		direction: 'ttb',
		fixedHeight: 120,
		fixedWidth: 100,
		gap: 30,
		height: '420px',
		isNavigation: true,
		pagination: false,
		perPage: 3,
		rewind: true,
	});
	splideMainImageSplide .sync( splideImageSplide );
	splideMainImageSplide.mount();
	splideImageSplide.mount();
};
export default splideProductInputInit;
