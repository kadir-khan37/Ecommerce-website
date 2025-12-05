import React, { createContext, useState } from 'react'
import all_product from "../assets/all_product";

 export const ShopContext = createContext(null);
const getDefaultcart=()=>{
    let cart = {};
    for(let index = 1 ; index < all_product.length+1 ; index++){
        cart[index] = 0
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItems , setcartItems] = useState(getDefaultcart());

const addTocart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}),
    console.log(cartItems)
)

}
const getTotalCartAmount=()=>{
    let totalamount = 0 ;
    for(const item in cartItems ){
        if(cartItems[item]>0){
            let iteminfo = all_product.find((e)=>
                e.id===Number(item))
                 totalamount += iteminfo.new_price*cartItems[item]
        }
       
    }
      return totalamount;
}
const removeFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1})
)

}
const getTotalCartItems=()=>{
     let totalItems = 0 ; 
    for(const item in cartItems ){
        if(cartItems[item] > 0 ){
             totalItems += cartItems[item];
        }
    }
    return  totalItems;
}


const contexValue = {all_product,addTocart,removeFromCart , getTotalCartItems, getTotalCartAmount , cartItems};
return(
    <ShopContext.Provider value={contexValue}>
     {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;