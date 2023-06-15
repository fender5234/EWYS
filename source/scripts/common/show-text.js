const showText = () => {
	const infoWrapper = document.querySelector('.info__wrapper');
	if (infoWrapper !== null) {
		const button = document.querySelector('.info__button-text ');
		const openText = document.querySelector('.info__button-text-show-text');
		const hideText = document.querySelector('.info__button-text-hide-text');

		button.addEventListener('click', () => {
			infoWrapper.classList.toggle('info__wrapper--show-text');
			button.classList.toggle('info__button-text--active');
			openText.classList.toggle('info__button-text-show-text--hide');
			hideText.classList.toggle('info__button-text-hide-text--show');
		});
	}
};

export default showText;
