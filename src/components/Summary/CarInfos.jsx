import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

export default function CarInfos() {
  const cartContext = useContext(CartContext);
  const car = cartContext.carSelected;

  let imageUrl = `https://picsum.photos/id/${Math.floor(
    Math.random() * 90
  )}/200/125`;

  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-xl uppercase mb-4">Mon véhicule</h3>
      <img src={imageUrl} alt="" className="w-full mb-2" />
      <h4 className="font-typeBold">{car.name}</h4>
      <p className="font-wideNormal">{car.description}</p>
      <p>{cartContext.options.nbKilometers}km inclus</p>
    </div>
  );
}
