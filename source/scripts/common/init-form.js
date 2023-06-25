const initForm = () => {
	const rightWrapper = document.querySelector('[data-right-wrapper]');
	if (!rightWrapper) {
		return;
	}
	const buttonFilter = rightWrapper.querySelector('[data-filter-button]');
	const buttonClose = rightWrapper.querySelector('[data-close-button]');
	const catalogForm = rightWrapper.querySelector('[data-setting-form]');
	const colorList = rightWrapper.querySelector('[data-color-list]');
	const sizeList = rightWrapper.querySelector('[data-size-list]');
	const settingList = rightWrapper.querySelector('[data-setting-list]');
	const buttonSize = rightWrapper.querySelector('[data-size-button]');
	const buttonColor = rightWrapper.querySelector('[data-color-button]');

	rightWrapper.addEventListener('click', (event) => {
		if (event.target === buttonFilter) {
			catalogForm.classList.add('setting__form-form--active');
		} else if (event.target === buttonClose) {
			catalogForm.classList.remove('setting__form-form--active');
			buttonColor.classList.remove('setting-form__button--active');
			colorList.classList.remove('setting-form__select-list--active');
			buttonSize.classList.remove('setting-form__button--active');
			sizeList.classList.remove('setting-form__select-list--active');
		}
		if (event.target === buttonColor) {
			buttonSize.classList.remove('setting-form__button--active');
			sizeList.classList.remove('setting-form__select-list--active');
			buttonColor.classList.toggle('setting-form__button--active');
			colorList.classList.toggle('setting-form__select-list--active');
		} else if (event.target === buttonSize) {
			buttonColor.classList.remove('setting-form__button--active');
			colorList.classList.remove('setting-form__select-list--active');
			buttonSize.classList.toggle('setting-form__button--active');
			sizeList.classList.toggle('setting-form__select-list--active');
		}

		if (event.target === catalogForm || event.target === settingList) {
			buttonColor.classList.remove('setting-form__button--active');
			colorList.classList.remove('setting-form__select-list--active');
			buttonSize.classList.remove('setting-form__button--active');
			sizeList.classList.remove('setting-form__select-list--active');
		}
	});
};

export default initForm;
