import InputText from "../Inputs/InputText";
import Select from "../Inputs/Select";

export default function UserForm() {
  const nbYearsDrivingLicenseOptions = [
    
    { label: "1 an et plus", value: "1 an et plus" },
    { label: "5 ans et plus", value: "5 ans et plus" },
    { label: "7 ans et plus", value: "7 ans et plus" },
    { label: "8 ans et plus", value: "8 ans et plus" },
    { label: "9 ans et plus", value: "9 ans et plus" },
  ];

  return (
    <form>
      <InputText label="Nom" type="text" name="lastname" />
      <InputText label="Prénom" type="text" name="firstname" />
      <Select
        label="Nombre d'années de permis"
        options={nbYearsDrivingLicenseOptions}
      />
      <button type="button">Valider</button>
    </form>
  );
}
