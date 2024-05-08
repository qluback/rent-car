import InputText from "../components/InputText";
import Select from "../components/Select";
import CarInfos from "../components/Summary/CarInfos";
import PartnerInfos from "../components/Summary/PartnerInfos";
import Summary from "../components/Summary/Summary";

export default function UserInformationsPage() {
  const nbYearsDrivingLicenseOptions = [
    { label: "1 an et plus", value: "1 an et plus" },
    { label: "5 ans et plus", value: "5 ans et plus" },
    { label: "7 ans et plus", value: "7 ans et plus" },
    { label: "8 ans et plus", value: "8 ans et plus" },
    { label: "9 ans et plus", value: "9 ans et plus" },
  ];

  return (
    <section className="flex gap-12 px-12">
      <div className="w-2/3 flex flex-col gap-12">
        <form>
          <InputText label="Nom" type="text" name="lastname" />
          <InputText label="Prénom" type="text" name="firstname" />
          <Select label="Nombre d'années de permis" options={nbYearsDrivingLicenseOptions} />
        </form>
      </div>
      <div className="w-1/3">
        <Summary>
          <CarInfos />
          <PartnerInfos />
        </Summary>
      </div>
    </section>
  );
}
