import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

export default function RentInfos() {
  const cartContext = useContext(CartContext);
  console.log(cartContext.options);

  return (
    <div className="border-1 border-white text-white p-4 w-full">
      <h3 className="text-xl uppercase mb-4">Ma réservation</h3>
      {/* <img src={imageUrl} alt="" className="w-full mb-2" /> */}
      <div className="mb-4">
        <p>{cartContext.nbKilometers}km inclus</p>
        <ul>
        {cartContext.options.map((option) => {
          return <li key={option.id}>{option.title}</li>;
        })}
        </ul>
      </div>
      <p className="text-xl font-wideNormal">
        <span className="text-3xl">{cartContext.totalPrice}€</span> TTC
      </p>
    </div>
  );
}
