import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartDispatchContext } from "../store/CartContext";

export default function ButtonNav({ children, isActive }) {
  const dispatch = useContext(CartDispatchContext);
  let cssClasses = "font-typeNormal flex-1 text-center px-2 py-6";
  if (isActive) {
    cssClasses += " bg-black text-white";
  } else {
    cssClasses += " bg-gray-200";
  }
  

  return (
    <button className={cssClasses} onClick={() => dispatch({type: 'SELECT_TAB', page: children})}>
      {children}
    </button>
  );
}
