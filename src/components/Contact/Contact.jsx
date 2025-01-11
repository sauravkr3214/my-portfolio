import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'
import location_icon from '../../assets/assets/location_icon.svg'
import call_icon from '../../assets/assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c3223c77-71af-4e9a-8fe0-e36777a86e29");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };

   

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
        <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I  am currently available to take on projects, so anything that want me to work on.You can cotact me anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" /><p>sauravsuman8316@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={call_icon} alt="" /><p>+0123456789</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={location_icon} alt="" /><p>New Delhi,INDIA</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" id="" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id=""  rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
