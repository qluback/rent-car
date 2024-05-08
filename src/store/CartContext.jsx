import { createContext } from "react";
import { useReducer } from "react";
import cartReducer from "../reducer/CartReducer";
import { PARTNERS } from "../dummy-partners";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    carSelected: {},
    options: { nbKilometers: 100 },
    totalPrice: 15,
    partner: PARTNERS[0],
    userInfos: {},
    currentPage: "Choix du véhicule",
  });

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
