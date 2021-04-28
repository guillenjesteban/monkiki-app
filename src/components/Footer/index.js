import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements";
import {animateScroll as scroll } from "react-scroll";
import terminosYCondiciones from "../../pdfs/terms_and_conditions.pdf";
import politicasDeCookies from "../../pdfs/cookie_policy.pdf";
import politicasDePrivacidad from "../../pdfs/privacy_policy.pdf";


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();

    }

    return (
        <FooterContainer name="legales">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Legales</FooterLinkTitle>
                            <FooterLink to={terminosYCondiciones} target="_blank" download>Términos y Condiciones</FooterLink>
                            <FooterLink to={politicasDeCookies} target="_blank" download>Políticas de Cookies</FooterLink>
                            <FooterLink to={politicasDePrivacidad} target="_blank" download>Políticas de Privacidad</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacto</FooterLinkTitle>
                            <FooterLink>atencionalusuario @monkikiapp.com</FooterLink>
                            <FooterLink>(AR) +54 9 351 7686031</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>monkiki</SocialLogo>
                        <WebsiteRights>DIOZILLON S.A.S. © All rights reserved {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/monkiki.app.1" target="/blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/monkikiapp/" target="/blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
