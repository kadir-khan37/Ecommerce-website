import React from 'react'
import arrow_icon from '../../assets/arrow_icon.png'
import './BredCrums.css'
const BredCrums = (props) => {
  const {product} = props;
  return (
    <div className='bredcrums'>
   
        Shop <img src={arrow_icon} alt="" height="10px" /> Home <img src={arrow_icon} alt="" height="10px" />{product.category} <img src={arrow_icon} alt="" height="10px" /> {product.name} 
      </div>
   
  )
}

export default BredCrums
