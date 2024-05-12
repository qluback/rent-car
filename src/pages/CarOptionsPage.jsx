import { useContext } from "react";
import { CartDispatchContext } from "../store/CartContext";
import { CartContext } from "../store/CartContext";
import doorIcon from "../assets/svg/door-open-l-white.svg";
import userIcon from "../assets/svg/user-l-white.svg";
import trunkIcon from "../assets/svg/trunk-open-l-white.svg";
import Counter from "../components/Counter";
import PartnerInfos from "../components/Sidebar/PartnerInfos";
import { OPTIONS } from "../dummy-options";
import Sidebar from "../components/Sidebar/Sidebar";

export default function CarOptionsPage() {
  const cartContext = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const car = cartContext.carSelected;
  // console.log(car);
  let imageUrl = `https://picsum.photos/id/${Math.floor(
    Math.random() * 90
  )}/1920/1080`;

  return (
    <>
      <Sidebar>
        <h1 className="font-extendedBold text-3xl text-white">
          Louez l'Audi de vos rêves
        </h1>
        <PartnerInfos />
        <div className="border-1 border-white text-white w-full p-4">
          <h3 className="text-xl uppercase mb-4">Prix réservation</h3>
          <p className="text-xl font-wideNormal mb-4">
            <span className="text-3xl">{cartContext.totalPrice}€</span> TTC
          </p>
          <button
            className="font-wideNormal bg-white text-black h-16 w-full"
            onClick={() =>
              dispatch({
                type: "VALIDATE_OPTIONS",
              })
            }
          >
            Valider
          </button>
        </div>
      </Sidebar>
      <section className="slide-in-from-bottom w-3/4 flex flex-col gap-12 p-4 h-screen overflow-y-scroll">
        <div>
          <img src={imageUrl} alt="" className="w-1/2 m-auto mb-2" />
          <h3 className="text-xl uppercase">Location</h3>
          <h1 className="text-3xl font-extendedNormal">{car.name}</h1>
          <p className="font-wideNormal">{car.description}</p>
          <ul className="flex gap-4 my-2">
            <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
              <span>{car.number_doors}</span>
              <img src={doorIcon} alt="" className="w-6" />
            </li>
            <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
              <span>{car.number_places}</span>
              <img src={userIcon} alt="" className="w-6" />
            </li>
            <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
              <span>{car.number_luggages}</span>
              <img src={trunkIcon} alt="" className="w-6" />
            </li>
          </ul>
          <p className="font-wideLight">{car.incentive_text}</p>
          {/* <ul>
              {car.tags.map((tag) => {
                return <li key={tag}>{tag}</li>;
              })}
            </ul> */}
        </div>
        <div>
          <h3 className="text-xl uppercase">Options disponibles</h3>
          <ul className="flex flex-col gap-4 bg-gray-100 p-4">
            <li className="flex flex-col gap-4 pb-4 border-b-2 border-black">
              <h4 className="text-lg font-wideNormal">
                Besoin de plus de kilomètres ?
              </h4>
              <p>Faites varier le forfait kilométrique</p>
              <Counter />
            </li>
            {OPTIONS.map((option, index) => {
              let cssClassesLi =
                "flex flex-col gap-4 pb-4 border-b-2 border-black";
              if (index + 1 !== OPTIONS.length) {
                cssClassesLi += " border-b-2 border-black";
              }
              return (
                <li key={option.id} className={cssClassesLi}>
                  <h4 className="text-lg font-wideNormal">{option.title}</h4>
                  {option.content}
                  <div className="flex gap-8">
                    <span className="font-wideNormal text-xl">
                      {option.price}€ TTC/jour
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        id={option.id}
                        onClick={() =>
                          dispatch({ type: "TOGGLE_OPTION", option: option })
                        }
                      />
                      <label htmlFor={option.id}>Ajouter</label>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
    // <section className="flex flex-col gap-12 px-12">
    //   {/* <p>{cartContext.carSelected.id}</p> */}
    //   <div className="flex gap-12">
    //     <div className="w-2/3 flex flex-col gap-12">
    //       <div>
    //         <img src={imageUrl} alt="" className="w-1/2 m-auto mb-2" />
    //         <h3 className="text-xl uppercase">Location</h3>
    //         <h1 className="text-3xl font-extendedNormal">{car.name}</h1>
    //         <p className="font-wideNormal">{car.description}</p>
    //         <ul className="flex gap-4 my-2">
    //           <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
    //             <span>{car.number_doors}</span>
    //             <img src={doorIcon} alt="" className="w-6" />
    //           </li>
    //           <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
    //             <span>{car.number_places}</span>
    //             <img src={userIcon} alt="" className="w-6" />
    //           </li>
    //           <li className="flex items-center gap-2 bg-black text-white p-2 rounded-md">
    //             <span>{car.number_luggages}</span>
    //             <img src={trunkIcon} alt="" className="w-6" />
    //           </li>
    //         </ul>
    //         <p className="font-wideLight">{car.incentive_text}</p>
    //         {/* <ul>
    //           {car.tags.map((tag) => {
    //             return <li key={tag}>{tag}</li>;
    //           })}
    //         </ul> */}
    //       </div>
    //       <div>
    //         <h3 className="text-xl uppercase">Options disponibles</h3>
    //         <ul className="flex flex-col gap-4 bg-gray-100 p-4">
    //           <li className="flex flex-col gap-4 pb-4 border-b-2 border-black">
    //             <h4 className="text-lg font-wideNormal">
    //               Besoin de plus de kilomètres ?
    //             </h4>
    //             <p>Faites varier le forfait kilométrique</p>
    //             <Counter />
    //           </li>
    //           {OPTIONS.map((option, index) => {
    //             let cssClassesLi =
    //               "flex flex-col gap-4 pb-4 border-b-2 border-black";
    //             if (index + 1 !== OPTIONS.length) {
    //               cssClassesLi += " border-b-2 border-black";
    //             }
    //             return (
    //               <li key={option.id} className={cssClassesLi}>
    //                 <h4 className="text-lg font-wideNormal">{option.title}</h4>
    //                 {option.content}
    //                 <div className="flex gap-8">
    //                   <span className="font-wideNormal text-xl">
    //                     {option.price}€ TTC/jour
    //                   </span>
    //                   <div className="flex gap-2">
    //                     <input
    //                       type="checkbox"
    //                       id={option.id}
    //                       onClick={() =>
    //                         dispatch({ type: "TOGGLE_OPTION", option: option })
    //                       }
    //                     />
    //                     <label htmlFor={option.id}>Ajouter</label>
    //                   </div>
    //                 </div>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="w-1/3">
    //       <Summary>
    //         <PartnerInfos />
    //         <div className="bg-gray-100 p-4 flex flex-col">
    //           <h3 className="text-xl uppercase mb-4">Prix réservation</h3>
    //           <p className="text-xl font-wideNormal mb-4">
    //             <span className="text-3xl">{cartContext.totalPrice}€</span> TTC
    //           </p>
    //           <button
    //             className="font-wideNormal bg-black text-white h-16"
    //             onClick={() =>
    //               dispatch({
    //                 type: "VALIDATE_OPTIONS",
    //               })
    //             }
    //           >
    //             Valider
    //           </button>
    //         </div>
    //       </Summary>
    //     </div>
    //   </div>
    // </section>
  );
}
