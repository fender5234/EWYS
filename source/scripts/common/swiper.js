import Swiper, { Navigation, Pagination } from 'swiper';

const swiperInit = () => {
	new Swiper('.swiper', {
		loop: true,
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		pagination: {
			clickable: true,
			el: '.swiper-pagination'
		},

		scrollbar: {
			el: '.swiper-scrollbar'
		}
	});

	new Swiper('.quickwiev__swiper', {
		loop: true,
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
};

export default swiperInit;
