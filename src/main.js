import aboutPage from "./page/About";
import homePage from "./page/HomePage";
import {render , router} from "./utilities";
import productsPage from "./page/products";
import { notFoundPage } from "./page/notFound";
import productDetailPage from "./page/productDetail";
import AdminProductPage from "./page/admin/products";



router.on('/' , ()=> render(homePage, app));
router.on('/about', ()=> render(aboutPage, app));
router.on('/products', ()=> render(productsPage, app));
router.on("product/:id", ({data})=> render(()=> productDetailPage(data), app));
router.notFound(() => render(notFoundPage,app));

router.on("/admin/products" ,()=> render(AdminProductPage,app));   //admin 

router.resolve();