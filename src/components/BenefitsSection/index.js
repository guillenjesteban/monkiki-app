import React from 'react';
import { BenefitsCard, BenefitsContainer, BenefitsH1, BenefitsH2, BenefitsIcon, BenefitsP, BenefitsWrapper, Subtitle, BenefitsHeadline, TextWrapper } from './BenefitsElements';
import { GiSandsOfTime } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { ImAidKit } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";

const BenefitsSection = () => {
    return (
        <BenefitsContainer name="beneficios">
            <TextWrapper>
            <BenefitsHeadline>POR QUÉ USAR MONKIKI</BenefitsHeadline>
            <BenefitsH1>Beneficios</BenefitsH1>
            <Subtitle>Conocé algunas de las ventajas de adoptar, dar en adopción, o buscar servicios mediante la app de Monkiki:</Subtitle>
            </TextWrapper>
            <BenefitsWrapper>
                <BenefitsCard>
                    <BenefitsIcon>
                        <GiSandsOfTime />
                    </BenefitsIcon>
                    <BenefitsH2>Rapidez</BenefitsH2>
                    <BenefitsP>Ocupás menos tiempo buscando en una misma plataforma.</BenefitsP>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsIcon>
                        < FaHandsHelping />
                    </BenefitsIcon>
                    <BenefitsH2>Concreción</BenefitsH2>
                    <BenefitsP>Mayor porcentaje de efectividad y realización para una responsable adopción.</BenefitsP>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsIcon>
                        < ImAidKit />
                    </BenefitsIcon>
                    <BenefitsH2>Asistencia</BenefitsH2>
                    <BenefitsP>Durante todo el proceso de adopción, búsqueda o comunicaciones.</BenefitsP>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsIcon>
                         < AiFillDollarCircle />
                    </BenefitsIcon>
                    <BenefitsH2>Totalmente Gratuita</BenefitsH2>
                    <BenefitsP>No hay gastos extras, ni pagos ocultos.</BenefitsP>
                </BenefitsCard>
            </BenefitsWrapper>
        </BenefitsContainer>
    )
}

export default BenefitsSection;

