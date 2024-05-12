import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

export default function CarInfos() {
  const cartContext = useContext(CartContext);
  const car = cartContext.carSelected;

  let imageUrl = `https://picsum.photos/id/${Math.floor(
    Math.random() * 90
  )}/200/125`;

  return (
    <div className="border-1 border-white text-white p-4 w-full">
      <h3 className="text-xl uppercase mb-4">Mon véhicule</h3>
      {/* <img src={imageUrl} alt="" className="w-full mb-2" /> */}
      <h4 className="font-typeBold">{car.name}</h4>
      <p className="font-wideNormal">{car.description}</p>
    </div>
  );
}
