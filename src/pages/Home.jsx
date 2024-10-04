import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Home;
