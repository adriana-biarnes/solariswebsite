import { cards } from "../constants";
import styles from "../styles";
 
console.log("aqui", cards);

const Card = ({ img, title, content}) => {
  console.log(img, 'img');
  console.log(title, 'title');
  console.log(content, 'content');

  return (
    <div className="max-w-md mx-auto rounded-xl overflow-hidden">
      <div className="w-auto">
        <img
          className="w-[380px] h-[380px] rounded-xl sepia-0"
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