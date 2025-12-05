import React from 'react'
import './offers.css'
import exclusive from "../../assets/exclusive.webp"
const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
        <h1>EXCLUSIVE OFFERS </h1>
        <h1>FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>CHECK NOW</button>
    </div>
    <div className="offers-right">
    <img src={exclusive}/>

    </div>
      
    </div>
  )
}

export default Offers
