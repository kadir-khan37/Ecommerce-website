import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import kidBanner from './assets/kidBanner.webp';
import menBanner from './assets/menBanner.jpg';
import women_banner from './assets/women_banner.avif';
function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<Shop/>}></Route>
  <Route path='/Men' element={<ShopCategory  banner={menBanner} category="Men"/>}></Route>
  <Route path='/Kids' element={<ShopCategory banner={kidBanner} category="Kids"/>}></Route>
  <Route path='/Women' element={<ShopCategory banner={women_banner} category="Women"/>}> </Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path='/Shop' element={<Shop/>}></Route>
  <Route path='/Product' element={<Product/>}></Route>
  <Route path='/Product/:ProductId' element={<Product/>}></Route>
  <Route path='/Cart' element={<Cart/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
      
    
  );
}

export default App;
