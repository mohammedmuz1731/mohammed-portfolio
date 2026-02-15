import React from "react";
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import heroImage from '../../assets/Me.jpg';
import resume from '../../assets/Resume.pdf';

function Hero(){
    return(
        <div id='home' className="hero">
            <img className="hero-image" src={heroImage} alt="Hero Image" />
            <h1><span>I am Mohammed Muzaffar , </span>Frontend Developer based in USA</h1>
            <p>I am a passionate frontend developer specializing in creating responsive and user-friendly web applications using modern technologies like React, JavaScript, and CSS.</p>
            <div className="hero-action">
                <div className ="hero-connect"><AnchorLink className="anchor-link" offset={10} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume"><a href={resume} download="Resume.pdf">My Resume</a></div>
                
            </div>
        </div>
    )
}
export default Hero;