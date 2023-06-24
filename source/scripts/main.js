
import initCatalogList from './common/init-catalog.js';
import initForm from './common/init-form.js';
import layoutCards from './common/layout-card.js';
import nouislider from './vendor/nouislider-init.js';
import showText from './common/show-text.js';
import splideColorInit from './common/splide-color.js';
import splideInit from './common/splide.js';
import swiperInit from './common/swiper.js';


addEventListener('DOMContentLoaded', () => {
	swiperInit();
	splideInit();
	showText();
	layoutCards();
	nouislider();
	initForm();
	initCatalogList();
	splideColorInit();
});
