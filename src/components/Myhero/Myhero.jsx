import React from 'react'
import './Myhero.css'
import  amazon_logo_dark from '../../assets/assets/my_photo4.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'



const Myhero = () => {
  return (
    <div id='home' className='hero'>
        <img src={amazon_logo_dark} alt="" />
        <h1><span>I'm Saurav</span> Frontend Developer</h1>
        <p>I am a Frontend developer from India,with 3 years of experience</p>
        <div className='hero-action'>
           <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
           <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Resume</AnchorLink></div>
        </div>
    </div>
  )
}

export default Myhero
   