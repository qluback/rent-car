import { CATALOG } from "../dummy-cars";

export default function cartReducer(cart, action) {
  const { carSelected, options, totalPrice, partner, userInfos, currentPage } =
    cart;
  switch (action.type) {
    case "SELECT_TAB": {
      return { ...cart, currentPage: action.page };
    }
    case "SELECT_CAR": {
      const rangeFound = CATALOG.find((range) => {
        return range.id === action.rangeId;
      });
      let modelFound = rangeFound.models.find((model) => {
        return model.id === action.modelId;
      });
      modelFound.tags = rangeFound.tag;

      return {
        ...cart,
        currentPage: "Choix des options",
        carSelected: modelFound,
      };
    }
    case "VALIDATE_OPTIONS": {
      return {
        ...cart,
        currentPage: "Mes informations",
      };
    }
    case "INCREMENT_KILOMETERS": {
      const updatedOptions = { ...options };
      updatedOptions.nbKilometers += 100;
      console.log(updatedOptions);

      return {
        ...cart,
        totalPrice: totalPrice + 15,
        options: updatedOptions,
      };
    }
    case "DECREMENT_KILOMETERS": {
      if (options.nbKilometers === 100) {
        return cart;
      }
      const updatedOptions = { ...options };
      updatedOptions.nbKilometers -= 100;
      console.log(updatedOptions);

      return {
        ...cart,
        totalPrice: totalPrice - 15,
        options: updatedOptions,
      };
    }
    case "TOGGLE_OPTION": {
      let updatedTotalPrice = totalPrice;
      const updatedOptions = { ...options };
      const existingOption = options[action.option.id];
      if (existingOption === undefined) {
        updatedOptions[action.option.id] = action.option;
        updatedTotalPrice += action.option.price;
      } else {
        delete updatedOptions[action.option.id];
        updatedTotalPrice -= action.option.price;
      }

      return {
        ...cart,
        totalPrice: updatedTotalPrice,
        options: updatedOptions,
      };
    }
    // case "ADD_ITEM": {
    //   const updatedItems = [...items];
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   const existingItem = updatedItems[existingItemIndex];
    //   if (existingItem) {
    //     const updatedItem = { ...existingItem };
    //     updatedItem.quantity += 1;
    //     updatedItems[existingItemIndex] = updatedItem;
    //   } else {
    //     const carFound = CATALOG.find((car) => car.id === id);

    //     updatedItems.push({
    //       ...carFound,
    //       quantity: 1,
    //     });
    //   }

    //   return { items: updatedItems, isOpen: isOpen };
    // }
    // case "REMOVE_ITEM": {
    //   let updatedItems = [...cart.items];
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   const existingItem = updatedItems[existingItemIndex];
    //   if (existingItem) {
    //     updatedItems = updatedItems.filter((item) => item.id !== id);
    //   }

    //   return { items: updatedItems, isOpen: isOpen };
    // }
    // case "INCREMENT_QUANTITY": {
    //   const updatedItems = [...cart.items];
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   const existingItem = updatedItems[existingItemIndex];
    //   if (existingItem) {
    //     const updatedItem = { ...existingItem };
    //     updatedItem.quantity += 1;
    //     updatedItems[existingItemIndex] = updatedItem;
    //   }

    //   return { items: updatedItems, isOpen: isOpen };
    // }
    // case "DECREMENT_QUANTITY": {
    //   const updatedItems = [...cart.items];
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   const existingItem = updatedItems[existingItemIndex];
    //   if (existingItem) {
    //     const updatedItem = { ...existingItem };
    //     updatedItem.quantity -= 1;
    //     updatedItems[existingItemIndex] = updatedItem;
    //   }

    //   return { items: updatedItems, isOpen: isOpen };
    // }
    // case "TOGGLE_CART": {
    //   return { ...cart, isOpen: !cart.isOpen };
    // }
    // case "CLOSE_CART": {
    //   return { ...cart, isOpen: false };
    // }
  }
}
