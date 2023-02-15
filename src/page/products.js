import { products } from "../data"
const productsPage = () => {
  console.log(products);
  return ` <div class="row">
    ${
      products.map((products)=>{
            return `
            <div class="col">
            <h3>${products.name}</h3>
            <span>${products.price}</span>
            </div>
            `
      })
    }
  </div>`
};

export default productsPage