import React from "react";
import ProductList from "./partials/productCard/ProductList";

const productSectionStyle = {
    backgroundColor: '#f5f5f5'
 }

function Home({pageHandler,productList}){
    return(
        <>
            <section className="mt-5" style={productSectionStyle}>
                <ProductList pageHandler={pageHandler} productList={productList}/>
            </section>
        </>
    );
}

export default Home;

