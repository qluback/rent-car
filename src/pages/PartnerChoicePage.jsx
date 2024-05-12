import { useState, useContext } from "react";
import RentForm from "../components/Form/RentForm";
import { PARTNERS } from "../dummy-partners";
import Collapse from "../components/CollapseHours";
import { CartDispatchContext } from "../store/CartContext";
import { useRef } from "react";
import HomeBanner from "../assets/home-banner.jpeg";
import Sidebar from "../components/Sidebar/Sidebar";

export default function PartnerChoicePage() {
  const [partners, setPartners] = useState([]);
  const dispatch = useContext(CartDispatchContext);
  const inputStartRent = useRef();
  const inputEndRent = useRef();

  function handleChangePlace(partnersUpdated) {
    setPartners(partnersUpdated);
  }

  return (
    <>
      <Sidebar>
        <h1 className="font-extendedBold text-3xl text-white">
          Louez l'Audi de vos rêves
        </h1>
        <RentForm
          inputStartRent={inputStartRent}
          inputEndRent={inputEndRent}
          partners={PARTNERS}
          onChangePlace={handleChangePlace}
        />
      </Sidebar>
      {partners.length === 0 ? (
        <section className="w-2/3">
          <img src={HomeBanner} alt="" className="h-full object-cover" />
        </section>
      ) : (
        <section className="slide-in-from-bottom w-2/3 h-screen overflow-y-scroll p-12">
          <ul className="grid grid-cols-2 gap-12">
            {partners.map((partner) => {
              return (
                <li
                  key={partner.name}
                  className="flex flex-col justify-between border-1 border-black p-8"
                >
                  <div className="mb-4">
                    <h4 className="font-typeBold">{partner.name}</h4>
                    <p className="mb-2">{partner.address}</p>
                    <p>wagram@audi-rent.fr</p>
                    <p className="mb-2">01 02 03 04 05</p>
                    <Collapse />
                  </div>
                  <button
                    className="font-wideNormal bg-black text-white h-16 px-8 w-full"
                    onClick={() =>
                      dispatch({
                        type: "SELECT_PARTNER",
                        partnerName: partner.name,
                        startRent: inputStartRent.current.value,
                        endRent: inputEndRent.current.value,
                      })
                    }
                  >
                    Sélectionner le Partenaire
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
