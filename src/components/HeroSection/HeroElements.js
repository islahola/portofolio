import styled from 'styled-components'
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items: center;
    padding : 0 30px;
    height:616px;
    position: relative;
    z-index:1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    width: 100%;
    height: 612px;
    overflow:hidden;
`
export const Image = styled.img`
    width:100%;
    height: 100%;
    -o-object-fit : cover;
    object-fit: cover;
   
`
export const HeroContent = styled.div`
    position: absolute;
    z-index: 99;
    width: 100%;
    text-align: center;
    line-height: 3rem;
`
export const HeroH1 = styled.h1`
    font-size: 48px;
    color: white;
    @media screen and (max-width:768px){
        font-size:40px;
    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    color: white;
    margin-top:24px;
    font-size: 24px;
    @media screen and (max-width:480px){
        font-size: 18px;
    }
`
export const HeroBtnWrap = styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`