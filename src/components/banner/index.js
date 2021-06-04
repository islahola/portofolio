import React,{ useState} from 'react'
import {HeroContainer,HeroBg,Image,HeroContent,HeroH1,HeroP,HeroBtnWrap,ArrowRight,ArrowForward} from './HeroElements'
import HeroBack from '../../video/vdBg.mp4'
import {Button2} from '../Button2'

const Hero = () => {
    const [hover,setHover] = useState(true)
    const onMouseu = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <Image autoPlay loop muted src={HeroBack} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hallo</HeroH1>
                <HeroP> Let's Get To Know Each Other {hover? '' : 'Yippy, Click Me'}</HeroP>
                <HeroBtnWrap>
                    <Button2 to="home"  onMouse={onMouseu} onMouseLeave={onMouseu}
                    primary="true"
                    dark ="true"
                    >
                        LetsGo
                    </Button2>
                </HeroBtnWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
