import './InfoCard.css';
import Rating from '../rating/Rating';
function InfoCard({productInfo}){
    const imageCardWrapperStyle = {
        textAlign : 'left'
    }
    
    let stockStatus = <span className="text-success ms-2 outofstock" >Out of stock</span>;
    let actionBlock;
    if(productInfo.atp>0)
    {
       stockStatus = <span className="text-success ms-2">In stock</span>;

       actionBlock = (
        <div>
          <div className="row mb-4">
            <div className="col-md-4 col-6 mb-3">
              <label className="mb-2 d-block">Quantity</label>
              <div className="input-group mb-3" >
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-warning shadow-0 c-buton"> Buy now </a>
          <a href="#" className="btn btn-primary shadow-0 c-buton"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
          <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3 c-buton"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
        </div>
       );
    }
    let rating;
    for(let i=0;i<=5;i++){
      rating= <Rating/>
    }
    
    return(
        <main className="col-lg-6" style={imageCardWrapperStyle}>
        <div className="ps-lg-3">
          <h4 className="title text-dark">
            {productInfo.name}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
              {
                rating
              }
              
              <span className="ms-1">
                4.5
              </span>
            </div>
            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            {stockStatus}
            
          </div>

          <div className="mb-3">
            <span className="h5">${productInfo.price}</span>
          </div>

          <p>
          {productInfo.description}
          </p>

          

          <hr />

            {actionBlock}
        </div>
      </main>
    );
}

export default InfoCard;