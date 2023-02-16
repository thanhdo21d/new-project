import productList from "@/components/productList";
import { products } from "../data"
const productsPage = () => {
return ` <div class="row">
      ${productList({products : products})}
</div>`
};

export default productsPage