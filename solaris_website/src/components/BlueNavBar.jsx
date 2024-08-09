import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/LogoPng.png';
import BlueBurger from '/burger-blue.png';
import LogoBlue from '/Solaris-Logo-Blue.png';
import CloseIcon from '/close.png';

const NAV_LINKS = [
  { id: '/', title: 'Meet Solaris' },
  { id: '/whatWeDo', title: 'What We Do' },
  { id: '/OurPeople', title: 'Our People' },
  { id: '/caseStudies', title: 'Case Studies' },
  { id: '/#contactUs', title: 'Contact Us' },
];

const Navigation = ({ isMenuOpen }) =>
  NAV_LINKS.map((link) => (
    <Link
      key={link.id}
      to={link.id}
      className={`
        font-roboto 
        font-semi-bold 
        ${isMenuOpen ? 'hover:text-primary' : ''}
        text-[16px] 
        px-8 
        h-10 
        leading-5`}
    >
      {link.title}
    </Link>
  ));

const BlueNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`flex flex-row md:bg-primary w-full h-28 justify-between items-center pl-8 pr-[62px] ${isMenuOpen ? 'bg-primary' : ''}`}
      >
          <Link to="/">
          <img
          src={LogoBlue}
          className={`
            h-[70px]
            ${isMenuOpen ? 'hidden' : 'block md:hidden'}`}
          alt="Logo"
        />   
       <img
          src={Logo}
          className={`
            h-[70px]
            ${isMenuOpen ? 'block' : 'hidden md:block'}`}
          alt="Logo"
        />
        </Link>
        <div className="md:items-center text-white  md:visible md:gap-8 invisible hidden md:block">
          <Navigation />
        </div>
        <img
          src={isMenuOpen ? CloseIcon : BlueBurger}
          className="h-[35px] md:hidden block"
          alt="Logo"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-start bg-primary w-full md:hidden py-6 px-20 text-white gap-3 last:text-orangeWin">
          <Navigation />
        </div>
      )}
    </>
  );
};

export default BlueNavBar;