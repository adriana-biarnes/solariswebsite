/* eslint-disable react/prop-types */
import { cards } from "../constants";
import styles from "../styles";
 
console.log("aqui", cards);

const Card = ({ img, title, content}) => {
  return (
    <div className="max-w-md md:max-w-sm mx-auto rounded-xl overflow-hidden">
      <div className="sm:w-[380px] w-[328px]">
        <img
          className="w-[328px] h-[328px] sm:w-[380px] sm:h-[380px]  rounded-xl sepia-0"
          src={img}
          alt={title}
        />
        <div className="py-4">
          <h2 className={`${styles.heading3} mt-2 text-primary`}>{title}</h2>
          <p className={`${styles.cardText} mt-2 text-primary`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;