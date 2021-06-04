import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
export const HeroContainer = styled.div`
    background: #0c0c0c;
    justify-content:center;
    display:flex;
    align-items: center;
    padding : 0 30px;
    height:650px;
    position: relative;
    z-index:1;
    @media screen and (max-width:768px){
        height:1200px;
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
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    z-index: 99;
    width: 90%;
    line-height: 3rem;
    @media screen and (max-width:1228px){
        margin-top: -1rem;
    }
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
export const JudulSkil = styled.h3`
    position: absolute;
    top: 0;
    font-size: 32px;
    border-bottom:3px solid #01bf71;
    color: white;
    @media screen and (max-width:768px){
        font-size:40px;
    }
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const Judul = styled.h1`
    font-size: 38px;
    padding-bottom: 2rem;
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
export const WrapProfil = styled.div`
    margin-top: -30px;
    padding-right: 2rem;
    width: 506px;
    height: 500px;
    background: #242222;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: center;
    @media screen and (max-width:768px){
        margin-top:5rem;
        height:900px;
    }
`
export const BoxImg = styled.div`
    Width : 209px;
    Height :180px;
`

export const Image = styled.img`
     width:100%;
     cursor : pointer;
    height: 100%;
    -o-object-fit : cover;
    object-fit: cover;
`