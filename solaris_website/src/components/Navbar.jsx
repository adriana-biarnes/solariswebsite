import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import WhiteBurger from "/burger-white.png"
import { scrollToSection } from "../constants/utils";
import Logo from '/LogoPng.png';
import CloseIcon from '/close.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(()=>{
    return (
      setIsMenuOpen(false)
    )
  }, [])

  return (
    <nav className="absolute z-10 top-0 left-0 w-full flex justify-end p-10 pr-24 md:pr-16 lg:pr-26 font-opensans">
      {/* tablet version */}
      <div className="gap-8 hidden md:flex justify-evenly">
        {navLinks.map((nav) => (
          <Link
            key={nav.id}
            to={nav.id}
            className="font-opensans font-semibold cursor-pointer text-[16px] text-white shouldDisplayWhiteNavBar:text-white md:text-primary hover:text-secondary"
          >
            {nav.title}
          </Link>
        ))}
        <Link
          onClick={() => scrollToSection("contactUs")}
          className="font-opensans font-semibold cursor-pointer text-[16px] text-white shouldDisplayWhiteNavBar:text-white md:text-primary hover:text-secondary"
        >
          Contact Us
        </Link>
      </div>
      {/* mobile version */}
      <div className="md:hidden flex items-center">
      <img 
          src={WhiteBurger} 
          className="h-[35px] lg:hidden block" 
          alt="Logo"
          onClick={toggleMenu}
      />
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0  bg-primary shadow-lg p-6 space-y-4 md:hidden w-full gap-6">
          <div className="flex h-full w-full flex-col">
            <div className="flex flex-row px-8 pt-4 justify-between">
              <img
                src={Logo}
                className={`
                  h-[70px]
                  ${isMenuOpen ? 'block' : 'hidden lg:block'}`}
                alt="Logo"
              />
              <img 
                    src={CloseIcon} 
                    className="h-[40px] mr-8 lg:hidden block" 
                    alt="Logo"
                    onClick={toggleMenu}
                />
            </div>
            <div className="flex flex-col place-content-evenly h-full py-6 px-20 h-72">
              {navLinks.map((nav) => (
                <Link
                  key={nav.id}
                  to={nav.id}
                  className={`
                    font-roboto 
                    font-semi-bold 
                    ${isMenuOpen ? 'hover:text-secondary' : ''}
                    text-[16px] 
                    px-8 
                    h-10 
                    leading-5`}
                >
                  {nav.title}
                </Link>
              ))}
              <Link
              onClick={() => scrollToSection("contactUs")}
              className="
                font-roboto 
                font-semi-bold 
                hover:text-secondary
                text-[16px] 
                px-8 
                h-10 
                leading-5"
            >
              Contact Us
            </Link>
            </div>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
