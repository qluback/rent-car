export const OPTIONS = [
  {
    id: "pack_partial_purchase",
    title: "Pack Rachat Partiel de Franchise",
    content: `
      <ul>
        <li>
          Remboursement partiel de franchise en cas d’accident
          responsable avec tiers identifié et en cas de vol du
          véhicule
        </li>
      </ul>
      <div className="text-sm">
        <p>Reste à charge :</p>
        <ul>
          <li>
            500 € en cas d’accident responsable avec un tiers
            identifié
          </li>
          <li>1000 € en cas de vol</li>
        </ul>
      </div>
    `,
    price: 7,
  },
  {
    id: "pack_premium",
    title: "Pack Premium",
    content: `
      <ul>
        <li>
          Remboursement total de la franchise en cas de sinistre
          responsable avec un tiers identifié et de vol
        </li>
        <li>
          Rachat de l’exclusion bris de glace pour le pare-brise, les
          glaces latérales et la lunette arrière
        </li>
        <li>Protection juridique route</li>
        <li>SOS constat amiable</li>
      </ul>
      <div className="text-sm">
        <p>
          Reste à charge 0 € en cas d’accident responsable avec un
          tiers identifié ou en cas de vol du véhicule
        </p>
      </div>
    `,
    price: 12,
  },
  {
    id: "pack_young",
    title: "Pack Jeune",
    content: `
      <ul>
        <li>
          Permet à un locataire ou conducteur déclaré, titulaire d’un
          permis B depuis plus d’un an de conduire les véhicules de
          catégories A1 et A3
        </li>
      </ul>
      <div className="flex gap-8">
        <span className="font-wideNormal text-xl">
          35,00€ TTC/jour
        </span>
        <div className="flex gap-2">
          <input type="checkbox" id="option_1" />
          <label htmlFor="option_1">Ajouter</label>
        </div>
      </div>
    `,
    price: 35,
  },
];