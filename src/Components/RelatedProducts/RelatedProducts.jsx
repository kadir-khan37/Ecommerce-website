import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import all_product from '../../assets/all_product'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
       <h1>Related Products</h1>
    <div className="relatedproducts-item">
    {all_product.map((item,i)=>{
        return <Item id={item.id} key={i} name ={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.new_price}/>
    })}
    </div>
    </div>
  )
}

export default RelatedProducts
