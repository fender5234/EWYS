import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
	loop: true,
	modules: [Navigation, Pagination],

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
