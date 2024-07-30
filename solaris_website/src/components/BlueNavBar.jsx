import React from "react";
import { Link } from "react-router-dom";
import Logo from "/LogoPng.png"
import BlueBurger from "/burger-blue.png"
import LogoBlue from "/Solaris-Logo-Blue.png"

const BlueNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    return(
        <>
            <div className="flex flex-row lg:bg-primary w-full h-28 justify-between items-center px-20">
                <img src={LogoBlue} className="h-[70px] lg:hidden block" alt="LogoBlue"/>
                <img src={Logo} className="h-[70px] hidden lg:block" alt="Logo"/>
                <div className="lg:items-center text-white lg:visible lg:space-x-6 invisible hidden lg:block">
                    <Link to="/">Meet Solaris</Link>
                    <Link to="/whatWeDo">What we do</Link>
                    <Link to="/OurPeople">Our people</Link>
                    <Link to="/caseStudies">Case Studies</Link>
                    <Link to="/whatWeDo">Contact us</Link>
                </div>
                <img 
                    src={BlueBurger} 
                    className="h-[50px] lg:hidden block" 
                    alt="Logo"
                    onClick={toggleMenu}
                />
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-center bg-white w-full lg:hidden py-2 text-primary gap-3">
                    <Link to="/">Meet Solaris</Link>
                    <Link to="/whatWeDo">What we do</Link>
                    <Link to="/OurPeople">Our people</Link>
                    <Link to="/caseStudies">Case Studies</Link>
                    <Link to="/whatWeDo">Contact us</Link>
                </div>
            )}
        </>
    )
}

export default BlueNavBar;