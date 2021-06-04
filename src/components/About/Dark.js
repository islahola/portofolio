import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items: center;
    padding : 0 30px;
    height:650px;
    position: relative;
    z-index:1;
    @media screen and (max-width:768px){
        height:1000px;
    }
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
export const AboutContent = styled.div`
    position: absolute;
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    z-index: 99;
    width: 90%;
    
`
export const WrapText = styled.div`
    padding-left: 3rem;
    width: 600px;

`
export const Awal = styled.p`
    color: white;
    margin-top:24px;
    font-size: 21px;
    @media screen and (max-width:480px){
        font-size: 18px;
    }
`
export const Judul = styled.h1`
    font-size: 48px;
    color: white;
    @media screen and (max-width:768px){
        font-size:40px;
    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const Isi = styled.p`
    color: white;
    margin-top:24px;
    font-size: 21px;
    @media screen and (max-width:480px){
        font-size: 18px;
    }
`
export const WrapBtn = styled.div`
    margin-top:2rem;
`
export const Btn = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color:#010606;
    font-size: 16px;
    outline:none;
    border:none;
    cursor : pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        text-decoration: none;

        color:#010606;
    }
`
export const WrapProfil = styled.div`
    width: 300px;
    margin-top: -30px;
    padding-right: 2rem;
    @media screen and (max-width:480px){
        width: 300px;
    }
`
export const Image = styled.img`
     width:100%;
     height: 440px;
    -o-object-fit : cover;
    object-fit: cover;
`