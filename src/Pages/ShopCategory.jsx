import React,{useContext,useState} from 'react'
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../ShopContext/Shopcontext'
import '../CSS/ShopCategory.css'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
   <div className="shop-category Men">
    <div className="shopcategory-banner">
      <img src={props.banner} alt='' height={500} width={400} />
       <div className='shopcategory-indexSort'>
        <p>
          Choose your product
        </p>
      </div>
    </div>
    <div className='shopcategory-products'>

    {all_product.map((item ,i)=>{
      if(props.category===item.category){
       return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;  
      }
    })}
    </div>
      <div className="shopcategory-loadmore">
        HAPPY SHOPPING
      </div>
    
   
    </div>
  )
}

export default ShopCategory
