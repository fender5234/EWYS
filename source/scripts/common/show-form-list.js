const showList = () => {
	const rightWrapper = document.querySelector('.catalog__right-wrapper');
	const catalogForm = rightWrapper.querySelector('.setting__form-form');
	const sizeList = rightWrapper.querySelector('#size-list');
	const colorList = rightWrapper.querySelector('#color-list');
	const buttonSize = rightWrapper.querySelector('#button-size');
	const buttonColor = rightWrapper.querySelector('#button-color');


	if (rightWrapper) {
		rightWrapper.addEventListener('click', (event) => {
			if (event.target.closest('.layout__button--filter')) {
				catalogForm.classList.add('setting__form-form--active');
			} else if (event.target.closest('.setting__form-close-button')) {
				catalogForm.classList.remove('setting__form-form--active');
			};

			if (event.target.closest('#button-size')) {
				colorList.classList.remove('setting-form__select-list--active');
				sizeList.classList.toggle('setting-form__select-list--active');
				buttonSize.classList.toggle('setting-form__button--active');
			};

			if (event.target.closest('#button-color')) {
				sizeList.classList.remove('setting-form__select-list--active');
				colorList.classList.toggle('setting-form__select-list--active');
				buttonColor.classList.toggle('setting-form__button--active');
			};

			if (event.target.classList.contains('catalog__right-wrapper')) {
				sizeList.classList.remove('setting-form__select-list--active');
				colorList.classList.remove('setting-form__select-list--active');
				catalogForm.classList.remove('setting__form-form--active');
			}
		});
	}
};

export default showList;
