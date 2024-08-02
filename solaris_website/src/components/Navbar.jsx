import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import WhiteBurger from "/burger-white.png"
import { scrollToSection } from "../constants/utils";


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
      <div className="gap-8 hidden md:flex">
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
      <div className="md:hidden flex items-center">
      <img 
                    src={WhiteBurger} 
                    className="h-[40px] lg:hidden block" 
                    alt="Logo"
                    onClick={toggleMenu}
                />
      </div>
      {isMenuOpen && (
        <div className="absolute top-24 right-10 bg-white rounded-lg shadow-lg p-5 space-y-4 md:hidden">
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to={nav.id}
              className="block font-opensans font-semibold cursor-pointer text-[16px] text-primary hover:text-secondary"
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
      )}
    </nav>
  );
};

export default Navbar;
