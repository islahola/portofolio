import React, { useState } from 'react'
import AboutMe from '../components/About/Index.'
import BgDark from '../components/Background/Index.'
import Navbar from '../components/Navbar/Index'
import Sidebar from '../components/Sidebar/Index'

const About = () => {
    // const [isOpen,setOpen] = useState(false)
    // const toggle = () => {
    //     setOpen(!isOpen)
    // }
    return (
        <div id="about">
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <AboutMe/> */}
            <BgDark/>
        </div>
    )
}

export default About
