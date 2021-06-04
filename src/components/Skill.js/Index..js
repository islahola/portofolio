import React,{ useState} from 'react'
import { HeroBg, HeroContainer,AboutContent,WrapText,JudulSkil
,Awal,Judul,Isi,WrapBtn,Btn,WrapProfil,Image , BoxImg} from './Dark'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
const MySkill = () => {
    const [icon,setIcon]= useState(["HTML",
    "HTML stands for Hypertext Markup Language. create and structure sections, paragraphs, headings, links, and blockquotes for web pages and applications. Use simple code structures (tags and attributes) to mark up a website page. ","html"])
    const setJs = () => {
        setIcon(["Javascript",
        "to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"])
    }
    const setHtml = () => {
        setIcon(["HTML",
        "HTML stands for Hypertext Markup Language. create and structure sections, paragraphs, headings, links, and blockquotes for web pages and applications. Use simple code structures (tags and attributes) to mark up a website page. ","html"])
    }
    const setReact = () => {
        setIcon(["React","React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. Javascritp Framework react-hook, react-router,redux, etc"])
    }
    const setCss = () => {
        setIcon(["CSS","CSS (Cascading Style Sheets) allows you to create great-looking web pages and make the appearance of the website more interesting ","css"])
    }
    return (
        <HeroContainer>
            <HeroBg/>
            <JudulSkil>Advance</JudulSkil>
            <AboutContent>
                 <WrapProfil>
                   <BoxImg><Image onClick={setHtml} src={html}/></BoxImg>
                   <BoxImg><Image onClick={setCss} src={css}/></BoxImg>
                   <BoxImg><Image onClick={setJs} src={js}/></BoxImg>
                   <BoxImg><Image onClick={setReact} src={react}/></BoxImg>
                </WrapProfil>
                <WrapText>
                    {/* <Awal>Let me introduce myself</Awal> */}
                    <Judul>{icon[0]}</Judul>
                    <Isi>{icon[1]}</Isi>
                </WrapText>
            </AboutContent>
        </HeroContainer>
    )
}

export default MySkill
