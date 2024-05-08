import Collapse from "../Collapse";

export default function PartnerInfos() {
  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-xl uppercase mb-4">Mon agence</h3>
      <h4 className="font-typeBold">Audi rent PARIS WAGRAM</h4>
      <p className="mb-2">21 rue Cardinet - 75017 PARIS</p>
      <p>wagram@audi-rent.fr</p>
      <p className="mb-2">01 02 03 04 05</p>
      <p className="mb-2">Départ le 29/09 - Retour le 30/09</p>
      <Collapse />
    </div>
  );
}
