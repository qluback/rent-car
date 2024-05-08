import { createPortal } from "react-dom";
import { useRef } from "react";
import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../store/CartContext";
import { useEffect } from "react";

export default function CartModal() {
  const cartContext = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const dialog = useRef();

  useEffect(() => {
    if (cartContext.isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [cartContext]);

  let totalPrice = 0;
  cartContext.items.map((item) => {
    totalPrice += item.price * item.quantity;
  });

  return createPortal(
    <dialog ref={dialog} className="p-4 backdrop:bg-black/50">
      <ul>
        {cartContext.items.map((item) => {
          return (
            <li key={item.id} className="border-2 border-black p-2">
              <p>{item.title}</p>
              <p>
                Quantité : {item.quantity} - {item.price}€ l'unité
              </p>
              <p>Cumulé : {item.price * item.quantity}€</p>
              <div className="flex mb-2">
                <button
                  className="p-2 bg-black text-white"
                  onClick={() => dispatch({type: 'DECREMENT_QUANTITY', id: item.id})}
                >
                  -
                </button>
                <input
                  className="w-8 text-center"
                  type="text"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="p-2 bg-black text-white"
                  onClick={() => dispatch({type: 'INCREMENT_QUANTITY', id: item.id})}
                >
                  +
                </button>
              </div>
              <button
                className="bg-black text-white rounded-md p-4 cursor-pointer hover:bg-gray-800"
                onClick={() => dispatch({type: 'REMOVE_ITEM', id: item.id})}
              >
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total : {totalPrice}€</p>
      <button onClick={() => dispatch({type: 'CLOSE_CART'})}>Fermer</button>
    </dialog>,
    document.querySelector("body")
  );
};
