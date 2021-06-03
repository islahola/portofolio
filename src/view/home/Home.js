import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Index'
import Sidebar from '../../components/Sidebar/Index'

const Home = () => {
    const [isOpen,setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </div>
    )
}

export default Home
