import React from 'react';
import video from "../../videos/video.mp4";
import {Link as LinkR} from "react-router-dom";
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroBtn } from "./HeroElements";
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                 <VideoBg autoPlay loop muted src={video}  type="video/mp4"></VideoBg> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Adopción Animal 
                    <br />
                    En Un Click</HeroH1>
                <HeroP>
                    Adoptá o da en adopción, comunicá o encontrá tu
                    mascota perdida, mirá veterinarias, refugios cercanos y más.
                </HeroP>
                <HeroBtnWrapper>
                    <HeroBtn target="/blank" to={{ pathname: "https://apps.apple.com/ar/app/monkiki/id1542559161"}}>
                        Descarga IOS
                    </HeroBtn>
                    <HeroBtn target="/blank" to={{ pathname: "https://play.google.com/store/apps/details?id=com.monkiki"}}>
                        Descarga ANDROID
                    </HeroBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
