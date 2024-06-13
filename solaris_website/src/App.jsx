import {
  Footer,
  Hero,
  MeetSolaris,
  Services,
  CardSection,
  Form,
} from "./components";
import styles from "./styles";
import formTree from "../src/assets/formTree.jpg";
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

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart} bg-footer-formTree`}>
    <div className={`${styles.wrapper} mt-24 `}>
    <div className="grid md:grid grid-cols-2  justify-start">
    <Form />

    </div>

    <Footer />
      </div>
    </div>

  </div>
);

export default App;

<div className={`bgGray ${styles.flexStart}`}></div>;
