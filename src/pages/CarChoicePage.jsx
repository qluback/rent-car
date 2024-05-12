import CarResults from "../components/CarResults";
import PartnerInfos from "../components/Sidebar/PartnerInfos";
import Sidebar from "../components/Sidebar/Sidebar";

export default function CarChoicePage() {
  return (
    <>
      <Sidebar>
        <h1 className="font-extendedBold text-3xl text-white">
          Louez l'Audi de vos rêves
        </h1>
        <PartnerInfos fullDisplay={true} />
      </Sidebar>
      <section className="w-3/4 p-12 h-screen overflow-y-scroll">
        <CarResults />
      </section>
    </>
  );
}
