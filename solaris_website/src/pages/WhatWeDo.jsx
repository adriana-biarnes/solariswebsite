import React from "react";
import { Link } from "react-router-dom";
import whatWeDoImage from "../../public/what-we-do-image.png"
import Logo from "../../public/LogoPng.png"
import BlueBurger from "../../public/burger-blue.png"
import LogoBlue from "../../public/Solaris-Logo-Blue.png"
import DescriptionBlocks from "../components/DescriptionBlock";


const WhatWeDo = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-full">
            {/* Blue NavBar */}
            <div className="flex flex-row lg:bg-primary w-full h-28 justify-between items-center px-20">
                <img src={LogoBlue} className="h-[70px] lg:hidden block" alt="LogoBlue"/>
                <img src={Logo} className="h-[70px] hidden lg:block" alt="Logo"/>
                <div className="flex lg:items-center text-white lg:visible lg:space-x-6 invisible hidden lg:block">
                    <Link to="/">Meet Solaris</Link>
                    <Link to="/whatWeDo">What we do</Link>
                    <Link to="/whatWeDo">Our people</Link>
                    <Link to="/whatWeDo">Case Studies</Link>
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
                    <Link to="/whatWeDo">Our people</Link>
                    <Link to="/whatWeDo">Case Studies</Link>
                    <Link to="/whatWeDo">Contact us</Link>
                </div>
            )}
            <div className="flex w-full">
                {/* Half width image */}
                <img className="flex lg:min-h-[2760px] lg:min-w-[681px] lg:visible invisible h-0 w-0" src={whatWeDoImage} alt="What We Do"/>
                <div className="flex flex-col lg:w-1/2 lg:p-20 text-primary w-full lg:m-20 mx-8 text-justify">
                    <div className="flex flex-col gap-10 my-6 ">
                        <h1 className="font-bold text-2xl">What we do</h1>
                        <p className=" text-lg">Solaris is a specialist consulting firm focused on the investments industry. We support our clients with technology, data and operating model transformation across the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU.</p>
                    </div>
                    <DescriptionBlocks />
                </div>
            </div>
            <div className="flex flex-col text-white item-center w-full justify-center text-center bg-primary h-28">
                <h3>Privacy Policy</h3>
                <p>@ 2024 Solaris Consultants</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default WhatWeDo
