import React,{useState} from "react";
import ProductCard from "./productCard";
import productData from "../../../../../dataCenter/products.json";

function ProductList({pageHandler}){

  const [productList,setProductList] = useState(productData);
  
  return (
        
  <div className="container my-5">
    <header className="mb-4">
      <h3>New products</h3>
    </header>

    <div className="row">
      {
        productList.map(product => {
          return(<ProductCard product = {product} key={product.id} pageHandler={pageHandler}/>)
          
        })
      }
    </div>
  </div>

    );
  
  
}

export default ProductList;