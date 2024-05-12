import UserForm from "../components/Form/UserForm";
import CarInfos from "../components/Sidebar/CarInfos";
import PartnerInfos from "../components/Sidebar/PartnerInfos";
import RentInfos from "../components/Sidebar/RentInfos";
import Sidebar from "../components/Sidebar/Sidebar";

export default function UserInformationsPage() {
  return (
    <>
      <Sidebar>
        <h1 className="font-extendedBold text-3xl text-white">
          Louez l'Audi de vos rêves
        </h1>
        <PartnerInfos />
        <CarInfos />
        <RentInfos />
      </Sidebar>
      <section className="slide-in-from-bottom w-3/4 flex flex-col gap-12 p-4 h-screen overflow-y-scroll">
        <UserForm />
      </section>
    </>
  );
}
