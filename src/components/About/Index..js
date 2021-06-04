import React from 'react'
import { HeroBg, HeroContainer,AboutContent,WrapText
,Awal,Judul,Isi,WrapBtn,Btn,WrapProfil,Image } from './Dark'
import profil from '../../image/foto.jpg'
import { Button } from '../Button'
const AboutMe = () => {
    return (
        <HeroContainer>
            <HeroBg/>
            <AboutContent >
                 <WrapProfil>
                    <Image src={profil}/>
                </WrapProfil>
                <WrapText>
                    <Awal>Let me introduce myself</Awal>
                    <Judul>About Me</Judul>
                    <Isi>I'Am - Islah, I am a current semester 4 student of State Islamic University Syarif Hidayahtullag Jakarta majoring in Computer Science.
                    I am very interested in Web Developer especially in the field of Frontend Developer.</Isi>
                    <Isi> My Vision is in the area of reponsive design. With every line of code, I strive to make the Web a beautiful place</Isi>
                    <WrapBtn>
                    <Button 
                    primary="true"
                    dark ="true"
                    >Download CV</Button>
                    </WrapBtn>
                </WrapText>
            </AboutContent>
            <h1>Education</h1>
        </HeroContainer>
    )
}

export default AboutMe
