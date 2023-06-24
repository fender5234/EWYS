const initCatalogList = () => {
	const catalogList = document.querySelector('[data-catalog-list]');
	if (!catalogList) {
		return;
	};

	const catalogButtons = document.querySelectorAll('[data-catalog-button]');
	const allLists = catalogList.querySelectorAll('UL');

	const allListHidden = () => {
		allLists.forEach((item) => {
			if (item.classList.contains('catalog-list__item-list--active')) {
				item.classList.remove('catalog-list__item-list--active');
			} else if (item.classList.contains('catalog-list__goods-list--active')) {
				item.classList.remove('catalog-list__goods-list--active');
			}
		});
	};

	catalogList.addEventListener('click', (event) => {
		catalogButtons.forEach((item) => {
			if (event.target === item) {
				if (item.parentNode.querySelector('[data-sub-list-one]')) {
					if (item.parentNode.querySelector('[data-sub-list-one]').classList.contains('catalog-list__item-list--active')) {
						allListHidden();
					} else {
						allListHidden();
						item.parentNode.querySelector('[data-sub-list-one]').classList.add('catalog-list__item-list--active');
					}
				} else if (item.parentNode.querySelector('[data-sub-list-two]')) {
					item.parentNode.querySelector('[data-sub-list-two]').classList.toggle('catalog-list__goods-list--active');
				}
			}
		});
	});
};

export default initCatalogList;
