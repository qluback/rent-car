import { useContext } from "react";
import { CartDispatchContext } from "../store/CartContext";

export default function Car({ modelId, image, title, category, price, rangeId }) {
  const dispatch = useContext(CartDispatchContext);
  let imageUrl = `https://picsum.photos/id/${Math.floor(
    Math.random() * 90
  )}/200/125`;
  return (
    <div>
      {/* <img src={image} alt="" /> */}
      <img src={imageUrl} alt="" className="w-full" />
      <h2 className="font-extendedNormal text-xl">{title} - {category}</h2>
      <p className="text-xs">à partir de {price} €/jour*</p>
      <button
        // className="bg-black text-white rounded-md p-4 cursor-pointer hover:bg-gray-800"
        onClick={() => dispatch({ type: "SELECT_CAR", rangeId: rangeId, modelId: modelId })}
      >
        Louer ce modèle
      </button>
    </div>
  );
}
