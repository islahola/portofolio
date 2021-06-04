import React from 'react'
import { HeroBg, HeroContainer,AboutContent,WrapText
,Awal,Judul,Isi,WrapBtn,Btn,WrapProfil,Image } from './Dark'
import profil from '../../image/profil.png'
const BgDark = () => {
    return (
        <HeroContainer>
            <HeroBg/>
            <AboutContent>
                 <WrapProfil>
                    <Image src={profil}/>
                </WrapProfil>
                <WrapText>
                    <Awal>Let me introduce myself</Awal>
                    <Judul>About Me</Judul>
                    <Isi>I'Am - Islah, I am a current semester 4 student of State Islamic University Syarif Hidayahtullag Jakarta majoring in Computer Science.
                    I am very interested in Web Developer especially in the field of Frontend Developer.</Isi>
                    <WrapBtn>
                        <Btn href="https://www.canva.com/design/DAEXuJV8gZI/8uzNV_WdtP7436AdY5EtQw/view?utm_content=DAEXuJV8gZI&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"  target="_blank">Download CV</Btn>
                    </WrapBtn>
                </WrapText>
                
            </AboutContent>
        </HeroContainer>
    )
}

export default BgDark
