import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Home from './components/pages/home/Home';
import Detail from './components/pages/detail/Detail';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';


function App() {

  const [activePage,setActivePage] = useState('home');

  const pageHandler = (pageName,productId='') =>{
    console.log('pageName -'+pageName);
    console.log('productId -'+productId);
    setActivePage(pageName);
  }
  let Page;
  if (activePage=='home') 
  {
    Page = <Home pageHandler = {pageHandler}/>
  } else if(activePage=='detail') {
    Page = <Detail pageHandler = {pageHandler}/>
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
