import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;