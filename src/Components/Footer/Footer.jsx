import React from "react";
import './Footer.css';
import userIcon from '../../assets/user-icon.png';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/666da582087427.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg"height="100" width="100" alt="Logo" className="footer-logo" />
                    <p>I am Frontend Engineer based in USA with 5+ years of experience in building responsive and user-friendly web applications.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={userIcon} alt="User Icon" className="user-icon" />
                        <input type="email" placeholder="Enter your email" className="email-input" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
  
                    
                </div> 
                
            </div>  
            <hr></hr> 
                <div className="footer-bottom">
                    <div className="footer-bottom-left">© 2026 Mohammed Muzaffar. All rights reserved.</div>
                    <div className="footer-bottom-right">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>    
                </div>  
           
        </div>
    )
}
export default Footer;