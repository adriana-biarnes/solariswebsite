import desktopBackgroundImage from "../assets/desktopLanding.jpg";
import mobileBackgroundImage from "../assets/mobileLanding.jpg";
import logoSolaris from "../assets/logoSolaris.svg";
import Navbar from "./Navbar";
import styles from "../styles";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${desktopBackgroundImage})` }}
      />
      {/* Content Hero */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/* Rectángulo semitransparente solo en desktop */}
        <div className="hidden lg:flex absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 items-center justify-center">
          <div className="w-[460px]">
            <img src={logoSolaris} alt="Solaris" className="w-[364px] h-[190px]" />
            <h1 className={`${styles.heading1} mb-4`}>
              On your way to success with consultants you can trust
            </h1>
            <h2 className={`${styles.heading2} mb-4`}>
              We work with Asset Managers to successfully deliver strategic
              change
            </h2>
            <div className="w-[230px]">
              <button className="w-[230px] h-[48px] px-4 py-2 bg-primary hover:bg-hoverPrimary rounded">
                <p className={`${styles.buttonText}`}>Meet Solaris</p>
              </button>
              <button className="w-[230px] h-[48px] px-4 py-2 bg-secondary hover:bg-hoverSecondary rounded">
                <p className={`${styles.buttonText}`}>Contact us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
