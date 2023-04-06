import React,{useState} from "react";
import Home from './home/Home';
function Main({pageHandler,productList,cartHandler})
{
    const [pageName,setPageName] = useState('');
    const page = () => {
        
    }

    return(
        
        <Home pageHandler = {pageHandler} productList={productList} cartHandler={cartHandler}/>

    );
}
export default Main;