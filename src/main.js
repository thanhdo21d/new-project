import aboutPage from "./page/About";
import homePage from "./page/HomePage";
import {render , router} from "./utilities";
import productsPage from "./page/products";
import { notFoundPage } from "./page/notFound";


router.on('/' , ()=> render(homePage, app));
router.on('/about', ()=> render(aboutPage, app));
router.on('/products', ()=> render(productsPage, app));
router.notFound(() => render(notFoundPage,app));

router.resolve();