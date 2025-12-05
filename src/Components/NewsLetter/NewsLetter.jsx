import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Update tou Your Email</h1>
      <p>Subscribe To our NewsLtter and stay updated</p>
      <div>
        <input type='email' placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLetter
