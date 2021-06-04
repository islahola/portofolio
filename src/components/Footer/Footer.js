import React from 'react'
import styled from 'styled-components'
import {GiClover} from 'react-icons/gi'
const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #242222;
`
const H1 = styled.p`
    color: white;
    padding-top : 1rem;
    letter-spacing: 0.14em;
`
const Footer = () => {
    return (
        <Container>
            <H1>Enjoy Me || islah olla</H1>
            <GiClover style={{color:"#01bf71"}}/>
        </Container>
    )
}

export default Footer
