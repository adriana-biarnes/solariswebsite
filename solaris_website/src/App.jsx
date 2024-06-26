import {
  Footer,
  Hero,
  MeetSolaris,
  Services,
  CardSection,
  Form,
} from "./components";
import styles from "./styles";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
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

    <div
      // className={`md:flex md:justify-center md:items-start sm:px-16 px-6 bg-footer-formTree sm:bg-white`}
      className="bg-white md:flex md:justify-center md:items-start sm:px-16 px-6 sm:bg-footer-formTree"
    >
      <div className={`${styles.wrapper} mt-24 `}>
        <div className="flex flex-col md:grid grid-cols-2 justify-start">
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

<div className={`bgGray ${styles.flexStart}`}></div>;
