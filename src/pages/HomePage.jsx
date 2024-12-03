import React from 'react'
import Hero from '../components/home/hero/Hero'
import Card from '../components/home/card/Card'
import Gallary from '../components/home/gallary/Gallary'
import Video from '../components/home/video/Video'
import Footer from '../components/home/footer/Footer'


function HomePage() {
  return (
    <div>
      <Hero/>
      <Card/>
      <Gallary/>
      <Video/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
