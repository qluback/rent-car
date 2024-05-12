import { CATALOG } from "../dummy-cars";
import CategoriesMenu from "./CategoriesMenu";
import Car from "./Car";
import { useState } from "react";

export default function CarResults() {
  const categories = [
    "SUV",
    "Berline",
    "Cabriolet",
    "Citadine",
    "Break",
    "Coupé",
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  function handleSelectCategory(category) {
    console.log(category);
    setActiveCategory(category);
  }

  return (
    <section>
      <CategoriesMenu
        categories={categories}
        activeCategory={activeCategory}
        onSelect={handleSelectCategory}
      />
      <ul className="slide-in-from-bottom grid grid-cols-4 gap-8">
        {CATALOG.map((range) => {
          return range.models.map((model) => {
            if (model.category === activeCategory) {
              return (
                <li key={model.id}>
                  <Car
                    modelId={model.id}
                    image=""
                    title={model.name}
                    category={model.category}
                    price="1000"
                    rangeId={range.id}
                  />
                </li>
              );
            }
          });
        })}
      </ul>
    </section>
  );
}
