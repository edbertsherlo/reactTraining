import React from "react";
import ImageCard from "./partials/imageCard/ImageCard";
import InfoCard from "./partials/infoCard/InfoCard";
function Detail({pageHandler,productInfo}){
    console.log(productInfo);
    return(
        <section className="py-5">
            <div className="container">
                <div className="row gx-5">
                    <ImageCard productInfo={productInfo}/>
                    <InfoCard productInfo={productInfo}/>
                </div>
            </div>
        </section>
    );
}
export default Detail;