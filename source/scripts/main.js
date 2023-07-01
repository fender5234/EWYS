import initCatalogList from './common/init-catalog.js';
import initForm from './common/init-form.js';
import layoutCards from './common/layout-card.js';
import nouislider from './vendor/nouislider-init.js';
import showText from './common/show-text.js';
import splideImageCarousel from './common/splide-carousel.js';
import splideImageMobileCarousel from './common/splide-mobile-slider.js';
import splideInit from './common/splide.js';
import splideProductInputInit from './common/splide-color-size.js';
import swiperInit from './common/swiper.js';

addEventListener('DOMContentLoaded', () => {
	swiperInit();
	splideInit();
	showText();
	layoutCards();
	nouislider();
	initForm();
	initCatalogList();
	splideProductInputInit();
	splideImageCarousel();
	splideImageMobileCarousel();
});
