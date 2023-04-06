import React from "react";
import ProductList from "./partials/productCard/ProductList";

const productSectionStyle = {
    backgroundColor: '#f5f5f5'
 }

function Home({pageHandler,productList,cartHandler}){
    return(
        <>
            <section className="mt-5" style={productSectionStyle}>
                <ProductList pageHandler={pageHandler} productList={productList} cartHandler={cartHandler}/>
            </section>
        </>
    );
}

export default Home;

