import React from 'react'
import './About.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import my_full_photo from '../../assets/assets/my_photo3.jpg'

const About = () => {
  return (
      <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" width="140px" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
             <img src={my_full_photo} alt="" width="150px" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                 <p>I am an experience Frontend Developer with over a 3 years experirence  of professional expertise in the field.
                    Throughly my career,I specialize in creating dynamic, user-friendly web applications that bring ideas to life.
                     My passion for coding and eye for design allow me to craft seamless and engaging user experiences. </p>
                 <p>Also my passion for frontend development is not only reflected in my expertise is not only reflected in my extensive experience but also in the enthusiasm and dedication  which i bring to each project.</p>
                </div>
                <div className='about-skills'>
                <div className='about-skill'><p>HTMl &CSS</p><hr style={{width:"70%"}}/></div>
                <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className='about-skill'><p>React Js</p><hr style={{width:"50%"}}/></div>
                <div className='about-skill'><p>C Programming</p><hr style={{width:"80%"}}/></div>
                <div className='about-skill'><p>OOPS</p><hr style={{width:"70%"}}/></div>
                <div className='about-skill'><p>Data Structure in C++ </p><hr style={{width:"60%"}}/></div>
                <div className='about-skill'><p>Digital Marketing</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
             <h1>3+</h1>
             <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>40+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
        </div>
  )
}

export default About
