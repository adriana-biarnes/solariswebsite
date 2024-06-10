import { navLinks } from "../constants";
import logoSolaris from "../assets/logoSolaris.svg"

const Navbar = () => {

    return ( 
        <nav className="w-full flex py-6 justify-between items-center navbar">
        {/* Desktop Navbar */}
        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-opensans font-semibold cursor-pointer text-[16px] text-primary ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile Navbar */}
        <div className="sm:hidden flex flex-1 justify-start items-center">
        <img src={logoSolaris} alt="Solaris" className="w-[124px] h-[32px]" />
        </div>
      </nav>
     );
}
 
export default Navbar;