import React,{ useState} from 'react'
import {HeroContainer,HeroBg,Image,HeroContent,HeroH1,HeroP,HeroBtnWrap,ArrowRight,ArrowForward} from './HeroElements'
import HeroBack from '../../image/bg2.jpg'
import {Button} from '../Button'

const Hero = () => {
    const [hover,setHover] = useState(false)
    const onMouseu = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <Image src={HeroBack}/>
            </HeroBg>
            <HeroContent>
                <HeroH1> <span >Hay,</span> I'Am Islah Olla FrontEnd Developer</HeroH1>
                <HeroP> I'm a student and I'Am Interested in <span>Web Developer </span> </HeroP>
                <HeroBtnWrap>
                    <Button to="about" onMouse={onMouseu} onMouseLeave={onMouseu}
                    primary="true"
                    dark ="true"
                    smooth={true} 
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    activeClass="active"
                    >
                        Detail {hover? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
