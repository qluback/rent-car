import { useContext } from "react";
import Collapse from "../CollapseHours";
import { CartContext } from "../../store/CartContext";

export default function PartnerInfos({fullDisplay = false}) {
  const cartContext = useContext(CartContext);
  const partner = cartContext.partner;
  const dateStartRent = new Date(cartContext.dates.start);
  const dateEndRent = new Date(cartContext.dates.end);

  return (
    <div className="border-1 border-white text-white p-4 w-full">
      <h3 className="text-xl uppercase mb-4">Mon agence</h3>
      <h4 className="font-typeBold">{partner.name}</h4>
      <p className="mb-2">{partner.address}</p>
      {fullDisplay && (
        <>
          <p>wagram@audi-rent.fr</p>
          <p className="mb-2">01 02 03 04 05</p>
          <p>Départ le {dateStartRent.toLocaleDateString()} à {dateStartRent.toLocaleTimeString()}</p>
          <p className="mb-2">Retour le {dateEndRent.toLocaleDateString()} à {dateEndRent.toLocaleTimeString()}</p>
          <Collapse />
        </>
      )}
    </div>
  );
}
