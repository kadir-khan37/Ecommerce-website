import React, { Component } from 'react'
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import women from "../../assets/women.webp"
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>Best deals ! Best offers </h2>
            <div className="hero-hand-icon">
                <p>new </p>
                <img src={hand_icon} alt="hero-img"/>
            
            </div>
            <p style={{fontSize:"25px" , fontWeight:"bold"}}>New collections </p>
            <p style={{fontSize:"25px" , fontWeight:"bold"}}>For everyone</p>
            <div className="hero-latest-btn">
                <p > Latest collections</p>
               
            </div>
        </div>
        <div className="hero-right">
            <img src={women} height="500px"/>
        </div>
    </div>
  )
}

export default Hero
