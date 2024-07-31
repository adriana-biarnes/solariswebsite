import {
  Footer,
  Hero,
  MeetSolaris,
  Services,
  CardSection,
  Form,
} from "./components";
import styles from "./styles";
import formTreeV2 from "./assets/formTreeV2.jpg"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const isSmallScreen = window.innerWidth < 768;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
  <div className="bg-white w-full overflow-hidden min-w-[355px]">
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.wrapper} mt-24`}>
        <MeetSolaris />
        <Services />
        <CardSection />
      </div>
    </div>

    {/* TODO: Move this logic within the Footer and refactor it to remove the duplicated divs */}
    <div
      className={`md:flex md:justify-center sm:h-[1000px] md:items-start sm:px-16 px-6 bg-cover bg-center`}
      style={{
        ...(!isSmallScreen && { backgroundImage: `url(${formTreeV2})` }),
        marginBottom: '0', // This removes the bottom margin
      }}
    >
      <div className={`${styles.wrapper} mt-2 `} id="contactUs">
        <div className="flex flex-col md:grid grid-cols-2 justify-start">
          <Form />
        </div>
      </div> 
    </div>
    <Footer />
  </div>
)};

export default App;