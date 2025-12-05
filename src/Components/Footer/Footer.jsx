import React from 'react'
import logo_image from '../../assets/logo_image.webp'
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-logo' >
     <img src={logo_image} height='40px'/>
    </div>
   <ul className='footer-links'>
    <li>About</li>
    <li>Products</li>
    <li>Offices</li>
    <li>Company</li>
    <li>Contact</li>
   </ul>
   <div className="footer-social-icon">
    <div className="footer-social-container">
     <img src={whatsapp} height="30px"/>
    </div>
    <div className="footer-social-container">
         <img src={instagram} height="30px"/>
        
    </div>
    <div className="footer-social-container">
         <img src={facebook} height="30px"/>
        
    </div>
     

   </div>
   <div className="footer-copyright">
   <hr/>
   <p>Copyright @ 2023 - All Right Reserved</p>
   </div>
    </div>
   
    
  )
}

export default Footer
