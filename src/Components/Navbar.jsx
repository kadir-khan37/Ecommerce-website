import React, { useContext, useState } from 'react';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';
import {Link} from "react-router-dom"
import Login from '../Pages/Login';
import logo_image from '../assets/logo_image.webp'
import { ShopContext } from '../ShopContext/Shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo_image} height='40px'/>
          <p>Shopify</p>
        </div>

        <ul className='nav-menu'>
          <li onClick={() => setMenu("Home")}><Link to="/" style={{textDecoration:"none"}}> Home</Link>
            {menu === "Home" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Men")}> <Link to="Men" style={{textDecoration:"none"}}> Men</Link>
             {menu === "Men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Women")}> <Link to="Women" style={{textDecoration:"none"}}>  Women</Link>
           {menu === "Women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("Kids")}> <Link to="Kids" style={{textDecoration:"none"}}>Kids</Link>
            {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/Login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt='log in cart' /></Link>
          <div className="nav-card-count"> {getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
