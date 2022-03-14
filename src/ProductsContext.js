import React, { useEffect, useReducer } from "react";
import { CLEAR_FILTERS, FILTER_PRODUCTS, UPDATE_FILTERS } from "./actions";
import { filterReducer } from "./filterReducer";
import productsData from "./ProductsData";

export const ProductsContext = React.createContext();

const intialState = {
  allProducts: productsData,
  filteredProducts: [],
  filters: {
    gender: "",
    brand: "",
    price: "",
    category: ""
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, intialState);

  useEffect(() => {
    // console.log("FilterProvider", state.filters);
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const updateFilters = (e) => {
    const name = e.target.name;
    const value = e.target.id;
    // console.log(e, name, value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => dispatch({ type: CLEAR_FILTERS });

  return (
    <ProductsContext.Provider value={{ ...state, updateFilters, clearFilters }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default FilterProvider;
