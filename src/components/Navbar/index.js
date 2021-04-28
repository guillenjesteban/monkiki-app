import React, {useState, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
NavBtn, NavBtnLink} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

export const Navbar = ({toggle}) => {

    // clicking logo icon and going back home

    const toggleHome = () => {
        scroll.scrollToTop();

    }

    // clicking nav bar elements to go to the respective section

    const goNosotros = () => {
        scroll.scrollTo("nosotros");
    }

    const goVeterinarias = () => {
        scroll.scrollTo("veterinarias");
    }

    const goBeneficios = () => {
        scroll.scrollTo("beneficios");
    }

    const goFooter = () => {
        scroll.scrollTo("legales");
    }

    // changing nav color while scrolling

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true); 
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    return (
        <div>
            <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>monkiki
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks onClick={goNosotros}to="nosotros"
                        smooth={true} 
                        spy={true} 
                        exact="true">Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        onClick={goBeneficios}
                        smooth={true} 
                        spy={true} 
                        exact="true"
                        to="beneficios">Beneficios</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={goVeterinarias} to="veterinarias"
                        smooth={true} 
                        spy={true} 
                        exact="true">Veterinarias</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={goFooter}
                        smooth={true} 
                        spy={true} 
                        exact="true"
                        to="legales">Legales</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink target="/blank" to={{ pathname: "https://linktr.ee/monkikiapp"}}>Descargar App</NavBtnLink>
                </NavBtn>
               </NavbarContainer> 
            </Nav>
        </div>
    )
}


export default Navbar;