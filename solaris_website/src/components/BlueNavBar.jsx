import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/LogoPng.png';
import BlueBurger from '/burger-blue.png';
import LogoBlue from '/Solaris-Logo-Blue.png';
import CloseIcon from '/close.png';

const NAV_LINKS = [
  { id: '/', title: 'Meet Solaris' },
  { id: '/whatWeDo', title: 'What we do' },
  { id: '/OurPeople', title: 'Our People' },
  { id: '/caseStudies', title: 'Case Studies' },
  { id: '/#contactUs', title: 'Contact us' },
];

const Navigation = ({ isMenuOpen }) =>
  NAV_LINKS.map((link) => (
    <Link
      key={link.id}
      to={link.id}
      className={`
        font-opensans
        font-[16px]
        ${isMenuOpen ? 'hover:text-primary' : ''}
        text-lg 
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
        className={`flex flex-row lg:justify-end lg:bg-primary w-full h-28 font-opensans text-[16px] justify-between items-center px-[30px] ${isMenuOpen ? 'bg-primary' : ''}`}
      >
        <img
          src={isMenuOpen ? Logo : LogoBlue}
          className={`
            h-[70px]
            ${isMenuOpen ? 'block' : 'block lg:hidden'}`}
          alt="Logo"
        />
        <div className="lg:items-center text-white space-x-[32px] lg:visible lg:gap-8 invisible hidden lg:block">
          <Navigation />
        </div>
        <img
          src={isMenuOpen ? CloseIcon : BlueBurger}
          className="h-[50px] lg:hidden block"
          alt="Logo"
          onClick={toggleMenu}  
        />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-start bg-primary w-full lg:hidden py-6 px-20 text-white gap-3 last:text-orangeWin">
          <Navigation />
        </div>
      )}
    </>
  );
};

export default BlueNavBar;