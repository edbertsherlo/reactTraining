import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/Detail';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import productData from "./dataCenter/products.json";

function App() {
  const [productList,setProductList] = useState(productData);
  const [activePage,setActivePage] = useState('home');
  const [productId,setproductId] = useState(0);

  const pageHandler = (pageName,productId='') =>{
    console.log('pageName -'+pageName);
    console.log('productId -'+productId);
    setActivePage(pageName);
    setproductId(productId);
  }
  let Page;
  if (activePage=='home') 
  {
    Page = <Home pageHandler = {pageHandler} productList={productList}/>
  } else if(activePage=='detail') {

    let productInfo = productList[productId-1];
    Page = <Detail pageHandler = {pageHandler} productInfo={productInfo}/>
  }
  return (
    <div className="App">
      <Header/>
      {Page}
      <Footer/>
    </div>
  );
}

export default App;
