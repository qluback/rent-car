import { createContext } from "react";
import { useReducer } from "react";
import cartReducer from "../reducer/CartReducer";
import { PARTNERS } from "../dummy-partners";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    carSelected: {},
    nbKilometers: 100,
    options: [],
    totalPrice: 15,
    partner: PARTNERS[0],
    dates: {start: null, end: null},
    userInfos: {},
    currentPage: "Choix du partenaire",
  });

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
