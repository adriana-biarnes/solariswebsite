import { navLinks } from "../constants";

const Navbar = () => {
  return (
      <nav className="absolute top-0 left-0 w-full flex justify-end p-10 pr-28">
        <div className="space-x-4">
          <ul className="list-none hidden sm:flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-opensans font-semibold cursor-pointer text-[16px] text-primary ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
