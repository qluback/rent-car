import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CarChoicePage from "./CarChoicePage";
import PaymentPage from "./PaymentPage";
import UserInformationsPage from "./UserInformationsPage";
import CarOptionsPage from "./CarOptionsPage";
import PartnerChoicePage from "./PartnerChoicePage";

export default function Main() {
  const cartContext = useContext(CartContext);
  const currentPage = getPage(cartContext.currentPage);

  function getPage(pageName) {
    switch (pageName) {
      case "Choix du partenaire":
        return <PartnerChoicePage />;
      case "Choix du véhicule":
        return <CarChoicePage />;
      case "Choix des options":
        return <CarOptionsPage />;
      case "Mes informations":
        return <UserInformationsPage />;
      case "Paiement":
        return <PaymentPage />;
    }
  }

  return <main className="flex h-screen overflow-hidden">{currentPage}</main>;
}
