import styled from 'styled-components';


export const VetContainer =styled.div`
    color: black;
    background: white;
    height: 980px;
    margin-top: 150px;
    

    @media screen and (min-width: 1000px) {
        height: 780px;
        margin-top: -50px;
    }

    @media screen and (max-width: 768px) {
        height: 980px;
        padding: 100px 0;
        margin-top: -150px;

    }

    @media screen and (max-width: 480px) {
        height: 950px;
        margin-top: 0;
        margin-top: -130px;


    }

`

export const VetWrapper = styled.div`
    display: grid;
    height: 680px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const VetRow= styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "col1 col2";

    @media screen and (max-width: 768px) {
        grid-template-areas:
        "col1"
        "col2";
        
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: "col1";
    
    
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: "col2";
    margin-left: 15px;
    
    
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
`

export const TopLine = styled.p`
    color: #F5a834;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 55px;
    font-weight: 600;
    color: #8200ff;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 29px;
    color: grey;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`