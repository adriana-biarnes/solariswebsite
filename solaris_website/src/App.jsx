
import { Navbar, Hero, MeetSolaris, Services, CardValues, Form, Footer } from "./components";
import styles from "./styles";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  {/* TODO: AFEGIR IMATGE DE FONS, REVISAR ESTILS, NAVBAR HA DE SER DINS */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <MeetSolaris />
        <Services />
        <CardValues />
        <Form />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

<div className={`bgGray ${styles.flexStart}`}>
       
       </div>
