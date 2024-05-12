import { useContext } from "react";
import { useRef } from "react";
import { CartContext } from "../store/CartContext";

export default function Collapse() {
  const cartContext = useContext(CartContext);
  const list = useRef();
  function handleToggle() {
    list.current.style.margin = list.current.style.margin
      ? null
      : "0.5rem 0 0";
    list.current.style.maxHeight = list.current.style.maxHeight
      ? null
      : list.current.scrollHeight + "px";
    setTimeout(() => {}, 1000);
  }

  return (
    <>
      <button onClick={() => handleToggle()}>Horaires d'ouvertures %</button>
      <ul
        ref={list}
        className="max-h-0 overflow-hidden transition-all duration-500 grid grid-cols-2 gap-4 text-sm"
      >
        {cartContext.partner.openingHours.map((openingHour) => {
          const hours = [
            openingHour.startMorning,
            openingHour.endMorning,
            openingHour.startAfternoon,
            openingHour.endAfternoon,
          ];
          const isClosed = hours.every(element => element === "00:00");
          return (
            <li key={openingHour.day}>
              <h3>{openingHour.day}</h3>
              {isClosed && <p>Fermé</p>}
              {!isClosed && (
                <>
                  <p>
                    {openingHour.startMorning} - {openingHour.endMorning}
                  </p>
                  <p>
                    {openingHour.startAfternoon} - {openingHour.endAfternoon}
                  </p>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
