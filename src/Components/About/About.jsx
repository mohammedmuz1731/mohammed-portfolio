import React from "react";
import './About.css';
import aboutImage from '../../assets/Me.jpg';
function About(){
    return(
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                {/* <img src="https://mir-s3-cdn-cf.behance.net/projects/404/666da582087427.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="About Image" className="about-image" /> */}

            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={aboutImage} alt="About Image" className="about-image" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Frontend Developer with over 5+ years of professional experience building modern, user-focused web applications. Throughout my career, I’ve had the opportunity to work with reputable organizations, helping drive their growth through high-quality digital solutions.</p>
                        <p>My passion for frontend development goes beyond experience — I bring strong dedication, creativity, and attention to detail to every project I work on.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{"width":"90%"}} /> </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{"width":"70%"}} /> </div>
                        <div className="about-skill"><p>React</p><hr style={{"width":"80%"}} /> </div>
                        <div className="about-skill"><p>Node.js</p><hr style={{"width":"60%"}} /> </div>
                            


                    </div>
                </div>

            
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr/>   
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>12+</h1>
                    <p>Happy Clients</p>
                </div>
            
                    
            </div>
        </div>
    )
}
export default About;