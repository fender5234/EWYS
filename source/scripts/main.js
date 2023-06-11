import Swiper, { Navigation, Pagination } from 'swiper';

const swiperMainWrapper = document.querySelector('.about__wrapper');
const aboutWrapper = document.querySelector('.about__list');
const aboutListItem = document.querySelectorAll('.about__list-item');

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

const mqs = window.matchMedia('(max-width:600px)');
mqs.addEventListener('change', () => {
	if (mqs.matches) {
		swiperMainWrapper.classList.add('swiper');
		aboutWrapper.classList.add('swiper-wrapper');
		aboutListItem.forEach((item) => item.classList.add('swiper-slide'));

		new Swiper(swiperMainWrapper, {
			loop: true,
			modules: [Navigation, Pagination],

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			pagination: {
				clickable: true,
				el: '.swiper-pagination'
			}
		});
	} else {
		swiperMainWrapper.classList.remove('swiper');
		aboutWrapper.classList.remove('swiper-wrapper');
		aboutListItem.forEach((item) => item.classList.remove('swiper-slide'));
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
//
