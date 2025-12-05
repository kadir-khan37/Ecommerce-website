import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../ShopContext/Shopcontext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import BredCrums from '../Components/BredCrums/BredCrums'
import all_product from '../assets/all_product'
import Description from '../Components/Description/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
const Product = () => {
  
     const {all_product} = useContext(ShopContext);
     const {ProductId} = useParams();
      const product = all_product.find((e)=> e.id===parseInt(ProductId))
  

  
  return (
    <div>
  <ProductDisplay product={product}/>
  <BredCrums product={product}/>
  <Description />
  <RelatedProducts />
    </div>
  )
}

export default Product
