import React from 'react'
import ContactUs from '../../components/contact/ContactUs'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Blok = styled.div`   
    width: 500px;
`
const Container = styled.div`  
    background: #0c0c0c;
    justify-content:space-around;
    display:flex;
    flex-wrap: wrap;
    padding: 0 5rem;
    padding-bottom: 3rem;
    align-items: center;
`
const Contact = () => {
    return (
        <Container id="contact">
            <Blok>
                <h3 style={{color: "#01bf71"}}className="text-center ">Contact Me</h3>
                <ContactUs/>
            </Blok>
            <Blok>
                <p style={{fontSize: "24px",marginTop:"2rem" }}className="text-white ">If you have questions about me or want to submit Information, Suggestions, Experiences with me , please fill out the form next to this.</p>
            </Blok>
        </Container>
    )
}

export default Contact
