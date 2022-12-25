import React from 'react'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Service/>
    <Portfolio></Portfolio>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App;