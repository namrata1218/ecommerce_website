import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom" 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import DotLoader from "react-spinners/DotLoader";


function App() {
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)

  }, [])
  return (
    <div className='App' >
   {
    loading ?
    <div className='loader-container'>
     <DotLoader
        color={'#E39FF6'}
        loading={loading}
       
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
       :
       <div>
     
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShopCategory category="mens"/>}/>
        <Route path='/womens'element={<ShopCategory  category="womens"/>}/>
        <Route path='/kids'element={<ShopCategory  category="kids"/>}/>
          < Route path='product' element={<Product/>}>
          <Route path='productId' element={<Product/>}/>
          </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
     <Footer/>
      
     
      </div> 
}
    </div>
  );
}

export default App;
