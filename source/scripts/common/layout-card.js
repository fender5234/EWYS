const layoutCards = () => {
	const layoutButtons = document.querySelector('.layout');
	const cardWrapper = document.querySelector('.catalog__list-goods');

	if (layoutButtons !== null) {
		layoutButtons.addEventListener('click', (event) => {
			if (event.target.classList.contains('layout__button--columns')) {
				cardWrapper.classList.add('catalog__list-goods--two-columns');
			} else if (event.target.classList.contains('layout__button')) {
				cardWrapper.classList.remove('catalog__list-goods--two-columns');
			}
		});
	}
};

export default layoutCards;
