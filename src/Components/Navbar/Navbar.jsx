import React, { useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setmenu]=useState("shop");
  const[cartCount, setCartCount]=useState(0);

const addToCart=()=>{
  setCartCount(cartCount+1);
};


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Men</Link > {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link> 
       <Link to="/cart" onClick={addToCart} >
        <img src={cart_icon} alt=""  />
       
        </Link>
        {cartCount > 0 && <div className="nav-cart-count">{cartCount}</div>}
      </div>
    </div>
  )
}

export default Navbar;
