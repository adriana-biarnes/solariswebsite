import { cards } from "../constants";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} img={card.img} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  )
}

export default CardSection;
