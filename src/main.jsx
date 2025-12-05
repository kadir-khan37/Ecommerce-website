import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContext from './ShopContext/Shopcontext.jsx'
import ShopContextProvider from './ShopContext/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
  
)
