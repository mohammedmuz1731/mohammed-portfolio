import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';
import { useRef } from 'react';

function Navbar() {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <>
    <div className="navbar">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/666da582087427.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg"height="100" width="100" alt="Logo" className="logo" />
        <img src={menu_open} onClick={openMenu} alt="Menu Icon" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <div >
            <img src={menu_close} onClick={closeMenu} alt="Close Icon" className="nav-mob-close" /></div>
            
            <li><AnchorLink className="anchor-link" offset={100} href="#home">Home</AnchorLink></li> 
            <li><AnchorLink className="anchor-link"  href="#about">About</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#services">Services</AnchorLink></li>
            <li><AnchorLink className="anchor-link" href="#contact">Contact</AnchorLink></li>
            
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" href="#contact">Connect with me</AnchorLink></div>



    </div>
    </>
  );
}

export default Navbar;