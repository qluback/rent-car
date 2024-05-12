import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../store/CartContext";

export default function Counter() {
  const cartContext = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  return (
    <div className="flex items-center gap-4">
      <button className="bg-black text-white w-8 h-8" onClick={() => dispatch({ type: "DECREMENT_KILOMETERS" })}>-</button>
      <button
        className="bg-black text-white w-8 h-8"
        onClick={() => dispatch({ type: "INCREMENT_KILOMETERS" })}
      >
        +
      </button>
      <p>
        <span className="font-wideNormal text-xl">{cartContext.nbKilometers}</span> km
      </p>
    </div>
  );
}
