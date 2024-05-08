import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../store/CartContext";
import CartModal from "./CartModal";
import ButtonNav from "./ButtonNav";
import { useState } from "react";

export default function Header() {
  const cartContext = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  // const cartModal = useRef();

  // function handleOpenCart() {
  //   cartModal.current.open();
  // }

  return (
    <header>
      <nav className="flex w-full mb-4">
        <ButtonNav isActive={cartContext.currentPage === "Choix du véhicule"}>
          Choix du véhicule
        </ButtonNav>
        <ButtonNav isActive={cartContext.currentPage === "Choix des options"}>
          Choix des options
        </ButtonNav>
        <ButtonNav isActive={cartContext.currentPage === "Mes informations"}>
          Mes informations
        </ButtonNav>
        <ButtonNav isActive={cartContext.currentPage === "Paiement"}>
          Paiement
        </ButtonNav>
        {/* <ButtonNav link="/">Choix du véhicule</ButtonNav>
        <ButtonNav link="/options">Choix des options</ButtonNav>
        <ButtonNav link="/recap">Récapitulatif</ButtonNav>
        <ButtonNav link="/user-informations">Mes informations</ButtonNav>
        <ButtonNav link="/payment">Paiement</ButtonNav> */}
      </nav>
      {/* <CartModal />
      <button className="bg-red-500 text-white rounded-md p-4 cursor-pointer hover:bg-red-800" onClick={() => dispatch({type: 'TOGGLE_CART'})}>
        Cart - {cartContext.items.length}
      </button> */}
    </header>
  );
}
