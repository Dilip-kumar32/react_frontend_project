import React from 'react'
import About from './About'
import Helper from './Helper'
import Footer from './Footer'
import Navber from './Navber'

export default function Home() {
  return (
    <>
    <Navber/>
    <div className='home'>
        <h1>Welcome To Our Institute.</h1>
        <p>An institute is an organization set up to do a particular type of work, especially research or teaching.</p>
       <img src="./images/sangga.jpg" id='img1' alt="" />
    </div>
    <About/>
    <Helper/>
    <Footer/>
    </>
  )
}
