import React from 'react';
import InfoImage from '../../images/image.svg';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from "./InfoElements";
const InfoSection = () => {
    return (
        <InfoContainer name="nosotros">
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>QUÉ ES MONKIKI</TopLine>
                        <Heading>¡Adoptá tu próxim@ mejor amig@!</Heading>
                        <Subtitle>Monkiki es la app de las mascotas, creada para ayudar a los animales a encontrar su humano ideal, aquel que le brinde un hogar lleno de amor, seguridad, alimento y buena salud, gracias a que proporcionamos toda la información que dicho humano necesitará para el cuidado de nuestros amigos peludos.</Subtitle>
                        <BtnWrap>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={InfoImage} alt="animal adoption picture" />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            
        </InfoContainer>
    )
}

export default InfoSection
;