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
import man_banner2 from './assets/man_banner2.avif';
import women_banner_2 from './assets/women_banner_2.jpg';
import kidsbanner2 from './assets/kidsbanner2.jpg';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<Shop/>}></Route>
  <Route path='/Men' element={<ShopCategory  banner={man_banner2 } category="Men"/>}></Route>
  <Route path='/Kids' element={<ShopCategory banner={kid} category="Kids"/>}></Route>
  <Route path='/Women' element={<ShopCategory banner={women_banner_2} category="Women"/>}> </Route>
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
