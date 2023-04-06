function Rating(){
    
    const showRatingStar = (count) => {
        for(let i=0;i<=count;i++){
            
            <i className="fa fa-star" key={i}></i>
            
          }
    }

    return(
        
            <div>

            {/* {count.map(c => {
                return (
                    <i className="fa fa-star" key={c}></i>
                )
            })} */}

            {
                // showRatingStar(5)
            }

        </div>
    )
}
export default Rating;