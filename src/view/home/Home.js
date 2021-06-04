import React, { useState } from 'react'
import BgDark from '../../components/Background/Index.'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/HeroSection/Index'
import Navbar from '../../components/Navbar/Index'
import Sidebar from '../../components/Sidebar/Index'
import About from '../About'
import Contact from './Contact'
import Portofolio from './Portofolio./Portofolio'
import Skill from './Skill'
import KontakDiv from '../../components/logo/KontakDiv'

const Home = () => {
    const [isOpen,setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    return (
        <div id="home">
            <KontakDiv/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <About/>
            <Skill/>
            <Portofolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
