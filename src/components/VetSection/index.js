import React from 'react';
import { VetContainer, VetWrapper, VetRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from "./VetElements";
import VetImage from "../../images/image2.svg";

export const VetSection = () => {
    return (
        <VetContainer name="veterinarias">
            <VetWrapper>
                <VetRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={VetImage} alt="animal adoption picture" />
                        </ImgWrap>
                    </Column1>
                    <Column2>
                    <TextWrapper>
                        <TopLine>BENEFICIOS PARA</TopLine>
                        <Heading>Veterinarias y Refugios</Heading>
                        <Subtitle>Podrás digitalizár la venta de tus servicios, tus adopciones y generar una nueva plataforma de contacto con clientes.
                            <br />
                            Además del reconocimiento y mayor exposición para tu marca, tendrás asistencia en tu perfil, sin intermediarios y totalmente gratuito.
                            Contarás con la posibilidad de generar pauta publicitaria y atraer nuevos clientes.
                            </Subtitle>
                        <BtnWrap>
                        </BtnWrap>
                    </TextWrapper>
                    </Column2>
                </VetRow>
            </VetWrapper>
        </VetContainer>
    )
}

export default VetSection;
