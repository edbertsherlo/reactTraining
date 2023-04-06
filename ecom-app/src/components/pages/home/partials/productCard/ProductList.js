import React,{useState} from "react";
import ProductCard from "./productCard";


function ProductList({pageHandler,productList,cartHandler}){

  return (
        
  <div className="container my-5">
    <header className="mb-4">
      <h3>New products</h3>
    </header>

    <div className="row">
      {
        productList.map(product => {
          if(product.active){
            return(<ProductCard product = {product} key={product.id} pageHandler={pageHandler} cartHandler={cartHandler}/>)
          }
          
          
        })
      }
    </div>
  </div>

    );
  
  
}

export default ProductList;