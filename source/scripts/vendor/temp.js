const allListHidden = () => {
	allLists.forEach((item) => {
		if (item.classList.contains('catalog-list__item-list--active')) {
			item.classList.remove('catalog-list__item-list--active');
		} else if (item.classList.contains('catalog-list__goods-list--active')) {
			item.classList.remove('catalog-list__goods-list--active');
		}
	});
};
