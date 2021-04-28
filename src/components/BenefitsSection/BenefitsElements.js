import styled from "styled-components";

export const BenefitsContainer = styled.div`
    height: 780px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media screen and (min-width: 1000px) {
        height: 880px;
        margin-top: -150px;
    }

    @media screen and (max-width: 768px) {
        height: 2100px;
    }

    @media screen and (max-width: 480px) {
        height: 1950px;
    }
`

export const BenefitsWrapper = styled.div`
    /* max-width: 100px; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 17px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`

export const BenefitsCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    max-width: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {

    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12);
    }
`

export const BenefitsIcon = styled.div`
    height: 160px;
    width: 160px;
    font-size: 60px;
    text-align: center;
    margin-bottom: -30px;
    margin-top: 30px;
    padding: 30px;
    color: #F5a834;
    transition: transform .7s ease-in-out;
    &:hover {
    transform: rotate(360deg);
}


`

// export const BenefitsH1 = styled.h1`
//     margin-bottom: 64px;
//     font-size: 48px;
//     line-height: 55px;
//     font-weight: 600;
//     color: #8200ff;

//     @media screen and (max-width: 480px) {
//         font-size: 32px;
//     }

//     @media screen and (max-width: 480px)    {
//         font-size: 2rem;
//     }

// `

export const BenefitsH2 = styled.h2`
    font-size: 1rem;
    color: #F5a834;
    margin-bottom: 10px;
`

export const BenefitsP = styled.p`
    font-size: 1rem;
    color: grey;
    text-align: center;
`


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: center;
    
`

export const BenefitsHeadline = styled.p`
    color: #F5a834;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const BenefitsH1 = styled.h1`
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
    max-width: 740px;
    /* margin-bottom: 35px; */
    margin: 0 15px 35px 15px;
    font-size: 18px;
    line-height: 29px;
    color: grey;
`