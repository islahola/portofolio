import React from 'react'
import styled from 'styled-components'
import {AiFillGithub,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'

const ImageContainer = styled.div`
    display:flex;
    position: relative;
    width: 100%;
    
`
const Image = styled.div`
        position: fixed;
        height: 150px;
        z-index: 2;
        color:white;
        bottom: 8.9rem;
        right: 0;
        display: flex;
        flex-direction: column;
        transform: translate(-100%,60%);
        font-size: 2.5rem;
        justify-content: space-between;
        cursor: pointer;
        box-sizing: border-box;
`
const Github = styled.div`
     &:hover{
            color: #01bf71;
            transition: all 0.2s ease-in-out;
        }
`
const Linked = styled.div`
     &:hover{
            color: #01bf71;
            transition: all 0.2s ease-in-out;
        }
`
const What = styled.div`
     &:hover{
            transition: all 0.2s ease-in-out;
            color: #01bf71;
        }
`
const Link = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
            color: #01bf71;
            transition: all 0.2s ease-in-out;
        }
`
const KontakDiv = () => {
    return (
        <ImageContainer>
            <Image>
                <Github>
                    <Link href="https://github.com/islahola">
                        <AiFillGithub/> 
                    </Link>
                </Github>
                <Linked>
                <Link href="https://www.linkedin.com/in/islahola/">
                    <AiFillLinkedin/>
                </Link>
                </Linked>
                <What>
                <Link href="https://api.whatsapp.com/send?phone=6285759044279">
                    <AiOutlineWhatsApp/>
                </Link>
                </What>
            </Image>
        </ImageContainer>
    )
}

export default KontakDiv
