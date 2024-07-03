import desktopBackgroundImage from "../assets/desktopLanding.jpg";
import mobileBackgroundImage from "../assets/mobileLanding.jpg";
import logoSolaris from "../assets/logoSolaris.svg";
import Navbar from "./Navbar";
import styles from "../styles";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden sepia-0"
        style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
      />
      <div
        className=" hidden absolute inset-0 bg-cover bg-center lg:block sepia-0"
        style={{ backgroundImage: `url(${desktopBackgroundImage})` }}
      />

      {/* Content Hero */}
      <div className="relative z-10 bg-black  bg-opacity-50 md:bg-inherit  flex items-center justify-center h-screen text-white sepia-0">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Rectángulo semitransparente solo en desktop */}

        <div className="lg:flex lg:bg-black lg:bg-opacity-50 absolute  left-0 w-1/2 h-height lg:h-full items-center justify-center sepia-0">
          <div className="w-[460px]">
            <img
              src={logoSolaris}
              alt="Solaris"
              className="my-10 pl-8 pt-8 md:w-[296px] md:h-[190px]"
            />
            <div className="pr-16 sm:pr-0">
              <h1 className={`${styles.heading1} pl-8 my-8`}>
                On your way to success with consultants you can trust
              </h1>
              <h2 className={`${styles.heading2} pl-8 pr-8`}>
                We work with Asset Managers to successfully deliver strategic
                change
              </h2>
            </div>
            <div className="w-[230px] inline-grid gap-2 p-8">
              <button
                className="w-[230px] h-[48px] bg-secondary hover:bg-hoverSecondary rounded-xl"
                onClick={() => scrollToSection("meet")}
              >
                <p className={`${styles.buttonText} drop-shadow-xl`}>
                  Meet Solaris
                </p>
              </button>
              <button
                className="w-[230px] h-[48px] bg-primary hover:bg-hoverPrimary rounded-xl"
                onClick={() => scrollToSection("contact")}
              >
                <p className={`${styles.buttonText} drop-shadow-xl`}>
                  Contact us
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
