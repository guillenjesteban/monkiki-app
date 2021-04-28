import React, {useState} from 'react';
import BenefitsSection from '../components/BenefitsSection';
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VetSection from "../components/VetSection";
import Footer from "../components/Footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} /> 
          <HeroSection /> 
          <InfoSection />
          <BenefitsSection />
          <VetSection />
          <Footer />
        </>
    )
}

export default Home;
