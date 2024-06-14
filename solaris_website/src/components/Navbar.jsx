import { useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1); // Obtener el ID del atributo href
    const targetElement = document.getElementById(targetId); // Obtener el elemento objetivo por su ID
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Hacer scroll suave hasta el elemento
    }
  };

  // Agregar un efecto secundario para escuchar los clics en los enlaces del Navbar
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Limpiar el efecto secundario al desmontar el componente
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end p-10 pr-28">
      <div className="space-x-4">
        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-opensans font-semibold cursor-pointer text-[16px] text-primary hover:text-secondary ${
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

