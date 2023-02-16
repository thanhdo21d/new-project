import { products } from "@/data"
import {useEffect, useState} from '@/utilities'
const AdminProductPage = () => {
        const [products,setProducts] = useState(products);
    useEffect(()=>{
            const btns = document.querySelectorAll('.btn-remove');
            // console.log(btns);
            for(let btn of btns) {
                btn.addEventListener('click', function(){
                    // console.log(btn);
                    const id = this.dataset.id;

                })
            }

    });
     
  return `
 
    <div class ="container">
            <table class="table table-bordered" >
            <thead>
            <tr>
            <th>STT</th>
            <th>TEn</th>
            <th></th>
            </tr>

        </thead>
        <tbody>
        ${products.map((products , index)=>`
        <tr>
            <td>${index +1}</td>
            <td>${products.name}</td>
         <td>
            <button data-id="${products.id}" class="btn btn-danger btn-remove"> xoa </button>
         </td>
            </tr>
`
    ).join("")}

        </tbody>
        </table>
        </div>
        `
}

export default AdminProductPage