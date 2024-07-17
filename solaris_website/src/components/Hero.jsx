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
    <div className="relative h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden md:hidden sepia-0"
        style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
      />
      <div
        className="hidden absolute inset-0 bg-cover bg-center lg:block md:block sepia-0"
        style={{ backgroundImage: `url(${desktopBackgroundImage})` }}
      />

      {/* Content Hero */}
      <div className="relative z-10 bg-opacity-32 lg:bg-inherit flex justify-center h-screen text-white sepia-0">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/* Rectángulo semitransparente solo en desktop */}

        <div className="flex flex-col bg-black bg-opacity-40 absolute left-0 lg:w-5/12 xs:w-7/12 xxs:w-full h-full justify-center  gap-8 px-6">
          <div className="flex flex-col gap-8 xs:w-[460px] w-[335px] justify-center">
            <img
              src={logoSolaris}
              alt="Solaris"
              className="xs:pr-20 pr-48 w-[335px] h-[100px] xs:w-[362.25px] xs:h-[189px] sepia-0"
            />
              <h1 className={`${styles.heading1} xs:pl-8`}>
                On your way to success with consultants you can trust
              </h1>
              <h2 className={`${styles.heading2} xs:pl-8`}>
                We work with Asset Managers to successfully deliver strategic
                change
              </h2>
            
          </div>
          <div className="flex flex-col xs:w-[460px] w-[300px] gap-2 xs:pl-8 ">
              <button
                className="xs:w-[230px] h-[48px] w-[168px] bg-secondary hover:bg-hoverSecondary rounded-xl"
                onClick={() => scrollToSection("meet")}
              >
                <p className={`${styles.buttonText} drop-shadow-xl`}>
                  Meet Solaris
                </p>
              </button>
              <button
                className="xs:w-[230px] h-[48px] w-[168px] bg-primary hover:bg-hoverPrimary rounded-xl"
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
  );
};

export default Hero;
