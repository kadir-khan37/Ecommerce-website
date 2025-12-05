import React from 'react'
import '../CSS/Login.css'
const Login = () => {
  return (
    
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>LOGIN SIGNUP</h1>
         
         <div className='loginsignup-fields'>
        <input type='text' placeholder='write your name'/>
        <input type="email" placeholder='write Your Email'/>
        <input type="password" placeholder='write your password'/>
        <button>Continue</button>
        </div>
        
         <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
      
      </div>
     

       <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
     
    
    </div>
  )
}

export default Login
