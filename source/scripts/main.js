import Swiper, { Navigation, Pagination } from 'swiper';
import Splide from '@splidejs/splide';

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

// Функция скрыть показать текст перед футером
const showText = () => {
	const infoWrapper = document.querySelector('.info__wrapper');
	const button = document.querySelector('.info__button-text ');
	const openText = document.querySelector('.info__button-text-show-text');
	const hideText = document.querySelector('.info__button-text-hide-text');

	button.addEventListener('click', () => {
		infoWrapper.classList.toggle('info__wrapper--show-text');
		button.classList.toggle('info__button-text--active');
		openText.classList.toggle('info__button-text-show-text--hide');
		hideText.classList.toggle('info__button-text-hide-text--show');
	});
};
showText();

const splideWrapper = document.querySelector('.about__wrapper');
//
document.addEventListener('DOMContentLoaded', () => {
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
});
