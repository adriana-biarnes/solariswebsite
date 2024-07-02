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

const App = () => {
  const isSmallScreen = window.innerWidth < 768;
  return (
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
  className={`md:flex md:justify-center sm:h-[1000px] md:items-start sm:px-16 px-6 bg-cover bg-center`}
  style={{
    ...(!isSmallScreen && { backgroundImage: `url(${formTreeV2})` }),
    marginBottom: '0', // This removes the bottom margin
  }}
>
  <div className={`${styles.wrapper} mt-20`}>
    <div className="flex flex-col md:grid grid-cols-2 justify-start">
      <Form />
    </div>
    <Footer />
  </div>
</div>

  </div>
)};

export default App;