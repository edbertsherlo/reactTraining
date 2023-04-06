function ImageCard({productInfo}){
    const imageCardStyle = {
        maxWidth: '100%',
        maxHeight: '100vh',
        margin: 'auto'
    };
    return(
        <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
            <img style={imageCardStyle} className="rounded-4 fit" src={productInfo.image} />
          </a>
        </div>
        
        
      </aside>
    );
}

export default ImageCard;