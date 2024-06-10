import desktopBackgroundImage from '../assets/desktopLanding.jpg';
import mobileBackgroundImage from '../assets/mobileLanding.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${desktopBackgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">On your way to success with consultants you can trust</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">We work with Asset Managers to successfully deliver strategic change</h2>
        <button className="px-4 py-2 bg-primary hover:bg-hoverPrimary rounded">Meet Solaris</button>
        <button className="px-4 py-2 bg-secondary hover:bg-hoverSecondary rounded">Contact us</button>
      </div>
    </div>
  );
};

export default Hero;