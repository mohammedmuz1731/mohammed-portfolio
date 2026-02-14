import React from "react";
import './Contact.css';
import envelope from '../../assets/envelope.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';

function Contact(){

    const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "8157871d-f126-4d7f-9b39-f8b4243191bf");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);  
      event.target.reset();  
    } else {
      alert(data.message);   
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};


    return(
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently available for full-time work. Feel free to reach out to me if you have any questions.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <img src={envelope} alt="Email Icon" className="email-icon" /><p>muzmohammed98@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={phone} alt="Phone Icon" className="phone-icon" /><p>+1 501-708-3426</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location} alt="Location Icon" className="location-icon" /><p>AR, USA</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" rows="5" placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>

            </div>

           
        </div>
    )
}   
export default Contact;