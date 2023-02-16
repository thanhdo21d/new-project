import {products  } from "../data";
const productDetailPage = ({id}) => {

const product = products.find((product) => product.id === +id);
console.log(product, "Product");
if(!product) return null;
return `
<div>${product.name}</div>
`


};

export default productDetailPage