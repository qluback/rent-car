import { useState } from "react";

export default function InputText({ label, props }) {
  const [isValid, setIsValid] = useState(null);

  function handleChange(value) {
    if (value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        {...props}
        className="border-b-2 border-black"
        onChange={(event) => handleChange(event.currentTarget.value)}
      />
      {isValid === false && <p className="text-red-500">Erreur</p>}
    </div>
  );
}
