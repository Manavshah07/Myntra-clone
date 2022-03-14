import { CLEAR_FILTERS, FILTER_PRODUCTS, UPDATE_FILTERS } from "./actions";

export const filterReducer = (state, action) => {
  console.log(action.type);  
  switch (action.type)
     {
        case UPDATE_FILTERS:
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };
    
        case FILTER_PRODUCTS:
            let temporaryProducts = [...state.allProducts];
            if (state.filters.gender) {
              temporaryProducts = temporaryProducts.filter(
                (product) => product.gender === state.filters.gender
              );
            }
            if (state.filters.brand) {
              temporaryProducts = temporaryProducts.filter(
                (product) => product.brand === state.filters.brand
              );
            }
            if (state.filters.category) {
              temporaryProducts = temporaryProducts.filter(
                (product) => product.category === state.filters.category
              );
            }
            if (state.filters.price) {
              if (state.filters.price === "highToLow") {
                temporaryProducts.sort((a, b) => b.price - a.price);
              }
              if (state.filters.price === "lowToHigh") {
                temporaryProducts.sort((a, b) => a.price - b.price);
              }
            }

            return { ...state, filteredProducts: temporaryProducts };

          case CLEAR_FILTERS:
            return {
              ...state,
              filteredProducts: state.allProducts,
              filters: {
                gender: "",
                brand: "",
                price: "",
              },
            };

    default:
      return state;
  }
};
