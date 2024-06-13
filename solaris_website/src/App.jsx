
import { Hero, MeetSolaris, Services, CardSection, Form, Footer } from "./components";
import styles from "./styles";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} mt-24`}>
        <MeetSolaris />
        <Services />
        <CardSection />
      </div>
    </div>
    <div className={`${styles.boxWidth} mt-24`}>
      <Form />
    </div>
  </div>
);

export default App;

<div className={`bgGray ${styles.flexStart}`}>
       
       </div>
