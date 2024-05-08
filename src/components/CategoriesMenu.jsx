export default function CategoriesMenu({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <ul className="flex w-full my-4">
      {categories.map((category, index) => {
        let cssClasses =
          "cursor-pointer flex-1 text-center hover:text-gray-300";
        if (category === activeCategory) {
          cssClasses += " border-b-2 border-black";
        }

        return (
          <li key={index} className={cssClasses}>
            <button className="font-wideBold w-full py-4" onClick={() => onSelect(category)}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
