import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import WhiteBurger from "../../public/burger-white.png"


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
    <nav className="absolute z-10 top-0 left-0 w-full flex justify-end p-10 pr-28 md:pr-16 lg:pr-28">
      <div className="space-x-4 hidden md:flex">
        {navLinks.map((nav) => (
          <Link
            key={nav.id}
            to={nav.id}
            className="font-opensans font-semibold cursor-pointer text-[16px] text-white shouldDisplayWhiteNavBar:text-white md:text-primary hover:text-secondary"
          >
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center">
      <img 
                    src={WhiteBurger} 
                    className="h-[50px] lg:hidden block" 
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
