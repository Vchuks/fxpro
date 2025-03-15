import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventFX from '../components/EventFX'
import EventDetails from '../components/EventDetails'
import Learn from '../components/Learn'
import Why from '../components/Why'
import Keynotes from '../components/Keynotes'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  
  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if(elem) {
        elem.scrollIntoView({behavior: "smooth"})
               }          
        } else {
  window.scrollTo({top:0,left:0, behavior: "smooth"})
                }
    }, [location.hash])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <EventFX/>
      <EventDetails/>
      <Learn/>
      <Why/>
      <Keynotes/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default Home
