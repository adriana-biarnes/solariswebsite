import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute z-10 top-0 left-0 w-full flex justify-end p-10 pr-28 md:pr-16 lg:pr-28">
      <div className="space-x-4">
          {navLinks.map((nav) => {
              console.log(nav.id);
              return (<Link key={nav.id} to="/whatWeDo" className="font-opensans font-semibold cursor-pointer text-[16px] text-white shouldDisplayWhiteNavBar:text-white md:text-primary hover:text-secondary">{nav.title}</Link>)
          }
          )}
      </div>
    </nav>
  );
};

export default Navbar;

