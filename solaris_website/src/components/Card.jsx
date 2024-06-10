import { cards } from "../constants";

console.log("aqui", cards);

const Card = () => {
  console.log(cards.img, 'img');
  console.log(cards.title, 'img');
  console.log(cards.content, 'img');

  return (
    <div className="max-w-md mx-auto bg-purple-600 p-3 rounded-xl shadow-md overflow-hidden">
      <div className="bg-blue-400 w-[380px]">
        <img
          //className="h-64 w-full object-cover"
          src={cards.img}
          alt={cards.title}
        />
        <div className="p-4 bg-yellow-200">
          <h2 className="text-2xl font-bold text-primary">{cards.title}</h2>
          <p className="mt-2 text-primary">{cards.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
