import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/assets/Techfusion_logo.png'
import user_icon from '../../assets/assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <p>I am Frontend Developer from India , with 3 years of experience
                JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. Wikipedia
                </p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img  src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' /> 
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>Devcrafts.in 2024. All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
