import React from "react";
import FilterProvider from "../ProductsContext";
import Breadcrums from "./DetailsPage/Breadcrumbs";
import FilterActions from "./FilterActions/FilterActions";
import Listing from "./Listing/Listing";
import Navbar from "./Navbar/Navbar";
import Sort from "./Sort/Sort";

const HomePage = () => {
  return (
    <>
      <FilterProvider>
        <Breadcrums title="Home/Shirt" />
        <Sort />
        <div className="outer-wrapper">
          <FilterActions />
          <Listing/>
        </div>
      </FilterProvider>
    </>
  );
};

export default HomePage;
