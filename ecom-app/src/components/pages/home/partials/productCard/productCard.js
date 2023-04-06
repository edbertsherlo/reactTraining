import React,{useState} from "react";
import './productCard.css';
function ProductCard({product,pageHandler,cartHandler})
{
    
    const [enableAddCart,setEnableAddCart] = useState(true);
    const showDetailView = (e,productId) => {
        pageHandler('detail',productId);
      }
    const addToCart = (e,product) => {
      e.stopPropagation();
      cartHandler(product);
    }  
      
    return (
        
    
    <div className="col-lg-3 col-md-6 col-sm-6 d-flex"  onClick={(e)=> showDetailView(e,product.id)}>
        <div className="card w-100 my-2 shadow-2-strong">
          <img src={product.image} className="card-img-top" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}{product.id}</h5>
            <p className="card-text">${product.price}</p>
            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" className=" btn btn-primary disable shadow-0 me-1" onClick={(e) => addToCart(e,product)}>Add to cart</a>
              <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    

    );
  
  
}

export default ProductCard;