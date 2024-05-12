import { CATALOG } from "../dummy-cars";
import { PARTNERS } from "../dummy-partners";

export default function cartReducer(cart, action) {
  const { carSelected, nbKilometers, options, totalPrice, partner, userInfos, currentPage } =
    cart;
  switch (action.type) {
    case "SELECT_TAB": {
      return { ...cart, currentPage: action.page };
    }
    case "SELECT_PARTNER": {
      console.log(action);
      const partnerFound = PARTNERS.find((partner) => {
        return partner.name === action.partnerName;
      });

      return {
        ...cart,
        currentPage: "Choix du véhicule",
        partner: partnerFound,
        dates: { start: action.startRent, end: action.endRent },
      };
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
      return {
        ...cart,
        totalPrice: totalPrice + 15,
        nbKilometers: nbKilometers + 100,
      };
    }
    case "DECREMENT_KILOMETERS": {
      if (nbKilometers === 100) {
        return cart;
      }

      return {
        ...cart,
        totalPrice: totalPrice + 15,
        nbKilometers: nbKilometers + 100,
      };
    }
    case "TOGGLE_OPTION": {
      let updatedTotalPrice = totalPrice;
      let updatedOptions = [...options];
      const existingOption = updatedOptions.findIndex(option => {
        return option.id === action.option.id;
      });

      if (existingOption === -1) {
        updatedOptions.push(action.option);
        updatedTotalPrice += action.option.price;
      } else {
        updatedOptions = updatedOptions.filter(option => {
          return option.id !== action.option.id;
        });
        updatedTotalPrice -= action.option.price;
      }

      return {
        ...cart,
        totalPrice: updatedTotalPrice,
        options: updatedOptions,
      };
    }
  }
}
