import Splide from '@splidejs/splide';

const splideColorInit = () => {
	const splideWrapper = document.querySelector('.splide');
	const splide = new Splide(splideWrapper, {
		arrows: false,
		perPage: 3,
		type: 'loop'
	});
	splide.mount();
};
export default splideColorInit;
