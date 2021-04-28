import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const HeroContainer = styled.div`
    background: linear-gradient(336deg, rgba(124,63,251,0.7) 0%, rgba(245,168,52,1) 100%);

;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* add before styles */

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    opacity: 45%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: white;

`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 68px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    /* background: rgba(255,255,255,0.2); */

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    line-height: 43px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    letter-spacing: 0.1px;
    line-height: 33px;


    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const HeroBtn = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #F5a834;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 0 10px;
    width: 200px;
    text-align: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8200ff;
        color: #fff;

    }

    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`