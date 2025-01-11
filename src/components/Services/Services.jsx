import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import Services_Data from '../../assets/assets/services_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

const Services = () => {

  const handleReadMore = () => {
    // Define the route for the new component
    window.open('/Services',''); // Open the new route in a new tab
  };
  return (
    <div id='services' className='Services'>
      <div className='services-title'>
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />  
      </div>
      <div className='service-container'>
        {Services_Data.map((service,index)=>{
          return <div key={index}  className='services-format'>
            <AnchorLink href='#contact'> 
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p> </AnchorLink>
            <div className='services-readmore'>  
            <AnchorLink ><p onClick={handleReadMore}>Read more</p></AnchorLink>
            <img src={arrow_icon} alt="" />
            </div>
          </div>
          
        })}
      </div>
    </div>
  )
}

export default Services